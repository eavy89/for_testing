
import React from "react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealAnimation } from "@/components/ui/reveal-animation";
import { SharedBackgroundLayout } from "@/components/sections/SharedBackgroundLayout";
import { SmartHandsHeroSection } from "@/components/sections/SmartHandsHeroSection";
import { SmartHandsServicesSection } from "@/components/sections/SmartHandsServicesSection";
import { SmartHandsWhySection } from "@/components/sections/SmartHandsWhySection";
import { SmartHandsReportSection } from "@/components/sections/SmartHandsReportSection";
import { SmartHandsUseCasesSection } from "@/components/sections/SmartHandsUseCasesSection";
import { SmartHandsResultsSection } from "@/components/sections/SmartHandsResultsSection";
import { SmartHandsCtaSection } from "@/components/sections/SmartHandsCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

const SmartHands = () => {
  return (
    <div className="flex flex-col min-h-screen bg-westside-purple-dark text-white">
      <SmartHandsHeroSection />
      <SmartHandsServicesSection />
      <SmartHandsWhySection />
      
      {/* Combined sections with shared background */}
      <SharedBackgroundLayout>
        <SmartHandsReportSection />
        <SmartHandsUseCasesSection />
      </SharedBackgroundLayout>
      
      <SmartHandsResultsSection />
      <SmartHandsCtaSection />
      <FooterSection />
    </div>
  );
};

export default SmartHands;
