import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './ToastProvider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import CustomToast from './customToast';
import logo from "./assests/HORIZONTAL.avif"
// ThemeWrapper manages the theme for the app
const ThemeWrapper = () => {
  const [colorMode, setColorMode] = useState('light'); // State for theme mode

  // Create theme based on colorMode
  const appTheme = useMemo(() => createTheme({
    palette: {
      mode: colorMode, // Light or dark mode
      background: {
        default: colorMode === 'light' ? '#e0f7fa' : '#263238', 
      }
    },
    typography: {
      fontFamily: 'Arial, sans-serif', 
    }
  }), [colorMode]);

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <ToastProvider>
        {/* Pass toggleTheme and mode to App */}
        <App 
          toggleTheme={() => setColorMode(prev => prev === 'light' ? 'dark' : 'light')} 
          mode={colorMode} 
        />
      </ToastProvider>
      <CustomToast logo={logo} message="Robust solutions for Home Healthcare Firms." link="https://www.levich.co/"/>
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeWrapper />
  </React.StrictMode>
);