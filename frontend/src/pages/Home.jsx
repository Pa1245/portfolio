import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Brain, TrendingUp } from 'lucide-react';
import './Home.css';
import { profile, projects } from '../data/mock';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-label">{profile.title}</p>
            <h1 className="hero-title">{profile.name}</h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="featured-skills">
        <div className="container">
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">
                <Code2 size={32} />
              </div>
              <h3>Product Strategy</h3>
              <p className="text-muted">
                Translating complex technical challenges into user-centric product solutions
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <Brain size={32} />
              </div>
              <h3>AI/ML Integration</h3>
              <p className="text-muted">
                Leveraging machine learning to drive personalization and business growth
              </p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">
                <TrendingUp size={32} />
              </div>
              <h3>Data-Driven Decisions</h3>
              <p className="text-muted">
                Using analytics and testing frameworks to optimize product outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="featured-projects">
        <div className="container">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <Link to="/projects" className="view-all-link">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map(project => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <span className="project-category">{project.category}</span>
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="text-muted">{project.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
