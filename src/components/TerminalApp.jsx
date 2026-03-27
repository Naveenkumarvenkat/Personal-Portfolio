import React, { useState, useRef, useEffect } from 'react';
import './TerminalApp.css';
import { getContactInfo } from '../services/api';

const WELCOME = String.raw`
 _   _                         _  __
| \ | |  __ _ __   __  ___  ___| |/ /
|  \| | / _' |\ \ / / / _ \/ _ \ ' / 
| |\  || (_| | \ V / |  __/  __/ . \ 
|_| \_|\__,_|  \_/   \___|\___/_|\_\

Welcome to Naveen's Portfolio Terminal!
Type 'help' to see all available commands.
`;

const COMMANDS_HELP = `
Available commands:
  help        - Show this help message
  about       - About Naveen Kumar V
  skills      - List all technical skills
  projects    - List all projects
  contact     - Fetch & show contact details (from backend)
  education   - Show education details
  experience  - Show internship experience
  achievements- Show achievements
  hire        - Show how to hire Naveen
  clear       - Clear the terminal
`;

const ABOUT = `
>> About Naveen Kumar V
  Name    : Naveen Kumar V
  Role    : Java Developer | Software Developer
  Degree  : B.E ECE @ PSNACET (2023-2027) | CGPA: 8.7
  Focus   : Core Java, DSA, OOP, Arrays, Strings, Recursion, Trees
  Motto   : "Clean code, efficient solutions, constant learning."
`;

const SKILLS = `
>> Technical Skills
  Languages   : C, Java, JavaScript, HTML, CSS
  Frameworks  : React.js, Spring Boot, Spring Security, JWT
  Databases   : MySQL, PostgreSQL
  Tools       : Git, VS Code, IntelliJ, Postman, Chrome Extensions
  Concepts    : OOP, DSA, REST APIs, Full Stack Development
  Additional  : AI Prompt Engineering
`;

const PROJECTS = `
>> Projects
  1. AI Medical Portal
     Tech: React, FastAPI (Python), Firebase/Supabase, ML
     Desc: AI-based patient triage & decision support for hospitals.

  2. Library Management System
     Tech: React, Spring Boot, Spring Security, JWT, PostgreSQL
     Desc: Full book & user management with auth & REST APIs.

  3. Leave Approval System
     Tech: React, Spring Boot, Spring Security, JWT, PostgreSQL
     Desc: Employee leave workflow with role-based authentication.
`;

const EDUCATION = `
>> Education
  B.E Electronics & Communication Engineering
  Institution : PSNACET
  Duration    : 2023 – 2027
  CGPA        : 8.7

  Higher Secondary School
  Institution : TVS Higher Secondary School
  Score       : 87%
`;

const EXPERIENCE = `
>> Experience
  Role    : Java Full Stack Developer Intern
  Company : Vinsup Infotech, Madurai
  Work    :
    - Built full-stack apps using Java & Spring Boot
    - Developed REST APIs and integrated databases
    - Worked on complete application flow
`;

const ACHIEVEMENTS = `
>> Achievements
  * 200+ LeetCode problems solved
  * Zoho Cliqtrix 2025 participant
  * NIT Trichy AI Hackathon participant
  * Paper presentation at CIT Coimbatore
`;

const HIRE = `
>> Hire Naveen Kumar V
  Looking for a dedicated Java Developer / Full Stack Developer?
  Naveen is available for internships, full-time roles, and freelance projects.
  
  Email: naveenkumar@example.com
  LinkedIn: linkedin.com/in/naveen-kumar
  GitHub: github.com/naveen-kumar

  Use the 'contact' command to fetch live contact details from the backend.
`;

