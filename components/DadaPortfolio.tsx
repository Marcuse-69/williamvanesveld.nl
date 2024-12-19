import { useState } from 'react';

const DadaPortfolio = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlitching, setIsGlitching] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [textDistortion, setTextDistortion] = useState(0);
  
  const artworks = [
    { id: 1, title: 'Murano Memories' },
    { id: 2, title: 'North Sea Dreams' },
    { id: 3, title: 'Venice Reflections' }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setTextDistortion(Math.sin(e.clientX * 0.01) * 10);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glitchText = (text) => {
    if (!isGlitching) return text;
    return text.split('').map((char, i) => (
      <span key={i} style={{
        transform: `translate(${Math.sin(i + textDistortion) * 5}px, ${Math.cos(i + textDistortion) * 5}px)`,
        display: 'inline-block',
        color: Math.random() > 0.95 ? '#ff0000' : 'inherit',
        textShadow: Math.random() > 0.95 ? '2px 2px #00ff00' : 'none'
      }}>
        {char}
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 cursor-crosshair">
      <nav 
        id="nav-container"
        className="w-72 p-8 border-r border-gray-200 h-screen fixed backdrop-blur-sm bg-white/70"
        onMouseEnter={() => setIsGlitching(true)}
        onMouseLeave={() => setIsGlitching(false)}
      >
        <h1 className="text-4xl font-light mb-12 mix-blend-difference">
          {glitchText("William van Esveld")}
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
            <li key={index} 
                className="hover:text-gray-600 transition-all duration-300"
                style={{
                  transform: `translateX(${Math.sin(index + mousePos.x * 0.01) * 10 * glitchIntensity}px)`
                }}>
              <span className="font-mono">{(index + 1).toString().padStart(2, '0')}.</span>
              {' '}{glitchText(item)}
            </li>
          ))}
        </ul>

        <div className="space-y-2 mt-auto mix-blend-difference">
          <p>{glitchText("About")}</p>
          <p>{glitchText("Newsletter")}</p>
          <p>{glitchText("Email")}</p>
          <p>{glitchText("Instagram")}</p>
        </div>

        <div className="mt-12 text-sm font-mono opacity-50">
          © MMXXIV Glass Experiments
        </div>
      </nav>

      <main className="ml-72 p-8">
        <h2 className="text-3xl font-light mb-8 tracking-wider hover:tracking-widest transition-all duration-700">
          {glitchText("Glaskunst & Conceptueel Werk")}
        </h2>
      </main>
    </div>
  );
};

export default DadaPortfolio;
