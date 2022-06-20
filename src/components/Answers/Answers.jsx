import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Answers({answers, curQuest, userAnswer, setUserAnswer}) {
	function handleAnswerChange(e) {
		let tmp = [...userAnswer]
		tmp[curQuest] = e.target.value
		setUserAnswer(tmp);
	}
	return (
		<FormControl>
		<FormLabel id="demo-radio-buttons-group-label">Answers</FormLabel>
		<RadioGroup
			aria-labelledby="demo-radio-buttons-group-label"
			name="radio-buttons-group"
			onChange={handleAnswerChange}
		>	
			{
				answers.map(answer => 
					<FormControlLabel 
						key={answer} 
						value={answer || ''} 
						control={<Radio />} 
						label={answer} 
						sx={{
							fonSize: '1.5rem'
						}}
						checked={answer === userAnswer[curQuest]}
					/>
				)
			}
		</RadioGroup>
		</FormControl>
	)
}
