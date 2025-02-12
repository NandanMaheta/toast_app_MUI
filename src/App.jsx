import React from 'react';
import { Container, Typography, Button, Stack, Box } from '@mui/material';
import { useToast } from './ToastProvider';

// "App" receives "toggleTheme" and "mode" as props for theme switching.
const App = ({ toggleTheme, mode }) => {
  const { addToast } = useToast();

  // showToast: call addToast with a message and its type.
  const showToast = (msg, severity) => {
    addToast(msg, severity);
  };

  return (
    // Box is used to center the content both vertically and horizontally.
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center',
          p: 4,
          backgroundColor: 'background.default', // uses theme's background
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Simple Toast App
        </Typography>
        <Stack spacing={2}>
          <Button variant="contained" onClick={() => showToast('Success message', 'success')}>
            Show Success Toast
          </Button>
          <Button variant="contained" onClick={() => showToast('Error message', 'error')}>
            Show Error Toast
          </Button>
          <Button variant="contained" onClick={() => showToast('Warning message', 'warning')}>
            Show Warning Toast
          </Button>
          <Button variant="contained" onClick={() => showToast('Info message', 'info')}>
            Show Info Toast
          </Button>
          <Button variant="outlined" onClick={toggleTheme}>
            Toggle to {mode === 'light' ? 'Dark' : 'Light'} Theme
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default App;
