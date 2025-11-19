
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";

export const SmartHandsWhySection: React.FC = () => {
  return <section className="py-20 bg-[#020018] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020018]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="text-center mb-16">
            <span className="inline-block px-6 py-2 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-6">
              Why Smart Hands Matter
            </span>
            <SectionHeading className="max-w-4xl mx-auto">
              Documentation That Proves The Work Was Done Right
            </SectionHeading>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <RevealAnimation delay={0.2}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10">
              <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
              <p className="text-gray-300 text-lg">
                Most remote hands providers leave you with mystery cables, unlabeled gear, or zero proof of work.
              </p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10">
              <h3 className="text-2xl font-bold text-white mb-4">The Westside Solution</h3>
              <p className="text-gray-300 text-lg">
                Every job is checklist-driven, photo-documented, and uploaded to your Vault — your secure infrastructure record.
              </p>
            </div>
          </RevealAnimation>
          
          <RevealAnimation delay={0.4}>
            <div className="bg-[#15051f]/60 p-8 rounded-lg border border-westside-purple-light/10">
              <h3 className="text-2xl font-bold text-white mb-4">Bonus</h3>
              <p className="text-gray-300 text-lg">
                We respond fast, look sharp, and follow instructions like professionals (because we are).
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>;
};
