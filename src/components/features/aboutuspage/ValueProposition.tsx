// components/about/value-proposition-section.tsx
import { Rocket, Target, Users, Cog, Brain, Database, TrendingUp, Shield } from "lucide-react";

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
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      border: 'border-blue-200',
      hover: 'hover:border-blue-300 hover:shadow-blue-500/10'
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      border: 'border-purple-200',
      hover: 'hover:border-purple-300 hover:shadow-purple-500/10'
    },
    emerald: {
      bg: 'bg-emerald-50',
      text: 'text-emerald-600',
      border: 'border-emerald-200',
      hover: 'hover:border-emerald-300 hover:shadow-emerald-500/10'
    }
  };

  const colors = colorClasses[accentColor];

  return (
    <div className={`group rounded-xl border ${colors.border} bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg ${colors.hover}`}>
      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-colors group-hover:scale-105`}>
        {icon}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">{subtitle}</p>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default function ValuePropositionSection({ className = "" }: ValuePropositionSectionProps) {
  const differentiators = [
    {
      icon: <Users className="h-7 w-7" />,
      title: "Radical Partnership & Strategic Focus",
      subtitle: "Extension of Your Team",
      description: "Unlike agencies that deliver a product and walk away, we embed ourselves in your business. We act as an extension of your team, applying technology not for its own sake but as a strategic tool to achieve your specific business goals. We&apos;re driven by your success, ensuring every solution we build is perfectly aligned with your vision and bottom line.",
      accentColor: 'blue' as const
    },
    {
      icon: <Target className="h-7 w-7" />,
      title: "Pragmatic Execution & Tangible Results",
      subtitle: "Performance Over Potential",
      description: "We specialize in taking big ideas and executing them flawlessly. We focus on building robust, scalable, and maintainable systems that deliver real, measurable results. Whether it&apos;s automating your operations, generating high-quality leads, or deploying an intelligent digital presence, our proven framework ensures your investment delivers a clear and significant return. We turn potential into performance.",
      accentColor: 'purple' as const
    },
    {
      icon: <Brain className="h-7 w-7" />,
      title: "Integrated AI & Data-Driven Architecture",
      subtitle: "Smart & Reliable Systems",
      description: "Our core expertise lies in bridging the gap between cutting-edge AI and foundational data architecture. We don&apos;t offer isolated services; we create a cohesive, intelligent digital ecosystem. By deploying powerful RAG infrastructure, we ensure your AI is accurate and trustworthy, while our lead generation and automation solutions are powered by a deep understanding of your data. This integration ensures our systems are not just smart but also reliable, turning your data into a strategic asset.",
      accentColor: 'emerald' as const
    }
  ];

  const valuePoints = [
    {
      icon: <Rocket className="h-5 w-5" />,
      text: "Transform complex digital challenges into measurable outcomes"
    },
    {
      icon: <Cog className="h-5 w-5" />,
      text: "Engineer growth through strategic technology integration"
    },
    {
      icon: <Database className="h-5 w-5" />,
      text: "Advanced AI and data architectures that optimize operations"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      text: "Custom systems designed to generate lasting value"
    }
  ];

  return (
    <section className={`bg-white py-16 lg:py-24 ${className}`} aria-labelledby="value-proposition-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Value Proposition Header */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
              Our Value Proposition
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              We Don&apos;t Just Build Solutions —{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                We Engineer Growth
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our value proposition is simple: we transform your business with strategic technology, 
              turning complex digital challenges into tangible, measurable outcomes.
            </p>
          </div>
        </div>

        {/* Value Points Grid */}
        <div className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  {point.icon}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unique Differentiators */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
              What Sets Us Apart
            </span>
            <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Unique Differentiators
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three core principles that define how we work and why our clients choose us over traditional agencies.
            </p>
          </div>

          {/* Differentiators Grid */}
          <div className="grid gap-8 lg:grid-cols-3">
            {differentiators.map((differentiator, index) => (
              <DifferentiatorCard
                key={index}
                icon={differentiator.icon}
                title={differentiator.title}
                subtitle={differentiator.subtitle}
                description={differentiator.description}
                accentColor={differentiator.accentColor}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 text-center shadow-sm">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-gray-900">
                Ready to Transform Your Business?
              </h4>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the power of strategic technology that doesn&apos;t just work — it accelerates your success. 
                Let&apos;s turn your digital potential into measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
