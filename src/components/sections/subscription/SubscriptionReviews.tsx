import React from 'react';

export default function SubscriptionReviews() {
  return (
    <section data-shopify-section="subscription-reviews" className="sec sec-p fi">
      <div className="bx">
        <div className="rv-head"><span className="eyebrow" style={{ color: 'var(--clay)' }}>A experiência</span></div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--black)', marginBottom: '48px', textAlign: 'center' }}>O que muda na primeira<br /><span className="ital">entrega</span>?</h2>
        <div className="rv-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <figure className="rv fi" style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', padding: '32px', borderRadius: '4px' }}>
            <div className="rv-q" style={{ color: 'var(--clay)', opacity: 0.5 }}>01</div>
            <blockquote style={{ fontSize: '20px', margin: '24px 0' }}>O choque de sabor</blockquote>
            <figcaption style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.6 }}>Sem o amargor do café queimado, você vai sentir a doçura natural da fruta. Muitos assinantes até param de colocar açúcar no café.</figcaption>
          </figure>
          <figure className="rv fi" style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', padding: '32px', borderRadius: '4px' }}>
            <div className="rv-q" style={{ color: 'var(--clay)', opacity: 0.5 }}>02</div>
            <blockquote style={{ fontSize: '20px', margin: '24px 0' }}>O cheiro de torra fresca</blockquote>
            <figcaption style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.6 }}>Ao abrir o pacote, o aroma de um café torrado há poucos dias toma conta da casa. É uma experiência radicalmente diferente do café de prateleira.</figcaption>
          </figure>
          <figure className="rv fi" style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', padding: '32px', borderRadius: '4px' }}>
            <div className="rv-q" style={{ color: 'var(--clay)', opacity: 0.5 }}>03</div>
            <blockquote style={{ fontSize: '20px', margin: '24px 0' }}>O fim da dúvida</blockquote>
            <figcaption style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.6 }}>Saber que não precisa mais gastar tempo escolhendo no mercado. Seu ritual de alto nível já está garantido e chega na sua porta todo mês.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
