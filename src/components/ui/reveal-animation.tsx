
import React from "react";
import { motion, Variant } from "framer-motion";

interface RevealAnimationProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const RevealAnimation: React.FC<RevealAnimationProps> = ({
  children,
  width = "fit-content",
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up"
}) => {
  
  const getInitialVariant = (): Variant => {
    switch (direction) {
      case "up": return { opacity: 0, y: 50 };
      case "down": return { opacity: 0, y: -50 };
      case "left": return { opacity: 0, x: 50 };
      case "right": return { opacity: 0, x: -50 };
      case "none": return { opacity: 0 };
      default: return { opacity: 0, y: 50 };
    }
  };
  
  const variants = {
    hidden: getInitialVariant(),
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0,
      transition: { 
        duration: duration,
        delay: delay,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
