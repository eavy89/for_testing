
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { Badge } from "@/components/ui/badge";

export const SmartHandsResultsSection: React.FC = () => {
  return <section className="py-20 bg-[#020018] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020018]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-6">
              Outcomes
            </span>
            <SectionHeading className="max-w-4xl mx-auto">
              Results Our Clients See
            </SectionHeading>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <RevealAnimation delay={0.2}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10 flex items-center">
              <Badge className="bg-westside-purple-accent text-white mr-4">40%</Badge>
              <p className="text-xl text-white">Cut resolution time</p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10 flex items-center">
              <Badge className="bg-westside-purple-accent text-white mr-4">✓</Badge>
              <p className="text-xl text-white">Reduced back-and-forth with remote MSPs</p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10 flex items-center">
              <Badge className="bg-westside-purple-accent text-white mr-4">✓</Badge>
              <p className="text-xl text-white">Maintained audit logs without sending engineers onsite</p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.5}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10 flex items-center">
              <Badge className="bg-westside-purple-accent text-white mr-4">↑</Badge>
              <p className="text-xl text-white">Boosted uptime by catching misseated gear or power issues</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>;
};
