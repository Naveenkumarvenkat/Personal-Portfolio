import React from 'react';
import './Achievements.css';
import { Code, Users, Brain, Presentation } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Code size={28} />,
      title: '200+ LeetCode Problems Solved',
      description: 'Solved over 200 problems on LeetCode, demonstrating strong problem-solving skills in DSA.',
      color: '#f59e0b',
    },
    {
      icon: <Users size={28} />,
      title: 'Zoho Cliqtrix 2025',
      description: 'Participated in the prestigious Zoho Cliqtrix 2025 competitive programming contest.',
      color: '#3b82f6',
    },
    {
      icon: <Brain size={28} />,
      title: 'NIT Trichy AI Hackathon',
      description: 'Participated in an AI Hackathon organized by NIT Trichy, competing with top engineering students.',
      color: '#8b5cf6',
    },
    {
      icon: <Presentation size={28} />,
      title: 'Paper Presentation at CIT Coimbatore',
      description: 'Presented a technical research paper at CIT Coimbatore, showcasing technical depth and communication skills.',
      color: '#10b981',
    },
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((a, index) => (
          <div key={index} className="achievement-card" style={{ '--ach-color': a.color }}>
            <div className="ach-icon">{a.icon}</div>
            <div className="ach-body">
              <h3 className="ach-title">{a.title}</h3>
              <p className="ach-desc">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
