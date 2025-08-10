'use client';

import { useState, useEffect } from 'react';

interface PillData {
  id: number;
  left: number;
  top: number;
  animationDelay: number;
  animationDuration: number;
  colorIndex: number;
  rotation: number;
}

interface AnimatedPillsBackgroundProps {
  count?: number;
  pillSize?: 'sm' | 'md' | 'lg';
}

export default function AnimatedPillsBackground({ 
  count = 20, 
  pillSize = 'md' 
}: AnimatedPillsBackgroundProps) {
  const [pills, setPills] = useState<PillData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Generate consistent pill data on client side only
    const generatePills = () => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 8 + Math.random() * 4,
        colorIndex: i % 3,
        rotation: Math.floor(Math.random() * 4) * 45
      }));
    };

    setPills(generatePills());
    setMounted(true);
  }, [count]);

  // Don't render anything until mounted on client
  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden" />;
  }

  const getSizeClasses = () => {
    switch (pillSize) {
      case 'sm':
        return 'w-4 h-8';
      case 'lg':
        return 'w-8 h-16';
      default:
        return 'w-6 h-12';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {pills.map((pill) => (
        <div
          key={pill.id}
          className={`absolute opacity-10 animate-float-${pill.colorIndex}`}
          style={{
            left: `${pill.left}%`,
            top: `${pill.top}%`,
            animationDelay: `${pill.animationDelay}s`,
            animationDuration: `${pill.animationDuration}s`
          }}
        >
          <div 
            className={`${getSizeClasses()} bg-gradient-to-b ${
              pill.colorIndex === 0 ? 'from-primary to-primary/50' :
              pill.colorIndex === 1 ? 'from-secondary to-secondary/50' :
              'from-accent to-accent/50'
            } rounded-full`}
            style={{
              transform: `rotate(${pill.rotation}deg)`
            }}
          />
        </div>
      ))}
    </div>
  );
}
