import { useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, Button } from '@mui/material';
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa';
import { PERSONAL, RECOMMENDATIONS } from '../data';

const SHOW_PLACEHOLDERS = process.env.NODE_ENV === 'development';
const CLAMP_LINES = 5;
const LONG_TEXT = 320; // characters before "Read more" appears

const initials = (name) =>
  name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0].toUpperCase()).join('');

function RecommendationCard({ name, title, company, relationship, date, text }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > LONG_TEXT;

  return (
    <Card sx={{ height: '100%', display: 'flex' }}>
      <CardContent sx={{ p: 3, '&:last-child': { pb: 3 }, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box sx={{ color: 'primary.main', opacity: 0.6, mb: 1.5, fontSize: 22 }}>
          <FaQuoteLeft />
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            lineHeight: 1.8,
            whiteSpace: 'pre-line',
            ...(!expanded && isLong && {
              display: '-webkit-box',
              WebkitLineClamp: CLAMP_LINES,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }),
          }}
        >
          {text}
        </Typography>

        {isLong && (
          <Button
            size="small"
            onClick={() => setExpanded((v) => !v)}
            sx={{ alignSelf: 'flex-start', mt: 1, px: 0, minWidth: 0 }}
          >
            {expanded ? 'Show less' : 'Read more'}
          </Button>
        )}

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto', pt: 2.5 }}>
          <Avatar sx={{ bgcolor: '#1e1e1e', color: 'primary.main', border: '1px solid', borderColor: 'divider', width: 40, height: 40, fontSize: '0.9rem', fontWeight: 600 }}>
            {initials(name)}
          </Avatar>
          <Box sx={{ minWidth: 0 }}>
            <Typography variant="subtitle2" color="white" fontWeight={600} lineHeight={1.3}>
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary" display="block" lineHeight={1.4}>
              {[title, company].filter(Boolean).join(' · ')}
            </Typography>
            {(relationship || date) && (
              <Typography variant="caption" color="text.secondary" display="block" sx={{ opacity: 0.7 }} lineHeight={1.4}>
                {[relationship, date].filter(Boolean).join(' · ')}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default function Recommendations() {
  const items = RECOMMENDATIONS.filter((r) => SHOW_PLACEHOLDERS || !r.placeholder);
  if (items.length === 0) return null;

  return (
    <Box>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: items.length === 1 ? '1fr' : '1fr 1fr' },
        gap: 2.5,
        alignItems: 'stretch',
      }}>
        {items.map((rec, i) => <RecommendationCard key={i} {...rec} />)}
      </Box>

      <Button
        component="a"
        href={`${PERSONAL.linkedin.replace(/\/$/, '')}/details/recommendations/`}
        target="_blank"
        rel="noreferrer"
        startIcon={<FaLinkedin />}
        sx={{ mt: 2.5, color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
      >
        View all recommendations on LinkedIn
      </Button>
    </Box>
  );
}
