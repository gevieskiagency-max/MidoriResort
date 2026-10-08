import React from 'react';
import { getWhatsAppLink } from '../constants/brand';

/**
 * Geometria vetorial exata da Araucária oficial do MIDORI
 */
const ARAUCARIA_PATH = 
  "M1152 2279 c-436 -91 -769 -433 -864 -884 -16 -77 -16 -323 0 -400 " +
  "92 -436 400 -765 821 -876 97 -26 343 -37 451 -20 386 60 737 352 865 718 50 " +
  "143 60 208 60 378 0 214 -34 355 -126 524 -167 304 -465 518 -799 571 -106 16 " +
  "-303 11 -408 -11z m621 -572 l37 -16 0 -96 c0 -87 -2 -96 -17 -91 -10 3 -87 " +
  "35 -171 70 l-153 64 3 -75 3 -75 197 -82 198 -81 0 -97 0 -97 -117 49 c-65 27 " +
  "-155 64 -200 83 l-83 35 0 -68 0 -68 235 -97 235 -98 0 -93 c0 -52 -2 -94 -5 " +
  "-94 -3 0 -128 50 -279 110 l-274 111 -275 -111 c-151 -60 -277 -110 -281 -110 " +
  "-3 0 -6 42 -6 94 l0 93 203 83 c299 123 277 109 277 180 0 44 -4 60 -14 60 -7 " +
  "0 -94 -34 -192 -75 -98 -41 -182 -75 -186 -75 -5 0 -8 42 -8 94 l0 93 188 78 " +
  "c103 43 193 82 200 88 18 14 17 137 -2 137 -7 0 -76 -27 -154 -59 -206 -87 " +
  "-183 -90 -180 24 l3 97 214 88 214 88 176 -73 c97 -40 193 -79 214 -88z m-318 " +
  "-879 l66 -33 -3 -90 -3 -90 -137 -3 -138 -3 0 94 0 94 68 31 c37 17 70 31 74 " +
  "31 4 1 37 -14 73 -31z";

