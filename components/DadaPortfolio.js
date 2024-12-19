                onClick={() => playTone(220 * (index + 1), 'triangle')}
                style={{
                  transform: `translateX(${Math.sin((index + textDistortion) * 0.5) * 10}px)`,
                }}>
              <span className="font-mono opacity-50">{(index + 1).toString().padStart(2, '0')}.</span> 
              {glitchText(item)}
            </li>
          ))}
        </ul>

        <div className="mt-auto text-sm font-mono opacity-50">
          © MMXXIV Glass Experiments
        </div>
      </nav>

      <main className="ml-72 flex-1 p-8">
        <h2 className="text-3xl font-light mb-8 tracking-wider">
          {glitchText("Glaskunst & Conceptueel Werk")}
        </h2>
        
        <div className="aspect-[4/3] bg-gray-100 mb-8 overflow-hidden group">
          <div className="relative w-full h-full flex items-center justify-center">
            <Camera size={48} className="opacity-20 group-hover:rotate-45 transition-all duration-700" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent 
                          group-hover:opacity-0 transition-opacity duration-700" />
          </div>
        </div>

        <div className="prose prose-lg">
          <p className="text-lg leading-relaxed text-gray-700">
            {glitchText("De glasobjecten vertellen het verhaal van de lagune van Venetië en de kleuren van de Noordzee.")}
          </p>
        </div>
      </main>
    </div>
  );
};

export default DadaPortfolio;