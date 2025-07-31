import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const ContactPage = () => {
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
      <Box>
        <Typography variant="h4">Let's Work Together</Typography>
        <Typography variant="p">
          Lorem ipsum dolor sit amet consectetur adip elit. Veritatis,
          voluptatem illo magni simique, cumque, voluptates exercitationem
          doloribus unde ratione nobis
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Box>
            <PhoneIcon />
          </Box>
          <Box>
            <Typography>Phone</Typography>
            <Typography>+1 (770) 480 3608</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Box>
            <EmailIcon />
          </Box>
          <Box>
            <Typography>Email</Typography>
            <Typography>joelnt1011@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default ContactPage;
