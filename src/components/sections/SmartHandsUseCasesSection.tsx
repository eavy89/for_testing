
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";

export const SmartHandsUseCasesSection: React.FC = () => {
  return <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-4">
              Scenarios
            </span>
            <SectionHeading className="max-w-3xl mx-auto">
              Common Use Cases
            </SectionHeading>
          </div>
        </RevealAnimation>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-westside-purple-accent/20">
                  <RevealAnimation delay={0.2}>
                    <th className="py-4 px-6 text-left text-lg font-bold text-white">Scenario</th>
                  </RevealAnimation>
                  <RevealAnimation delay={0.3}>
                    <th className="py-4 px-6 text-left text-lg font-bold text-white">How We Help</th>
                  </RevealAnimation>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-westside-purple-accent/10">
                  <RevealAnimation delay={0.4}>
                    <td className="py-4 px-6 text-gray-300">Swapping a bad switch</td>
                  </RevealAnimation>
                  <RevealAnimation delay={0.4}>
                    <td className="py-4 px-6 text-gray-300">Unrack, replace, relabel, and update the port map</td>
                  </RevealAnimation>
                </tr>
                <tr className="border-b border-westside-purple-accent/10">
                  <RevealAnimation delay={0.5}>
                    <td className="py-4 px-6 text-gray-300">Prepping for an exec visit</td>
                  </RevealAnimation>
                  <RevealAnimation delay={0.5}>
                    <td className="py-4 px-6 text-gray-300">Clean up, document, and confirm rack state</td>
                  </RevealAnimation>
                </tr>
                <tr className="border-b border-westside-purple-accent/10">
                  <RevealAnimation delay={0.6}>
                    <td className="py-4 px-6 text-gray-300">Emergency reboot at midnight</td>
                  </RevealAnimation>
                  <RevealAnimation delay={0.6}>
                    <td className="py-4 px-6 text-gray-300">24/7 SLA with proof of work</td>
                  </RevealAnimation>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>;
};
