import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import { styled } from '@mui/material/styles';
const BoxItem = styled(Box)(() => ({
  display: 'inline-flex',
  padding: '.8rem',
  border: '.2rem solid #7cf03d',
  borderRadius: '50%',
  color: '#7cf03d',
  '&:hover': {
    backgroundColor: '#7cf03d',
    color: '#1f242d',
    boxShadow: '0 0 1rem #7cf03d',
  },
}));
const HomePage = () => {
  return (
    <Box
      position={'absolute'}
      width={'100%'}
      height={'100%'}
      padding={'10rem 9% 2rem'}
      bgcolor={'#1f242d'}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '5rem',
        color: '#fff',
      }}
    >
      <Box
        component={'div'}
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: 'clamp(3.5rem, 10vw ,5.5rem' }}
        >
          Joel Nguyen
        </Typography>
        <Typography variant="h5" display="inline-block" marginTop="1rem">
          I'm a coder
        </Typography>
        <Typography variant="body1" margin="1rem 0 2.5rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '2rem',
          }}
        >
          <Button
            sx={{
              display: 'inline-block',
              padding: '.5rem 1rem',
              bgcolor: '#7cf03d',
              border: '.2rem solid #7cf03d',
              borderRadius: '4rem',
              boxShadow: '0 0 1rem #7cf03d',
              color: '#1f242d',
              transition: '.5s',
              '&:hover': {
                bgcolor: 'transparent',
                color: '#7cf03d',
                boxShadow: 'none',
              },
            }}
          >
            Download Resume
          </Button>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <BoxItem>
              <GitHubIcon />
            </BoxItem>
            <BoxItem>
              <LinkedInIcon />
            </BoxItem>
            <BoxItem>
              <FacebookIcon />
            </BoxItem>
          </Box>
        </Box>
      </Box>

      {/* image */}
      <Box class="home-img">
        <Box
          class="img-box"
          sx={{
            position: 'relative',
            width: '32vw',
            height: '32vw%',
            borderRadius: '50%',
            padding: '.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
          }}
        >
          <Box
            class="img-item"
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              bgcolor: '#7cf03d',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              zIndex: 1,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '3rem',
                display: 'block',
                width: '85%',
                objectFit: 'cover',
                mixBlendMode: 'lighten',
              }}
            >
              <img src="src/assets/home.png" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
