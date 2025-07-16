"use client";

import React, { useState, useRef, useEffect } from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import TypedOutput from '../components/TypedOutput';

const TerminalPage = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isTyping) {
      const newOutput = [...output, `> ${input}`];
      let commandOutput: React.ReactNode = '';

      const handleTypingFinish = () => {
        setIsTyping(false);
      };

      setIsTyping(true);

      switch (input.toLowerCase()) {
        case 'help':
          commandOutput = <TypedOutput text="Available commands: help, about, projects, contact, clear" onFinished={handleTypingFinish} />;
          break;
        case 'about':
          commandOutput = <About />;
          setIsTyping(false);
          break;
        case 'projects':
          commandOutput = <Projects />;
          setIsTyping(false);
          break;
        case 'contact':
          commandOutput = <Contact />;
          setIsTyping(false);
          break;
        case 'clear':
          setOutput([]);
          setInput('');
          setIsTyping(false);
          return;
        default:
          commandOutput = <TypedOutput text={`command not found: ${input}`} onFinished={handleTypingFinish} />;
      }

      setOutput([...newOutput, commandOutput]);
      setInput('');
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  return (
    <div className="bg-black text-white font-mono min-h-screen p-4" onClick={() => inputRef.current?.focus()}>
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 p-4 rounded-lg shadow-lg">
          <div>
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$ </span>
            <span>Welcome to my portfolio!</span>
          </div>
          <div>
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$ </span>
            <span>Type &apos;help&apos; to see available commands.</span>
          </div>
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
          <div className="flex items-center">
            <span className="text-green-400">user@portfolio</span>
            <span className="text-gray-400">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-gray-400">$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              className="bg-transparent border-none text-white focus:outline-none flex-grow"
              disabled={isTyping}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;
