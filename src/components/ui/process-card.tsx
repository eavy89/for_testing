
import React from "react";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({ 
  icon, 
  title, 
  description,
  className
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center p-4 text-center", 
      className
    )}>
      <div className="mb-4 text-westcity-purple-accent">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};
