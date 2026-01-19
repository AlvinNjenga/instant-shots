
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800', label: 'Main Stage Energy' },
    { src: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?auto=format&fit=crop&q=80&w=800', label: 'Brunch Details' },
    { src: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800', label: 'VIP Lounge' },
    { src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=800', label: 'Table Vibe' },
    { src: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=800', label: 'Late Night' },
    { src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&q=80&w=800', label: 'Festival Sunset' },
    { src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800', label: 'The Crowd' },
    { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=800', label: 'Dance Floor' },
  ];

  return (
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 italic">The Event Gallery</h2>
        <p className="text-neutral-400 max-w-xl mx-auto uppercase tracking-widest text-sm font-semibold">Real snapshots from real nights out</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-3xl relative group bg-white border border-neutral-100 p-2 shadow-sm hover:shadow-2xl transition-all duration-700">
            <div className="w-full aspect-square overflow-hidden rounded-2xl">
              <img 
                src={img.src} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110" 
                alt={img.label}
              />
            </div>
            {/* Polaroid-style light leak effect on hover */}
            <div className="absolute inset-0 bg-sage/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            
            <div className="absolute bottom-6 left-6 right-6 text-white font-serif font-bold opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0 drop-shadow-md bg-neutral-900/60 px-4 py-2 rounded-xl backdrop-blur-md text-center text-sm">
              {img.label}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-neutral-500 font-light italic text-lg max-w-2xl mx-auto">
          "The Instax WIDE format creates a larger-than-life physical memory that guests treasure long after the lights come up."
        </p>
        <div className="mt-6 flex justify-center space-x-2">
           <div className="w-2 h-2 rounded-full bg-sage/20"></div>
           <div className="w-2 h-2 rounded-full bg-sage/40"></div>
           <div className="w-2 h-2 rounded-full bg-sage/60"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
