
import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { RSSItem } from '../types';

const RSSSection: React.FC = () => {
  const [items, setItems] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching the RSS items
    const fetchRSS = async () => {
      try {
        const res = await fetch("https://rss.app/feeds/wOhw410AfBpRkyRT.xml");
        const text = await res.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, "text/xml");
        const entryNodes = xml.querySelectorAll("item");
        const fetchedItems: RSSItem[] = Array.from(entryNodes).slice(0, 3).map(it => ({
          title: it.querySelector("title")?.textContent || "Senza Titolo",
          link: it.querySelector("link")?.textContent || "#",
          pubDate: it.querySelector("pubDate")?.textContent || ""
        }));
        setItems(fetchedItems);
      } catch (err) {
        console.error("RSS fetch error:", err);
        // Fallback items if CORS or network fails
        setItems([
          { title: "L'Intelligenza Artificiale nel Copywriting Moderno", link: "#", pubDate: "2024-03-20" },
          { title: "Design 3D e User Experience Immersiva", link: "#", pubDate: "2024-03-15" },
          { title: "Dalla Ragioneria al Creative Tech: Il mio Percorso", link: "#", pubDate: "2024-03-10" }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchRSS();
  }, []);

  return (
    <section id="blog" className="py-24 px-6 bg-[#1F2833]/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-4xl text-center text-white mb-16">Aggiornamenti Digitali</h2>
        
        <div className="space-y-6">
          {loading ? (
            <div className="text-center text-[#C29545] animate-pulse">Navigando tra i dati...</div>
          ) : (
            items.map((item, i) => (
              <a 
                key={i} 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between group p-6 bg-[#0B0C10]/50 border border-[#C29545]/10 hover:border-[#C29545] rounded-xl transition-all duration-300"
              >
                <div>
                  <h4 className="text-lg font-medium text-[#C5C6C7] group-hover:text-white transition-colors">{item.title}</h4>
                  <p className="text-xs text-[#C29545]/60 mt-1 uppercase tracking-widest">{item.pubDate}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-[#C29545] opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RSSSection;
