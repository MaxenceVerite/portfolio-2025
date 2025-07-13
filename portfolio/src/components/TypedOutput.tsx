"use client";

import React, { useState, useEffect } from 'react';

interface TypedOutputProps {
  text: string;
  onFinished?: () => void;
}

const TypedOutput: React.FC<TypedOutputProps> = ({ text, onFinished }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50); // Adjust typing speed here
      return () => clearTimeout(timeoutId);
    } else if (onFinished) {
      onFinished();
    }
  }, [currentIndex, text, onFinished]);

  return <div>{displayedText}</div>;
};

export default TypedOutput;
