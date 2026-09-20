import { Box, Typography, Card, CardContent, Chip, Button, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { ABOUT, PERSONAL } from '../data';

const INTEREST_ICONS = { Fitness: '🏋️', Art: '🎨', Music: '🎵', Animals: '🐾', Gaming: '🎮' };

const InfoRow = ({ label, children }) => (
  <Box>
    <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: 'text.secondary', display: 'block' }}>
      {label}
    </Typography>
    <Typography variant="body2" sx={{ mt: 0.25 }}>{children}</Typography>
  </Box>
);

export default function About() {
  return (
    <Box component="main" sx={{ flex: 1, pt: { xs: 11, md: 14 }, pb: 12, px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>

        <Box mb={6}>
          <Typography variant="h2" sx={{ display: 'inline-block', mb: 0.75, '&::after': { content: '""', display: 'block', width: 44, height: 3, bgcolor: 'primary.main', borderRadius: 1, mt: 0.6 } }}>
            About Me
          </Typography>
          <Typography color="text.secondary" mt={1} sx={{ maxWidth: 600, my: '1%' }}>Get to know the person behind the code.</Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 280px' }, gap: 5, alignItems: 'start' }}>

          <Box>
            {ABOUT.bio.map((para, i) => (
              <Typography key={i} color="text.secondary" sx={{ lineHeight: 1.9, mb: 2, fontSize: '1.02rem' }}>
                {para}
              </Typography>
            ))}
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: 3 }}>
              <Button component={Link} to="/experience" variant="contained" color="primary" sx={{ px: 3 }}>
                My Experience
              </Button>
              <Button component={Link} to="/skills" variant="outlined" color="primary" sx={{ px: 3 }}>
                My Skills
              </Button>
            </Box>
          </Box>

          <Stack spacing={2.5}>
            <Card>
              <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'primary.main', fontWeight: 600, display: 'block', mb: 2 }}>
                  Quick Info
                </Typography>
                <Stack spacing={1.75} divider={<Divider />}>
                  <InfoRow label="Location">{PERSONAL.location}</InfoRow>
                  <InfoRow label="Citizenship">{PERSONAL.citizenship}</InfoRow>
                  <InfoRow label="Email">
                    <Box component="a" href={`mailto:${PERSONAL.email}`}
                      sx={{ color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      {PERSONAL.email}
                    </Box>
                  </InfoRow>
                  <InfoRow label="Phone">{PERSONAL.phone}</InfoRow>
                  <InfoRow label="Status">
                    <Box component="span" sx={{ color: 'primary.main' }}>{PERSONAL.availability}</Box>
                  </InfoRow>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <Typography variant="caption" sx={{ textTransform: 'uppercase', letterSpacing: '0.1em', color: 'primary.main', fontWeight: 600, display: 'block', mb: 2 }}>
                  Interests
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {ABOUT.interests.map((interest) => (
                    <Chip key={interest} label={`${INTEREST_ICONS[interest] || '•'} ${interest}`}
                      size="small" variant="outlined" sx={{ borderColor: 'divider' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Stack>

        </Box>
      </Box>
    </Box>
  );
}
