import React from 'react'
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Logo() {
  return (
	<Box
		sx={{
			border: '2px solid red',
			borderRadius: '4px',
			padding: '.5rem',
			display: 'grid',
			background: `-webkit-linear-gradient(
			60deg,
			hsl(240deg 100% 20%) 0%,
			hsl(289deg 100% 21%) 11%,
			hsl(315deg 100% 27%) 22%,
			hsl(329deg 100% 36%) 33%,
			hsl(337deg 100% 43%) 44%,
			hsl(357deg 91% 59%) 56%,
			hsl(17deg 100% 59%) 67%,
			hsl(34deg 100% 53%) 78%,
			hsl(45deg 100% 50%) 89%,
			hsl(55deg 100% 50%) 100%
			)`,
			WebkitBackgroundClip: "text",
			WebkitTextFillColor: "transparent"
		}}
		>
		<a href='/'>
			<Typography variant="h3" component="div" gutterBottom textAlign='center'>Quiz APP</Typography>
		</a>
    </Box>
  )
}
