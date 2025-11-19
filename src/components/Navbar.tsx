import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 backdrop-blur-2xl bg-background/80">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold gradient-text">
              Altan
            </Link>
            
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/#features" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Features
              </Link>
              <Link 
                to="/#capabilities" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Capabilities
              </Link>
              <Link 
                to="/#pricing" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Pricing
              </Link>
            </div>
          </div>
          
          <Button 
            className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};