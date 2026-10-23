export const PERSONAL = {
  name: 'Tamlin Duckworth',
  title: 'Full Stack Mid-Level Software Developer',
  location: 'Goodwood, Cape Town',
  citizenship: 'South African & UK Citizen',
  availability: 'Open to remote/contract work with UK companies',
  email: 'tamlinleighduckworth@gmail.com',
  phone: '061 064 0484',
  github: 'https://github.com/Tamlin-Leigh',
  linkedin: 'https://www.linkedin.com/in/tamlin-leigh-duckworth/',
};

export const ABOUT = {
  bio: [
    'I am a passionate Full Stack Software Developer dedicated to turning complex ideas into clean, functional, and scalable web applications. I thrive across the entire development lifecycle — whether I\'m crafting intuitive, high-performance front ends or architecting robust back-end systems.',
    'I believe my greatest asset isn\'t just the languages currently in my toolkit, but my innate ability to master the ones I haven\'t met yet. I approach every roadblock with a "New Challenge" mindset, viewing unknown technologies not as obstacles, but as opportunities to expand my capabilities.',
    'However I\'m also human and have many interests outside of my career, like fitness, art, music, a strong love for animals and gaming.',
  ],
  interests: ['Fitness', 'Art', 'Music', 'Animals', 'Gaming'],
};

export const STACK = [
  { name: 'HTML5',        color: '#e34f26' },
  { name: 'CSS3',         color: '#1572b6' },
  { name: 'Tailwind CSS', color: '#38bdf8' },
  { name: 'Bootstrap',    color: '#7952b3' },
  { name: 'PHP',          color: '#777bb4' },
  { name: 'Laravel',      color: '#ff2d20' },
  { name: 'RESTful APIs', color: '#4f7beb' },
  { name: 'MySQL',        color: '#4479a1' },
  { name: 'Docker',       color: '#2496ed' },
  { name: 'JavaScript',   color: '#f7df1e' },
  { name: 'React',        color: '#61dafb' },
  { name: 'Next.js',      color: '#e8e8e8' },
  { name: 'Redux',        color: '#764abc' },
  { name: 'jQuery',       color: '#0769ad' },
  { name: 'Git',          color: '#f05032' },
  { name: 'Firebase',     color: '#ffca28' },
  { name: 'Agile / Scrum',color: '#22d3ee' },
  { name: 'Graphic Design',color: '#f472b6' },
  { name: 'Claude AI',    color: '#cc785c' },
  { name: 'Other AI Tools',     color: '#a855f7' },

];

export const PROFICIENCY = [
  { skill: 'JavaScript',          level: 75 },
  { skill: 'PHP & Laravel',       level: 85 },
  { skill: 'React & Next.js',     level: 70 },
  { skill: 'MySQL',               level: 80 },
  { skill: 'Git & DevOps',        level: 60 },
  { skill: 'Graphic Design',      level: 90 },
  { skill: 'AI Tools',            level: 78 },
];

