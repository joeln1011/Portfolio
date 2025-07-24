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
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          '& .MuiTypography-body1': {
            fontSize: '0.875rem',
          },
        },
      },
    },
  },
});
export default theme;
