import React from 'react';
import { 
  Hammer, 
  Sofa, 
  Wrench, 
  Sparkles, 
  Waves, 
  Trees, 
  ShieldAlert, 
  FileCog, 
  DollarSign,
  AlertCircle
} from 'lucide-react';

export const PainSection: React.FC = () => {
  const painItems = [
    { label: "CONSTRUÇÃO", icon: Hammer },
    { label: "MOBÍLIA", icon: Sofa },
    { label: "MANUTENÇÃO", icon: Wrench },
    { label: "LIMPEZA", icon: Sparkles },
    { label: "PISCINA", icon: Waves },
    { label: "JARDIM", icon: Trees },
    { label: "SEGURANÇA", icon: ShieldAlert },
    { label: "GESTÃO", icon: FileCog },
    { label: "CUSTOS", icon: DollarSign }
  ];

  return (
    <section id="dor" className="py-16 sm:py-24 bg-[#091510] relative text-[#ede7dc] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/20 text-red-300 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
          <AlertCircle className="w-3.5 h-3.5 text-red-400" />
          <span>O Dilema da Segunda Residência</span>
        </div>

        {/* Headline */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight max-w-4xl mx-auto mb-5">
          “Você realmente precisa comprar uma casa inteira para aproveitar algumas semanas por ano?”
        </h2>

        {/* Copy curta */}
        <p className="text-base sm:text-xl text-[#ede7dc]/80 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Ter uma segunda residência parece um sonho até você assumir sozinho tudo que existe por trás dela.
        </p>

        {/* Composição visual compacta dos 9 pontos */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-2 sm:gap-3 max-w-4xl mx-auto mb-10">
          {painItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-[#06120d]/80 border border-white/8 hover:border-red-500/30 transition-all group"
              >
                <div className="p-2 rounded-md bg-red-500/10 text-red-400 group-hover:bg-red-500/20 transition-colors mb-1.5">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-white/80 font-medium text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Pergunta em destaque */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/25 via-[#06120d] to-red-950/25 border border-red-500/20 max-w-2xl mx-auto">
          <p className="text-lg sm:text-2xl font-serif-luxury italic text-[#f3e7d3]">
            “Quantos dias por ano você realmente usaria tudo isso?”
          </p>
        </div>

      </div>
    </section>
  );
};
