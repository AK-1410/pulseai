
import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "destructive" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled,
  ...props
}) => {
  const variants = {
    primary: "bg-gradient-to-r from-turquoise to-turquoise-light text-white hover:shadow-md hover:from-turquoise-dark hover:to-turquoise",
    secondary: "bg-soft-gray text-white hover:bg-opacity-90",
    destructive: "bg-destructive text-white hover:bg-opacity-90",
    outline: "bg-transparent border border-turquoise text-turquoise hover:bg-turquoise hover:bg-opacity-10",
  };

  const sizes = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2.5 px-5 text-base",
    lg: "py-3.5 px-7 text-lg",
  };

  const baseClasses = 
    "pill-button font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-turquoise focus:ring-opacity-50";

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        disabled === false && "animate-glow-pulse",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
