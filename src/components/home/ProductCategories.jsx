import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, Layers, Leaf } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCategories = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: Sprout,
      title: 'Seedling Tray',
      description:
        'Premium quality seedling trays designed for optimal plant growth and easy handling. Perfect for nurseries and commercial farming.',
      color: 'green',
      path: '/seedling-tray',
      bubbles: [
        { size: 40, top: '10%', left: '15%', delay: 0 },
        { size: 60, top: '60%', right: '10%', delay: 1 },
        { size: 30, bottom: '20%', left: '70%', delay: 2 }
      ]
    },
    {
      icon: Layers,
      title: 'HIPS Roll',
      description:
        'High-impact polystyrene rolls engineered for durability and versatility in agricultural applications. Industry-leading quality.',
      color: 'emerald',
      path: '/hips-roll',
      bubbles: [
        { size: 50, top: '15%', right: '20%', delay: 0.5 },
        { size: 35, top: '55%', left: '15%', delay: 1.5 },
        { size: 45, bottom: '15%', right: '15%', delay: 2.5 }
      ]
    },
    {
      icon: Leaf,
      title: 'Cocopit',
      description:
        'Sustainable cocopit products that enhance soil quality and promote healthy plant growth. Eco-friendly and highly effective.',
      color: 'amber',
      path: '/cocopit',
      bubbles: [
        { size: 55, top: '12%', left: '10%', delay: 1 },
        { size: 40, top: '50%', right: '12%', delay: 2 },
        { size: 30, bottom: '18%', left: '65%', delay: 0 }
      ]
    }
  ];

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

  const getColorClasses = (color) => {
    const colors = {
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        iconBg: 'bg-green-100',
        hover: 'hover:shadow-green-200',
        accent: 'bg-green-500',
        bubble: 'bg-green-200'
      },
      emerald: {
        bg: 'bg-emerald-50',
        icon: 'text-emerald-600',
        iconBg: 'bg-emerald-100',
        hover: 'hover:shadow-emerald-200',
        accent: 'bg-emerald-500',
        bubble: 'bg-emerald-200'
      },
      amber: {
        bg: 'bg-amber-50',
        icon: 'text-amber-600',
        iconBg: 'bg-amber-100',
        hover: 'hover:shadow-amber-200',
        accent: 'bg-amber-500',
        bubble: 'bg-amber-200'
      }
    };
    return colors[color];
  };

  return (
    <section className="section bg-linear-to-br from-green-50 via-white to-emerald-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Our Premium <span className='text-green-600'>Products</span> 
          </h2>
          <p className="paragraph text-gray-600 max-w-2xl mx-auto">
            Discover our range of high-quality agriculture manufacturing solutions designed to enhance productivity and sustainability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            const colors = getColorClasses(product.color);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -12 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg  transition-all duration-400 overflow-hidden`}
              >
                {product.bubbles.map((bubble, bIndex) => (
                  <motion.div
                    key={bIndex}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{
                      duration: 4 + bubble.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: bubble.delay
                    }}
                    className={`absolute ${colors.bubble} rounded-full opacity-20`}
                    style={{
                      width: bubble.size,
                      height: bubble.size,
                      top: bubble.top,
                      left: bubble.left,
                      right: bubble.right,
                      bottom: bubble.bottom
                    }}
                  />
                ))}

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 ${colors.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                  >
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </motion.div>

                  <div className={`w-12 h-1 ${colors.accent} rounded-full mb-4`} />

                  <h3 className="heading-md text-gray-900 mb-3">
                    {product.title}
                  </h3>

                  <p className="paragraph text-gray-600 mb-6">
                    {product.description}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(product.path)}
                    className={`inline-flex items-center ${colors.icon} font-semibold text-sm cursor-pointer`}
                  >
                    <span>Learn More</span>
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCategories;
