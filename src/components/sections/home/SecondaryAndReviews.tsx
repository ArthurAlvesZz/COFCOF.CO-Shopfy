import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp, Star } from 'lucide-react';
import { media } from '../../../config/media';

export function HomeSecondarySales() {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-20 md:py-28 fi border-t border-[rgba(10,10,10,0.05)]">
      <div className="bx">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            Também temos cafés para momentos específicos.
          </h2>
          <p className="text-lg md:text-base text-[#6B6B6B] font-light max-w-2xl mx-auto">
            Prefere começar devagar? Compre um lote avulso ou nossos sachês sem compromisso de assinatura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lotes Avulsos */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-[16/9] md:aspect-[4/3] flex items-end p-8" onClick={() => navigate('/cafes')}>
            <img src={media.images.roastFeature} alt="Cafés Avulsos" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 text-white w-full">
              <span className="text-[#c9a263] border border-[#c9a263]/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">Sinta o sabor</span>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold font-['Montserrat'] uppercase mb-2">Comprar Avulso</h3>
                  <p className="text-white/70 text-sm max-w-[250px]">Lotes únicos para experimentar uma vez.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  &rarr;
                </div>
              </div>
            </div>
          </div>

          {/* Drip Coffee */}
          <div className="group cursor-pointer rounded-2xl overflow-hidden relative aspect-[16/9] md:aspect-[4/3] flex items-end p-8" onClick={() => navigate('/cafes')}>
            <img src={media.images.b2bOffice} alt="Drip Coffee" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="relative z-10 text-white w-full">
              <span className="text-[#c9a263] border border-[#c9a263]/50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block">1 Minuto, Sem Sujeira</span>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold font-['Montserrat'] uppercase mb-2">Drip Coffee</h3>
                  <p className="text-white/70 text-sm max-w-[250px]">Café especial em sachês filtrantes.</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                  &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePerceptions() {
  return (
    <section className="bg-[#EFE7DB] py-20 md:py-28 fi border-t border-[rgba(10,10,10,0.05)]">
      <div className="bx">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[#7A6654]/30 text-[#7A6654] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase">
              O que muda
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            A diferença na primeira entrega
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm border border-[rgba(10,10,10,0.05)]">
            <div className="flex text-[#c9a263]"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <div className="text-center md:text-left">
              <p className="text-lg font-['Montserrat'] font-bold text-[#0A0A0A] italic mb-1">"O aroma já toma a casa quando abro a caixa."</p>
              <span className="text-sm font-bold text-[#7A6654] uppercase tracking-wider">Aroma Mais Presente</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm border border-[rgba(10,10,10,0.05)]">
            <div className="flex text-[#c9a263]"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <div className="text-center md:text-left">
              <p className="text-lg font-['Montserrat'] font-bold text-[#0A0A0A] italic mb-1">"Finalmente consegui parar de colocar açúcar no café."</p>
              <span className="text-sm font-bold text-[#7A6654] uppercase tracking-wider">Menos Amargor, Mais Doçura</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 shadow-sm border border-[rgba(10,10,10,0.05)]">
            <div className="flex text-[#c9a263]"><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /></div>
            <div className="text-center md:text-left">
              <p className="text-lg font-['Montserrat'] font-bold text-[#0A0A0A] italic mb-1">"Não preciso mais perder tempo na gôndola do mercado."</p>
              <span className="text-sm font-bold text-[#7A6654] uppercase tracking-wider">Praticidade Absoluta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeFAQ() {
  const faqs = [
    { q: "Posso cancelar ou pausar minha assinatura?", a: "Sim, a qualquer momento, sem taxas e direto pelo painel do cliente. Sem burocracia." },
    { q: "O café vem moído ou em grãos?", a: "Você escolhe. No momento da assinatura, você define se prefere grãos inteiros ou o tipo de moagem para o seu método favorito." },
    { q: "Qual plano é ideal para mim?", a: "Para 1 ou 2 xícaras por dia: Essencial (250g). Todos os dias na medida certa: Rotina (500g). Consumo intenso: Intenso (1kg)." },
    { q: "A entrega é mensal?", a: "Sim, os envios são programados mensalmente com base na sua data de adesão para garantir a torra sempre fresca." },
    { q: "Posso trocar o perfil depois?", a: "Com certeza. A flexibilidade é total. Você pode alterar seu perfil de torra ou plano a qualquer momento para o próximo ciclo." },
    { q: "Posso comprar sem assinar?", a: "Sim, você pode comprar cafés e kits avulsos na nossa loja quando quiser, mas assinantes têm envio facilitado e valor reduzido." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-20 md:py-32 fi">
      <div className="bx max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            Ainda com dúvidas?
          </h2>
          <p className="text-lg text-[#6B6B6B] font-light">Tudo que você precisa saber antes de assinar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-[rgba(10,10,10,0.1)] rounded-xl overflow-hidden transition-all bg-[#F6F1EB]/30">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left font-bold font-['Montserrat'] uppercase text-sm tracking-wide text-[#0A0A0A] hover:bg-[#F6F1EB] transition-colors"
              >
                {faq.q}
                {openIndex === idx ? <ChevronUp size={20} className="text-[#c9a263]" /> : <ChevronDown size={20} className="text-[rgba(10,10,10,0.3)]" />}
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-2 text-[#6B6B6B] border-t border-[rgba(10,10,10,0.05)] bg-white text-sm md:text-base leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeFinalCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-36 fi text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[#c9a263] opacity-[0.03] animate-pulse"></div>
      <div className="bx relative z-10 max-w-3xl">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#F6F1EB] uppercase tracking-tighter leading-[1.05] font-['Montserrat'] mb-6">
          Seu café de todo mês não precisa ser comum.
        </h2>
        
        <p className="text-lg md:text-xl text-[rgba(246,241,235,0.7)] font-light mb-12 max-w-2xl mx-auto">
          Monte sua assinatura CofCof.co e receba café especial com torra fresca, origem rastreável e curadoria feita para sua rotina.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <button onClick={() => navigate('/assinaturas')} className="plan-card__cta cta-gold w-full" style={{ marginTop: 0 }}>
            Montar assinatura
          </button>
          
          <button onClick={() => navigate('/cafes')} className="plan-card__cta cta-ghost-gold w-full" style={{ marginTop: 0 }}>
            Ver cafés avulsos
          </button>
        </div>
      </div>
    </section>
  );
}
