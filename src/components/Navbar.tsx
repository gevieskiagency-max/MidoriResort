import React, { useState, useEffect } from 'react';
import { MidoriLogo } from './MidoriLogo';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchorId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleWhatsAppClick = () => {
    trackAnalyticsEvent('clique_whatsapp_navbar', { origin: 'navbar' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#06140f]/95 backdrop-blur-xl border-b border-[#d4af37]/20 py-3 shadow-2xl shadow-black/50' 
          : 'bg-[#06140f]/80 backdrop-blur-md border-b border-white/[0.08] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 xl:gap-6">
          
          {/* Logo Brand */}
          <a 
            href="#" 
            className="flex items-center shrink-0 group cursor-pointer focus:outline-none"
            aria-label="MIDORI Private Club - Início"
          >
            <MidoriLogo variant="horizontal" size="sm" showSubtitle={true} colorMode="green" />
          </a>

          {/* Desktop Nav Links - Streamlined strictly to the 7 core blocks */}
          <nav className="hidden lg:flex items-center gap-2.5 xl:gap-5 2xl:gap-7 text-[11px] xl:text-[12px] uppercase tracking-[0.12em] xl:tracking-[0.16em] font-medium text-[#e4ded3]/85">
            <button 
              onClick={() => handleNavClick('riviera')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>A Riviera</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('dor')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>O Contraste</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('virada')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>A Virada</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('empreendimento')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>O Midori</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('comparativo')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>Comparativo</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('oferta')}
              className="relative py-1.5 whitespace-nowrap text-[#d4af37] font-semibold hover:text-[#f5dc8c] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>36 Famílias</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('aquisicao')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>Aquisição</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
            <button 
              onClick={() => handleNavClick('faq')}
              className="relative py-1.5 whitespace-nowrap hover:text-[#d4af37] transition-colors cursor-pointer focus:outline-none group/link"
            >
              <span>FAQ</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover/link:w-full" />
            </button>
          </nav>

          {/* Actions: Founder Badge & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="hidden xl:inline-flex items-center gap-2 whitespace-nowrap text-[11px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/10 px-3.5 py-2 rounded-full border border-[#d4af37]/25 font-medium leading-none shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0 animate-pulse" />
              <span className="whitespace-nowrap">Apenas 36 Famílias</span>
            </div>

            <a
              href={getWhatsAppLink("Vim pela Landing Page do MIDORI e quero conhecer o projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xs uppercase tracking-[0.14em] font-semibold bg-[#00a86b] hover:bg-[#0bbd7b] text-white px-4 py-2.5 rounded-md transition-all duration-300 shadow-lg shadow-[#00a86b]/20 hover:shadow-[#00a86b]/40 cursor-pointer shrink-0 leading-none"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Atendimento VIP</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden space-x-2">
            <a
              href={getWhatsAppLink("Vim pela Landing Page do MIDORI e quero conhecer o projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="p-2 text-[#00a86b] hover:text-white transition-colors"
              aria-label="Falar no WhatsApp"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#f4efe6] hover:text-[#d4af37] transition-colors focus:outline-none"
              aria-label="Alternar menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07130e]/98 backdrop-blur-2xl border-b border-[#d4af37]/20 px-6 py-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
            <MidoriLogo variant="horizontal" size="sm" showSubtitle={true} colorMode="green" />
            <span className="text-[10px] text-[#d4af37] tracking-widest font-semibold uppercase bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20">
              36 Famílias
            </span>
          </div>

          <div className="flex flex-col space-y-4 text-sm font-medium uppercase tracking-[0.18em] text-[#ede7dc]">
            <button
              onClick={() => handleNavClick('riviera')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              1. A Riviera de Santa Cristina
            </button>
            <button
              onClick={() => handleNavClick('dor')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              2. O Dilema da Segunda Residência
            </button>
            <button
              onClick={() => handleNavClick('virada')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              3. Compre Menos, Viva Muito Mais
            </button>
            <button
              onClick={() => handleNavClick('empreendimento')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              4. O Midori & Ecossistema de Lazer
            </button>
            <button
              onClick={() => handleNavClick('comparativo')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              5. Comparativo Conceitual
            </button>
            <button
              onClick={() => handleNavClick('oferta')}
              className="text-left py-2.5 text-[#d4af37] font-semibold border-b border-white/5"
            >
              6. 36 Famílias Fundadoras (20% OFF)
            </button>
            <button
              onClick={() => handleNavClick('aquisicao')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors border-b border-white/5"
            >
              7. Aquisição (Por Que Comprar Uma Cota?)
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-left py-2.5 hover:text-[#d4af37] transition-colors"
            >
              8. Perguntas Frequentes & Atendimento
            </button>
          </div>

          <div className="mt-8 pt-4">
            <a
              href={getWhatsAppLink("Vim pela Landing Page do MIDORI e quero conhecer o projeto.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full flex items-center justify-center space-x-2 py-3.5 bg-[#00a86b] text-white font-semibold uppercase tracking-[0.16em] text-xs rounded-sm shadow-xl shadow-[#00a86b]/20"
            >
              <Phone className="w-4 h-4" />
              <span>Solicitar Apresentação via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
