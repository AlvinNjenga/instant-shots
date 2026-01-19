
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-2xl font-bold tracking-tighter text-neutral-900 mb-8 md:mb-0 uppercase">
            INSTANT SHOTS <span className="text-sage">BY NIKKI</span>
          </div>
          
          <div className="flex space-x-12 font-semibold">
            <a href="#" className="text-neutral-400 hover:text-sage transition-colors">Instagram</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Instant Shots By Nikki. Captured on Instax WIDE.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-neutral-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
