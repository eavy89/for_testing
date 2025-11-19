import React from "react";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/ui/reveal-animation";
export const SmartHandsHeroSection: React.FC = () => {
  return <section className="relative h-[1080px] flex items-start justify-center mt-[-4rem]">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('/altan-uploads/f3234756-e15a-4902-843f-ea5ddddc321e.png')"
    }}>
      </div>
      
      {/* Enhanced gradient overlay at the bottom for seamless transition */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-westside-purple to-transparent"></div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10 py-[240px]">
        <div className="max-w-3xl text-left flex flex-col items-start py-[456px]">
          <RevealAnimation delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-pulse-slow">
              Reliable On-Site Support.
              <br />
              With Photos, Not Promises.
            </h1>
          </RevealAnimation>
          
          <RevealAnimation delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Westside Smart Hands delivers fast, professional remote support for everything from power-ups to patching — with photo-backed reporting in 24 hours.
            </p>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="bg-gradient-to-r from-westside-purple-light to-westside-purple-accent text-white hover:opacity-90 transition-opacity rounded-full px-8">
                Book a Smart Hands Visit
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>;
};