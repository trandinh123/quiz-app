import * as React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { Grid } from '@mui/material';

export default function LinearIndeterminate() {
  return (
    <Grid
		container
		direction='column'
		sx={{ 
			width: '100vw',
			alignItems: 'center',
			justifyContent: 'center',
			height: '100vh'
		}}
	>
		<LinearProgress 
			sx={{
				width: '80%',
				height: '1.25rem'
			}}
		/>
    </Grid>
  );
}