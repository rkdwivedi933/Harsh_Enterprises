import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function ContactHero() {
  const highlights = [
    'Quick Response',
    'Expert Guidance',
    'Custom Orders',
    'Long-Term Support'
  ];

  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-12 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1594771804886-a933bb2d609b?q=80&w=1182&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
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
          <div className="max-w-xl">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-full mb-8"
            >
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-semibold text-green-800">
                Get in Touch
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="heading-lg text-white/95 mb-3"
            >
              Contact Us
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-medium text-white/85 mb-6"
            >
              Let’s Grow Something Great Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/75 leading-relaxed mb-10"
            >
              Have questions or need customized agricultural solutions?
              Reach out to Harsh Enterprises today and our team will
              guide you with the right products and expert support.
            </motion.p>

            <div className="flex flex-wrap gap-5 bg-white/10 backdrop-blur-md rounded-xl px-6 py-4 w-fit">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full" />
                  <span className="text-white/80 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
