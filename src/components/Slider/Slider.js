import React from 'react'
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function BasicSlider({min, max, step, description}) {
	let [value, setValue] = React.useState(0)
	function handleChange(e) {
		setValue(e.target.value)
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