const TerminalApp = () => {
  const [history, setHistory] = useState([{ type: 'output', text: WELCOME }]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const addOutput = (text, type = 'output') => {
    setHistory((prev) => [...prev, { type, text }]);
  };

  const processCommand = async (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    addOutput(`$ ${cmd}`, 'input-line');

    switch (trimmed) {
      case 'help': addOutput(COMMANDS_HELP); break;
      case 'about': addOutput(ABOUT); break;
      case 'skills': addOutput(SKILLS); break;
      case 'projects': addOutput(PROJECTS); break;
      case 'education': addOutput(EDUCATION); break;
      case 'experience': addOutput(EXPERIENCE); break;
      case 'achievements': addOutput(ACHIEVEMENTS); break;
      case 'hire': addOutput(HIRE); break;
      case 'clear':
        setHistory([]);
        break;
      case 'contact':
        addOutput('>> Fetching contact details from backend...');
        try {
          const data = await getContactInfo();
          const text = `>> Contact Details (from backend)
${Object.entries(data).map(([k, v]) => `  ${k.padEnd(10)}: ${v}`).join('\n')}`;
          addOutput(text);
        } catch (e) {
          addOutput('>> Contact Details (Offline Mode)\n  Email: naveenkumar@example.com\n  LinkedIn: linkedin.com/in/naveen-kumar-v-568b832a4\n  GitHub: github.com/Naveenkumarvenkat');
        }
        break;
      case '':
        break;
      default:
        addOutput(`>> Command not found: '${cmd}'`, 'error');
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const cmd = input;
      setCmdHistory((prev) => [cmd, ...prev]);
      setCmdIndex(-1);
      setInput('');
      await processCommand(cmd);
    } else if (e.key === 'ArrowUp') {
      const newIndex = Math.min(cmdIndex + 1, cmdHistory.length - 1);
      setCmdIndex(newIndex);
      setInput(cmdHistory[newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      const newIndex = Math.max(cmdIndex - 1, -1);
      setCmdIndex(newIndex);
      setInput(newIndex === -1 ? '' : cmdHistory[newIndex]);
    }
  };

  const formatOutput = (text) => {
    // Regex to find URLs (github.com, linkedin.com, mailto:, etc.)
    const urlRegex = /(https?:\/\/[^\s]+|([a-z0-9]+\.[a-z]{2,}(\.[a-z]{2,})?\/[^\s]*)|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/gi;
    
    if (typeof text !== 'string') return text;

    const parts = text.split(urlRegex);
    const matches = text.match(urlRegex) || [];
    
    let result = [];
    let matchIndex = 0;
    
    // The split with regex usually puts matches in the array if capturing groups are used,
    // but here we'll manually interleave for clarity.
    // Actually, string.split(regex) with capturing groups returns them.
    // Let's use a simpler approach:
    
    const elements = [];
    let lastIndex = 0;
    let match;
    
    while ((match = urlRegex.exec(text)) !== null) {
      // Add text before match
      elements.push(text.substring(lastIndex, match.index));
      
      const url = match[0];
      let href = url;
      if (url.includes('@') && !url.startsWith('mailto:')) {
        href = `mailto:${url}`;
      } else if (!url.startsWith('http') && !url.startsWith('mailto:')) {
        href = `https://${url}`;
      }
      
      elements.push(
        <a 
          key={match.index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="terminal-link"
        >
          {url}
        </a>
      );
      
      lastIndex = urlRegex.lastIndex;
    }
    
    elements.push(text.substring(lastIndex));
    return elements;
  };

  return (
    <div className="terminal-wrapper" onClick={() => inputRef.current?.focus()}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="terminal-title">naveen@portfolio:~$</span>
      </div>
      <div className="terminal-body">
        {history.map((entry, i) => (
          <pre key={i} className={`terminal-line ${entry.type}`}>
            {typeof entry.text === 'string' ? formatOutput(entry.text) : entry.text}
          </pre>
        ))}
        <div className="terminal-input-row">
          <span className="terminal-prompt">$ </span>
          <input
            ref={inputRef}
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoComplete="off"
            spellCheck="false"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};

export default TerminalApp;
