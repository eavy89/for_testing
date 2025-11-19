import React from "react";
import { cn } from "@/lib/utils";
interface BadgeIconProps {
  icon: React.ReactNode;
  className?: string;
}
export const BadgeIcon: React.FC<BadgeIconProps> = ({
  icon,
  className
}) => {
  return <div className="">
      {icon}
    </div>;
};