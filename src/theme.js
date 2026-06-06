import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4f7beb',
      contrastText: '#0a0a0a',
    },
    background: {
      default: '#0a0a0a',
      paper: '#161616',
    },
    text: {
      primary: '#e8e8e8',
      secondary: '#888888',
    },
    divider: '#272727',
  },
  typography: {
    fontFamily: "'Inter', system-ui, sans-serif",
    h1: { fontWeight: 700, letterSpacing: '-0.03em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600 },
    body1: { lineHeight: 1.7 },
    body2: { lineHeight: 1.7, fontSize: '0.875rem' },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: { WebkitFontSmoothing: 'antialiased' },
        a: { color: 'inherit', textDecoration: 'none' },
      },
    },
    MuiAppBar: {
      defaultProps: { elevation: 0 },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.9rem',
        },
        containedPrimary: {
          color: '#0a0a0a',
        },
      },
    },
    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          border: '1px solid #272727',
          backgroundColor: '#161616',
          transition: 'border-color 0.2s, transform 0.2s',
          '&:hover': {
            borderColor: '#4f7beb',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontSize: '0.82rem' },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#272727' },
      },
    },
  },
});

export default theme;
