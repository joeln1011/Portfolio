import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const EducationPage = () => {
  const educationData = [
    {
      id: 1,
      year: 'March 2025 - July 2025',
      degree: 'Udemy Full Stack Web Development',
      institution: 'Udemy',
      description:
        'A comprehensive course on modern web development technologies and practices.',
    },
    {
      id: 2,
      year: 'March 2019 - July 2023',
      degree: 'Bachelor of Mobile Application Development',
      institution: 'Academy of Interactive Technology',
      description:
        'A four-year degree program focused on mobile application development and related technologies.',
    },
    {
      id: 3,
      year: 'July 2017 - March 2018',
      degree: 'Diploma of Information Technology',
      institution: 'James Cook University',
      description:
        'A one-year diploma program providing foundational knowledge in information technology.',
    },
  ];
  return (
    <Box className="resume-box">
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-start' },
          marginBottom: '30px',
          gap: '10px',
        }}
      >
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>My</Typography>
        <Typography
          sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
        >
          Education
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px' }}>
        Here is a summary of my educational background:
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
        {educationData.map((education) => (
          <Grid size={{ xs: 12, sm: 12 }}>
            <Box
              sx={{
                gap: '20px',
              }}
            >
              <Box
                sx={{
                  backgroundColor: '#323946',
                  borderRadius: '10px',
                  padding: '30px 25px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography sx={{ fontSize: '16px', color: '#7cf03d' }}>
                  {education.year}
                </Typography>
                <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
                  {education.degree}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '16px',
                    position: 'relative',
                    marginLeft: '20px',
                    marginBottom: '20px',
                    ':before': {
                      content: '""',
                      position: 'absolute',
                      left: '-5px',
                      top: '50%',
                      width: '10px',
                      height: '10px',
                      transform: 'translateY(-50%)',
                      padding: '5px',
                      backgroundColor: '#7cf03d',
                      borderRadius: '50%',
                      marginLeft: '-20px',
                    },
                  }}
                >
                  {education.institution}
                </Typography>
                <Typography sx={{ fontSize: '16px' }}>
                  {education.description}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default EducationPage;
