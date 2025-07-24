import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {
  return (
    <Box
      className="header"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '2rem 9%',
        bgcolor: '#1f242d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
      }}
    >
      <Box
        className="logo"
        sx={{ fontSize: '2rem', color: '#fff', fontWeight: 700 }}
      >
        Joel Nguyen
      </Box>
      <Box>
        <MenuIcon sx={{ fontSize: '2rem', color: '#fff', display: 'none' }} />
      </Box>
      <Box className="nav" sx={{ display: 'flex' }}>
        <Box className="a">
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 500,
              marginLeft: '3.5rem',
              transition: '0.5s',
              ':hover': {
                color: '#7cf03d',
              },
            }}
          >
            Home
          </Typography>
        </Box>
        <Box className="a">
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 500,
              marginLeft: '3.5rem',
              transition: '0.5s',
              ':hover': {
                color: '#7cf03d',
              },
            }}
          >
            Service
          </Typography>
        </Box>
        <Box className="a">
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 500,
              marginLeft: '3.5rem',
              transition: '0.5s',
              ':hover': {
                color: '#7cf03d',
              },
            }}
          >
            Resume
          </Typography>
        </Box>
        <Box className="a">
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 500,
              marginLeft: '3.5rem',
              transition: '0.5s',
              ':hover': {
                color: '#7cf03d',
              },
            }}
          >
            Portfolio
          </Typography>
        </Box>
        <Box className="a">
          <Typography
            sx={{
              fontSize: '1rem',
              color: '#fff',
              fontWeight: 500,
              marginLeft: '3.5rem',
              transition: '0.5s',
              ':hover': {
                color: '#7cf03d',
              },
            }}
          >
            Contact
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
