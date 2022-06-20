import React, { createContext, useReducer } from 'react';
import Grid from '@mui/material/Grid';
import MultiSelect from '../../components/Select/MultiSelect';
import BasicSelect from '../../components/Select/BasicSelect'
import {categories, difficulty} from './selection-data'
import BasicSlider from '../../components/Slider/Slider';
import Button from '@mui/material/Button';
import Layout from '../../components/Layout'
import { useNavigate } from 'react-router-dom';

export const QuizParams = createContext(null);

function reducer(state, action) {
  return {
    ...state,
    [action.type]: action.value
  }
}
export default function Homepage() {
  let navigate = useNavigate()
  const [params, dispatch] = useReducer(reducer ,{
    cat: [],
    diff: '',
    numberQues: 11,
    timeLimit: 0,
  });

  const contextValue = {params, dispatch}
  
  function handleClick() {
    let categories = params.cat.map(i => 
      i.toLowerCase().replace('&', 'and').replaceAll(' ', '_')
    ).join(',');
    let filter = `categories=${categories}&limit=${params.numberQues}&diffculty=${params.diff}`
    navigate(`/play?${filter}`)
  }

  return (
	  <Layout>
      <QuizParams.Provider value={contextValue}>
      <Grid
        container
        rowGap={{xs: '2rem', sm: '3rem', md: '5rem'}}
        width='100%'
        direction='column'
        marginTop={{xs: '1.5rem', sm: '4.5rem'}}
      >
        <Grid
          container
          direction={{xs: 'column', sm: 'row'}}
          justifyContent='space-around'
          rowGap={{xs: '2rem'}}
          alignItems='center'
        >
          <Grid 
            item 
            width={{xs: '100%', sm: '45%'}}
          >
            <MultiSelect items={Object.keys(categories)} label={'Categories'} type='cat'/>
          </Grid>
          <Grid 
            item 
            width={{xs: '100%', sm: '45%'}}
          >
            <BasicSelect items={Object.keys(difficulty)} label='Difficulty' type='diff'/>
          </Grid>
        </Grid>
        <Grid 
          item 
          xs={1}
          width={{xs: '100%', sm: '100%'}}
        >
          <BasicSlider min={1} max={20} step={1} description={'Number of questions: '} type='numberQues'/>
        </Grid>  

        <Grid item xs={1} width='100%'>
          <Button 
            variant="contained" 
            sx={{
              width: '100%', 
              background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
              padding: '.5rem 0',
              fontSize: '1.25rem'
            }}
            startIcon={<i className='bx bx-rocket'></i>}
            onClick={handleClick}
          >
            Start
          </Button>
        </Grid>
      </Grid>
      </QuizParams.Provider>
    </Layout>
  )
}
