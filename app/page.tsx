"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const DadaPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const navElement = document.getElementById('nav-container');
      if (navElement && isGlitching) {
        const rect = navElement.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(e.clientX - centerX, 2) + 
          Math.pow(e.clientY - centerY, 2)
        );
        
        const maxDistance = Math.sqrt(
          Math.pow(window.innerWidth, 2) + 
          Math.pow(window.innerHeight, 2)
        );
        
        setGlitchIntensity((distance / maxDistance) * 2);
      } else {
        setGlitchIntensity(0);
      }
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isGlitching]);

  const GlitchText = ({ text }) => (
    <AnimatePresence>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0 }}
          animate={isGlitching ? {
            x: Math.sin(i + mousePos.x * 0.01) * 5 * glitchIntensity,
            y: Math.cos(i + mousePos.y * 0.01) * 5 * glitchIntensity,
            color: Math.random() > 0.9 ? '#ff0000' : '#000000',
            textShadow: Math.random() > 0.9 ? '2px 2px #00ff00' : 'none'
          } : {}}
          transition={{ type: "spring", stiffness: 100, damping: 5 }}
          style={{ display: 'inline-block' }}
        >
          {char}
        </motion.span>
      ))}
    </AnimatePresence>
  );

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav
        id="nav-container"
        className="w-72 p-8 border-r border-gray-200 h-screen fixed backdrop-blur-sm bg-white/70"
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        <motion.h1 
          className="text-4xl font-light mb-12 mix-blend-difference"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <GlitchText text="William van Esveld" />
        </motion.h1>

        <motion.ul 
          className="space-y-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
        >
          {[
            'Murano Studies',
            'Venice Reflections',
            'North Sea Tales',
            'Glass Formations',
            'Light Experiments',
            'Water Memories',
            'Studio Works',
            'Recent Pieces',
            'Exhibitions'
          ].map((item, index) => (
            <motion.li
              key={index}
              className="hover:text-gray-600 cursor-pointer"
              style={{
                transform: `translateX(${Math.sin(index + mousePos.x * 0.01) * 10 * glitchIntensity}px)`
              }}
              whileHover={{ x: 10 }}
            >
              <span className="font-mono">
                {(index + 1).toString().padStart(2, '0')}.
              </span>{' '}
              <GlitchText text={item} />
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="space-y-2 mt-auto mix-blend-difference"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p><GlitchText text="About" /></p>
          <p><GlitchText text="Newsletter" /></p>
          <p><GlitchText text="Email" /></p>
          <p><GlitchText text="Instagram" /></p>
        </motion.div>

        <div className="mt-12 text-sm font-mono opacity-50">
          © MMXXIV Glass Experiments
        </div>
      </nav>

      <main className="ml-72 p-8">
        <motion.h2
          className="text-3xl font-light mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <GlitchText text="Glaskunst & Conceptueel Werk" />
        </motion.h2>
      </main>
    </div>
  );
};

export default DadaPortfolio;