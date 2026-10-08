import React from 'react';
import { 
  Calendar, 
  KeyRound, 
  LineChart, 
  ClipboardCheck, 
  ShieldCheck, 
  Bot, 
  HardHat, 
  Users, 
  ChevronRight,
  Smartphone,
  Sparkles,
  Bell,
  Building2,
  Home as HomeIcon,
  Layers,
  ChevronDown,
  Plus,
  BarChart3,
  CalendarDays,
  Coins,
  AlertCircle,
  Wrench,
  DoorOpen,
  LayoutDashboard,
  MoreHorizontal,
  TrendingUp
} from 'lucide-react';
import { MidoriLogo } from '../components/MidoriLogo';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';

export const TechManagementSection: React.FC = () => {
  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_gestao_tecnologia', { section: 'tecnologia_gestao' });
  };

  const pillars = [
    {
      icon: Calendar,
      category: "RESERVAS",
      title: "Agenda & Disponibilidade",
      desc: "Consulte períodos, disponibilidade e organização das estadias em poucos toques."
    },
    {
      icon: KeyRound,
      category: "CHECK-IN",
      title: "Entrada Digital",
      desc: "Uma jornada mais simples desde a chegada, com organização e acesso digital."
    },
    {
      icon: LineChart,
      category: "FINANCEIRO",
      title: "Custos & Relatórios",
      desc: "Acompanhe despesas operacionais e informações financeiras de forma organizada e transparente."
    },
    {
      icon: ClipboardCheck,
      category: "INVENTÁRIO",
      title: "Controle Operacional",
      desc: "Checklists e rastreabilidade dos itens e da estrutura do empreendimento."
    },
    {
      icon: ShieldCheck,
      category: "OPERAÇÃO",
      title: "Gestão do MIDORI",
      desc: "Manutenção, organização e operação centralizadas para reduzir a preocupação do cotista."
    },
    {
      icon: Bot,
      category: "IA 24H",
      title: "Atendimento Contínuo",
      desc: "Apoio digital para dúvidas e informações operacionais sempre que necessário."
    }
  ];

  return (
    <section id="gestao" className="py-16 sm:py-24 bg-[#050f0c] text-[#ede7dc] relative overflow-hidden border-t border-b border-white/5">
      {/* Glow de fundo sutil */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00a86b]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Transição Elegante Conectada à Precificação */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00a86b]/15 border border-[#00a86b]/30 text-[#00a86b] text-[11px] uppercase tracking-[0.22em] font-mono font-bold mb-3">
            <span>E DEPOIS DA AQUISIÇÃO?</span>
          </div>
          <p className="text-sm sm:text-base font-serif-luxury italic text-[#f4efe8]/90 font-light">
            “Você não recebe apenas acesso ao empreendimento. <br className="hidden sm:inline" />
            Recebe uma operação preparada para cuidar da experiência.”
          </p>
        </div>

        {/* Header Principal da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-white leading-tight mb-2 tracking-tight">
            VOCÊ VIVE. <br />
            <span className="gold-gradient-text italic font-normal">
              A OPERAÇÃO CUIDA DO RESTANTE.
            </span>
          </h2>

          <p className="text-base sm:text-xl font-serif-luxury text-[#f7d486] italic mt-2 mb-3">
            “Seu resort na palma da mão.”
          </p>

          <p className="text-xs sm:text-sm text-white/75 font-light max-w-2xl mx-auto leading-relaxed">
            Gestão digital completa para acompanhar reservas, operação, custos e experiência do MIDORI em um único ambiente.
          </p>

          <p className="text-[11px] sm:text-xs text-[#00a86b] font-mono uppercase tracking-widest mt-3 font-semibold">
            Mais tecnologia. Mais transparência. Menos burocracia.
          </p>
        </div>

        {/* Composição Principal: Mockup Smartphone + 6 Pilares */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-14">
          
          {/* LADO ESQUERDO: Mockup Visual Oficial do App Mobile MIDORI (Sistema Oficial) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-1">
            <div className="w-full max-w-[340px] sm:max-w-[360px] rounded-[42px] p-3 bg-gradient-to-b from-[#18362b] via-[#0b1f18] to-[#040d09] border-2 border-[#d4af37]/40 shadow-2xl shadow-black/90 relative">
              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-20 flex items-center justify-end px-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
              </div>

              {/* Moldura / Tela do Smartphone */}
              <div className="rounded-[34px] bg-[#03150e] border border-white/10 text-[#ede7dc] flex flex-col justify-between h-[670px] relative overflow-hidden select-none font-sans">
                
                {/* CONTEÚDO COM SCROLL SUAVE DENTRO DA TELA */}
                <div className="p-4 pt-7 overflow-y-auto no-scrollbar space-y-3.5">
                  
                  {/* TOPO: Logo MIDORI + Notificação + Avatar LF */}
                  <div className="flex items-center justify-between pb-1">
                    <div className="flex items-center gap-2">
                      <MidoriLogo size="xs" />
                      <div className="border-l border-white/10 pl-2">
                        <div className="text-[7.5px] font-mono tracking-widest text-white/55 uppercase">
                          PROPRIEDADES FRACIONADAS
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="relative p-1.5 rounded-full bg-white/5 border border-white/10 text-white/80">
                        <Bell className="w-4 h-4" />
                        <span className="absolute 1.5 top-1 right-1 w-1.5 h-1.5 bg-[#f3cb69] rounded-full" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0a3826] border border-[#00a86b]/40 text-[#5eead4] flex items-center justify-center font-bold text-xs tracking-wider font-mono shadow-inner">
                        LF
                      </div>
                    </div>
                  </div>

                  {/* SELETORES: 3 Barras Selecionáveis (Midori, Condomínio, Empreendimento) */}
                  <div className="space-y-1.5">
                    {/* Seletor 1: Midori */}
                    <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#092218] border border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-white/90">
                        <Building2 className="w-3.5 h-3.5 text-[#00a86b]" />
                        <span className="font-medium text-[11px]">Midori</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-white/50" />
                    </div>

                    {/* Seletor 2: Condomínio Midori Asaat One */}
                    <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-[#092218] border border-white/10 text-xs">
                      <div className="flex items-center gap-2">
                        <HomeIcon className="w-3.5 h-3.5 text-[#00a86b]" />
                        <div>
                          <div className="text-[8px] uppercase tracking-wider text-white/45 font-mono">Condomínio</div>
                          <div className="font-medium text-[11px] text-white leading-tight">Midori Asaat One</div>
                        </div>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-white/50" />
                    </div>

                    {/* Seletor 3: Empreendimento */}
                    <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#092218] border border-white/10 text-xs">
                      <div className="flex items-center gap-2 text-white/90">
                        <Layers className="w-3.5 h-3.5 text-[#00a86b]" />
                        <span className="font-medium text-[11px]">Empreendimento</span>
                      </div>
                      <ChevronDown className="w-3.5 h-3.5 text-white/50" />
                    </div>
                  </div>

                  {/* SAUDAÇÃO & BOTÃO NOVA RESERVA */}
                  <div className="pt-1">
                    <div className="text-[8.5px] uppercase tracking-[0.2em] font-mono text-[#d4af37] font-semibold">
                      SUPER ADMINISTRADOR
                    </div>
                    <div className="flex items-start justify-between gap-2 mt-0.5">
                      <div>
                        <h4 className="text-lg font-serif-luxury text-white font-normal leading-tight">
                          Olá, Luiz Fernando
                        </h4>
                        <p className="text-[9.5px] text-white/65 font-light leading-snug mt-1 max-w-[170px]">
                          Aqui está o panorama em tempo real da gestão de propriedades Midori.
                        </p>
                      </div>

                      <a
                        href={getWhatsAppLink("Vim pela seção Tecnologia & Gestão.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1.5 rounded-lg bg-[#005a39] border border-[#00a86b]/40 text-white flex items-center gap-1 text-[10px] font-semibold shrink-0 shadow-md hover:bg-[#007047] transition-colors cursor-pointer"
                      >
                        <Plus className="w-3 h-3 text-[#5eead4]" />
                        <span>Nova Reserva</span>
                      </a>
                    </div>
                  </div>

                  {/* DASHBOARD EM 2 COLUNAS (Estilo Cards Oficiais Brancos com Borda Lateral) */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[#1a202c]">
                    
                    {/* Card 1: Taxa de Ocupação */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#00a86b] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <BarChart3 className="w-3 h-3 text-[#00a86b]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          TAXA DE OCUPAÇÃO
                        </span>
                      </div>
                      <div className="text-xl font-bold font-sans text-slate-900 leading-tight">
                        56%
                      </div>
                      <div className="mt-1 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-emerald-100/90 text-emerald-800 text-[8px] font-bold w-fit">
                        <TrendingUp className="w-2.5 h-2.5" />
                        <span>+2,4% vs mês anterior</span>
                      </div>
                    </div>

                    {/* Card 2: Reservas Futuras */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#2563eb] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CalendarDays className="w-3 h-3 text-[#2563eb]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          RESERVAS FUTURAS
                        </span>
                      </div>
                      <div className="text-xl font-bold font-sans text-slate-900 leading-tight">
                        7
                      </div>
                      <div className="text-[8px] text-slate-500 mt-1 font-light">
                        Confirmadas para temporada
                      </div>
                    </div>

                    {/* Card 3: Saldo a Receber */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#9333ea] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Coins className="w-3 h-3 text-[#9333ea]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          SALDO A RECEBER
                        </span>
                      </div>
                      <div className="text-base font-bold font-sans text-slate-900 leading-tight">
                        R$ 0,00
                      </div>
                      <div className="h-3.5" />
                    </div>

                    {/* Card 4: Inadimplência */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#f97316] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <AlertCircle className="w-3 h-3 text-[#f97316]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          INADIMPLÊNCIA
                        </span>
                      </div>
                      <div className="text-base font-bold font-sans text-slate-900 leading-tight">
                        R$ 0,00
                      </div>
                      <div className="h-3.5" />
                    </div>

                    {/* Card 5: O.S. Abertas */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#e11d48] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <Wrench className="w-3 h-3 text-[#e11d48]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          O.S. ABERTAS
                        </span>
                      </div>
                      <div className="text-xl font-bold font-sans text-slate-900 leading-tight">
                        1
                      </div>
                      <div className="text-[8px] text-slate-500 mt-1 font-light">
                        Aguardando execução
                      </div>
                    </div>

                    {/* Card 6: Unidades Disponíveis */}
                    <div className="p-2.5 rounded-xl bg-[#fdfdfd] border-l-4 border-l-[#059669] shadow-md flex flex-col justify-between">
                      <div className="flex items-center gap-1.5 mb-1">
                        <DoorOpen className="w-3 h-3 text-[#059669]" />
                        <span className="text-[7.5px] uppercase font-mono font-bold tracking-wider text-slate-500">
                          UNIDADES DISPONÍVEIS
                        </span>
                      </div>
                      <div className="text-xl font-bold font-sans text-slate-900 leading-tight">
                        9
                      </div>
                      <div className="text-[8px] text-slate-500 mt-1 font-light">
                        De um total de 9
                      </div>
                    </div>

                  </div>

                  {/* CARD FINAL: Midori Asaat One (Condomínio selecionado) */}
                  <div className="p-2.5 rounded-xl bg-[#fdfdfd] text-[#1a202c] shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-slate-900 leading-tight">
                          Midori Asaat One
                        </div>
                        <div className="text-[8.5px] text-slate-500 font-light">
                          Condomínio selecionado
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </div>

                </div>

                {/* MENU INFERIOR MOBILE: Dashboard, Reservas, Financeiro, Mais */}
                <div className="px-3 py-2.5 bg-[#02110b] border-t border-white/10 flex items-center justify-around text-[9px] font-sans">
                  <div className="text-[#f3cb69] font-bold flex flex-col items-center gap-0.5">
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Dashboard</span>
                  </div>
                  <div className="text-white/60 hover:text-white flex flex-col items-center gap-0.5 cursor-default transition-colors">
                    <CalendarDays className="w-4 h-4" />
                    <span>Reservas</span>
                  </div>
                  <div className="text-white/60 hover:text-white flex flex-col items-center gap-0.5 cursor-default transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span>Financeiro</span>
                  </div>
                  <div className="text-white/60 hover:text-white flex flex-col items-center gap-0.5 cursor-default transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                    <span>Mais</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* LADO DIREITO: 6 Pilares Principais (Cards Compactos com Ícones Elegantes) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 order-2 lg:order-2">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-4 sm:p-4.5 rounded-xl bg-[#081a13] border border-white/10 hover:border-[#00a86b]/40 transition-all flex flex-col justify-between group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#00a86b] font-bold">
                        {item.category}
                      </span>
                      <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b] group-hover:bg-[#00a86b]/25 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base font-serif-luxury text-white font-medium mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Segundo Nível de Valor: 2 Diferenciais Adicionais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          
          <div className="p-4 sm:p-5 rounded-xl bg-[#071812] border border-[#d4af37]/25 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f7d486] shrink-0 mt-0.5">
              <HardHat className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-[#f7d486] mb-1">
                TRANSPARÊNCIA NA OBRA
              </h4>
              <p className="text-xs text-white/75 font-light leading-relaxed">
                Acompanhamento da evolução do projeto e da construção por meio do sistema de gestão da obra em tempo real, fase por fase.
              </p>
            </div>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[#071812] border border-[#d4af37]/25 flex items-start gap-3">
            <div className="p-2 rounded-lg bg-[#d4af37]/15 text-[#f7d486] shrink-0 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-[#f7d486] mb-1">
                REDE SOCIAL EXCLUSIVA
              </h4>
              <p className="text-xs text-white/75 font-light leading-relaxed">
                Um espaço privado para conexão entre membros, experiências, eventos e relacionamento dentro da comunidade MIDORI.
              </p>
            </div>
          </div>

        </div>

        {/* Copy de Impacto Central */}
        <div className="text-center max-w-2xl mx-auto mb-10 pt-4 border-t border-white/10">
          <p className="text-base sm:text-xl font-serif-luxury italic text-[#f7d486]">
            “Controle sem burocracia. Transparência sem preocupação.”
          </p>
        </div>

        {/* CTA Único Direcionado ao WhatsApp */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink("Vim pela seção Tecnologia & Gestão.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-8 py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Conhecer Como Funciona a Gestão MIDORI</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
