
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
      className={`bg-gradient-to-r from-amber-700 to-yellow-500 hover:from-amber-600 hover:to-yellow-400 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default GoldenButton;
