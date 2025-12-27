import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sprout,
  Package,
  Leaf,
  CheckCircle,
  Info,
  Ruler,
  Layers,
  Droplet,
  Sun,
  Shield,
  Recycle,
  Award,
  ArrowRight,
  TrendingUp,
  Target,
} from "lucide-react";
import AnimationButton from "../layout/AnimationButton";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const products = {
    "seedling-tray": {
      id: "seedling-tray",
      name: "Seedling Tray",
      icon: Sprout,
      image:
        "https://images.unsplash.com/photo-1615671524827-c1fe3973b648?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2VlZGxpbmdzfGVufDB8fDB8fHww",
      tagline: "Professional Nursery Solution",
      gradient:
        "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "bg-green-50",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
      description:
        "Our premium seedling trays are engineered for professional nurseries and commercial farming operations. Manufactured using high-grade materials, these trays provide the perfect environment for seed germination and early plant development with superior drainage and air circulation.",
      useCases: [
        "Commercial nursery operations for mass propagation",
        "Vegetable seedling production for greenhouse farming",
        "Ornamental plant cultivation in controlled environments",
        "Research facilities requiring standardized growing conditions",
      ],
      specifications: [
        {
          icon: Layers,
          label: "Cell Configuration",
          value: "Multiple options (50-200 cells)",
        },
        {
          icon: Ruler,
          label: "Dimensions",
          value: "Standard nursery sizes available",
        },
        { icon: Shield, label: "Material", value: "High-grade polypropylene" },
        {
          icon: Droplet,
          label: "Drainage",
          value: "Optimal drainage holes per cell",
        },
        {
          icon: Sun,
          label: "UV Resistance",
          value: "UV stabilized for outdoor use",
        },
        {
          icon: Recycle,
          label: "Reusability",
          value: "5+ seasons with proper care",
        },
      ],
      benefits: [
        {
          icon: Award,
          title: "Premium Durability",
          description: "Withstands multiple growing cycles without degradation",
        },
        {
          icon: Leaf,
          title: "Eco-Friendly Design",
          description: "Recyclable materials and sustainable manufacturing",
        },
        {
          icon: Target,
          title: "Precision Engineering",
          description: "Uniform cell size ensures consistent plant growth",
        },
      ],
    },

    "hips-roll": {
      id: "hips-roll",
      name: "HIPS Roll",
      icon: Package,
      image:
        "data:image/jpeg;base64,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",
      tagline: "Versatile Industrial Material",
      gradient:
        "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "bg-green-50",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
      description:
        "High Impact Polystyrene (HIPS) rolls manufactured to exacting standards for agricultural and industrial applications.",
      useCases: [
        "Custom thermoformed agricultural packaging solutions",
        "Protective covers for seedling trays and plant containers",
        "Industrial component manufacturing for farming equipment",
        "Temperature-controlled storage and transport materials",
      ],
      specifications: [
        {
          icon: Layers,
          label: "Thickness Range",
          value: "0.3mm to 3mm available",
        },
        {
          icon: Ruler,
          label: "Roll Width",
          value: "Custom widths up to 1500mm",
        },
        {
          icon: Shield,
          label: "Material Grade",
          value: "Food-safe HIPS certified",
        },
        {
          icon: TrendingUp,
          label: "Impact Strength",
          value: "High impact resistance rating",
        },
        {
          icon: Sun,
          label: "Temperature Range",
          value: "-20°C to 70°C operational",
        },
        {
          icon: Recycle,
          label: "Recyclability",
          value: "100% recyclable material",
        },
      ],
      benefits: [
        {
          icon: Award,
          title: "Superior Strength",
          description: "High impact resistance for demanding applications",
        },
        {
          icon: Leaf,
          title: "Sustainable Choice",
          description: "Fully recyclable with minimal environmental impact",
        },
        {
          icon: Target,
          title: "Versatile Processing",
          description: "Easy thermoforming and fabrication capabilities",
        },
      ],
    },

    cocopit: {
      id: "cocopit",
      name: "Cocopit",
      icon: Leaf,
      image:
        "data:image/jpeg;base64,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",
      tagline: "Premium Growing Medium",
      gradient:
        "btn-primary inline-flex items-center justify-center w-full md:w-auto px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300",
      bgColor: "bg-green-50",
      iconColor: "text-green-700",
      borderColor: "border-green-200",
      description:
        "Premium quality coconut coir-based growing medium that provides optimal conditions for plant growth.",
      useCases: [
        "Hydroponic and soilless cultivation systems",
        "Greenhouse vegetable and flower production",
        "Container gardening and potting mix amendment",
        "Seed starting medium for commercial nurseries",
      ],
      specifications: [
        { icon: Layers, label: "EC Level", value: "Low EC (< 0.5 mS/cm)" },
        { icon: Ruler, label: "pH Range", value: "5.5 - 6.5" },
        {
          icon: Shield,
          label: "Composition",
          value: "100% natural coconut coir",
        },
        {
          icon: Droplet,
          label: "Water Retention",
          value: "8-10x its dry weight",
        },
        { icon: Sun, label: "Air Porosity", value: "30%" },
        {
          icon: Recycle,
          label: "Sustainability",
          value: "Renewable & biodegradable",
        },
      ],
      benefits: [
        {
          icon: Award,
          title: "Organic Excellence",
          description: "Certified organic with no chemical additives",
        },
        {
          icon: Leaf,
          title: "Environmentally Friendly",
          description: "Sustainable alternative to peat moss",
        },
        {
          icon: Target,
          title: "Optimal Growth",
          description: "Perfect water-air balance for healthy roots",
        },
      ],
    },
  };

  const [selectedProduct, setSelectedProduct] = useState(
    products["seedling-tray"]
  );

  const ProductSelector = () => (
    <div className="flex flex-wrap gap-3 mb-8">
      {Object.values(products).map((product) => {
        const IconComponent = product.icon;
        return (
          <motion.button
            key={product.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedProduct(product)}
            className={`flex cursor-pointer items-center gap-2 px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
              selectedProduct.id === product.id
                ? `bg-linear-to-r ${product.gradient} text-white shadow-lg`
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
            }`}
          >
            <AnimationButton>
              <IconComponent className="w-5 h-5" />
              {product.name}
            </AnimationButton>
          </motion.button>
        );
      })}
    </div>
  );

  const IconComponent = selectedProduct.icon;
