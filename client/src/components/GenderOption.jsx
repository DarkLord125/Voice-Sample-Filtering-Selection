/* eslint-disable react/prop-types */
import { ListItem, ListItemText, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FemaleOutlined, MaleOutlined, TransgenderOutlined } from '@mui/icons-material';

const GenderIconButtons = ({ selectedGender, handleIconClick }) => (
  <div style={{ display: 'flex', gap: '12px' }}>
    {['Female', 'Male', 'Other'].map((gender) => (
      <motion.i
        key={gender}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileTap={{ scale: 0.75 }}
      >
        <IconButton
          edge="end"
          aria-label={gender}
          onClick={() => handleIconClick(gender)}
          color={selectedGender === gender ? 'inherit' : 'black'}
        >
          {gender === 'Female' && <FemaleOutlined sx={{ fontSize: 30 }} />}
          {gender === 'Male' && <MaleOutlined sx={{ fontSize: 30 }} />}
          {gender === 'Other' && <TransgenderOutlined sx={{ fontSize: 30 }} />}
        </IconButton>
      </motion.i>
    ))}
  </div>
);

const GenderFilterItem = ({ selectedGender, handleIconClick }) => {
  
  return (
  <ListItem>
    <ListItemText
      primary="Gender"
      primaryTypographyProps={{
        variant: 'body1',
        sx: { fontSize: '18px', color: '#4f5055' },
      }}
    />
    <GenderIconButtons selectedGender={selectedGender} handleIconClick={handleIconClick} />
  </ListItem>
)};

export default GenderFilterItem;
