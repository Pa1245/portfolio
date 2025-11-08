import React from 'react';
import { MapPin } from 'lucide-react';
import './About.css';
import { profile, skills } from '../data/mock';

const About = () => {
  return (
    <div className="about">
      <div className="container">
        {/* Bio Section */}
        <section className="bio-section">
          <div className="bio-content">
            <h1>About Me</h1>
            <p className="bio-text">{profile.bio}</p>
            <div className="location">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <h3>{skillCategory.category}</h3>
                <div className="skill-tags">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <div className="philosophy-card">
            <h2>Product Philosophy</h2>
            <div className="philosophy-content">
              <div className="philosophy-item">
                <h4>User-Centric Innovation</h4>
                <p className="text-muted">
                  Every product decision starts with understanding user needs and pain points. Technology should serve people, not the other way around.
                </p>
              </div>
              <div className="philosophy-item">
                <h4>Data-Informed Strategy</h4>
                <p className="text-muted">
                  Leveraging analytics, A/B testing, and ML insights to validate hypotheses and drive continuous improvement in product experiences.
                </p>
              </div>
              <div className="philosophy-item">
                <h4>Cross-Functional Collaboration</h4>
                <p className="text-muted">
                  Building great products requires seamless collaboration between engineering, design, business, and data teams.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
