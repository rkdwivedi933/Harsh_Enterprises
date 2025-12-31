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
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
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
    { name: "Seedling Listing", href: "/tray-listing" },
    { name: "Cocopit Listing", href: "/hips-listing" },
    { name: "HIPS Listing", href: "/cocopit-listing" },

  ];

  const socialLinks = [
    { icon: Facebook, href: "/facebook" },
    { icon: Instagram, href: "/instagram" },
    { icon: Linkedin, href: "/linkedin" },
    { icon: Twitter, href: "/twitter" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 },
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
      <motion.footer
        ref={footerRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative bg-linear-to-br from-green-900 via-green-800 to-emerald-900 text-white overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={Logo}
                  alt="Harsh Enterprises Logo"
                  className="w-10 h-10 rounded-full"
                />
                <h3 className="text-2xl font-bold">Harsh Enterprises</h3>
              </div>

              <p className="text-gray-300 text-sm">
                Premium agriculture solutions for sustainable farming.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 mt-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={i}
                      to={social.href}
                      className="p-2 bg-green-800/50 rounded-full hover:bg-green-700 transition"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4 text-amber-300">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4 text-amber-300">
                Products
              </h4>
              <ul className="space-y-2">
                {products.map((product, i) => (
                  <li key={i}>
                    <Link
                      to={product.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-white"
                    >
                      <Leaf className="w-4 h-4 text-green-400" />
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold mb-4 text-amber-300">
                Contact
              </h4>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex gap-2">
                  <MapPin className="w-5 h-5 text-green-400" />
                  Satna, MP, India
                </div>
                <div className="flex gap-2">
                  <Phone className="w-5 h-5 text-green-400" />
                  +91 98765 43210
                </div>
                <div className="flex gap-2">
                  <Mail className="w-5 h-5 text-green-400" />
                  info@harshenterprises.com
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-300">
            <div>© {new Date().getFullYear()} <span className="text-amber-300">Harsh Enterprises</span> </div>
            <div className="flex gap-4">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms">Terms</Link>
              <Link to="/rules">Rules</Link>
            </div>
            <div>Powered by Rupesh Dwivedi</div>
          </div>
        </div>
      </motion.footer>

      {/* Scroll To Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-green-600 text-white rounded-full"
        animate={{ opacity: showScrollTop ? 1 : 0 }}
      >
        <ArrowUp />
      </motion.button>
    </>
  );
};

export default FooterComponent;
