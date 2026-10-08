import { CotaConfig, FaqItem, DistanceInfo, AmenityItem } from '../types';

/**
 * ============================================================================
 * CONFIGURAÇÃO DO WHATSAPP OFICIAL MIDORI
 * ============================================================================
 * Número Oficial: +55 41 9938-1774 (554199381774)
 */
export const WHATSAPP_SDR = "554199381774"; // WhatsApp oficial: +55 41 9938-1774

export const DEFAULT_WHATSAPP_MESSAGE = 
  "Olá! Vim pela página da Midori e gostaria de receber mais informações sobre as cotas.";

export const OFFICIAL_WHATSAPP_LINK = 
  "https://wa.me/554199381774?text=Ol%C3%A1%21%20Vim%20pela%20p%C3%A1gina%20da%20Midori%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20cotas.";

export function getWhatsAppLink(_customMessage?: string): string {
  // Retorna o link oficial padronizado com a mensagem configurada
  return OFFICIAL_WHATSAPP_LINK;
}

export function trackAnalyticsEvent(eventName: string, payload?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Custom event dispatch for Google Tag Manager, GA4 or Meta Pixel
    const event = new CustomEvent('midori_analytics_event', {
      detail: { eventName, payload, timestamp: new Date().toISOString() }
    });
    window.dispatchEvent(event);
    console.log(`[MIDORI Analytics] Event Tracked: ${eventName}`, payload || '');

    // Standard dataLayer push if GTM is injected
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...payload
      });
    }

    // Standard fbq if Meta Pixel is present
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', eventName, payload);
    }
  }
}

export const BRAND_INFO = {
  name: "MIDORI PRIVATE CLUB",
  shortName: "MIDORI",
  tagline: "Um Novo Jeito de Viver a Natureza",
  subtitle: "Resort Boutique Privativo às margens da Represa Jurumirim",
  locationName: "Riviera de Santa Cristina 1 – Represa Jurumirim, SP",
  launchYear: "PROJETO 2027",
  maxFounders: 36,
  totalTerreno: "1.200 m²",
  totalConstrucao: "589 m²",
  totalLofts: 6,
  piscinaArea: "66 m²",
  distanceIateClub: "500 metros",
  operationalCostPerMonth: "R$ 300 / mês",
  founderDiscountBadge: "20% OFF PARA FUNDADORES"
};

export const COTAS_CONFIG: CotaConfig[] = [
  {
    id: 'cota-8',
    name: "Cota Loft 8 Famílias",
    familiasPorLoft: 8,
    totalCotas: 24,
    semanasPorAno: 6,
    frequencia: "1 semana a cada 2 meses",
    investimento: 150000,
    investimentoFormatado: "R$ 150.000",
    custoMensalEstimado: "R$ 300 / mês",
    descontoFundador: "20% OFF na fase de fundadores",
    beneficios: [
      "6 semanas anuais completas de hospedagem",
      "Direito a 1 semana de exclusividade a cada dois meses",
      "Check-in terça-feira às 14h | Check-out segunda-feira às 12h",
      "Acesso completo ao acervo náutico (Jet Ski, Barco, SUPs, Canoas)",
      "Acesso aos patinetes e motos elétricas privativas do clube",
      "Aplicativo do proprietário com reservas e IA 24h",
      "Sistema MIDORI Flex (Trocar, Convidar e Transferir)"
    ],
    perfilIdeal: "Ideal para quem busca refúgio bimestral de alto padrão com o menor desembolso de capital e zero preocupação operacional."
  },
  {
    id: 'cota-4',
    name: "Cota Loft 4 Famílias",
    familiasPorLoft: 4,
    totalCotas: 12,
    semanasPorAno: 12,
    frequencia: "1 semana por mês (12 semanas/ano)",
    investimento: 300000,
    investimentoFormatado: "R$ 300.000",
    custoMensalEstimado: "R$ 300 / mês",
    descontoFundador: "20% OFF na fase de fundadores",
    beneficios: [
      "12 semanas anuais completas de hospedagem de luxo",
      "Praticamente 1 semana por mês para sua família",
      "Check-in terça-feira às 14h | Check-out segunda-feira às 12h",
      "Acesso irrestrito a todo o complexo de lazer, piscina 66m² e bangalôs",
      "Uso integral dos equipamentos náuticos (Jet Ski, Bote, SUPs, Canoas)",
      "Mobilidade ecológica completa (Patinetes e motos elétricas)",
      "Aplicativo exclusivo, governança hoteleira e inventário controlado",
      "Sistema MIDORI Flex com máxima flexibilidade de trocas e convites"
    ],
    perfilIdeal: "Projetado para quem valoriza rotina frequente de descompressão, com até 3 meses anuais de vivência à beira da represa."
  }
];

