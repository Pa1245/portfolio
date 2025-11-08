import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import './ProjectDetail.css';
import { projects } from '../data/mock';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <h1>Project not found</h1>
          <Link to="/projects" className="back-link">
            <ArrowLeft size={16} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <Link to="/projects" className="back-link">
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <div className="project-detail-header">
          <span className="project-category">{project.category}</span>
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>

        <div className="project-detail-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-detail-content">
          <section className="detail-section">
            <h2>Overview</h2>
            <p>{project.description}</p>
          </section>

          <section className="detail-section">
            <h2>The Challenge</h2>
            <p>{project.challenge}</p>
          </section>

          <section className="detail-section">
            <h2>The Solution</h2>
            <p>{project.solution}</p>
          </section>

          <section className="detail-section">
            <h2>Impact & Outcomes</h2>
            <ul className="impact-list">
              {project.impact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h2>Technologies & Methods</h2>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </section>
        </div>

        <div className="project-navigation">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
