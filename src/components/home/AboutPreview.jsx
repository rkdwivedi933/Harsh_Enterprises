import React, { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Factory, Leaf, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AnimationButton from "../layout/AnimationButton";
const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
    });
    return controls.stop;
  }, [value]);

  return <motion.span>{rounded}</motion.span>;
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function AboutPreview() {
  const navigate = useNavigate();
  const handleAbout = () =>{
    navigate('/about')
  }
  
  return (
    <section className="relative py-24  bg-linear-to-br from-white via-green-50 to-emerald-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h2 className="heading-xl text-gray-900 mb-4">
          About Our <span className="text-green-600">Company</span> 
        </h2>

        <p className="paragraph md:text-xl text-gray-600 leading-relaxed">
          We are a trusted agriculture manufacturing company dedicated to
          delivering innovative, durable, and eco-friendly products. 
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-4 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-700">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Trusted Manufacturing Partner in
            <span className="text-green-600"> Agriculture Solutions</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Harsh Enterprises is a leading agriculture manufacturing company
            committed to delivering durable, eco-friendly, and high-performance
            products for modern farming needs.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10">
            From Seedling Trays to HIPS Rolls and Cocopit products, every
            solution is engineered with precision, quality control, and
            sustainability at its core.
          </p>

          {/* FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Factory, title: "Advanced Manufacturing" },
              { icon: ShieldCheck, title: "Quality Assured" },
              { icon: Leaf, title: "Eco-Friendly Process" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-6 h-6 text-green-600" />
                <p className="font-medium text-gray-800">{item.title}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
          onClick={handleAbout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <AnimationButton>

            Know More
            </AnimationButton>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80"
              alt="Manufacturing"
              className="w-full h-115 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-green-700/30 to-transparent" />
          </div>

          {/* STATS CARD */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%]">
  <div className="grid grid-cols-3 gap-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
    {[
      { value: 10, suffix: "+", label: "Years" },
      { value: 500, suffix: "+", label: "Clients" },
      { value: 100, suffix: "%", label: "Quality" },
    ].map((stat, i) => (
      <div key={i} className="text-center">
        <p className="text-3xl font-bold text-green-600">
          <Counter value={stat.value} />
          {stat.suffix}
        </p>
        <p className="text-sm text-gray-600">{stat.label}</p>
      </div>
    ))}
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
}
