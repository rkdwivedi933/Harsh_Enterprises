import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationButton = ({ children, className = "" }) => {
  const controls = useAnimationControls();

  const handleHoverStart = () => {
    controls.start({
      y: ["0%", "-120%", "120%", "0%"],
      transition: {
        duration: 0.6,
        times: [0, 0.4, 0.401, 1],
        ease: "easeInOut",
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      y: ["0%", "100%", "-100%", "0%"],
      transition: {
        duration: 0.6,
        times: [0, 0.4, 0.401, 1],
        ease: "easeInOut",
      },
    });
  };

  return (
    <motion.span
      className={`relative inline-flex overflow-hidden ${className}`}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.span
        className="inline-flex  items-center gap-2"
        animate={controls}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default AnimationButton;
