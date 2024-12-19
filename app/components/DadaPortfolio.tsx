"use client";

import React, { useState, useEffect } from 'react';
import { Camera } from 'lucide-react';

const DadaPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 cursor-crosshair overflow-hidden">
      <nav 
        id="nav-container"
        className="w-72 p-8 border-r border-gray-200 h-screen fixed backdrop-blur-sm bg-white/70"
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        <h1 className="text-4xl font-light mb-12">
          William van Esveld
        </h1>
        
        <ul className="space-y-4 mb-12">
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
            <li key={index} className="hover:text-gray-600">
              <span className="font-mono">{(index + 1).toString().padStart(2, '0')}.</span> {item}
            </li>
          ))}
        </ul>

        <div className="space-y-2 mt-auto">
          <p>About</p>
          <p>Newsletter</p>
          <p>Email</p>
          <p>Instagram</p>
        </div>
      </nav>

      <main className="ml-72 p-8">
        <h2 className="text-3xl font-light mb-8">
          Glaskunst & Conceptueel Werk
        </h2>
      </main>
    </div>
  );
};

export default DadaPortfolio;