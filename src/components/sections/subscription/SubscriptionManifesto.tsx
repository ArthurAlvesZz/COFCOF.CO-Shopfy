import React from 'react';

export default function SubscriptionManifesto() {
  return (
    <section data-shopify-section="subscription-manifesto" id="sobre" className="mfst fi">
      <div className="bx" style={{ position: 'relative', zIndex: 1 }}>
        <div className="eyebrow" style={{ marginBottom: '28px', color: 'var(--clay)' }}>Por que existimos</div>
        <h2 className="display mfst-h" style={{ fontSize: 'clamp(2rem,5.5vw,4.8rem)', color: 'var(--black)' }}>Você sabe o que<br />tem na sua <span className="ital">xícara</span>?</h2>
        <p className="body-p" style={{ fontSize: '18px', maxWidth: '640px', marginTop: '24px', marginBottom: '48px', color: 'rgba(10,10,10,0.8)' }}>
          Em 2023, laudos do Ministério da Agricultura apontaram fraudes e impurezas em diversas marcas comerciais. O mercado de volume foca em preço, sacrificando a qualidade e a saúde.
        </p>
        <div className="mfst-cols mt-8">
          <div className="mfst-col fi" style={{ background: '#fff', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10,10,10,0.08)' }}>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>O formato antigo</div>
            <p className="body-p" style={{ fontSize: '15px', marginTop: '16px' }}>Cafés genéricos, torra excessivamente escura para esconder defeitos e falta de rastreabilidade. Meses parados em prateleiras onde o sabor já se perdeu.</p>
          </div>
          <div className="mfst-col fi" style={{ background: '#fff', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10,10,10,0.08)' }}>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>A escolha CofCof.co</div>
            <p className="body-p" style={{ fontSize: '15px', marginTop: '16px' }}>Selecionamos produtores do Cerrado Mineiro com Denominação de Origem. O café tem nome, lote, processo e pontuação acima de 86 pontos (SCA).</p>
          </div>
          <div className="mfst-col fi" style={{ background: '#fff', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10,10,10,0.08)' }}>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Garantia na xícara</div>
            <p className="body-p" style={{ fontSize: '15px', marginTop: '16px' }}>100% arábica. Sem misturas, sem graus de torra para disfarçar. Você recebe o relatório sensorial completo e a segurança da origem premium.</p>
          </div>
        </div>
        <div className="mfst-cite fi" style={{ marginTop: '48px', padding: '24px', background: 'var(--sand)', borderRadius: '4px' }}>
          <p style={{ fontSize: '14px', color: 'rgba(10,10,10,0.6)' }}>A Operação Valoriza (MAPA) monitora ativamente fraudes em cafés embalados no Brasil para garantir a segurança alimentar.</p>
        </div>
      </div>
    </section>
  );
}
