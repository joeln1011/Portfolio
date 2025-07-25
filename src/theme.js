import { createTheme } from '@mui/material/styles';

const NAVBAR_HEIGHT = '60px';
const CONTAINER_HEIGHT = `calc(100vh - ${NAVBAR_HEIGHT})`;

const theme = createTheme({
  portfolio: {
    navBarHeight: NAVBAR_HEIGHT,
    containerHeight: CONTAINER_HEIGHT,
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
    color: '#fff',
  },
  palette: {
    primary: {
      main: '#1f242d',
    },
    secondary: {
      main: '#7cf03d',
    },
    text: {
      primary: '#fff',
    },
    background: {
      main: '#1f242d',
    },
    action: {
      hover: '#7cf03d',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '& .MuiTypography-body1': {
            fontSize: '0.875rem',
            color: '#fff',
          },
        },
      },
    },
  },
});
export default theme;
