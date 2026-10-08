import React, { useState } from 'react';
import { DISTANCES } from '../constants/brand';
import { MapPin, Navigation, Car, Shield, Compass, CheckCircle2 } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState(DISTANCES[0]);

  return (
    <section id="localizacao" className="py-24 sm:py-32 bg-[#081712] relative overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/25 text-[#d4af37] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Localização Privilegiada</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif-luxury font-normal text-white">
            “Perto o suficiente para ir. <br />
            <span className="gold-gradient-text italic font-normal">
              Especial o suficiente para querer ficar.”
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#ede7dc]/70 font-light">
            O lote do MIDORI 1 está situado a apenas <strong className="text-white font-semibold">500 metros do Iate Clube</strong> da Riviera de Santa Cristina, com asfalto até a porta e vizinho ao Haras do Felipe Massa.
          </p>
        </div>

        {/* Interactive Location Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Stylized Nautical & Road Map */}
          <div className="lg:col-span-7 bg-[#0a1f17] border border-[#d4af37]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            {/* Map Visual Representation */}
            <div className="relative w-full aspect-[16/10] bg-[#05140f] rounded-xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Lake Represa Jurumirim Water Contour */}
              <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-bl from-[#00a86b]/20 via-[#0e3a2b]/30 to-transparent rounded-l-full pointer-events-none" />
              
              {/* Top Bar on Map */}
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2 bg-[#091b14]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#d4af37]/30 text-xs text-[#d4af37] font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#00a86b]" />
                  <span>RIVIERA DE SANTA CRISTINA 1</span>
                </div>
                <div className="text-[11px] text-white/50 tracking-wider font-mono">
                  REPRESA JURUMIRIM • SP
                </div>
              </div>

              {/* Pinpoint Landmark on Map */}
              <div className="relative z-10 my-auto flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-[#00a86b] opacity-40"></span>
                  <div className="w-14 h-14 rounded-full bg-[#0d281e] border-2 border-[#d4af37] flex items-center justify-center shadow-2xl">
                    <span className="text-white font-serif-luxury font-bold text-lg">M</span>
                  </div>
                </div>
                <div className="mt-3 text-center bg-[#081511]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15">
                  <div className="text-xs font-bold text-white tracking-wider">MIDORI PRIVATE CLUB</div>
                  <div className="text-[10px] text-[#00a86b] font-medium">Apenas 500m do Iate Club Náutico</div>
                </div>
              </div>

              {/* Bottom Reference on Map */}
              <div className="flex items-center justify-between text-[11px] text-white/60 relative z-10 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#d4af37]" /> Pista 100% asfaltada até o resort
                </span>
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#00a86b]" /> Portaria Blindada & Ronda 24h
                </span>
              </div>
            </div>

            {/* Strategic Location Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">500 Metros</div>
                <div className="text-sm text-white font-serif-luxury mt-0.5">Do Iate Club Náutico</div>
                <p className="text-[11px] text-white/50 mt-1">Caminhada rápida ou trajeto com patinete elétrico.</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <div className="text-xs text-[#00a86b] font-semibold uppercase tracking-wider">Vizinho Nobre</div>
                <div className="text-sm text-white font-serif-luxury mt-0.5">Ao lado do Haras Felipe Massa</div>
                <p className="text-[11px] text-white/50 mt-1">Região nobre, reservada e de alta valorização.</p>
              </div>

              <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
                <div className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Castello Branco</div>
                <div className="text-sm text-white font-serif-luxury mt-0.5">Apenas 3h de São Paulo</div>
                <p className="text-[11px] text-white/50 mt-1">Uma das melhores rodovias do Brasil com asfalto impecável.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Distance Selector from Major Centers */}
          <div className="lg:col-span-5 bg-[#0a1c15] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                  Tempos e Trajetos
                </span>
                <Navigation className="w-4 h-4 text-[#d4af37]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif-luxury text-white mb-2">
                Conexão com os Principais Polos
              </h3>
              <p className="text-xs sm:text-sm text-[#ede7dc]/70 font-light mb-6">
                Clique na sua cidade para visualizar a facilidade de acesso até o MIDORI:
              </p>

              {/* City selector list */}
              <div className="space-y-2">
                {DISTANCES.map((d) => {
                  const isSelected = selectedCity.city === d.city;
                  return (
                    <div
                      key={d.city}
                      onClick={() => setSelectedCity(d)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#102c21] border-[#d4af37] text-white shadow-md'
                          : 'bg-white/5 border-white/5 text-white/70 hover:bg-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-[#00a86b]' : 'text-white/20'}`} />
                        <div>
                          <div className="text-sm font-medium text-white">{d.city}</div>
                          <div className="text-[11px] text-white/50">{d.distanceKm} km de distância</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                          isSelected ? 'bg-[#d4af37]/20 text-[#d4af37]' : 'bg-white/5 text-white/60'
                        }`}>
                          {d.driveTime}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Detail card of selected city */}
            <div className="mt-6 p-4 rounded-xl bg-[#06140f] border border-[#00a86b]/30">
              <div className="text-xs text-[#00a86b] font-semibold uppercase tracking-wider">
                Rota a partir de {selectedCity.city}
              </div>
              <div className="text-xs text-white/80 mt-1 font-light">
                {selectedCity.routeDesc}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
