import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CodeIcon from '@mui/icons-material/Code';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BrushIcon from '@mui/icons-material/Brush';
import PaletteIcon from '@mui/icons-material/Palette';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import { styled } from '@mui/material/styles';
const StyleBox = styled(Box)(() => ({
  maxWidth: '400px',
  padding: '30px 25px',
  background: '#323946',
  border: '2px solid #323946',
  borderRadius: '10px',
  transition: '0.5s',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  ':hover': {
    borderColor: '#7cf03d',
    transform: 'scale(1.02)',
  },
}));
const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'I create responsive and modern websites using the latest technologies.',
      icon: [<CodeIcon />, <ArrowBackIcon />],
    },
    {
      id: 2,
      title: 'UX/UI Design',
      description:
        'I create user-friendly interfaces that provide a seamless user experience.',
      icon: [<BrushIcon />, <ArrowBackIcon />],
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description:
        'I optimize websites to rank higher in search engine results and increase visibility.',
      icon: [<TrendingUpIcon />, <ArrowBackIcon />],
    },
    {
      id: 4,
      title: 'Video Production',
      description:
        'I create engaging video content for various platforms and audiences.',
      icon: [<OndemandVideoIcon />, <ArrowBackIcon />],
    },
    {
      id: 5,
      title: 'Photography',
      description:
        'I capture stunning images that tell a story and evoke emotions.',
      icon: [<CameraAltIcon />, <ArrowBackIcon />],
    },
    {
      id: 6,
      title: 'Graphic Design',
      description:
        'I create visually stunning designs that effectively communicate your brand message.',
      icon: [<PaletteIcon />, <ArrowBackIcon />],
    },
  ];
  return (
    <Box
      className="services-page"
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: '100px 9% 30px',
        color: '#fff',
        boxSizing: 'border-box',
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
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '10px',
        }}
      >
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>My</Typography>
        <Typography
          sx={{ fontSize: '45px', color: '#7cf03d', fontWeight: 500 }}
        >
          Services
        </Typography>
      </Box>
      {/* services-box */}
      <Grid container spacing={3} justifyContent="center">
        {services.map((service) => (
          <Grid size="auto" display="flex" justifyContent="center">
            <StyleBox>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  gap: 2,
                }}
              >
                {service.icon}
              </Box>
              <Typography
                variant="h5"
                sx={{
                  fontSize: '30px',
                  margin: '10px 0 10px 0',
                  alignSelf: 'flex-start',
                }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '16px' }}>
                {service.description}
              </Typography>
            </StyleBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesPage;
