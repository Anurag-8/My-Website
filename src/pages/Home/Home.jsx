import { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaDownload, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personalInfo';
import { educationData } from '../../data/educationData';
import { careerData } from '../../data/careerData';
import { skillsData } from '../../data/skillsData';
import { projectsData } from '../../data/projectsData';
import DownloadResume from '../../components/common/DownloadResume';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const renderSkillBar = (skill) => (
    <div key={skill.name} className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-percentage">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
      </div>
    </div>
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-greeting">Hi, I'm {personalInfo.name}</h1>
              <h2 className="hero-title">{personalInfo.title}</h2>
              <p className="hero-subtitle">{personalInfo.tagline}</p>
              <p className="hero-description">{personalInfo.bio}</p>

              <div className="hero-cta">
                <DownloadResume />
                <a href="#contact" className="btn btn-outline">
                  <FaEnvelope /> Contact Me
                </a>
              </div>

              <div className="hero-social">
                <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                {/*<a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>*/}
                <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div className="image-wrapper">
                <img src="/images/profile.jpg" alt={personalInfo.name} />
                <div className="image-backdrop"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-highlights">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card">
              <div className="highlight-icon">💼</div>
              <h3>2+ Year</h3>
              <p>Professional Experience</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🚀</div>
              <h3>5+ Projects</h3>
              <p>Live Applications</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>Full Stack</h3>
              <p>.NET & React Expert</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-grid">
              <div className="about-image">
                <img src="/images/profile.jpg" alt={personalInfo.name} />
              </div>
              <div className="about-text">
                {personalInfo.aboutMe.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}

                <div className="about-interests">
                  <h3>Interests & Hobbies</h3>
                  <div className="interests-tags">
                    {personalInfo.interests.map((interest, idx) => (
                      <span key={idx} className="interest-tag">{interest}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-timeline">
            {educationData.map((edu, index) => (
              <div key={edu.id} className={`education-card ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="card-content">
                  <div className="card-header">
                    <h3 className="degree">{edu.degree}</h3>
                    <p className="field">{edu.field}</p>
                  </div>
                  <div className="institution-info">
                    <h4>{edu.institution}</h4>
                    <p>{edu.location}</p>
                    <p>{edu.duration}</p>
                    {edu.gpa && <p className="grade-info">GPA: {edu.gpa}</p>}
                    {edu.percentage && <p className="grade-info">{edu.percentage}</p>}
                  </div>
                  {edu.achievements && (
                    <div className="achievements">
                      <ul>
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section id="career" className="career-section">
        <div className="container">
          <h2 className="section-title">Career Experience</h2>
          <div className="career-timeline">
            {careerData.map((job) => (
              <div key={job.id} className="career-card">
                <div className="card-left">
                  <div className="timeline-marker">💼</div>
                  <div className="timeline-line"></div>
                </div>
                <div className="card-right">
                  <div className="job-header">
                    <div>
                      <h3 className="job-title">{job.title}</h3>
                      <p className="company-name">{job.company}</p>
                    </div>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-meta">
                    <span>{job.location}</span>
                    <span>{job.duration}</span>
                  </div>
                  <div className="job-description">
                    <ul>
                      {job.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="job-technologies">
                    <div className="tech-tags">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>

          <div className="skills-wrapper">
            {/* Programming Languages */}
            <div className="skill-category-box">
              <h3 className="skill-category-heading">
                <span className="category-icon">💻</span>
                Programming Languages
              </h3>
              <div className="skills-grid-simple">
                {skillsData.languages.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="skill-category-box">
              <h3 className="skill-category-heading">
                <span className="category-icon">🚀</span>
                Frameworks & Libraries
              </h3>
              <div className="skills-grid-simple">
                {skillsData.frameworks.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="skill-category-box">
              <h3 className="skill-category-heading">
                <span className="category-icon">🗄️</span>
                Databases
              </h3>
              <div className="skills-grid-simple">
                {skillsData.databases.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="skill-category-box">
              <h3 className="skill-category-heading">
                <span className="category-icon">🛠️</span>
                Development Tools
              </h3>
              <div className="skills-grid-simple">
                {skillsData.tools.map((skill) => (
                  <div key={skill.name} className="skill-badge">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projectsData.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {/*{project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FaGithub />
                        </a>
                      )}*/}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          🌐
                        </a>
                      )}
                    </div>
                  </div>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                    <span className="category-badge">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info-simple">
              <p>Feel free to reach out for collaborations or just a friendly chat!</p>
              <div className="contact-methods">
                <a href={`mailto:${personalInfo.email}`} className="contact-method">
                  <FaEnvelope />
                  <span>{personalInfo.email}</span>
                </a>
                <div className="social-links-contact">
                  <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  {/*<a href={personalInfo.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>*/}
                  <a href={personalInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
