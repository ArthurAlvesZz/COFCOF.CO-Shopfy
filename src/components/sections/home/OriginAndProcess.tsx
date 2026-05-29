import React from 'react';
import { media } from '../../../config/media';

export function HomeOriginProof() {
  return (
    <section className="bg-white py-20 md:py-28 fi border-t border-[rgba(10,10,10,0.05)]">
      <div className="bx">
        <div className="text-center mb-16 md:mb-20">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 border border-[#7A6654]/30 text-[#7A6654] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#7A6654]/5">
              Origem e Qualidade
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4 mx-auto max-w-4xl">
            Todo mês, uma seleção do Cerrado Mineiro na sua xícara.
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] font-light max-w-2xl mx-auto">
            Você não está assinando qualquer café. Está recebendo lotes premiados da primeira região com Denominação de Origem para cafés no Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-[#EFE7DB] p-8 md:p-12 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="text-4xl md:text-5xl font-black font-['Montserrat'] text-[#0A0A0A] mb-3">85+</div>
            <div className="text-sm font-bold tracking-widest uppercase text-[#7A6654]">Pontuação SCA</div>
            <p className="text-[#6B6B6B] mt-4 text-sm">Garantia técnica de ausência de defeitos e doçura presente.</p>
          </div>
          <div className="bg-[#EFE7DB] p-8 md:p-12 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="text-4xl md:text-5xl font-black font-['Montserrat'] text-[#0A0A0A] mb-3">1.200m</div>
            <div className="text-sm font-bold tracking-widest uppercase text-[#7A6654]">Altitude Média</div>
            <p className="text-[#6B6B6B] mt-4 text-sm">Clima perfeito para maturação lenta e grãos mais densos.</p>
          </div>
          <div className="bg-[#EFE7DB] p-8 md:p-12 rounded-2xl flex flex-col justify-center items-center text-center">
            <div className="text-4xl md:text-5xl font-black font-['Montserrat'] text-[#0A0A0A] mb-3">100%</div>
            <div className="text-sm font-bold tracking-widest uppercase text-[#7A6654]">Arábica</div>
            <p className="text-[#6B6B6B] mt-4 text-sm">Apenas variedades superiores como Bourbon e Catuaí.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeProcess() {
  return (
    <section className="bg-[#0A0A0A] py-20 md:py-32 fi relative overflow-hidden text-center md:text-left">
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none w-1/2 h-full">
        <div className="w-full h-full border border-[rgba(246,241,235,0.2)] rounded-full animate-[spin-slow_40s_linear_infinite]" style={{ transform: 'translate(30%, -30%)' }}></div>
      </div>
      
      <div className="bx relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6 inline-block md:block">
              <span className="inline-flex items-center gap-2 border border-[#c9a263]/30 text-[#c9a263] rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-black tracking-widest uppercase bg-[#c9a263]/10">
                Nosso Cuidado
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#F6F1EB] font-['Montserrat'] tracking-tight mb-8">
              Da origem ao envio: o caminho do seu café mensal.
            </h2>
            
            <p className="text-lg text-[rgba(246,241,235,0.7)] font-light mb-12">
              O café que chega na sua casa não nasce em uma prateleira de supermercado. Por trás de cada entrega mensal, existe um processo de seleção e torra fresca.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center font-bold font-['Montserrat'] text-[#c9a263] shrink-0 mt-1">1</div>
                <div>
                  <h4 className="text-[#F6F1EB] font-bold text-lg mb-2">Selecionamos a melhor origem</h4>
                  <p className="text-[rgba(246,241,235,0.6)] text-sm">Buscamos lotes premiados diretamente com produtores do Cerrado Mineiro.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center font-bold font-['Montserrat'] text-[#c9a263] shrink-0 mt-1">2</div>
                <div>
                  <h4 className="text-[#F6F1EB] font-bold text-lg mb-2">Torramos no ponto certo</h4>
                  <p className="text-[rgba(246,241,235,0.6)] text-sm">Respeitamos a curva de cada grão, sempre com torra fresca antes do envio.</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] flex items-center justify-center font-bold font-['Montserrat'] text-[#c9a263] shrink-0 mt-1">3</div>
                <div>
                  <h4 className="text-[#F6F1EB] font-bold text-lg mb-2">Enviamos no seu ciclo</h4>
                  <p className="text-[rgba(246,241,235,0.6)] text-sm">Sua assinatura embalada com válvula aromática e despachada na frequência escolhida.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] md:aspect-square">
            <img src={media.images.roastTech} alt="Processo de torra fresca" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeComparison() {
  return (
    <section className="bg-[#EFE7DB] py-20 md:py-32 fi">
      <div className="bx">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase text-[#0A0A0A] font-['Montserrat'] tracking-tight mb-4">
            Não é só outro café na prateleira.
          </h2>
          <p className="text-lg md:text-xl text-[#0A0A0A] font-light max-w-2xl mx-auto">
            Por que trocar a compra do supermercado por nossa assinatura.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-[rgba(10,10,10,0.1)] border border-[rgba(10,10,10,0.1)] mx-auto max-w-5xl rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-[#F6F1EB] p-8 md:p-12 relative">
            <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-[#6B6B6B] mb-8 pb-6 border-b border-[rgba(10,10,10,0.1)]">
              Café Comum
            </h3>
            <ul className="space-y-5 text-[#6B6B6B]">
              <li className="flex items-center gap-4"><span className="text-lg opacity-50">✕</span> Origem genérica ou misturada</li>
              <li className="flex items-center gap-4"><span className="text-lg opacity-50">✕</span> Torra escura e antiga</li>
              <li className="flex items-center gap-4"><span className="text-lg opacity-50">✕</span> Amargor excessivo na xícara</li>
              <li className="flex items-center gap-4"><span className="text-lg opacity-50">✕</span> Escolha muitas vezes por preço</li>
              <li className="flex items-center gap-4"><span className="text-lg opacity-50">✕</span> Compra quando acaba, sem rotina</li>
            </ul>
          </div>
          
          <div className="bg-[#0A0A0A] p-8 md:p-12 relative text-[#F6F1EB]">
            <div className="absolute top-0 right-0 text-[#c9a263] opacity-10 p-8 font-black text-8xl font-['Montserrat']">
              +
            </div>
            <h3 className="text-2xl font-bold font-['Montserrat'] uppercase text-white mb-8 pb-6 border-b border-[rgba(246,241,235,0.15)] relative z-10">
              Assinatura CofCof
            </h3>
            <ul className="space-y-5 text-[#F6F1EB] font-medium relative z-10">
              <li className="flex items-center gap-4"><span className="text-[#c9a263] font-bold">✓</span> Origem única e rastreável</li>
              <li className="flex items-center gap-4"><span className="text-[#c9a263] font-bold">✓</span> Torra fresca feita para o envio</li>
              <li className="flex items-center gap-4"><span className="text-[#c9a263] font-bold">✓</span> Perfil sensorial claro (doçura, notas)</li>
              <li className="flex items-center gap-4"><span className="text-[#c9a263] font-bold">✓</span> Curadoria de mestres de torra</li>
              <li className="flex items-center gap-4"><span className="text-[#c9a263] font-bold">✓</span> Chega todo mês, sem esquecer</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
