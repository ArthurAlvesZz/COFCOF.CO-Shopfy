import React from 'react';

export default function SubscriptionFAQ() {
  return (
    <section className="sec fi" style={{ background: 'var(--sand)' }}>
      <div className="bx" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: 'var(--clay)', textAlign: 'center' }}>Dúvidas Frequentes</div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--black)', marginTop: '20px', marginBottom: '48px', textAlign: 'center' }}>
          Como funciona a<br /><span className="ital">assinatura</span>?
        </h2>
        
        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Eu posso pausar ou cancelar a assinatura?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>Sim, totalmente livre. Você pode pausar, cancelar ou alterar a quantidade do seu plano a qualquer momento pelo WhatsApp ou painel, sem taxas ou fidelidade.</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Os cafés mudam todo mês?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>Sim. Nossa curadoria seleciona perfis sensoriais variados entre os nossos produtores parceiros. O objetivo é que você viaje pelo Cerrado Mineiro, provando diferentes notas a cada entrega.</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Posso escolher se quero em grãos ou moído?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>Com certeza. No momento da assinatura, você define a moagem ideal para o seu método de preparo (ou opta por receber em grãos para moer na hora).</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Quanto tempo demora para chegar?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>A torra é feita sob demanda toda semana. Após a torra, postamos em até 48h. O prazo final depende da sua região, recebendo sempre o café super fresco.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
