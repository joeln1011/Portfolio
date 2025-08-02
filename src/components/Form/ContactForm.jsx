import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import FieldErrorAlert from './FieldErrorAlert';
import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '../../utils/constants';
import {
  EMAIL_RULE,
  EMAIL_RULE_MESSAGE,
  FIELD_REQUIRED_MESSAGE,
} from '../../utils/validator';
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (data) => {
    console.log('Form data:', data);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (response) => {
        console.log('Email sent successfully:', response.status, response.text);
      },
      (error) => {
        console.error('Error sending email:', error);
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(sendEmail)}>
      <Box
        sx={{
          flexGrow: 1,
          padding: '20px',
        }}
      >
        <Grid container spacing={2}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                name="name"
                sx={{ backgroundColor: '#1f242d', width: '100%' }}
                hiddenLabel
                type="text"
                placeholder="Full Name"
                variant="outlined"
                {...register('name', {
                  required: FIELD_REQUIRED_MESSAGE,
                })}
                error={!!errors['name']}
              />
              <FieldErrorAlert errors={errors} fieldName="name" />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                name="email"
                sx={{ backgroundColor: '#1f242d', width: '100%' }}
                hiddenLabel
                placeholder="Email Address"
                variant="outlined"
                {...register('email', {
                  required: FIELD_REQUIRED_MESSAGE,
                  pattern: {
                    value: EMAIL_RULE,
                    message: EMAIL_RULE_MESSAGE,
                  },
                })}
                error={!!errors['email']}
              />
              <FieldErrorAlert errors={errors} fieldName="email" />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '20px',
              width: '100%',
              marginBottom: '20px',
            }}
          >
            <Box sx={{ flex: 1 }}>
              <TextField
                name="phone"
                sx={{ backgroundColor: '#1f242d', width: '100%' }}
                hiddenLabel
                placeholder="Phone Number"
                variant="outlined"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <TextField
                name="subject"
                sx={{ backgroundColor: '#1f242d', width: '100%' }}
                hiddenLabel
                placeholder="Email Subject"
                variant="outlined"
                {...register('subject', {
                  required: FIELD_REQUIRED_MESSAGE,
                })}
                error={!!errors['subject']}
              />
              <FieldErrorAlert errors={errors} fieldName="subject" />
            </Box>
          </Box>

          <Box sx={{ width: '100%', marginBottom: '20px' }}>
            <TextField
              name="message"
              sx={{ backgroundColor: '#1f242d', width: '100%' }}
              hiddenLabel
              placeholder="Your Message..."
              variant="outlined"
              multiline
              rows={11}
              {...register('message', {
                required: FIELD_REQUIRED_MESSAGE,
              })}
              error={!!errors['message']}
            />
            <FieldErrorAlert errors={errors} fieldName="message" />
          </Box>
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
  );
};

export default ContactForm;
