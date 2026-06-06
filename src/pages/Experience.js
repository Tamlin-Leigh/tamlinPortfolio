import { Box, Typography, Card, CardContent, Chip, Stack } from '@mui/material';
import { keyframes } from '@mui/system';
import { EXPERIENCE, EDUCATION } from '../data';
import codespaceLogo from '../assets/codespace-logo.svg';
import fluentyLogo from '../assets/fluenty-logo.svg';

const COMPANY_LOGOS = {
  'Fluenty IT': fluentyLogo,
};

const pulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(79,123,235,0.5); }
  70%  { box-shadow: 0 0 0 8px rgba(79,123,235,0); }
  100% { box-shadow: 0 0 0 0 rgba(79,123,235,0); }
`;

function TimelineItem({ role, company, period, current, bullets, body, link, logo }) {
  return (
    <Box sx={{ display: 'flex', gap: 2.5, mb: 3 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 20, flexShrink: 0, pt: 0.5 }}>
        <Box sx={{
          width: 12, height: 12, borderRadius: '50%',
          bgcolor: 'primary.main', flexShrink: 0,
          ...(current && { animation: `${pulse} 2s infinite` }),
        }} />
        <Box sx={{ flex: 1, width: '1px', bgcolor: 'divider', mt: 1 }} />
      </Box>
      <Card sx={{ flex: 1, mb: 0 }}>
        <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1.5, mb: 2 }}>
            <Box>
              {link && logo ? (
                <Box component="a" href={link} target="_blank" rel="noreferrer" mt={0.5} sx={{ display: 'inline-block', opacity: 0.85, transition: 'opacity 0.15s', '&:hover': { opacity: 1 } }}>
                  <Box component="img" src={logo} alt={company} sx={{ height: 18, display: 'block' }} />
                </Box>
              ) : (
                <Typography variant="body2" color="primary.main" mt={0.25}>{company}</Typography>
              )}
               <Typography variant="subtitle1" fontWeight={600} color="white" fontSize="1rem">
                {role}
              </Typography>
            </Box>
            <Chip
              label={period}
              size="small"
              variant={current ? 'outlined' : 'filled'}
              color={current ? 'primary' : 'default'}
              sx={{ fontFamily: 'monospace', fontSize: '0.75rem', bgcolor: current ? undefined : '#1e1e1e' }}
            />
          </Box>
          {bullets ? (
            <Stack component="ul" spacing={1} sx={{ pl: 2.5, m: 0 }}>
              {bullets.map((point, i) => (
                <Typography key={i} component="li" variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>
                  {point}
                </Typography>
              ))}
            </Stack>
          ) : (
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.75 }}>{body}</Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

function SectionLabel({ children }) {
  return (
    <Typography variant="caption" sx={{
      display: 'block', textTransform: 'uppercase', letterSpacing: '0.12em',
      color: 'text.secondary', fontWeight: 500, mb: 3,
      pl: 2, borderLeft: '2px solid', borderColor: 'divider',
    }}>
      {children}
    </Typography>
  );
}

export default function Experience() {
  return (
    <Box component="main" sx={{ flex: 1, pt: { xs: 11, md: 14 }, pb: 12, px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 }}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>

        <Box mb={6}>
          <Typography variant="h2" sx={{ display: 'inline-block', mb: 0.75, '&::after': { content: '""', display: 'block', width: 44, height: 3, bgcolor: 'primary.main', borderRadius: 1, mt: 0.6 } }}>
            Experience
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600, my: '1%' }} >My professional journey so far.</Typography>
        </Box>

        <Box mb={6}>
          <SectionLabel>Work</SectionLabel>
          {EXPERIENCE.map((job, i) => (
            <TimelineItem key={i} role={job.role} company={job.company} period={job.period} current={job.current} bullets={job.description} link={job.link} logo={job.link ? COMPANY_LOGOS[job.company] : undefined} />
          ))}
        </Box>

        <Box>
          <SectionLabel>Education</SectionLabel>
          {EDUCATION.map((edu, i) => (
            <TimelineItem key={i} role={edu.qualification} company={edu.institution} period={edu.period} current={false} body={edu.description} link={edu.link} logo={edu.link ? codespaceLogo : undefined} />
          ))}
        </Box>

      </Box>
    </Box>
  );
}
