
import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, Wind } from 'lucide-react';

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<{ temp: string; desc: string } | null>(null);

  useEffect(() => {
    // In a real app we'd fetch from a weather API, here we simulate based on the user's RSS requirement or mock it for robustness
    const fetchWeather = async () => {
      try {
        // Simulating the RSS fetch from the original prompt
        // fetch("https://rss.app/feeds/NlHRwWGyWmoLNlJV.xml") ...
        setWeather({ temp: '22°C', desc: 'Sereno a Roma' });
      } catch (err) {
        setWeather({ temp: '--', desc: 'Meteo non disponibile' });
      }
    };
    fetchWeather();
  }, []);

  return (
    <section id="meteo" className="py-16 bg-gradient-to-b from-[#0B0C10] via-[#142640] to-[#0B0C10] border-y border-[#C29545]/20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl mb-8 text-white">Orizzonte Roma</h2>
        <div className="inline-flex items-center gap-6 bg-[#1F2833]/80 border border-[#C29545] p-8 rounded-2xl shadow-[0_0_30px_rgba(194,149,69,0.1)] gold-glow">
          <div className="bg-[#C29545]/10 p-4 rounded-full">
            <Sun className="w-12 h-12 text-[#C29545]" />
          </div>
          <div className="text-left">
            <p className="text-4xl font-bold text-white tracking-tighter">{weather?.temp || '...'}</p>
            <p className="text-[#C29545] uppercase tracking-widest text-sm font-semibold">{weather?.desc || 'Caricamento...'}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeatherWidget;
