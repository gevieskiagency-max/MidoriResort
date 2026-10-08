export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  category: 'aquatico' | 'estrutura' | 'mobilidade' | 'experiencia';
  icon: string;
  highlight?: string;
}

export interface RivieraHighlight {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
}

export interface CotaConfig {
  id: 'cota-8' | 'cota-4';
  name: string;
  familiasPorLoft: number;
  totalCotas: number;
  semanasPorAno: number;
  frequencia: string;
  investimento: number;
  investimentoFormatado: string;
  custoMensalEstimado: string;
  descontoFundador: string;
  beneficios: string[];
  perfilIdeal: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'conceito' | 'uso' | 'gestao' | 'aquisicao';
}

export interface DistanceInfo {
  city: string;
  distanceKm: number;
  driveTime: string;
  routeDesc: string;
}

export interface LeadApplicationData {
  name: string;
  phone: string;
  email: string;
  city: string;
  profession: string;
  cotaInteresse: 'cota-8' | 'cota-4' | 'ambas';
  melhorHorario: string;
  mensagem?: string;
}
