import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
const StyledBox = styled(Box)(() => ({
  component: 'div',
  width: '100%',
  height: '100%',
  background: '#1f242d',
  margin: 0,
  padding: 0,
  border: 'none',
  boxSizing: 'border-box',
  transform: 'translateY(-100%)',
  animation: 'barsAnimation 0.5s ease-in-out both',
  animationDelay: 'calc(0.1s * var(--i))',
  '@keyframes barsAnimation': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(0%)',
    },
  },
}));
const BarsAnimation = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      <StyledBox style={{ '--i': 6 }}></StyledBox>
      <StyledBox style={{ '--i': 5 }}></StyledBox>
      <StyledBox style={{ '--i': 4 }}></StyledBox>
      <StyledBox style={{ '--i': 3 }}></StyledBox>
      <StyledBox style={{ '--i': 2 }}></StyledBox>
      <StyledBox style={{ '--i': 1 }}></StyledBox>
    </Box>
  );
};

export default BarsAnimation;
