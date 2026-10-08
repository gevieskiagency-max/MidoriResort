import React, { useState } from 'react';
import { X, Shield, Lock, Send, CheckCircle2 } from 'lucide-react';
import { MidoriLogo } from './MidoriLogo';
import { WHATSAPP_SDR, trackAnalyticsEvent } from '../constants/brand';
import { LeadApplicationData } from '../types';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCota?: 'cota-8' | 'cota-4' | 'ambas';
}

export const PrivatePresentationModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  defaultCota = 'ambas'
}) => {
  const [formData, setFormData] = useState<LeadApplicationData>({
    name: '',
    phone: '',
    email: '',
    city: '',
    profession: 'Empresário(a)',
    cotaInteresse: defaultCota,
    melhorHorario: 'Manhã',
    mensagem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackAnalyticsEvent('conversao_formulario_privado', {
      cota: formData.cotaInteresse,
      profissao: formData.profession,
      cidade: formData.city
    });

    const msg = 
      `*SOLICITAÇÃO DE APRESENTAÇÃO PRIVADA - MIDORI PRIVATE CLUB*\n\n` +
      `*Nome:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.phone}\n` +
      `*Cidade/Região:* ${formData.city}\n` +
      `*Segmento/Profissão:* ${formData.profession}\n` +
      `*Interesse de Cota:* ${
        formData.cotaInteresse === 'cota-4' ? 'Cota 4 Famílias (1 semana por mês)' :
        formData.cotaInteresse === 'cota-8' ? 'Cota 8 Famílias (1 semana a cada 2 meses)' : 'Desejo avaliar ambas as opções'
      }\n` +
      `*Melhor Horário:* ${formData.melhorHorario}\n\n` +
      `_Gostaria de agendar a apresentação confidencial das cotas fundadoras._`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${WHATSAPP_SDR}?text=${encoded}`;

    // Small delay to show confirmation then redirect to WhatsApp
    setTimeout(() => {
      window.open(waUrl, '_blank');
      onClose();
      setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-[#091913] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black text-[#ede7dc] z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex justify-center mb-3">
            <MidoriLogo variant="stacked" size="sm" showSubtitle={true} colorMode="gold" />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] text-[11px] uppercase tracking-widest font-semibold mb-2">
            <Lock className="w-3 h-3" /> Apresentação Confidencial
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif-luxury font-normal text-white">
            Aplicação para Famílias Fundadoras
          </h2>
          <p className="text-xs sm:text-sm text-[#ede7dc]/70 mt-2 max-w-md mx-auto">
            O MIDORI está em fase restrita de formação do grupo de 36 cotas fundadoras. Preencha seus dados para receber o memorial descritivo e agendar atendimento privado.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#00a86b] mx-auto animate-bounce" />
            <h3 className="text-xl font-serif-luxury text-white">Aplicação Recebida com Sucesso</h3>
            <p className="text-sm text-white/70">
              Transferindo para a linha direta do consultor no WhatsApp...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dr. Roberto Guimarães"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#11271f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-white/40 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                  WhatsApp com DDD *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#11271f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-white/40 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                  Cidade / Região
                </label>
                <input
                  type="text"
                  placeholder="Ex: São Paulo, Bauru, Sorocaba..."
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#11271f] border border-white/15 focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] rounded-md px-3.5 py-2.5 text-sm text-white placeholder-white/40 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                  Segmento de Atuação
                </label>
                <select
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="w-full bg-[#11271f] border border-white/15 focus:border-[#d4af37] rounded-md px-3.5 py-2.5 text-sm text-white outline-none"
                >
                  <option value="Empresário(a)">Empresário(a) / Dono de Empresa</option>
                  <option value="Médico(a) / Área da Saúde">Médico(a) / Área da Saúde</option>
                  <option value="Agronegócio / Produtor Rural">Agronegócio / Produtor Rural</option>
                  <option value="Executivo(a) C-Level / Diretor">Executivo(a) C-Level / Diretor</option>
                  <option value="Investidor(a)">Investidor(a)</option>
                  <option value="Profissional Liberal">Profissional Liberal</option>
                  <option value="Outro">Outro segmento de alta renda</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#d4af37] font-semibold mb-1">
                Interesse Principal de Cota
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, cotaInteresse: 'cota-8' })}
                  className={`p-3 rounded-md text-xs font-medium border text-left transition-all ${
                    formData.cotaInteresse === 'cota-8'
                      ? 'border-[#00a86b] bg-[#00a86b]/15 text-white'
                      : 'border-white/10 bg-[#11271f]/50 text-white/70 hover:border-white/30'
                  }`}
                >
                  <div className="font-bold text-white">8 Famílias</div>
                  <div className="text-[11px] text-[#d4af37]">1 semana a cada 2 meses</div>
                  <div className="text-[10px] text-white/50">24 cotas totais</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, cotaInteresse: 'cota-4' })}
                  className={`p-3 rounded-md text-xs font-medium border text-left transition-all ${
                    formData.cotaInteresse === 'cota-4'
                      ? 'border-[#00a86b] bg-[#00a86b]/15 text-white'
                      : 'border-white/10 bg-[#11271f]/50 text-white/70 hover:border-white/30'
                  }`}
                >
                  <div className="font-bold text-white">4 Famílias</div>
                  <div className="text-[11px] text-[#d4af37]">1 semana por mês</div>
                  <div className="text-[10px] text-white/50">12 cotas totais</div>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, cotaInteresse: 'ambas' })}
                  className={`p-3 rounded-md text-xs font-medium border text-left transition-all ${
                    formData.cotaInteresse === 'ambas'
                      ? 'border-[#00a86b] bg-[#00a86b]/15 text-white'
                      : 'border-white/10 bg-[#11271f]/50 text-white/70 hover:border-white/30'
                  }`}
                >
                  <div className="font-bold text-white">Ambas</div>
                  <div className="text-[11px] text-[#d4af37]">Comparar ambas</div>
                  <div className="text-[10px] text-white/50">Quero avaliar</div>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 bg-[#00a86b] hover:bg-[#0bbd7b] text-white font-semibold uppercase tracking-[0.16em] text-xs rounded-md shadow-xl shadow-[#00a86b]/30 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Solicitar Apresentação Privada via WhatsApp</span>
            </button>

            <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-white/50">
              <Shield className="w-3.5 h-3.5 text-[#00a86b]" />
              <span>Seus dados são estritamente confidenciais e tratados com discrição.</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
