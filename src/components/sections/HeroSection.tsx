
import React from "react";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { useIsMobile } from "@/hooks/use-mobile";

export const HeroSection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return <section className="relative bg-hero-datacenter bg-cover bg-center h-[1500px] flex items-start justify-center mt-[-4rem]">
      <div className="absolute inset-0 backdrop-blur-[1px] bg-transparent"></div>
      
      {/* Enhanced gradient overlay at the bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-westside-purple to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10 py-[139px]">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center py-[56px]">
          <RevealAnimation delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-pulse-slow">
              {isMobile ? "AI-Powered Field Service. Human-Level Clarity." : (
                <>AI-Powered Field Service.
                <br />
                Human-Level Clarity.</>
              )}
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From Smart Hands to full-site audits, Wes helps colo and enterprise teams clean up their infrastructure — fast, visibly, and with proof you can act on.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="text-lg md:text-xl text-westside-purple-accent mb-10">
              Vault tracks what changed. Wes flags what's next.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-gradient-to-r from-westside-purple-light to-westside-purple-accent text-white hover:opacity-90 transition-opacity rounded-full px-8">
                Book a Free Site Audit
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-grey/10 rounded-full px-8">
                See the Westside Process
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>;
};
