import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const IMAGE_WIDTH = 800;
const CarouselProject = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const validImages = Array.isArray(images) ? images : [];
  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        width: `${IMAGE_WIDTH}px`,
        height: '450px',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          transition: 'transform 0.5s',
          transform: `translateX(-${current * IMAGE_WIDTH}px)`,
        }}
      >
        {validImages.map((src, idx) => (
          <Box
            key={idx}
            sx={{
              width: `${IMAGE_WIDTH}px`,
              height: '100%',
              borderRadius: '10px',
              overflow: 'hidden',
              flexShrink: 0,
              background: '#222',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={src}
              alt={`portfolio${idx + 1}`}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          px: 2,
          transform: 'translateY(-50%)',
        }}
      >
        <IconButton sx={{ color: '#fff' }} onClick={handlePrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton sx={{ color: '#fff' }} onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default CarouselProject;
