import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const EducationPage = () => {
  return (
    <Box
      className="resume-box"
      sx={{ padding: '35px', textAlign: 'left', maxWidth: '700px' }}
    >
      <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>My</Typography>
        <Typography
          sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
        >
          Education
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
    </Box>
  );
};

export default EducationPage;
