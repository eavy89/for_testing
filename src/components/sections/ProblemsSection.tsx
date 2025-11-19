
import React from "react";
import { ProblemCard } from "@/components/ui/problem-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";

export const ProblemsSection: React.FC = () => {
  return <section className="py-20 bg-[#020018] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#020018]/80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="text-center mb-16 py-0 my-[58px]">
            <span className="inline-block px-6 py-2 bg-westside-risk/20 text-westside-risk rounded-full text-sm mb-6">
              The Problem We Solve for Infrastructure Teams
            </span>
            <SectionHeading className="max-w-4xl mx-auto text-5xl">
              Unlabeled racks, tribal knowledge, and missing documentation cost more than you think.
            </SectionHeading>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <RevealAnimation delay={0.2}>
            <ProblemCard icon={<img src="/altan-uploads/c07fe73f-416e-4ae5-a4c7-370c01a4d907.png" alt="Risk Icon" className="h-12 w-12" loading="lazy" width="48" height="48" />} title="Risk of Downtime" description="A single unlabeled PDU or mystery cable creates outages." subtext="And no one has the photos to prove what changed." className="h-full" />
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <ProblemCard icon={<img src="/altan-uploads/ed9254d9-cdde-4031-8ac6-c44582d3a9f0.png" alt="Clock Icon" className="h-12 w-12" loading="lazy" width="48" height="48" />} title="Wasted Field Time" description="Techs spend hours hunting instead of fixing problems." subtext="Without visibility or scoring, every visit feels like a guess." className="h-full" />
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <ProblemCard icon={<img src="/altan-uploads/72606d21-c62b-42b1-9cc6-0e56e764f723.png" alt="Clipboard Icon" className="h-12 w-12 object-cover" loading="lazy" width="48" height="48" />} title="Failed Audits, Missed Remediations" description="Compliance teams get stuck chasing documentation and proof." subtext="Smart Hands providers just shrug. Your team takes the hit." className="h-full" />
          </RevealAnimation>
        </div>

        <RevealAnimation width="100%" delay={0.5}>
          <div className="text-center mb-16">
            <h3 className="font-bold mb-6 flex items-center justify-center gap-3 text-base text-slate-500">
              <span className="text-4xl"></span> Relying on Staff or Vendors? You're Still Flying Blind.
            </h3>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <RevealAnimation delay={0.6}>
            <ProblemCard hideIcon={true} icon={<img src="/altan-uploads/381c40b1-0b3b-49cf-9f8e-d493e77432a0.png" alt="Brain Icon" className="h-5 w-5" />} title="Tribal Knowledge Lives Only In Their Heads" description="Internal teams manage infrastructure with no documentation system." className="h-full" />
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <ProblemCard hideIcon={true} icon={<img src="/altan-uploads/02b9c084-81c4-43e0-862e-41316de64b6f.png" alt="Wrench Icon" className="h-5 w-5" />} title="Field Techs Work Fast But Vanish Fast" description="Smart Hands complete jobs without leaving visible audit trails." className="h-full" />
          </RevealAnimation>
          <RevealAnimation delay={0.8}>
            <ProblemCard hideIcon={true} icon={<img src="/altan-uploads/b07e89e6-915b-40da-9623-8465d959d12b.png" alt="Refresh Icon" className="h-5 w-5" />} title="Rework Costs Time On Every Single Side" description="Teams rediscover setups while vendors rebill undocumented work." className="h-full" />
          </RevealAnimation>
          <RevealAnimation delay={0.9}>
            <ProblemCard hideIcon={true} icon={<img src="/altan-uploads/c07fe73f-416e-4ae5-a4c7-370c01a4d907.png" alt="Logout Icon" className="h-5 w-5" />} title="Knowledge Walks Away When People Leave Fast" description="Staff turnover and vendor switches create dangerous knowledge gaps." className="h-full" />
          </RevealAnimation>
        </div>
      </div>
    </section>;
};
