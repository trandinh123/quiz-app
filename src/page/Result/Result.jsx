import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Layout from '../../components/Layout'
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
function CircularProgressWithLabel({correct, total}) {
  return (
    <Box sx={{ 
		position: 'relative', 
		display: 'inline-flex', 
	}}>
      <CircularProgress variant="determinate" value={correct * 100 / total} size={'5rem'}/>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" component="div" color="text.secondary">
          {Math.round(correct * 100 / total)}%
        </Typography>
      </Box>
    </Box>
  );
}

export default function Result() {
	let location = useLocation()
  let navigate = useNavigate()
	let correct = location.search.split('&')[0].split('=')[1]
  let total = location.search.split('&')[1].split('=')[1]
	return (
    <Layout
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        paddingY='4rem'
        border='1px solid whitesmoke'
        direction='column'
        rowGap='3rem'
        marginTop='3rem'
        sx={{
          boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75);',
          borderRadius: '10px'
        }}
      >
        <CircularProgressWithLabel correct={correct} total={total}/>
        <Typography variant='h4' align='center' sx={{

        }}>
          {`You got ${correct}/${total} correct answers`}
        </Typography>
      </Grid>
      <Button
        href='/'
        size='large'
        sx={{
          margin: '2rem',
          paddingX: '2.75rem',
          paddingY: '1rem',
          alignSelf: 'center',
          background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)',
          color: 'white',
          '&:hover': {
            background: 'white',
            color: 'black'
          }
        }}
      >
          Restart
      </Button>
    </Layout>
  )
}
