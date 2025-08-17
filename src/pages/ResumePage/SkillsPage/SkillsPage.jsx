import Box from '@mui/material/Box';
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
import { ReactComponent as PostmanIcon } from '~/assets/icons/postman.svg';

import { Grid, Tooltip } from '@mui/material';

import { styled } from '@mui/material/styles';
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
  height: '110px',
  width: '110px',
}));
const SkillsPage = () => {
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
    { icon: PostmanIcon, title: 'Postman' },
  ];
  return (
    <Box
      className="resume-box"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        marginBottom: '30px',
        gap: '10px',
      }}
    >
      <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>My</Typography>
        <Typography
          sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
        >
          Skills
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px' }}>
        Here are some of the technologies and tools I work with:
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mt: '20px' }}
        justifyContent={{ xs: 'center', sm: 'center', md: 'flex-start' }}
      >
        {skills.map(({ icon: Icon, title }, idx) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            key={idx}
            display="flex"
            justifyContent="center"
          >
            <Tooltip title={title}>
              <StyledBox>
                <StyledSvgIcon component={Icon} />
              </StyledBox>
            </Tooltip>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SkillsPage;
