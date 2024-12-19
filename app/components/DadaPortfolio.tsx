import React, { useState, useEffect, useCallback } from 'react';
import { Camera } from 'lucide-react';

const DadaPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [textDistortion, setTextDistortion] = useState(0);
  
  // Calculate distance between two points
  const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  };

  // Calculate glitch intensity based on distance
  const calculateGlitchIntensity = useCallback((element, mouseX, mouseY) => {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;
    
    const distance = getDistance(mouseX, mouseY, elementCenterX, elementCenterY);
    const maxDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
    
    return (distance / maxDistance) * 2;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      const intensity = isGlitching ? calculateGlitchIntensity(document.getElementById('nav-container'), e.clientX, e.clientY) : 0;
      setGlitchIntensity(intensity);
      setTextDistortion(Math.sin(e.clientX * 0.01) * 10 * intensity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isGlitching, calculateGlitchIntensity]);

  const glitchText = (text) => {
    if (!isGlitching) return text;
    return text.split('').map((char, i) => (
      <span key={i} style={{
        transform: `translate(${Math.sin(i + textDistortion) * 5 * glitchIntensity}px, 
                            ${Math.cos(i + textDistortion) * 5 * glitchIntensity}px)`,
        display: 'inline-block',
        color: Math.random() > (1 - glitchIntensity * 0.1) ? '#ff0000' : 'inherit',
        textShadow: Math.random() > (1 - glitchIntensity * 0.1) ? '2px 2px #00ff00' : 'none',
        transition: 'transform 0.1s ease'
      }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="flex min-h-screen bg-white text-gray-900 cursor-crosshair">
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r from-transparent via-blue-100 to-transparent"
              style={{
                left: `${(mousePos.x * (i * 0.1)) % 100}%`,
                top: `${(i * 5 + mousePos.y * 0.1) % 100}%`,
                width: '200%',
                height: '1px',
                transform: `rotate(${mousePos.x * 0.1 * glitchIntensity}deg)`,
                opacity: 0.3 * glitchIntensity,
                transition: 'all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)'
              }}
            />
          ))}
        </div>
      </div>

      <nav 
        id="nav-container"
        className="w-72 p-8 border-r border-gray-200 h-screen fixed backdrop-blur-sm bg-white/70"
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
        style={{
          backdropFilter: `blur(${4 + glitchIntensity * 4}px)`,
        }}
      >
        <h1 className="text-4xl font-light mb-12 mix-blend-difference hover:mix-blend-color-dodge transition-all duration-500">
          {glitchText("William van Esveld")}
        </h1>
        
        <ul className="space-y-4 mb-12 relative">
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
            <li key={index} 
                className="hover:text-gray-600 cursor-pointer transition-all duration-300"
                style={{
                  transform: `translateX(${Math.sin((index + textDistortion) * 0.5) * 10 * glitchIntensity}px)`,
                }}>
              <span className="font-mono">{(index + 1).toString().padStart(2, '0')}.</span> {glitchText(item)}
            </li>
          ))}
        </ul>

        <div className="space-y-2 mt-auto mix-blend-difference">
          <p className="hover:text-gray-600 cursor-pointer">{glitchText("About")}</p>
          <p className="hover:text-gray-600 cursor-pointer">{glitchText("Newsletter")}</p>
          <p className="hover:text-gray-600 cursor-pointer">{glitchText("Email")}</p>
          <p className="hover:text-gray-600 cursor-pointer">{glitchText("Instagram")}</p>
        </div>

        <div className="mt-12 text-sm font-mono opacity-50 hover:opacity-100 transition-opacity">
          © MMXXIV Glass Experiments
        </div>
      </nav>

      <main className="ml-72 flex-1 p-8 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-8 tracking-wider hover:tracking-widest transition-all duration-700">
            {glitchText("Glaskunst & Conceptueel Werk")}
          </h2>
          
          <div className="relative aspect-[4/3] bg-gray-100 mb-8 overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center bg-white">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <Camera 
                    size={48} 
                    className="opacity-20" 
                    style={{
                      transform: `scale(${1 + glitchIntensity * 0.2})`,
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"
                  style={{
                    opacity: glitchIntensity * 0.5,
                    transform: `rotate(${glitchIntensity * 45}deg)`,
                    transition: 'all 0.5s ease'
                  }}
                />
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-lg leading-relaxed text-gray-700">
              {glitchText("De glasobjecten vertellen het verhaal van de lagune van Venetië en de kleuren van de Noordzee. Kleine details op het glas illustreren mosselen, kwallen en zeewier.")}
            </p>

            <h2 className="text-3xl font-light mb-4 mix-blend-difference">
              {glitchText("Experiments in Glass & Light")}
            </h2>
            
            <h3 className="text-2xl font-light mix-blend-multiply">
              {glitchText("Amsterdam · Venetië · Murano")}
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DadaPortfolio;