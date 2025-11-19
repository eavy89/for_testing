
import React from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { RevealAnimation } from "@/components/ui/reveal-animation";

export const ServicesSliderSection: React.FC = () => {
  return <section className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <RevealAnimation width="100%" delay={0.1}>
          <div className="text-left mb-10">
            <span className="inline-block px-3 py-1 bg-westside-purple-light/20 text-westside-purple-accent rounded-full text-sm mb-4">
              Explore all products
            </span>
            <SectionHeading className="max-w-3xl mx-0">
              Explore Our Services/ What We Do
            </SectionHeading>
            <p className="text-gray-300 max-w-2xl mt-4 mb-0">
              From chaos to clarity — without the hand-holding.
              Westside turns reactive infrastructure work into proactive, documented execution.
              Whether we're on-site for a decom or walking your racks, we leave proof — not just paperwork.
            </p>
          </div>
        </RevealAnimation>

        <RevealAnimation width="100%" delay={0.2}>
          <div className="px-0 lg:px-0 md:px-0">
            <Carousel opts={{
            align: "start",
            loop: true
          }} className="w-full">
              <div className="flex items-center justify-end mb-4">
                <CarouselPrevious className="relative static mr-2 translate-y-0 bg-westside-purple-light/20 text-white hover:bg-westside-purple-light/40 border-westside-purple-light/30" />
                <CarouselNext className="relative static ml-2 translate-y-0 bg-westside-purple-light/20 text-white hover:bg-westside-purple-light/40 border-westside-purple-light/30" />
              </div>
              
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 w-full">
                  <ServiceCard icon="/altan-uploads/219324a6-644f-4425-8454-9a7481cb7a0d.png" title="Smart Hands" description="On-demand support for installs, reboots, and physical interventions. We show up fast, follow protocol, and leave a labeled photo trail so no one's guessing what got done." />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 w-full">
                  <ServiceCard icon="/altan-uploads/139080a7-a4d8-4117-a3d6-ca4a2b149237.png" title="Structured Cabling" description="From spaghetti to airflow-ready. Our team routes, labels, and organizes your physical layer so your airflow and audit trail stay clean." />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 w-full">
                  <ServiceCard icon="/altan-uploads/726e8104-998b-46e7-83a8-983d61877e3b.png" title="Decommissioning" description="Secure, efficient hardware removal with documentation. We tag, track, and photo every asset we pull — with chain-of-custody and decom checklists built into Vault." />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 w-full">
                  <ServiceCard icon="/altan-uploads/aa9bf4de-518e-4cc3-9c68-3a71384f078a.png" title="Compliance Audits" description="Audit your racks before the auditors do. We score labeling, airflow, power paths, and security risks — and deliver a Vault report you can hand to compliance." />
                </CarouselItem>
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/3 w-full">
                  <ServiceCard icon="/altan-uploads/750ad647-5d43-4555-8e63-d7a3a6bb76e7.png" title="Cooling & Rack Density Audits" description="Your racks are running hotter and tighter than ever. We show you why — and what to do about it. Includes airflow visuals, blanking panel gaps, and remediation recs." />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </RevealAnimation>
      </div>
    </section>;
};
