import React from "react";
import { cn } from "@/lib/utils";
import { BadgeIcon } from "./badge-icon";
interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  subtext?: string;
  className?: string;
  hideIcon?: boolean;
}
export const ProblemCard: React.FC<ProblemCardProps> = ({
  icon,
  title,
  description,
  subtext,
  className,
  hideIcon = false
}) => {
  return <div className={cn("flex flex-col p-4 space-y-2 rounded-lg bg-[#15051f]/60 border border-westcity-purple-light/10", className)}>
      {!hideIcon && <div className="flex justify-left mb-2">
          <BadgeIcon icon={icon} className="bg-gradient-to-br from-westcity-purple-light/40 to-westcity-purple-accent/40 p-1.5" />
        </div>}
      <h3 className="font-bold text-xl text-white text-left">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {subtext && <p className="text-sm text-gray-400 pl-4 border-l-2 border-westcity-purple-light/20">{subtext}</p>}
    </div>;
};