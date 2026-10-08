import React, { useState } from 'react';
import { ChevronRight, Sparkles, Anchor, Bike, Zap, Waves, Ship, ZoomIn, X, ChevronLeft } from 'lucide-react';
import { trackAnalyticsEvent, getWhatsAppLink } from '../constants/brand';

interface AcquisitionSectionProps {
  onOpenModal?: () => void;
}

interface AcquisitionImage {
  id: string;
  src: string;
  alt: string;
  tag: string;
  title: string;
  subtitle: string;
}

export const AcquisitionSection: React.FC<AcquisitionSectionProps> = ({ onOpenModal }) => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleCtaClick = () => {
    trackAnalyticsEvent('clique_cta_aquisicao', { section: 'por_que_comprar_cota' });
    if (onOpenModal) {
      onOpenModal();
    }
  };

  // As 3 imagens exatas do ChatGPT solicitadas pelo cliente
  const acquisitionImages: AcquisitionImage[] = [
    {
      id: 'piscina',
      src: '/chatgpt-piscina-area-lazer.png',
      alt: 'Piscina e Área de Lazer MIDORI',
      tag: 'Piscina & Lazer',
      title: 'Piscina & Área de Lazer',
      subtitle: 'Deck privativo, solário e piscina aquecida de 66m²'
    },
    {
      id: 'arquitetura',
      src: '/chatgpt-arquitetura-area-externa.png',
      alt: 'Arquitetura e Área Externa dos Lofts MIDORI',
      tag: 'Arquitetura & Externa',
      title: 'Arquitetura & Área Externa',
      subtitle: 'Design contemporâneo integrado à natureza e privacidade'
    },
    {
      id: 'stand-up-paddle',
      src: '/chatgpt-stand-up-paddle-represa.png',
      alt: 'Stand Up Paddle e Lazer Náutico na Represa Jurumirim',
      tag: 'Stand Up Paddle & Represa',
      title: 'Stand Up Paddle & Represa',
      subtitle: 'Águas límpidas da represa para lazer e esportes náuticos'
    }
  ];

  const layers = [
    {
      title: "O ativo",
      description: "Projeto de 589m² de construção em um destino de natureza, lazer e hospitalidade."
    },
    {
      title: "A operação",
      description: "Processos, tecnologia e gestão profissional para explorar a hospedagem."
    },
    {
      title: "A marca",
      description: "Midori como assinatura de experiência, hospitalidade e cuidado."
    },
    {
      title: "O potencial",
      description: "Riviera 1 como primeiro empreendimento de uma rede nacional de resorts boutique."
    }
  ];

  const outrosAtivos = [
    { qty: "5", label: "Patinetes Elétricos", icon: Bike },
    { qty: "2", label: "Motos Elétricas", icon: Zap },
    { qty: "2", label: "Canoas", icon: Anchor },
    { qty: "2", label: "Stand Up Paddles", icon: Waves },
    { qty: "1", label: "Bote Inflável (4 pessoas)", icon: Ship },
    { qty: "1", label: "Jetski", icon: Sparkles }
  ];

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
    trackAnalyticsEvent('visualizou_imagem_aquisicao', { image_id: acquisitionImages[index].id });
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % acquisitionImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + acquisitionImages.length) % acquisitionImages.length);
    }
  };

  return (
    <section id="aquisicao" className="py-14 sm:py-20 lg:py-24 bg-[#071912] text-[#ede7dc] relative overflow-hidden border-t border-b border-white/5">
      <span id="gestao" className="sr-only" />
      
      {/* Iluminação de fundo refinada */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#00a86b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Grid Principal: Lado Esquerdo (3 Imagens Oficiais) + Lado Direito (Conteúdo Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LADO ESQUERDO: Composição com as 3 Imagens Exatas (100% Responsiva no Mobile e Desktop) */}
          <div className="lg:col-span-5 w-full">
            
            {/* VERSÃO DESKTOP (lg+): Stack vertical clássico com acabamento de luxo */}
            <div className="hidden lg:flex flex-col gap-3.5 max-w-none">
              
              {/* Imagem 1 Desktop: Deck e Piscina com Lofts (Em destaque) */}
              <div 
                onClick={() => openLightbox(0)}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/40 bg-black/60 h-48 xl:h-52 group cursor-pointer"
              >
                <img
                  src={acquisitionImages[0].src}
                  alt={acquisitionImages[0].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#06140f]/90 border border-[#d4af37]/40 text-[#f7d486] font-semibold">
                    {acquisitionImages[0].tag}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                  <div>
                    <h4 className="text-sm font-serif-luxury font-medium text-white leading-tight">
                      {acquisitionImages[0].title}
                    </h4>
                    <p className="text-[11px] text-white/75 font-light leading-none mt-0.5">
                      {acquisitionImages[0].subtitle}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-[#d4af37] transition-colors shrink-0 ml-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Imagem 2 Desktop: Lazer Náutico / Stand Up Paddle */}
              <div 
                onClick={() => openLightbox(1)}
                className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-[#00a86b]/40 bg-black/40 h-40 xl:h-44 group cursor-pointer transition-colors"
              >
                <img
                  src={acquisitionImages[1].src}
                  alt={acquisitionImages[1].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#06140f]/90 border border-white/15 text-white/90">
                    {acquisitionImages[1].tag}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                  <div>
                    <h4 className="text-sm font-serif-luxury font-medium text-white leading-tight">
                      {acquisitionImages[1].title}
                    </h4>
                    <p className="text-[11px] text-white/75 font-light leading-none mt-0.5">
                      {acquisitionImages[1].subtitle}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-[#00a86b] transition-colors shrink-0 ml-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Imagem 3 Desktop: Lounge sob Pergolado com cortinas */}
              <div 
                onClick={() => openLightbox(2)}
                className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 hover:border-[#00a86b]/40 bg-black/40 h-40 xl:h-44 group cursor-pointer transition-colors"
              >
                <img
                  src={acquisitionImages[2].src}
                  alt={acquisitionImages[2].alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 rounded bg-[#06140f]/90 border border-white/15 text-white/90">
                    {acquisitionImages[2].tag}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-left">
                  <div>
                    <h4 className="text-sm font-serif-luxury font-medium text-white leading-tight">
                      {acquisitionImages[2].title}
                    </h4>
                    <p className="text-[11px] text-white/75 font-light leading-none mt-0.5">
                      {acquisitionImages[2].subtitle}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-[#00a86b] transition-colors shrink-0 ml-2">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </div>

            {/* VERSÃO MOBILE & TABLET (< lg): Mosaico Compacto de Alto Impacto */}
            <div className="block lg:hidden w-full">
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-lg mx-auto">
                
                {/* Foto 1 Mobile (Topo: Destaque Deck & Piscina - Largura Total) */}
                <div 
                  onClick={() => openLightbox(0)}
                  className="col-span-2 relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-[#d4af37]/35 bg-black/60 group cursor-pointer active:scale-[0.99] transition-transform"
                >
                  <img
                    src={acquisitionImages[0].src}
                    alt={acquisitionImages[0].alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute top-2 left-2">
                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#06140f]/90 border border-[#d4af37]/40 text-[#f7d486] font-semibold">
                      {acquisitionImages[0].tag}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-serif-luxury text-white font-medium leading-tight">
                      {acquisitionImages[0].title}
                    </span>
                    <span className="w-5 h-5 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white/80 shrink-0 ml-1">
                      <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Foto 2 Mobile (Inferior Esquerda: Náutica / Stand Up Paddle) */}
                <div 
                  onClick={() => openLightbox(1)}
                  className="col-span-1 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/12 bg-black/40 group cursor-pointer active:scale-[0.99] transition-transform"
                >
                  <img
                    src={acquisitionImages[1].src}
                    alt={acquisitionImages[1].alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-serif-luxury text-white leading-tight truncate">
                      {acquisitionImages[1].tag}
                    </span>
                    <ZoomIn className="w-2.5 h-2.5 text-white/70 shrink-0 ml-1" />
                  </div>
                </div>

                {/* Foto 3 Mobile (Inferior Direita: Lounge Pergolado com cortinas) */}
                <div 
                  onClick={() => openLightbox(2)}
                  className="col-span-1 relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-white/12 bg-black/40 group cursor-pointer active:scale-[0.99] transition-transform"
                >
                  <img
                    src={acquisitionImages[2].src}
                    alt={acquisitionImages[2].alt}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                    <span className="text-[11px] sm:text-xs font-serif-luxury text-white leading-tight truncate">
                      {acquisitionImages[2].tag}
                    </span>
                    <ZoomIn className="w-2.5 h-2.5 text-white/70 shrink-0 ml-1" />
                  </div>
                </div>

              </div>

              {/* Dica de toque no mobile */}
              <div className="text-center mt-2">
                <span className="text-[10px] text-white/50 tracking-wide">
                  Toque em qualquer foto para ampliar
                </span>
              </div>
            </div>

          </div>

          {/* LADO DIREITO: Rótulo AQUISIÇÃO, Título, Texto de Apoio e 4 Camadas de Valor */}
          <div className="lg:col-span-7 lg:pl-4">
            
            {/* Rótulo */}
            <div className="mb-2 sm:mb-2.5 text-left">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-bold">
                AQUISIÇÃO
              </span>
            </div>

            {/* Título Principal */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-white leading-tight mb-3 sm:mb-4 tracking-tight text-left">
              Por que comprar uma cota?
            </h2>

            {/* Texto de Apoio */}
            <p className="text-xs sm:text-base text-white/85 font-light leading-relaxed mb-6 sm:mb-8 text-left">
              O investidor não adquire apenas uma fração imobiliária. Ela reúne quatro camadas de valor em um único ativo.
            </p>

            {/* 4 Blocos de Valor */}
            <div className="divide-y divide-white/10 border-t border-b border-white/10 text-left">
              {layers.map((layer, idx) => (
                <div 
                  key={idx}
                  className="py-3.5 sm:py-5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6 group hover:bg-white/[0.02] transition-colors px-1"
                >
                  <div className="sm:w-36 md:w-40 shrink-0">
                    <span className="font-serif-luxury text-base sm:text-xl text-[#f7d486] font-normal group-hover:text-white transition-colors">
                      {layer.title}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* BLOCO INFERIOR: OUTROS ATIVOS MIDORI PRIVATE CLUB */}
        <div className="pt-8 sm:pt-10 border-t border-[#d4af37]/25">
          <div className="mb-4 sm:mb-5 text-center sm:text-left">
            <h3 className="text-xs sm:text-sm font-mono uppercase tracking-[0.22em] text-[#d4af37] font-bold">
              OUTROS ATIVOS MIDORI PRIVATE CLUB
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3.5">
            {outrosAtivos.map((ativo, idx) => {
              const Icon = ativo.icon;
              return (
                <div 
                  key={idx}
                  className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-[#06140f]/90 border border-white/10 hover:border-[#d4af37]/40 shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00a86b]/15 flex items-center justify-center text-[#00a86b] group-hover:text-[#f7d486] group-hover:bg-[#d4af37]/15 transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-serif-luxury text-base sm:text-lg font-bold text-[#f7d486] leading-none mb-1">
                      {ativo.qty}
                    </div>
                    <div className="text-[11px] sm:text-xs text-white/85 font-medium leading-tight break-words">
                      {ativo.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Sutil de Conexão com Apresentação */}
        <div className="mt-8 sm:mt-12 text-center pt-2">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCtaClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.14em] text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded-md shadow-xl shadow-[#00a86b]/25 hover:shadow-[#00a86b]/40 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Uma Apresentação Privada do Ativo</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* LIGHTBOX MODAL PARA VISUALIZAÇÃO AMPLIADA (TOTALMENTE RESPONSIVO) */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#071912] border border-[#d4af37]/35 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header do Lightbox */}
            <div className="flex items-center justify-between p-3.5 sm:p-4 border-b border-white/10 bg-[#06140f]">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#d4af37] font-bold">
                  {acquisitionImages[activeLightboxIndex].tag}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-xs sm:text-sm text-white/80 font-serif-luxury">
                  {activeLightboxIndex + 1} de {acquisitionImages.length}
                </span>
              </div>
              <button 
                onClick={closeLightbox}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Imagem em alta resolução */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[240px] sm:min-h-[400px]">
              <img 
                src={acquisitionImages[activeLightboxIndex].src}
                alt={acquisitionImages[activeLightboxIndex].alt}
                className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Botões de Navegação Anterior / Próximo */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/60 hover:bg-black/90 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Próximo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Rodapé descritivo */}
            <div className="p-3.5 sm:p-5 bg-[#06140f] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-serif-luxury font-medium text-white">
                  {acquisitionImages[activeLightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light">
                  {acquisitionImages[activeLightboxIndex].subtitle}
                </p>
              </div>

              {/* Indicadores de bolinha */}
              <div className="flex items-center gap-1.5 self-center sm:self-auto">
                {acquisitionImages.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveLightboxIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      dotIdx === activeLightboxIndex 
                        ? 'w-6 bg-[#d4af37]' 
                        : 'w-2 bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para foto ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

