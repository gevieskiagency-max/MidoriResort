import React from 'react';
import { ShieldCheck, CalendarCheck, Hotel, ChevronRight } from 'lucide-react';
import { MidoriLogo } from '../components/MidoriLogo';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';
import { IMAGES } from '../data/assets';

export const TheTurnaroundSection: React.FC = () => {
  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_virada', { section: 'virada' });
  };

  return (
    <section id="virada" className="py-20 sm:py-28 bg-[#040e0a] relative overflow-hidden text-[#ede7dc]">
      {/* Imagem de Fundo Sofisticada: MIDORI ao entardecer / início da noite */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.turnaroundBg}
          alt="MIDORI Private Club ao entardecer"
          className="w-full h-full object-cover object-center transform scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Overlay cinematográfico sutil: preserva a atmosfera premium e iluminação dos lofts/piscina mantendo contraste absoluto para leitura */}
        <div className="absolute inset-0 bg-[#040e0a]/78" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040e0a] via-[#040e0a]/65 to-[#040e0a]" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Logo MIDORI Oficial */}
        <div className="flex justify-center mb-6">
          <MidoriLogo size="md" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury text-white font-normal leading-tight tracking-tight mb-3 drop-shadow-md">
          COMPRE MENOS. <br />
          <span className="gold-gradient-text italic font-normal">
            VIVA MUITO MAIS.
          </span>
        </h2>

        {/* Subheadline */}
        <div className="max-w-xl mx-auto mb-12">
          <p className="text-base sm:text-xl text-[#f3e7d3] font-serif-luxury italic drop-shadow-sm">
            “Você não compra apenas dias. <br className="hidden sm:inline" />
            Você participa da propriedade.”
          </p>
        </div>

        {/* 3 Pilares - Cards com acabamento premium e backdrop-blur */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto mb-12 text-left">
          
          {/* Pilar 1: Propriedade */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#061811]/85 backdrop-blur-md border border-white/12 hover:border-[#00a86b]/50 transition-all duration-300 shadow-2xl shadow-black/60 group">
            <div className="w-10 h-10 rounded-lg bg-[#00a86b]/20 border border-[#00a86b]/35 flex items-center justify-center text-[#5eead4] mb-4 group-hover:bg-[#00a86b]/30 transition-colors">
              <ShieldCheck className="w-5 h-5 text-[#00a86b]" />
            </div>
            <h3 className="text-lg font-serif-luxury text-white font-medium mb-2 tracking-wide">
              PROPRIEDADE
            </h3>
            <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed mb-2.5">
              Tem sua unidade exclusiva sem peso de ter uma casa de passeio e atendimento de hotelaria.
            </p>
            <p className="text-xs sm:text-sm text-[#5eead4] font-normal leading-relaxed">
              Podendo usufruir em outras regiões também.
            </p>
          </div>

          {/* Pilar 2: Uso Inteligente */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#061811]/85 backdrop-blur-md border border-white/12 hover:border-[#00a86b]/50 transition-all duration-300 shadow-2xl shadow-black/60 group">
            <div className="w-10 h-10 rounded-lg bg-[#00a86b]/20 border border-[#00a86b]/35 flex items-center justify-center text-[#5eead4] mb-4 group-hover:bg-[#00a86b]/30 transition-colors">
              <CalendarCheck className="w-5 h-5 text-[#00a86b]" />
            </div>
            <h3 className="text-lg font-serif-luxury text-white font-medium mb-2 tracking-wide">
              USO INTELIGENTE
            </h3>
            <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">
              Você escolhe a cota que mais se encaixa na sua vida, usar 1 semana por mês ou 1 semana a cada 2 meses.
            </p>
          </div>

          {/* Pilar 3: Gestão Profissional */}
          <div className="p-6 sm:p-7 rounded-2xl bg-[#061811]/85 backdrop-blur-md border border-white/12 hover:border-[#00a86b]/50 transition-all duration-300 shadow-2xl shadow-black/60 group">
            <div className="w-10 h-10 rounded-lg bg-[#00a86b]/20 border border-[#00a86b]/35 flex items-center justify-center text-[#5eead4] mb-4 group-hover:bg-[#00a86b]/30 transition-colors">
              <Hotel className="w-5 h-5 text-[#00a86b]" />
            </div>
            <h3 className="text-lg font-serif-luxury text-white font-medium mb-2 tracking-wide">
              GESTÃO PROFISSIONAL
            </h3>
            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Operação de hospitalidade completa que cuida da limpeza, piscina, jardins e equipamentos. Você apenas chega e desfruta.
            </p>
          </div>

        </div>

        {/* CTA 3: Depois da Virada */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink("Vim pela seção Compre Menos. Viva Muito Mais.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-8 py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Entender Como Funciona</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
