import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { OriginFarm } from '../../../types';

interface OriginProducersProps {
  farms: OriginFarm[];
  onSelectFarm: (farm: OriginFarm) => void;
}

export default function OriginProducers({ farms, onSelectFarm }: OriginProducersProps) {
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
    <section id="produtores" className="sec fi" style={{ background: '#EFE7DB', padding: '80px 0' }}>
      <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="display" style={{ color: 'var(--black)', marginBottom: '8px', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Produtores por trás dos <span className="ital">lotes</span>.
        </h2>
        <p className="body-p" style={{ fontSize: '18px', color: 'rgba(10,10,10,0.7)', maxWidth: '640px', marginBottom: '48px' }}>
          Cada café CofCof começa antes da torra: começa em uma fazenda, com um produtor, uma escolha de processo e uma história que aparece no sabor.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {farms.filter(f => f.active).slice(0, 3).map(farm => (
            <div key={farm.id} style={{ display: 'flex', flexDirection: 'column', background: '#fff', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', background: 'var(--parch)' }}>
                {farm.producerImage || farm.image ? (
                  <img src={farm.producerImage || farm.image} alt={farm.producer} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'var(--black)', opacity: 0.8 }}></div>
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                      <Mountain size={32} style={{ color: 'var(--clay)', marginBottom: '16px', margin: '0 auto' }} />
                      <div className="eyebrow" style={{ color: 'var(--sand)', fontSize: '10px' }}>Imagem de Produtor<br />em breve</div>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '8px' }}>{farm.farmName}</div>
                <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>{farm.producer}</h3>
                <p className="body-p" style={{ fontSize: '14px', color: 'rgba(10,10,10,0.6)', marginBottom: '24px' }}>{farm.city}, {farm.region}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '14px', borderTop: '1px solid rgba(10,10,10,0.05)', paddingTop: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(10,10,10,0.6)' }}>Lote:</span>
                    <span style={{ color: 'var(--black)' }}>{farm.lotName}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(10,10,10,0.6)' }}>SCA:</span>
                    <span style={{ color: 'var(--clay)', fontWeight: 'bold' }}>{farm.scaScore || 'TBD'}</span>
                  </div>
                </div>

                <div style={{ marginBottom: '32px' }}>
                  <p className="body-p" style={{ fontSize: '14px', color: 'rgba(10,10,10,0.8)' }}><span style={{ color: 'rgba(10,10,10,0.6)' }}>Perfil:</span> {farm.sensoryNotes}.</p>
                </div>
                
                <div style={{ marginTop: 'auto', display: 'flex', gap: '16px' }}>
                  {farm.linkedProductSlug ? (
                    <Link to={`/cafes/${farm.linkedProductSlug}`} className="btn btn-sd" style={{ flex: 1, padding: '16px', fontSize: '12px', textAlign: 'center' }}>
                      <span>Comprar 200g</span>
                    </Link>
                  ) : (
                    <Link to="/cafes" className="btn btn-sd" style={{ flex: 1, padding: '16px', fontSize: '12px', textAlign: 'center' }}>
                      <span>Ver Café</span>
                    </Link>
                  )}
                  <button onClick={(e) => {
                    onSelectFarm(farm);
                    scrollToSection(e, 'mapa-origem');
                  }} className="btn" style={{ flex: 1, border: '1px solid rgba(10,10,10,0.2)', color: 'var(--black)', background: 'transparent', padding: '16px', fontSize: '12px' }}>
                    <span>Ver no mapa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
