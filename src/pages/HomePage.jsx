import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BarsAnimation from '../components/BarsAnimation/BarsAnimation';

import { styled } from '@mui/material/styles';
const SpanBox = styled(Box)(() => ({
  component: 'span',
  position: 'relative',
  display: 'inline-block',
  color: 'transparent',
  WebkitTextStroke: '0.7px #7cf03d',

  animation: 'dislayText 16s linear infinite',
  animationDelay: 'calc(-4s * var(--i))',
  '@keyframes dislayText': {
    '25%, 100%': {
      display: 'none',
    },
  },
  '&:before': {
    content: 'attr(datatype)',
    position: 'absolute',
    width: 0,
    borderRight: '2px solid #7cf03d',
    color: '#7cf03d',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    animation: 'fillText 4s linear infinite',
    '@keyframes fillText': {
      '10%, 100%': {
        width: 0,
      },
      '70%, 90%': {
        width: '100%',
      },
    },
  },
}));
const HomePage = () => {
  return (
    <Box>
      <BarsAnimation />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px',
          justifyContent: 'center',
          height: '100vh',
          padding: '60px 9% 0',
          color: '#fff',
          visibility: 'hidden',
          opacity: 0,
          animation: 'showContent 1.5s linear forwards',
          animationDelay: '1.6s',
          '@keyframes showContent': {
            '100%': {
              visibility: 'visible',
              opacity: 1,
            },
          },
        }}
      >
        {/* Introduce */}
        <Box>
          <Typography variant="h1" sx={{ fontSize: '55px' }}>
            Joel Nguyen
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: '32px',
              marginTop: '10px',
              display: 'inline-block',
            }}
          >
            I'm a &nbsp;
            <SpanBox style={{ '--i': 3 }} datatype="Frontend Developer">
              Frontend Developer
            </SpanBox>
            <SpanBox style={{ '--i': 2 }} datatype="Fullstack Developer">
              Fullstack Developer
            </SpanBox>
            <SpanBox style={{ '--i': 1 }} datatype="Designer">
              Designer
            </SpanBox>
          </Typography>
          <Box sx={{ marginTop: '10px', maxWidth: '600px' }}>
            <Typography
              variant="p"
              sx={{
                fontSize: '16px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Box>

          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}
          >
            <Button
              sx={{
                display: 'inline-block',
                padding: '10px 30px',
                bgcolor: ' #7cf03d',
                border: '2px solid #7cf03d',
                borderRadius: '40px',
                boxShadow: '0 0 10px #7cf03d',
                fontSize: '16px',
                color: '#1f242d',
                fontWeight: 600,
                transition: '0.5s',
                ':hover': {
                  background: 'transparent',
                  color: '#7cf03d',
                  boxShadow: 'none',
                },
              }}
            >
              Download Resume
            </Button>
            <Box sx={{ marginLeft: '20px' }}>
              <IconButton
                sx={{
                  display: 'inline-flex',
                  padding: '8px',
                  border: '2px solid #7cf03d',
                  borderRadius: '50%',
                  color: '#7cf03d',
                  margin: '0 8px',
                  transition: '0.5s',
                  ':hover': {
                    backgroundColor: '#7cf03d',
                    color: '#1f242d',
                    boxShadow: '0 0 10px #7cf03d',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                sx={{
                  display: 'inline-flex',
                  padding: '8px',
                  border: '2px solid #7cf03d',
                  borderRadius: '50%',
                  color: '#7cf03d',
                  margin: '0 8px',
                  transition: '0.5s',
                  ':hover': {
                    backgroundColor: '#7cf03d',
                    color: '#1f242d',
                    boxShadow: '0 0 10px #7cf03d',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Image */}
        <Box sx={{ marginLeft: '40px' }}>
          <Box
            sx={{
              position: 'relative',
              width: '32vw',
              height: '32vw',
              borderRadius: '50%',
              padding: '5px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
              ':before, :after': {
                content: '""',
                position: 'absolute',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background:
                  'conic-gradient(transparent,transparent, transparent, #7cf03d)',
                transform: 'rotate(0deg)',
                animation: 'rotateBorder 10s linear infinite',
                '@keyframes rotateBorder': {
                  '100%': {
                    transform: 'rotate(360deg)',
                  },
                },
              },
              ':after': {
                animationDelay: '-5s',
              },
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '100%',
                bgcolor: '#1f242d',
                borderRadius: '50%',
                border: '0.1px solid #1f242d',
                display: 'flex',
                justifyContent: 'center',
                zIndex: 1,
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                sx={{
                  position: 'absolute',
                  top: '30px',
                  display: 'block',
                  width: '85%',
                  objectFit: 'cover',
                  mixBlendMode: 'lighten',
                }}
                src="src/assets/home.png"
              ></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
