
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Vibe', href: '#services' },
    { name: 'Meet Nikki', href: '#about' },
    { name: 'The Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-neutral-100' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-xl md:text-2xl font-bold tracking-tighter transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
          INSTANT SHOTS <span className="text-sage">BY NIKKI</span>
        </a>
        
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-xs font-semibold transition-colors uppercase tracking-widest ${isScrolled ? 'text-neutral-600 hover:text-sage' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-sm ${isScrolled ? 'bg-sage text-white hover:bg-neutral-900' : 'bg-white text-neutral-900 hover:bg-sage hover:text-white'}`}
          >
            BOOK NIKKI
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
