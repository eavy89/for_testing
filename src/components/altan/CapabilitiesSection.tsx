import React from "react";
import { Layout, Bot, Palette, Server } from "lucide-react";

const capabilities = [
  {
    icon: Layout,
    title: "Modern Web Interfaces",
    description: "React + Vite applications with premium Apple-like design, responsive layouts, and smooth interactions.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description: "Professional design systems with shadcn/ui, Tailwind CSS, and custom component libraries.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description: "Conversational AI agents with ElevenLabs voice integration for customer support and interactive experiences.",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Server,
    title: "Backend Services",
    description: "FastAPI microservices with payment processing, email, AI integrations, and third-party APIs.",
    gradient: "from-orange-500 to-red-500",
  },
];

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      <div className="container relative px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Build anything,{" "}
            <span className="gradient-text">powered by AI</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From landing pages to complex SaaS applications, Altan's agents handle frontend, backend, database, and AI integration.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="relative p-10 rounded-3xl bg-card border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-glow group overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {capability.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
