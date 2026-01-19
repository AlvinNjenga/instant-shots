
import React, { useState } from 'react';
import { getEventConsultation, ConsultationResponse } from '../services/gemini';

const AiConsultant: React.FC = () => {
  const [eventType, setEventType] = useState('Bottomless Brunch');
  const [guests, setGuests] = useState(50);
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ConsultationResponse | null>(null);

  const handleConsult = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await getEventConsultation(eventType, guests, details);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-6 max-w-5xl">
      <div className="bg-white rounded-[3rem] p-8 md:p-16 border border-neutral-200 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sage/5 blur-3xl -mr-32 -mt-32"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="text-sage font-bold tracking-widest mb-6 inline-block uppercase text-xs">Consult with Nikki</span>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6">Plan Your <span className="italic font-serif">Roaming</span> Experience</h2>
            <p className="text-neutral-600 mb-8 leading-relaxed">
              I move with the crowd. Tell me about your layout and vibe so we can plan how guests will choose their 1, 2, or 3 instant shots!
            </p>
            
            <form onSubmit={handleConsult} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-neutral-500 mb-2 uppercase tracking-tighter">Event Type</label>
                <select 
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 focus:outline-none focus:border-sage transition-colors"
                >
                  <option>Bottomless Brunch</option>
                  <option>Festival / Gig</option>
                  <option>Games Night</option>
                  <option>Birthday Party</option>
                  <option>Corporate Social</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-neutral-500 mb-2 uppercase tracking-tighter">Guests: {guests}</label>
                <input 
                  type="range" min="10" max="500" step="10"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                  className="w-full accent-sage"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-500 mb-2 uppercase tracking-tighter">Event Vibe / Branded Sleeves?</label>
                <textarea 
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Where should I roam? Interested in custom branded sleeves? Tell me more..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 h-24 focus:outline-none focus:border-sage transition-colors"
                />
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-neutral-900 text-white font-bold py-4 rounded-xl hover:bg-sage transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {loading ? 'NIKKI IS THINKING...' : (
                  <>
                    <span>GET MY ROAMING PLAN</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center">
            {result ? (
              <div className="bg-neutral-50 p-8 rounded-3xl border border-sage/30 animate-fade-in relative shadow-inner">
                <div className="absolute top-4 right-4 text-sage/10 text-6xl font-black italic select-none">3 SHOTS</div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-4">Nikki's Suggestion</h3>
                <p className="text-sage font-bold mb-4">Coverage: {result.suggestedHours} Hours</p>
                <p className="text-neutral-700 mb-6 text-sm leading-relaxed">{result.recommendation}</p>
                
                <h4 className="text-neutral-900 font-bold mb-3 uppercase text-xs tracking-widest">Roaming Success Tips:</h4>
                <ul className="space-y-3">
                  {result.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-neutral-600 text-sm">
                      <span className="text-sage mt-1">📸</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="h-full min-h-[300px] border-2 border-dashed border-neutral-200 rounded-3xl flex flex-col items-center justify-center text-neutral-400 p-8 text-center bg-neutral-50/50">
                <svg className="w-16 h-16 mb-4 opacity-10 text-sage" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <p className="font-light">Nikki's AI consultant is ready to help you plan the roaming coverage.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiConsultant;
