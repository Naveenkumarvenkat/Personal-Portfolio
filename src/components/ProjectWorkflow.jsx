import React from 'react';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import './ProjectWorkflow.css';

const ProjectWorkflow = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="workflow-overlay">
      <div className="workflow-container animate-fade-in premium-card">
        <button className="workflow-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <header className="workflow-header">
          <div className="workflow-icon" style={{ color: project.color }}>{project.icon}</div>
          <div className="workflow-title-group">
            <h2 className="workflow-title">{project.title}</h2>
            <p className="workflow-subtitle">Working Model & System Workflow</p>
          </div>
        </header>

        <div className="workflow-grid">
          <div className="workflow-visual">
            <div className="workflow-image-container">
              {/* Using the generated high-quality workflow diagram */}
              <img 
                src={project.workflowImage} 
                alt={`${project.title} Workflow`} 
                className="workflow-diagram"
              />
              <div className="workflow-badge">System Architecture</div>
            </div>
          </div>

          <div className="workflow-details">
            <h3 className="section-subtitle">Process Flow</h3>
            <div className="workflow-steps">
              {project.workflowSteps.map((step, index) => (
                <div key={index} className="workflow-step">
                  <div className="step-number">{index + 1}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="workflow-features">
              <h3 className="section-subtitle">Key Highlights</h3>
              <ul className="highlights-list">
                {project.highlights?.map((h, i) => (
                  <li key={i}><CheckCircle2 size={16} /> {h}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <footer className="workflow-footer">
          <div className="workflow-tech">
            {project.techStack.map(([tech, color], i) => (
              <span key={i} className="tech-badge" style={{ '--tech-color': color }}>
                {tech}
              </span>
            ))}
          </div>
          <button className="btn btn-outline" onClick={onClose}>
            Back to Projects <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ProjectWorkflow;
