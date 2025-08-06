import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const EducationPage = () => {
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
          Education
        </Typography>
      </Box>
      <Typography component="p" sx={{ fontSize: '16px' }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Typography>
      <Box
        sx={{
          marginTop: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
          gap: '20px',
          height: '450px',
          overflowX: 'auto',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#323946',
            borderRadius: '10px',
            padding: '30px 25px',
            height: 'calc((450px - 20px)/2)',
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#323946',
            borderRadius: '10px',
            padding: '30px 25px',
            height: 'calc((450px - 20px)/2)',
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: '#323946',
            borderRadius: '10px',
            padding: '30px 25px',
            height: 'calc((450px - 20px)/2)',
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

export default EducationPage;
