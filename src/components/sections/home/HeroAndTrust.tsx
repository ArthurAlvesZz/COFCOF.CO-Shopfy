import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Award, CheckCircle, PackageOpen, Coffee, Truck, Calendar, MapPin, RefreshCw, XCircle } from 'lucide-react';
import { media } from '../../../config/media';

export function HomeHeroSubscription() {
  const navigate = useNavigate();

  return (
    <div className="pg-hero fi v relative overflow-hidden">
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="bx pg-hero-in px-4 sm:px-6 relative z-10" style={{
        borderRadius: '16px',
        border: '1px solid rgba(246, 241, 235, 0.1)',
        padding: 'clamp(48px, 6vw, 80px)',
        minHeight: '600px',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        {/* Background video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          src={media.videos.homeHero}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.75) 60%, rgba(10, 10, 10, 0.2) 100%)',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }} className="flex flex-col h-full justify-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[#c9a263]/30 text-[#c9a263] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#c9a263]/10 backdrop-blur-md">
              ASSINATURA DE CAFÉ ESPECIAL
            </span>
          </div>
          
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F6F1EB] uppercase tracking-tight leading-[1.05] mb-6 font-['Montserrat']">
              Café especial na sua casa, todo mês, sem errar na escolha.
            </h1>
            <p className="text-lg sm:text-xl text-[rgba(246,241,235,0.75)] mb-10 leading-relaxed font-light">
              Receba cafés especiais do Cerrado Mineiro com torra fresca, curadoria sensorial e entrega recorrente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => navigate('/assinaturas')} className="btn btn-sd text-[13px] px-10 py-5 w-full sm:w-auto text-center rounded-sm">
                <span>Montar minha assinatura →</span>
              </button>
              <button onClick={() => navigate('/cafes')} className="btn btn-ds text-[13px] px-10 py-5 border-[1.5px] border-[rgba(246,241,235,0.2)] w-full sm:w-auto text-center rounded-sm">
                <span>Comprar café avulso</span>
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-[10px] sm:text-xs tracking-widest uppercase font-bold text-[#6B6B6B]">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a263]"></div> 85+ SCA</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a263]"></div> Torra Fresca</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a263]"></div> Origem Rastreável</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a263]"></div> Pause quando quiser</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomeTrustBar() {
  return (
    <div className="bg-[#F6F1EB] border-b border-[rgba(10,10,10,0.12)] py-6 overflow-hidden flex items-center fi">
      <div className="flex whitespace-nowrap animate-[tk-scroll_25s_linear_infinite]">
        {/* Repeat the trust items for seamless marquee */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 sm:gap-16 mr-12 sm:mr-16 font-['Montserrat'] font-bold text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#7A6654]">
            <div className="flex items-center gap-3">
              <Calendar size={16} /> Entrega mensal
            </div>
            <div className="flex items-center gap-3">
              <Coffee size={16} /> Torra fresca
            </div>
            <div className="flex items-center gap-3">
              <Award size={16} /> 85+ SCA
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} /> Origem rastreável
            </div>
            <div className="flex items-center gap-3">
              <XCircle size={16} /> Cancele ou pause quando quiser
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HomeHowItWorks() {
  return (
    <section className="bg-white py-20 md:py-28 fi">
      <div className="bx">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            Como funciona a assinatura CofCof.co
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] font-light max-w-2xl mx-auto">
            Receber um café especial na sua medida nunca foi tão simples.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#E8E0D4] to-transparent z-0"></div>

          <div className="bg-[#F6F1EB] rounded-2xl p-8 relative z-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#0A0A0A] text-[#F6F1EB] flex items-center justify-center text-xl font-bold font-['Montserrat'] mb-6 shadow-xl">
              1
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] uppercase tracking-wide text-[#0A0A0A] mb-3">Escolha seu consumo</h3>
            <p className="text-[#6B6B6B] leading-relaxed">
              Decida a quantidade que faz sentido para sua rotina: 250g, 500g, 1kg ou nossos práticos sachês drip coffee.
            </p>
          </div>

          <div className="bg-[#F6F1EB] rounded-2xl p-8 relative z-10 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#0A0A0A] text-[#F6F1EB] flex items-center justify-center text-xl font-bold font-['Montserrat'] mb-6 shadow-xl">
              2
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] uppercase tracking-wide text-[#0A0A0A] mb-3">Escolha seu perfil</h3>
            <p className="text-[#6B6B6B] leading-relaxed">
              Seja mais suave, intenso, doce ou com notas exóticas, nós personalizamos a curadoria para o seu gosto.
            </p>
          </div>

          <div className="bg-[#0A0A0A] text-[#F6F1EB] rounded-2xl p-8 relative z-10 text-center flex flex-col items-center shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-[#c9a263] text-[#0A0A0A] flex items-center justify-center text-xl font-bold font-['Montserrat'] mb-6">
              3
            </div>
            <h3 className="text-xl font-bold font-['Montserrat'] uppercase tracking-wide mb-3">Receba todo mês</h3>
            <p className="text-[rgba(246,241,235,0.7)] leading-relaxed">
              Café especial com torra fresca, enviado no ciclo que você escolheu, direto na sua porta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
