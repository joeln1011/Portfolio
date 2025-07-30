import Box from '@mui/material/Box';

const MainPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '20px', sm: '30px', md: '50px' },
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: 'center',
        height: { xs: 'auto', md: '100vh' },
        padding: { xs: '80px 5% 20px', md: '60px 9% 0' },
        color: '#fff',
        visibility: 'hidden',
        opacity: 0,
        animation: 'showContent 1.5s linear forwards',
        animationDelay: '1.6s',
        '@keyframes showContent': {
          '100%': {
            visibility: 'visible',
            opacity: 1,
            overflow: 'auto',
          },
        },
      }}
    ></Box>
  );
};

export default MainPage;
