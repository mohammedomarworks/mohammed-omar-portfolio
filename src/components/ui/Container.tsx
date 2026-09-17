import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
}

export function Container({
  children,
  className = "",
  id,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${className}`}
    >
      {children}
    </Component>
  );
}
