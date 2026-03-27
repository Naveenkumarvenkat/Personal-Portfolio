import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      color: '#3b82f6',
      skills: ['C', 'Java', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      category: 'Frameworks',
      color: '#8b5cf6',
      skills: ['React.js', 'Spring Boot', 'Spring Security', 'JWT'],
    },
    {
      category: 'Databases',
      color: '#06b6d4',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      category: 'Tools',
      color: '#f59e0b',
      skills: ['Git', 'VS Code', 'IntelliJ', 'Postman', 'Chrome Extensions'],
    },
    {
      category: 'Concepts',
      color: '#10b981',
      skills: ['OOP', 'DSA', 'REST APIs', 'Full Stack Development'],
    },
    {
      category: 'Additional',
      color: '#ec4899',
      skills: ['AI Prompt Engineering'],
    },
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skill-group" style={{ '--group-color': group.color }}>
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-tags">
              {group.skills.map((skill, si) => (
                <span key={si} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
