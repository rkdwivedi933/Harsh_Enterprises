import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Cog,
  Warehouse,
  ShieldCheck,
  Zap,
  Users,
  TrendingUp,
  Award,
} from "lucide-react";

export default function Infrastructure() {
  const images = [
    "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1518931169559-527a99b4074d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  ];
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const imageVariant = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlights = [
    {
      icon: Factory,
      title: "Modern Manufacturing Plant",
      desc: "State-of-the-art facility with advanced production lines for Seedling Trays, HIPS Rolls & Cocopeat.",
      stat: "50K+ sq ft",
      color: "from-green-500 to-emerald-600",
      bg: "bg-green-50",
      iconColor: "text-green-700",
    },
    {
      icon: Cog,
      title: "Advanced Machinery",
      desc: "Automated machinery ensuring precision, consistency, and large-scale output.",
      stat: "24/7 Ops",
      color: "from-blue-500 to-cyan-600",
      bg: "bg-blue-50",
      iconColor: "text-blue-700",
    },
    {
      icon: Warehouse,
      title: "Storage Facilities",
      desc: "Climate-controlled warehouses ensuring safe storage & fast distribution.",
      stat: "10K+ Units",
      color: "from-amber-500 to-orange-600",
      bg: "bg-amber-50",
      iconColor: "text-amber-700",
    },
    {
      icon: ShieldCheck,
      title: "Quality Control",
      desc: "Multi-stage quality testing following international standards.",
      stat: "100% Tested",
      color: "from-purple-500 to-indigo-600",
      bg: "bg-purple-50",
      iconColor: "text-purple-700",
    },
  ];

  const features = [
    { icon: Zap, label: "Energy Efficient" },
    { icon: Users, label: "Skilled Workforce" },
    { icon: TrendingUp, label: "Scalable Production" },
    { icon: Award, label: "ISO Certified" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Our <span className="text-green-600">Infrastructure</span>
          </h2>
          <p className="text-gray-600 paragraph">
            Built for Excellence, Engineered for Growth
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid  lg:grid-cols-2 gap-10 mb-14">
          {/* Left Visual */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6"
          >
            {images.map((img, i) => (
              <motion.img
                key={i}
                variants={imageVariant}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
                src={img}
                alt={`Manufacturing Facility ${i + 1}`}
                className="h-60 sm:h-72 lg:h-80 object-contain rounded-2xl shadow-xl"
              />
            ))}
          </motion.div>

          {/* Right Content */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Manufacturing Excellence
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our facility blends automation and skilled manpower to ensure
                consistency, sustainability, and superior product quality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <Icon className="w-5 h-5 text-green-700" />
                    <span className="text-sm font-medium text-gray-800">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className={`h-2 bg-linear-to-r ${item.color}`} />
                <div className="p-6">
                  <div
                    className={`${item.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <Icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <span className="text-xs font-bold text-green-700">
                    {item.stat}
                  </span>
                  <h4 className="text-lg font-semibold mt-2 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 bg-linear-to-r from-green-600 to-emerald-700 rounded-2xl p-8 text-center text-white">
          <ShieldCheck className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Commitment to Quality</h3>
          <p className="text-sm sm:text-base max-w-xl mx-auto mb-6">
            Our infrastructure is built to maintain the highest standards of
            quality, safety, and sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
