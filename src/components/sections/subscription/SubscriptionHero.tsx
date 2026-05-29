import React, { useState } from 'react';
import { X } from 'lucide-react';
import { media } from '../../../config/media';

const VIDEOS = {
  hero: media.videos.homeHero,
  card1: media.videos.subscriptionCard01,
  card2: media.videos.subscriptionCard02,
  card3: media.videos.subscriptionCard03,
};

export default function SubscriptionHero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="subscription-hero" className="hero" id="top">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-bg-video"
        title="Background video"
      >
        <source src={VIDEOS.hero} type="video/mp4" />
      </video>

      <div className="hero-grid-bg"></div>
      <div className="hero-spot"></div>
      <div className="hero-grain"></div>
      
      <div className="bx hero-main" style={{ paddingTop: '10vh' }}>
        <div className="fi" style={{ position: 'relative', zIndex: 10, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: '28px', color: 'var(--clay)' }}>ASSINATURA COFCOF.CO</div>
          <h1 className="display hero-title" style={{ fontSize: 'clamp(48px, 6vw, 84px)' }}>O melhor café<br />do Brasil você<br />ainda não <span className="ital">provou</span>.</h1>
          <p className="body-p hero-sub" style={{ margin: '0 auto 40px auto', maxWidth: '640px', fontSize: '18px' }}>Receba cafés especiais premiados, com torra fresca, curadoria de perfil e entrega mensal.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-sd" style={{ padding: '20px 48px', fontSize: '13px' }}><span>Montar minha assinatura</span></a>
            <a href="/cafes" className="btn btn-sd" style={{ padding: '20px 48px', fontSize: '13px', background: 'transparent', color: 'var(--sand)', border: '1px solid var(--sand)' }}><span>Ver lotes premiados</span></a>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginTop: '48px', opacity: 0.8, fontSize: '13px', fontFamily: 'var(--fl)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>8 lotes premiados</span>
            <span>Até 88.5 pontos</span>
            <span>Torra sob demanda</span>
            <span>Cerrado Mineiro</span>
          </div>
        </div>

        <div className="fi origin-diaries" autoFocus={false} style={{
          marginTop: 'clamp(64px, 10vh, 120px)',
          padding: 'clamp(24px, 4vw, 32px)',
          background: 'rgba(10, 10, 10, 0.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(246, 241, 235, 0.08)',
          borderRadius: '16px',
        }}>
          <style>{`
            @media (max-width: 768px) {
              .origin-diaries {
                padding: 32px 18px !important;
                border-radius: 22px !important;
              }
              .origin-diaries .vg {
                display: flex !important;
                gap: 14px !important;
                overflow-x: auto !important;
                scroll-snap-type: x mandatory !important;
                padding-bottom: 12px !important;
                margin-bottom: 20px !important;
                -webkit-overflow-scrolling: touch !important;
              }
              .origin-diaries .vt {
                flex: 0 0 82% !important;
                max-width: 340px !important;
                scroll-snap-align: start !important;
                margin-bottom: 0 !important;
              }
              .origin-diaries .vv {
                aspect-ratio: 9/12 !important;
                border-radius: 8px !important;
              }
              .origin-diaries .vv-cap-t {
                font-size: 16px !important;
                background: rgba(0,0,0,0.7) !important;
                padding: 8px 12px !important;
                line-height: 1.2 !important;
              }
              .origin-diaries .vt-cap {
                font-size: 13px !important;
                line-height: 1.55 !important;
                color: rgba(246, 241, 235, 0.68) !important;
                max-width: none !important;
              }
              .origin-diaries .vg-foot {
                margin-top: 20px !important;
                padding-bottom: 72px !important; /* Space for WhatsApp */
                flex-direction: column !important;
                gap: 16px !important;
              }
            }
          `}</style>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
            <div className="eyebrow" style={{ color: 'var(--sand)' }}>Diários de Origem</div>
            <p className="body-p" style={{ fontSize: '14px', color: 'rgba(246,241,235,0.68)', maxWidth: '400px', lineHeight: 1.55 }}>
              Histórias curtas sobre produtores, fazendas e bastidores por trás dos cafés CofCof.
            </p>
          </div>
          <div className="vg">
            
            <div className="vt" data-video="1" onClick={() => setActiveVideo(VIDEOS.card1)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted>
                  <source src={`${VIDEOS.card1}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 01</span><span>0:42</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">Conversa com produtor do Cerrado</span></div>
              </div>
              <p className="vt-cap">Quem planta responde: sempre existe técnica, direto de quem está no campo.</p>
            </div>

            <div className="vt" data-video="2" onClick={() => setActiveVideo(VIDEOS.card2)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted>
                  <source src={`${VIDEOS.card2}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 02</span><span>1:08</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">O que faz um café valer o dobro</span></div>
              </div>
              <p className="vt-cap">Altitude, maturação, solo e cuidado explicados por quem colhe na mão.</p>
            </div>

            <div className="vt" data-video="3" onClick={() => setActiveVideo(VIDEOS.card3)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted>
                  <source src={`${VIDEOS.card3}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 03</span><span>0:54</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">Do pé até a sua casa</span></div>
              </div>
              <p className="vt-cap">O caminho do grão antes da torra, da fazenda ao envio.</p>
            </div>

          </div>
          <div className="vg-foot" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(246, 241, 235, 0.08)' }}>
            <p>Gravado no Cerrado Mineiro · Série de entrevistas com produtores</p>
            <a href="https://instagram.com/cofcof.company" target="_blank" rel="noopener noreferrer" className="lnk" style={{ fontWeight: '800' }}>VER TODOS NO INSTAGRAM →</a>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Role ↓</div>

      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
            <X size={28} />
          </button>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video 
              src={activeVideo} 
              autoPlay 
              controls 
              className="video-player"
            />
          </div>
        </div>
      )}
    </section>
  );
}
