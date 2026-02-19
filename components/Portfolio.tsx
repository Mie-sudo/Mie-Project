
import React from 'react';

const projects = [
  {
    title: "Piattaforme 3D",
    desc: "Progettazione e ambientazioni immersive in spazi virtuali tridimensionali.",
    img: "https://picsum.photos/seed/3d-world/600/400",
    tag: "Creative Tech"
  },
  {
    title: "Accoglienza Hotel",
    desc: "Cura del dettaglio, ospitalità e organizzazione nel settore Luxury.",
    img: "https://picsum.photos/seed/hotel/600/400",
    tag: "Hospitality"
  },
  {
    title: "AI Concept Art",
    desc: "Creazioni visive generate con sensibilità artistica e prompt engineering.",
    img: "https://picsum.photos/seed/ai-art/600/400",
    tag: "AI Specialist"
  },
  {
    title: "Survey Marino",
    desc: "Unità navale per rilevamenti e studi delle coste italiane.",
    img: "https://picsum.photos/seed/marine/600/400",
    tag: "Marine Tech"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portafoglio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl text-white mb-2">Portafoglio Creativo</h2>
          <p className="text-[#C5C6C7] max-w-lg">L'unione tra rigore tecnico e visione artistica in diversi settori d'eccellenza.</p>
        </div>
        <div className="h-1 flex-1 bg-gradient-to-r from-[#C29545] to-transparent mx-8 mb-4 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative bg-[#1F2833] rounded-xl overflow-hidden border border-[#C29545]/10 hover:border-[#C29545]/40 transition-all duration-500 hover:-translate-y-2">
            <div className="aspect-video overflow-hidden">
              <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <span className="text-[10px] uppercase tracking-widest text-[#C29545] font-bold border border-[#C29545]/30 px-2 py-1 rounded mb-4 inline-block">{p.tag}</span>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#C29545] transition-colors">{p.title}</h3>
              <p className="text-sm text-[#C5C6C7] leading-relaxed line-clamp-2">{p.desc}</p>
            </div>
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C29545]/20 rounded-xl transition-all pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
