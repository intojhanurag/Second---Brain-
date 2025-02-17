import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={className}
        {...rest}
      />
    );
  }
);