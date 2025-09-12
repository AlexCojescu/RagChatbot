import Link from 'next/link'
import { ArrowRightIcon, ChartBarIcon, LightBulbIcon, TrophyIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const sections = [
    {
      title: 'Mission & Vision',
      description: 'Our purpose-driven approach to transforming businesses',
      icon: <LightBulbIcon className="w-12 h-12" />,
      href: '/about/mission-vision',
      color: 'from-blue-500 to-cyan-600',
      stats: '5+ Years of Impact'
    },
    {
      title: 'Value Proposition',
      description: 'What makes us uniquely positioned to drive your success',
      icon: <ChartBarIcon className="w-12 h-12" />,
      href: '/about/value-proposition',
      color: 'from-purple-500 to-pink-600',
      stats: '300% Avg Growth'
    },
    {
      title: 'Social Proof & ROI',
      description: 'Proven results and measurable outcomes across industries',
      icon: <TrophyIcon className="w-12 h-12" />,
      href: '/about/social-proof',
      color: 'from-emerald-500 to-teal-600',
      stats: '$50M+ Revenue Generated'
    }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Driving Results Through
            <span className="block bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
              Innovation & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with forward-thinking companies to deliver measurable growth through 
            strategic innovation, proven methodologies, and data-driven results.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link key={index} href={section.href} className="group">
                <div className="relative h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${section.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                    {section.stats}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-semibold group-hover:gap-4 transition-all">
                    Explore Details
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Track Record</h2>
            <p className="text-gray-600">Numbers that speak to our commitment to excellence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Successful Projects' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '300%', label: 'Average ROI Increase' },
              { value: '24/7', label: 'Support & Monitoring' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
