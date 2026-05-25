import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeClub() {
  const navigate = useNavigate();

  return (
    <section className="sec sec-p fi">
      <div className="bx hm-kit">
        <div className="hm-kit-txt">
          <div className="eyebrow" style={{ marginBottom: '24px' }}>Clube de Assinatura</div>
          <h2 className="display" style={{ color: 'var(--black)', marginBottom: '32px', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Cafés premiados antes de todo <span className="ital">mundo</span>.
          </h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'var(--sub)', maxWidth: '520px', marginBottom: '48px', lineHeight: '1.6' }}>
            Curadoria pronta, todo mês, sem você ter que escolher. Sem fidelidade, cancele ou pause quando precisar.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '64px', color: 'var(--black)' }}>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Curadoria sensorial</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Rastreabilidade total</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Torra fresca mensal</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Flexibilidade total</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/assinaturas')} className="btn" style={{ background: 'var(--black)', color: 'var(--sand)', padding: '24px 56px', fontSize: '13px' }}>
              <span>Ver planos do clube →</span>
            </button>
          </div>
        </div>
        <div className="hm-kit-img">
          <img src="https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Mesa com café premium" />
        </div>
      </div>
    </section>
  );
}
