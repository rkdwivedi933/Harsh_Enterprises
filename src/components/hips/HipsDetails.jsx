import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Layers, Palette, Ruler, CheckCircle, Package, Phone,  ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimationButton from '../layout/AnimationButton';

export default function HipsDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop',
      alt: 'HIPS Roll industrial material'
    },
    {
      url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop',
      alt: 'HIPS rolls in different colors'
    },
    {
      url: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&h=600&fit=crop',
      alt: 'HIPS material close-up'
    },
    {
      url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      alt: 'Industrial HIPS roll application'
    }
  ];

  const technicalAdvantages = [
    {
      icon: Shield,
      title: 'Impact Resistant',
      description: 'Superior strength and resistance to physical impact and stress'
    },
    {
      icon: Zap,
      title: 'High Flexibility',
      description: 'Excellent flexibility for various forming and molding applications'
    },
    {
      icon: Layers,
      title: 'Smooth Finish',
      description: 'Premium surface quality with consistent texture throughout'
    },
    {
      icon: Package,
      title: 'Durable Material',
      description: 'Long-lasting performance in demanding industrial environments'
    },
    {
      icon: Ruler,
      title: 'Custom Dimensions',
      description: 'Available in various thickness and width specifications'
    },
    {
      icon: Palette,
      title: 'All Colors Available',
      description: 'Wide range of color options to match your requirements'
    }
  ];

  const specifications = [
    { label: 'Material Type', value: 'High Impact Polystyrene (HIPS)' },
    { label: 'Thickness Range', value: '0.3mm - 5mm (Custom)' },
    { label: 'Width Range', value: '500mm - 1500mm (Custom)' },
    { label: 'Surface Finish', value: 'Smooth, Matte, Glossy' },
    { label: 'Color Options', value: 'All Colors Available' },
    { label: 'Temperature Resistance', value: '-20°C to 70°C' }
  ];

  const applications = [
    'Seedling Tray Manufacturing',
    'Agricultural Equipment',
    'Packaging Solutions',
    'Industrial Components',
    'Protective Covers',
    'Farming Accessories',
    'Greenhouse Materials',
    'Storage Containers'
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
const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-linear-to-b from-gray-50 to-green-50"
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
          {/* Left Column - Product Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 order-2 lg:order-1"
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
                Industrial Grade Material
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                HIPS Roll
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-gray-600 font-medium mb-4"
              >
                High Impact Polystyrene
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Premium quality HIPS rolls engineered for superior performance in agriculture and industrial 
                applications. Our strong, flexible, and impact-resistant material delivers exceptional durability 
                and reliability for demanding manufacturing and fabrication needs.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300 shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Key Highlights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Available in all colors</strong> - Extensive color range to match your specifications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Custom thickness & width options</strong> - Tailored dimensions for your specific requirements
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                  <span className="text-gray-700">
                    <strong>Smooth finish and high durability</strong> - Premium quality surface with long-lasting performance
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* Technical Specifications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Technical Specifications
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
              >
                {specifications.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className={`flex justify-between items-center p-4 ${
                      index !== specifications.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-gray-900 font-semibold text-right">{spec.value}</span>
                  </motion.div>
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
                className="btn-primary inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <AnimationButton>

                <Phone className="w-5 h-5" />
                Contact For Bulk Order
                </AnimationButton>
              </motion.button>
             
            </motion.div>
          </motion.div>

          {/* Right Column - Images & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2 lg:sticky lg:top-8"
          >
            {/* Image Gallery */}
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

            {/* Technical Advantages Cards */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Technical Advantages
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technicalAdvantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
                    className="bg-white rounded-xl p-5 shadow-md border border-gray-100 transition-all"
                  >
                    <advantage.icon className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                    <p className="text-sm text-gray-600">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
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
                Applications & Usage
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-2 gap-3"
              >
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-gray-50 rounded-lg p-3 border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{app}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}