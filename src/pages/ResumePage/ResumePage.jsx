import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ExperiencePage from './ExperiencePage/ExperiencePage';
import EducationPage from './EducationPage/EducationPage';
import SkillsPage from './SkillsPage/SkillsPage';
import AboutMePage from './AboutMePage/AboutMePage';

import { styled } from '@mui/material/styles';
const ResumeButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'active',
})(({ active }) => ({
  width: '100%',
  height: '53px',
  color: active ? '#7cf03d' : 'white',
  backgroundColor: '#323946',
  border: '2px solid #323946',
  marginBottom: '20px',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
  transition: '0.5s',
  ':focus, &:hover': {
    borderColor: '#7cf03d',
    color: '#7cf03d',
    boxShadow: '0 0 10px #7cf03d',
  },
}));

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('Experience');
  return (
    <Box
      className="resume-page"
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
      <Grid container spacing={3}>
        {/* resume-box 1 */}
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box
            sx={{
              border: '2px solid #7cf03d',
              borderRadius: '10px',
            }}
          >
            <Typography
              component="h2"
              sx={{ fontSize: '45px', fontWeight: 500 }}
            >
              Why Hire Me?
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: '16px', margin: '20px 0 25px' }}
            >
              I am a passionate and dedicated web developer with a strong
              foundation in modern web technologies. My expertise lies in
              creating responsive, user-friendly, and visually appealing
              websites that not only meet client requirements but also provide
              an exceptional user experience.
            </Typography>
            <Box>
              <ResumeButton
                active={activeTab === 'Experience'}
                onClick={() => setActiveTab('Experience')}
              >
                Experience
              </ResumeButton>
              <ResumeButton
                active={activeTab === 'Education'}
                onClick={() => setActiveTab('Education')}
              >
                Education
              </ResumeButton>
              <ResumeButton
                active={activeTab === 'Skills'}
                onClick={() => setActiveTab('Skills')}
              >
                Skills
              </ResumeButton>
              <ResumeButton
                active={activeTab === 'About Me'}
                onClick={() => setActiveTab('About Me')}
              >
                About Me
              </ResumeButton>
            </Box>
          </Box>
        </Grid>

        {/* resume-box 2*/}
        <Grid size={{ xs: 12, sm: 8 }}>
          <Box
            sx={{
              border: '2px solid #7cf03d',
            }}
          >
            {activeTab === 'Experience' && <ExperiencePage />}
            {activeTab === 'Education' && <EducationPage />}
            {activeTab === 'Skills' && <SkillsPage />}
            {activeTab === 'About Me' && <AboutMePage />}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumePage;
