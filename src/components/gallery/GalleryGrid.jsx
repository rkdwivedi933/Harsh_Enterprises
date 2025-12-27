import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Factory, Package, Box, Layers } from "lucide-react";

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filters = [
    { id: "All", label: "All", icon: Layers },
    { id: "Factory", label: "Factory", icon: Factory },
    { id: "Products", label: "Products", icon: Box },
    { id: "Packaging", label: "Packaging", icon: Package },
  ];

  const galleryItems = [
    {
      id: 1,
      category: "Factory",
      title: "Manufacturing Plant",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      alt: "Modern manufacturing facility",
    },
    {
      id: 2,
      category: "Products",
      title: "Seedling Trays",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=80",
      alt: "High-quality seedling trays",
    },
    {
      id: 3,
      category: "Products",
      title: "HIPS Rolls",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      alt: "Industrial HIPS plastic rolls",
    },
    {
      id: 4,
      category: "Packaging",
      title: "Cocopit Packaging",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
      alt: "Premium cocopit packaging",
    },
    {
      id: 5,
      category: "Factory",
      title: "Production Line",
      image:
        "https://images.unsplash.com/photo-1565515636369-57f6e98d7019?w=800&q=80",
      alt: "Automated production line",
    },
    {
      id: 6,
      category: "Products",
      title: "Agricultural Trays",
      image:
        "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&q=80",
      alt: "Various agricultural trays",
    },
    {
      id: 7,
      category: "Packaging",
      title: "Product Packaging",
      image:
        "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80",
      alt: "Eco-friendly packaging solutions",
    },
    {
      id: 8,
      category: "Factory",
      title: "Quality Control",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
      alt: "Quality control department",
    },
    {
      id: 9,
      category: "Products",
      title: "Plastic Rolls",
      image:
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
      alt: "Premium plastic rolls",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-white via-green-50 to-emerald-100"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="heading-xl text-gray-900 mb-4">
            Our Work in <span className="text-green-600">Action</span>{" "}
          </h2>

          <p className="paragraph max-w-2xl">
            Explore our state-of-the-art manufacturing facility, premium
            products, and sustainable packaging solutions.
          </p>
        </motion.div>

        <div className="mb-12 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;

              return (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 cursor-pointer rounded-full font-medium text-sm
                    transition-all duration-300 border-2
                    ${
                      isActive
                        ? "bg-emerald-500 text-white border-emerald-500 "
                        : "bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50"
                    }
                  `}
                >
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-emerald-600"
                    }`}
                  />
                  {filter.label}
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -12 }}
                onClick={() => setSelectedImage(item)}
                className={`
                  relative group cursor-pointer rounded-2xl overflow-hidden
                  bg-white shadow-lg hover:shadow-2xl transition-all duration-300
                  ${index % 7 === 0 ? "md:col-span-2 md:row-span-2" : ""}
                `}
              >
                <div className="relative aspect-square overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent"
                  >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block px-3 py-1 bg-emerald-500/90 text-white text-xs font-semibold rounded-full mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold text-lg">
                        {item.title}
                      </h3>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    boxShadow: "0 0 40px rgba(16, 185, 129, 0.4)",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.alt}
                className="w-full h-full object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/90 to-transparent p-6">
                <span className="inline-block px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-2xl">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-200 text-sm mt-1">
                  {selectedImage.alt}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default GalleryGrid;
