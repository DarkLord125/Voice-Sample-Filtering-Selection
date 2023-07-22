/* eslint-disable no-empty-pattern */
/* eslint-disable react/prop-types */
import { ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { motion } from "framer-motion";


const FilterHeaderItem = ({setSelectedGender, setChecked, setSelectedLanguage}) => {

  const [{},dispatch] = useStateValue();

  const clearAllFilter = () => {
    setSelectedGender(null);
    setChecked([]);
    setSelectedLanguage('');
    dispatch({ type: actionType.SET_GENDER_FILTER, genderFilter: null });
    dispatch({ type: actionType.SET_LANGUAGE_FILTER, languageFilter: null });
    dispatch({ type: actionType.SET_AGE_FILTER, ageFilter: null });
  }
  
  return (
    <ListItem>
      <ListItemText
        primary={(
          <Typography
            sx={{
              fontSize: '27px',
              color: '#adaab1',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            Filter
            <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
            <motion.i
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileTap={{ scale: 0.75 }}
            >
              <IconButton edge="end" aria-label="reset" sx={{ p: 0, mt:-0.5 }} onClick={clearAllFilter}>
                <RestartAltOutlinedIcon sx={{ fontSize: 20 }}/>
              </IconButton>
            </motion.i>
              <Typography variant="body2" sx={{ ml: 2, fontSize: 16 }}>
                Reset
              </Typography>
            </span>
          </Typography>
        )}
      />
    </ListItem>
  );
};

export default FilterHeaderItem;
