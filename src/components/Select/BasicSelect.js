import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { QuizParams } from '../../page/Homepage/Homepage';

export default function BasicSelect({items, label, type}) {
  const [val, setVal] = React.useState('');
  const { dispatch } = React.useContext(QuizParams);
  const handleChange = (event) => {
    setVal(event.target.value);
    dispatch({type: type, value: event.target.value});
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
          items.map(item => <MenuItem key={item} value={item}>{item}</MenuItem>)
        }
      </Select>
    </FormControl>
  );
}
