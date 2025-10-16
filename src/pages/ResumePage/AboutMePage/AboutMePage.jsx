import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutMePage = () => {
  const aboutMeDetails = [
    { fieldName: 'Name', fieldDescription: 'Joel Nguyen' },
    { fieldName: 'Phone', fieldDescription: '+1(770) 480-3608' },
    { fieldName: 'Location', fieldDescription: 'Georgia, USA' },
    { fieldName: 'Email', fieldDescription: 'joelnt1011@gmail.com' },
    { fieldName: 'Freelance', fieldDescription: 'Available' },
    { fieldName: 'Full-time', fieldDescription: 'Available' },
    { fieldName: 'Language', fieldDescription: 'English, Vietnamese' },
  ];

  return (
    <Box className="resume-box" sx={{ padding: '35px', textAlign: 'left' }}>
      <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>
          About
        </Typography>
        <Typography
          sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
        >
          Me
        </Typography>
      </Box>
      <Box>
        <Typography component="p" sx={{ fontSize: '16px' }}>
          Hello! I'm Joel Nguyen, a passionate and dedicated full-stack web
          developer with a strong foundation in both front-end and back-end
          technologies. I love creating dynamic, responsive, and user-friendly
          web applications that provide seamless experiences across all devices.
          My expertise includes HTML5, CSS3, JavaScript, TypeScript, React,
          Node.js, Express, and MongoDB.
          <Typography component="p" sx={{ fontSize: '16px' }}>
            I'm constantly learning and staying updated with the latest industry
            trends to ensure my skills remain sharp and relevant. When I'm not
            coding, I enjoy exploring new technologies and contributing to
            open-source projects. Let's build something amazing together!
          </Typography>
        </Typography>
        <Typography component="p" sx={{ fontSize: '16px' }}>
          In my free time, I enjoy hiking, reading, and playing video games. I'm
          always up for a challenge and love learning new things. Feel free to
          reach out if you'd like to connect!
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{ marginTop: '20px' }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {aboutMeDetails.map((detail, index) => (
          <Grid key={index} size={{ xs: 12, sm: 4, md: 4 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: 1,
              }}
            >
              <Typography component="span" sx={{ color: '#7cf03d' }}>
                {detail.fieldName}:
              </Typography>
              <Typography component="span">
                {detail.fieldDescription}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutMePage;
