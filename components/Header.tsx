
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0C10]/80 backdrop-blur-md border-b border-[#C29545]/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="font-display text-2xl md:text-3xl tracking-widest bg-gradient-to-r from-[#C29545] via-[#E6C77A] to-[#C29545] bg-clip-text text-transparent uppercase">
          Il Mondo di Mie
        </h1>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-tighter">
          {['Chi Sono', 'Meteo', 'Portafoglio', 'Blog', 'AI Chat', 'Contatti'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="text-[#C5C6C7] hover:text-[#C29545] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
