import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, Settings2, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Eco Friendly',
      description: 'Sustainable manufacturing practices that prioritize environmental responsibility and reduce carbon footprint.',
      color: 'green'
    },
    {
      icon: ShieldCheck,
      title: 'High Durability',
      description: 'Premium quality materials engineered for long-lasting performance in demanding agricultural conditions.',
      color: 'emerald'
    },
    {
      icon: Settings2,
      title: 'Precision Manufacturing',
      description: 'Advanced technology and quality control ensuring consistent excellence in every product we deliver.',
      color: 'teal'
    },
    {
      icon: Users,
      title: 'Trusted by Farmers',
      description: 'Proven track record with thousands of satisfied farmers who rely on our products for their success.',
      color: 'amber'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      green: {
        iconBg: 'bg-green-100',
        icon: 'text-green-600',
      
        accent: 'bg-gradient-to-br from-green-50 to-green-100'
      },
      emerald: {
        iconBg: 'bg-emerald-100',
        icon: 'text-emerald-600',
      
        accent: 'bg-gradient-to-br from-emerald-50 to-emerald-100'
      },
      teal: {
        iconBg: 'bg-teal-100',
        icon: 'text-teal-600',
        
        accent: 'bg-gradient-to-br from-teal-50 to-teal-100'
      },
      amber: {
        iconBg: 'bg-amber-100',
        icon: 'text-amber-600',
        
        accent: 'bg-gradient-to-br from-amber-50 to-amber-100'
      }
    };
    return colors[color];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section className="section bg-linear-to-br from-green-50 via-white to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Why Choose Harsh <span className='text-green-600'>Enterprises</span> 
          </h2>
          <p className="paragraph text-gray-600 max-w-2xl mx-auto">
            We combine innovation, quality, and sustainability to deliver exceptional agriculture solutions that farmers trust.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorClasses(feature.color);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`${colors.accent} rounded-2xl p-8 shadow-lg ${colors.glow} hover:shadow-2xl transition-all duration-400 backdrop-blur-sm`}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6 ${colors.glow} shadow-lg`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </motion.div>

                <h3 className="heading-md text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="paragraph text-gray-600">
                  {feature.description}
                </p>

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '3rem' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`h-1 ${colors.iconBg} rounded-full mt-6`}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <p className="text-gray-700 font-semibold">
              Quality Certified & ISO Compliant
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;