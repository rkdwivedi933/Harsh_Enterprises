import React from "react";
import { motion } from "framer-motion";
import { Leaf, Factory, Sprout } from "lucide-react";

export default function CompanyStory() {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-green-50 to-emerald-100 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Story</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Growing Excellence. Empowering Modern Agriculture.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center"
            >
              {/* Icons */}
              <div className="flex items-center gap-4 mb-6">
                {[ 
                  { Icon: Factory, bg: "bg-green-100", color: "text-green-700" },
                  { Icon: Sprout, bg: "bg-amber-100", color: "text-amber-700" },
                  { Icon: Leaf, bg: "bg-emerald-100", color: "text-emerald-700" },
                ].map(({ Icon, bg, color }, i) => (
                  <div key={i} className={`p-3 rounded-xl ${bg}`}>
                    <Icon className={`w-6 h-6 ${color}`} />
                  </div>
                ))}
              </div>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                <span className="font-semibold text-green-800">
                  Harsh Enterprises
                </span>{" "}
                was founded with a clear mission — empowering farmers and
                agri-professionals with innovative, reliable, and high-quality
                agricultural solutions.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                From precision-engineered{" "}
                <span className="font-medium text-green-800">Seedling Trays</span>,
                durable{" "}
                <span className="font-medium text-green-800">HIPS Rolls</span>, to
                sustainable{" "}
                <span className="font-medium text-green-800">Cocopeat</span>,
                every product is designed to maximize growth and efficiency.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
                Combining modern manufacturing with deep agricultural knowledge,
                we deliver consistent quality, strength, and sustainability —
                because quality is our responsibility.
              </p>

             
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-70 sm:min-h-90 lg:min-h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=900&auto=format&fit=crop&q=60"
                alt="Manufacturing Facility"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

              {/* Overlay Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
                <Factory className="w-20 h-20 opacity-90 mb-4" />
                <p className="text-xl sm:text-2xl font-semibold mb-2">
                  Trusted Manufacturing
                </p>
                <p className="max-w-sm text-white/90 text-sm sm:text-base">
                  Precision-driven agriculture manufacturing backed by quality
                  and experience.
                </p>

                <div className="flex gap-6 mt-6 opacity-80">
                  <Sprout className="w-10 h-10" />
                  <Leaf className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
