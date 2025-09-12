// components/about/mission-vision-section.tsx
import { Target, Eye, Zap, Code2, TrendingUp, Shield } from "lucide-react";

interface MissionVisionSectionProps {
  className?: string;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/10">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
      {icon}
    </div>
    <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </div>
);

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
    <section className={`bg-white py-16 lg:py-24 ${className}`} aria-labelledby="mission-vision-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="mb-16 lg:mb-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Mission Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                  Our Mission
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Technology as Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    Strategic Advantage
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                At our core, we believe that technology should be a strategic advantage, not a complex obstacle. 
                Our mission is to <strong className="text-gray-900">empower businesses</strong> by transforming their digital potential into tangible growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We do this by serving as <strong className="text-gray-900">radical partners</strong>, building purpose-driven solutions 
                with strategic innovation and pragmatic execution to solve your most significant business challenges and unlock new opportunities.
              </p>
            </div>

            {/* Mission Features Grid */}
            <div className="grid gap-4 sm:grid-cols-1">
              {missionFeatures.map((feature, index) => (
                <FeatureCard
                  key={`mission-${index}`}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Vision Features Grid */}
            <div className="order-2 grid gap-4 sm:grid-cols-1 lg:order-1">
              {visionFeatures.map((feature, index) => (
                <div
                  key={`vision-${index}`}
                  className="group rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Vision Content */}
            <div className="order-1 space-y-6 lg:order-2">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                  Our Vision
                </span>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  Architecting Your{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    Digital Future
                  </span>
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our vision is to be the <strong className="text-gray-900">indispensable force</strong> behind our clients&apos; success, 
                known for architecting and deploying digital ecosystems that don&apos;t just work but accelerate business outcomes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We aspire to create a future where <strong className="text-gray-900">every company</strong>, regardless of size, 
                can leverage technology to its fullest potential, turning every line of code into a strategic asset that drives lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
