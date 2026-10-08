import React from 'react';
import { ArrowLeftRight, Users, Gift, ShieldCheck, Sparkles } from 'lucide-react';

export const MidoriFlexSection: React.FC = () => {
  const flexFeatures = [
    {
      icon: ArrowLeftRight,
      action: "TROCAR",
      headline: "Permuta Interna Simplificada",
      description: "Surgiu uma reunião importante na sua semana de reserva? Negocie e troque suas datas com outros cotistas diretamente pelo aplicativo, garantindo que o resort sempre se ajuste à sua agenda profissional.",
      highlight: "Flexibilidade na palma da mão"
    },
    {
      icon: Gift,
      action: "CONVIDAR",
      headline: "Momentos com Quem Você Ama",
      description: "Compartilhe sua experiência de resort com pais, filhos, amigos e convidados especiais. Eles desfrutam de toda a estrutura do loft e da marina com a mesma hospitalidade que você recebe.",
      highlight: "Experiência compartilhada"
    },
    {
      icon: Users,
      action: "TRANSFERIR",
      headline: "Disponibilização Conforme as Regras",
      description: "Não vai utilizar seu período de hospedagem no mês? Você pode disponibilizar o período para outro membro credenciado da comunidade MIDORI, mantendo a propriedade ativa e sem desperdício de datas.",
      highlight: "Gestão inteligente de uso"
    }
  ];

  return (
    <section id="flex" className="py-24 sm:py-32 bg-[#081712] text-[#ede7dc] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sistema MIDORI FLEX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “Sua vida muda. <br />
            <span className="gold-gradient-text italic font-normal">
              Sua cota acompanha o ritmo dela.”
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/70 font-light max-w-2xl mx-auto">
            Mais liberdade sem abrir mão de organização, regras transparentes e previsibilidade.
          </p>
        </div>

        {/* 3 Flex Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {flexFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-[#0b1f18] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-[#00a86b]/15 text-[#00a86b] group-hover:bg-[#00a86b] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#d4af37] bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {item.highlight}
                    </span>
                  </div>

                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#00a86b] font-bold">
                    {item.action}
                  </span>
                  
                  <h3 className="text-xl font-serif-luxury text-white font-medium mt-1 mb-3">
                    {item.headline}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#d4af37]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Validado pelo regulamento oficial do clube</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="mt-14 p-6 rounded-xl bg-[#06140f] border border-[#00a86b]/30 text-center max-w-2xl mx-auto">
          <p className="text-sm font-serif-luxury text-white italic">
            “Liberdade sem burocracia, previsibilidade sem amarras.”
          </p>
        </div>

      </div>
    </section>
  );
};
