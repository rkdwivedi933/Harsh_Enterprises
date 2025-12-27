import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Package, Sprout, ArrowRight, Phone } from 'lucide-react';
import herosection from "../../assets/herosection/vedio1.mp4"
import AnimationButton from '../layout/AnimationButton';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const products = [
    { name: 'Seedling Tray', icon: Sprout },
    { name: 'HIPS Roll', icon: Package },
    { name: 'Cocopit', icon: Leaf },
  ];

const navigate = useNavigate();
const handleContactButton = () =>{
  navigate('/contact')
}
const handleProductButton = () =>{
  navigate('/products')
}

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={herosection} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 text-center"
      >
        

        <motion.h1 variants={fadeUpVariants} className="heading-xl text-white mb-6">
          Harsh Enterprises
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          className="paragraph text-white max-w-3xl mx-auto mb-8"
        >
          Leading manufacturer of premium agriculture products, empowering modern
          farming with sustainable and innovative solutions.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="chip bg-white/20 backdrop-blur-sm text-white border border-white/30"
              >
                <Icon className="w-4 h-4" />
                <span>{product.name}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
          onClick={handleProductButton}
            whileHover={{ scale: 1.05 }}
            className="btn-primary inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <AnimationButton>

            Explore Products
            </AnimationButton>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
          </motion.button>

          <motion.button
          onClick={handleContactButton}
            whileHover={{ scale: 1.05 }}
            className="px-8 py-3 cursor-pointer bg-white/10 text-white font-semibold rounded-lg border-2 border-white/50 backdrop-blur-sm"
          >
            <AnimationButton>

            <Phone className="w-5 h-5 mr-2 inline" />
            Contact Us
            </AnimationButton>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
