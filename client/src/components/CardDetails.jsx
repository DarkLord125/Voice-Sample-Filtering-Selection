/* eslint-disable react/prop-types */
import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import toast, { Toaster } from 'react-hot-toast';

const Widget = styled('div')(() => ({
  padding: 11,
  borderRadius: 10,
  border: '2px solid lightgrey',
  width: '400px',
  height: '150px',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
}));

const CoverImage = styled('div')({
  width: 25,
  height: 25,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  marginTop: '7px',
});

const CardDetails = ({ data }) => {
  const [playing, setPlaying] = useState(false);
  const [selected, setSelected] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
    setPlaying(true);
  };

  const handlePause = () => {
    audioRef.current.pause();
    setPlaying(false);
  };

  const handleEnded = () => {
    setPlaying(false);
  };

  const handleToggleSelect = () => {
    setSelected(!selected);
    if (!selected) {
      toast.success(`Selected audio: ${data.name}-${data.type}`);
    }
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Toaster position="top-center" reverseOrder={false} />
      <Widget
        isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <CoverImage>
            <img src={data.countryURL} alt="" />
          </CoverImage>
          <Box sx={{ flex: '0.8 0', }}>
            <Typography noWrap sx={{ fontWeight: '300' }}>
               <b>{data.name} - {data.type}</b>
            </Typography>
          </Box>
          <Box sx={{flex:'0.05'}}>
            <IconButton
              aria-label={selected ? 'selected' : 'select'}
                sx={{
                  padding: '2px',
                  backgroundColor: '#7759fc',
                  fontSize: '14px',
                  borderRadius: '25%',
                  color: '#fff',
                  width: '65px',
                  display: selected || isHovered ? 'block' : 'none',
                  height: '30px',
                  '&:hover': {
                    backgroundColor: '#7759fc',
                  },
                }}
                onClick={handleToggleSelect}
              >
                <b>{selected ? 'Selected' : 'Select'}</b>
              </IconButton>
           </Box>
          <IconButton
            color="purple"
            aria-label={playing ? 'pause' : 'play'}
            onClick={playing ? handlePause : handlePlay}
            sx={{
              backgroundColor: '#e0dafe',
              padding: '4px',
            }}
          >
            {playing ? (
              <PauseRounded sx={{ fontSize: '1.7rem', color: '#7f61fe' }} />
            ) : (
              <PlayArrowRounded sx={{ fontSize: '1.7rem', color: '#7f61fe' }} />
            )}
            <audio ref={audioRef} src={data.voiceURL} onEnded={handleEnded} />
          </IconButton>
        </Box>
        <Box sx={{ ml: 2, mt: 0.6 }}>
          <Typography variant="caption" color="text.secondary">
            {data.gender}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 3, borderRadius: 3, border: '1px' }}>
            {data.language}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 3, borderRadius: 3, border: '1px' }}>
            {data.languageCode}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 3, borderRadius: 3, border: '1px' }}>
            {data.countryCode}
          </Typography>
        </Box>
      </Widget>
    </Box>
  );
};

export default CardDetails;
