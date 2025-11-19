
import React from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ children, className }) => {
  const isMobile = useIsMobile();
  
  return (
    <h2 className={cn(
      "font-bold mb-6 text-white max-w-4xl", 
      isMobile ? "text-3xl" : "text-4xl md:text-5xl",
      className
    )}>
      {children}
    </h2>
  );
};
