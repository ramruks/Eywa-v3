
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A148C', // A deep, trustworthy purple
    },
    secondary: {
      main: '#FF6F00', // A vibrant, energetic orange
    },
    background: {
      default: '#F3E5F5', // A very light purple, calming and clean
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        },
      },
    },
  },
});

export default theme;
