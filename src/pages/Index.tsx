import React from "react";
import { HeroSection } from "@/components/altan/HeroSection";
import { FeaturesSection } from "@/components/altan/FeaturesSection";
import { CapabilitiesSection } from "@/components/altan/CapabilitiesSection";
import { PricingSection } from "@/components/altan/PricingSection";
import { CTASection } from "@/components/altan/CTASection";
import { Footer } from "@/components/altan/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Commit flow test - testing the commit workflow */}
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;