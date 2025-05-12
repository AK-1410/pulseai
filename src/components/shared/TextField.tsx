
import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="flex flex-col mb-4">
      <label className="text-white font-medium mb-2">{label}</label>
      <input
        className={cn(
          "bg-soft-gray border border-muted rounded-xl p-3 outline-none transition-all duration-200",
          focused && "border-turquoise",
          error && "border-destructive",
          className
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export default TextField;

export const TextArea: React.FC<
  Omit<TextFieldProps, "error"> & {
    rows?: number;
    error?: string;
  }
> = ({ label, rows = 4, error, className, ...props }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="flex flex-col mb-4">
      <label className="text-white font-medium mb-2">{label}</label>
      <textarea
        className={cn(
          "bg-soft-gray border border-muted rounded-xl p-3 outline-none transition-all duration-200",
          focused && "border-turquoise",
          error && "border-destructive",
          className
        )}
        rows={rows}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...(props as any)}
      />
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};

export const SelectField: React.FC<
  TextFieldProps & {
    options: Array<{ value: string; label: string }>;
  }
> = ({ label, options, error, className, ...props }) => {
  const [focused, setFocused] = useState(false);
  
  return (
    <div className="flex flex-col mb-4">
      <label className="text-white font-medium mb-2">{label}</label>
      <select
        className={cn(
          "bg-soft-gray border border-muted rounded-xl p-3 outline-none transition-all duration-200 appearance-none",
          focused && "border-turquoise",
          error && "border-destructive",
          className
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...(props as any)}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-destructive text-xs mt-1">{error}</p>}
    </div>
  );
};
