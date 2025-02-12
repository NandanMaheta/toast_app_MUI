import React, { createContext, useState, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Create a context for toast messages
const ToastContext = createContext();

// ToastProvider wraps your app and provides toast functions to all children.
export const ToastProvider = ({ children }) => {
    
  // "toasts" is an array of toast objects: { id, message, severity }
  const [toasts, setToasts] = useState([]);

  // addToast: add a new toast message.
  // "message" is the text; "severity" can be "success", "error", "warning", or "info".
  const addToast = (message, severity = 'info') => {
    const id = Date.now(); // use current time as a unique id
    setToasts(prev => [...prev, { id, message, severity }]);
  };

  // removeToast: remove a toast by its id.
  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {/* Render each toast as a Snackbar with an Alert */}
      {toasts.map(({ id, message, severity }) => (
        <Snackbar
          key={id}                 // Unique key for the list
          open={true}              // Always open while active
          autoHideDuration={3000}  // Toast hides after 3 seconds
          onClose={() => removeToast(id)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Center bottom of screen
        >
          <Alert
            onClose={() => removeToast(id)}
            severity={severity}    // Controls the color/style
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      ))}
    </ToastContext.Provider>
  );
};

// Custom hook for easy access to the toast functions
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used inside ToastProvider');
  }
  return context;
};
