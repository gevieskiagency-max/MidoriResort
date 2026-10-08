import React from 'react';
import { getWhatsAppLink, trackAnalyticsEvent, BRAND_INFO } from '../constants/brand';
import { IMAGES } from '../data/assets';
import { ArrowDown, Sparkles, Shield, Compass, ChevronRight } from 'lucide-react';
import { MidoriLogo } from '../components/MidoriLogo';

interface HeroSectionProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  const handleScrollToRiviera = () => {
    const el = document.getElementById('rotina');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHeroCtaClick = () => {
    trackAnalyticsEvent('clique_cta_hero', { cta: 'quero_conhecer_o_midori' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#06140f] pt-24 pb-16 lg:pt-32 lg:pb-24"
    >
      {/* Background Image with Cinematic Luxury Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroCover}
          alt="MIDORI Private Club - Resort Boutique na Riviera de Santa Cristina"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== IMAGES.heroCoverFallback) {
              target.src = IMAGES.heroCoverFallback;
            }
          }}
        />
        {/* Clean, light backdrop: preserves the original photo's true colors and luminosity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06140f] via-transparent to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Discreet Launch Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-[#d4af37]/35 text-[#f6e5c5] text-[11px] sm:text-xs uppercase tracking-[0.22em] font-medium mb-6 shadow-lg animate-in fade-in duration-700">
          <Sparkles className="w-3.5 h-3.5 text-[#00a86b]" />
          <span>{BRAND_INFO.launchYear} • RESORT BOUTIQUE PRIVATIVO</span>
        </div>

        {/* Localized Ambient Glow & Soft Halo behind the typography block */}
        <div className="relative w-full max-w-3xl flex flex-col items-center">
          {/* Subtle localized radial backlight that keeps the background image clear outside */}
          <div 
            className="absolute -inset-x-6 -inset-y-8 sm:-inset-x-12 sm:-inset-y-10 rounded-3xl bg-black/30 backdrop-blur-[3px] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
            aria-hidden="true"
          />

          {/* Brand Logo & Name */}
          <div className="mb-4 flex flex-col items-center">
            <MidoriLogo size="lg" colorMode="green" className="items-center drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]" />
          </div>

          {/* Main Headline - Controlled reading width, balanced line breaks & refined hierarchy */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-serif-luxury font-normal text-white leading-[1.12] sm:leading-[1.15] tracking-tight max-w-2xl sm:max-w-3xl mx-auto mt-2 mb-4 text-shadow-hero">
            Seu lugar dentro da{' '}
            <span className="block sm:inline font-serif-luxury italic font-medium gold-gradient-text whitespace-nowrap">
              Riviera de Santa Cristina.
            </span>
          </h1>

          {/* Subheadline with optimal measure and leading */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#f4efe8] font-normal max-w-xl sm:max-w-2xl mx-auto leading-relaxed sm:leading-relaxed mb-7 text-shadow-sub">
            Um resort boutique privativo às margens da Represa Jurumirim, desenhado para apenas{' '}
            <strong className="text-[#f7d486] font-semibold">36 famílias fundadoras</strong>.
          </p>
        </div>

        {/* Discrete Metadata Pills - refined clean glassmorphism */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 text-xs sm:text-sm text-white font-medium mb-10">
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-black/40 hover:bg-black/50 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-colors">
            <Compass className="w-3.5 h-3.5 text-[#00a86b]" />
            Riviera de Santa Cristina
          </span>
          <span className="hidden sm:inline text-[#d4af37]/80">•</span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-black/40 hover:bg-black/50 rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#00a86b] animate-pulse"></span>
            Represa Jurumirim
          </span>
          <span className="hidden sm:inline text-[#d4af37]/80">•</span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 bg-black/40 hover:bg-black/50 rounded-full border border-[#d4af37]/50 text-[#f7e6c4] backdrop-blur-md shadow-lg font-semibold transition-colors">
            <Shield className="w-3.5 h-3.5 text-[#d4af37]" />
            36 Famílias Fundadoras
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
          {/* Primary CTA */}
          <a
            href={getWhatsAppLink("Vim pela Landing Page do MIDORI e quero conhecer o projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroCtaClick}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-bold uppercase tracking-[0.16em] text-xs sm:text-sm rounded-md shadow-2xl shadow-[#00a86b]/40 hover:shadow-[#00a86b]/60 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Quero Conhecer o MIDORI</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA: WhatsApp / Apresentação */}
          <a
            href={getWhatsAppLink("Vim pela Landing Page do MIDORI e quero conhecer o projeto.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleHeroCtaClick}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-4 px-6 bg-black/45 hover:bg-black/65 text-white font-bold uppercase tracking-[0.16em] text-xs sm:text-sm rounded-md border border-white/30 hover:border-[#d4af37]/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
          >
            <span>Solicitar Apresentação</span>
          </a>
        </div>

        {/* Microcopy */}
        <p className="text-[12px] sm:text-xs text-[#ded5c5] tracking-wider mt-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)] font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] inline-block mr-1.5"></span>
          Atendimento privado & confidencial via WhatsApp.
        </p>

        {/* Subtle scroll down indicator */}
        <div 
          onClick={handleScrollToRiviera}
          className="mt-12 lg:mt-16 flex flex-col items-center cursor-pointer group opacity-70 hover:opacity-100 transition-opacity"
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#ede7dc]/60 mb-1 group-hover:text-[#d4af37]">
            Conheça a Experiência
          </span>
          <ArrowDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
        </div>

      </div>
    </section>
  );
};
