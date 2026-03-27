import React from 'react';
import './About.css';
import { User, Code2, Cpu, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <User size={24} />,
      title: "ECE Student",
      desc: "Strong foundation in Core Java and DSA."
    },
    {
      icon: <Code2 size={24} />,
      title: "Core Concepts",
      desc: "Strong in OOP, Arrays, Strings, Recursion, Trees."
    },
    {
      icon: <Cpu size={24} />,
      title: "Clean Code",
      desc: "Dedicated to writing clean and efficient coding practices."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Problem Solver",
      desc: "Passionate about problem solving and continuous learning."
    },
    {
      icon: <Cpu size={24} />,
      title: "AI Prompt Engineering",
      desc: "Strong interest in AI/LLMs and effective prompt strategies."
    }
  ];

  return (
    <div className="container section-wrapper">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text animate-slide-up">
          <p>
            I am a highly motivated Electronics & Communication Engineering student who discovered a profound passion for software development. My journey started with a curiosity for how logical instructions build complex systems. Since then, I've honed my skills deeply in Core Java and Data Structures & Algorithms.
          </p>
          <p>
            I approach problems methodically, bringing a strong theoretical foundation in OOP, Recursion, and Trees, to craft software solutions that are not just functional, but also highly efficient and clean. I thrive on challenges and constantly push myself to learn new technologies and workflows.
          </p>
        </div>
        
        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div key={index} className="about-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="about-card-icon">{item.icon}</div>
              <h3 className="about-card-title">{item.title}</h3>
              <p className="about-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
