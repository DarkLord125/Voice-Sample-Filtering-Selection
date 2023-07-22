/* eslint-disable react/prop-types */
import { FormControl, FormControlLabel, FormGroup, Checkbox, ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { motion } from "framer-motion";

const CheckboxGroup = ({ checkboxes, onChange, checked }) => {

  return (
  <FormControl sx={{ m: 1, color: '#adaab1' }} variant="standard">
    <FormGroup >
      {checkboxes.map(({ name, label }) => (
        <FormControlLabel
          key={name}
          control={
            <Checkbox 
              name={name}
              checked={checked.includes(name)}
              onChange={() => onChange(name)} 
              sx={{ color: '#adaab1', '&.Mui-checked': { color: '#7f58e2' } }} />}
          label={label}
        />
      ))}
    </FormGroup>
  </FormControl>
  )};

export default CheckboxGroup

export const AgeFilterItem = ({setChecked}) => {

    // eslint-disable-next-line no-empty-pattern
    const [{},dispatch] = useStateValue();

    const clearAgeFilter = () => {
      setChecked([]);
      dispatch({ type: actionType.SET_AGE_FILTER, ageFilter: null });
    }
    return(
    <ListItem>
    <ListItemText
      primary={(
        <Typography
          sx={{
            fontSize: '18px',
            color: '#4f5055',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          Age
          <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.75 }}
            >
            <IconButton edge="end" aria-label="reset" sx={{ p: 0, mt:-0.5 }} onClick={clearAgeFilter}>
              <RestartAltOutlinedIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </motion.i>
            <Typography variant="body2" sx={{ ml: 2, fontSize: 16, color: '#adaab1' }}>
              Clear
            </Typography>
          </span>
        </Typography>
      )}
    />
  </ListItem>
)};


