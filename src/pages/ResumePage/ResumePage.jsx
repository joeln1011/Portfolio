import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as HTML5 } from '~/assets/icons/html5.svg';
import { ReactComponent as CSS3 } from '~/assets/icons/css3.svg';
import { ReactComponent as JavaScript } from '~/assets/icons/javascript.svg';
import { ReactComponent as TypeScript } from '~/assets/icons/typescript.svg';
import { ReactComponent as ReactIcon } from '~/assets/icons/react.svg';
import { ReactComponent as MongoDB } from '~/assets/icons/mongodb.svg';
import { ReactComponent as ViteIcon } from '~/assets/icons/vite.svg';
import { ReactComponent as GitHubIcon } from '~/assets/icons/github.svg';
import { ReactComponent as MeterialUI } from '~/assets/icons/material-ui.svg';
import { ReactComponent as TailwindCSS } from '~/assets/icons/tailwind.svg';
import { ReactComponent as BootstrapIcon } from '~/assets/icons/bootstrap.svg';
import { styled } from '@mui/material/styles';
import { Tooltip } from '@mui/material';
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

const StyledSvgIcon = styled(SvgIcon)(() => ({
  width: '70px',
  height: '70px',
  cursor: 'pointer',
  ':hover': { color: '#7cf03d' },
}));

const StyledBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#323946',
  borderRadius: '8px',
  height: '130px',
  width: '130px',
}));

const ResumePage = () => {
  const [activeTab, setActiveTab] = useState('Experience');
  const skills = [
    { icon: HTML5, title: 'HTML5' },
    { icon: CSS3, title: 'CSS3' },
    { icon: JavaScript, title: 'JavaScript' },
    { icon: TypeScript, title: 'TypeScript' },
    { icon: ReactIcon, title: 'React' },
    { icon: MongoDB, title: 'MongoDB' },
    { icon: ViteIcon, title: 'Vite' },
    { icon: MeterialUI, title: 'Material UI' },
    { icon: TailwindCSS, title: 'Tailwind CSS' },
    { icon: BootstrapIcon, title: 'Bootstrap' },
    { icon: GitHubIcon, title: 'GitHub' },
  ];
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
      <Grid container spacing={2}>
        {/* resume-box 1 */}
        <Grid>
          <Box
            sx={{
              padding: '20px',
              maxWidth: '400px',
            }}
          >
            <Box>
              <Typography component="h2" sx={{ fontSize: '45px' }}>
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
          </Box>
        </Grid>

        {/* resume-box 2*/}
        <Grid>
          {activeTab === 'Experience' && (
            <Box
              className="resume-box"
              sx={{ padding: '35px', textAlign: 'left', maxWidth: '800px' }}
            >
              <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
                <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>
                  My
                </Typography>
                <Typography
                  sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
                >
                  Experience
                </Typography>
              </Box>
              <Typography component="p" sx={{ fontSize: '16px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </Typography>
            </Box>
          )}
          {activeTab === 'Education' && (
            <Box
              className="resume-box"
              sx={{ padding: '35px', textAlign: 'left', maxWidth: '700px' }}
            >
              <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
                <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>
                  My
                </Typography>
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
          )}
          {activeTab === 'Skills' && (
            <Box
              className="resume-box"
              sx={{ padding: '35px', textAlign: 'left', maxWidth: '800px' }}
            >
              <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
                <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>
                  My
                </Typography>
                <Typography
                  sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
                >
                  Skills
                </Typography>
              </Box>
              <Typography component="p" sx={{ fontSize: '16px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '20px',
                  marginTop: '20px',
                }}
              >
                {skills.map(({ icon: Icon, title }, idx) => (
                  <Tooltip title={title} key={idx}>
                    <StyledBox>
                      <StyledSvgIcon component={Icon} />
                    </StyledBox>
                  </Tooltip>
                ))}
              </Box>
            </Box>
          )}
          {activeTab === 'About Me' && (
            <Box
              className="resume-box"
              sx={{ padding: '35px', textAlign: 'left', maxWidth: '800px' }}
            >
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
              <Typography component="p" sx={{ fontSize: '16px' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ResumePage;
