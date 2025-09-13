// components/about/value-proposition-section.tsx
import React from 'react';
import { Rocket, Target, Users, Cog, Brain, Database, TrendingUp } from "lucide-react";

interface ValuePropositionSectionProps {
  className?: string;
}

interface DifferentiatorCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: 'blue' | 'purple' | 'emerald';
}

const DifferentiatorCard: React.FC<DifferentiatorCardProps> = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  accentColor 
}) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50/60',
      text: 'text-blue-600',
      border: 'border-blue-100/50',
      hover: 'hover:border-blue-200 hover:shadow-blue-500/10 group-hover:bg-blue-100/60'
    },
    purple: {
      bg: 'bg-purple-50/60',
      text: 'text-purple-600',
      border: 'border-purple-100/50',
      hover: 'hover:border-purple-200 hover:shadow-purple-500/10 group-hover:bg-purple-100/60'
    },
    emerald: {
      bg: 'bg-emerald-50/60',
      text: 'text-emerald-600',
      border: 'border-emerald-100/50',
      hover: 'hover:border-emerald-200 hover:shadow-emerald-500/10 group-hover:bg-emerald-100/60'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <div className={`group relative overflow-hidden rounded-2xl border ${colors.border} bg-white/90 backdrop-blur-sm p-8 lg:p-10 shadow-sm transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1 ${colors.hover}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${colors.bg} ${colors.text} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
          {icon}
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{subtitle}</p>
            <h3 className="text-2xl font-bold text-gray-900 leading-tight">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed font-medium text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function ValuePropositionSection({ className = "" }: ValuePropositionSectionProps) {
  const differentiators = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Radical Partnership & Strategic Focus",
      subtitle: "Extension of Your Team",
      description: "Unlike agencies that deliver a product and walk away, we embed ourselves in your business. We act as an extension of your team, applying technology not for its own sake but as a strategic tool to achieve your specific business goals. We're driven by your success, ensuring every solution we build is perfectly aligned with your vision and bottom line.",
      accentColor: 'blue' as const
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Pragmatic Execution & Tangible Results",
      subtitle: "Performance Over Potential",
      description: "We specialize in taking big ideas and executing them flawlessly. We focus on building robust, scalable, and maintainable systems that deliver real, measurable results. Whether it's automating your operations, generating high-quality leads, or deploying an intelligent digital presence, our proven framework ensures your investment delivers a clear and significant return. We turn potential into performance.",
      accentColor: 'purple' as const
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Integrated AI & Data-Driven Architecture",
      subtitle: "Smart & Reliable Systems",
      description: "Our core expertise lies in bridging the gap between cutting-edge AI and foundational data architecture. We don't offer isolated services; we create a cohesive, intelligent digital ecosystem. By deploying powerful RAG infrastructure, we ensure your AI is accurate and trustworthy, while our lead generation and automation solutions are powered by a deep understanding of your data. This integration ensures our systems are not just smart but also reliable, turning your data into a strategic asset.",
      accentColor: 'emerald' as const
    }
  ];

  const valuePoints = [
    {
      icon: <Rocket className="h-6 w-6" />,
      text: "Transform complex digital challenges into measurable outcomes"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      text: "Engineer growth through strategic technology integration"
    },
    {
      icon: <Database className="h-6 w-6" />,
      text: "Advanced AI and data architectures that optimize operations"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      text: "Custom systems designed to generate lasting value"
    }
  ];

  return (
    <section 
      className={`relative bg-gradient-to-b from-white via-gray-50/30 to-white py-24 lg:py-32 ${className}`} 
      aria-labelledby="value-proposition-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
        {/* Value Proposition Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-indigo-200/60 bg-indigo-50/80 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-indigo-700 shadow-sm">
              <div className="mr-3 h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
              Our Value Proposition
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
              We Don&apos;t Just Build Solutions —{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                We Engineer Growth
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-medium max-w-4xl mx-auto">
              Our value proposition is simple: we transform your business with strategic technology, 
              turning complex digital challenges into tangible, measurable outcomes.
            </p>
          </div>
        </div>

        {/* Value Points Grid */}
        <div className="mb-24 lg:mb-32">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {valuePoints.map((point, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-100/50 transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-0.5 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex flex-col items-center text-center space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50/80 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-100">
                    {point.icon}
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Differentiators */}
        <div className="space-y-16 lg:space-y-20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-gray-200/60 bg-white/80 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm">
              <div className="mr-3 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
              What Sets Us Apart
            </div>
            <h3 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
              Our Unique Differentiators
            </h3>
            <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-3xl mx-auto">
              Three core principles that define how we work and why our clients choose us over traditional agencies.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid gap-8 lg:gap-10 xl:gap-12 lg:grid-cols-3">
            {differentiators.map((differentiator, index) => (
              <div
                key={index}
                className="opacity-0 animate-[fadeInUp_0.8s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
              >
                <DifferentiatorCard
                  icon={differentiator.icon}
                  title={differentiator.title}
                  subtitle={differentiator.subtitle}
                  description={differentiator.description}
                  accentColor={differentiator.accentColor}
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
