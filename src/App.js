import './App.css';

const GITHUB_USERNAME = 'Tamlin-Leigh';

const SKILLS = {
  Languages: ['JavaScript', 'Python', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express'],
  Tools: ['Git', 'GitHub', 'Firebase', 'VS Code'],
};

// Replace these with your actual projects
const PROJECTS = [
  {
    name: 'Project One',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['React', 'Firebase', 'CSS'],
    repo: `https://github.com/${GITHUB_USERNAME}/project-one`,
    live: '',
  },
  {
    name: 'Project Two',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Python', 'SQL', 'REST API'],
    repo: `https://github.com/${GITHUB_USERNAME}/project-two`,
    live: '',
  },
  {
    name: 'Project Three',
    description: 'A short description of what this project does and the problem it solves.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    repo: `https://github.com/${GITHUB_USERNAME}/project-three`,
    live: '',
  },
];

function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar">
      <span className="nav-logo">TD</span>
      <ul className="nav-links">
        {['about', 'skills', 'projects', 'contact'].map((link) => (
          <li key={link}>
            <button onClick={() => scrollTo(link)} className="nav-btn">
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Tamlin Duckworth</h1>
        <h2 className="hero-title">Software Developer</h2>
        <p className="hero-sub">
          I build clean, functional software and enjoy turning ideas into working products.
        </p>
        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </button>
          <a
            className="btn btn-outline"
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a software developer with a passion for building things that work well and look clean.
              I enjoy the full journey from idea to deployed product, and I'm always looking for ways to
              grow my skills and tackle new challenges.
            </p>
            <p>
              When I'm not coding I'm <strong>[add something personal here]</strong>. I'm currently
              open to new opportunities — feel free to reach out.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-num">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">∞</span>
              <span className="stat-label">Bugs Fixed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="section-inner">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <div className="skill-tags">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-title">Projects</h2>
        <p className="section-sub">
          A selection of personal projects. More on my{' '}
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="inline-link">
            GitHub
          </a>
          .
        </p>
        <div className="projects-grid">
          {PROJECTS.map((project) => (
            <div key={project.name} className="project-card">
              <div className="project-header">
                <span className="project-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 11h.01M12 11h.01M16 11h.01" />
                  </svg>
                </span>
                <div className="project-links">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noreferrer" title="View source" className="icon-link">
                      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" title="Live demo" className="icon-link">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="section-inner contact-inner">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub contact-sub">
          I'm currently open to new opportunities. Whether you have a question,
          a project idea, or just want to say hi — my inbox is open.
        </p>
        <div className="contact-links">
          <a href="mailto:tamlinleighduckworth@gmail.com" className="btn btn-primary">
            Send Me an Email
          </a>
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_LINKEDIN"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>Designed &amp; built by Tamlin Duckworth</p>
      <a
        href={`https://github.com/${GITHUB_USERNAME}`}
        target="_blank"
        rel="noreferrer"
        className="inline-link footer-sub"
      >
        GitHub
      </a>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
