import { Box, Typography, Card, CardContent, Button, Stack, Avatar, Divider } from '@mui/material';
import { PERSONAL, REFERENCES } from '../data';

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const GlobeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DetailRow = ({ icon, children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
    <Box sx={{ color: 'primary.main', flexShrink: 0, display: 'flex' }}>{icon}</Box>
    <Typography variant="body2">{children}</Typography>
  </Box>
);

const SocialPill = ({ href, icon, label }) => (
  <Box component="a" href={href} target="_blank" rel="noreferrer" sx={{
    display: 'flex', alignItems: 'center', gap: 1,
    px: 2, py: 1, borderRadius: 2, border: '1px solid', borderColor: 'divider',
    bgcolor: '#1e1e1e', color: 'text.primary', fontSize: '0.875rem', textDecoration: 'none',
    transition: 'border-color 0.15s, color 0.15s',
    '&:hover': { borderColor: 'primary.main', color: 'primary.main' },
  }}>
    {icon} {label}
  </Box>
);

const CardLabel = ({ children }) => (
  <Typography variant="caption" sx={{
    textTransform: 'uppercase', letterSpacing: '0.1em',
    color: 'primary.main', fontWeight: 600, display: 'block', mb: 2,
  }}>
    {children}
  </Typography>
);

export default function Contact() {
  return (
    <Box component="main" sx={{ flex: 1, pt: { xs: 11, md: 14 }, pb: 12, px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>

        <Box mb={6}>
          <Typography variant="h2" sx={{ display: 'inline-block', mb: 0.75, '&::after': { content: '""', display: 'block', width: 44, height: 3, bgcolor: 'primary.main', borderRadius: 1, mt: 0.6 } }}>
            Get In Touch
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600, my: '1%' }}>
            I'm currently open to new opportunities, including remote/contract work with UK companies
            as a South African & UK citizen. Whether you have a question, a project in mind,
            or just want to say hi — reach out.
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 7fr' }, gap: 3, alignItems: 'start' }}>

          {/* Left column */}
          <Stack spacing={2.5}>
            <Card>
              <CardContent sx={{ p: 3, '&:last-child': { pb: 5 } }}>
                <CardLabel>Contact Details</CardLabel>
                <Stack spacing={2} divider={<Divider />}>
                  <DetailRow icon={<EmailIcon />}>
                    <Box component="a" href={`mailto:${PERSONAL.email}`}
                      sx={{ color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                      {PERSONAL.email}
                    </Box>
                  </DetailRow>
                  <DetailRow icon={<PhoneIcon />}>{PERSONAL.phone}</DetailRow>
                  <DetailRow icon={<PinIcon />}>{PERSONAL.location}</DetailRow>
                  <DetailRow icon={<GlobeIcon />}>{PERSONAL.citizenship}</DetailRow>
                </Stack>
              </CardContent>
            </Card>

            <Card>
              <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                <CardLabel>Online</CardLabel>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <SocialPill href={PERSONAL.github}   icon={<GithubIcon />}   label="GitHub" />
                  <SocialPill href={PERSONAL.linkedin} icon={<LinkedInIcon />} label="LinkedIn" />
                </Box>
              </CardContent>
            </Card>

            <Button variant="contained" color="primary" fullWidth size="large"
              component="a" href={`mailto:${PERSONAL.email}`} sx={{ py: 1.5 }}>
              Send Me an Email
            </Button>
          </Stack>

          {/* Right column — References */}
          <Card>
            <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
              <CardLabel>References</CardLabel>
              <Stack spacing={2.5} divider={<Divider />}>
                {REFERENCES.map((ref) => (
                  <Box key={ref.name} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, pt: 0.5 }}>
                    <Avatar sx={{
                      width: 44, height: 44, flexShrink: 0,
                      bgcolor: 'rgba(79,123,235,0.1)', color: 'primary.main',
                      border: '1px solid', borderColor: 'primary.main',
                      fontSize: '1rem', fontWeight: 700,
                    }}>
                      {ref.name.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600} color="white" gutterBottom={false}>
                        {ref.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mt: 0.25 }}>
                        {ref.role}
                      </Typography>
                      <Typography variant="caption" color="primary.main" sx={{ display: 'block', mt: 0.1 }}>
                        {ref.company}
                      </Typography>
                      <Box component="a" href={`tel:${ref.phone.replace(/\s/g, '')}`}
                        sx={{ display: 'block', mt: 0.5, fontFamily: 'monospace', fontSize: '0.8rem', color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                        {ref.phone}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </CardContent>
          </Card>

        </Box>
      </Box>
    </Box>
  );
}
