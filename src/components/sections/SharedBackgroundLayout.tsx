
import React from "react";

interface SharedBackgroundLayoutProps {
  children: React.ReactNode;
}

export const SharedBackgroundLayout: React.FC<SharedBackgroundLayoutProps> = ({ children }) => {
  return (
    <div className="relative bg-[#030019] py-1">
      <div className="container mx-auto px-4">
        {children}
      </div>
    </div>
  );
};
