import React from 'react';
import { Users, HeartHandshake, TrendingUp, Sparkles, Shield } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  return (
    <section id="comunidade" className="py-24 sm:py-32 bg-[#081712] text-[#ede7dc] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Members Club</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “Não queremos milhares de proprietários. <br />
            <span className="gold-gradient-text italic font-normal">
              Queremos construir a primeira geração MIDORI.”
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/75 font-light max-w-2xl mx-auto">
            Mais do que cotas imobiliárias, estamos reunindo um seleto grupo de 36 famílias que compartilham os mesmos valores de privacidade, respeito ao tempo e qualidade de vida.
          </p>
        </div>

        {/* 3 Pillars of Community */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          <div className="p-8 rounded-2xl bg-[#0a1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#00a86b]/15 text-[#00a86b] mx-auto flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#00a86b] font-bold block mb-1">
                MEMÓRIAS AFETIVAS
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white font-medium mb-3">
                Descansar em Família
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Um santuário onde seus filhos e netos crescem em contato com a água doce, esportes náuticos, ar puro e segurança real, longe do ruído dos grandes centros.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#d4af37]">
              Ambiente 100% familiar
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/15 text-[#d4af37] mx-auto flex items-center justify-center mb-6">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-bold block mb-1">
                CONVIVÊNCIA NOBRE
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white font-medium mb-3">
                Conectar com Pessoas
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Estar entre pares com a mesma busca por excelência e tranquilidade. Um clube onde vizinhos se tornam amigos de navegação e parcerias de vida.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#00a86b]">
              Convivência harmoniosa
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-[#0a1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 text-center flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#00a86b]/15 text-[#00a86b] mx-auto flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#00a86b] font-bold block mb-1">
                NETWORKING ORGÂNICO
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white font-medium mb-3">
                Crescer em Rede
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                Empresários, médicos, produtores rurais e investidores reunidos em um ambiente propício para conversas leves que frequentemente geram novos negócios.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-[#d4af37]">
              Relações de alto nível
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
