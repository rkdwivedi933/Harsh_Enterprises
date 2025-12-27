import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wind, Sprout, Recycle, Heart, CheckCircle, Package, Phone, Send, ArrowRight,  ArrowLeft, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimationButton from '../layout/AnimationButton';

export default function CocopitDetails() {
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
      alt: 'Cocopit blocks'
    },
    {
      url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop',
      alt: 'Cocopit packaging'
    },
    {
      url: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop',
      alt: 'Cocopit in use with plants'
    },
    {
      url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop',
      alt: 'Cocopit for nursery applications'
    }
  ];

  const benefits = [
    {
      icon: Droplets,
      title: 'Superior Water Retention',
      description: 'Holds up to 8-10 times its weight in water, ensuring consistent moisture availability'
    },
    {
      icon: Wind,
      title: 'Enhanced Soil Aeration',
      description: 'Creates optimal air pockets for healthy root development and growth'
    },
    {
      icon: Leaf,
      title: 'Rich in Nutrients',
      description: 'Contains natural nutrients that promote vigorous plant growth'
    },
    {
      icon: Recycle,
      title: '100% Eco-Friendly',
      description: 'Biodegradable and sustainable alternative to traditional growing media'
    },
    {
      icon: Sprout,
      title: 'pH Balanced',
      description: 'Naturally balanced pH levels ideal for most plant varieties'
    },
    {
      icon: Heart,
      title: 'Disease Resistant',
      description: 'Natural properties help prevent soil-borne diseases and pests'
    }
  ];

  const applications = [
    {
      title: 'Vegetable Cultivation',
      description: 'Perfect for growing tomatoes, peppers, leafy greens and more'
    },
    {
      title: 'Flower Production',
      description: 'Ideal for roses, marigolds, and ornamental plants'
    },
    {
      title: 'Nursery Operations',
      description: 'Excellent medium for seedling propagation and young plants'
    },
    {
      title: 'Potting Mix',
      description: 'Can be mixed with soil for enhanced container gardening'
    },
    {
      title: 'Hydroponics',
      description: 'Suitable for soilless cultivation systems'
    },
    {
      title: 'Organic Farming',
      description: 'Certified organic growing medium for sustainable agriculture'
    }
  ];

  const sustainabilityPoints = [
    'Made from renewable coconut husk waste',
    'Reduces environmental impact of peat mining',
    'Completely biodegradable and compostable',
    'Chemical-free processing methods',
    'Supports circular economy in agriculture',
    'Carbon-negative production process'
  ];

  const specifications = [
    { label: 'Material', value: 'Natural Coconut Husk' },
    { label: 'Form', value: 'Compressed Blocks, Loose' },
    { label: 'pH Level', value: '5.5 - 6.8' },
    { label: 'EC Level', value: '< 0.5 mS/cm' },
    { label: 'Water Retention', value: '8-10x Weight' },
    { label: 'Expansion Ratio', value: '5:1 to 7:1' }
  ];
const navigate = useNavigate();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 bg-linear-to-b from-amber-50 via-green-50 to-emerald-50"
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
          {/* Left Column - Images */}
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
                className="relative w-full h-100 md:h-125 rounded-xl overflow-hidden bg-linear-to-br from-amber-100 to-green-100 mb-4"
              >
                <motion.img
                  src={images[selectedImage].url}
                  alt={images[selectedImage].alt}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover cursor-zoom-in"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg">
                    <Leaf className="w-4 h-4" />
                    <span className="text-sm font-semibold">100% Natural</span>
                  </div>
                </div>
              </motion.div>

              <div className="grid grid-cols-4 gap-3">
                {images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05, y: -3 }}
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

            {/* Sustainability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-linear-to-r from-green-600 to-emerald-600 rounded-xl p-6 text-white shadow-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <Recycle className="w-8 h-8" />
                <h4 className="text-xl font-bold">Eco-Friendly Choice</h4>
              </div>
              <p className="text-green-50 text-sm leading-relaxed">
                By choosing Cocopit, you're supporting sustainable agriculture and reducing environmental impact. 
                Made from renewable coconut waste, it's nature's perfect growing medium.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
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
                className="flex items-center gap-3 mb-4"
              >
                <div className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  Natural Growing Medium
                </div>
               
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
              >
                Cocopit
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 leading-relaxed mb-6"
              >
                Premium quality cocopit made from natural coconut husk, designed to revolutionize your growing 
                experience. This eco-friendly growing medium improves soil aeration and water retention, making 
                it the ideal choice for organic farming, nurseries, and sustainable agriculture practices.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-linear-to-r from-amber-50 to-green-50 border-2 border-green-200 rounded-xl p-6"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Perfect For
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Vegetables', 'Flowers', 'Nurseries', 'Organic Farming', 'Hydroponics'].map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white text-green-700 rounded-full text-sm font-medium border border-green-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Benefits Grid */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Benefits for Soil & Plants
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(34, 197, 94, 0.15)' }}
                    className="bg-white rounded-xl p-5 shadow-md border border-gray-100 transition-all"
                  >
                    <benefit.icon className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Product Specifications
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

            {/* Applications */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Applications
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {applications.map((app, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="bg-linear-to-br from-white to-green-50 rounded-lg p-4 border-2 border-green-100 hover:border-green-300 transition-all"
                  >
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <ArrowRight className="w-5 h-5 text-green-600" />
                      {app.title}
                    </h4>
                    <p className="text-sm text-gray-600">{app.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sustainability Highlights */}
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2"
              >
                <Recycle className="w-7 h-7 text-green-600" />
                Sustainability Highlights
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200"
              >
                <ul className="space-y-3">
                  {sustainabilityPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{point}</span>
                    </motion.li>
                  ))}
                </ul>
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
        </div>
      </div>
    </motion.section>
  );
}