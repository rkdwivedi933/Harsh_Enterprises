import React, { useEffect, useRef, useState } from "react";
import Logo from "../../assets/logo/logo.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const FooterComponent = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },

    { name: "Contact", href: "/contact" },
  ];

  const products = [
    { name: "Seedling Tray", href: "/seedling-tray" },
    { name: "HIPS Roll", href: "/hips-roll" },
    { name: "Cocopit", href: "/cocopit" },
    { name: "Seedling Tray Listing", href: "/tray-listing" },
    { name: "HIPS Roll Listing", href: "/hips-listing" },
    { name: "Cocopit Listing", href: "/cocopit-listing" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
    { icon: Twitter, href: "#", color: "hover:text-sky-400" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      {/* Demo Content */}
      <div className="min-h-full bg-linear-to-br from-green-50 to-emerald-50 flex items-center justify-center">
        <div className="text-center px-4"></div>
      </div>

      {/* Footer */}
      <motion.footer
        ref={footerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative bg-linear-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1: Company Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-10 h-10"
                >
                  {/* Logo Image */}
                  <img
                    src={Logo} // 🔁 apna actual logo path yahan do
                    alt="Harsh Enterprises Logo"
                    className="w-full h-full object-contain rounded-full"
                  />

                  {/* Glow Ring Animation */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(74, 222, 128, 0.4)",
                        "0 0 0 18px rgba(74, 222, 128, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-full pointer-events-none"
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Harsh Enterprises
                  </h3>
                  <p className="text-white text-sm">Agriculture Solutions</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                Leading manufacturer of premium agriculture products, committed
                to sustainable farming solutions.
              </p>

              <motion.div className="inline-block" whileHover={{ scale: 1.05 }}>
                <div className="bg-linear-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-lg">
                  <p className="text-amber-300 font-semibold text-sm">
                    Growing Sustainable Agriculture
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4 mt-2">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 bg-green-800/50 rounded-full ${social.color} transition-colors relative`}
                        whileHover={{ y: -5, scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-amber-300">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="group relative text-gray-300 hover:text-white transition-colors inline-block"
                    >
                      <span className="relative">
                        {link.name}
                        <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Products */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-amber-300">
                Our Products
              </h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={product.href}
                      className="group relative text-gray-300 hover:text-white transition-colors inline-block"
                    >
                      <span className="flex items-center space-x-2">
                        <Leaf className="w-4 h-4 text-green-400" />
                        <span className="relative">
                          {product.name}
                          <motion.span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-6 text-amber-300">
                Contact Us
              </h4>
              <ul className="space-y-4">
                <motion.li
                  className="flex items-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-gray-300">
                    ward no. 10, near, Satna Rd, bamuraha,
                    <br />
                    Satna, Madhya Pradesh 485005, India
                  </span>
                </motion.li>

                <motion.li
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-5 h-5 text-green-400 shrink-0" />
                  <a
                    href="tel:+919893441392"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    +91 98765 43210
                    <br />
                    +91 9752434983
                  </a>
                </motion.li>

                <motion.li
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-5 h-5 text-green-400 shrink-0" />
                  <a
                    href="mailto:info@harshenterprises.com"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    info@harshenterprises.com
                  </a>
                </motion.li>

                <motion.li>
                  <motion.a
                    href="https://wa.me/919893441392"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg transition-colors mt-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-medium">WhatsApp Us</span>
                  </motion.a>
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="border-t border-green-700/50 my-8"
          />

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-300"
          >
            {/* Left */}
            <div className="text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="text-green-300 font-medium">
                Harsh Enterprises
              </span>
              . All rights reserved.
            </div>

            {/* Center */}
            <div className="flex items-center gap-3 text-xs md:text-sm">
              <a
                href="/privacy-policy"
                className="hover:text-green-300 transition"
              >
                Privacy Policy
              </a>
              <span className="opacity-50">•</span>
              <a href="/terms" className="hover:text-green-300 transition">
                Terms of Service
              </a>
              <span className="opacity-50">•</span>
              <a href="/rules" className="hover:text-green-300 transition">
                Rules & Regulations
              </a>
            </div>

            {/* Right */}
            <div className="text-center md:text-right">
              Designed & Developed By{" "}
              <span className="text-green-300 font-medium">Rupesh Dwivedi</span>
            </div>
          </motion.div>

          {/* Made with love tag */}
          <motion.div variants={itemVariants} className="text-center mt-8">
            <p className="text-gray-500 text-xs">
              Made with <span className="text-red-400"></span> for sustainable
              agriculture
            </p>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-green-600 via-amber-400 to-green-600" />
      </motion.footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
        }}
        onClick={scrollToTop}
        className="fixed bottom-8 cursor-pointer   right-8 p-3 bg-linear-to-br from-green-600 to-emerald-600 text-white rounded-full shadow-lg z-50 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-6 h-6" />
        <motion.div
          className="absolute inset-0 rounded-full bg-amber-400/30"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>
    </>
  );
};

export default FooterComponent;
