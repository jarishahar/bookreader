import React from "react";
import { motion, transform } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    rotateY: 90,
  },
  in: {
    opacity: 1,
    rotateY: 0,
  },
  out: {
    opacity: 0,
    rotateY: 90,
  },
};

const pageTransition = {
  duration: 2,
  ease: "easeInOut",
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
