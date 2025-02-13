import { createContext, useState, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

// Create context for toast system
const ToastContext = createContext();

// ToastProvider manages toast messages and display them
export const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]); // State for toast messages

  // Function to add new toast message
  const showToast = (text, type = 'info') => {
    const newMessage = {
      id: Date.now(), // Unique ID for each message
      text,
      type // Type of toast (success, error, warning, info)
    };
    setMessages(prev => [...prev, newMessage]); // Add new message to state
  };

  // Function to remove toast by ID
  const removeMessage = (id) => {
    setMessages(prev => prev.filter(msg => msg.id !== id)); // Filter out the message
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children} {/* Render children components */}

      {/* Map through messages and display them as Snackbars */}
      {messages.map(({ id, text, type }) => (
        <Snackbar
          key={id} // Unique key for React
          open={true} // Always open
          autoHideDuration={2500} // Auto-hide after 3 seconds
          onClose={() => removeMessage(id)} // Close handler
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position on screen
        >
          <Alert
            onClose={() => removeMessage(id)} // Close handler for Alert
            severity={type} // Type of Alert (success, error, warning, info)
            sx={{ width: '100%' }} // Full width
          >
            {text} {/* Message text */}
          </Alert>
        </Snackbar>
      ))}
    </ToastContext.Provider>
  );
};

// Custom hook to use toast functions
export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider'); // Error handling
  return context;
};