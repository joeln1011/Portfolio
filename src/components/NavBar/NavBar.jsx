import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const NavBarItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  component: 'a',
  fontSize: '20px',
  color: active ? '#7cf03d' : 'white',
  fontWeight: 500,
  marginLeft: '35px',
  textDecoration: 'none',
  transition: '0.5s',
  cursor: 'pointer',
  '&:hover, &:focus': {
    color: '#7cf03d',
  },
}));

const NavBar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '25px 9%',
        bgcolor: '#1f242d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 100,
        visibility: 'hidden',
        opacity: 0,
        animation: 'showContent 1.5s linear forwards',
        animationDelay: '1.2s',
        '@keyframes showContent': {
          '100%': {
            visibility: 'visible',
            opacity: 1,
          },
        },
      }}
    >
      <Box>
        <Typography sx={{ color: 'white', fontSize: '30px', fontWeight: 700 }}>
          Joel Nguyen
        </Typography>
      </Box>
      <Box display={{ xs: 'flex', md: 'none' }}>
        <MenuIcon
          sx={{
            color: '#fff',
            fontSize: '30px',
            cursor: 'pointer',
            '&:hover': {
              color: '#7cf03d',
            },
          }}
        />
      </Box>
      <Box component="nav" display={{ xs: 'none', md: 'flex' }}>
        <NavBarItem href="#home">Home</NavBarItem>
        <NavBarItem href="#about" active>
          Services
        </NavBarItem>
        <NavBarItem href="#projects">Projects</NavBarItem>
        <NavBarItem href="#contact">Contact</NavBarItem>
      </Box>
    </Box>
  );
};

export default NavBar;
