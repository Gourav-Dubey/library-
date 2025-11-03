import * as React from "react";
import { cn } from "../../lib/utils";
// Utility for merging class names (agar tumhare project me utils na ho, to neeche version use kar)
export const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default:
        "bg-indigo-600 text-white hover:bg-indigo-700 focus-visible:ring-indigo-500",
      outline:
        "border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white",
      ghost:
        "text-indigo-400 hover:text-white hover:bg-indigo-950/50 focus-visible:ring-indigo-500",
    };

    const sizes = {
      sm: "h-8 px-3 text-sm",
      default: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
