import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Naveen Kumar V</h3>
            <p>Java Developer</p>
          </div>
          
          <div className="footer-socials">
            <a href="https://github.com/naveen-kumar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/naveen-kumar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:naveenkumar@example.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Naveen Kumar V. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
