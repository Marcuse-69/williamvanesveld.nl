-600 cursor-pointer">{glitchText("About")}</p>
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