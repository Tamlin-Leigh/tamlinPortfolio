import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ParticleBackground />
        <Navbar />
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/about"      element={<About />} />
          <Route path="/skills"     element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects"   element={<Projects />} />
          <Route path="/contact"    element={<Contact />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}
