import React from "react";
import { Code2, Database, Zap, Shield, Cloud, Sparkles } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "AI Code Generation",
    description: "Multiple specialized agents collaborate to write production-grade code following best practices and your design system.",
  },
  {
    icon: Database,
    title: "Integrated Backend",
    description: "Altan Cloud provides Postgres, PostgREST API, authentication, and storage—fully managed and optimized.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Build complete applications in hours, not weeks. Iterate rapidly with instant deployments and previews.",
  },
  {
    icon: Shield,
    title: "Production Ready",
    description: "Every line of code is linted, type-checked, and tested. Deploy with confidence knowing it just works.",
  },
  {
    icon: Cloud,
    title: "Zero DevOps",
    description: "No infrastructure to manage. Focus on building features while Altan handles scaling, security, and uptime.",
  },
  {
    icon: Sparkles,
    title: "Human-Grade Quality",
    description: "Code that looks like it was written by senior engineers. Clean, maintainable, and following industry standards.",
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="container px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Everything you need to{" "}
            <span className="gradient-text">ship faster</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete development platform powered by AI agents that handle the complexity so you can focus on what matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl glass-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:shadow-glow transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
