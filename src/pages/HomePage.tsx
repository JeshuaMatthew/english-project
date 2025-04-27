// src/pages/HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation of children
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: 'var(--glow-accent-medium)', // Use variable from CSS
    transition: {
      duration: 0.2,
      yoyo: Infinity, // Optional: makes the scale pulse slightly
    },
  },
  tap: {
    scale: 0.95,
  },
};

const HomePage: React.FC = () => {
  return (
    // Apply page wrapper styles - assuming this class centers content and adds padding
    // Using motion.div allows this component to integrate with page transition animations if needed
    <motion.div
      className="page-content-wrapper text-center flex flex-col items-center min-h-[calc(100vh-150px)] justify-center" // Adjust min-height based on navbar/footer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden" // Add exit variant if using AnimatePresence for page transitions
    >
      {/* Hero Section */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        variants={itemVariants}
        style={{ textShadow: 'var(--glow-accent-soft)' }} // Apply subtle glow
      >
        Welcome everyone👋😊
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8"
        variants={itemVariants}
      >
        Thank you for visiting, this webpage is for my english IV writing final project, feel free to judge my writings. 
      </motion.p>

      <motion.div variants={itemVariants}>
        <Link to="/about-me"> {/* Example link, adjust as needed */}
          <motion.button
            className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-md shadow-md transition-colors duration-300 ease-in-out hover:bg-[var(--color-accent-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-light)] focus:ring-opacity-50"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Start Here
          </motion.button>
        </Link>
      </motion.div>

    </motion.div>
  );
};

export default HomePage;