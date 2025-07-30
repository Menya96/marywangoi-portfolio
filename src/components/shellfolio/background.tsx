"use client";

import { useEffect, useState } from 'react';

const generateBinaryString = (length: number): string => {
  return Array.from({ length }, () => Math.round(Math.random())).join('');
};

export const Background = () => {
  const [lines, setLines] = useState<{ id: number; top: number; duration: number; binary: string }[]>([]);

  useEffect(() => {
    const createLines = () => {
      const vh = window.innerHeight;
      const lineCount = Math.floor(vh / 20); // Create a line roughly every 20px of height
      
      const newLines = Array.from({ length: lineCount }).map((_, i) => ({
        id: i,
        top: Math.random() * 100, // %
        duration: 15 + Math.random() * 20, // 15s to 35s
        binary: generateBinaryString(100 + Math.floor(Math.random() * 50)),
      }));
      setLines(newLines);
    }
    
    createLines();
    window.addEventListener('resize', createLines);
    
    return () => {
      window.removeEventListener('resize', createLines);
    }

  }, []);

  return (
    <div className="binary-background">
      {lines.map(line => (
        <div
          key={line.id}
          className="binary-line"
          style={{
            top: `${line.top}vh`,
            animationDuration: `${line.duration}s`,
            animationDelay: `${Math.random() * -line.duration}s` // Start at a random point
          }}
        >
          {line.binary}
        </div>
      ))}
    </div>
  );
};
