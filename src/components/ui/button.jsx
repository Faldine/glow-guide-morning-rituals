
import React from "react";
import '../../styles/components.css';

export const Button = ({ children, className, variant, ...props }) => {
  const baseClass = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors";
  
  let variantClass = "bg-primary text-primary-foreground hover:bg-primary/90";
  
  if (variant === "outline") {
    variantClass = "border border-input bg-background hover:bg-accent hover:text-accent-foreground";
  } else if (variant === "destructive") {
    variantClass = "bg-destructive text-destructive-foreground hover:bg-destructive/90";
  } else if (variant === "secondary") {
    variantClass = "bg-secondary text-secondary-foreground hover:bg-secondary/80";
  } else if (variant === "ghost") {
    variantClass = "hover:bg-accent hover:text-accent-foreground";
  } else if (variant === "link") {
    variantClass = "text-primary underline-offset-4 hover:underline";
  }
  
  const sizeClass = "h-10 px-4 py-2";
  
  return (
    <button
      className={`${baseClass} ${variantClass} ${sizeClass} ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
