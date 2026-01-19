
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=2000" 
          alt="Nightclub Party Energy" 
          className="w-full h-full object-cover opacity-60 scale-110 animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-white"></div>
        {/* Sage accent lights */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-sage/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-sage/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h4 className="text-white font-bold tracking-[0.5em] uppercase mb-4 text-xs">
          Physical Memories, Zero Digital Noise
        </h4>
        <h1 className="text-5xl md:text-9xl font-black text-white mb-8 leading-[0.85] tracking-tighter drop-shadow-sm">
          Roaming. <br /> 
          <span className="italic font-serif text-sage">Real.</span> <br />
          Instant.
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-10 font-light leading-relaxed drop-shadow-md">
          I roam your event capturing authentic vibes. Guests choose if they’d like to purchase 1, 2, or 3 high-quality <strong>Instax WIDE</strong> prints—completely optional, paid instantly via cash or card.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact" className="bg-sage text-white px-10 py-4 rounded-full font-bold hover:bg-neutral-900 transition-all transform hover:-translate-y-1 shadow-xl shadow-sage/30">
            BOOK NIKKI
          </a>
          <a href="#services" className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/40 transition-all">
            HOW IT WORKS
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Cash & Card Accepted</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-sage to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
