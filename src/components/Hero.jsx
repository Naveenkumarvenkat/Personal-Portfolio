import React from 'react';
import './Hero.css';
import { ArrowRight, Download, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <div className="hero-container container section-wrapper">
      <div className="hero-content animate-slide-up">
        <h2 className="hero-greeting">Hi, I'm</h2>
        <h1 className="hero-name">Naveen Kumar V</h1>
        <h3 className="hero-title">Java Developer</h3>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-outline">
            Hire Me <Briefcase size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
