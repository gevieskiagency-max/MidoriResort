import React, { useState } from 'react';
import { IMAGES } from '../data/assets';
import { Sun, Coffee, Waves, Sunset, Flame, Moon, Sparkles } from 'lucide-react';

export const RoutineStorySection: React.FC = () => {
  const [activeMoment, setActiveMoment] = useState(0);

  const moments = [
    {
      time: "07:30",
      title: "Despertar com vista para a natureza",
      description: "O dia começa sem alarmes barulhentos. Apenas a luz suave entrando pelas grandes portas de vidro do loft, o canto dos pássaros e o ar puro do interior.",
      icon: Coffee,
      image: IMAGES.loftInterior,
      tag: "Manhã Pura"
    },
    {
      time: "10:00",
      title: "Piscina privativa & Represa Jurumirim",
      description: "Café da manhã prolongado na varanda. As crianças na piscina privativa de 66m² enquanto você decide se hoje o dia pede wakeboard, caiaque ou stand up paddle.",
      icon: Waves,
      image: IMAGES.loftPoolSunset,
      tag: "Espelho D’água"
    },
    {
      time: "14:30",
      title: "Marina, Jet Ski & Enseadas Secretas",
      description: "A apenas 500 metros do Iate Clube. Embarcar no Jet Ski ou no bote em família para navegar pelas águas calmas e límpidas da maior represa de São Paulo.",
      icon: Sun,
      image: IMAGES.nauticalSports,
      tag: "Náutica & Liberdade"
    },
    {
      time: "18:00",
      title: "O Pôr do Sol que você nunca esquece",
      description: "O céu ganha nuances de laranja, cobre e violeta. É o momento em que todos param para olhar o horizonte. Sem reuniões, sem pressa, apenas presença.",
      icon: Sunset,
      image: IMAGES.sunsetLake,
      tag: "Contemplação"
    },
    {
      time: "20:30",
      title: "Gourmet, Lareira Externa & Céu Estrelado",
      description: "Churrasqueira acesa no espaço gourmet, vinho selecionado e a lareira externa acalentando a conversa da noite com quem realmente importa na sua vida.",
      icon: Flame,
      image: IMAGES.firePitNight,
      tag: "Convivência Íntima"
    }
  ];

  return (
    <section id="rotina" className="relative py-24 sm:py-32 bg-[#081511] overflow-hidden">
      {/* Decorative subtle aura */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#00a86b]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#00a86b]" />
            <span>Storytelling • Estilo de Vida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury text-white font-normal leading-tight">
            “Algumas pessoas compram coisas. <br />
            <span className="gold-gradient-text italic font-normal">
              Outras compram tempo para viver.”
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/70 font-light max-w-2xl mx-auto">
            Uma terça-feira ou um fim de semana comum na sua vida pode começar e terminar exatamente assim.
          </p>
        </div>

        {/* Visual Scene Switcher */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Timeline navigation */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            {moments.map((m, idx) => {
              const Icon = m.icon;
              const isActive = activeMoment === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveMoment(idx)}
                  className={`cursor-pointer p-4 sm:p-5 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? 'bg-[#0f2d22] border-[#d4af37]/50 shadow-xl shadow-black/40 translate-x-1 sm:translate-x-2'
                      : 'bg-[#0a1b15]/60 border-white/5 hover:border-white/15 hover:bg-[#0c201a]/70 text-white/70'
                  }`}
                >
                  {/* Active highlight pill */}
                  {isActive && (
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#d4af37]" />
                  )}

                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-lg transition-colors ${
                      isActive ? 'bg-[#00a86b] text-white' : 'bg-white/5 text-white/50'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] font-mono tracking-widest text-[#d4af37] font-semibold">
                          {m.time}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider text-white/50 bg-white/5 px-2 py-0.5 rounded">
                          {m.tag}
                        </span>
                      </div>
                      <h3 className={`text-base sm:text-lg font-serif-luxury font-medium transition-colors ${
                        isActive ? 'text-white' : 'text-white/80'
                      }`}>
                        {m.title}
                      </h3>
                      <p className={`text-xs sm:text-sm mt-1.5 line-clamp-2 sm:line-clamp-none transition-colors ${
                        isActive ? 'text-[#ede7dc]/85' : 'text-white/50'
                      }`}>
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Cinematic Scene Preview Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-[#d4af37]/25 shadow-2xl shadow-black/80 aspect-[4/3] sm:aspect-[16/10] bg-[#05110d]">
              <img
                src={moments[activeMoment].image}
                alt={moments[activeMoment].title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with subtle caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-6 bg-[#081511]/80 backdrop-blur-md rounded-xl border border-white/10">
                <div className="flex items-center justify-between text-xs text-white/60 font-mono tracking-widest mb-1">
                  <span>MOMENTO {activeMoment + 1} DE 5</span>
                  <span>MIDORI EXPERIENCE</span>
                </div>
                <h4 className="text-lg sm:text-xl font-serif-luxury text-white font-medium">
                  {moments[activeMoment].title}
                </h4>
                <p className="text-xs sm:text-sm text-[#ede7dc]/80 font-light mt-1">
                  {moments[activeMoment].description}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Narrative quote block */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#0d281e] via-[#0b2019] to-[#0d281e] border border-[#d4af37]/20 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-lg sm:text-xl md:text-2xl font-serif-luxury italic text-white/95 leading-relaxed">
            “Você não está comprando apenas um lugar para dormir. <br className="hidden sm:inline" />
            Está conquistando um lugar para viver.”
          </p>
          <span className="block mt-3 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            Conceito Midori Private Club
          </span>
        </div>

      </div>
    </section>
  );
};
