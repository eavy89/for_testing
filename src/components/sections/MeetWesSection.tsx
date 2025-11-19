import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { useIsMobile } from "@/hooks/use-mobile";
export const MeetWesSection: React.FC = () => {
  const isMobile = useIsMobile();
  return <section className="bg-gradient-to-b from-westside-purple to-westside-purple-dark relative py-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-[109px]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 relative z-10 pr-0 md:pr-8 py-[57px]">
            <RevealAnimation delay={0.1}>
              <SectionHeading className={`text-4xl ${!isMobile ? 'text-5xl' : ''} font-bold mb-8`}>
                {isMobile ? "Meet Wes — Your AI Infrastructure Specialist" : <>Meet Wes — Your<br />
                  AI Infrastructure<br />
                  Specialist</>}
              </SectionHeading>
            </RevealAnimation>
            <div className="space-y-8 text-xl">
              <RevealAnimation delay={0.2}>
                <p className="text-gray-200">
                  {isMobile ? "Wes walks your racks, flags what's risky, and remembers what others forget." : <>Wes walks your racks, flags what's risky,<br />
                    and remembers what others forget.</>}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-gray-200">
                  {isMobile ? "Every visit trains him. Every photo makes him smarter. Every Vault Score tells a clearer story." : <>Every visit trains him. Every photo<br />
                    makes him smarter. Every Vault Score<br />
                    tells a clearer story.</>}
                </p>
              </RevealAnimation>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-end relative">
            <RevealAnimation delay={0.4} direction="right">
              <div className="relative pt-16 pb-24 py-[32px]">
                <img src="/altan-uploads/c0d297ea-5ef9-4faf-96be-2bf0cd30c818.png" alt="Wes working on a laptop" className="max-w-full h-auto relative z-0 scale-125" loading="lazy" width="600" height="800" />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-westside-purple-accent/5 rounded-full blur-3xl"></div>
    </section>;
};