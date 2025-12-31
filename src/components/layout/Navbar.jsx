import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf, Phone } from "lucide-react";
import AnimationButton from "./AnimationButton";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Gallery", href: "/gallery" },
  ];

  const navigate = useNavigate();

  const handleContactButton = () => {
    navigate("/contact");
  };

  const handleLogoButton = () => {
    navigate("/");
  };

  /* Scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll on mobile menu */
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-green-900 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* ================= LOGO ================= */}
            <motion.div
              onClick={handleLogoButton}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={logo}
                alt="Harsh Enterprises Logo"
                className="w-10 h-10 rounded-full object-contain"
              />

              <div>
                <h1 className="text-lg font-bold text-white">
                  Harsh Enterprises
                </h1>
                <p className="text-xs text-white">Agriculture Solutions</p>
              </div>
            </motion.div>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <AnimationButton key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className="relative px-2 py-1 text-base font-medium text-white"
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        {isActive && (
                          <motion.span
                            layoutId="activeLink"
                            className="absolute left-0 right-0 -bottom-1 h-0.5 bg-white"
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </AnimationButton>
              ))}
            </div>

            {/* ================= DESKTOP CTA ================= */}
            <div className="hidden lg:block">
              <motion.button
                onClick={handleContactButton}
                className="btn-primary cursor-pointer inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimationButton>
                  <span className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </span>
                </AnimationButton>
              </motion.button>
            </div>

            {/* ================= MOBILE TOGGLE ================= */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Drawer */}
            <motion.div
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <div>
                  <h1 className="text-gray-700 font-bold">
                    Harsh Enterprises
                  </h1>
                  <p className="text-xs text-gray-700 font-semibold">
                    Agriculture Solutions
                  </p>
                </div>

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  ✕
                </button>
              </div>

              {/* Links */}
              <motion.div
                className="p-6 space-y-2"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.08 },
                  },
                }}
              >
                {navLinks.map((link) => (
                  <motion.div
                    key={link.name}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <NavLink
                      to={link.href}
                      onClick={() => {
                        setActiveLink(link.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-base font-medium transition ${
                          isActive
                            ? "bg-green-100 text-green-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <div className="absolute bottom-6 left-0 right-0 px-6">
                <motion.button
                  onClick={handleContactButton}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4
                    bg-green-600 text-white font-semibold rounded-xl
                    shadow-lg hover:bg-green-700 transition"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
