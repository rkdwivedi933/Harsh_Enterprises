import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, CheckCircle, Droplets, Recycle, Sun, Package, ArrowRight, Phone, ArrowBigRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import AnimationButton from '../layout/AnimationButton';

export default function SeedlingDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
      alt: 'Seedling trays with multiple cavities'
    },
    {
      url: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      alt: 'Close-up of seedling tray cavities'
    },
    {
      url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      alt: 'Different colored seedling trays'
    },
    {
      url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=600&fit=crop',
      alt: 'Seedling trays in use at nursery'
    }
  ];

  const features = [
    {
      icon: Sprout,
      title: 'Uniform Growth',
      description: 'Ensures consistent plant development across all cavities'
    },
    {
      icon: Recycle,
      title: 'Durable & Reusable',
      description: 'Made from high-quality materials for multiple growing seasons'
    },
    {
      icon: Droplets,
      title: 'Excellent Drainage',
      description: 'Optimized drainage holes prevent waterlogging and root rot'
    },
    {
      icon: Sun,
      title: 'Weather Resistant',
      description: 'UV-stabilized material withstands harsh outdoor conditions'
    },
    {
      icon: Package,
      title: 'Easy Transplanting',
      description: 'Promotes healthy root development for stress-free transplanting'
    },
    {
      icon: CheckCircle,
      title: 'Multiple Cavity Options',
      description: 'Available in various cavity sizes and counts for different needs'
    }
  ];

  const cavityOptions = [
    
    '70 Cavities',
    '104 Cavities',
    '126 Cavities',
    '150 Cavities',
    '160 Cavities',
    '209 Cavities',
    'Custom Sizes'
  ];
const colors = [
    'Black',
    'White',
    'Green',
    'Blue',
    'Red',
    'Yellow',
    'Brown',
    'Custom Colors'
  ];
  const applications = [
    'Commercial Nurseries',
    'Polyhouse Farming',
    'Home Gardening',
    'Vegetable Cultivation',
    'Flower Production',
    'Organic Farming'
  ];
const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-linear-to-b from-white to-green-50"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
<button 
onClick={() => navigate(-1)}
className="group cursor-pointer inline-flex items-center gap-3 mb-5 rounded-full border border-green-500 px-8 py-4 font-semibold text-green-600 transition-all duration-300 hover:bg-green-500 hover:text-white ">
  <ArrowLeft
    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
  />
  Go Back
</button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="sticky top-8"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-4">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative w-full h-100 md:h-125 rounded-xl overflow-hidden bg-gray-100 mb-4"
              >
                <motion.img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].alt}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
              </motion.div>

              <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative h-20 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-4 ring-green-500 ring-offset-2'
                        : 'ring-2 ring-gray-200 hover:ring-green-300'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Product Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Product Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4"
              >
                Premium Quality Product
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Seedling Tray Details
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Professional-grade seedling trays designed for nurseries and commercial farming operations. 
                Our trays ensure uniform plant growth, facilitate easy root development, and simplify the 
                transplanting process for optimal agricultural productivity.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-green-50 rounded-xl p-6 border-2 border-green-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Available in all colors</strong> - Choose from a wide range of colors to suit your preference
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Multiple cavity options</strong> - Different cavity sizes and counts available to match your requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Durable, reusable & weather-resistant</strong> - Built to last through multiple growing seasons
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Features Grid */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Product Features
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <feature.icon className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Cavity Options */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Available Cavity Options
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap gap-3"
              >
                {cavityOptions.map((option, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white border-2 border-green-300 text-green-700 rounded-lg font-semibold text-sm shadow-sm hover:bg-green-50 transition-colors cursor-default"
                  >
                    {option}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            {/* Color Options */}
                        <div>
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-bold text-gray-900 mb-4"
                          >
                            Available Colors
                          </motion.h3>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex flex-wrap gap-3"
                          >
                            {colors.map((color, index) => (
                              <motion.span
                                key={index}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className="px-5 py-2 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-sm shadow-sm hover:border-green-400 hover:bg-green-50 transition-all cursor-default"
                              >
                                {color}
                              </motion.span>
                            ))}
                          </motion.div>
                        </div>

            {/* Applications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Applications
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-3"
              >
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 border border-gray-200"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{app}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
              onClick={()=>navigate('/contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=" btn-primary inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <AnimationButton>

                <Phone className="w-5 h-5" />
                Contact For Bulk Order
                </AnimationButton>
              </motion.button>
              
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}