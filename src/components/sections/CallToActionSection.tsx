import React from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { useIsMobile } from "@/hooks/use-mobile";
export const CallToActionSection: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="py-16 relative h-[1201px] flex items-start overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: "url('/altan-uploads/9fd79ad2-3c32-4d54-9230-0d0a7d0da286.png')"
    }}>
        <div className="absolute inset-0 bg-transparent py-0 my-0"></div>
      </div>
      
      {/* Character image positioned centrally */}
      <div className="absolute w-full bottom-0 flex justify-center items-end z-10">
        <img src="/altan-uploads/68d95f81-6170-4b72-881e-a020552fbd79.png" alt="Westside technician with laptop" className="w-auto h-auto max-w-[700px]" loading="lazy" width="700" height="823" />
      </div>
      
      {/* Content positioned at the top with padding */}
      <div className="container mx-auto px-4 relative z-20 pt-[130px] w-full my-0 py-[106px]">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation width="100%" delay={0.1}>
            <SectionHeading className="text-4xl md:text-5xl lg:text-6xl !mb-6 text-white">
              {isMobile ? "Transform Your Data Center Infrastructure" : <>Transform Your Data Center Infrastructure</>}
            </SectionHeading>
          </RevealAnimation>
          
          <RevealAnimation width="100%" delay={0.2}>
            <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
              Join industry leaders who trust Westside to document, visualize, and optimize their 
              mission-critical infrastructure. Enhance efficiency, reduce risks, and gain complete 
              visibility into your data center operations.
            </p>
          </RevealAnimation>
          
          <RevealAnimation width="100%" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-westside-purple-light to-westside-purple-accent text-white hover:opacity-90 transition-opacity rounded-full px-8">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-/10 rounded-full px-8">
                Schedule Demo
              </Button>
            </div>
          </RevealAnimation>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <RevealAnimation delay={0.4} className="absolute bottom-0 left-0 w-1/2 h-1/2">
          <div className="bg-westside-purple-accent/10 rounded-full blur-3xl transform -translate-y-1/4 w-full h-full"></div>
        </RevealAnimation>
        <RevealAnimation delay={0.4} className="absolute top-0 right-0 w-1/3 h-1/3">
          <div className="bg-westside-purple-light/10 rounded-full blur-3xl transform -translate-x-1/4 w-full h-full"></div>
        </RevealAnimation>
      </div>
    </section>;
};