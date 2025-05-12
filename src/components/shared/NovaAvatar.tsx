
import React from 'react';
import { cn } from "@/lib/utils";

interface NovaAvatarProps {
  size?: "sm" | "md" | "lg";
  isActive?: boolean;
  className?: string;
}

const NovaAvatar: React.FC<NovaAvatarProps> = ({
  size = "md",
  isActive = false,
  className
}) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-24 h-24"
  };
  
  return (
    <div className={cn(
      "relative rounded-full bg-gradient-to-r from-yellow-300 to-yellow-400 flex-center",
      sizes[size],
      isActive && "animate-audio-wave",
      className
    )}>
      {/* Simple emoji face for Nova */}
      <div className="flex flex-col items-center justify-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-purple-900"></div>
          <div className="w-3 h-3 rounded-full bg-purple-900"></div>
        </div>
      </div>
      
      {isActive && (
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-turquoise to-turquoise-light opacity-20 animate-pulse"></div>
      )}
    </div>
  );
};

export default NovaAvatar;
