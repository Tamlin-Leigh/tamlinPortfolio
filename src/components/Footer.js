import { Box, Typography } from '@mui/material';
import { PERSONAL } from '../data';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'rgba(10,10,10,0.88)',
        backdropFilter: 'blur(14px)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Designed &amp; built by {PERSONAL.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {[
          { href: PERSONAL.github,   label: 'GitHub' },
          { href: PERSONAL.linkedin, label: 'LinkedIn' },
          { href: `mailto:${PERSONAL.email}`, label: 'Email' },
        ].map(({ href, label }, i, arr) => (
          <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="a"
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              sx={{
                fontSize: '0.8rem',
                color: 'text.secondary',
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                '&:hover': { color: 'primary.main' },
              }}
            >
              {label}
            </Box>
            {i < arr.length - 1 && (
              <Typography variant="body2" sx={{ color: 'divider' }}>·</Typography>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
