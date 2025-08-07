import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import CarouselProject from '../../components/Carousel/CarouselProject';
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.jpg';
import Portfolio4 from '../../assets/portfolio4.jpg';
import Portfolio5 from '../../assets/portfolio5.jpg';
import Portfolio6 from '../../assets/portfolio6.jpg';
import { useState } from 'react';
const ProjectDescription = [
  {
    id: 1,
    title: 'Frontend Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio1],
  },
  {
    id: 2,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio2],
  },
  {
    id: 3,
    title: 'We Connect',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio3],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio4],
  },
  {
    id: 5,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio5],
  },
  {
    id: 6,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: [Portfolio6],
  },
];

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const project = ProjectDescription[currentProject];

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        padding: { xs: '80px 2% 20px', md: '100px 9% 20px' },
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
          marginBottom: { xs: '20px', md: '30px' },
          gap: '12px',
        }}
      >
        <Typography
          sx={{ fontSize: { xs: '32px', md: '45px' }, fontWeight: 500 }}
        >
          Latest
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '32px', md: '45px' },
            color: '#7cf03d',
            fontWeight: 500,
          }}
        >
          Projects
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '24px', md: '40px' },
          alignItems: { xs: 'stretch', md: 'flex-start' },
          justifyContent: 'center',
          width: '100%',
        }}
      >
        {/* Project Description */}
        <Box
          sx={{
            padding: { xs: '10px', md: '20px' },
            maxWidth: { xs: '100%', md: '500px' },
            width: '100%',
            margin: '0 auto',
            order: { xs: 1, md: 0 }, // Description second on mobile, first on desktop
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontSize: { xs: '48px', md: '80px' },
              WebkitTextStroke: '1px #fff',
              color: 'transparent',
              lineHeight: '1',
            }}
          >
            {String(currentProject + 1).padStart(2, '0')}
          </Typography>
          <Typography
            variant="h5"
            sx={{ fontSize: { xs: '22px', md: '35px' }, margin: '8px 0 20px' }}
          >
            {project.title}
          </Typography>
          <Typography variant="p" sx={{ fontSize: { xs: '14px', md: '16px' } }}>
            {project.description}
          </Typography>
          <Box>
            <Typography
              variant="p"
              sx={{
                margin: '20px 0',
                color: '#7cf03d',
                fontSize: { xs: '14px', md: '16px' },
              }}
            >
              {project.technologies}
            </Typography>
          </Box>
          <Divider
            sx={{
              width: '100%',
              margin: '20px 0',
              borderColor: '#fff',
            }}
          />
          <Box>
            <Tooltip title="Live Project">
              <IconButton
                sx={{
                  color: '#fff',
                  padding: '13px',
                  fontSize: '30px',
                  backgroundColor: '#323946',
                  borderRadius: '50%',
                  marginRight: '15px',
                  transform: 'rotate(135deg)',
                  transition: '0.5s',
                  ':hover': {
                    color: '#7cf03d',
                  },
                }}
                component="a"
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowBackIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="GitHub Repository">
              <IconButton
                sx={{
                  color: '#fff',
                  padding: '13px',
                  fontSize: '30px',
                  backgroundColor: '#323946',
                  borderRadius: '50%',
                  transition: '0.5s',
                  ':hover': {
                    color: '#7cf03d',
                  },
                }}
                component="a"
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        {/* Carousel Image */}
        <Box
          sx={{
            padding: { xs: '10px', md: '35px' },
            maxWidth: { xs: '100%', md: '800px' },
            width: '100%',
            margin: '0 auto',
            order: { xs: 0, md: 1 }, // Carousel first on mobile, second on desktop
          }}
        >
          <CarouselProject images={project.images} />
        </Box>
        {/* Navigation for projects */}
        <Box
          sx={{ display: 'flex', gap: 2, marginTop: 1, borderRadius: '10px' }}
        >
          <IconButton
            sx={{ color: '#fff' }}
            onClick={() =>
              setCurrentProject((prev) =>
                prev === 0 ? ProjectDescription.length - 1 : prev - 1
              )
            }
          >
            <ArrowBackIcon />
          </IconButton>
          <IconButton
            sx={{ color: '#fff' }}
            onClick={() =>
              setCurrentProject((prev) =>
                prev === ProjectDescription.length - 1 ? 0 : prev + 1
              )
            }
          >
            <ArrowBackIcon sx={{ transform: 'rotate(180deg)' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectsPage;
