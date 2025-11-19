
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { CheckIcon } from "lucide-react";

export const SmartHandsReportSection: React.FC = () => {
  return <section className="py-16 relative z-10">
      <div className="container mx-auto px-4">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="mb-10 text-center">
            <span className="inline-block px-3 py-1 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-4">
              Visual Reports
            </span>
            <SectionHeading className="max-w-2xl mx-auto">
              What You See in the Report
            </SectionHeading>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <RevealAnimation delay={0.2}>
            <div className="flex flex-col items-center text-center bg-westside-purple-dark/50 p-6 rounded-lg border border-westside-purple-light/20">
              <div className="bg-westside-purple-accent/20 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-westside-purple-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Labeled photos</h3>
              <p className="text-gray-300">Clear, annotated images showing completed work and current state</p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <div className="flex flex-col items-center text-center bg-westside-purple-dark/50 p-6 rounded-lg border border-westside-purple-light/20">
              <div className="bg-westside-purple-accent/20 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-westside-purple-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Work summary + timestamp</h3>
              <p className="text-gray-300">Detailed documentation of all actions taken with exact timing</p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col items-center text-center bg-westside-purple-dark/50 p-6 rounded-lg border border-westside-purple-light/20">
              <div className="bg-westside-purple-accent/20 p-3 rounded-full mb-4">
                <CheckIcon className="h-6 w-6 text-westside-purple-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">Vault Score snapshot</h3>
              <p className="text-gray-300">Infrastructure health metrics if part of a full audit</p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>;
};
