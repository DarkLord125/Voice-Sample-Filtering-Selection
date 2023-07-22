/* eslint-disable react/prop-types */
/* eslint-disable no-empty-pattern */
import { Drawer, List, Divider } from '@mui/material';
import { useState } from 'react';
import Box from '@mui/material/Box';
import {RadioButtonRow, LanguageFilterItem} from './LanguageButtons';
import CheckboxGroup, {AgeFilterItem} from './AgeCheckBoxes';
import { languagesRow, ageGroups } from "../utilities/Categories";
import GenderFilterItem from './GenderOption';
import FilterHeaderItem from './FilterReset';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';


const Filterbar = () => {

  const drawerWidth = 390;
  
  const [{}, dispatch] = useStateValue();

  // Gender Options
  const [selectedGender, setSelectedGender] = useState(null);
  const handleIconClick = (gender) => {
    setSelectedGender(gender);
    dispatch({ type: actionType.SET_GENDER_FILTER, genderFilter: gender });
  };

  // Language Radio button Options
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const handleRowChange = (event) => {
    setSelectedLanguage(event.target.value);
    dispatch({ type: actionType.SET_LANGUAGE_FILTER, languageFilter: event.target.value });
  };

  // Age Options
  const [checked, setChecked] = useState([]);

  const handleCheckboxChange = (name) => {
    if (checked.includes(name)) {
      // If the checkbox is already checked, remove it from the array
      setChecked(checked.filter((item) => item !== name));
    } else {
      // If the checkbox is not checked, add it to the array
      setChecked([...checked, name]);
    }
    dispatch({ type: actionType.SET_AGE_FILTER, ageFilter: name });     
  }

  return (
    <Drawer 
    anchor="left" 
    open={true}
    variant="persistent"
    sx={{
      width: drawerWidth,
      "& .MuiDrawer-paper": {
        backgroundColor: "#fbfaff",
        boxSizing: "border-box",
        width: drawerWidth,
        overflowY: 'auto',
        scrollbarWidth: 'thin',
        scrollbarColor: '#e0dfe2 #fbfaff',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#e0dfe2',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#fbfaff',
          borderRadius: '4px',
        },
      },
    }}
    >
      
      <List>
        {/* Filter Header and Reset */}

        <FilterHeaderItem setSelectedGender={setSelectedGender} setChecked={setChecked} setSelectedLanguage={setSelectedLanguage}/>
    
        <Divider sx={{ margin: '10px 0' }}/>

        {/* Gender Option */}
        <GenderFilterItem selectedGender={selectedGender} handleIconClick={handleIconClick}/>

        <Divider sx={{ margin: '10px 0' }}/>

        {/* Age Check Boxes */}
        <AgeFilterItem setChecked={setChecked}/>

        <Box sx={{ display: 'flex', ml: 2 }}>
          <CheckboxGroup checkboxes={ageGroups.slice(0, 2)} onChange={handleCheckboxChange} checked={checked}/>
          <Box sx={{ ml: 3 }}>
          <CheckboxGroup checkboxes={ageGroups.slice(2)} onChange={handleCheckboxChange} checked={checked}/>
          </Box>
        </Box>

        <Divider sx={{ margin: '10px 0' }}/>
      
        {/* Language Radio Buttons */}
        <LanguageFilterItem/>

        <Box sx={{ display: 'flex', ml: 2 }}>
          {languagesRow.map((row, index) => (
            <RadioButtonRow
              key={index}
              options={row}
              selectedValue={selectedLanguage}
              onChange={handleRowChange}
            />
          ))}
        </Box>
       </List>
    </Drawer>
  );
};

export default Filterbar;
