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