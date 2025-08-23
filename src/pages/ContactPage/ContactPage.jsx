import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '~/components/Form/ContactForm';

const ContactPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
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
      {/* left */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '30%' },
          marginRight: { xs: 0, md: '20px' },
          marginBottom: { xs: '24px', md: 0 },
          marginTop: { xs: '20px', md: '30px' },
        }}
      >
        <Typography variant="h4">Let's Work Together</Typography>
        <Typography variant="p">
          If you have any questions, want to collaborate on a project, or just
          want to say hi, feel free to reach out! I'm always open to discussing
          new ideas, opportunities, or just having a chat about tech and
          development.
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#323946',
              border: '1px solid #323946',
              padding: '10px',
            }}
          >
            <PhoneIcon sx={{ color: '#7cf03d' }} />
          </Box>
          <Box>
            <Typography sx={{ color: '#7cf03d' }}>Phone</Typography>
            <Typography>+1 (770) 480 3608</Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
              backgroundColor: '#323946',
              border: '1px solid #323946',
              padding: '10px',
            }}
          >
            <EmailIcon sx={{ color: '#7cf03d' }} />
          </Box>
          <Box>
            <Typography sx={{ color: '#7cf03d' }}>Email</Typography>
            <Typography>joelnt1011@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
      {/* right */}
      <Box
        sx={{
          border: '1px solid #323946',
          backgroundColor: '#323946',
          maxWidth: { xs: '100%', md: '60%' },
          width: '100%',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: { xs: '20px', md: '30px' },
            marginTop: { xs: '20px', md: '30px' },
            gap: '12px',
          }}
        >
          <Typography
            sx={{ fontSize: { xs: '32px', md: '45px' }, fontWeight: 500 }}
          >
            Contact
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '32px', md: '45px' },
              color: '#7cf03d',
              fontWeight: 500,
            }}
          >
            Me!!!
          </Typography>
        </Box>
        <ContactForm />
      </Box>
    </Box>
  );
};

export default ContactPage;
