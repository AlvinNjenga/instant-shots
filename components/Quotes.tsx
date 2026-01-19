
import React from 'react';

const QuoteCard: React.FC<{ text: string; author: string }> = ({ text, author }) => (
  <div className="p-8 md:p-12 bg-white border border-neutral-100 rounded-[2.5rem] shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
    <div className="absolute -top-4 -left-4 text-sage opacity-10 group-hover:opacity-20 transition-opacity">
      <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21L14.017 18C14.017 16.899 14.892 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H16.017C15.465 8 15.017 8.448 15.017 9V12H13.017V9C13.017 7.343 14.36 6 16.017 6H19.017C20.674 6 22.017 7.343 22.017 9V15C22.017 17.761 19.778 20 17.017 20H14.017V21ZM5.017 21V18C5.017 16.899 5.892 16 7.017 16H10.017C10.569 16 11.017 15.552 11.017 15V9C11.017 8.448 10.569 8 10.017 8H7.017C6.465 8 6.017 8.448 6.017 9V12H4.017V9C4.017 7.343 5.36 6 7.017 6H10.017C11.674 6 13.017 7.343 13.017 9V15C13.017 17.761 10.778 20 8.017 20H5.017V21Z" />
      </svg>
    </div>
    <p className="text-xl md:text-2xl font-serif italic text-neutral-800 mb-6 leading-relaxed relative z-10">
      "{text}"
    </p>
    <div className="flex items-center space-x-3">
      <div className="w-8 h-[1px] bg-sage"></div>
      <span className="text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase">{author}</span>
    </div>
  </div>
);

const Quotes: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sage font-bold tracking-[0.3em] uppercase text-xs mb-4 block">The Reaction</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 italic">Guest Perspectives</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <QuoteCard 
            text="This photo is beautiful, thank you so much!" 
            author="Event Guest"
          />
          <QuoteCard 
            text="I haven’t seen these in years! It’s nice to have something real!" 
            author="Festival Attendee"
          />
        </div>
        
        <div className="mt-16 p-8 bg-neutral-50 rounded-[2rem] border border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <div className="w-full h-full bg-sage/20 flex items-center justify-center text-[10px] font-bold text-sage">📸</div>
              </div>
            ))}
          </div>
          <p className="text-neutral-500 font-light text-sm italic text-center md:text-left">
            "The magic happens when the paper turns into a picture right in their hands."
          </p>
          <a href="#contact" className="text-neutral-900 font-bold text-xs uppercase tracking-widest border-b-2 border-sage pb-1 hover:text-sage transition-colors">
            Bring this vibe to your event
          </a>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
