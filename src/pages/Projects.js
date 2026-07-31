import { Box, Typography, Card, CardContent, Chip, IconButton } from '@mui/material';
import { PROJECTS, PERSONAL } from '../data';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const FolderIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="26" height="26">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
  </svg>
);

const PAGE_SX = { flex: 1, pt: { xs: 11, md: 14 }, pb: 12, px: { xs: 3, sm: 5, md: 8, lg: 10 }, position: 'relative', zIndex: 1 };
const INNER_SX = { maxWidth: 1100, mx: 'auto' };
const TITLE_SX = {
  display: 'inline-block', mb: 0.75,
  '&::after': { content: '""', display: 'block', width: 44, height: 3, bgcolor: 'primary.main', borderRadius: 1, mt: 0.6 },
};

export default function Projects() {
  return (
    <Box component="main" sx={PAGE_SX}>
      <Box sx={INNER_SX}>

        <Box mb={6}>
          <Typography variant="h2" sx={TITLE_SX}>Projects</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600, my: '1%' }}>
            A selection of work. See more on{' '}
            <Box component="a" href={PERSONAL.github} target="_blank" rel="noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              GitHub
            </Box>.
          </Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 3,
        }}>
          {PROJECTS.map((project) => (
            <Card key={project.name} sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 1.5, p: 3, '&:last-child': { pb: 3 } }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Box sx={{ color: 'primary.main' }}><FolderIcon /></Box>
                  <Box sx={{ display: 'flex' }}>
                    {project.repo && (
                      <IconButton size="small" component="a" href={project.repo} target="_blank" rel="noreferrer"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <GithubIcon />
                      </IconButton>
                    )}
                    {project.live && (
                      <IconButton size="small" component="a" href={project.live} target="_blank" rel="noreferrer"
                        sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                        <ExternalIcon />
                      </IconButton>
                    )}
                  </Box>
                </Box>

                <Typography variant="subtitle1" fontWeight={600} color="white" fontSize="1rem">
                  {project.name}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ flex: 1, lineHeight: 1.75 }}>
                  {project.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 0.5 }}>
                  {project.tech.map((t) => (
                    <Chip key={t} label={t} size="small"
                      sx={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'primary.main', bgcolor: 'rgba(79,123,235,0.1)', border: 'none' }} />
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box sx={{
          mt: 5,
          p: 3,
          borderRadius: 2,
          border: '1px solid',
          borderColor: 'rgba(255,255,255,0.08)',
          bgcolor: 'rgba(255,255,255,0.03)',
        }}>
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 600 }}>Note: </Box>
            A number of the systems I've worked on are client-owned and cannot be publicly shared due to confidentiality.
            These include work done at{' '}
            <Box component="a" href="https://fluenty.co.za/" target="_blank" rel="noreferrer"
              sx={{ color: 'primary.main', textDecoration: 'underline', textUnderlineOffset: 3 }}>
              Fluenty IT
            </Box>
            {' '}across various client platforms — spanning Laravel back-ends, React front-ends, and full-stack admin systems.
          </Typography>
        </Box>

      </Box>
    </Box>
  );
}
