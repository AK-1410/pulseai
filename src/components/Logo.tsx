
import React from 'react';

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = "md", className = "" }) => {
  const sizes = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14"
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`relative ${sizes[size]}`}>
        <svg 
          viewBox="0 0 50 50" 
          className={`${sizes[size]} text-turquoise`} 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="24" stroke="currentColor" strokeWidth="2" />
          <path 
            d="M15 18C15 16.3431 16.3431 15 18 15H32C33.6569 15 35 16.3431 35 18V32C35 33.6569 33.6569 35 32 35H18C16.3431 35 15 33.6569 15 32V18Z" 
            fill="currentColor" 
            fillOpacity="0.2" 
          />
          <path 
            d="M25 15V35" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <path 
            d="M25 25H35" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
          />
          <circle 
            cx="20" 
            cy="20" 
            r="2" 
            fill="currentColor" 
          />
          <circle 
            cx="30" 
            cy="30" 
            r="2" 
            fill="currentColor" 
          />
        </svg>
        <div className="absolute inset-0 blur-sm bg-turquoise bg-opacity-20 rounded-full"></div>
      </div>
      <div className="text-white font-bold text-xl tracking-tighter">
        Pulse<span className="text-turquoise">AI</span>
      </div>
    </div>
  );
};

export default Logo;
