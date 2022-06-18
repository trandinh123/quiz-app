import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({items, label}) {
  const [val, setVal] = React.useState('');

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <FormControl sx={{width: '100%'}}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={val}
        label={label}
        onChange={handleChange}
      >
        {
          items.map(item => <MenuItem value={item}>{item}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
}
