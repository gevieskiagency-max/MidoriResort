import React from 'react';
import { IMAGES } from '../data/assets';
import { Waves, Anchor, Trophy, Palmtree, ChevronRight } from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface RivieraSectionProps {
  onOpenModal: () => void;
}

export const RivieraSection: React.FC<RivieraSectionProps> = ({ onOpenModal }) => {
  const pillars = [
    {
      id: 'represa',
      title: "REPRESA JURUMIRIM",
      subtitle: "Águas límpidas & espelho infinito",
      description: "A maior represa de SP com águas calmas e límpidas para navegação e banho.",
      icon: Waves,
      image: IMAGES.sunsetLake
    },
    {
      id: 'marina',
      title: "IATE CLUBE / MARINA",
      subtitle: "A apenas 500m do MIDORI",
      description: "Estrutura náutica completa com piers, rampa privativa e apoio técnico.",
      icon: Anchor,
      image: IMAGES.rivieraMarina
    },
    {
      id: 'nautica',
      title: "NÁUTICA & LAZER",
      subtitle: "Jet ski, esportes e praias de água doce",
      description: "Condições perfeitas para passeios náuticos, wakeboard e relaxar na areia.",
      icon: Trophy,
      image: IMAGES.wakeboardAction
    },
    {
      id: 'familia',
      title: "FAMÍLIA / GASTRONOMIA / NATUREZA",
      subtitle: "Segurança 24h & alta gastronomia",
      description: "Restaurantes à beira da represa, quadras e contato autêntico com o verde.",
      icon: Palmtree,
      image: IMAGES.familyLifestyle
    }
  ];

  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_riviera', { section: 'riviera' });
  };

  return (
    <section id="riviera" className="py-16 sm:py-24 bg-[#06140f] text-[#ede7dc] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header enxuto e de alto impacto */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#d4af37] block mb-3 font-semibold">
            RIVIERA DE SANTA CRISTINA
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight">
            “O MIDORI começa onde muitos gostariam de passar seus melhores dias.”
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-[#ede7dc]/80 font-light">
            Dentro da Riviera de Santa Cristina, às margens da Represa Jurumirim.
          </p>
        </div>

        {/* 4 Pilares Visuais Fortes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 bg-[#081b14] flex flex-col shadow-lg"
              >
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b14] via-[#081b14]/40 to-transparent" />
                  <div className="absolute top-3 left-3 p-2 rounded-lg bg-black/60 backdrop-blur-md border border-white/15 text-[#00a86b]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-[#d4af37] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#d4af37]/90 mt-0.5 mb-2">
                      {pillar.subtitle}
                    </p>
                    <p className="text-xs text-white/70 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA 2: Depois da Riviera */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          <a
            href={getWhatsAppLink("Vim pela seção da Riviera de Santa Cristina.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-7 py-3.5 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Conhecer o MIDORI</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
