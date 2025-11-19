
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className
}) => {
  return <Card className={cn("bg-westside-purple-dark/80 border-westside-purple-light/20 h-full flex flex-col w-full", className)}>
      <CardHeader>
        <div className="text-3xl mb-2 flex items-center justify-start">
          <img 
            src={icon as string} 
            alt={title} 
            className="w-12 h-12 object-contain" 
            loading="lazy"
            width="48" 
            height="48"
          />
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300 text-base">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto pt-2">
        <Button variant="outline" className="border-westside-purple-light/30 hover:bg-westside-light/10 w-full text-westside-purple-accent bg-transparent">
          Learn More
        </Button>
      </CardFooter>
    </Card>;
};
