import { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
  disabled?:boolean;
}

const variantClasses = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-400",
};

const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";

export function Button({
  variant,
  text,
  startIcon,
  onClick,
  fullWidth,
  loading,
  className,
  disabled
}: ButtonProps) {
  return (
    <button
      onClick={(!loading && !disabled) ? onClick : undefined} // Fix: Ensures `onClick` is never `null`
      className={`${variantClasses[variant]} ${defaultStyles} ${
        fullWidth ? "w-full justify-center items-center" : ""
      } ${loading ? "opacity-45" : ""} ${className}`}
      disabled={loading || disabled}
    >
      {startIcon && <div className="pr-2">{startIcon}</div>}
      {loading ? "Loading..." : text} {/* Show loading text when needed */}
    </button>
  );
}