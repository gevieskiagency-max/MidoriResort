import React, { useState } from 'react';
import { Calendar, Clock, Check, Users, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { COTAS_CONFIG, getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

interface HowItWorksProps {
  onSelectCota?: (cotaId: 'cota-8' | 'cota-4') => void;
  onOpenModal: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onSelectCota, onOpenModal }) => {
  const [activeCota, setActiveCota] = useState<'cota-8' | 'cota-4'>('cota-8');

  const selectedCotaData = COTAS_CONFIG.find(c => c.id === activeCota) || COTAS_CONFIG[0];

  return (
    <section id="funcionamento" className="py-24 sm:py-32 bg-[#06140f] text-[#ede7dc] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00a86b]/15 border border-[#00a86b]/30 text-[#00a86b] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Modelo de Utilização</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “Uma propriedade desenhada para ser utilizada — <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">
              não apenas mantida.”
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/75 font-light max-w-2xl mx-auto">
            A estrutura do MIDORI foi matematicamente balanceada para 36 famílias fundadoras, garantindo que você aproveite todas as estações do ano com máxima tranquilidade.
          </p>
        </div>

        {/* The 6 Lofts Blueprint Structure */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#091f17] border border-[#d4af37]/30 mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#d4af37] font-semibold mb-3">
            <Shield className="w-4 h-4 text-[#00a86b]" />
            Configuração Oficial do Empreendimento
          </div>

          <div className="text-2xl sm:text-3xl font-serif-luxury text-white">
            6 Lofts Premium • 36 Famílias Fundadoras
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-3xl mx-auto text-left">
            <div 
              onClick={() => setActiveCota('cota-4')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                activeCota === 'cota-4' 
                  ? 'bg-[#102e23] border-[#d4af37] shadow-xl' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#d4af37] font-bold">3 Lofts Dedicados</span>
                <span className="text-xs bg-[#d4af37]/20 text-[#d4af37] px-2 py-0.5 rounded font-mono font-bold">12 Cotas Totais</span>
              </div>
              <h4 className="text-xl font-serif-luxury text-white mt-1">4 Famílias por Loft</h4>
              <p className="text-xs text-white/70 mt-1">12 semanas anuais (1 semana por mês) para cada família.</p>
            </div>

            <div 
              onClick={() => setActiveCota('cota-8')}
              className={`p-5 rounded-xl border cursor-pointer transition-all ${
                activeCota === 'cota-8' 
                  ? 'bg-[#102e23] border-[#00a86b] shadow-xl' 
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-[#00a86b] font-bold">3 Lofts Dedicados</span>
                <span className="text-xs bg-[#00a86b]/20 text-[#00a86b] px-2 py-0.5 rounded font-mono font-bold">24 Cotas Totais</span>
              </div>
              <h4 className="text-xl font-serif-luxury text-white mt-1">8 Famílias por Loft</h4>
              <p className="text-xs text-white/70 mt-1">6 semanas anuais (1 semana a cada 2 meses) para cada família.</p>
            </div>
          </div>
        </div>

        {/* Hospitality Window Protocol */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#081812] border border-white/10 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#d4af37] font-semibold flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Janela de Hospedagem & Governança
              </span>
              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white mt-1">
                Entrada Terça às 14h • Saída Segunda às 12h
              </h3>
              <p className="text-xs sm:text-sm text-white/70 font-light mt-1 max-w-xl">
                O intervalo de 26 horas entre a saída e a próxima chegada é rigorosamente reservado para manutenção preventiva, higienização hoteleira, reposição de itens e revisão dos equipamentos náuticos.
              </p>
            </div>

            <div className="bg-[#05110d] p-4 rounded-xl border border-white/10 text-center flex-shrink-0 w-full md:w-auto">
              <div className="text-xs text-white/50 uppercase tracking-wider font-mono">Regra de Equidade</div>
              <div className="text-sm font-semibold text-[#00a86b] mt-0.5">Sorteio & Priorização Justa</div>
              <p className="text-[11px] text-white/60 mt-1">Acesso garantido a feriados e alta temporada.</p>
            </div>

          </div>
        </div>

        {/* Selected Cota Detailed Breakdown */}
        <div className="p-8 rounded-2xl bg-[#0a1f18] border border-[#d4af37]/40 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="text-xs uppercase font-mono tracking-widest text-[#d4af37] font-bold">
                Modalidade Selecionada
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif-luxury text-white font-medium mt-1">
                {selectedCotaData.name} ({selectedCotaData.semanasPorAno} semanas/ano)
              </h4>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-white/60 block">Frequência de Estadia</span>
              <span className="text-lg font-serif-luxury text-[#00a86b] font-medium">
                {selectedCotaData.frequencia}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {selectedCotaData.beneficios.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#00a86b] flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-white/80 font-light">{b}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-[#06140f] border border-white/10 text-xs text-white/70 font-light italic mb-6">
            <strong className="text-white not-italic font-semibold">Perfil Ideal: </strong>
            {selectedCotaData.perfilIdeal}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
            <div>
              <span className="text-xs text-white/50 block">Investimento na Fase Fundadora:</span>
              <span className="text-2xl font-serif-luxury text-white font-bold">
                {selectedCotaData.investimentoFormatado}
              </span>
              <span className="text-xs text-[#d4af37] font-semibold ml-2">
                (Condição 20% OFF para Fundadores)
              </span>
            </div>

            <a
              href={getWhatsAppLink(
                activeCota === 'cota-8'
                  ? "Tenho interesse na Cota Loft de 8 Famílias, 6 semanas por ano."
                  : "Tenho interesse na Cota Loft de 4 Famílias, 12 semanas por ano."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                trackAnalyticsEvent('clique_whatsapp_cota_dinamica', { cota: activeCota });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00a86b] hover:bg-[#0bbd7b] text-white text-xs uppercase tracking-widest font-semibold rounded-sm shadow-xl shadow-[#00a86b]/20 transition-all cursor-pointer"
            >
              <span>Solicitar Disponibilidade Desta Cota</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
