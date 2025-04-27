// src/components/AnimatedBackground.tsx
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface StarProps {
  id: number;
  x: number; // position (percentage)
  y: number; // position (percentage)
  size: number; // size (pixels)
  duration: number; // animation duration
  delay: number; // animation delay
}

const AnimatedBackground: React.FC = () => {
  const numStars = 100; // Adjust number of stars as needed

  // useMemo to generate stars only once
  const stars = useMemo(() => {
    return Array.from({ length: numStars }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5, // Star size between 0.5px and 2.5px
      duration: Math.random() * 3 + 2, // Twinkle duration between 2s and 5s
      delay: Math.random() * 5, // Start delay up to 5s
    }));
  }, [numStars]);

  return (
    <div
      className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-gray-900 via-black to-indigo-950" // Dark background
      aria-hidden="true" // Hide from screen readers
    >
      {stars.map((star: StarProps) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white" // Star appearance
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            // Simple white glow using box-shadow
            boxShadow: `0 0 ${star.size * 2}px ${star.size * 1}px rgba(255, 255, 255, 0.7)`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 1, 0.7, 0], // Twinkle effect (fade in, hold slightly, fade out)
            scale: [0.5, 1.1, 0.8, 0.5], // Slight size change
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: 'loop', // Loop the animation smoothly
            ease: 'linear', // Consistent animation speed
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;