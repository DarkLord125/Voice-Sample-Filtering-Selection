/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, Radio, RadioGroup, ListItem, ListItemText, Typography } from '@mui/material';

export const RadioButtonRow = ({ options, selectedValue, onChange }) => (
    <FormControl sx={{ m: 1, mr: 8, color: '#adaab1' }} variant="standard">
      <RadioGroup aria-label="language" name="language" value={selectedValue} onChange={onChange}>
        {options.map((item) => (
          <FormControlLabel
            key={item.value}
            value={item.value}
            control={<Radio sx={{ color: '#adaab1', '&.Mui-checked': { color: '#7f58e2' } }} />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );

export const LanguageFilterItem = () => (
<ListItem>
    <ListItemText
      primary={
        <Typography sx={{ fontSize: '18px', color: '#4f5055', display: 'flex', alignItems: 'center' }}>
          Language
        </Typography>
        }
    />
</ListItem>
);
