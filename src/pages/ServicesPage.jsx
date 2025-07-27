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
const ServicesPage = () => {
  return (
    <Box
      className="services-page"
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: '100px 9% 20px',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px',
          gap: '12px',
        }}
      >
        <Typography sx={{ fontSize: '45px' }}>My</Typography>
        <Typography sx={{ fontSize: '45px', color: '#7cf03d' }}>
          Services
        </Typography>
      </Box>
      {/* services-box */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <CodeIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">Web Development</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <BrushIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">UX/UI Design</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <PaletteIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">Graphic Design</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <TrendingUpIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">SEO</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <OndemandVideoIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">Video Editing</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Box>
            <CameraAltIcon />
            <ArrowBackIcon />
          </Box>
          <Typography variant="h5">Photography</Typography>
          <Typography variant="body1">
            I create responsive and modern websites using the latest
            technologies.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServicesPage;
