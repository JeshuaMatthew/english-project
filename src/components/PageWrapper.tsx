import React from 'react';
import { motion } from 'framer-motion';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string; // Keep this if you need *additional* custom classes per page
}

// Updated variants for bottom-to-top slide animation
const pageVariants = {
  initial: {
    opacity: 0,
    y: 50 // Start 50px below the final position
  },
  in: {
    opacity: 1,
    y: 0   // Animate to the final position (y=0)
  },
  out: {
    opacity: 0,
    y: -50 // Animate 50px above the final position before exiting
  },
};

// Optional: Define a transition for smoother animation control
const pageTransition = {
  ease: "anticipate", // Example easing function (others: "easeInOut", "circOut", etc.)
  duration: 0.5 // Adjust duration as needed
};


const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition} // Apply the transition settings
      // Apply the base wrapper class, merge with any passed className
      className={`page-content-wrapper ${className}`}
      style={{ position: 'relative' }} // Added position relative often helps with transitions consistency
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;