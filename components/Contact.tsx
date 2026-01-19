
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1500);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="md:w-1/3">
          <h2 className="text-5xl font-bold text-neutral-900 mb-8">Book <span className="text-sage">Nikki.</span></h2>
          <p className="text-neutral-600 mb-12 leading-relaxed">
            Ready for physical memories? Ask about <strong>custom branded sleeves</strong> to make your photos even more special. No digital files, just real film.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sage shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <span className="text-neutral-900 font-medium">nikki@instantshots.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-sage text-xs font-bold shadow-sm">
                IG
              </div>
              <span className="text-neutral-900 font-medium">@InstantShotsByNikki</span>
            </div>
          </div>
        </div>

        <div className="md:w-2/3">
          {formStatus === 'sent' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white rounded-3xl border border-sage/20 shadow-sm">
              <div className="w-20 h-20 bg-sage/20 text-sage rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">Talk soon!</h3>
              <p className="text-neutral-600">Nikki has received your inquiry. Get ready for some Instax WIDE magic.</p>
              <button onClick={() => setFormStatus('idle')} className="mt-8 text-sage font-bold hover:underline">Send another inquiry</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10 bg-white rounded-[2.5rem] border border-neutral-100 shadow-xl">
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-neutral-900 mb-2">Event Inquiry Form</h3>
                <p className="text-neutral-500 text-sm">Mention if you're interested in custom photo sleeves!</p>
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-widest">Name</label>
                <input required type="text" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-sage transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-widest">Email</label>
                <input required type="email" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-sage transition-colors" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-widest">Event (e.g., Brunch, Festival)</label>
                <input type="text" className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 focus:outline-none focus:border-sage transition-colors" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-neutral-400 mb-2 uppercase tracking-widest">Brief Message</label>
                <textarea required className="w-full bg-neutral-50 border border-neutral-100 rounded-xl px-4 py-4 text-neutral-900 h-32 focus:outline-none focus:border-sage transition-colors" />
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={formStatus === 'sending'}
                  className="bg-neutral-900 text-white font-bold py-5 px-12 rounded-full hover:bg-sage transition-all transform hover:scale-105 disabled:opacity-50 shadow-lg shadow-neutral-900/10"
                >
                  {formStatus === 'sending' ? 'SENDING...' : 'BOOK THE INSTANT EXPERIENCE'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
