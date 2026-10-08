import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  BookOpen, 
  Sparkles, 
  Compass, 
  Camera, 
  Layers
} from 'lucide-react';

export interface CatalogItem {
  id: string;
  title: string;
  tag: string;
  imageSrc: string;
  caption: string;
  description: string;
  isArtisticPerspective?: boolean;
}

export interface CatalogChapter {
  id: string;
  chapterNumber: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  items: CatalogItem[];
}

export const CATALOG_CHAPTERS: CatalogChapter[] = [
  {
    id: 'destino',
    chapterNumber: '01',
    shortTitle: 'O Destino',
    title: 'Riviera de Santa Cristina I',
    subtitle: 'Um dos cenários mais deslumbrantes do interior paulista, banhado pelas águas cristalinas da Represa de Jurumirim com urbanismo de alto padrão.',
    icon: Compass,
    items: [
      {
        id: 'dest-1',
        title: 'Pôr do Sol na Represa de Jurumirim',
        tag: 'Fotografia Real do Destino',
        imageSrc: '/images/midori/resort/represa-jurumirim-sunset.jpg',
        caption: 'Cenário natural no entardecer da Represa Jurumirim',
        description: 'Águas límpidas e calmas, ideais para navegação, banho e esportes náuticos sob uma atmosfera de serenidade inigualável.'
      },
      {
        id: 'dest-2',
        title: 'Vista Panorâmica da Represa & Orla',
        tag: 'Localização Privilegiada',
        imageSrc: '/images/midori/resort/riviera-vista-aerea-represa.jpg',
        caption: 'Enseadas e orla preservada da Riviera de Santa Cristina I',
        description: 'Loteamento fechado com infraestrutura completa de lazer, segurança monitorada 24 horas e contato direto com a natureza.'
      },
      {
        id: 'dest-3',
        title: 'Urbanismo & Alamedas Verdes',
        tag: 'Paisagismo Integrado',
        imageSrc: '/images/midori/resort/riviera-paisagismo-portaria.jpg',
        caption: 'Alamedas planejadas com ampla arborização nativa',
        description: 'Ruas tranquilas, praças contemplativas e vegetação preservada que proporcionam caminhadas seguras e ar puro.'
      },
      {
        id: 'dest-4',
        title: 'Marina & Estrutura Náutica',
        tag: 'Apoio Náutico de Alto Padrão',
        imageSrc: '/images/midori/resort/riviera-orla-marina.jpg',
        caption: 'Píer e rampa de acesso às águas da represa',
        description: 'Facilidade e comodidade total para colocar embarcações, jet skis e pranchas na água com máxima segurança.'
      }
    ]
  },
  {
    id: 'estilo-de-vida',
    chapterNumber: '02',
    shortTitle: 'O Estilo de Vida',
    title: 'O privilégio de viver cada momento.',
    subtitle: 'Tempo de qualidade em família, esporte náutico, descanso sob o sol e momentos gastronômicos memoráveis.',
    icon: Sparkles,
    items: [
      {
        id: 'estilo-1',
        title: 'Piscinas & Espaços de Descanso',
        tag: 'Relaxamento & Solário',
        imageSrc: '/images/midori/galeria/piscinas-lounge-descanso.jpg',
        caption: 'Deck com espreguiçadeiras e atmosfera de resort exclusivo',
        description: 'Estrutura desenhada para relaxar sob o sol, ler um bom livro ou desfrutar de um drink refrescante com vista verde.'
      },
      {
        id: 'estilo-2',
        title: 'Lazer Náutico & Represa Ativa',
        tag: 'Ativos Náuticos do Clube',
        imageSrc: '/images/midori/galeria/nautica-esportes.jpg',
        caption: 'Prática de wakeboard, canoagem e jet ski na represa',
        description: 'Equipamentos náuticos completos já inclusos na sua cota MIDORI para você apenas chegar e navegar com a família.'
      },
      {
        id: 'estilo-3',
        title: 'Complexo Esportivo da Riviera',
        tag: 'Esportes & Saúde',
        imageSrc: '/images/midori/galeria/quadras-esportivas-clube.jpg',
        caption: 'Quadras de tênis, beach tennis e campos poliesportivos',
        description: 'Prática esportiva de alto nível ao ar livre, cercada por mata preservada e brisa fresca da represa.'
      }
    ]
  },
  {
    id: 'projeto-midori',
    chapterNumber: '03',
    shortTitle: 'O Projeto Midori',
    title: 'Arquitetura pensada para uma experiência exclusiva.',
    subtitle: '6 lofts autorais concebidos para harmonizar concreto, madeira nobre, grandes panos de vidro e uma piscina privativa de 66 m².',
    icon: Layers,
    items: [
      {
        id: 'proj-1',
        title: 'Masterplan & Implantação Panorâmica Oficial',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-implantacao-panoramica-oficial.jpg',
        caption: 'Perspectiva artística oficial do empreendimento MIDORI Private Club',
        description: 'Implantação autoral em terreno de 1.200 m², com 589 m² de área construída, piscina central privativa de 66 m² e integração com a represa.',
        isArtisticPerspective: true
      },
      {
        id: 'proj-2',
        title: 'Fachadas dos Lofts & Volumetria Autoral',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-fachada-lofts-oficial.jpg',
        caption: 'Perspectiva artística do projeto — Fachada contemporânea dos lofts',
        description: 'Linhas retas elegantes, painéis ripados de madeira, iluminação cênica e privacidade total entre as unidades.',
        isArtisticPerspective: true
      },
      {
        id: 'proj-3',
        title: 'Piscina Privativa de 66 m² & Deck Molhado',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-arquitetura-deck-piscina.jpg',
        caption: 'Perspectiva artística do projeto — Deck molhado e área de solário',
        description: 'Piscina de 66 m² com revestimento nobre, prainha infantil, espreguiçadeiras e bangalôs exclusivos para as famílias cotistas.',
        isArtisticPerspective: true
      },
      {
        id: 'proj-4',
        title: 'Living Integrado & Pé-Direito Duplo',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-living-interiores-oficial.jpg',
        caption: 'Perspectiva artística do projeto — Living amplo integrado ao exterior',
        description: 'Pé-direito duplo imponente, amplas portas envidraçadas e mobiliário contemporâneo com padrão hotelaria 5 estrelas.',
        isArtisticPerspective: true
      },
      {
        id: 'proj-7',
        title: 'Fire Pit & Lareira Externa de Chão',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-fire-pit-lazer-oficial.jpg',
        caption: 'Perspectiva artística do projeto — Fire pit sob o céu estrelado',
        description: 'Lareira de chão integrada com assentos estofados para noites inesquecíveis ao redor do fogo com amigos e família.',
        isArtisticPerspective: true
      },
      {
        id: 'proj-8',
        title: 'Ambiência Noturna & Iluminação Cênica',
        tag: 'Perspectiva artística do projeto',
        imageSrc: '/images/midori/lofts/midori-perspectiva-noturna-oficial.jpg',
        caption: 'Perspectiva artística do projeto — Ambiência noturna dos lofts e piscina',
        description: 'Projeto luminotécnico intimista que realça o reflexo da água, a madeira nobre e a tranquilidade incomparável da Riviera.',
        isArtisticPerspective: true
      }
    ]
  }
];

