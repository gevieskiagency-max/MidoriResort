import React from 'react';
import { Sparkles, Check, ChevronRight } from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface OfferSectionProps {
  onOpenModal: (cotaId?: 'cota-8' | 'cota-4') => void;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ onOpenModal }) => {
  const handleOfferClick = (cotaName: string) => {
    trackAnalyticsEvent('clique_cta_oferta', { cota: cotaName });
  };

  return (
    <section id="oferta" className="py-16 sm:py-24 bg-[#06140f] text-[#ede7dc] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header da Oferta */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/35 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00a86b]" />
            <span>OPORTUNIDADE EXCLUSIVA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            36 FAMÍLIAS FUNDADORAS.
          </h2>

          <p className="mt-2 text-base sm:text-xl text-[#f7d486] font-serif-luxury italic">
            “A primeira geração MIDORI só acontece uma vez.”
          </p>
          <p className="mt-2 text-xs sm:text-sm text-white/70 font-light max-w-xl mx-auto">
            Depois de conhecer o ecossistema, escolha o formato de uso que melhor se encaixa na rotina da sua família.
          </p>
        </div>

        {/* Âncora de Valor Discreta e Elegante Acima dos Cards */}
        <div className="max-w-3xl mx-auto mb-10 text-center p-4 sm:p-5 rounded-xl bg-gradient-to-r from-transparent via-[#0a2319]/80 to-transparent border-y border-[#d4af37]/25">
          <p className="text-sm sm:text-base font-serif-luxury text-[#f4efe8] italic font-normal">
            “Sua cota é a porta de entrada para um ecossistema completo dentro da Riviera de Santa Cristina.”
          </p>
          <p className="text-[11px] sm:text-xs text-white/60 font-light mt-1">
            Loft, lazer, náutica, mobilidade, convivência e operação profissional em uma única experiência.
          </p>
        </div>

        {/* Frase de Conexão com a Rotina */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-serif-luxury text-[#e8c67c] italic tracking-wide">
            “Você não está escolhendo apenas quantas semanas vai usar. Está escolhendo quanto espaço o MIDORI terá na rotina da sua família.”
          </p>
        </div>

        {/* 2 Opções de Cotas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8 items-stretch">
          
          {/* CARD 1 — COTA 8 FAMÍLIAS */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#081a13] border border-white/12 hover:border-[#00a86b]/50 transition-all flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase font-mono tracking-wider text-[#00a86b] font-bold">
                  24 COTAS NO TOTAL
                </span>
                <span className="text-[10px] sm:text-[11px] bg-[#00a86b]/15 border border-[#00a86b]/35 text-[#5eead4] px-2 py-0.5 rounded font-mono font-semibold">
                  1 SEMANA A CADA 2 MESES
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium mb-1">
                Cota Loft 8 Famílias
              </h3>

              <div className="my-4 p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-white/70">FREQUÊNCIA:</span>
                  <span className="text-white font-semibold">1 semana a cada 2 meses</span>
                </div>
              </div>

              {/* Valor Percebido do Card 1 */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[11px] uppercase font-mono tracking-wider text-[#d4af37] font-semibold mb-2.5">
                  O QUE ESSA COTA CONECTA À SUA EXPERIÊNCIA:
                </div>
                <ul className="space-y-2 text-xs text-white/80 font-light">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00a86b] shrink-0 mt-0.5" />
                    <span>1 semana a cada 2 meses no MIDORI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00a86b] shrink-0 mt-0.5" />
                    <span>Acesso à estrutura completa do clube</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00a86b] shrink-0 mt-0.5" />
                    <span>Acesso aos ativos náuticos conforme regulamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00a86b] shrink-0 mt-0.5" />
                    <span>Mobilidade elétrica dentro da Riviera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#00a86b] shrink-0 mt-0.5" />
                    <span>Gestão profissional e operação organizada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={getWhatsAppLink("Tenho interesse na Cota Loft de 8 Famílias (1 semana a cada 2 meses).")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOfferClick('cota_8_familias')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm py-3.5 px-4 rounded-md shadow-lg shadow-[#00a86b]/25 transition-all cursor-pointer"
              >
                <span>Quero Avaliar a Cota (1 semana a cada 2 meses)</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* CARD 2 — COTA 4 FAMÍLIAS */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a261d] to-[#071912] border-2 border-[#d4af37]/70 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-[#d4af37] text-[#06140f] text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-md">
              MAIS TEMPO DE USO
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] uppercase font-mono tracking-wider text-[#d4af37] font-bold">
                  12 COTAS NO TOTAL
                </span>
                <span className="text-[10px] sm:text-[11px] bg-[#d4af37]/20 border border-[#d4af37]/40 text-[#f7d486] px-2 py-0.5 rounded font-mono font-bold">
                  1 SEMANA POR MÊS
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium mb-1">
                Cota Loft 4 Famílias
              </h3>

              <div className="my-4 p-4 rounded-xl bg-black/40 border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-white/70">FREQUÊNCIA:</span>
                  <span className="text-white font-semibold">1 semana por mês</span>
                </div>
              </div>

              {/* Valor Percebido do Card 2 */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-[11px] uppercase font-mono tracking-wider text-[#d4af37] font-semibold mb-2.5">
                  O QUE ESSA COTA CONECTA À SUA EXPERIÊNCIA:
                </div>
                <ul className="space-y-2 text-xs text-white/80 font-light">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>1 semana por mês no MIDORI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Maior frequência de uso ao longo do ano</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Acesso à estrutura completa do clube</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Acesso aos ativos náuticos e mobilidade conforme regulamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5" />
                    <span>Gestão profissional e operação organizada</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href={getWhatsAppLink("Tenho interesse na Cota Loft de 4 Famílias (1 semana por mês).")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleOfferClick('cota_4_familias')}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#d4af37] hover:bg-[#e0be4e] text-[#06140f] font-bold uppercase tracking-[0.14em] text-xs sm:text-sm py-3.5 px-4 rounded-md shadow-lg shadow-[#d4af37]/20 transition-all cursor-pointer"
              >
                <span>Quero Avaliar a Cota (1 semana por mês)</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Microcopy Abaixo dos Cards */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-white/60 font-light italic">
            “Condições, disponibilidade, regras de uso e detalhes contratuais são apresentados individualmente durante a apresentação privada.”
          </p>
        </div>

      </div>
    </section>
  );
};

