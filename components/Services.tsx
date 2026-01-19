
import React from 'react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
  <div className="p-8 border border-neutral-200 bg-white rounded-3xl hover:border-sage transition-all group relative overflow-hidden h-full shadow-sm hover:shadow-md">
    <div className="absolute top-0 right-0 w-32 h-32 bg-sage/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-sage/10 transition-colors"></div>
    <div className="w-14 h-14 bg-sage/10 rounded-2xl flex items-center justify-center text-sage mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-neutral-900">{title}</h3>
    <p className="text-neutral-600 font-light leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 italic">The Live Vibe.</h2>
          <p className="text-neutral-600 text-lg font-light">
            I don't stay in a booth. I'm in the crowd, at the bar, and on the dance floor, making sure every angle is covered.
          </p>
        </div>
        <div className="mt-8 md:mt-0">
          <span className="text-sage font-bold text-sm tracking-widest border-b border-sage/30 pb-2 uppercase">The Process</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ServiceCard 
          title="Roaming Presence"
          description="I move through your brunch, festival, or party, finding the most authentic moments as they happen. No setup required, I am the setup."
          icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
        />
        <ServiceCard 
          title="Guest's Choice"
          description="Taking a photo is completely optional. Guests choose if they want 1, 2, or 3 shots and pay on the spot via my portable card reader or cash."
          icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
        />
        <ServiceCard 
          title="Instant Keepsake"
          description="A physical photo is handed over immediately. No waiting for digital galleries or emails—just the tangible joy of film."
          icon={<svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>
    </div>
  );
};

export default Services;
