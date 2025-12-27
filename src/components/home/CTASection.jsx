import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import AnimationButton from '../layout/AnimationButton';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
const navigate = useNavigate()
  return (
    <section className="relative bg-linear-to-br from-green-600 via-emerald-600 to-green-700 py-20 overflow-hidden">
      {/* ===== Animated Background ===== */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* ===== LEFT CONTENT ===== */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-1 bg-white rounded-full mx-auto lg:mx-0" />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Grow Better. Manufacture Smarter.
            </h2>

            <p className="text-white text-opacity-90 max-w-xl mb-8">
              Partner with Harsh Enterprises for premium agriculture solutions.
              Let's build a sustainable future together.
            </p>

            {/* trust points */}
            <div className="flex flex-wrap gap-6 text-white text-opacity-80">
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-white rounded-full" /> 24/7 Support
              </span>
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-white rounded-full" /> Fast Delivery
              </span>
              <span className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-white rounded-full" /> Quality Assured
              </span>
            </div>
          </motion.div>

          {/* ===== RIGHT BUTTONS ===== */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end gap-4"
          >
            <motion.button
            onClick={()=>navigate('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <AnimationButton>

              <span>Get Quote</span>
              </AnimationButton>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>

           
          </motion.div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default CTASection;
