import React from 'react';
import './Background.css';

interface BackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export const Background: React.FC<BackgroundProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`animated-background relative isolate min-h-screen w-full overflow-hidden ${className}`}
    >
      {/* Base Pink Gradient */}
      <div className="gradient-pink" />

      {/* Animated Blue Gradient */}
      <div className="gradient-blue" />

      {/* Floating Pink Glow */}
      <div className="glow glow-pink" />

      {/* Floating Blue Glow */}
      <div className="glow glow-blue" />

      {/* Page Content */}
      <div className="relative z-10 min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};

export default Background;
