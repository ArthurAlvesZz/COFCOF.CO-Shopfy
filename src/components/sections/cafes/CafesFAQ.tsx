import React from 'react';
import { HomeFAQ } from '../home/SecondaryAndReviews';

// Reuse the HomeFAQ but maybe later we can pass different props or recreate.
// For now, let's just make a brand new FAQ tailored for Cafes as requested.

export default function CafesFAQ() {
  return (
    <section className="sec sec-p fi" style={{ background: 'var(--sand)' }}>
      <div className="bx">
        <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center', marginBottom: '64px' }}>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '16px' }}>Dúvidas frequentes</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>Ainda tem dúvidas sobre os lotes?</h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { q: 'O que significa a pontuação do café?', a: 'É uma escala internacional (SCA) de 0 a 100 que avalia a qualidade do café. Cafés acima de 80 pontos são considerados especiais. Lotes acima de 87 pontos já entram na categoria de cafés raros e extremamente complexos.' },
            { q: 'Os lotes são limitados?', a: 'Sim. Lotes premiados são nano-lotes ou micro-lotes, o que significa que o produtor colheu uma quantidade muito pequena. Quando acaba, não existe mais daquela safra específica.' },
            { q: 'Posso comprar apenas 200g?', a: 'Sim, você pode começar comprando nossos sachês de 200g para experimentar, sem nenhum compromisso de assinatura mensal.' },
            { q: 'Posso receber esses cafés na assinatura?', a: 'Com certeza. Ao assinar a CofCof.co, você recebe pacotes com a mesma qualidade de pontos (ou até dos mesmos produtores, dependendo da disponibilidade).' },
            { q: 'O café vem em grãos ou moído?', a: 'Você escolhe! No momento da compra (ou na configuração da assinatura), você pode escolher receber em grãos ou moído especificamente para o seu método de preparo em casa.' },
          ].map((faq, i) => (
            <details key={i} style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
              <summary style={{ padding: '24px', cursor: 'pointer', fontFamily: 'var(--fl)', fontWeight: '700', fontSize: '15px' }}>
                {faq.q}
              </summary>
              <div style={{ padding: '0 24px 24px', fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: '1.6' }}>
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
