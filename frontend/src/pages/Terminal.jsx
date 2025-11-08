import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import './Terminal.css';
import { profile, projects, skills, terminalCommands } from '../data/mock';

const Terminal = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [theme, setTheme] = useState('dark');
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    // Welcome message
    const welcomeMessage = {
      type: 'output',
      content: `Welcome to ${profile.name}'s Portfolio Terminal\n\nType 'help' to see available commands.\nType 'gui' to switch to GUI mode.\n`
    };
    setHistory([welcomeMessage]);
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (command, output) => {
    setHistory(prev => [
      ...prev,
      { type: 'command', content: command },
      { type: 'output', content: output }
    ]);
  };

  const processCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(' ');
    const command = parts[0];
    const args = parts.slice(1);

    // Add to command history
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    switch (command) {
      case 'help':
        addToHistory(cmd, terminalCommands.help.output);
        break;

      case 'about':
        const aboutOutput = `${profile.name}\n${profile.title}\n\n${profile.bio}\n\nLocation: ${profile.location}\n\nSkills:\n${skills.map(cat => `\n${cat.category}:\n  ${cat.items.join(', ')}`).join('\n')}`;
        addToHistory(cmd, aboutOutput);
        break;

      case 'projects':
        if (args.length === 0) {
          const projectsList = projects.map(p => 
            `\n[${p.id}]\n  ${p.title} - ${p.category}\n  ${p.subtitle}\n  Type 'project ${p.id}' for details`
          ).join('\n');
          addToHistory(cmd, `Projects:\n${projectsList}`);
        } else {
          addToHistory(cmd, "Use 'project <id>' to view project details.");
        }
        break;

      case 'project':
        if (args.length === 0) {
          addToHistory(cmd, "Usage: project <project-id>\nAvailable IDs: disney-ml, etsy-smartlist, basecamp-pricing");
        } else {
          const projectId = args[0];
          const project = projects.find(p => p.id === projectId);
          if (project) {
            const projectOutput = `${project.title}\n${project.subtitle}\n\nCategory: ${project.category}\nYear: ${project.year}\n\n${project.description}\n\nChallenge:\n${project.challenge}\n\nSolution:\n${project.solution}\n\nImpact:\n${project.impact.map(i => `  • ${i}`).join('\n')}\n\nTechnologies:\n${project.technologies.join(', ')}`;
            addToHistory(cmd, projectOutput);
          } else {
            addToHistory(cmd, `Project '${projectId}' not found.\nAvailable IDs: disney-ml, etsy-smartlist, basecamp-pricing`);
          }
        }
        break;

      case 'contact':
        const contactOutput = `Contact Information:\n\nEmail: ${profile.email}\nLinkedIn: ${profile.linkedin}\nGitHub: ${profile.github}`;
        addToHistory(cmd, contactOutput);
        break;

      case 'gui':
      case 'website':
        addToHistory(cmd, 'Switching to GUI mode...');
        setTimeout(() => navigate('/'), 500);
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'theme':
        if (args.length === 0) {
          addToHistory(cmd, `Current theme: ${theme}\nAvailable themes: dark, light, matrix`);
        } else {
          const newTheme = args[0];
          if (['dark', 'light', 'matrix'].includes(newTheme)) {
            setTheme(newTheme);
            addToHistory(cmd, `Theme changed to ${newTheme}`);
          } else {
            addToHistory(cmd, `Invalid theme. Available: dark, light, matrix`);
          }
        }
        break;

      case '':
        // Empty command, just show prompt
        setHistory(prev => [...prev, { type: 'command', content: '' }]);
        break;

      default:
        addToHistory(cmd, `Command not found: ${command}\nType 'help' for available commands.`);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentInput.trim()) {
      processCommand(currentInput);
      setCurrentInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentInput('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={`terminal-page theme-${theme}`}>
      <div className="terminal-header">
        <div className="terminal-title">
          <span className="terminal-dot dot-red"></span>
          <span className="terminal-dot dot-yellow"></span>
          <span className="terminal-dot dot-green"></span>
          <span className="terminal-name">terminal@portfolio</span>
        </div>
        <button className="terminal-close" onClick={() => navigate('/')} aria-label="Close terminal">
          <X size={20} />
        </button>
      </div>

      <div className="terminal-body" ref={terminalRef} onClick={handleTerminalClick}>
        <div className="terminal-content">
          {history.map((entry, index) => (
            <div key={index} className={`terminal-entry terminal-${entry.type}`}>
              {entry.type === 'command' ? (
                <div className="terminal-command">
                  <span className="terminal-prompt">visitor@portfolio:~$</span>
                  <span className="terminal-command-text">{entry.content}</span>
                </div>
              ) : (
                <pre className="terminal-output">{entry.content}</pre>
              )}
            </div>
          ))}

          <form onSubmit={handleSubmit} className="terminal-input-wrapper">
            <span className="terminal-prompt">visitor@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
