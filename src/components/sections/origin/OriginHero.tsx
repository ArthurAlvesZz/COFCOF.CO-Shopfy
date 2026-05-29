import React from 'react';
import { Award, MapPin, Mountain, QrCode, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentBlock } from '../../../types/admin';

export default function OriginHero({ content }: { content: Record<string, Partial<ContentBlock>> }) {
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="pg-hero fi v" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      <div className="pg-hero-grid" style={{ opacity: 0.15, mixBlendMode: 'overlay', backgroundImage: 'url("data:image/svg+xml;utf8,<svg width=\\\"100\\\" height=\\\"100\\\" viewBox=\\\"0 0 100 100\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M0 50 Q 25 30 50 50 T 100 50\\\" stroke=\\\"rgba(255,255,255,0.2)\\\" fill=\\\"none\\\" stroke-width=\\\"1\\\"/></svg>")' }}></div>
      <div className="pg-hero-spot"></div>

      <div className="bx pg-hero-in" style={{ zIndex: 1, position: 'relative', width: '100%' }}>
        <div className="origin-hero-layout" style={{ display: 'flex', alignItems: 'center', gap: '48px', justifyContent: 'space-between', width: '100%' }}>
          
          <div className="origin-hero-text" style={{ flex: 1 }}>
            <div className="eyebrow" style={{ marginBottom: '24px', justifyContent: 'inherit' }}>
              <span className="origin-hero-pill">
                Origem · Cerrado Mineiro · Rastreabilidade
              </span>
            </div>
            
            <h1 className="display" style={{ maxWidth: '800px', color: 'var(--sand)', lineHeight: '1.05', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', margin: '0 auto' }}>
              A origem que assina <span className="ital" style={{ color: 'var(--clay)' }}>cada café</span> CofCof.
            </h1>
            <p className="body-p" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', maxWidth: '640px', color: 'rgba(246, 241, 235, 0.7)', margin: '24px auto 0' }}>
              Do Cerrado Mineiro até a sua xícara, cada lote carrega produtor, altitude, processo e uma história que aparece no sabor.
            </p>

            <div className="origin-hero-badges" style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'var(--clay)', fontFamily: 'var(--fl)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} /> Cerrado Mineiro D.O.</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Award size={14} /> 85+ SCA</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mountain size={14} /> Cup of Excellence</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><QrCode size={14} /> Lote rastreável</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Flame size={14} /> Torra sob demanda</span>
            </div>

            <div className="pg-hero-cta" style={{ marginTop: '48px' }}>
              <button onClick={(e) => scrollToSection(e, 'mapa-preview')} className="btn" style={{ background: 'transparent', border: '1px solid var(--rule-w)', color: 'var(--sand)', fontSize: '12px', padding: '20px 42px' }}>
                <span>Explorar mapa da origem</span>
              </button>
              <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '12px', padding: '20px 42px' }}>
                <span>Comprar cafés do Cerrado →</span>
              </Link>
            </div>
          </div>

          <div className="origin-hero-trace hidden lg:block" style={{ flex: '0 0 auto' }}>
            {/* Trace card */}
            <div style={{ background: 'rgba(10,10,10,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '32px', width: '320px', boxShadow: '0 24px 64px rgba(0,0,0,0.4)', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <QrCode size={20} style={{ color: 'var(--clay)' }} />
                <span className="eyebrow" style={{ margin: 0, color: 'var(--sand)', opacity: 0.7 }}>Lote rastreável</span>
              </div>
              <h3 className="display" style={{ fontSize: '24px', color: 'var(--sand)', marginBottom: '8px' }}>Fazenda Alto da Serra</h3>
              <p className="body-p" style={{ fontSize: '13px', color: 'rgba(246,241,235,0.6)', marginBottom: '24px' }}>Cerrado Mineiro • 1170m • 88.5 SCA</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'rgba(246,241,235,0.6)', fontSize: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>
                  <span>Processo</span>
                  <span style={{ color: 'var(--sand)' }}>Fermentação</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '8px' }}>
                  <span>Perfil</span>
                  <span style={{ color: 'var(--clay)' }}>Frutas Amarelas</span>
                </div>
              </div>
              <div style={{ height: '3px', width: '100%', background: 'var(--clay)', marginTop: '16px', opacity: 0.5 }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
