import React from "react";
import { motion } from "framer-motion";
const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      exit={{
        x: "-100%",
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
