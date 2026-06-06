import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Fade, LinearProgress, Tooltip, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import {
  SiHtml5, SiCss, SiJavascript, SiPhp, SiReact, SiNextdotjs, SiRedux,
  SiJquery, SiTailwindcss, SiBootstrap, SiLaravel, SiMysql, SiDocker,
  SiGit, SiFirebase, SiJira, SiFigma, SiOpenai, SiPostman, SiClaude,
} from 'react-icons/si';
import { STACK, PROFICIENCY } from '../data';

const ICON_MAP = {
  'HTML5':          SiHtml5,
  'CSS3':           SiCss,
  'Tailwind CSS':   SiTailwindcss,
  'Bootstrap':      SiBootstrap,
  'PHP':            SiPhp,
  'Laravel':        SiLaravel,
  'RESTful APIs':   SiPostman,
  'MySQL':          SiMysql,
  'Docker':         SiDocker,
  'JavaScript':     SiJavascript,
  'React':          SiReact,
  'Next.js':        SiNextdotjs,
  'Redux':          SiRedux,
  'jQuery':         SiJquery,
  'Git':            SiGit,
  'Firebase':       SiFirebase,
  'Agile / Scrum':  SiJira,
  'Graphic Design': SiFigma,
  'Other AI Tools': SiOpenai,
  'Claude AI':      SiClaude,
};

const PAGE_SX = {
  flex: 1,
  pt: { xs: 11, md: 14 },
  pb: 12,
  px: { xs: 3, sm: 5, md: 8, lg: 10 },
  position: 'relative',
  zIndex: 1,
};

const TITLE_SX = {
  display: 'inline-block',
  mb: 0.75,
  '&::after': {
    content: '""',
    display: 'block',
    width: 44,
    height: 3,
    bgcolor: 'primary.main',
    borderRadius: 1,
    mt: 0.6,
  },
};

const SECTION_LABEL_SX = {
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: 'primary.main',
  display: 'block',
  mb: 2.5,
};

function StackIcon({ name, color }) {
  const theme = useTheme();
  const Icon = ICON_MAP[name];
  if (!Icon) return null;

  return (
    <Tooltip title={name} placement="top" arrow enterDelay={200}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
          p: 2,
          border: `1px solid ${alpha(color, 0.28)}`,
          borderRadius: `${theme.shape.borderRadius}px`,
          bgcolor: alpha(color, 0.07),
          cursor: 'default',
          userSelect: 'none',
          transition: theme.transitions.create(
            ['border-color', 'background-color', 'box-shadow', 'transform'],
            { duration: theme.transitions.duration.short }
          ),
          '&:hover': {
            borderColor: alpha(color, 0.85),
            bgcolor: alpha(color, 0.15),
            boxShadow: `0 0 22px ${alpha(color, 0.3)}, 0 4px 14px ${alpha(color, 0.15)}`,
            transform: 'translateY(-4px) scale(1.08)',
          },
        }}
      >
        <Icon size={30} color={color} />
        <Typography
          sx={{
            fontSize: '0.68rem',
            fontWeight: 500,
            color: 'text.secondary',
            textAlign: 'center',
            lineHeight: 1.2,
          }}
        >
          {name}
        </Typography>
      </Box>
    </Tooltip>
  );
}

function ProficiencyBar({ skill, level, animate, index }) {
  const theme = useTheme();
  const delay = index * 0.09;

  return (
    <Fade in={animate} timeout={600} style={{ transitionDelay: animate ? `${delay}s` : '0s' }}>
      <Box mb={3.5} sx={{ maxWidth: 600, my: '2.5%' }}>
        <Box display="flex" justifyContent="space-between" alignItems="baseline" mb={1}>
          <Typography variant="body2" fontWeight={500} color="text.primary">
            {skill}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'primary.main',
              opacity: animate ? 1 : 0,
              transition: theme.transitions.create('opacity', {
                duration: theme.transitions.duration.standard,
                delay: `${0.5 + delay}s`,
              }),
            }}
          >
            {level}%
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={animate ? level : 0}
          sx={{
            height: 5,
            borderRadius: 99,
            bgcolor: theme.palette.divider,
            '& .MuiLinearProgress-bar': {
              borderRadius: 99,
              background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${alpha(theme.palette.primary.main, 0.6)} 100%)`,
              boxShadow: `0 0 10px ${alpha(theme.palette.primary.main, 0.45)}`,
              transition: `transform ${1.0 + index * 0.06}s cubic-bezier(0.4, 0, 0.2, 1) ${delay + 0.15}s !important`,
            },
          }}
        />
      </Box>
    </Fade>
  );
}

export default function Skills() {
  const [barsAnimate, setBarsAnimate] = useState(false);
  const barsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setBarsAnimate(true); },
      { threshold: 0.1 }
    );
    if (barsRef.current) obs.observe(barsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Box component="main" sx={PAGE_SX}>
      <Box sx={{ maxWidth: 1100, mx: 'auto' }}>

        <Box mb={6}>
          <Typography variant="h2" sx={TITLE_SX}>Skills</Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 600, my: '1%' }}>Technologies and tools I work with.</Typography>
        </Box>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: 8,
          alignItems: 'start',
        }}>

          {/* Tech Stack */}
          <Box>
            <Typography sx={SECTION_LABEL_SX}>Tech Stack</Typography>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(88px, 1fr))',
              gap: 1.5,
            }}>
              {STACK.map((tech) => (
                <StackIcon key={tech.name} {...tech} />
              ))}
            </Box>
          </Box>

          {/* Proficiency */}
          <Box>
            <Typography sx={SECTION_LABEL_SX}>Proficiency</Typography>
            <Box ref={barsRef}>
              {PROFICIENCY.map(({ skill, level }, i) => (
                <ProficiencyBar key={skill} skill={skill} level={level} animate={barsAnimate} index={i} />
              ))}
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
