
import React, { useState } from 'react';
import { Mail, Globe, Users } from 'lucide-react';

interface ContactProps {
  visitorCount: number;
}

const Contact: React.FC<ContactProps> = ({ visitorCount }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contatti" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display text-4xl text-white mb-6">Contattami</h2>
          <p className="text-[#C5C6C7] mb-8 leading-relaxed">
            Sei interessato a una collaborazione creativa, a un progetto 3D o vuoi saperne di più sul mio lavoro? 
            Invia un messaggio e ti risponderò al più presto.
          </p>
          
          <div className="space-y-4 mb-12">
            <div className="flex items-center gap-4 text-[#C29545]">
              <div className="w-10 h-10 rounded-full bg-[#C29545]/10 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-medium">mie.turcinovich@email.com</span>
            </div>
            <div className="flex items-center gap-4 text-[#C29545]">
              <div className="w-10 h-10 rounded-full bg-[#C29545]/10 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <a href="https://rss.app/feeds/wOhw410AfBpRkyRT.xml" target="_blank" rel="noopener" className="hover:underline">I miei contenuti digitali</a>
            </div>
          </div>

          <div className="p-6 bg-[#1F2833] rounded-xl border border-[#C29545]/20 inline-flex items-center gap-4">
            <Users className="w-6 h-6 text-[#C29545]" />
            <div className="text-left">
              <p className="text-xs uppercase tracking-widest text-[#C29545]/60">Visitatori</p>
              <p className="text-2xl font-bold text-white tracking-tighter">{visitorCount.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              required
              type="text" 
              placeholder="Il tuo nome" 
              className="w-full bg-[#1F2833] border border-[#C29545]/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#C29545] transition-colors"
            />
            <input 
              required
              type="email" 
              placeholder="La tua email" 
              className="w-full bg-[#1F2833] border border-[#C29545]/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#C29545] transition-colors"
            />
          </div>
          <input 
            type="text" 
            placeholder="Oggetto" 
            className="w-full bg-[#1F2833] border border-[#C29545]/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#C29545] transition-colors"
          />
          <textarea 
            required
            rows={5}
            placeholder="Il tuo messaggio..." 
            className="w-full bg-[#1F2833] border border-[#C29545]/20 rounded-lg p-4 text-white focus:outline-none focus:border-[#C29545] transition-colors"
          ></textarea>
          <button 
            type="submit" 
            disabled={status !== 'idle'}
            className={`w-full font-bold py-4 rounded-lg transition-all transform active:scale-95 ${
              status === 'sent' 
                ? 'bg-green-600 text-white' 
                : 'bg-[#C29545] hover:bg-[#E6C77A] text-[#0B0C10]'
            }`}
          >
            {status === 'idle' ? 'Invia Messaggio' : status === 'sending' ? 'Invio in corso...' : 'Inviato con successo!'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
