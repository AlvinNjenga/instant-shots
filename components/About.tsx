
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative group">
          {/* Placeholder for Nikki with her camera */}
          <div className="relative z-10 rounded-[2rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-[-2deg] transition-transform group-hover:rotate-0 duration-500 bg-neutral-100 aspect-[4/5] flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1000" 
              alt="Nikki with her Instax WIDE 400" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-sage/10 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-neutral-100">
              <p className="text-neutral-900 font-serif italic text-sm text-center">"Capturing the real you, right now."</p>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute -top-6 -left-6 w-full h-full bg-sage/10 rounded-[2.5rem] -z-10 rotate-[1deg]"></div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-sage font-bold tracking-[0.3em] uppercase mb-4 block text-xs">The Face Behind the Lens</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Hi, I’m <span className="italic font-serif text-sage">Nikki.</span>
          </h2>
          <div className="space-y-6 text-neutral-600 text-lg font-light leading-relaxed">
            <p>
              I’m not your typical event photographer. I don’t hide behind a long lens at the back of the room. I’m in the heart of the action, roaming around your party, brunch, or festival with my Instax WIDE 400.
            </p>
            <p>
              My goal is to capture the unfiltered energy of the moment. Guests can choose to have their photo taken—it's completely optional. If they love the shot, they pay for the print right there. 
            </p>
            <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex items-start space-x-4">
               <div className="text-sage mt-1">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
               </div>
               <div>
                 <p className="font-medium text-neutral-900 text-base">Hassle-Free Payments</p>
                 <p className="text-sm text-neutral-500">I carry a portable card reader and can also accept cash, so the process is seamless for your guests.</p>
               </div>
            </div>
            <p className="font-medium text-neutral-900">
              No digital archives, no filtered expectations—just honest, physical memories.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center space-x-2 bg-neutral-50 px-4 py-2 rounded-full border border-neutral-100">
              <span className="w-2 h-2 bg-sage rounded-full animate-pulse"></span>
              <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Available for Hire</span>
            </div>
            <a href="#contact" className="text-sage font-bold hover:underline underline-offset-8">Let’s chat about your event →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
