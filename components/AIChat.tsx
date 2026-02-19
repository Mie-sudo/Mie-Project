
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'ai', text: 'Ciao! Sono Mie.AI, la tua guida nel mio mondo digitale. Come posso aiutarti oggi?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const aiResponseText = await getGeminiResponse(input);
      const aiMsg: ChatMessage = { role: 'ai', text: aiResponseText, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <section id="ai-chat" className="py-24 px-6 bg-gradient-to-b from-[#0B0C10] to-[#142640] border-y border-[#C29545]/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-3 rounded-full bg-[#C29545]/10 mb-4">
            <Sparkles className="w-8 h-8 text-[#C29545]" />
          </div>
          <h2 className="font-display text-4xl text-white">Chat con Mie.AI</h2>
          <p className="text-[#C5C6C7] mt-2">Chiedimi delle mie competenze, dei miei progetti o di una collaborazione.</p>
        </div>

        <div className="bg-[#1F2833]/80 border border-[#C29545]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-[#BF7B90]' : 'bg-[#C29545]'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4 text-[#0B0C10]" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#BF7B90] text-white rounded-tr-none' : 'bg-[#0B0C10] text-[#C5C6C7] border border-[#C29545]/20 rounded-tl-none'}`}>
                    {m.text}
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex gap-3 items-center bg-[#0B0C10] border border-[#C29545]/20 p-4 rounded-2xl rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#C29545] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#C29545] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-[#C29545] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-[#0B0C10]/50 border-t border-[#C29545]/30 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Scrivi un messaggio a Mie.AI..."
              className="flex-1 bg-[#1F2833] border border-[#C29545]/20 rounded-lg px-4 py-2 text-[#C5C6C7] focus:outline-none focus:border-[#C29545] transition-colors"
            />
            <button 
              onClick={handleSend}
              disabled={isTyping}
              className="bg-[#C29545] hover:bg-[#E6C77A] text-[#0B0C10] p-3 rounded-lg transition-colors disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
