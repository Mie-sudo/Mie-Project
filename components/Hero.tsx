
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="chi-sono" className="py-24 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#C29545] to-[#BF7B90] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#1F2833] border border-[#C29545]/20">
          <img 
            src="https://picsum.photos/seed/mie-portrait/800/1000" 
            alt="Maria Elena Mie Turcinovich" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-transparent to-transparent opacity-60"></div>
        </div>
      </div>
      
      <div className="space-y-6">
        <h2 className="font-display text-4xl md:text-5xl text-white">
          Maria Elena <span className="text-[#C29545]">“Mie”</span> Turcinovich
        </h2>
        <h3 className="text-xl font-light italic text-[#C29545]/80">Ragioniera & Tecnico in Rilevamenti Marini</h3>
        <div className="space-y-4 text-[#C5C6C7] leading-relaxed">
          <p>
            Benvenuti nel mio spazio digitale. Sono una mente tecnica con un cuore creativo, 
            dove la precisione della contabilità incontra la vastità dell'oceano e l'innovazione dell'AI.
          </p>
          <p>
            La mia missione è unire questi mondi apparentemente distanti come <strong>Copywriter & AI Specialist</strong>, 
            progettando esperienze immersive, contenuti che emozionano e soluzioni tridimensionali per il futuro del web.
          </p>
          <div className="pt-6 flex gap-4">
            <button className="bg-[#C29545] hover:bg-[#E6C77A] text-[#0B0C10] font-bold px-8 py-3 rounded-full transition-all duration-300 transform hover:-translate-y-1">
              Scopri i miei lavori
            </button>
            <button className="border border-[#C29545] hover:bg-[#C29545]/10 text-[#C29545] font-bold px-8 py-3 rounded-full transition-all duration-300">
              Contattami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
