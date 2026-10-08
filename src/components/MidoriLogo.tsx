import React from 'react';

export interface MidoriLogoProps {
  className?: string;
  variant?: 'standard' | 'horizontal' | 'compact' | 'full' | 'stacked' | 'emblem';
  colorMode?: 'green' | 'light' | 'white' | 'gold';
  showSubtitle?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * Geometria vetorial exata e oficial da Araucária do MIDORI,
 * extraída diretamente do arquivo original (Captura de tela 2026-10-06 164227).
 * Preserva 100% da identidade visual, curvas dos galhos e proporções oficiais.
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

/**
 * MidoriEmblem: Símbolo oficial da marca com a Araucária original exata.
 * Renderização vetorial matemática de alta definição, sem distorções nem alterações na arte.
 */
export const MidoriEmblem: React.FC<{
  className?: string;
  color?: string;
  bgColor?: string;
  size?: number | string;
}> = ({
  className = "w-10 h-10",
  color = "#00c77b"
}) => {
  return (
    <svg
      viewBox="27 9 245 222"
      className={`shrink-0 select-none ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Emblema Oficial Araucária MIDORI"
    >
      <g transform="translate(0, 239) scale(0.1, -0.1)" fill={color} stroke="none">
        <path d={ARAUCARIA_PATH} fillRule="evenodd" />
      </g>
    </svg>
  );
};

/**
 * MidoriLogo: Logo Oficial Original do MIDORI (Design Vetorial Fiel).
 * 
 * - Araucária original de 'Captura de tela 2026-10-06 164227' posicionada com perfeição no interior da letra 'O'.
 * - Tipografia 'MIDORI' com geometria e pesos oficiais.
 * - Subtítulo 'Um Novo Jeito de Viver a Natureza'.
 * - Cores invertidas de branco para verde esmeralda premium (#00c77b).
 * - Identidade visual 100% preservada e imutável.
 */
export const MidoriLogo: React.FC<MidoriLogoProps> = ({
  className = "",
  colorMode = 'green',
  showSubtitle = true,
  size = 'md'
}) => {
  // Cor verde esmeralda Midori oficial (invertida do branco conforme solicitado)
  const brandColor =
    colorMode === 'gold' ? '#e5c158' :
    (colorMode === 'white' || colorMode === 'light') ? '#ffffff' :
    '#00c77b'; // Verde Esmeralda Midori vibrante e luxuoso

  const subtitleColor =
    colorMode === 'gold' ? '#d4af37' :
    (colorMode === 'white' || colorMode === 'light') ? 'rgba(255, 255, 255, 0.9)' :
    '#00c77b';

  // Proporções exatas de escala para garantir harmonia em todas as telas
  const sizeConfig = {
    xs: {
      titleSize: "text-[20px] sm:text-[22px]",
      circleSize: "w-[19px] h-[19px] sm:w-[21px] sm:h-[21px]",
      subtitleSize: "text-[7.5px] sm:text-[8px] tracking-[0.06em]",
      gap: "mt-0.5",
      mx: "mx-[1px]"
    },
    sm: {
      titleSize: "text-[26px] sm:text-[30px]",
      circleSize: "w-[25px] h-[25px] sm:w-[29px] sm:h-[29px]",
      subtitleSize: "text-[9.5px] sm:text-[10.5px] tracking-[0.08em]",
      gap: "mt-0.5",
      mx: "mx-[1.5px]"
    },
    md: {
      titleSize: "text-[34px] sm:text-[40px]",
      circleSize: "w-[33px] h-[33px] sm:w-[39px] sm:h-[39px]",
      subtitleSize: "text-[12px] sm:text-[13.5px] tracking-[0.08em]",
      gap: "mt-1",
      mx: "mx-[2px]"
    },
    lg: {
      titleSize: "text-[46px] sm:text-[54px] lg:text-[60px]",
      circleSize: "w-[45px] h-[45px] sm:w-[53px] sm:h-[53px] lg:w-[59px] lg:h-[59px]",
      subtitleSize: "text-[15px] sm:text-[17.5px] lg:text-[19.5px] tracking-[0.09em]",
      gap: "mt-1 sm:mt-1.5",
      mx: "mx-[2.5px] sm:mx-[3.5px]"
    },
    xl: {
      titleSize: "text-[58px] sm:text-[68px] lg:text-[76px]",
      circleSize: "w-[57px] h-[57px] sm:w-[67px] sm:h-[67px] lg:w-[75px] lg:h-[75px]",
      subtitleSize: "text-[19px] sm:text-[22px] lg:text-[25px] tracking-[0.10em]",
      gap: "mt-2",
      mx: "mx-[3.5px] sm:mx-[4.5px]"
    }
  }[size];

  const isCentered = className.includes('items-center');

  return (
    <div 
      className={`inline-flex flex-col select-none ${isCentered ? 'items-center text-center' : 'items-start text-left'} ${className}`}
      style={{
        filter: 'drop-shadow(0 2px 10px rgba(0, 0, 0, 0.7))'
      }}
    >
      {/* Tipografia Principal: MID + Letra O com a Araucária Oficial Original + RI */}
      <div 
        className={`flex items-center font-sans font-black leading-none tracking-tight ${sizeConfig.titleSize}`}
        style={{ color: brandColor }}
      >
        <span>MID</span>

        {/* Letra O: Círculo Oficial com a Araucária Original Exata de Captura de tela 2026-10-06 164227 */}
        <span className={`relative inline-flex items-center justify-center shrink-0 ${sizeConfig.mx}`}>
          <svg
            viewBox="27 9 245 222"
            className={`${sizeConfig.circleSize} shrink-0`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Letra O com Araucária Oficial Midori"
          >
            <g transform="translate(0, 239) scale(0.1, -0.1)" fill={brandColor} stroke="none">
              <path d={ARAUCARIA_PATH} fillRule="evenodd" />
            </g>
          </svg>
        </span>

        <span>RI</span>
      </div>

      {/* Subtítulo Oficial da Marca: Um Novo Jeito de Viver a Natureza */}
      {showSubtitle && (
        <span
          className={`font-sans font-medium whitespace-nowrap leading-none ${sizeConfig.gap} ${sizeConfig.subtitleSize}`}
          style={{ color: subtitleColor }}
        >
          Um Novo Jeito de Viver a Natureza
        </span>
      )}
    </div>
  );
};
