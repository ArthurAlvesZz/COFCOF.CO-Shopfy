import React from 'react';
import { Link } from 'react-router-dom';

export default function CafesCTA() {
  return (
    <section data-shopify-section="cafes-cta" className="cta-end fi" style={{ padding: 'clamp(100px, 12vh, 160px) 0' }}>
      <div className="cta-end-grain"></div>
      <div className="bx cta-end-in">
        <h2 className="display">Escolha seu lote ou receba uma curadoria mensal.</h2>
        <p className="body-p">Você pode começar por um sachê de 200g ou montar uma assinatura para receber cafés especiais selecionados todos os meses.</p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/cafes" className="btn btn-ds" style={{ padding: '20px 48px', fontSize: '13px' }}><span>Comprar sachês 200g</span></Link>
          <Link to="/assinaturas" className="btn btn-sd" style={{ padding: '20px 48px', fontSize: '13px', background: 'transparent', color: 'var(--sand)', border: '1px solid var(--sand)' }}><span>Montar assinatura</span></Link>
        </div>
      </div>
    </section>
  );
}
