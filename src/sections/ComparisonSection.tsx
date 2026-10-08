import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const traditionalPoints = [
    "Você compra o terreno sozinho.",
    "Você constrói e gerencia a obra.",
    "Você equipa e decora tudo.",
    "Você mantém e faz os reparos.",
    "Você administra caseiro e diarista.",
    "Você paga sozinho todos os meses."
  ];

  const midoriPoints = [
    "Você chega com tudo pronto e impecável.",
    "Você usa o resort, piscina e equipamentos.",
    "Você vive momentos memoráveis em família.",
    "A operação profissional cuida de todo o restante."
  ];

  return (
    <section id="comparativo" className="py-16 sm:py-24 bg-[#081712] text-[#ede7dc] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#d4af37] block mb-3 font-semibold">
            COMPARAÇÃO CONCEITUAL
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight">
            “A diferença não está apenas no investimento. <br className="hidden sm:inline" />
            <span className="gold-gradient-text italic font-normal">
              Está em tudo que você deixa de carregar sozinho.”
            </span>
          </h2>
        </div>

        {/* 2 Colunas Conceituais Muito Visuais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          
          {/* Coluna 1: Tradicional */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#06120d] border border-red-500/25 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 text-red-300 text-xs uppercase font-mono tracking-wider font-bold mb-4">
                <X className="w-3.5 h-3.5 text-red-400" />
                <span>SEGUNDA RESIDÊNCIA TRADICIONAL</span>
              </div>

              <div className="space-y-3.5 my-4">
                {traditionalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-white/75 font-light leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/8 text-xs text-red-300/80 font-mono">
              O ônus e a dor de cabeça ficam 100% com você.
            </div>
          </div>

          {/* Coluna 2: MIDORI Private Club */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#0a261d] to-[#081e17] border-2 border-[#00a86b]/60 flex flex-col justify-between shadow-2xl relative">
            <div className="absolute -top-3 right-6 bg-[#00a86b] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full shadow-md">
              INTELIGÊNCIA
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a86b]/20 text-[#00a86b] text-xs uppercase font-mono tracking-wider font-bold mb-4">
                <Check className="w-3.5 h-3.5" />
                <span>MIDORI PRIVATE CLUB</span>
              </div>

              <div className="space-y-4 my-4">
                {midoriPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#00a86b]/20 text-[#00a86b] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base text-white font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#f7d486] font-mono">
              Hospitalidade e lazer pleno sem qualquer dor operacional.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
