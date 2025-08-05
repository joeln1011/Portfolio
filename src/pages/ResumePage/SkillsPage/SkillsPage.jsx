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
import { Tooltip } from '@mui/material';

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
  height: '130px',
  width: '130px',
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
  ];
  return (
    <Box
      className="resume-box"
      sx={{ padding: '35px', textAlign: 'left', maxWidth: '800px' }}
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
  );
};

export default SkillsPage;
