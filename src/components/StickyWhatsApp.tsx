import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles, X, ChevronRight } from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface StickyWhatsAppProps {
  onOpenModal: () => void;
}

export const StickyWhatsApp: React.FC<StickyWhatsAppProps> = ({ onOpenModal }) => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Appear after user scrolls past 300px (hero exploration)
      if (window.scrollY > 320 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible) return null;

  const handleWhatsAppClick = () => {
    trackAnalyticsEvent('clique_whatsapp_sticky', { source: 'floating_bar' });
  };

  return (
    <aside 
      aria-label="Atendimento VIP WhatsApp"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-5 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="relative bg-[#071712]/95 backdrop-blur-xl border border-[#d4af37]/35 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-2xl shadow-black/80 flex items-center gap-3">
        
        {/* Dismiss Button */}
        <button
          onClick={() => setDismissed(true)}
          className="absolute -top-2 -right-1.5 bg-[#122820] border border-white/20 text-white/70 hover:text-white rounded-full p-1 shadow-md hover:scale-105 transition-transform"
          aria-label="Fechar notificação"
        >
          <X className="w-3 h-3" />
        </button>

        {/* Pulse icon & info */}
        <div className="flex items-center gap-2.5">
          <div className="relative flex-shrink-0">
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00a86b] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00a86b]"></span>
            </span>
            <div className="w-9 h-9 rounded-full bg-[#0d2d22] border border-[#00a86b]/40 flex items-center justify-center text-[#25D366]">
              <MessageCircle className="w-4.5 h-4.5 fill-current text-[#25D366]" />
            </div>
          </div>

          <div className="flex flex-col pr-1">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-white uppercase tracking-wider">Consultor MIDORI</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
            </div>
            <p className="text-[10px] text-white/60 line-clamp-1">Famílias Fundadoras • Resposta Imediata</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center flex-shrink-0">
          <a
            href={getWhatsAppLink("Quero falar com o consultor MIDORI.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex items-center gap-1 bg-[#00a86b] hover:bg-[#0bbd7b] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md shadow-[#00a86b]/30 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Falar Agora</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </aside>
  );
};
