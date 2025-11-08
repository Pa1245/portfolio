import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Projects.css';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1>Projects</h1>
          <p className="text-muted">
            A collection of product management case studies showcasing strategy, execution, and impact
          </p>
        </div>

        <div className="projects-list">
          {projects.map(project => (
            <div key={project.id} className="project-item">
              <div className="project-item-image">
                <img src={project.image} alt={project.title} />
                <div className="project-item-overlay">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
              <div className="project-item-content">
                <div className="project-item-header">
                  <div>
                    <span className="project-item-category">{project.category}</span>
                    <h2>{project.title}</h2>
                    <p className="project-item-subtitle">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted">{project.description}</p>
                <div className="project-item-tech">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="project-item-link">
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
