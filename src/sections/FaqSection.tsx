import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqItems: { q: string; a: React.ReactNode }[] = [
    {
      q: "1. O que estou adquirindo?",
      a: (
        <div className="space-y-2.5">
          <p>
            Você adquire uma cota de uso vitalício de um loft de alto padrão, totalmente mobiliado e pronto para receber você, sua família ou seus convidados.
          </p>
          <p>
            Além do loft, você terá acesso à estrutura de lazer e experiências integradas ao Iate Clube Riviera, com padrão inspirado em resorts de Orlando e Miami.
          </p>
          <p className="text-white/90">
            Uma combinação de conforto, praticidade e experiência de resort em um único investimento.
          </p>
        </div>
      )
    },
    {
      q: "2. Como funciona o uso?",
      a: (
        <div className="space-y-2.5">
          <p>
            Cada cota garante ao cotista 1 semana de uso por mês ou 1 semana a cada 2 meses, de forma vitalícia, conforme a modalidade contratada.
          </p>
          <p>
            Você poderá utilizar seu período com sua família e convidados, de acordo com a disponibilidade e as regras de sorteio de cada trimestre.
          </p>
          <p>
            Caso não utilize sua semana, poderá disponibilizá-la para troca com outros cotistas.
          </p>
          <p className="text-white/90">
            Mais liberdade para usar. Mais praticidade para administrar. Mais possibilidades para aproveitar seu patrimônio.
          </p>
        </div>
      )
    },
    {
      q: "3. Quem cuida da operação?",
      a: "A gestão profissional cuida de 100% da operação: limpeza padrão hoteleiro, manutenção de piscina, jardinagem, segurança e revisão dos equipamentos. Você não tem trabalho nem funcionários."
    },
    {
      q: "4. Como conheço os detalhes do projeto?",
      a: "Por se tratar de um grupo restrito a apenas 36 famílias fundadoras, o atendimento é individual e confidencial via WhatsApp, onde você recebe o memorial descritivo, plantas e tira dúvidas diretamente com o consultor."
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#050f0c] text-[#ede7dc] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header FAQ */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DÚVIDAS PRINCIPAIS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif-luxury text-white font-normal">
            Perguntas Frequentes
          </h2>
        </div>

        {/* 4 Perguntas Curtas */}
        <div className="space-y-3">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#081b14] border-[#d4af37]/50 shadow-xl'
                    : 'bg-[#06120d]/70 border-white/8 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-serif-luxury text-white font-medium">
                    {item.q}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-[#d4af37] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-sm sm:text-[15px] text-white/80 leading-relaxed border-t border-white/5 pt-3.5 font-light">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
