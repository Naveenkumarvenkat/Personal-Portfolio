import React from 'react';
import './Education.css';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'B.E Electronics & Communication Engineering',
      institution: 'PSNACET',
      period: '2023 – 2027',
      score: 'CGPA: 8.7',
      icon: <GraduationCap size={28} />,
      current: true,
    },
    {
      degree: 'Higher Secondary School',
      institution: 'TVS Higher Secondary School',
      period: 'Completed',
      score: '87%',
      icon: <Award size={28} />,
      current: false,
    },
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className={`edu-card premium-card ${edu.current ? 'current' : ''}`}>
            <div className="edu-icon">{edu.icon}</div>
            <div className="edu-body">
              <div className="edu-header">
                <h3 className="edu-degree">{edu.degree}</h3>
                {edu.current && <span className="edu-badge">Current</span>}
              </div>
              <p className="edu-institution">{edu.institution}</p>
              <div className="edu-meta">
                <span className="edu-period">
                  <Calendar size={14} /> {edu.period}
                </span>
                <span className="edu-score">{edu.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
