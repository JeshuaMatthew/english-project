import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  // Ensure the '/' path is unique if 'About Me' is also '/'
  // Assuming '/' is meant to be 'Home' or similar. Let's map 'About Me' to '/' for this example.
  { path: '/', label: 'About Me' }, // Changed label assuming '/' is About Me page
  { path: '/how-to-operate', label: 'How To Operate' },
  { path: '/formal-email', label: 'Formal Email' },
  { path: '/exposition-text', label: 'Exposition Text' },
  { path: '/system-docs', label: 'System Docs' },
  { path: '/informative-article', label: 'Article' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get location to close menu on navigation

  // Close mobile menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Framer Motion variants for the mobile menu container
  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut', when: 'afterChildren' },
    },
    visible: {
      opacity: 1,
      height: 'auto', // Animate height for smooth transition
      transition: { duration: 0.3, ease: 'easeInOut', when: 'beforeChildren', staggerChildren: 0.05 },
    },
  };

  // Framer Motion variants for individual mobile menu items
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      // navbar-container class provides base styling (bg, shadow, etc.)
      className="navbar-container"
    >
      {/* Wrapper for layout: centers content, handles mobile toggle positioning */}
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 md:px-0"> {/* Added padding for mobile */}

        {/* Placeholder for Logo/Title on Left (Optional) */}
        {/* You could add a brand name or logo here */}
        <div className="flex items-center md:hidden"> {/* Show only on mobile if you want a title */}
          {/* Example: <span className="text-text-primary font-semibold">My Site</span> */}
        </div>

        {/* Hamburger Button - Only visible on small screens (up to md) */}
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent md:hidden" // md:hidden hides it on medium screens and up
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="sr-only">Open main menu</span>
          {/* Icon: Hamburger lines */}
          <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          {/* Icon: 'X' for close */}
          <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Desktop Navigation Links - Hidden below md, flex row on md+ */}
        {/* Use Tailwind classes for layout directly here */}
        <div className="hidden w-full md:flex md:items-center md:w-auto" id="navbar-default">
           <ul className="flex flex-col p-4 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0 md:p-0 list-none"> {/* Base styles + desktop overrides */}
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  // navbar-link and active classes handled by CSS
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? 'active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navigation Menu - Conditional rendering + Animation */}
      {/* Uses AnimatePresence for exit animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div // Use div for motion container
            id="mobile-menu"
            className="w-full md:hidden" // Show only below md breakpoint
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden" // Animate on exit
          >
            {/* ul styling specific to mobile dropdown */}
            <ul className="flex flex-col px-2 pt-2 pb-3 space-y-1 list-none m-0">
              {navItems.map((item) => (
                <motion.li key={item.path} variants={itemVariants}>
                  <NavLink
                    to={item.path}
                    // Close menu when a link is clicked
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      // Apply base link styles, ensure block for full width, add padding
                      `navbar-link block text-center rounded-md px-3 py-2 ${isActive ? 'active' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;