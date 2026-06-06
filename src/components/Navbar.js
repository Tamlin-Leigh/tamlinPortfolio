import { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const LINKS = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/skills',     label: 'Skills' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects',   label: 'Projects' },
  { to: '/contact',    label: 'Contact' },
];

const HamburgerIcon = ({ open }) => (
  <Box sx={{ width: 22, height: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1, transition: '0.25s', transformOrigin: 'left center', transform: open ? 'rotate(45deg) translateY(-1px)' : 'none' }} />
    <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1, transition: '0.25s', opacity: open ? 0 : 1 }} />
    <Box sx={{ height: 2, bgcolor: 'text.primary', borderRadius: 1, transition: '0.25s', transformOrigin: 'left center', transform: open ? 'rotate(-45deg) translateY(1px)' : 'none' }} />
  </Box>
);

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (to) => {
    setDrawerOpen(false);
    navigate(to);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: 'rgba(10,10,10,0.88)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          zIndex: 100,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px !important' }}>
          <Box
            component={NavLink}
            to="/"
            sx={{
              color: 'primary.main',
              fontFamily: 'monospace',
              fontSize: '1.1rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              textDecoration: 'none',
            }}
          >
            Tamlin Duckworth
          </Box>

          {/* Desktop nav */}
          <Box component="nav" sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {LINKS.map(({ to, label }) => (
              <NavLink key={to} to={to} end={to === '/'} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                  <Button
                    size="small"
                    sx={{
                      color: isActive ? 'primary.main' : 'text.secondary',
                      px: 1.25,
                      py: 0.5,
                      fontSize: '0.875rem',
                      minWidth: 0,
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', color: 'text.primary' },
                    }}
                  >
                    {label}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setDrawerOpen((v) => !v)}
            sx={{ display: { xs: 'flex', md: 'none' }, p: 1 }}
            aria-label="menu"
          >
            <HamburgerIcon open={drawerOpen} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 220,
            bgcolor: 'rgba(10,10,10,0.97)',
            backdropFilter: 'blur(14px)',
            borderLeft: '1px solid',
            borderColor: 'divider',
            pt: 2,
          },
        }}
      >
        <List disablePadding>
          {LINKS.map(({ to, label }) => (
            <NavLink key={to} to={to} end={to === '/'} style={{ textDecoration: 'none' }}>
              {({ isActive }) => (
                <ListItemButton
                  onClick={() => handleNavClick(to)}
                  sx={{
                    py: 1.5,
                    px: 3,
                    color: isActive ? 'primary.main' : 'text.secondary',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)', color: 'text.primary' },
                  }}
                >
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ fontSize: '1rem', fontWeight: isActive ? 600 : 400 }}
                  />
                </ListItemButton>
              )}
            </NavLink>
          ))}
        </List>
      </Drawer>
    </>
  );
}
