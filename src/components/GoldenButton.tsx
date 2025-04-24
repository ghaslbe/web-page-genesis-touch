
import React from 'react';

interface GoldenButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GoldenButton = ({ children, className = "", onClick }: GoldenButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className={`golden-button ${className}`}
    >
      {children}
    </button>
  );
};

export default GoldenButton;
