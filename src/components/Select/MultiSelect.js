import React, {useContext} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { QuizParams } from '../../page/Homepage/Homepage';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function MultipleSelectCheckmarks({items, label, type}) {
  let [val, setVal] = React.useState([]);
  const { dispatch } = useContext(QuizParams);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setVal(typeof value === 'string' ? value.split(',') : value);
    dispatch({type: type, value: event.target.value})
  };

  return (
    <FormControl  sx={{width: '100%'}}>
      <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={val}
        onChange={handleChange}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => selected.join(', ')}
        MenuProps={MenuProps}
      >
        {items.map((item) => (
          <MenuItem key={item} value={item}>
            <Checkbox checked={val.indexOf(item) > -1} />
            <ListItemText primary={item} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}