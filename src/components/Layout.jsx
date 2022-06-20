import React from 'react'
import Grid from '@mui/material/Grid';
import Logo from './Logo'

export default function Layout({children}) {
  return (
	<Grid 
      container
      width='100vw'
      paddingTop='2rem'
      paddingX ={{xs: '4rem', sm: '8rem'}}
      direction="column"
	  marginBottom={{xs: '2rem'}}
    >
		<Grid 
			item 
			xs={1}
			width='100%'
		>
        	<Logo/>
      	</Grid>
		{children}
	</Grid>
  )
}
