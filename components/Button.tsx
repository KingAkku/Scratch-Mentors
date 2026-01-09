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
    primary: "bg-amber-400 text-purple-900 hover:bg-amber-300 hover:scale-105 shadow-lg shadow-amber-400/30 focus:ring-amber-400",
    secondary: "bg-white text-purple-900 hover:bg-gray-100 shadow-md focus:ring-white",
    outline: "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white focus:ring-purple-400 backdrop-blur-sm",
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