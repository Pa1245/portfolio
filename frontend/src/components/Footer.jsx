import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';
import './Footer.css';
import { profile } from '../data/mock';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>{profile.name}</h4>
            <p className="text-muted">{profile.title}</p>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="text-muted">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
