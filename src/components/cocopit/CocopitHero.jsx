import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CocopitHero() {
  return (
    <section
      className="relative min-h-svh flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661879628301-f3662508e1be?w=600&auto=format&fit=crop&q=60')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Floating blobs (smaller on mobile) */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-green-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-emerald-400/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-xl mt-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full mb-5"
          >
            <Sparkles className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-800">
              Cocopit
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4"
          >
            Cocopeat Manufacturer in India
          </motion.h1>

          {/* Subheading */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-base sm:text-lg md:text-xl text-white/85 font-medium mb-4"
          >
            Premium Cocopeat for Healthy & Sustainable Farming
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm sm:text-base text-white/75 leading-relaxed mb-6"
          >
            Our cocopit (cocopeat) is made from high-quality coconut husk,
            processed to ensure excellent water retention, aeration, and root
            development. It is an eco-friendly growing medium suitable for
            nurseries, greenhouses, terrace gardening, and commercial
            agriculture.
          </motion.p>

          {/* Highlights – MOBILE FRIENDLY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-4">
            {[
              "100% Natural & Eco-Friendly",
              "Excellent Water Retention",
              "Improves Root Aeration",
              "Ideal for All Crops",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full shrink-0" />
                <span className="text-white/85 text-sm font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
