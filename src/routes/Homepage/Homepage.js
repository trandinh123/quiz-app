import React from 'react';
import Grid from '@mui/material/Grid';
import Logo from '../../components/Logo'
import MultiSelect from '../../components/Select/MultiSelect';
import BasicSelect from '../../components/Select/BasicSelect'
import {categories, difficulty} from './selection-data'
import BasicSlider from '../../components/Slider/Slider';
import Button from '@mui/material/Button';

export default function Homepage() {
  return (
	  <Grid 
      container
      width='100vw'
      justifyContent="center"
      alignItems="center"
      paddingTop='2rem'
      paddingX ='4rem'
      rowGap='1.75rem'
      direction="column"
      columns={{xs: 1}}
    >
      <Grid 
        item 
        xs={1}
        width='100%'
      >
        <Logo/>
      </Grid>
      <Grid 
        item 
        xs={1}
        width='100%'
      >
        <MultiSelect items={Object.keys(categories)} label={'Categories'}/>
      </Grid>
      <Grid 
        item 
        xs={1}
        width='100%'
      >
        <BasicSelect items={Object.keys(difficulty)} label='Difficulty'/>
      </Grid>
      <Grid 
        item 
        xs={1}
        width='100%'
      >
        <BasicSlider min={1} max={20} step={1} description={'Number of questions: '}/>
      </Grid>  
      <Grid 
        item 
        xs={1}
        width='100%'
      >
        <BasicSlider min={10} max={30} step={1} description={'Time limit(sec): '}/>
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
          startIcon={<i class='bx bx-rocket'></i>}
        >
          Start
        </Button>
      </Grid>
    </Grid>
  )
}
