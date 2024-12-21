"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function GlassArtPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouse);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log('Mouse Position:', mousePosition);
  }, [mousePosition]);

  useEffect(() => {
    console.log('Scroll Position:', scrollPosition);
  }, [scrollPosition]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800 overflow-hidden">
      {/* Floating glass elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full bg-blue-100/20 backdrop-blur-sm"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)'
          }}
        />
        <div 
          className="absolute right-0 w-80 h-80 rounded-full bg-emerald-100/10 backdrop-blur-sm"
          style={{
            transform: `translate(${-mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative container mx-auto px-6 py-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-light mb-8 tracking-wide"
        >
          William van Esveld
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="prose prose-lg max-w-3xl space-y-6"
        >
          <p className="text-xl leading-relaxed">
            William van Esveld (1964, NL) woont en werkt in Amsterdam. Hij ontwerpt in zijn studio 
            onder meer interieurs en decors voor modemerken en startte in 2019 met het maken van 
            autonoom werk.
          </p>

          <div className="relative backdrop-blur-sm bg-white/30 p-8 rounded-lg shadow-lg">
            <p>
              Tijdens een bezoek aan Murano in 2019 wilde hij met glas leren werken omdat het 
              zo'n moeilijk en uitdagend materiaal is. Hij ging samenwerken met glasblazers in 
              Amsterdam en had zijn eerste expositie op uitnodiging van de Venice Glasweek 2021 
              in Venetië.
            </p>
          </div>

          <div className="relative backdrop-blur-sm bg-white/40 p-8 rounded-lg shadow-lg mt-8">
            <p>
              De glasobjecten vertellen het verhaal van de lagune van Venetië en de kleuren 
              van de Noordzee. Kleine details op het glas illustreren mosselen, kwallen en zeewier.
            </p>
          </div>
        </motion.div>

        {/* Gallery placeholder */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <div 
              key={i}
              className="aspect-square bg-white/20 backdrop-blur-md rounded-lg overflow-hidden"
            />
          ))}
        </div>
      </main>
    </div>
  );
}
