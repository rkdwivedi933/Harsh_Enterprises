import React from 'react';
import { motion } from 'framer-motion';
import {
  Award,
  ShieldCheck,
  Leaf,
  CheckCircle,
  Star,
  Medal,
  BadgeCheck,
  
} from 'lucide-react';

export default function CertificationsQuality() {
  const certifications = [
    {
      id: 'iso',
      icon: Award,
      title: 'ISO Certified',
      subtitle: 'International Standards',
      description:
        'Our manufacturing processes meet rigorous ISO quality management standards, ensuring consistency and excellence in every product.',
      badge: 'ISO 9001:2015',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      id: 'quality',
      icon: ShieldCheck,
      title: 'Quality Tested',
      subtitle: 'Rigorous Standards',
      description:
        'Every batch undergoes comprehensive testing protocols to guarantee durability, performance, and safety for agricultural applications.',
      badge: '100% Tested',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-700',
      borderColor: 'border-green-200'
    },
    {
      id: 'eco',
      icon: Leaf,
      title: 'Eco-Friendly',
      subtitle: 'Sustainable Practices',
      description:
        'Committed to environmental responsibility through sustainable materials and eco-conscious manufacturing processes.',
      badge: 'Green Certified',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-700',
      borderColor: 'border-emerald-200'
    }
  ];

  const qualityPoints = [
    { icon: CheckCircle, text: 'Multi-stage Quality Inspection' },
    { icon: Star, text: 'Premium Grade Materials' },
    { icon: Medal, text: 'Industry Leading Standards' },
    { icon: BadgeCheck, text: 'Third-Party Verified' }
  ];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear'
        }}
        style={{
          backgroundImage:
            'radial-gradient(circle, #10b981 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              
            </motion.div>
            <h2 className="heading-xl text-gray-900">
              Certifications & <span className='text-green-600'>Quality Assurance</span> 
            </h2>
          </div>

         

          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            At Harsh Enterprises, quality isn't just a goal—it's our foundation.
       
          </p>
        </motion.div>

        {/* ================= CERTIFICATION CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  y: -10,
                  boxShadow:
                    '0 20px 40px -10px rgba(16, 185, 129, 0.3)'
                }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${cert.borderColor} group relative`}
              >
                <div className={`h-1.5 bg-linear-to-b ${cert.color}`} />

                <div className="p-8 text-center">
                  <motion.div
                    className={`${cert.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    whileHover={{ scale: 1.15, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${cert.iconColor}`}
                    />
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {cert.subtitle}
                  </p>

                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 bg-linear-to-b ${cert.color} text-white rounded-lg text-sm font-semibold shadow-md`}
                  >
                    <BadgeCheck className="w-4 h-4" />
                    {cert.badge}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= QUALITY PROMISE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-green-100"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-center md:text-left">
              <h3 className="heading-md text-gray-900 mb-4">
                Our Quality Promise
              </h3>
              <p className="paragraph text-gray-600 mb-6">
                Every product from Harsh Enterprises passes through rigorous
                quality checkpoints, ensuring that farmers receive only the
                best.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {qualityPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100"
                    >
                      <IconComponent className="w-5 h-5 text-green-600" />
                      <span className="text-sm font-medium text-gray-700">
                        {point.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* right card unchanged */}
            <div className="bg-linear-to-b from-green-500 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-2xl">
              <Award className="w-24 h-24 mx-auto mb-4" />
              <h4 className="text-2xl font-bold mb-2">
                Certified Excellence
              </h4>
              <p className="text-white/90 text-sm">
                Trusted by farmers across regions
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= FOOTER BADGE ================= */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-b from-green-100 to-emerald-100 rounded-full border border-green-200">
            <ShieldCheck className="w-5 h-5 text-green-700" />
            <span className="text-sm font-semibold text-green-800">
              Committed to Quality, Certified for Trust
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
