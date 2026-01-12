import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

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

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button
              className="bg-gradient-primary hover:shadow-elegant transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};