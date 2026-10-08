import React from 'react';
import { ASSETS_STACK } from '../constants/brand';
import { IMAGES } from '../data/assets';
import { 
  Waves, 
  Anchor, 
  Ship, 
  Compass, 
  Zap, 
  Bike, 
  Sparkles, 
  Flame, 
  Armchair, 
  Trees, 
  Baby,
  Layers,
  ChevronRight
} from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface ValueStackProps {
  onOpenModal: () => void;
}

export const ValueStackSection: React.FC<ValueStackProps> = ({ onOpenModal }) => {
  // Mapping icons
  const iconMap: Record<string, any> = {
    Waves,
    Anchor,
    Ship,
    Compass,
    Zap,
    Bike,
    Sparkles,
    Flame,
    Armchair,
    Trees,
    Baby
  };

  const aquaticAssets = ASSETS_STACK.filter(a => a.category === 'aquatico');
  const mobilityAssets = ASSETS_STACK.filter(a => a.category === 'mobilidade');
  const structureAssets = ASSETS_STACK.filter(a => a.category === 'estrutura' || a.category === 'experiencia');

  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_ativos', { section: 'value_stack' });
  };

  return (
    <section id="ativos" className="py-24 sm:py-32 bg-[#06120d] text-[#ede7dc] relative overflow-hidden">
      
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00a86b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00a86b]/15 border border-[#00a86b]/30 text-[#00a86b] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Empilhamento de Valor & Acervo Exclusivo</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “Tudo isso também faz parte <br />
            <span className="gold-gradient-text italic font-normal">
              da sua experiência.”
            </span>
          </h2>

          {/* Slogan mandated by prompt */}
          <div className="mt-6 p-6 rounded-xl bg-[#091f17]/80 border border-[#d4af37]/30 max-w-3xl mx-auto shadow-xl">
            <p className="text-lg sm:text-xl md:text-2xl font-serif-luxury italic text-white leading-relaxed">
              “Você entra pela cota. <br className="hidden sm:inline" />
              <span className="text-[#d4af37] font-normal not-italic">
                Mas é tudo o que existe ao redor dela que transforma a experiência.”
              </span>
            </p>
          </div>

          <p className="mt-4 text-base sm:text-lg text-white/70 font-light max-w-2xl mx-auto">
            “Não é um loft com piscina. É um ecossistema criado para você chegar e viver.”
          </p>
        </div>

        {/* SECTION 1: NÁUTICA & REPRESA */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
            <div className="p-2 rounded-lg bg-[#00a86b]/20 text-[#00a86b]">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white">
                Acervo Náutico Integrado
              </h3>
              <p className="text-xs text-white/50">Prontos na marina para o uso exclusivo dos membros</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {aquaticAssets.map((asset) => {
              const Icon = iconMap[asset.icon] || Waves;
              return (
                <div 
                  key={asset.id}
                  className="p-6 rounded-xl bg-[#0a1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-[#00a86b]/15 text-[#00a86b] group-hover:bg-[#00a86b] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-[#d4af37] bg-white/5 px-2 py-0.5 rounded">
                        {asset.highlight}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif-luxury text-white font-medium mb-2">
                      {asset.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                      {asset.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-[#00a86b] font-medium flex items-center gap-1">
                    <span>Manutenção e guarda incluídas</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: MOBILIDADE ELÉTRICA INTELIGENTE */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
            <div className="p-2 rounded-lg bg-[#d4af37]/20 text-[#d4af37]">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white">
                Mobilidade Elétrica Privativa
              </h3>
              <p className="text-xs text-white/50">Liberdade silenciosa e ecológica dentro da Riviera</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mobilityAssets.map((asset) => {
              const Icon = iconMap[asset.icon] || Zap;
              return (
                <div 
                  key={asset.id}
                  className="p-6 sm:p-8 rounded-xl bg-[#0a1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-5 shadow-lg group"
                >
                  <div className="p-4 rounded-xl bg-[#d4af37]/15 text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#06140f] transition-colors flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#00a86b] font-bold">
                        {asset.highlight}
                      </span>
                    </div>
                    <h4 className="text-xl font-serif-luxury text-white font-medium mb-1">
                      {asset.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION 3: RESORT AMENITIES & CONVIVÊNCIA */}
        <div>
          <div className="flex items-center gap-3 mb-6 pb-2 border-b border-white/10">
            <div className="p-2 rounded-lg bg-white/10 text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white">
                Complexo Social & Contemplativo
              </h3>
              <p className="text-xs text-white/50">Ambientes de relaxamento desenhados com arquitetura boutique</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {structureAssets.map((asset) => {
              const Icon = iconMap[asset.icon] || Sparkles;
              return (
                <div 
                  key={asset.id}
                  className="p-6 rounded-xl bg-[#0a1a14] border border-white/10 hover:border-white/25 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2.5 rounded-lg bg-white/5 text-white/80 group-hover:text-[#d4af37] transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-[#d4af37]">
                        {asset.highlight}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif-luxury text-white font-medium mb-2">
                      {asset.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                      {asset.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA block */}
        <div className="mt-16 text-center">
          <a
            href={getWhatsAppLink("Vim pela seção de benefícios e ecossistema do cotista.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-semibold uppercase tracking-[0.16em] text-xs sm:text-sm rounded-sm shadow-xl shadow-[#00a86b]/20 hover:shadow-[#00a86b]/40 transition-all cursor-pointer"
          >
            <span>Quero Acessar Esse Ecossistema</span>
            <ChevronRight className="w-4 h-4" />
          </a>
          <p className="text-[11px] text-white/40 mt-3 tracking-wider">
            Sem custo de aquisição individual de embarcações, veículos ou piscina.
          </p>
        </div>

      </div>
    </section>
  );
};
