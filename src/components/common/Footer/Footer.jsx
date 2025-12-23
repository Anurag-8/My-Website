import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaHeart, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../../../data/personalInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Anurag Agrawal</h3>
            <p className="footer-tagline">{personalInfo.tagline}</p>
            <div className="footer-social">
              <a 
                href={personalInfo.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="social-icon"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a 
                href={personalInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="social-icon"
              >
                <FaTwitter />
              </a>
              <a 
                href={personalInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={() => scrollToSection('home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection('about')}>
                  About
                </a>
              </li>
              <li>
                <a href="#skills" onClick={() => scrollToSection('skills')}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" onClick={() => scrollToSection('projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection('contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="contact-link">
                  <FaEnvelope className="contact-icon" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="contact-link">
                  <FaPhone className="contact-icon" />
                  <span>{personalInfo.phone}</span>
                </a>
              </li>
              <li>
                <div className="contact-link">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>{personalInfo.location}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {currentYear} <span className="highlight-name">Anurag Agrawal</span>. 
            Made with <FaHeart className="heart-icon" /> using React & .NET
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
