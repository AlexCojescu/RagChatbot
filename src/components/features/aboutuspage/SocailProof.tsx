import { Metadata } from 'next'
import { StarIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'Proven Results | Client Success Stories & ROI',
  description: 'Real results from real clients. See how we\'ve delivered measurable ROI and business transformation.',
}

export default function SocialProofPage() {
  const testimonials = [
    {
      company: 'TechCorp Solutions',
      industry: 'Technology',
      logo: '🚀',
      quote: 'Within 90 days, we saw a 250% increase in operational efficiency and $2.3M in cost savings.',
      author: 'Sarah Johnson',
      title: 'CEO',
      metrics: {
        roi: '450%',
        timeline: '90 days',
        savings: '$2.3M'
      }
    },
    {
      company: 'HealthFirst Medical',
      industry: 'Healthcare',
      logo: '🏥',
      quote: 'The transformation was remarkable. Patient satisfaction increased by 40% while reducing operational costs by 35%.',
      author: 'Dr. Michael Chen',
      title: 'Chief Medical Officer',
      metrics: {
        roi: '320%',
        timeline: '120 days',
        savings: '$1.8M'
      }
    },
    {
      company: 'Global Manufacturing Inc',
      industry: 'Manufacturing',
      logo: '🏭',
      quote: 'Production efficiency improved by 60% and we eliminated $5M in waste within the first year.',
      author: 'Amanda Rodriguez',
      title: 'COO',
      metrics: {
        roi: '580%',
        timeline: '180 days',
        savings: '$5M'
      }
    }
  ]

  const caseStudies = [
    {
      title: 'Fortune 500 Digital Transformation',
      industry: 'Financial Services',
      challenge: 'Legacy systems causing 40% operational inefficiency',
      solution: 'AI-powered automation and cloud migration',
      results: [
        '$12M annual cost reduction',
        '65% faster processing times',
        '99.9% system uptime achieved'
      ],
      roi: '600%',
      timeline: '8 months'
    },
    {
      title: 'Mid-Market Growth Acceleration',
      industry: 'E-commerce',
      challenge: 'Stagnant growth and increasing customer acquisition costs',
      solution: 'Data-driven marketing optimization and conversion enhancement',
      results: [
        '340% increase in conversion rate',
        '50% reduction in acquisition costs',
        '$8M new revenue generated'
      ],
      roi: '420%',
      timeline: '6 months'
    }
  ]

  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Results Speak Louder
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real success stories from real clients across industries. Every partnership 
            delivers measurable ROI and transformational business outcomes.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { value: '150+', label: 'Successful Projects', sublabel: 'Across 15+ industries' },
            { value: '$50M+', label: 'Client Revenue Generated', sublabel: 'Measurable outcomes' },
            { value: '380%', label: 'Average ROI Increase', sublabel: 'Within first year' },
            { value: '98%', label: 'Client Retention Rate', sublabel: 'Long-term partnerships' }
          ].map((metric, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="font-semibold text-gray-900 mb-1">{metric.label}</div>
              <div className="text-sm text-gray-600">{metric.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Client Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                {/* Company Header */}
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{testimonial.logo}</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.company}</h3>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.title}</div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{testimonial.metrics.roi}</div>
                    <div className="text-xs text-gray-600">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{testimonial.metrics.timeline}</div>
                    <div className="text-xs text-gray-600">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{testimonial.metrics.savings}</div>
                    <div className="text-xs text-gray-600">Savings</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Case Studies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Detailed Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Study Overview */}
                  <div className="md:col-span-2">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{study.title}</h3>
                      <span className="ml-4 bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Metrics */}
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-4">Project Impact</h4>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">{study.roi}</div>
                        <div className="text-sm text-gray-600">Return on Investment</div>
                      </div>
                      <div className="text-center pt-4 border-t border-gray-100">
                        <div className="text-2xl font-bold text-blue-600">{study.timeline}</div>
                        <div className="text-sm text-gray-600">Implementation Timeline</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { award: 'Best Digital Transformation Partner 2024', org: 'Tech Excellence Awards' },
              { award: 'Top ROI Delivery Firm', org: 'Business Innovation Institute' },
              { award: 'Client Success Excellence', org: 'Consulting Industry Awards' },
              { award: 'Innovation in Business Solutions', org: 'Global Business Forum' }
            ].map((recognition, index) => (
              <div key={index} className="text-center bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{recognition.award}</h3>
                <p className="text-xs text-gray-600">{recognition.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
