import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
const ContactPage = () => {
  const { handleSubmit } = useForm();
  const submitContactForm = (data) => {
    console.log('Form submitted:', data);
    // Here you would typically handle form submission, e.g., sending data to a server
  };
  return (
    <Box
      sx={{
        display: 'flex',
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
      <Box sx={{ maxWidth: { xs: '100%', md: '40%' } }}>
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
        }}
      >
        <form onSubmit={handleSubmit(submitContactForm)}>
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
          <Box
            sx={{
              flexGrow: 1,
              padding: '20px',
              maxWidth: { xs: '100%', md: '100%' },
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                marginTop: '20px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TextField
                sx={{
                  backgroundColor: ' #1f242d',
                  width: { xs: '100%', md: '40%' },
                }}
                hiddenLabel
                type="text"
                placeholder="Full Name"
                variant="outlined"
              />
              <TextField
                sx={{
                  backgroundColor: ' #1f242d',
                  width: { xs: '100%', md: '40%' },
                }}
                hiddenLabel
                placeholder="Email Address"
                variant="outlined"
              />
              <TextField
                sx={{
                  backgroundColor: ' #1f242d',
                  width: { xs: '100%', md: '40%' },
                }}
                hiddenLabel
                placeholder="Phone Number"
                variant="outlined"
              />
              <TextField
                sx={{
                  backgroundColor: ' #1f242d',
                  width: { xs: '100%', md: '40%' },
                }}
                hiddenLabel
                placeholder="Email Subject"
                variant="outlined"
              />
              <TextField
                sx={{
                  backgroundColor: ' #1f242d',
                  width: { xs: '100%', md: '82%' },
                }}
                hiddenLabel
                placeholder="Your Message..."
                variant="outlined"
                multiline
                rows={10}
              />
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: { xs: '20px', md: '30px' },
              }}
            >
              <Button
                type="submit"
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#7cf03d',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontSize: '16px',
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default ContactPage;
