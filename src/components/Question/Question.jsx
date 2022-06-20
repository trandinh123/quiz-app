import {Typography } from '@mui/material'
import React from 'react'

export default function Question({question, curQuest}) {
  return (
	<Typography gutterBottom paragraph sx={{
		fontSize: '1.25rem',
		padding: '.5rem',
		fontWeight: 550,
		borderBottom: '1px solid black'
	}}>
		{`Q${curQuest}. ${question.question}`}
	</Typography>
  )
}