export const ClosingSection: React.FC = () => {
  return (
    <footer id="fechamento" className="bg-[#071d16] text-[#ede7dc] relative overflow-hidden border-t border-white/5">
      
      {/* Container Principal em 2 Colunas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* COLUNA ESQUERDA: Textos Institucionais */}
          <div className="lg:col-span-7 flex flex-col justify-between relative z-10 text-left">
            
            {/* Bloco Superior: Pre-header + Título Midori */}
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-[#caa868] font-bold block mb-4">
                O PRÓXIMO CAPÍTULO SÓ DEPENDE DE VOCÊ
              </span>

              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif-luxury font-normal text-white leading-none tracking-tight">
                Midori.
              </h2>

              <div className="w-full border-b border-white/15 my-6 sm:my-8" />

              {/* 3 Frases de Impacto */}
              <div className="space-y-2.5 sm:space-y-3.5 mb-8 sm:mb-10">
                <p className="text-xl sm:text-2xl lg:text-[28px] font-serif-luxury font-normal text-white leading-snug">
                  Um ativo que gera <span className="text-[#cca462] font-normal">memórias.</span>
                </p>
                <p className="text-xl sm:text-2xl lg:text-[28px] font-serif-luxury font-normal text-white leading-snug">
                  Uma operação que gera <span className="text-[#cca462] font-normal">tranquilidade.</span>
                </p>
                <p className="text-xl sm:text-2xl lg:text-[28px] font-serif-luxury font-normal text-white leading-snug">
                  Um destino que gera <span className="text-[#cca462] font-normal">desejo.</span>
                </p>
              </div>

              {/* Pilares Institucionais */}
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#e8dfd1]/80 font-medium pb-2">
                <span>NATUREZA</span>
                <span>HOSPITALIDADE</span>
                <span>TECNOLOGIA</span>
              </div>
            </div>

            {/* Bloco Central: Emblema Oficial Araucária Perfeitamente Centralizado */}
            <div className="my-8 sm:my-10 flex items-center justify-center">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/[0.02] border border-white/10 flex items-center justify-center p-2.5 sm:p-3 shadow-xl">
                {/* Anel intermediário translúcido */}
                <div className="absolute inset-1.5 rounded-full border border-[#00a86b]/25 pointer-events-none" />
                
                {/* Círculo interno verde esmeralda */}
                <div className="w-full h-full rounded-full bg-[#00a86b]/15 border border-[#00a86b]/40 flex items-center justify-center p-2.5 sm:p-3">
                  <svg
                    viewBox="41.5 24.5 190 190"
                    className="w-full h-full drop-shadow-sm"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Emblema Araucária MIDORI"
                  >
                    <g transform="translate(0, 239) scale(0.1, -0.1)" fill="#00a86b" stroke="none">
                      <path d={ARAUCARIA_PATH} fillRule="evenodd" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>

            {/* Bloco Inferior: Próximo Passo + Assinatura */}
            <div className="relative">
              {/* Linha Divisória */}
              <div className="w-full border-t border-white/15 pt-5 sm:pt-6 mb-4 sm:mb-5 relative z-10">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.24em] text-[#cca462] font-bold block mb-2">
                  PRÓXIMO PASSO
                </span>
                <p className="text-xs sm:text-sm text-white/85 font-light leading-relaxed max-w-xl">
                  Depósito e assinatura de intenção de compra, assinatura de contratos, boas vindas e acessos a sistemas.
                </p>
              </div>

              {/* Linha Divisória Final */}
              <div className="w-full border-t border-[#caa868]/30 pt-4 sm:pt-5 relative z-10">
                <h3 className="text-base sm:text-lg font-sans font-black tracking-wider text-white uppercase leading-none mb-1">
                  MIDORI
                </h3>
                <p className="text-xs sm:text-sm text-[#cca462] font-serif-luxury italic">
                  Um novo jeito de viver a natureza.
                </p>
              </div>

            </div>

          </div>

          {/* COLUNA DIREITA: Grande Bloco Visual Verde Esmeralda */}
          <div className="lg:col-span-5 flex items-stretch">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com o consultor MIDORI no WhatsApp"
              className="w-full bg-[#00a86b] hover:bg-[#0bbd7b] transition-all rounded-3xl sm:rounded-[36px] lg:rounded-[40px] shadow-2xl shadow-[#00a86b]/20 flex flex-col items-center justify-center text-center p-8 sm:p-12 lg:p-14 min-h-[360px] sm:min-h-[440px] lg:min-h-[520px] relative overflow-hidden group cursor-pointer block"
            >
              
              {/* Brilho radial sutil interno */}
              <div className="absolute inset-0 bg-radial-gradient from-white/15 to-transparent pointer-events-none" />

              {/* Logo Oficial MIDORI com Araucária no 'O' */}
              <div className="relative z-10 flex flex-col items-center select-none">
                
                {/* MID + O com Araucária recortada + RI */}
                <div className="flex items-center justify-center font-sans font-black tracking-tight text-white text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-none">
                  <span>MID</span>
                  
                  {/* Círculo Branco com Araucária em Verde Esmeralda */}
                  <span className="relative inline-flex items-center justify-center mx-1 sm:mx-1.5 md:mx-2 shrink-0">
                    <svg
                      viewBox="41.5 24.5 190 190"
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[72px] lg:h-[72px] xl:w-20 xl:h-20 shrink-0"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-label="Araucária MIDORI"
                    >
                      <g transform="translate(0, 239) scale(0.1, -0.1)" fill="#ffffff" stroke="none">
                        <path d={ARAUCARIA_PATH} fillRule="evenodd" />
                      </g>
                    </svg>
                  </span>

                  <span>RI</span>
                </div>

                {/* Frase Oficial */}
                <p className="text-base sm:text-xl md:text-2xl font-sans font-semibold text-white tracking-normal mt-4 sm:mt-6 leading-tight max-w-sm sm:max-w-md">
                  Um Novo Jeito de Viver a Natureza
                </p>

              </div>

            </a>
          </div>

        </div>
      </div>

      {/* Barra de Direitos e Rodapé Institucional */}
      <div className="border-t border-white/10 py-6 sm:py-8 bg-[#04120e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-white/50 font-light">
          <div>
            MIDORI PRIVATE CLUB © {new Date().getFullYear()} • Riviera de Santa Cristina • Represa Jurumirim • SP
          </div>
          <div className="flex items-center gap-3 text-[11px] text-white/60">
            <span>Resort Boutique Privativo • 36 Famílias Fundadoras</span>
            <span>•</span>
            <a 
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#d4af37] hover:underline"
            >
              WhatsApp: +55 (41) 9938-1774
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};
