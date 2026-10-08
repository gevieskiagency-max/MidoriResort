import React, { useState } from 'react';
import { 
  Smartphone, 
  Calendar, 
  KeyRound, 
  PieChart, 
  ClipboardCheck, 
  Wrench, 
  HardHat, 
  Bot, 
  Users2,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<'agenda' | 'checkin' | 'financeiro' | 'ia'>('agenda');

  const appFeatures = [
    {
      id: 'agenda',
      title: "Agenda Multi-Unidades & Reservas",
      subtitle: "Calendário em tempo real",
      description: "Visualização rápida de períodos disponíveis, feriados, trocas de semanas e confirmação instantânea de estadia sem intermediários ou ligações demoradas.",
      icon: Calendar
    },
    {
      id: 'checkin',
      title: "Check-in Digital Fluido",
      subtitle: "Chegada sem burocracia",
      description: "Abertura inteligente, cadastro de hóspedes e autorização antecipada na portaria da Riviera direto pelo smartphone. Chegue e entre.",
      icon: KeyRound
    },
    {
      id: 'financeiro',
      title: "Prestação de Contas & Financeiro",
      subtitle: "Transparência radical",
      description: "Acesso a relatórios de despesas operacionais (R$ 300/mês médio), comprovantes, atas e inventário de reposição em formato digital auditável.",
      icon: PieChart
    },
    {
      id: 'ia',
      title: "Concierge com IA 24 Horas",
      subtitle: "Atendimento imediato",
      description: "Tire dúvidas sobre passeios na represa, regras náuticas, agendamento de diarista extra, cardápio do clube e suporte operacional a qualquer hora.",
      icon: Bot
    }
  ];

  return (
    <section id="tecnologia" className="py-24 sm:py-32 bg-[#06140f] text-[#ede7dc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00a86b]/15 border border-[#00a86b]/30 text-[#00a86b] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Tecnologia & Governança</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight">
            “Seu resort na palma da mão.”
          </h2>

          <p className="mt-2 text-xl sm:text-2xl font-serif-luxury text-[#d4af37] italic">
            Mais tecnologia. Mais transparência. Menos preocupação.
          </p>

          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/75 font-light max-w-2xl mx-auto">
            Aplicativo exclusivo do proprietário. Desenvolvido para transformar toda a governança do MIDORI em uma experiência simples, moderna e totalmente transparente.
          </p>
        </div>

        {/* Feature Grid & Interactive App Mockup Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Feature Selectors */}
          <div className="lg:col-span-6 space-y-4">
            {appFeatures.map((feat) => {
              const Icon = feat.icon;
              const isActive = activeScreen === feat.id;
              return (
                <div
                  key={feat.id}
                  onClick={() => setActiveScreen(feat.id as any)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0c281e] border-[#d4af37] shadow-2xl translate-x-1 sm:translate-x-2'
                      : 'bg-[#081812]/70 border-white/8 hover:border-white/20 hover:bg-[#0a1f18]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                      isActive ? 'bg-[#00a86b] text-white' : 'bg-white/5 text-white/50'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="text-[11px] font-mono uppercase tracking-widest text-[#d4af37] font-semibold">
                        {feat.subtitle}
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif-luxury text-white font-medium mt-0.5">
                        {feat.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 font-light mt-1.5 leading-relaxed">
                        {feat.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Extra tags */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/5">
                <HardHat className="w-3.5 h-3.5 text-[#d4af37]" /> Câmeras da Obra
              </span>
              <span className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/5">
                <Users2 className="w-3.5 h-3.5 text-[#00a86b]" /> Rede de Membros
              </span>
              <span className="flex items-center gap-1.5 p-2 rounded-lg bg-white/5 border border-white/5">
                <ClipboardCheck className="w-3.5 h-3.5 text-[#d4af37]" /> Inventário Digital
              </span>
            </div>
          </div>

          {/* Right Column: Simulated High-End App Interface */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-sm rounded-[40px] p-3 bg-gradient-to-b from-[#1c382e] via-[#091f17] to-black border-4 border-[#d4af37]/30 shadow-2xl shadow-black">
              
              {/* Phone screen bezel */}
              <div className="bg-[#05110d] rounded-[32px] overflow-hidden border border-white/10 p-5 text-white flex flex-col justify-between min-h-[580px]">
                
                {/* Top status & App Header */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-white/50 mb-3 font-mono">
                    <span>09:41</span>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#00a86b]" />
                      <span>5G</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div>
                      <span className="text-[10px] text-[#d4af37] uppercase font-mono tracking-widest block">
                        MIDORI PRIVATE APP
                      </span>
                      <span className="text-sm font-semibold text-white">
                        Olá, Membro Fundador
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#0d2e22] border border-[#d4af37]/40 flex items-center justify-center text-xs font-serif-luxury text-[#d4af37]">
                      M
                    </div>
                  </div>
                </div>

                {/* Dynamic Content based on activeScreen */}
                <div className="py-4 space-y-3 my-auto">
                  {activeScreen === 'agenda' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3.5 rounded-xl bg-[#0d261d] border border-[#00a86b]/40">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-[#00a86b] font-semibold">Próxima Hospedagem</span>
                          <span className="font-mono text-[#d4af37]">Loft 02</span>
                        </div>
                        <div className="text-base font-serif-luxury font-bold">
                          14 a 20 de Outubro
                        </div>
                        <p className="text-[11px] text-white/60 mt-1">
                          Entrada: Terça 14h • Saída: Segunda 12h
                        </p>
                      </div>

                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                        <div className="font-semibold text-white/90 mb-1">Disponibilidade Anual</div>
                        <div className="flex items-center justify-between text-[11px] text-white/60">
                          <span>Semanas Utilizadas: 2</span>
                          <span className="text-[#d4af37] font-bold">4 Restantes</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
                          <div className="w-1/3 h-full bg-[#00a86b]" />
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'checkin' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-4 rounded-xl bg-[#0d261d] border border-[#d4af37]/40 text-center">
                        <KeyRound className="w-8 h-8 text-[#d4af37] mx-auto mb-2 animate-pulse" />
                        <div className="text-sm font-bold">Chave Digital Ativa</div>
                        <div className="text-xs text-white/60 mt-1">Loft Climatizado a 22°C</div>
                        <div className="text-[10px] text-[#00a86b] mt-2 font-mono">PORTARIA RIVIERA: LIBERADA</div>
                      </div>
                      <div className="text-[11px] text-center text-white/50">
                        Acesso por aproximação ou QR Code seguro.
                      </div>
                    </div>
                  )}

                  {activeScreen === 'financeiro' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3.5 rounded-xl bg-[#0a2018] border border-white/15">
                        <div className="text-xs text-white/50">Custo Operacional Mensal</div>
                        <div className="text-2xl font-serif-luxury text-[#00a86b] font-bold">R$ 300,00</div>
                        <div className="text-[10px] text-white/60 mt-1">Status: Regularizado em dia</div>
                      </div>
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                        <div className="flex justify-between text-white/70">
                          <span>Piscina & Químicos</span>
                          <span>Incluso</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Manutenção Náutica</span>
                          <span>Incluso</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Segurança & Portaria</span>
                          <span>Incluso</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeScreen === 'ia' && (
                    <div className="space-y-3 animate-in fade-in duration-300">
                      <div className="p-3.5 rounded-xl bg-[#0d281e] border border-[#00a86b]/40">
                        <div className="flex items-center gap-2 text-xs text-[#00a86b] font-bold mb-1">
                          <Bot className="w-4 h-4" /> Concierge IA MIDORI
                        </div>
                        <p className="text-xs text-white/90 italic">
                          “Olá! As condições na Represa Jurumirim hoje estão perfeitas para Jet Ski. O vento está a 8 km/h e a temperatura da água é de 24°C. Deseja abastecer os equipamentos?”
                        </p>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-white/70 text-center">
                        Atendimento com resposta instantânea em tempo real.
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom App Navigation Simulation */}
                <div className="pt-3 border-t border-white/10 grid grid-cols-4 text-center text-[9px] text-white/50 font-mono">
                  <div className="text-[#00a86b]">INÍCIO</div>
                  <div>RESERVAS</div>
                  <div>SERVIÇOS</div>
                  <div>PERFIL</div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
