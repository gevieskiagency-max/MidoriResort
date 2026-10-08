import React, { useState } from 'react';
import { IMAGES } from '../data/assets';
import { 
  Waves, 
  Zap, 
  Bike, 
  Flame, 
  Armchair, 
  Trees, 
  Baby, 
  Compass, 
  Sparkles, 
  Home, 
  ChevronRight,
  BookOpen,
  Eye
} from 'lucide-react';
import { getWhatsAppLink, trackAnalyticsEvent } from '../constants/brand';
import { MidoriExperienceGalleryModal } from '../components/MidoriExperienceGalleryModal';

interface MidoriResortSectionProps {
  onOpenModal?: () => void;
}

export const MidoriResortSection: React.FC<MidoriResortSectionProps> = ({ onOpenModal }) => {
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('destino');

  const handleOpenGallery = (chapterId = 'destino') => {
    setSelectedChapterId(chapterId);
    setIsGalleryModalOpen(true);
    trackAnalyticsEvent('abrir_catalogo_midori', { chapter: chapterId });
  };

  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_ecossistema', { section: 'midori_stack' });
  };

  const experienceAssets = [
    { name: "Parceria Marina (Barcos)", icon: Waves },
    { name: "2 Motos Elétricas", icon: Zap },
    { name: "5 Patinetes Elétricos", icon: Bike },
    { name: "Canoas", icon: Compass },
    { name: "Stand Up Paddles", icon: Waves },
    { name: "Bote para 4 Pessoas", icon: Compass },
    { name: "Piscina Aquecida com SPA Integrado", icon: Sparkles },
    { name: "Espaço Gourmet", icon: Flame },
    { name: "Bangalôs", icon: Armchair },
    { name: "Lounge", icon: Armchair },
    { name: "Fire Pit (Lareira)", icon: Flame },
    { name: "Área Kids", icon: Baby },
    { name: "Jardins Tropicais", icon: Trees },
  ];

  return (
    <section id="empreendimento" className="py-16 sm:py-24 bg-[#06120d] text-[#ede7dc] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#d4af37] block mb-3 font-semibold">
            O MIDORI PRIVATE CLUB
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight">
            “Dentro da Riviera, algo ainda mais exclusivo.”
          </h2>
        </div>

        {/* Números Chave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10">
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">1.200 m²</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">de Terreno</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">589 m²</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">Construídos</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">66 m²</div>
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-white/70 mt-1 font-mono leading-tight">Piscina Aquecida com SPA Integrado</div>
          </div>
          <div className="p-4 sm:p-5 rounded-xl bg-[#081b14] border border-white/10 text-center">
            <div className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#f7d486]">6 Lofts</div>
            <div className="text-xs uppercase tracking-wider text-white/70 mt-1 font-mono">Premium</div>
          </div>
        </div>

        {/* MIDORI PREMIUM EXPERIENCE GALLERY — Composição Editorial de Luxo */}
        <div className="max-w-5xl mx-auto mb-14 space-y-4 sm:space-y-5">
          
          {/* 1. Fotografia Principal do Empreendimento em Formato Panorâmico (Largura Total) */}
          <div 
            onClick={() => handleOpenGallery('projeto-midori')}
            className="group relative w-full h-[280px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl cursor-pointer"
          >
            <img 
              src="/images/midori/lofts/midori-implantacao-panoramica-oficial.jpg" 
              alt="MIDORI Private Club - Implantação e Masterplan Oficial" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Overlay de gradiente escuro para legibilidade máxima do título */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06120d]/95 via-[#06120d]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

            {/* Legenda inferior limpa — Apenas título principal branco */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
              <div className="max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury font-normal text-white drop-shadow-md leading-snug line-clamp-2">
                  MIDORI Private Club — 6 Lofts de Arquitetura Autoral
                </h3>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider backdrop-blur-md border border-white/20 group-hover:border-[#00a86b] transition-all">
                  <Eye className="w-3.5 h-3.5 text-[#5eead4]" />
                  <span>Ver em Detalhes</span>
                </span>
              </div>
            </div>
          </div>

          {/* 2. Duas Imagens Secundárias Selecionadas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* Secundária 1: Experiência no Resort & Represa */}
            <div 
              onClick={() => handleOpenGallery('destino')}
              className="group relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl cursor-pointer"
            >
              <img 
                src="/images/midori/resort/represa-jurumirim-sunset.jpg" 
                alt="Represa de Jurumirim ao Entardecer" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120d]/95 via-[#06120d]/40 to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif-luxury font-medium text-white drop-shadow-md leading-snug line-clamp-2">
                  Represa de Jurumirim & Lazer Náutico
                </h4>
              </div>
            </div>

            {/* Secundária 2: Arquitetura dos Lofts & Piscina Privativa */}
            <div 
              onClick={() => handleOpenGallery('projeto-midori')}
              className="group relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-xl cursor-pointer"
            >
              <img 
                src="/images/midori/lofts/loft-fachada-arquitetura.jpg" 
                alt="Arquitetura dos Lofts MIDORI" 
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06120d]/95 via-[#06120d]/40 to-transparent pointer-events-none" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-left">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif-luxury font-medium text-white drop-shadow-md leading-snug line-clamp-2">
                  Piscina Aquecida com SPA Integrado & Lofts de Luxo
                </h4>
              </div>
            </div>

          </div>

          {/* 3. Botão Centralizado: "EXPLORAR A EXPERIÊNCIA MIDORI" */}
          <div className="pt-3 text-center">
            <button
              onClick={() => handleOpenGallery('destino')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl bg-gradient-to-r from-[#00a86b]/20 via-[#d4af37]/25 to-[#00a86b]/20 hover:from-[#00a86b]/35 hover:via-[#d4af37]/40 hover:to-[#00a86b]/35 border border-[#d4af37]/60 hover:border-[#f7d486] text-white font-mono uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold shadow-2xl shadow-black/80 hover:shadow-[#d4af37]/20 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
              <span>EXPLORAR A EXPERIÊNCIA MIDORI</span>
              <Sparkles className="w-3.5 h-3.5 text-[#5eead4]" />
            </button>
            <p className="text-[11px] sm:text-xs text-white/50 font-mono mt-2 tracking-wide">
              Catálogo editorial digital • 3 capítulos exclusivos • Fotografias e perspectivas oficiais
            </p>
          </div>

        </div>

        {/* Frase de apoio curta antes dos cards */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-sm sm:text-base text-[#ede7dc]/80 font-light leading-relaxed">
            “Mais do que um loft, o MIDORI foi pensado como um ecossistema completo para você chegar e viver.”
          </p>
        </div>

        {/* Empilhamento de Valor: Ecossistema Categorizado */}
        <div className="p-6 sm:p-8 lg:p-9 rounded-2xl bg-gradient-to-b from-[#081a13] to-[#06140f] border border-[#d4af37]/35 max-w-4xl mx-auto mb-10 shadow-2xl relative overflow-hidden">
          {/* Subtle gold luxury ambient reflection */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none -z-0" />

          {/* Header do Card */}
          <div className="text-center mb-7 relative z-10">
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-[0.25em] text-[#00a86b] font-bold block mb-2">
              EXPERIÊNCIA COMPLETA MIDORI
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif-luxury text-white font-normal leading-tight">
              TUDO ISSO FAZ PARTE DA SUA EXPERIÊNCIA COMO COTISTA.
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm text-white/75 font-light max-w-2xl mx-auto leading-relaxed">
              “Sua cota não dá acesso apenas ao loft. Ela conecta sua família a uma estrutura completa de lazer, mobilidade, convivência e experiências dentro do MIDORI.”
            </p>
          </div>

          {/* 3 Categorias de Benefícios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-4.5 mb-7 relative z-10">
            
            {/* Categoria 1: Náutica & Represa */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Waves className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  1. NÁUTICA & REPRESA
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0" />
                  <span>Canoas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0" />
                  <span>Stand Up Paddles</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0" />
                  <span>Bote para 4 Pessoas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0 mt-1" />
                  <span className="leading-snug">Parceria com a Marina para locação de barcos</span>
                </li>
              </ul>
            </div>

            {/* Categoria 2: Mobilidade Dentro da Riviera */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Zap className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  2. MOBILIDADE RIVIERA
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>2 Motos Elétricas</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>5 Patinetes Elétricos</span>
                </li>
              </ul>
              <div className="mt-3 pt-2 border-t border-white/5 text-[10px] text-white/50 font-light">
                Mobilidade silenciosa e privativa para circular pelo condomínio.
              </div>
            </div>

            {/* Categoria 3: Estrutura MIDORI */}
            <div className="p-4 rounded-xl bg-[#06120d]/90 border border-white/10 hover:border-[#00a86b]/40 transition-colors flex flex-col">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/8">
                <div className="p-1.5 rounded-md bg-[#00a86b]/15 text-[#00a86b]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-[12px] uppercase font-mono tracking-wider font-bold text-[#f7d486]">
                  3. ESTRUTURA MIDORI
                </h4>
              </div>
              <ul className="space-y-1.5 text-xs text-white/85 font-medium flex-1">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] shrink-0 mt-1" />
                  <span className="leading-snug">Piscina Aquecida com SPA Integrado</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Espaço Gourmet</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Bangalôs & Lounge</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Fire Pit (Lareira de Chão)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b]" />
                  <span>Área Kids & Jardins Tropicais</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copy Central e Apoio de Alto Impacto */}
          <div className="text-center border-t border-white/10 pt-5 relative z-10 space-y-1.5">
            <p className="text-sm sm:text-base lg:text-lg font-serif-luxury italic text-[#f7d486] leading-snug">
              “Sua cota é a porta de entrada. Todo esse ecossistema é o que transforma o MIDORI em uma experiência muito maior do que uma segunda residência.”
            </p>
            <p className="text-xs sm:text-sm text-white/70 font-light">
              Menos estrutura para comprar individualmente. Mais experiências para aproveitar com sua família.
            </p>
            <p className="text-[10px] sm:text-[11px] text-white/40 font-mono pt-1">
              * Acesso à estrutura e aos ativos do MIDORI conforme as regras de utilização e agendamento do clube.
            </p>
          </div>
        </div>

        {/* CTA: Quero Conhecer Esse Ecossistema */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink("Vim pela seção de benefícios e ecossistema do cotista.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-8 py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Conhecer Esse Ecossistema</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Modal do Catálogo Editorial Digital MIDORI */}
      <MidoriExperienceGalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => setIsGalleryModalOpen(false)}
        initialChapterId={selectedChapterId}
      />
    </section>
  );
};
