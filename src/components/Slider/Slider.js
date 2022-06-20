import React from 'react'
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { QuizParams } from '../../page/Homepage/Homepage';

export default function BasicSlider({min, max, step, description, type}) {
	let [value, setValue] = React.useState(Math.round((min + max) / 2))

	const { dispatch } = React.useContext(QuizParams);
	
	function handleChange(e) {
		setValue(e.target.value)
		dispatch({type: type, value: e.target.value})
	}
	return (
		<div>
			<Typography id="non-linear-slider" gutterBottom>
				{description} {value}
			</Typography>
			<Slider
				value={value}
				min={min}
				step={step}
				max={max}
				onChange={handleChange}
				valueLabelDisplay="auto"
				aria-labelledby="non-linear-slider"
				sx={{
					color: '#fd1d1d'
				}}
			/>
		</div>
  	)
}
