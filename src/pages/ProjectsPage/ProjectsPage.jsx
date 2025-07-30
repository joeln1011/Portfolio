import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';
import CarouselProject from '../../components/Carousel/CarouselProject';
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
    images: ['src/assets/portfolio1.jpg'],
  },
  {
    id: 2,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: ['src/assets/portfolio2.jpg'],
  },
  {
    id: 3,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: ['src/assets/portfolio3.jpg'],
  },
  {
    id: 4,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: ['src/assets/portfolio4.jpg'],
  },
  {
    id: 5,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: ['src/assets/portfolio5.jpg'],
  },
  {
    id: 6,
    title: 'Fullstack Project',
    description:
      'This project showcases my skills in frontend development, utilizing technologies such as React, HTML, CSS, and JavaScript to create a responsive and interactive user interface.',
    technologies: 'HTML5, CSS3, JavaScript',
    liveLink: '#',
    githubLink: '#',
    images: ['src/assets/portfolio6.jpg'],
  },
];

const ProjectsPage = () => {
  const [currentProject, setCurrentProject] = useState(0);
  return (
    <Box
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '30px',
          gap: '12px',
        }}
      >
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>
          Latest
        </Typography>
        <Typography
          sx={{ fontSize: '45px', color: '#7cf03d', fontWeight: 500 }}
        >
          Projects
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {ProjectDescription.map((project) => (
          <Grid item xs={12} key={project.id}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: '40px',
                alignItems: 'flex-start',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              {/* Project Description */}
              <Box sx={{ padding: '20px', maxWidth: '500px' }}>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: '80px',
                    WebkitTextStroke: '1px #fff',
                    color: 'transparent',
                    lineHeight: '1',
                  }}
                >
                  {String(currentProject + 1).padStart(2, '0')}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ fontSize: '35px', margin: '8px 0 20px' }}
                >
                  {project.title}
                </Typography>
                <Typography variant="p" sx={{ fontSize: '16px' }}>
                  {project.description}
                </Typography>
                <Box>
                  <Typography
                    variant="p"
                    sx={{
                      margin: '20px 0',
                      color: '#7cf03d',
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
                {/* Navigation for projects */}
                <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
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
              {/* Carousel Image */}
              <Box sx={{ padding: '35px', maxWidth: '100%' }}>
                <CarouselProject images={project.images} />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectsPage;
