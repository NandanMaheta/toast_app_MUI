
import { Container, Typography, Button, Stack, Box } from '@mui/material';
import { useToast } from './ToastProvider';

// App component that show toasts and toggle theme
const App = ({ toggleTheme, mode }) => {
  const { showToast } = useToast(); // useToast hook to shaw toasts

  return (
    <Box sx={centerScreenStyle}>
      <Container maxWidth="sm" sx={containerStyle}>
        {/* App title */}
        <Typography variant="h4" gutterBottom>
          Toast Demo App
        </Typography>

        {/* Stack for butttons */}
        <Stack spacing={2}>
          {/* Buttons to show different types of toasts */}
          <Button variant="contained" onClick={() => showToast('Success!', 'success')}>
            Show Success
          </Button>
          <Button variant="contained" onClick={() => showToast('Error!', 'error')}>
            Show Error
          </Button>
          <Button variant="contained" onClick={() => showToast('Warning!', 'warning')}>
            Show Warning
          </Button>
          <Button variant="contained" onClick={() => showToast('Info!', 'info')}>
            Show Info
          </Button>

          {/* Button to toggle themee */}
          <Button variant="outlined" onClick={toggleTheme}>
            Switch to {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

// Styles for centering content on scrreen
const centerScreenStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh', // Full viewport height
};

// Styles for the container
const containerStyle = {
  textAlign: 'center',
  p: 4, // Padding
  backgroundColor: 'background.default', // Background color from theme
  borderRadius: 2, 
  boxShadow: 3, // Shadow effect
};

export default App;