import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Wrench,
  Factory,
  Tractor,
  Sprout,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import { useMotionValue, useTransform, animate } from "framer-motion";
import AnimationButton from "../layout/AnimationButton";
import { useNavigate } from "react-router-dom";

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  React.useEffect(() => {
    animate(count, value, {
      duration: 1.6,
      ease: "easeOut",
    });
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const CustomOrdersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredIndustry, setHoveredIndustry] = useState(null);

  const customizationOptions = [
    {
      icon: Wrench,
      title: "Tailored Specifications",
      description:
        "Custom dimensions, materials, and features to match your exact requirements",
    },
    {
      icon: PackageCheck,
      title: "Bulk Production",
      description:
        "Large-scale manufacturing with consistent quality and competitive pricing",
    },
    {
      icon: Factory,
      title: "OEM Solutions",
      description:
        "Private labeling and white-label manufacturing services available",
    },
  ];

  const industries = [
    { icon: Tractor, name: "Large Farms & Estates" },
    { icon: Sprout, name: "Agricultural Cooperatives" },
    { icon: Factory, name: "Agri-Equipment Dealers" },
    { icon: PackageCheck, name: "Export & Distribution" },
  ];
const navigate = useNavigate();
const handleButton = () =>{
  navigate('/contact')
}
  return ( 
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center max-w-3xl mx-auto"
            >
              <h2 className="heading-xl text-gray-900 mb-4">
                Explore Our <span className="text-green-600">Manufacturing</span>
              </h2>

              <p className="paragraph text-gray-600">
                Premium agricultural manufacturing solutions crafted with
                quality, innovation, and sustainability.
              </p>
            </motion.div>
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-14 items-center"
        >
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-10">
            

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <h2 className="text-2xl  font-semibold text-gray-900 leading-tight">
                Custom Orders & <span className="bg-linear-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                  Bulk Manufacturing
                </span>
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Transform your agricultural operations with precision-engineered
                products built to your specifications. From single custom units
                to large-scale production runs, we deliver excellence at every
                scale.
              </p>
            </motion.div>

            {/* ================= OPTIONS ================= */}
            <div className="space-y-4">
              {customizationOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-4 p-5 rounded-xl bg-white border border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all"
                  >
                    <div className="p-3 rounded-lg bg-emerald-100">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg mb-1">
                        {option.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {option.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ================= CTA ================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
              onClick={handleButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary cursor-pointer inline-flex items-center justify-center w-full md:w-auto px-6 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
              >
                <AnimationButton>

                Request Custom Quote
                </AnimationButton>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <p className="text-gray-500 text-sm mt-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                Response within 24 hours • Free consultation
              </p>
            </motion.div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl bg-white border border-emerald-100 shadow-xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    Industries We Serve
                  </h3>
                  <p className="text-gray-600">
                    Trusted by organizations across agriculture
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {industries.map((industry, index) => {
                    const Icon = industry.icon;
                    const isHovered = hoveredIndustry === index;

                    return (
                      <motion.div
                        key={index}
                        whileHover={{ y: -6 }}
                        onHoverStart={() => setHoveredIndustry(index)}
                        onHoverEnd={() => setHoveredIndustry(null)}
                        className="p-6 rounded-xl bg-green-50 border border-emerald-100 hover:border-emerald-300 transition-all cursor-pointer"
                      >
                        <Icon className="w-8 h-8 text-emerald-600 mb-3" />
                        <h4 className="text-gray-900 font-semibold text-sm">
                          {industry.name}
                        </h4>

                        {isHovered && (
                          <motion.div
                            className="absolute inset-0 rounded-xl bg-emerald-200/20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                          />
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* ================= STATS ================= */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-emerald-100">
                  {[
                    { value: 500, suffix: "+", label: "Custom Orders" },
                    { value: 50, suffix: "+", label: "Bulk Projects" },
                    { value: 98, suffix: "%", label: "Satisfaction" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">
                        <Counter value={stat.value} />
                        {stat.suffix}
                      </div>
                      <p className="text-xs text-gray-500">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomOrdersSection;
