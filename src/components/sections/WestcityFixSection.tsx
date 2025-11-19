import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProcessCard } from "@/components/ui/process-card";
import { Button } from "@/components/ui/button";
import { RevealAnimation } from "@/components/ui/reveal-animation";
export const WestcityFixSection: React.FC = () => {
  return <section className="py-16 relative z-10">
      <div className="container mx-auto px-4 my-0 py-0">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="mb-10 text-center my-[5px]">
            <span className="inline-block px-3 py-1 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-4">
              The Westside Fix
            </span>
            <SectionHeading className="max-w-2xl mx-auto">
              Wes documents what your vendors won't. Vault remembers what your staff can't.
            </SectionHeading>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 mb-10">
              <Button size="lg" variant="default" className="bg-gradient-to-r from-westside-purple-light to-westside-purple-accent text-white hover:opacity-90 transition-opacity rounded-full px-8">
                Book a Free Site Audit
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-/10 rounded-full px-8">
                See the Westside Process
              </Button>
            </div>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-4 gap-6">
          <RevealAnimation delay={0.2}>
            <ProcessCard icon={<img src="/altan-uploads/8be7f949-1f0c-441d-8d7d-11512ce2cc04.png" alt="Audit" className="h-auto w-[150px]" loading="lazy" width="150" height="150" />} title="Audit" description="We walk your site — or your team uploads photos using our audit checklist." />
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <ProcessCard icon={<img src="/altan-uploads/3867c9f2-00b4-4050-8d42-da3b731765ac.png" alt="Review & Score" className="h-auto w-[150px]" loading="lazy" width="150" height="150" />} title="Review & Score" description="Wes scores your racks, flags risks, and generates a Vault Score." />
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <ProcessCard icon={<img src="/altan-uploads/6ac3d1bf-3d96-414f-b3f4-28745a67776f.png" alt="Reporting + Recommendations" className="h-auto w-[150px]" loading="lazy" width="150" height="150" />} title="Reporting + Recommendations" description="You get a clear, visual report with before/after photos, risks, and recommendations." />
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <ProcessCard icon={<img src="/altan-uploads/196f3283-4104-458f-b55b-4c8a84adb2f9.png" alt="Infrastructure Intelligence Activated" className="h-auto w-[150px]" loading="lazy" width="150" height="150" />} title="Infrastructure Intelligence Activated" description="Vault tracks what changed — every site, every quarter, every visit." />
          </RevealAnimation>
        </div>
      </div>
    </section>;
};