interface MidoriExperienceGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChapterId?: string;
}

export const MidoriExperienceGalleryModal: React.FC<MidoriExperienceGalleryModalProps> = ({
  isOpen,
  onClose,
  initialChapterId = 'destino'
}) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const modalContainerRef = useRef<HTMLDivElement | null>(null);

  // Sincroniza capítulo inicial ao abrir
  useEffect(() => {
    if (isOpen) {
      const idx = CATALOG_CHAPTERS.findIndex(c => c.id === initialChapterId);
      if (idx !== -1) {
        setActiveChapterIndex(idx);
      }
      setActiveItemIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, initialChapterId]);

  const currentChapter = CATALOG_CHAPTERS[activeChapterIndex] || CATALOG_CHAPTERS[0];
  const items = currentChapter.items;
  const currentItem = items[activeItemIndex] || items[0];

  // Pré-carregamento seletivo da próxima imagem
  useEffect(() => {
    if (items.length > 0) {
      const nextIndex = (activeItemIndex + 1) % items.length;
      const nextImg = new Image();
      nextImg.src = items[nextIndex].imageSrc;
    }
  }, [activeChapterIndex, activeItemIndex, items]);

  const handleNext = useCallback(() => {
    if (items.length > 0) {
      if (activeItemIndex < items.length - 1) {
        setActiveItemIndex(prev => prev + 1);
      } else {
        // Se estiver no final do capítulo, avança para o próximo capítulo
        if (activeChapterIndex < CATALOG_CHAPTERS.length - 1) {
          setActiveChapterIndex(prev => prev + 1);
          setActiveItemIndex(0);
        } else {
          // Loop de volta ao primeiro item
          setActiveItemIndex(0);
        }
      }
    }
  }, [activeItemIndex, items.length, activeChapterIndex]);

  const handlePrev = useCallback(() => {
    if (items.length > 0) {
      if (activeItemIndex > 0) {
        setActiveItemIndex(prev => prev - 1);
      } else {
        // Volta para o capítulo anterior
        if (activeChapterIndex > 0) {
          const prevChapter = CATALOG_CHAPTERS[activeChapterIndex - 1];
          setActiveChapterIndex(prev => prev - 1);
          setActiveItemIndex(prevChapter.items.length - 1);
        }
      }
    }
  }, [activeItemIndex, activeChapterIndex]);

  // Teclado
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Swipe mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl animate-in fade-in duration-300 select-none overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Catálogo Editorial Digital MIDORI"
      ref={modalContainerRef}
    >
      {/* Container Principal do Catálogo */}
      <div className={`w-full h-full ${isFullscreen ? 'p-0' : 'max-w-7xl max-h-[96vh] md:p-4 lg:p-6'} flex flex-col justify-between transition-all duration-300`}>
        
        {/* Top Bar: Identidade, Menu de Capítulos e Ações */}
        <header className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 bg-[#06140f]/90 border-b border-white/10 md:rounded-t-2xl backdrop-blur-md">
          {/* Logo / Selo Editorial */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                MIDORI • CATÁLOGO EDITORIAL
              </span>
            </div>
            
            {/* Fechar no mobile fica no header superior */}
            <button
              onClick={onClose}
              className="sm:hidden p-1.5 rounded-lg text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Fechar catálogo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navegação entre Capítulos (Pílulas discretas e elegantes) */}
          <nav 
            className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none"
            aria-label="Capítulos do catálogo"
          >
            {CATALOG_CHAPTERS.map((chap, idx) => {
              const isActive = idx === activeChapterIndex;
              const Icon = chap.icon;
              return (
                <button
                  key={chap.id}
                  onClick={() => {
                    setActiveChapterIndex(idx);
                    setActiveItemIndex(0);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#00a86b]/20 border border-[#00a86b]/50 text-[#5eead4] font-semibold shadow-sm shadow-[#00a86b]/20'
                      : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="opacity-70 font-mono">{chap.chapterNumber}</span>
                  <span className="hidden md:inline">{chap.shortTitle}</span>
                </button>
              );
            })}
          </nav>

          {/* Ações: Fullscreen e Fechar */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setIsFullscreen(prev => !prev)}
              className="p-2 rounded-lg text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
              title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
            >
              {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Fechar catálogo"
              title="Fechar (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Corpo do Catálogo (Exibição Editorial Principal) */}
        <main 
          className="relative flex-1 flex flex-col justify-center items-center overflow-hidden bg-[#040e0a]"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {currentItem && (
            <div className="relative w-full h-full flex flex-col justify-between p-3 sm:p-5 lg:p-6 overflow-hidden">
              
              {/* Top Meta info do slide */}
              <div className="flex items-center justify-between text-xs font-mono text-white/70 mb-2 z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-[#081f16] border border-[#00a86b]/40 text-[#5eead4] font-semibold text-[10px] sm:text-xs uppercase tracking-wider">
                    {currentItem.tag}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-[11px] sm:text-xs">
                  <span className="text-white font-bold">
                    {String(activeItemIndex + 1).padStart(2, '0')}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-white/60">
                    {String(items.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Moldura da Imagem em Destaque */}
              <div className="relative flex-1 flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/50 group">
                <img
                  key={currentItem.imageSrc}
                  src={currentItem.imageSrc}
                  alt={currentItem.title}
                  className="w-full h-full object-contain max-h-[62vh] sm:max-h-[68vh] transition-opacity duration-500 animate-in fade-in zoom-in-[0.99]"
                  loading="eager"
                  decoding="async"
                />

                {/* Setas de Navegação Desktop */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06140f]/80 hover:bg-[#00a86b]/80 border border-white/20 hover:border-[#00a86b] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 group-hover:opacity-100 opacity-80"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#06140f]/80 hover:bg-[#00a86b]/80 border border-white/20 hover:border-[#00a86b] text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 shadow-xl cursor-pointer hover:scale-105 group-hover:opacity-100 opacity-80"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Legenda Discreta Overlay na parte inferior da foto — Apenas título principal branco */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 sm:p-6 pt-10 text-left pointer-events-none">
                  <div className="max-w-4xl">
                    <h3 className="text-base sm:text-xl lg:text-2xl font-serif-luxury font-normal text-white drop-shadow-md leading-snug">
                      {currentItem.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Faixa Editorial & Descritiva */}
              <div className="mt-3 pt-2 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-3 text-left">
                <div className="max-w-3xl">
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {currentItem.description}
                  </p>
                </div>

                {/* Miniaturas de Navegação Rápida (Thumbnails) */}
                <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none shrink-0">
                  {items.map((it, idx) => (
                    <button
                      key={it.id}
                      onClick={() => setActiveItemIndex(idx)}
                      className={`relative w-12 h-9 sm:w-16 sm:h-11 rounded overflow-hidden border transition-all duration-200 shrink-0 cursor-pointer ${
                        idx === activeItemIndex
                          ? 'border-[#00a86b] ring-2 ring-[#00a86b]/40 scale-105'
                          : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`Ver foto ${idx + 1}: ${it.title}`}
                    >
                      <img
                        src={it.imageSrc}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          )}
        </main>

        {/* Rodapé do Catálogo: Título do Capítulo e Instruções de Teclado */}
        <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-2 px-4 py-3 bg-[#06140f]/90 border-t border-white/10 md:rounded-b-2xl backdrop-blur-md text-xs text-white/60 font-mono">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="text-[#00a86b] font-bold">CAPÍTULO {currentChapter.chapterNumber}</span>
            <span className="text-white/30">•</span>
            <span className="text-white/80 font-sans">{currentChapter.title}</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/50">
            <span className="hidden md:inline">Use as teclas ← e → para navegar</span>
            <span className="hidden md:inline">•</span>
            <span>ESC para fechar</span>
          </div>
        </footer>

      </div>
    </div>
  );
};
