import React, { useState } from 'react';
import './Projects.css';
import { ExternalLink, Github, Cpu, BookOpen, ClipboardCheck, ArrowRight } from 'lucide-react';
import ProjectWorkflow from './ProjectWorkflow';

// Import images to ensure Vite processes them correctly
import aiMedicalWorkflow from '../assets/ai_medical_workflow.png';
import libraryMgmtWorkflow from '../assets/library_mgmt_workflow.png';
import leaveApprovalWorkflow from '../assets/leave_approval_workflow.png';

const Projects = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      icon: <Cpu size={28} />,
      title: 'AI Medical Portal',
      description: 'AI-based patient triage system with decision support for hospitals. Leverages machine learning to assist doctors in making faster, data-driven decisions.',
      techStack: [['React', '#61dafb'], ['FastAPI', '#009688'], ['Firebase', '#ff6f00'], ['ML', '#8b5cf6']],
      color: '#8b5cf6',
      workflowImage: aiMedicalWorkflow, // Using imported image for reliable bundling
      workflowSteps: [
        { title: 'Data Acquisition', desc: 'Securely collects patient symptoms, vitals, and medical history.' },
        { title: 'AI Triage engine', desc: 'Proprietary ML models analyze data to rank patient priority (P1-P4).' },
        { title: 'Physician Dashboard', desc: 'Live visualization of triage metrics for hospital staff.' },
        { title: 'Adaptive Insights', desc: 'System evolves based on doctor feedback and treatment outcomes.' }
      ],
      highlights: ['92% Triage Accuracy', 'HIPAA Compliant', 'Real-time Analytics', 'Multi-user Support']
    },
    {
      icon: <BookOpen size={28} />,
      title: 'Library Management System',
      description: 'Full-featured book & user management system with role-based authentication, backend APIs, and a modern React frontend.',
      techStack: [['React', '#61dafb'], ['Spring Boot', '#6db33f'], ['Spring Security', '#34d399'], ['JWT', '#f59e0b'], ['PostgreSQL', '#336791']],
      color: '#10b981',
      workflowImage: libraryMgmtWorkflow,
      workflowSteps: [
        { title: 'Unified Auth', desc: 'Secure login for Admins, Librarians, and Students.' },
        { title: 'Asset Lifecycle', desc: 'Track books from acquisition to disposal with RFID support.' },
        { title: 'Reservation Logic', desc: 'Queue-based booking system for popular resources.' },
        { title: 'Auto-Fine Billing', desc: 'Automated credit/debit system for overdue returns.' }
      ],
      highlights: ['Scalable Architecture', 'RESTful API Design', 'Atomic Transactions', 'Responsive UI']
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: 'Leave Approval System',
      description: 'A streamlined employee leave workflow system with full role-based authentication for employees and managers to manage leave requests.',
      techStack: [['React', '#61dafb'], ['Spring Boot', '#6db33f'], ['Spring Security', '#34d399'], ['JWT', '#f59e0b'], ['PostgreSQL', '#336791']],
      color: '#3b82f6',
      workflowImage: leaveApprovalWorkflow,
      workflowSteps: [
        { title: 'Request Submission', desc: 'Employees select leave types and dates with auto-balance check.' },
        { title: 'Workflow Routing', desc: 'Intelligent routing to departmental managers based on hierarchy.' },
        { title: 'Concurrent Review', desc: 'Allows HR to review overlapping leave requests across teams.' },
        { title: 'Payroll Sync', desc: 'Direct integration of approved leaves with monthly payroll systems.' }
      ],
      highlights: ['Zero Conflict Logic', 'Audit Trail Logging', 'CSV/PDF Exports', 'Holiday Integration']
    },
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card premium-card clickable-card" 
            style={{ '--project-color': project.color }}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech-stack">
              {project.techStack.map(([tech, color], i) => (
                <span key={i} className="tech-badge" style={{ '--tech-color': color }}>
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-action-overlay">
              <span className="view-text">View Working Model <ArrowRight size={16} /></span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectWorkflow 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;
