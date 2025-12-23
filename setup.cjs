// setup.js - Run this with: node setup.js
const fs = require('fs');
const path = require('path');

const files = {
  // Data files
  'src/data/personalInfo.js': `export const personalInfo = {
  name: "Anurag Agrawal",
  title: "Full Stack Developer",
  tagline: "Building Digital Experiences",
  bio: "Passionate developer with expertise in creating modern, scalable web applications.",
  location: "Dadri, Uttar Pradesh, India",
  email: "anurag.agrawal@example.com",
  phone: "+91-9876543210",
  social: {
    linkedin: "https://linkedin.com/in/anurag-agrawal",
    github: "https://github.com/anurag-agrawal",
    twitter: "https://twitter.com/anurag_dev",
    instagram: "https://instagram.com/anurag_agrawal"
  },
  resume: "/resume/Anurag_Agrawal_Resume.pdf",
  aboutMe: [
    "I'm a Full Stack Developer with 2+ years of experience building responsive web applications.",
    "I specialize in React, Node.js, and modern web technologies.",
    "I'm passionate about clean code, user experience, and continuous learning."
  ],
  interests: ["Web Development", "UI/UX Design", "Open Source", "Cloud Computing", "Photography", "Gaming"]
};`,

  'src/data/educationData.js': `export const educationData = [
  {
    id: 1,
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "ABC Institute of Technology",
    location: "Greater Noida, UP",
    duration: "2020 - 2024",
    gpa: "8.9/10",
    achievements: ["First Division with Honors", "Dean's List"]
  }
];`,

  'src/data/careerData.js': `export const careerData = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "TechCorp Solutions",
    location: "Noida, UP",
    duration: "June 2024 - Present",
    type: "Full-time",
    description: [
      "Developed and maintained 10+ client projects",
      "Implemented responsive UI components",
      "Optimized database queries"
    ],
    technologies: ["React", "Node.js", "MongoDB"]
  }
];`,

  'src/data/skillsData.js': `export const skillsData = {
  languages: [
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 }
  ],
  frameworks: [
    { name: "React", level: 95 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 90 }
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 70 },
    { name: "VS Code", level: 95 }
  ]
};`,

  'src/data/projectsData.js': `export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce platform with cart and payments",
    technologies: ["React", "Node.js", "MongoDB"],
    image: "https://via.placeholder.com/800x600/6366f1/ffffff?text=E-Commerce",
    github: "https://github.com",
    live: "https://example.com",
    category: "Full Stack",
    featured: true
  }
];`,

  // Index files for pages
  'src/pages/Home/index.js': `export { default } from './Home';`,
  'src/pages/About/index.js': `export { default } from './About';`,
  'src/pages/Education/index.js': `export { default } from './Education';`,
  'src/pages/Career/index.js': `export { default } from './Career';`,
  'src/pages/Skills/index.js': `export { default } from './Skills';`,
  'src/pages/Projects/index.js': `export { default } from './Projects';`,
  'src/pages/Personal/index.js': `export { default } from './Personal';`,
  'src/pages/Contact/index.js': `export { default } from './Contact';`,

  // Index files for components
  'src/components/common/Button/index.js': `export { default } from './Button';`,
  'src/components/common/Navbar/index.js': `export { default } from './Navbar';`,
  'src/components/common/Footer/index.js': `export { default } from './Footer';`,
  'src/components/common/DownloadResume/index.js': `export { default } from './DownloadResume';`,
  'src/components/layout/index.js': `export { default } from './MainLayout';`
};

// Create files
Object.keys(files).forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, files[filePath], 'utf8');
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n🎉 All basic files created successfully!');
console.log('Next: Copy the component code from the tutorial into each file.');
