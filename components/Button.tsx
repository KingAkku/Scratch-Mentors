import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-full focus:outline-none focus:ring-4 focus:ring-offset-2";
  
  const variants = {
    // Royal Purple Primary
    primary: "bg-[#7c3aed] text-white hover:bg-[#6d28d9] hover:scale-105 shadow-lg shadow-purple-500/30 focus:ring-purple-500",
    // Clean White Secondary
    secondary: "bg-white text-[#4c1d95] hover:bg-gray-100 shadow-md focus:ring-white",
    // Cyan Outline
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-300 hover:text-cyan-300 focus:ring-cyan-400 backdrop-blur-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl md:text-2xl uppercase tracking-widest",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};