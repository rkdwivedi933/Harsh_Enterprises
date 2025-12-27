import React from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Package,
  Leaf,
  ArrowRight,
  Star,
  CheckCircle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import path from "path";
import AnimationButton from "../layout/AnimationButton";

export default function ProductGrid() {
  const navigate = useNavigate();
  const products = [
    {
      id: "seedling-tray",
      name: "Seedling Tray",
      icon: Sprout,
      path: '/tray-listing',
      image:
        "data:image/jpeg;base64,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GU33+Y7SbWqNQoUlK6qjB3t0VNRBvbn1BuP87BCzPN6hxDaG0KrEBR0ANgT+onqeszdDEkIlewQN/wDUFwLPp7jr7arTHUMNRrg1DTAdbagGNiDsGG/cWIPtLXiZ9k9B0rTRFtaylbltrW9RJb6mB5TKXapufQykU3Qr8X5QwPK32YDfred7+zjI/u+GVm+JgAP5R/uf8Tmn2aZG1asENmpBlqBhqAtp9VgwBF9hYjkDtO8KoGwgViIgIiICUlZSAiIgIiIFYiICIiB5dAQQQCDyDvce80Lxd9mWGxTeai6X6qDYN8ux/wCbTf4gfMvjvKqmGNOiaZVUvYWtsSCduL7f05lrLsWaVCpUZSF9CgG4Jbcj3sFDfvPo/PMqTE0ijAauVYgGzDj6dx1E4J4nwRqa6BTyK2o7H/TqaSRqpt+V7E3Rre14GHOGpYzchqVRRcaWBDAcj+FgLntses8Z4gpYZKaXC62L9zsmksf/AN/vLuXZbVoBnrW1JTYotjv03N9xudh0vI+X5mzWNU+ZTJsyNY7dlFrqd9iOsov+Haw0VBe9MJqY9mBAW46E3I251CUrBMXYI5DrfTcbMvxEA9+TaZTEroSpRpFQxtpsVG6sGBXpvb+0w+SYXEVMQpZdB1AlrBR6TqJ0qLbWvsP7yDIjCHC0HYt6y6Uy4A9KHVrIA/MLAX66j3kPw/Xqawx1NTdzTJ5Fyt/mGFwb9f3nnEZlqY+hfLb8rHoTwbbA/wDab19nHg+lUr+aF/CCo197kMLhTud73H0PcQOj+BcoGHwykj1uASfbp/v9ZscoottKwEREBERASkrECkSsQKRKxAREQERKQKxKSsBMeMloeca5pqah/Md7bWuoOwPuJkIga54k8H0MWrf+m7fmXgnuw6/PmcgxfgFsDXRqoLIHG++ki+5B4vbobH2M+gp4r0VdSrqGU7FWAII7EHmB8mYnF/iMKm7ayb2Bv0Pvb24m00sQ4RauxenTFRxe7aNWjWy9V3UNfuO86L4n+zKkxNXCIof9DH/psePkf3E5X4rwdZK4/DdWCIrKykEFF0Xsehte/BvKLeAy1tYqUn9LkpYgH4l9aMDtpKk/S8+gPA+UfdsGiWszeo99+AfkAJzT7KMietVLVR+GulittiVBCD+5+k7XIEREBERAREQEpKxApErECkSsQEREAZSVMpASspKwEREBERATGZ7kVDFporJf9LDZlPdT/jiZOIGM8P5MmEoikm/VmtbUe9unymTiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIH/9k=",
      tagline: "Perfect Start for Every Plant",
      description:
        "Premium quality seedling trays designed for optimal plant growth with excellent drainage and durability.",
      features: ["Multi-cell design", "UV resistant", "Reusable"],
      tags: ["Nursery", "Professional"],
      gradient: "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
    },
    {
      id: "hips-roll",
      name: "HIPS Roll",
      icon: Package,
      path: "/hips-listing",
      image:
        "data:image/jpeg;base64,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",
      tagline: "Versatile Industrial Solution",
      description:
        "High Impact Polystyrene rolls manufactured for agricultural and industrial thermoforming applications.",
      features: ["High impact strength", "Easy processing", "Cost-effective"],
      tags: ["Industrial", "Durable"],
      gradient: "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
    },
    {
      id: "cocopit",
      name: "Cocopit",
      icon: Leaf,
      path: "/cocopit-listing",
      image:
        "data:image/jpeg;base64,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",
      tagline: "Sustainable Growing Medium",
      description:
        "Eco-friendly coconut coir growing medium offering superior water retention and aeration.",
      features: ["100% organic", "Excellent retention", "Eco-friendly"],
      tags: ["Organic", "Sustainable"],
      gradient: "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section className="py-20 px-4 bg-linear-to-br from-white via-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="heading-xl text-gray-900 mb-4">Explore Our <span className="text-green-600">Products</span> </h2>

          <p className="paragraph max-w-2xl">
            Premium agricultural manufacturing solutions crafted with quality,
            innovation, and sustainability.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className={`h-full bg-white rounded-2xl border-2 ${product.borderColor} shadow-lg overflow-hidden flex flex-col`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />

              
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Tags */}
                <div className="flex gap-2 mb-3 flex-wrap">
                  {product.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${product.bgColor} ${product.iconColor}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                <p className="text-sm font-semibold text-gray-500 mb-3">
                  {product.tagline}
                </p>

                <p className="text-sm text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className={`w-4 h-4 ${product.iconColor}`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <button
                onClick={() => navigate(product.path)}
                  className={`mt-auto w-full cursor-pointer py-3 bg-linear-to-r ${product.gradient}  text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition`}
                >
                  <AnimationButton>

                  View Details
                  </AnimationButton>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="paragraph mb-6">
            Need help selecting the right product?
          </p>
          <button
          onClick={() => navigate('/contact')}
           className="px-8 py-4 cursor-pointer border-2 border-green-600 rounded-xl font-semibold text-green-700 hover:bg-green-50 transition inline-flex items-center gap-2">
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
