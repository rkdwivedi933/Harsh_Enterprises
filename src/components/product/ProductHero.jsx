import React from 'react';
import { motion } from 'framer-motion';
import {  Sparkles } from 'lucide-react';

export default function ProductHero() {
  const features = [
    'Premium Quality',
    'Eco-Friendly',
    'Durable Design',
    'Made in India'
  ];

  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1600')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Floating blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-green-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 items-center">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">
                Premium Agricultural Products
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="heading-lg text-white mb-3"
            >
              Our Products
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-medium text-white mb-6"
            >
              Quality Manufacturing for Modern Agriculture
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white leading-relaxed mb-10"
            >
              Harsh Enterprises manufactures high-quality agricultural products
              including <strong>Seedling Trays</strong>, <strong>HIPS Rolls</strong>,
              and eco-friendly <strong>Cocopit</strong>—built to empower farmers
              and boost productivity.
            </motion.p>

            {/* Features */}
            <div className="flex flex-wrap gap-5 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 w-fit">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDE intentionally empty (future product image / video) */}
        </div>
      </div>
    </section>
  );
}
