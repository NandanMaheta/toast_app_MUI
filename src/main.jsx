import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './ToastProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// "Main" is a wrapper component that holds the theme state.
const Main = () => {
  // State to track the current theme mode: "light" or "dark"
  const [mode, setMode] = useState('light');

  // Function to toggle between light and dark themes.
  const toggleTheme = () => {
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Create a theme object that changes based on "mode"
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          background: {
            // Set different background colors for light and dark themes
            default: mode === 'light' ? '#e0f7fa' : '#263238',
          },
        },
        typography: {
          // Use a clean, readable font
          fontFamily: 'Arial, sans-serif',
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastProvider>
        <App toggleTheme={toggleTheme} mode={mode} />
      </ToastProvider>
    </ThemeProvider>
  );
};

// Create the React root once and render the Main component.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
