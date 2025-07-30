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
  maxWidth: '450px',
  padding: '30px 25px',
  background: '#323946',
  border: '2px solid #323946',
  borderRadius: '10px',
  transition: '0.5s',
  ':hover': {
    borderColor: '#7cf03d',
    transform: 'scale(1.02)',
  },
}));
const ServicesPage = () => {
  return (
    <Box
      className="services-page"
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: '100px 9% 20px',
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
          gap: '12px',
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <CodeIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              Web Development
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <BrushIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              UX/UI Design
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <PaletteIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              Graphic Design
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <TrendingUpIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              SEO
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '16px' }}>
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <OndemandVideoIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              Video Editing
            </Typography>
            <Typography variant="body1">
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <StyleBox>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <CameraAltIcon />
              <ArrowBackIcon />
            </Box>
            <Typography
              variant="h5"
              sx={{ fontSize: '30px', margin: '10px 0 10px 0' }}
            >
              Photography
            </Typography>
            <Typography variant="body1">
              I create responsive and modern websites using the latest
              technologies.
            </Typography>
          </StyleBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesPage;
