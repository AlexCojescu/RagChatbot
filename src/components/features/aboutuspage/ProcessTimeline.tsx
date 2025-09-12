'use client';

// MODIFIED: Explicitly import the 'Variants' type
import { motion, type Variants } from 'framer-motion';
import { ScanSearch, TestTube2, Rocket, Repeat } from 'lucide-react';

const timelineData = [
  {
    icon: <ScanSearch />,
    title: '1. Discovery & Audit',
    description: 'We begin by diving deep into your business, auditing your current systems, and identifying key opportunities for technological leverage and strategic growth.'
  },
  {
    icon: <TestTube2 />,
    title: '2. Strategic Architecture',
    description: 'Based on our findings, we design a bespoke digital ecosystem—from data architecture to user experience—that is purpose-built to achieve your objectives.'
  },
  {
    icon: <Rocket />,
    title: '3. Agile Deployment',
    description: 'We execute with precision, building and integrating your solution in agile sprints. You get transparency and progress updates at every stage of development.'
  },
  {
    icon: <Repeat />,
    title: '4. Optimization & Scale',
    description: 'Our partnership doesn’t end at launch. We monitor performance, gather data, and continuously optimize to ensure your digital assets deliver increasing value over time.'
  }
];

export const ProcessTimeline = () => {
  // MODIFIED: Added explicit Variants typing
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  // MODIFIED: Added explicit Variants typing
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">Our Process</h2>
          <p className="mt-4 text-lg text-gray-600">
            A proven framework for delivering transformative results.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-6 top-6 h-full w-0.5 bg-gray-200" aria-hidden="true" />
          
          <motion.ul
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {timelineData.map((item, index) => (
              <motion.li key={index} className="relative pl-16" variants={itemVariants}>
                <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-blue-600">
                  {item.icon}
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  {/* FIXED: This was likely a <motion.p> without a closing tag. Changed to a standard <p> tag which is sufficient here. */}
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};