export const ASSETS_STACK: AmenityItem[] = [
  {
    id: 'jetski',
    title: '1 Jet Ski Sea-Doo Exclusivo',
    description: 'Embarcação náutica de alta performance pronta na marina para passeios na Represa Jurumirim.',
    category: 'aquatico',
    icon: 'Waves',
    highlight: 'Náutica Premium'
  },
  {
    id: 'bote',
    title: '1 Bote Inflável para 4 Pessoas',
    description: 'Ideal para passeios em família, pesca esportiva e travessias contemplativas nas enseadas.',
    category: 'aquatico',
    icon: 'Anchor',
    highlight: 'Família no Lago'
  },
  {
    id: 'canoas',
    title: '2 Canoas Canadenses',
    description: 'Design clássico para remar suavemente ao amanhecer ou ao entardecer no espelho d’água.',
    category: 'aquatico',
    icon: 'Ship',
    highlight: 'Contemplação'
  },
  {
    id: 'sup',
    title: '2 Stand Up Paddles (SUP)',
    description: 'Pranchas modernas para atividade física matinal e conexão direta com a natureza pura da represa.',
    category: 'aquatico',
    icon: 'Compass',
    highlight: 'Esporte & Saúde'
  },
  {
    id: 'motos-eletricas',
    title: '2 Motos Elétricas Silenciosas',
    description: 'Mobilidade ecológica para circular com liberdade pelas alamedas arborizadas da Riviera.',
    category: 'mobilidade',
    icon: 'Zap',
    highlight: 'Zero Emissão'
  },
  {
    id: 'patinetes',
    title: '5 Patinetes Elétricos de Alta Autonomia',
    description: 'Deslocamento rápido e divertido entre os lofts, piscina, clube náutico e as praias da Riviera.',
    category: 'mobilidade',
    icon: 'Bike',
    highlight: 'Praticidade'
  },
  {
    id: 'piscina',
    title: 'Piscina Privativa de 66 m²',
    description: 'Piscina com design contemporâneo, prainha e cercada por deck e vegetação exuberante.',
    category: 'estrutura',
    icon: 'Sparkles',
    highlight: '66 m² Espelho D’água'
  },
  {
    id: 'gourmet',
    title: 'Espaço Gourmet & Churrasqueira Americana',
    description: 'Área social integrada com bancadas em pedra nobre e equipamentos para confraternizações.',
    category: 'estrutura',
    icon: 'Flame',
    highlight: 'Gastronomia Social'
  },
  {
    id: 'bangalos',
    title: 'Bangalôs & Lounge Externo',
    description: 'Estruturas de madeira nobre e tecidos de área externa para leitura, descanso e drinques.',
    category: 'estrutura',
    icon: 'Armchair',
    highlight: 'Resort Atmosphere'
  },
  {
    id: 'lareira',
    title: 'Lareira Externa (Fire Pit)',
    description: 'Lounge rebaixado com fogo de chão para noites de vinho, céu estrelado e conversas memoráveis.',
    category: 'experiencia',
    icon: 'FlameKindling',
    highlight: 'Noites Estreladas'
  },
  {
    id: 'jardins',
    title: 'Jardins Contemplativos & Paisagismo',
    description: 'Paisagismo tropical-minimalista integrado à arquitetura, gerando privacidade e paz sonora.',
    category: 'experiencia',
    icon: 'Trees',
    highlight: 'Biofilia Pura'
  },
  {
    id: 'kids',
    title: 'Área Kids Segura e Criativa',
    description: 'Espaço lúdico projetado para os pequenos explorarem a criatividade em harmonia com a natureza.',
    category: 'estrutura',
    icon: 'Baby',
    highlight: 'Segurança Infantil'
  }
];

