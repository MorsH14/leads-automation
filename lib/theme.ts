import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Deep Space Blue
      dark: '#000051',
      light: '#534bae',
    },
    secondary: {
      main: '#c5a059', // Antique Gold
      dark: '#94722e',
      light: '#f8d087',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  typography: {
    fontFamily: 'var(--font-inter), "Inter", sans-serif',
    h1: {
      fontFamily: 'var(--font-playfair), serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: 'var(--font-playfair), serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'var(--font-playfair), serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'var(--font-playfair), serif',
      fontWeight: 600,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
    },
  },
  shape: {
    borderRadius: 4, // More premium minimal look
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '12px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 4,
          },
        },
      },
    },
  },
});

export default theme;
