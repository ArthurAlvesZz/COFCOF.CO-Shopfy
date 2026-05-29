import React from 'react';
import { Link } from 'react-router-dom';

export default function SubscriptionCurators() {
  return (
    <section data-shopify-section="subscription-curators" id="cafes" className="sec fi">
      <div className="bx">
        <div className="head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>A Curadoria</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--black)', marginTop: '20px' }}>8 lotes premiados.<br />8 produtores do Cerrado.</h2>
            <p className="body-p" style={{ maxWidth: '640px', marginTop: '24px', fontSize: '18px' }}>A assinatura CofCof nasce de cafés com origem, pontuação e história. Não é café genérico: é curadoria de lote.</p>
          </div>
          <Link to="/cafes" className="btn btn-ds" style={{ padding: '16px 32px' }}><span>Ver todos os lotes</span></Link>
        </div>
        <div className="cof-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          <div className="cof fi" style={{ padding: '32px', background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <span className="label" style={{ color: 'var(--clay)', fontSize: '12px' }}>Lote N° 01 • Cerrado Mineiro</span>
                <h3 className="display" style={{ fontSize: '24px', marginTop: '8px' }}>Wagner Crivelenti Ferreiro</h3>
              </div>
              <span className="label" style={{ background: 'var(--clay)', color: 'white', padding: '4px 8px', borderRadius: '4px' }}>88.5</span>
            </div>
            <p className="body-p" style={{ fontSize: '14px', marginBottom: '24px', color: 'rgba(10,10,10,0.7)' }}>Doce, floral e aveludado.</p>
            <p className="cof-notes" style={{ padding: '12px', background: 'var(--sand)', fontSize: '12px', textAlign: 'center', marginBottom: '24px' }}>Chocolate • Caramelo • Frutas amarelas</p>
            <Link to="/cafes#lote-01" className="lnk label" style={{ color: 'var(--clay)', fontSize: '13px' }}>Ver detalhes do lote →</Link>
          </div>
          
          <div className="cof fi" style={{ padding: '32px', background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <span className="label" style={{ color: 'var(--clay)', fontSize: '12px' }}>Lote N° 02 • Cerrado Mineiro</span>
                <h3 className="display" style={{ fontSize: '24px', marginTop: '8px' }}>Marcelo Cocco Urtado</h3>
              </div>
              <span className="label" style={{ background: 'var(--clay)', color: 'white', padding: '4px 8px', borderRadius: '4px' }}>88.0</span>
            </div>
            <p className="body-p" style={{ fontSize: '14px', marginBottom: '24px', color: 'rgba(10,10,10,0.7)' }}>Frutado e cremoso.</p>
            <p className="cof-notes" style={{ padding: '12px', background: 'var(--sand)', fontSize: '12px', textAlign: 'center', marginBottom: '24px' }}>Fruta branca • Melão • Caramelo</p>
            <Link to="/cafes#lote-02" className="lnk label" style={{ color: 'var(--clay)', fontSize: '13px' }}>Ver detalhes do lote →</Link>
          </div>

          <div className="cof fi" style={{ padding: '32px', background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <span className="label" style={{ color: 'var(--clay)', fontSize: '12px' }}>Lote N° 03 • Cerrado Mineiro</span>
                <h3 className="display" style={{ fontSize: '24px', marginTop: '8px' }}>Claudio Nasser de Carvalho</h3>
              </div>
              <span className="label" style={{ background: 'var(--clay)', color: 'white', padding: '4px 8px', borderRadius: '4px' }}>87.5</span>
            </div>
            <p className="body-p" style={{ fontSize: '14px', marginBottom: '24px', color: 'rgba(10,10,10,0.7)' }}>Licoroso e envolvente.</p>
            <p className="cof-notes" style={{ padding: '12px', background: 'var(--sand)', fontSize: '12px', textAlign: 'center', marginBottom: '24px' }}>Menta • Xarope • Caramelo</p>
            <Link to="/cafes#lote-03" className="lnk label" style={{ color: 'var(--clay)', fontSize: '13px' }}>Ver detalhes do lote →</Link>
          </div>

          <div className="cof fi" style={{ padding: '32px', background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <span className="label" style={{ color: 'var(--clay)', fontSize: '12px' }}>Lote N° 04 • Cerrado Mineiro</span>
                <h3 className="display" style={{ fontSize: '24px', marginTop: '8px' }}>Geraldo Magelis de Melo</h3>
              </div>
              <span className="label" style={{ background: 'var(--clay)', color: 'white', padding: '4px 8px', borderRadius: '4px' }}>87.5</span>
            </div>
            <p className="body-p" style={{ fontSize: '14px', marginBottom: '24px', color: 'rgba(10,10,10,0.7)' }}>Doçura pura e delicada.</p>
            <p className="cof-notes" style={{ padding: '12px', background: 'var(--sand)', fontSize: '12px', textAlign: 'center', marginBottom: '24px' }}>Fruta madura • Licor • Mel</p>
            <Link to="/cafes#lote-04" className="lnk label" style={{ color: 'var(--clay)', fontSize: '13px' }}>Ver detalhes do lote →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
