import React from 'react';
import { Link } from 'react-router-dom';

export default function CafesSubscriptionBanner() {
  return (
    <section className="sec sec-d fi" style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
      <div className="bx" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--sand)', marginBottom: '24px' }}>
          Receba cafés desse nível todo mês.
        </h2>
        <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.72)', marginBottom: '40px' }}>
          A assinatura CofCof.co foi criada para quem quer receber cafés especiais com curadoria, torra fresca e origem rastreável sem precisar escolher no escuro.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/assinaturas" className="btn btn-ds" style={{ padding: '18px 36px', fontSize: '13px', background: 'var(--sand)', color: 'var(--black)' }}>
            <span>Montar minha assinatura</span>
          </Link>
          <Link to="/cafes" className="btn btn-sd" style={{ padding: '18px 36px', fontSize: '13px', border: '1px solid rgba(246,241,235,0.3)', color: 'var(--sand)' }}>
            <span>Começar com sachês 200g</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
