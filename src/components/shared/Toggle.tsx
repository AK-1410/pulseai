
import React from 'react';
import { cn } from "@/lib/utils";

interface ToggleProps {
  value: number;
  onChange: (value: number) => void;
  options: number;
  className?: string;
}

const Toggle: React.FC<ToggleProps> = ({ value, onChange, options, className }) => {
  const dots = Array.from({ length: options }, (_, i) => i);

  return (
    <div className={cn("progress-toggle justify-center py-4", className)}>
      {dots.map((dot) => (
        <button
          key={dot}
          className={cn(
            "progress-dot transition-all duration-300",
            value === dot ? "bg-turquoise" : "bg-gray-500"
          )}
          onClick={() => onChange(dot)}
          aria-label={`Step ${dot + 1} of ${options}`}
        />
      ))}
    </div>
  );
};

export default Toggle;
