// components/about/mission-vision-section.tsx
import React from 'react';
import { Target, Eye, Zap, Code2, TrendingUp, Shield } from "lucide-react";

interface MissionVisionSectionProps {
  className?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'mission' | 'vision';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  variant = 'mission' 
}) => {
  const colorClasses = variant === 'mission' 
    ? 'bg-blue-50/50 text-blue-600 group-hover:bg-blue-100/70 border-blue-100/50 hover:border-blue-200 hover:shadow-blue-500/5' 
    : 'bg-purple-50/50 text-purple-600 group-hover:bg-purple-100/70 border-purple-100/50 hover:border-purple-200 hover:shadow-purple-500/5';
  
  return (
    <div className={`group relative overflow-hidden rounded-xl border bg-white/80 backdrop-blur-sm p-4 shadow-sm transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-0.5 ${colorClasses}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start gap-3">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
          variant === 'mission' 
            ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-100 group-hover:scale-105' 
            : 'bg-purple-50 text-purple-600 group-hover:bg-purple-100 group-hover:scale-105'
        }`}>
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="mb-1.5 text-base font-semibold text-gray-900 tracking-tight leading-tight">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed font-medium">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function MissionVisionSection({ className = "" }: MissionVisionSectionProps) {
  const missionFeatures = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Strategic Advantage",
      description: "Transform technology from a complex obstacle into your competitive edge"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Tangible Growth", 
      description: "Convert digital potential into measurable business outcomes"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Radical Partnership",
      description: "Work as your dedicated strategic partner, not just a vendor"
    }
  ];

  const visionFeatures = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Indispensable Force",
      description: "Become the driving power behind our clients&apos; unprecedented success"
    },
    {
      icon: <Code2 className="h-5 w-5" />,
      title: "Strategic Assets",
      description: "Transform every line of code into valuable business assets"
    },
    {
      icon: <Eye className="h-5 w-5" />,
      title: "Future Vision", 
      description: "Enable companies of all sizes to leverage technology&apos;s full potential"
    }
  ];

  return (
    <section 
      className={`relative bg-gradient-to-b from-white via-gray-50/30 to-white py-20 lg:py-32 ${className}`} 
      aria-labelledby="mission-vision-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="relative container mx-auto px-6 sm:px-8 lg:px-12 max-w-6xl">
        {/* Mission Section */}
        <div className="mb-24 lg:mb-32">
          {/* Mission Content - Centered */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full border border-blue-200/60 bg-blue-50/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                  <div className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  Our Mission
                </div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Technology as Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Strategic Advantage
                </span>
              </h2>
              <div className="space-y-6 text-lg max-w-3xl mx-auto">
                <p className="text-gray-600 leading-relaxed font-medium">
                  At our core, we believe that technology should be a strategic advantage, not a complex obstacle. 
                  Our mission is to <strong className="text-gray-900 font-semibold">empower businesses</strong> by transforming their digital potential into tangible growth.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                  We do this by serving as <strong className="text-gray-900 font-semibold">radical partners</strong>, building purpose-driven solutions 
                  with strategic innovation and pragmatic execution to solve your most significant business challenges and unlock new opportunities.
                </p>
              </div>
            </div>
          </div>
          
          {/* Mission Features Grid - Below Content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {missionFeatures.map((feature, index) => (
              <div
                key={`mission-${index}`}
                className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="mission"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-24 lg:mb-32">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-8">
              <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          {/* Vision Content - Centered */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="flex justify-center">
                <div className="inline-flex items-center rounded-full border border-purple-200/60 bg-purple-50/80 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-purple-700 shadow-sm">
                  <div className="mr-2 h-2 w-2 rounded-full bg-purple-500 animate-pulse" />
                  Our Vision
                </div>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-tight">
                Architecting Your{' '}
                <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <div className="space-y-6 text-lg max-w-3xl mx-auto">
                <p className="text-gray-600 leading-relaxed font-medium">
                  Our vision is to be the <strong className="text-gray-900 font-semibold">indispensable force</strong> behind our clients&apos; success, 
                  known for architecting and deploying digital ecosystems that don&apos;t just work but accelerate business outcomes.
                </p>
                <p className="text-gray-600 leading-relaxed font-medium">
                  We aspire to create a future where <strong className="text-gray-900 font-semibold">every company</strong>, regardless of size, 
                  can leverage technology to its fullest potential, turning every line of code into a strategic asset that drives lasting value.
                </p>
              </div>
            </div>
          </div>
          
          {/* Vision Features Grid - Below Content */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {visionFeatures.map((feature, index) => (
              <div
                key={`vision-${index}`}
                className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  variant="vision"
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
            transform: translateY(30px);
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
