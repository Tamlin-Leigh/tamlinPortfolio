import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { PERSONAL } from '../data';
import profilePhoto from '../assets/profile.jpeg';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="22" height="22">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const SOCIALS = [
  { href: PERSONAL.github,            icon: <GithubIcon />,   label: 'GitHub' },
  { href: PERSONAL.linkedin,          icon: <LinkedInIcon />, label: 'LinkedIn' },
  { href: `mailto:${PERSONAL.email}`, icon: <EmailIcon />,    label: 'Email' },
];

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        minHeight: 'calc(100vh - 64px)',
        pt: '64px',
        position: 'relative',
        zIndex: 1,
        px: { xs: 3, sm: 6, md: 10 },
      }}
    >
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
        alignItems: 'center',
        gap: { xs: 6, md: 10 },
        maxWidth: 1100,
        width: '100%',
        mx: 'auto',
      }}>

        {/* Left — text */}
        <Box>
          <Typography sx={{ color: 'primary.main', fontFamily: 'monospace', fontSize: '1rem', mb: 1.5 }}>
            Hi, I'm
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              color: '#fff',
              mb: 0.75,
            }}
          >
            {PERSONAL.name}
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.75rem)',
              fontWeight: 400,
              color: 'text.secondary',
              mb: 3,
            }}
          >
            {PERSONAL.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ maxWidth: 520, lineHeight: 1.8, mb: 4.5, fontSize: '1.05rem' }}
          >
            I build clean, functional and scalable web applications — from crafting intuitive
            front ends to architecting robust back-end systems.
          </Typography>

          <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 4 }}>
            <Button component={Link} to="/projects" variant="contained" color="primary" size="large"
              sx={{ px: 3.5, py: 1.25 }}>
              View My Work
            </Button>
            <Button component={Link} to="/contact" variant="outlined" color="primary" size="large"
              sx={{ px: 3.5, py: 1.25 }}>
              Get In Touch
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 2.5 }}>
            {SOCIALS.map(({ href, icon, label }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                title={label}
                sx={{ color: 'text.secondary', display: 'flex', transition: 'color 0.15s', '&:hover': { color: 'primary.main' } }}
              >
                {icon}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right — photo */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
          <Box
            component="img"
            src={profilePhoto}
            alt={PERSONAL.name}
            sx={{
              width: 340,
              height: 420,
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: 3,
              border: '3px solid',
              borderColor: 'primary.main',
              boxShadow: '0 0 40px rgba(79,123,235,0.25)',
            }}
          />
        </Box>

      </Box>

      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          alignItems: 'center',
          gap: 2,
          position: 'absolute',
          bottom: '2rem',
          left: '2.5rem',
          color: 'text.secondary',
          fontSize: '0.72rem',
          fontFamily: 'monospace',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
        }}
      >
      </Box>
    </Box>
  );
}
