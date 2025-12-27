import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Settings, CheckCircle, Package } from 'lucide-react';

const steps = [
  {
    icon: Leaf,
    title: 'Raw Material',
    desc: 'Carefully sourced premium raw materials ensuring the highest quality foundation.',
    color: 'green'
  },
  {
    icon: Settings,
    title: 'Processing',
    desc: 'Modern manufacturing processes with precision engineering and automation.',
    color: 'emerald'
  },
  {
    icon: CheckCircle,
    title: 'Quality Check',
    desc: 'Multi-stage quality assurance meeting international standards.',
    color: 'teal'
  },
  {
    icon: Package,
    title: 'Packaging',
    desc: 'Eco-friendly packaging ensuring protection and sustainability.',
    color: 'amber'
  }
];

const colors = {
  green: 'from-green-400 to-green-600',
  emerald: 'from-emerald-400 to-emerald-600',
  teal: 'from-teal-400 to-teal-600',
  amber: 'from-amber-400 to-amber-600'
};

export default function ManufacturingProcess() {
  return (
    <section className="py-20 bg-linear-to-br from-white via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Manufacturing <span className="text-green-600">Process</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg">
            From raw materials to finished products, every step is carefully monitored.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop center line */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-0.5 h-full bg-linear-to-b from-green-400 via-emerald-500 to-amber-500" />

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col lg:flex-row items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-br ${colors[step.color]} flex items-center justify-center text-white`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-4xl font-bold text-gray-200">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* Center dot (desktop only) */}
                  <div className="hidden lg:flex w-16 justify-center">
                    <div
                      className={`w-5 h-5 rounded-full bg-linear-to-br ${colors[step.color]} shadow-lg`}
                    />
                  </div>

                  <div className="hidden lg:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <p className="font-semibold text-gray-700 text-sm sm:text-base">
              Every product is crafted with precision and care
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
