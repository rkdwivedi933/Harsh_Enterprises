import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HipsHero() {
  const highlights = [
    'Trusted Manufacturing',
    'Years of Industry Experience',
    'Farmer-Focused Solutions',
    'Pan India Presence'
  ];

  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661879628301-f3662508e1be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxhZ3JpY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D')"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

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
      Hips Roll
    </span>
  </motion.div>

  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    className="heading-lg text-white/95 mb-3"
  >
    Strength You Can Rely On
  </motion.h1>

  {/* Subheading */}
  <motion.h2
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    className="text-xl md:text-2xl font-medium text-white/85 mb-6"
  >
    Premium HIPS Rolls for Durable & Versatile Applications
  </motion.h2>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="text-white/75 leading-relaxed mb-10"
  >
    Our HIPS (High Impact Polystyrene) rolls are manufactured using
    high-quality raw materials to ensure excellent strength, flexibility,
    and surface finish. Available in various thicknesses and colors,
    these rolls are widely used in packaging, thermoforming, trays,
    and industrial applications.
  </motion.p>

  {/* Highlights */}
  <div className="flex flex-wrap gap-5 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 w-fit">
    {[
      "Available in All Colors",
      "Smooth Surface Finish",
      "High Impact Strength",
      "Custom Thickness Options"
    ].map((item) => (
      <div key={item} className="flex items-center gap-2">
        <span className="w-2 h-2 bg-green-400 rounded-full" />
        <span className="text-white/80 text-sm font-medium">
          {item}
        </span>
      </div>
    ))}
  </div>

</div>



          {/* RIGHT SIDE future image / factory / team */}
        </div>
      </div>
    </section>
  );
}
