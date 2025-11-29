import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "font-display font-medium tracking-wide transition-all duration-300 rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-brand-darkRed shadow-lg hover:shadow-brand-red/50 focus:ring-brand-red border border-transparent hover:-translate-y-1",
    outline: "bg-transparent text-white border-2 border-brand-red hover:bg-brand-red hover:text-white focus:ring-brand-red",
    ghost: "bg-transparent text-gray-300 hover:text-brand-orange hover:bg-white/5"
  };

  const sizes = {
    sm: "text-xs px-4 py-2",
    md: "text-sm px-6 py-3",
    lg: "text-lg px-8 py-4"
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