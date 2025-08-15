import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyResume from '/resume/HungNguyenResume.pdf';
import User from '../../assets/hungnguyen.png';
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
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: { xs: '20px', sm: '30px', md: '50px' },
        flexDirection: { xs: 'column-reverse', md: 'row' },
        justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' },
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
    >
      <Box
        sx={{
          width: { xs: '100%', md: 'auto' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontSize: { xs: '32px', sm: '40px', md: '55px' } }}
        >
          Joel Nguyen
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '20px', sm: '26px', md: '32px' },
            marginTop: '10px',
            display: 'inline-block',
          }}
        >
          I'm a{' '}
          <SpanBox style={{ '--i': 4 }} datatype="UX-UI Designer">
            UX-UI Designer
          </SpanBox>
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
        <Box
          sx={{
            marginTop: '10px',
            maxWidth: { xs: '100%', md: '600px' },
            mx: { xs: 'auto', md: 0 },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: '16px',
            }}
          >
            I am passionate about creating beautiful, functional, and
            user-friendly digital experiences and intuitive interfaces for web
            applications. With a strong background in both design and
            development, I bridge the gap between aesthetics and technology. My
            goal is to deliver seamless, accessible, and engaging solutions that
            delight users and drive business success.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '30px',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 0 },
            justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center on mobile & tablet
          }}
        >
          <Button
            href={MyResume}
            download="Hung_Joel_Nguyen_Resume.pdf"
            startIcon={<DownloadIcon />}
            sx={{
              padding: { xs: '8px 20px', md: '10px 30px' },
              bgcolor: ' #7cf03d',
              border: '2px solid #7cf03d',
              borderRadius: '40px',
              boxShadow: '0 0 10px #7cf03d',
              fontSize: { xs: '14px', md: '16px' },
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
          <Box
            sx={{
              marginLeft: { xs: 0, sm: '20px' },
              marginTop: { xs: 2, sm: 0 },
              display: 'flex',
              justifyContent: { xs: 'center', sm: 'center', md: 'flex-start' }, // Center icons on tablet
            }}
          >
            <IconButton
              href="https://github.com/joeln1011"
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
              href="https://www.linkedin.com/in/hung-nguyen-80bb0b376"
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
      <Box
        sx={{
          marginLeft: { xs: 0, md: '40px' },
          marginTop: { xs: 5, md: 0 },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '70vw', sm: '50vw', md: '32vw' },
            height: { xs: '70vw', sm: '50vw', md: '32vw' },
            borderRadius: '50%',
            padding: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            mx: { xs: 'auto', md: 0 },
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
                left: '5px',
                display: 'block',
                width: '85%',
                objectFit: 'cover',
                mixBlendMode: 'lighten',
              }}
              alt="joelnguyen"
              src={User}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;