const navigate = useNavigate();
const handleButton = () =>{
  navigate('/contact')
}
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Product <span className="text-green-600">Details</span>{" "}
          </h2>

          <p className="paragraph max-w-2xl">
            Explore comprehensive specifications and benefits of our premium
            agricultural products.
          </p>
        </motion.div>
        <ProductSelector />

        {/* Left Column - Image/Visual */}
        <div className="grid lg:grid-cols-2 gap-12 items-start ">
          {/* LEFT IMAGE — ONLY CHANGE HERE */}
          <motion.div
            key={selectedProduct.id + "-image"}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className=""
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 ${selectedProduct.borderColor}`}
            >
              <div className="h-105 overflow-hidden">
                <motion.img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-white/95 rounded-full shadow-lg">
                <Award className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-bold">Premium Quality</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <div>
            <motion.div
              key={selectedProduct.id + "-content"}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Product Header */}
              <div className="mb-8">
                <h3 className="heading-md text-gray-900 mb-2">
                  {selectedProduct.name}
                </h3>
                <p
                  className={`text-lg font-semibold ${selectedProduct.iconColor} mb-4`}
                >
                  {selectedProduct.tagline}
                </p>
                <p className="paragraph text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Use Cases */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Info className={`w-5 h-5 ${selectedProduct.iconColor}`} />
                  <h4 className="text-lg font-bold text-gray-900">
                    Agricultural Applications
                  </h4>
                </div>
                <ul className="space-y-3">
                  {selectedProduct.useCases.map((useCase, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle
                        className={`w-5 h-5 ${selectedProduct.iconColor} shrink-0 mt-0.5`}
                      />
                      <span className="text-gray-700">{useCase}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technical Specifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Technical Specifications
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedProduct.specifications.map((spec, index) => {
                    const SpecIcon = spec.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.08,
                        }}
                        whileHover={{ y: -4, scale: 1.02 }}
                        className={`${selectedProduct.bgColor} rounded-xl p-4 border ${selectedProduct.borderColor}`}
                      >
                        <div className="flex items-start gap-3">
                          <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                          >
                            <SpecIcon
                              className={`w-5 h-5 ${selectedProduct.iconColor} shrink-0 mt-1`}
                            />
                          </motion.div>
                          <div>
                            <p className="text-sm font-semibold text-gray-900 mb-1">
                              {spec.label}
                            </p>
                            <p className="text-xs text-gray-600">
                              {spec.value}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  Key Benefits
                </h4>
                <div className="space-y-4">
                  {selectedProduct.benefits.map((benefit, index) => {
                    const BenefitIcon = benefit.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md border border-gray-100"
                      >
                        <motion.div
                          whileHover={{ rotate: 15, scale: 1.1 }}
                          className={`${selectedProduct.bgColor} p-3 rounded-lg`}
                        >
                          <BenefitIcon
                            className={`w-6 h-6 ${selectedProduct.iconColor}`}
                          />
                        </motion.div>
                        <div>
                          <h5 className="font-bold text-gray-900 mb-1">
                            {benefit.title}
                          </h5>
                          <p className="text-sm text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-8"
              >
                <motion.button
                onClick={handleButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`btn-primary cursor-pointer inline-flex items-center justify-center w-full md:w-auto px-6 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300`}
                >
                  <AnimationButton>Request a Quote</AnimationButton>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
