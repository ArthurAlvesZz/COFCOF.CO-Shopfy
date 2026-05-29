import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { media } from '../../../config/media';

const REELS_DATA = [
  {
    tag: "Unboxing",
    title: "Unboxing CofCof Co",
    video: media.videos.reels.unboxing,
    poster: media.images.reels.unboxingPoster,
    link: "https://instagram.com/cofcof.company"
  },
  {
    tag: "Rotina",
    title: "Café que eu amo e confio",
    video: media.videos.reels.cafeConfio,
    poster: media.images.reels.cafeConfioPoster,
    link: "https://instagram.com/cofcof.company"
  },
  {
    tag: "Vida real",
    title: "Convencendo a esposa",
    video: media.videos.reels.futebol,
    poster: media.images.reels.futebolPoster,
    link: "https://instagram.com/cofcof.company"
  },
  {
    tag: "Parceiros",
    title: "Kantine em Uberlândia",
    video: media.videos.reels.kantine,
    poster: media.images.reels.kantinePoster,
    link: "https://instagram.com/cofcof.company"
  },
  {
    tag: "Bastidores",
    title: "Torra fresca em movimento",
    video: media.videos.reels.torra,
    poster: media.images.reels.torraPoster,
    link: "https://instagram.com/cofcof.company"
  },
  {
    tag: "Sachês",
    title: "Café especial sem complicar",
    video: media.videos.reels.saches,
    poster: media.images.reels.sachesPoster,
    link: "https://instagram.com/cofcof.company"
  }
];

export function HomeReels() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // We only observe on mobile and pause off-screen to save battery.
    // On desktop, the marquee moves them all the time so observing might be tricky if they animate out of bounds,
    // but intersection observer works on viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
            // Play if it's visible
            video.play().catch(() => {});
        } else {
            video.pause();
        }
      });
    }, { threshold: 0.1 });

    videoRefs.current.forEach(v => {
      if (v) observer.observe(v);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0A0A0A] py-20 md:py-32 fi overflow-hidden border-t border-[rgba(246,241,235,0.05)]">
      <div className="bx mb-20 md:mb-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-6">
          <div className="max-w-2xl">
            <div className="mb-4" style={{ color: '#c9a263', fontSize: '11px', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
               PROVA REAL DA MARCA
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#F6F1EB] font-['Montserrat'] tracking-tight mb-4">
              CofCof acontecendo de verdade.
            </h2>
            <p className="text-lg text-[rgba(246,241,235,0.7)] font-light">
               Bastidores, unboxings, parceiros, preparo e momentos reais da CofCof — direto dos Reels da @cofcof.company.
            </p>
            <div className="reels-social-line mt-8 mb-12 md:mb-16 flex items-center gap-3 text-[12px] text-[rgba(246,241,235,0.68)] font-medium">
              <span>Vídeos reais da @cofcof.company</span>
              <a href="https://instagram.com/cofcof.company" target="_blank" rel="noopener noreferrer" className="text-[#c9a263] font-bold uppercase tracking-widest hover:text-[#e0b875] transition-colors flex items-center gap-1 bg-[rgba(201,162,99,0.1)] px-4 py-2 rounded-full">
                Ver perfil <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .reels-container {
          width: 100%;
          overflow: hidden;
          position: relative;
        }

        .reels-track {
          display: flex;
          gap: 24px;
        }

        .reel-card-wrapper {
          flex-shrink: 0;
        }

        /* Desktop Marquee */
        @media (min-width: 768px) {
          .reels-container::before,
          .reels-container::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 2;
            pointer-events: none;
          }
          .reels-container::before {
            left: 0;
            background: linear-gradient(to right, #0A0A0A, transparent);
          }
          .reels-container::after {
            right: 0;
            background: linear-gradient(to left, #0A0A0A, transparent);
          }
          
          .reels-track {
            width: max-content;
            animation: slide-left 50s linear infinite;
            padding: 0 12px;
          }
          
          .reels-track:hover {
            animation-play-state: paused;
          }

          .reel-card-wrapper {
            width: 300px;
          }
        }

        /* Mobile Snap Scroll */
        @media (max-width: 767px) {
          .reels-container {
            padding-left: 0;
          }
          .reels-track {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
            padding: 0 16px 18px;
            gap: 14px;
          }
          .reels-track::-webkit-scrollbar {
            display: none;
          }
          .reel-card-wrapper {
            flex: 0 0 78vw;
            max-width: 340px;
            scroll-snap-align: start;
          }
        }
        
        .reel-card-overlay {
          position: absolute;
          inset: 45% 0 0;
          background: linear-gradient(180deg, transparent, rgba(10,10,10,0.95));
          z-index: 1;
        }
      `}</style>

      <div className="reels-container">
        <div className="reels-track">
          {/* We duplicate the array for the infinite loop effect on desktop. On mobile, the overflow handles it. */}
          {[...REELS_DATA, ...REELS_DATA].map((reel, idx) => (
            <div key={idx} className="reel-card-wrapper">
               <a 
                 href={reel.link} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="block relative rounded-2xl overflow-hidden aspect-[9/16] w-full border border-[rgba(246,241,235,0.1)] shadow-xl hover:shadow-2xl hover:border-[rgba(201,162,99,0.3)] transition-all group"
               >
                 <video
                   ref={(el) => (videoRefs.current[idx] = el)}
                   src={reel.video}
                   poster={reel.poster}
                   preload="metadata"
                   muted
                   loop
                   playsInline
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="reel-card-overlay transition-opacity duration-300"></div>
                 
                 <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
                   <div className="self-end">
                     <span className="inline-block bg-black/40 backdrop-blur-md text-white border border-white/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                       {reel.tag}
                     </span>
                   </div>
                   
                   <div className="mt-auto">
                     <h3 className="text-[#F6F1EB] font-bold font-['Montserrat'] text-[22px] leading-tight mb-2 pr-4 text-shadow-sm">
                       {reel.title}
                     </h3>
                     <span className="text-[#c9a263] text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#e0b875] transition-colors">
                       Ver Reel →
                     </span>
                   </div>
                 </div>
               </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bx mt-16 md:mt-24 text-center">
        <p className="text-[15px] text-[rgba(246,241,235,0.8)] font-light mb-6">
          Cafés reais. Pessoas reais. Rotina real.
        </p>
        <div className="flex justify-center">
          <a href="/assinaturas" className="inline-flex items-center justify-center bg-[#c9a263] text-[#0A0A0A] rounded-sm px-8 py-4 text-[11px] font-black tracking-widest uppercase hover:bg-[#e0b875] transition-colors shadow-[0_4px_14px_rgba(201,162,99,0.3)]">
            Montar minha assinatura
          </a>
        </div>
      </div>
    </section>
  );
}
