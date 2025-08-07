import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Resume', to: '/resume' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
  ];

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
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            color: '#fff',
            fontSize: '30px',
            '&:hover': {
              color: '#7cf03d',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              bgcolor: '#1f242d',
              width: '100%',
              padding: 2,
              alignItems: 'center',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 4,
            }}
          >
            {navLinks.map((link) => (
              <NavBarItem
                key={link.to}
                component={Link}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
                sx={{ marginLeft: 0 }}
              >
                {link.label}
              </NavBarItem>
            ))}
          </Box>
        </Drawer>
      </Box>
      <Box component="nav" display={{ xs: 'none', md: 'flex' }}>
        {navLinks.map((link) => (
          <NavBarItem key={link.to} component={Link} to={link.to}>
            {link.label}
          </NavBarItem>
        ))}
      </Box>
    </Box>
  );
};

export default NavBar;
