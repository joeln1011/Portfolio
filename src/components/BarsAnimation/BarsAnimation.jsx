import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

import { styled } from '@mui/material/styles';
const BarsBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  component: 'div',
  width: '100%',
  height: '100%',
  background: '#1f242d',
  margin: 0,
  padding: 0,
  border: 'none',
  boxSizing: 'border-box',
  transform: 'translateY(-100%)',
  animation: active
    ? 'hideBars 0.5s ease-in-out both'
    : 'showBars 0.5s ease-in-out both',
  animationDelay: 'calc(0.1s * var(--i))',
  '@keyframes showBars': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(0%)',
    },
  },
  '@keyframes hideBars': {
    '0%': {
      transform: 'translateY(0%)',
    },
    '100%': {
      transform: 'translateY(-100%)',
    },
  },
}));

const BarsAnimation = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true); // play hideBars
    const t = setTimeout(() => setActive(false), 1100); // then showBars
    return () => clearTimeout(t);
  }, []);
  return (
    <Box
      sx={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      <BarsBox active={active} style={{ '--i': 6 }} />
      <BarsBox active={active} style={{ '--i': 5 }} />
      <BarsBox active={active} style={{ '--i': 4 }} />
      <BarsBox active={active} style={{ '--i': 3 }} />
      <BarsBox active={active} style={{ '--i': 2 }} />
      <BarsBox active={active} style={{ '--i': 1 }} />
    </Box>
  );
};

export default BarsAnimation;