export const DISTANCES: DistanceInfo[] = [
  {
    city: "Avaré",
    distanceKm: 20,
    driveTime: "20 min",
    routeDesc: "Acesso rápido com supermercados de ponta, hospitais e conveniências."
  },
  {
    city: "Botucatu",
    distanceKm: 90,
    driveTime: "1h 10min",
    routeDesc: "Trajeto em rodovias duplicadas de excelente trafegabilidade."
  },
  {
    city: "Ourinhos",
    distanceKm: 120,
    driveTime: "1h 25min",
    routeDesc: "Conexão direta com polo comercial do sudoeste paulista."
  },
  {
    city: "Bauru",
    distanceKm: 140,
    driveTime: "1h 45min",
    routeDesc: "Rota ágil e segura pelo centro-oeste de SP."
  },
  {
    city: "Sorocaba",
    distanceKm: 210,
    driveTime: "2h 20min",
    routeDesc: "Autoestrada Castello Branco com asfalto impecável."
  },
  {
    city: "São Paulo (Capital)",
    distanceKm: 280,
    driveTime: "3h",
    routeDesc: "Rodovia Castello Branco com trajeto direto até a portaria do resort."
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'conceito',
    question: "O que estou adquirindo exatamente?",
    answer: "Você adquire uma cota de participação patrimonial dentro do MIDORI PRIVATE CLUB, um resort boutique composto por 6 lofts de arquitetura minimalista, 1.200m² de terreno, piscina privativa de 66m², área gourmet, bangalôs e acervo de mobilidade náutica e terrestre. É a união de propriedade imobiliária real com governança profissional de hotelaria."
  },
  {
    id: 'faq-2',
    category: 'uso',
    question: "Como funciona o direito de uso e as semanas anuais?",
    answer: "Dependendo da modalidade escolhida, você terá direito a 6 semanas (na cota de 8 famílias, com 1 semana a cada 2 meses) ou 12 semanas anuais (na cota de 4 famílias, com 1 semana por mês). O calendário foi desenhado para ser equitativo e transparente, distribuindo períodos ao longo das quatro estações."
  },
  {
    id: 'faq-3',
    category: 'uso',
    question: "Como são determinados os horários de check-in e check-out?",
    answer: "Para assegurar que o loft seja entregue em perfeito estado hoteleiro, a entrada acontece na terça-feira após as 14h e a saída na segunda-feira subsequente até as 12h. O intervalo de 26 horas entre a saída e a nova entrada é reservado exclusivamente para manutenção preventiva, higienização de padrão internacional e inventário."
  },
  {
    id: 'faq-4',
    category: 'uso',
    question: "Posso trocar semanas com outros cotistas ou transferir?",
    answer: "Sim! Através do sistema MIDORI Flex integrado ao aplicativo, você pode solicitar a permuta de semanas com outros membros da comunidade fundadora, transferir para terceiros autorizados conforme o regulamento, ou ainda presentear familiares e convidados com estadias sob sua autorização."
  },
  {
    id: 'faq-5',
    category: 'gestao',
    question: "Quem administra e cuida da manutenção, limpeza e piscina?",
    answer: "Toda a gestão operacional é realizada profissionalmente pela Operação Midori. Você nunca precisará contratar diaristas, limpar piscina, lidar com jardineiros ou coordenar reparos. Ao chegar, o loft está climatizado, limpo, equipado e os equipamentos náuticos e elétricos estão revisados e prontos para uso."
  },
  {
    id: 'faq-6',
    category: 'gestao',
    question: "Existe aplicativo do proprietário?",
    answer: "Sim. O aplicativo MIDORI concentra em uma única interface inteligente: visualização de calendário e disponibilidade, check-in digital, inventário de itens, controle financeiro transparente, acompanhamento da obra em tempo real, suporte com concierge assistido por IA 24h e a rede exclusiva de membros fundadores."
  },
  {
    id: 'faq-7',
    category: 'conceito',
    question: "Onde fica o MIDORI e qual a relação com a Riviera de Santa Cristina?",
    answer: "O MIDORI 1 está situado dentro da prestigiada Riviera de Santa Cristina 1, às margens da Represa Jurumirim, a apenas 500 metros do Iate Clube. Isso significa que, além do complexo privativo do MIDORI, você e sua família desfrutam de toda a megaestrutura do resort da Riviera: clube náutico, praias privativas, marina, quadras, restaurantes e segurança 24h."
  },
  {
    id: 'faq-8',
    category: 'aquisicao',
    question: "Quais são as condições de investimento e custo operacional?",
    answer: "As cotas partem de R$ 150.000 (8 famílias, 6 semanas/ano) e R$ 300.000 (4 famílias, 12 semanas/ano), com condição especial de 20% OFF na fase de Famílias Fundadoras. O custo operacional médio projetado é de apenas R$ 300/mês — infinitamente inferior ao custo de manter um caseiro, piscina e segurança em um imóvel individual."
  },
  {
    id: 'faq-9',
    category: 'aquisicao',
    question: "Qual o próximo passo para conhecer os detalhes do projeto?",
    answer: "Como se trata de um projeto estritamente limitado a 36 famílias fundadoras, o atendimento é individualizado e confidencial. Basta clicar em 'Solicitar Apresentação Privada' para agendar uma conversa direta com nosso especialista via WhatsApp e receber o memorial descritivo completo."
  }
];
