import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ExperiencePage = () => {
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
          Experience
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px', textAlign: 'left' }}>
        I’m a frontend developer and UX/UI designer focused on building
        responsive, accessible, and performant web apps. I turn ideas into
        reusable React and Material UI components, optimize for SEO and Core Web
        Vitals, and collaborate across teams to deliver features end‑to‑end.
        Recent work includes component libraries, interactive animations, and
        data‑driven pages shipped to production.
      </Typography>
      <Grid container spacing={2} sx={{ marginTop: '20px' }}>
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
                Ferbuary 2024 - July 2024
              </Typography>
              <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
                Frontend Developer | Intern
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
                AndMine
              </Typography>
              <Typography sx={{ fontSize: '16px' }}>
                As a Frontend Developer Intern at AndMine (Feb–Jul 2024), I
                worked on the in‑house CRM, building responsive React + Material
                UI views for contact management, sales pipelines, and reports. I
                created reusable table and form components with validation,
                integrated REST APIs, improved accessibility and performance,
                and collaborated with designers and backend engineers to ship
                features end‑to‑end.
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExperiencePage;
