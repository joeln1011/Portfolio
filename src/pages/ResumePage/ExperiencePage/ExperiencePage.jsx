import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ExperiencePage = () => {
  return (
    <Box
      className="resume-box"
      sx={{
        padding: '35px',
        textAlign: 'left',
        maxWidth: '800px',
        border: '1px solid #ccc',
      }}
    >
      <Box sx={{ display: 'flex', marginBottom: '30px', gap: '12px' }}>
        <Typography sx={{ fontSize: '45px', fontWeight: 500 }}>My</Typography>
        <Typography
          sx={{ fontSize: '45px', fontWeight: 500, color: '#7cf03d' }}
        >
          Experience
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
          gap: '2rem',
          height: '45rem',
          overflowY: 'auto',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#323946',
            borderRadius: '0.8rem',
            padding: '3rem 2.5rem',
            height: 'calc((45rem - 2rem)/2)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography sx={{ fontSize: '16px', color: '#7cf03d' }}>
            Ferbuary 2024 - July 2024
          </Typography>
          <Typography sx={{ fontSize: '20px', fontWeight: 700 }}>
            Frontend Developer
          </Typography>
          <Typography sx={{ fontSize: '16px' }}>AndMine</Typography>
          <Typography sx={{ fontSize: '16px', marginTop: '15px' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ExperiencePage;
