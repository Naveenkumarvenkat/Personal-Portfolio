import React from 'react';
import './Experience.css';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = () => {
  const responsibilities = [
    'Built full-stack applications using Java & Spring Boot',
    'Developed RESTful APIs and integrated databases (PostgreSQL, MySQL)',
    'Worked on complete application flow from frontend to backend',
    'Implemented Spring Security with JWT authentication',
    'Collaborated on multiple real-world enterprise projects',
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Experience</h2>
      <div className="experience-card premium-card">
        <div className="exp-header">
          <div className="exp-icon">
            <Briefcase size={28} />
          </div>
          <div className="exp-title-block">
            <h3 className="exp-role">Java Full Stack Developer Intern</h3>
            <p className="exp-company">Vinsup Infotech</p>
            <div className="exp-meta">
              <span className="exp-meta-item">
                <MapPin size={14} /> Madurai, Tamil Nadu
              </span>
              <span className="exp-meta-item">
                <Calendar size={14} /> Internship
              </span>
            </div>
          </div>
        </div>
        <ul className="exp-responsibilities">
          {responsibilities.map((item, index) => (
            <li key={index}>
              <CheckCircle2 size={16} className="check-icon" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
