import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { ProblemCard } from "@/components/ui/problem-card";
import { BadgeIcon } from "@/components/ui/badge-icon";

export const SmartHandsServicesSection: React.FC = () => {
  return <section className="bg-gradient-to-b from-westside-purple to-westside-purple-dark relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-[109px]">
        <div className="mb-12">
          <RevealAnimation delay={0.1}>
            <SectionHeading className="text-4xl font-bold mb-12">
              What We Handle
            </SectionHeading>
          </RevealAnimation>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <RevealAnimation delay={0.2}>
            <ProblemCard 
              icon={<img src="/altan-uploads/9ef8d897-2e08-447b-9c93-a37b7a9b896d.png" alt="Device installs" className="h-6 w-6" loading="lazy" width="24" height="24" />}
              title="Device installs & removals"
              description="Professional installation and removal of hardware devices with proper documentation."
              hideIcon={false}
            />
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <ProblemCard 
              icon={<img src="/altan-uploads/ad064c99-a9ec-45ab-89cb-c13654380f86.png" alt="Patch cable routing" className="h-6 w-6" loading="lazy" width="24" height="24" />}
              title="Patch cable routing"
              description="Clean, organized cable management with proper labeling and documentation."
              hideIcon={false}
            />
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <ProblemCard 
              icon={<img src="/altan-uploads/89d97376-5c49-4a3f-b68c-b876ca74e7ec.png" alt="Hardware resets" className="h-6 w-6" />}
              title="Hardware resets & reboots"
              description="Quick response for device resets and reboots when systems need attention."
              hideIcon={false}
            />
          </RevealAnimation>
          
          <RevealAnimation delay={0.5}>
            <ProblemCard 
              icon={<img src="/altan-uploads/1c36a68e-4f74-4dfc-afb1-f342ae1ccec1.png" alt="Unboxing" className="h-6 w-6" />}
              title="Unboxing, mounting & racking"
              description="Complete hardware setup from unboxing to secure installation in your racks."
              hideIcon={false}
            />
          </RevealAnimation>
          
          <RevealAnimation delay={0.6}>
            <ProblemCard 
              icon={<img src="/altan-uploads/c71d95ff-a3c4-4a2f-a853-83124df4167e.png" alt="Vendor escorting" className="h-6 w-6" />}
              title="On-site vendor escorting"
              description="Professional coordination and escorting of vendor personnel within your facility."
              hideIcon={false}
            />
          </RevealAnimation>
          
          <RevealAnimation delay={0.7}>
            <ProblemCard 
              icon={<img src="/altan-uploads/625557bd-734a-4d0d-a5be-5f43d767120e.png" alt="Port tracing" className="h-6 w-6" />}
              title="Port tracing & labeling"
              description="Accurate identification, tracing and labeling of network ports and connections."
              hideIcon={false}
            />
          </RevealAnimation>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-westside-purple-accent/5 rounded-full blur-3xl"></div>
    </section>;
};
