
import React from "react";
import { RevealAnimation } from "@/components/ui/reveal-animation";

export const FooterSection: React.FC = () => {
  return <footer className="py-10 border-t border-westside-purple-light/20 bg-[#000412]">
      <div className="container mx-auto px-4 text-center">
        <RevealAnimation width="100%" delay={0.1}>
          <p className="text-gray-400 text-sm">
            © 2025 Westside Technologies, Inc. All rights reserved.
          </p>
        </RevealAnimation>
      </div>
    </footer>;
};
