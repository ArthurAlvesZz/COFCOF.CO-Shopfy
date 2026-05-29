import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { media } from '../../../config/media';

export function HomePlans() {
  const navigate = useNavigate();

  const handlePlanSelection = () => {
    navigate('/assinaturas');
  };

  return (
    <section className="bg-[#EFE7DB] py-20 md:py-32 fi">
      <div className="bx">
        <div className="text-center mb-16 md:mb-24">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[#7A6654]/30 text-[#7A6654] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase">
              Planos de assinatura
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            Escolha sua assinatura
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] font-light max-w-2xl mx-auto">
            Planos criados para sua rotina, sempre com envio grátis e sem fidelidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="plan-card bg-white rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow border border-[rgba(10,10,10,0.05)]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-[#0A0A0A] mb-2">Plano Essencial</h3>
              <div className="text-[#c9a263] font-bold tracking-widest text-sm uppercase mb-4">250g / mês</div>
              <p className="text-[#6B6B6B] text-sm">Para quem toma café especial algumas vezes na semana.</p>
            </div>
            
            <div className="mb-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Café especial 85+</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Torra fresca</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Grãos ou moído</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="plan-price">
                <strong>R$ 54</strong><span>,90/mês</span>
              </div>
              <button onClick={handlePlanSelection} className="plan-card__cta">
                Assinar 250g por mês
              </button>
              <p className="plan-card__note">
                Pause ou ajuste antes do próximo envio.
              </p>
            </div>
          </div>

          {/* Card 2 - Destaque */}
          <div className="plan-card is-featured bg-[#0A0A0A] rounded-2xl p-8 flex flex-col hover:shadow-2xl transition-shadow relative transform lg:-translate-y-4 shadow-xl border border-[#c9a263]/30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c9a263] text-[#0A0A0A] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
              Mais Selecionado
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-white mb-2">Plano Rotina</h3>
              <div className="text-[#c9a263] font-bold tracking-widest text-sm uppercase mb-4">500g / mês</div>
              <p className="text-[rgba(246,241,235,0.7)] text-sm">A quantidade ideal para quem prepara café todos os dias.</p>
            </div>
            
            <div className="mb-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-white"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Café especial 85+</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Torra fresca</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Grãos ou moído</li>
                <li className="flex items-start gap-3 text-sm text-white"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Origem rastreável</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="plan-price dark-bg">
                <strong>R$ 89</strong><span>,90/mês</span>
              </div>
              <button onClick={handlePlanSelection} className="plan-card__cta">
                Assinar 500g por mês
              </button>
              <p className="plan-card__note dark-bg">
                Pause ou ajuste antes do próximo envio.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="plan-card bg-white rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow border border-[rgba(10,10,10,0.05)]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-[#0A0A0A] mb-2">Plano Intenso</h3>
              <div className="text-[#c9a263] font-bold tracking-widest text-sm uppercase mb-4">1kg / mês</div>
              <p className="text-[#6B6B6B] text-sm">Para casa cheia, escritórios ou consumidores assíduos.</p>
            </div>
            
            <div className="mb-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Café especial 85+</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Torra fresca</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Até 2 perfis diferentes</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="plan-price">
                <strong>R$ 159</strong><span>,90/mês</span>
              </div>
              <button onClick={handlePlanSelection} className="plan-card__cta">
                Assinar 1kg por mês
              </button>
              <p className="plan-card__note">
                Pause ou ajuste antes do próximo envio.
              </p>
            </div>
          </div>

          {/* Card 4 - Sachês */}
          <div className="plan-card bg-white rounded-2xl p-8 flex flex-col hover:shadow-xl transition-shadow border border-[rgba(10,10,10,0.05)]">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-[#0A0A0A] mb-2">Plano Sachês</h3>
              <div className="text-[#7A6654] font-bold tracking-widest text-sm uppercase mb-4">Drip Coffee</div>
              <p className="text-[#6B6B6B] text-sm">Para quem quer praticidade extrema sem abrir mão da qualidade.</p>
            </div>
            
            <div className="mb-8 flex-1">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> 30 sachês individuais</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Nitrogênio (frescor)</li>
                <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Pronto em 1 minuto</li>
              </ul>
            </div>

            <div className="mt-auto">
              <div className="plan-price">
                <strong>R$ 119</strong><span>,90/mês</span>
              </div>
              <button onClick={handlePlanSelection} className="plan-card__cta">
                Assinar 30 sachês por mês
              </button>
              <p className="plan-card__note">
                Pause ou ajuste antes do próximo envio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeQuiz() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#0A0A0A] py-16 fi border-t border-[rgba(246,241,235,0.1)]">
      <div className="bx">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[rgba(246,241,235,0.03)] p-8 md:p-12 rounded-2xl border border-[rgba(246,241,235,0.08)]">
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold uppercase text-[#F6F1EB] font-['Montserrat'] tracking-tight mb-3">
              Em dúvida de qual plano assinar?
            </h3>
            <p className="text-[rgba(246,241,235,0.7)] text-lg">
              Descubra seu plano ideal e seu perfil de torra favorito em menos de 1 minuto.
            </p>
          </div>
          <div>
            <button onClick={() => navigate('/assinaturas')} className="btn btn-sd text-[13px] px-8 py-4 whitespace-nowrap rounded-sm">
              <span>Fazer o Quiz Rápido &rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeSachetsGateway() {
  const navigate = useNavigate();

  const saches = [
    {
      nome: "Cerrado Clássico",
      tag: "Mais fácil de gostar",
      descricao: "Equilibrado, doce e confortável para todos os dias.",
      notas: ["Chocolate", "Castanhas", "Caramelo"],
      img: media.images.sachets.classico
    },
    {
      nome: "Frutado Especial",
      tag: "Mais aromático",
      descricao: "Vivo, aromático e surpreendente na xícara.",
      notas: ["Frutas amarelas", "Mel", "Acidez delicada"],
      img: media.images.sachets.frutado
    },
    {
      nome: "Intenso da Manhã",
      tag: "Mais encorpado",
      descricao: "Marcante, estruturado e perfeito para começar o dia.",
      notas: ["Cacau", "Nozes", "Final prolongado"],
      img: media.images.sachets.intenso
    },
    {
      nome: "Suave",
      tag: "Mais leve para rotina",
      descricao: "Limpo, delicado e fácil de beber todos os dias.",
      notas: ["Mel", "Amêndoas", "Final limpo"],
      img: media.images.sachets.suave
    }
  ];

  return (
    <section className="bg-[#EFE7DB] py-20 lg:py-32 fi border-t border-[rgba(10,10,10,0.05)]" id="saches">
      <div className="bx">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Content */}
          <div className="lg:w-[45%] lg:sticky lg:top-32 lg:h-max">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 border border-[#7A6654]/30 text-[#7A6654] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase">
                SACHÊS COFCOF 200G
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-6">
              Comece com 200g.<br/>Depois assine seu favorito.
            </h2>
            
            <p className="text-lg text-[#6B6B6B] font-light mb-6">
              Experimente diferentes perfis de cafés especiais CofCof antes de montar sua assinatura mensal. Escolha sabores mais doces, frutados, intensos ou suaves e descubra qual combina com sua rotina.
            </p>
            
            <p className="text-[#c9a263] font-semibold tracking-wider text-sm uppercase mb-8">
              "Mais leve que uma assinatura. Mais especial que um café comum."
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> 200g para experimentar sem compromisso</li>
              <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Vários perfis sensoriais</li>
              <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Torra fresca e origem selecionada</li>
              <li className="flex items-start gap-3 text-sm text-[#0A0A0A]"><Check size={18} className="text-[#c9a263] shrink-0 mt-0.5" /> Caminho natural para assinatura</li>
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 relative z-10 pb-4 lg:pb-0">
              <button onClick={() => navigate('/cafes')} className="plan-card__cta" style={{ marginTop: 0 }}>
                Escolher meus sabores 200g
              </button>
              <button onClick={() => navigate('/assinaturas')} className="plan-card__cta cta-ghost" style={{ marginTop: 0 }}>
                Ver assinatura mensal
              </button>
            </div>
          </div>
          
          {/* Right Column - Cards Grid/Carousel */}
          <div className="lg:w-[55%] flex flex-col z-10 w-full overflow-hidden pb-24 lg:pb-0">
            <div className="-mx-7 px-7 md:mx-0 md:px-0 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-5 md:grid md:grid-cols-2 md:gap-6 pb-6 lg:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {saches.map((sache) => (
                <div key={sache.nome} className="snap-center shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none bg-[#0A0A0A] border border-[#252525] rounded-2xl flex flex-col hover:shadow-2xl transition-all group overflow-hidden relative">
                  
                  {/* Image Container with 200g Badge */}
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-[#1A1A1A]">
                    <div className="absolute top-4 left-4 z-10 bg-[#c9a263] text-[#0A0A0A] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-md">
                      200g
                    </div>
                    <img 
                      src={sache.img} 
                      alt={`Sachê ${sache.nome} CofCof 200g`} 
                      loading="lazy" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <span className="text-[#c9a263] font-bold tracking-widest text-[10px] uppercase mb-2">{sache.tag}</span>
                    <h3 className="text-xl font-bold font-['Montserrat'] uppercase text-[#F6F1EB] mb-2">{sache.nome}</h3>
                    <p className="text-[#A3A3A3] text-sm mb-6 flex-1 leading-relaxed">
                      {sache.descricao}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {sache.notas.map(nota => (
                        <span key={nota} className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#0A0A0A] bg-[#EFE7DB] px-2 py-1 rounded-sm">
                          {nota}
                        </span>
                      ))}
                    </div>
                    
                    <button onClick={() => navigate('/cafes')} className="plan-card__cta cta-light">
                      Escolher sabor
                    </button>
                  </div>
                  
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-[#c9a263]/30 text-center flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              {/* Subtle background element */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-[#c9a263]/5 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="text-center md:text-left relative z-10">
                <p className="text-[#F6F1EB] font-bold font-['Montserrat'] uppercase text-[15px] mb-1">Encontrou seu favorito?</p>
                <p className="text-[#A3A3A3] text-sm">Transforme esse sabor em assinatura mensal.</p>
              </div>
              <button onClick={() => navigate('/assinaturas')} className="plan-card__cta cta-gold md:w-auto" style={{ marginTop: 0 }}>
                Montar assinatura
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
