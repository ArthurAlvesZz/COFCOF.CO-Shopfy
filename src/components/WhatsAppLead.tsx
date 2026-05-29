import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, ArrowLeft, Send } from 'lucide-react';

const WhatsAppIcon = ({ className = "w-7 h-7" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function WhatsAppLead() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('');
  const [profile, setProfile] = useState('');
  
  const modalRef = useRef<HTMLDivElement>(null);

  // Close formatting helper
  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, '');
    if (val.length > 11) val = val.slice(0, 11);
    
    // Format: (XX) XXXXX-XXXX
    if (val.length > 2) {
      val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
    }
    if (val.length > 10) {
      val = `${val.slice(0, 10)}-${val.slice(10)}`;
    }
    setWhatsapp(val);
  };

  const isStep1Valid = name.trim().length > 1 && whatsapp.replace(/\D/g, '').length >= 10;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSubmit = () => {
    const phone = '5534998728882';
    const cleanWhatsapp = whatsapp.replace(/\D/g, '');
    const cleanName = name.trim();
    
    const text = `Olá, meu nome é ${cleanName}.\nMeu WhatsApp é ${cleanWhatsapp}.\nTenho interesse em: ${interest}.\nMeu perfil: ${profile}.\nVim pelo site da CofCof.`;
    
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="flex flex-col h-full animate-fade-in px-6 py-6 pb-24 md:pb-6 text-[#f4efe6]">
            <h3 className="text-2xl font-display font-semibold mb-2 leading-tight">Como podemos te chamar?</h3>
            <p className="text-sm text-white/60 mb-8">Seus dados ficam seguros conosco.</p>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">Seu nome</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João Silva" 
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-[#f4efe6] outline-none focus:border-[#C6A27A] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/70 mb-1.5 uppercase tracking-wide">Seu WhatsApp com DDD</label>
                <input 
                  type="tel" 
                  value={whatsapp}
                  onChange={handleWhatsappChange}
                  placeholder="(34) 99999-9999" 
                  className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3.5 text-[#f4efe6] outline-none focus:border-[#C6A27A] transition-colors"
                />
              </div>
            </div>
            
            <div className="mt-auto md:mt-0 pt-4">
              <button 
                onClick={(e) => {
                  setStep(2);
                }}
                className={`w-full font-bold uppercase tracking-wider py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                  isStep1Valid 
                    ? 'bg-[#C6A27A] text-[#080705] hover:bg-[#d4b492]' 
                    : 'bg-[#C6A27A] text-[#080705] opacity-50'
                }`}
              >
                Continuar <ArrowRight size={18} />
              </button>
            </div>
          </div>
        );
      case 2:
        const interests = [
          "Assinar cafés premiados",
          "Comprar café avulso",
          "Presentear alguém",
          "Café para minha empresa",
          "Falar com atendimento"
        ];
        return (
          <div className="flex flex-col h-full animate-fade-in px-6 py-6 pb-24 md:pb-6 text-[#f4efe6]">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setStep(1)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                <ArrowLeft size={18} />
              </button>
              <h3 className="text-xl font-display font-semibold leading-tight">O que você procura?</h3>
            </div>
            
            <div className="flex flex-col gap-2.5 mt-2 overflow-y-auto">
              {interests.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setInterest(item);
                    setStep(3);
                  }}
                  className="bg-[#111] border border-white/10 hover:border-[#C6A27A] hover:bg-[#1a1a1a] rounded-xl px-5 py-4 text-left text-[15px] font-medium text-[#f4efe6] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        const profiles = [
          "Estou começando no café especial",
          "Já compro café especial",
          "Quero receber todo mês",
          "Quero conhecer os lotes primeiro",
          "Quero uma proposta B2B"
        ];
        return (
          <div className="flex flex-col h-full animate-fade-in px-6 py-6 pb-24 md:pb-6 text-[#f4efe6]">
            <div className="flex items-center gap-3 mb-6">
              <button onClick={() => setStep(2)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/60 hover:text-white">
                <ArrowLeft size={18} />
              </button>
              <h3 className="text-xl font-display font-semibold leading-tight">Qual combina mais com você?</h3>
            </div>
            
            <div className="flex flex-col gap-2.5 mt-2 overflow-y-auto">
              {profiles.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setProfile(item);
                    setStep(4);
                  }}
                  className="bg-[#111] border border-white/10 hover:border-[#C6A27A] hover:bg-[#1a1a1a] rounded-xl px-5 py-4 text-left text-[15px] font-medium text-[#f4efe6] transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col h-full animate-fade-in px-6 py-6 pb-24 md:pb-6 text-center text-[#f4efe6]">
            <h3 className="text-2xl font-display font-semibold mb-2 leading-tight">Perfeito.</h3>
            <p className="text-sm text-white/60 mb-8">Vamos te atender melhor com essas informações.</p>
            
            <div className="bg-[#111] border border-white/10 rounded-xl p-5 text-left text-[15px] mb-8 space-y-3 shadow-sm">
              <p><span className="text-white/40 text-sm uppercase tracking-wide font-semibold block mb-0.5">Nome</span> <span className="text-[#f4efe6] font-medium">{name}</span></p>
              <p><span className="text-white/40 text-sm uppercase tracking-wide font-semibold block mb-0.5">WhatsApp</span> <span className="text-[#f4efe6] font-medium">{whatsapp}</span></p>
              <p><span className="text-white/40 text-sm uppercase tracking-wide font-semibold block mb-0.5">Interesse</span> <span className="text-[#f4efe6] font-medium">{interest}</span></p>
              <p><span className="text-white/40 text-sm uppercase tracking-wide font-semibold block mb-0.5">Perfil</span> <span className="text-[#f4efe6] font-medium">{profile}</span></p>
            </div>
            
            <div className="mt-auto space-y-3">
              <button 
                onClick={handleSubmit}
                className="w-full bg-[#25D366] text-white font-bold uppercase tracking-wider py-4 rounded-xl hover:bg-[#1CA750] shadow-[0_4px_14px_rgba(37,211,102,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" /> Chamar no WhatsApp
              </button>
              <button 
                onClick={() => setStep(3)}
                className="w-full bg-transparent border border-white/20 text-white/70 font-bold uppercase tracking-wider py-3.5 rounded-xl hover:bg-white/5 hover:text-white transition-all"
              >
                Voltar
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay do modal */}
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        
        {/* Modal Container */}
        <div className="absolute inset-0 md:inset-auto md:bottom-28 md:right-8 flex flex-col md:w-[400px] md:h-[auto] md:max-h-[80vh] justify-end md:justify-center pointers-events-none">
          <div 
            ref={modalRef}
            className={`pointer-events-auto w-full md:w-full bg-[#080705] border md:border-white/10 md:shadow-2xl md:rounded-2xl rounded-t-[32px] border-t border-t-white/10 transition-transform duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] transform flex flex-col max-h-[90vh] md:max-h-[85vh] relative ${isOpen ? 'translate-y-0' : 'translate-y-full md:scale-95 md:translate-y-8'}`}
          >
            {/* Fechar modal */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-10 p-2 bg-[#111] hover:bg-[#222] border border-white/10 rounded-full text-white/60 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            
            {/* Header decorativo no mobile */}
            <div className="h-1.5 w-12 bg-white/20 rounded-full mx-auto mt-4 mb-2 md:hidden" />
            
            <div className="flex-1 overflow-y-auto w-full scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {renderStep()}
            </div>
          </div>
        </div>
      </div>
      
      {/* Botão flutuante */}
      <button 
        onClick={() => setIsOpen(true)}
        aria-label="Abrir atendimento pelo WhatsApp"
        className={`fixed right-6 z-[9000] flex items-center justify-center rounded-full transition-all duration-300 hover:scale-[1.08] active:scale-95 ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
        style={{ 
          width: '60px', 
          height: '60px', 
          bottom: 'max(24px, env(safe-area-inset-bottom))',
          backgroundColor: '#25D366',
          color: '#ffffff',
          boxShadow: '0 8px 30px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.2) inset',
          opacity: isOpen ? 0 : 1
        }}
      >
        <WhatsAppIcon className="w-[32px] h-[32px]" />
        
        {/* Pinging indicator for better visibility */}
        <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C6A27A] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C6A27A] border-2 border-[#25D366]"></span>
        </span>
      </button>
    </>
  );
}