export const SKILLS = [
  {
    category: 'Languages',
    items: ['PHP', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Front-End',
    items: ['React', 'Next.js', 'Redux', 'jQuery', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Back-End',
    items: ['Laravel', 'RESTful APIs', 'Eloquent ORM', 'Filament', 'Laravel Nova'],
  },
  {
    category: 'Databases',
    items: ['MySQL'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'Git', 'Firebase'],
  },
  {
    category: 'Tools & Methods',
    items: ['JIRA', 'Trello', 'Agile', 'Scrum', 'Google Analytics', 'Google Tag Manager'],
  },
  {
    category: 'Other',
    items: ['Other AI Tools', 'Graphic Design', 'Claude AI'],
  },
];

export const EXPERIENCE = [
  {
    company: 'Fluenty IT',
    link: 'https://fluenty.co.za/',
    role: 'Full Stack Software Developer',
    period: '2021 – 2026',
    current: true,
    description: [
      'Joined with no prior experience in the Laravel PHP framework. Despite this, quickly adapted and developed the necessary skills to contribute effectively.',
      'Although initially hired as a front-end developer, the ability to learn new technologies rapidly allowed a transition into back-end responsibilities within a few months — gaining experience building APIs, utilising Eloquent ORM, and implementing authentication systems.',
      'Growth extended far beyond the initial role, gaining practical experience with React, Next.js, Filament and Laravel Nova, as well as Google Analytics and Google Tag Manager.',
    ],
  },
  {
    company: 'Monetize',
    role: 'Junior Magento Developer',
    period: '2019 – 2021',
    current: false,
    description: [
      'Leveraged 2 years of experience as a Magento Developer to build and maintain robust e-commerce solutions.',
      'Collaborated with cross-functional teams and engaged directly with clients to gather requirements, provide project updates, and ensure successful project delivery.',
      'Developed and delivered intuitive, user-centric experiences, improving site usability and customer satisfaction.',
    ],
  },
];

export const EDUCATION = [
  {
    institution: 'Codespace Academy',
    qualification: 'Full Stack Development Course',
    period: '2019',
    description: 'Developed core full-stack skills through university projects, gaining hands-on experience with HTML, CSS, JavaScript, PHP, and MySQL. Effectively utilised Git for version control and collaborated within a team-based environment to deliver project goals.',
    link: 'https://www.codespace.co.za/',
  },
];

export const PROJECTS = [
  {
    name: 'BandLink',
    description: 'A work-in-progress Laravel platform connecting bands, venues and event organisers. Each user type signs up with its own role and gets a dedicated dashboard for finding and booking gigs.',
    tech: ['Laravel', 'PHP'],
    repo: 'https://github.com/Tamlin-Leigh/bandlink-laravel',
    live: '',
  },
  {
    name: 'EvoTracker',
    description: 'A work-in-progress full-stack body measurement tracker built with React and Laravel. Log monthly measurements, visualise your cm loss through charts, and get 3-month progress estimates.',
    tech: ['React', 'Laravel', 'Firebase Auth', 'Firestore', 'Vercel', 'Railway'],
    repo: 'https://github.com/Tamlin-Leigh/evotracker',
    live: '',
  },
  {
    name: 'Portfolio Site',
    description: 'This portfolio — a React single-page app deployed on Firebase Hosting. Designed and built from scratch.',
    tech: ['React', 'CSS', 'Firebase'],
    repo: 'https://github.com/Tamlin-Leigh/tamlinPortfolio',
    live: 'https://tamlinportfolio.web.app',
  },
  {
    name: 'Ampath',
    description: 'I contributed to the Ampath platform — a large-scale healthcare web application. Worked on both the public-facing site and the admin system.',
    tech: ['PHP', 'JavaScript', 'CSS'],
    live: 'https://www.ampath.co.za/',
    repo: '',
  },
];

export const REFERENCES = [
  {
    name: 'Shane Demper',
    company: 'Fluenty IT',
    role: 'Project Manager & Scrum Master',
    phone: '079 395 8610',
  },
  {
    name: 'Jacques Coetzee',
    company: 'Fluenty IT',
    role: 'Senior Developer & Mentor',
    phone: '083 255 5554',
  },
  {
    name: 'Kerry Kazadi',
    company: 'Monetize',
    role: 'Sr. Software Engineer (E-commerce)',
    phone: '071 535 7620',
  },
];

// LinkedIn recommendations.
export const RECOMMENDATIONS = [
  {
    name: "Vincent van Wyk",
    title: "Senior DevSecOps Engineer - CardRails Infrastructure",
    company: "Peach Payments",
    relationship: "Worked with Tamlin at Fluenty",
    text: "I had the pleasure of working with Tamlin at Fluenty and appreciated the opportunity to see her contribute to our software development team. Tamlin is a dedicated Fullstack Developer with an understanding of the importance of building software that is functional, reliable, maintainable, and user-friendly. Working across front-end and back-end development requires versatility, problem-solving skills, and attention to detail, along with the ability to integrate APIs, troubleshoot technical challenges, and contribute to delivering complete software solutions. Beyond technical skills, Tamlin brings a willingness to learn, adaptability, and a collaborative approach to her work. These qualities are particularly valuable in the fast-paced world of software development, where technologies evolve constantly and teamwork plays an essential role in delivering successful products. I believe Tamlin has valuable skills to offer, and I wish her continued growth and success in her software development career. I would happily recommend her to organisations looking for a committed Fullstack Developer who is eager to contribute, learn, and grow professionally.",
  },
  {
    name: "Emma Dicks",
    title: "CEO & Co-Founder",
    company: "CodeSpace Academy",
    relationship: "CodeSpace graduate community",
    text: "Since graduating from CodeSpace, Tammi has been an active member of our graduate community. She has shared her experience as an in-person panelist at our Code Conversation series, generously passing on her knowledge. I know Tammi as a very hardworking and loyal person who takes great pride in delivering high quality.",
  },
    {
    name: "Angelique Caldeira Coetzee",
    title: "QA Engineer",
    company: "Scrums.com",
    relationship: "Worked with Tamlin at Fluenty",
    text: "I’ve had the pleasure of getting to know Tamlin-Leigh over the past few years through work, and what started as a professional connection has grown into a friendship. During this time, I’ve come to appreciate her creativity, passion, and enthusiasm for learning and exploring new opportunities. Tamlin is a vibrant and artistic individual who brings energy and individuality to everything she pursues. She has a genuine willingness to learn, grow, and embrace new challenges, which I believe are valuable qualities in any professional environment.  I admire her  openness to new possibilities, and I have no doubt that these qualities will serve her well in her career. I look forward to seeing all that she continues to achieve",
  },
    {
    name: "Terri Matthews",
    title: "Chief Operations Officer",
    company: "Fluenty IT",
    relationship: "Worked with Tamlin at Fluenty",
    text: "I had the pleasure of working with Tammi for five years and had the opportunity to see her grow and develop throughout her career. Tammi is someone who genuinely cares about the work she does and takes pride in delivering quality results. She is thorough, pays close attention to detail, and is diligent about following instructions and ensuring that expectations are met.  What stands out about Tammi is her commitment to doing things properly and her willingness to learn and grow. It was rewarding to see her develop professionally over the years, and I believe her dedication, conscientiousness and positive approach would make her a valuable addition to any team.  I would happily recommend Tammi to any organisation looking for someone who takes ownership of her work and is committed to delivering to the best of her ability.",
  },
];
