import React from 'react';

export default function SubscriptionCTA() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="subscription-cta" id="assinar" className="cta fi">
      <div className="cta-grain"></div>
      <div className="bx cta-in">
        <div className="eyebrow" style={{ color: 'var(--clay)' }}>Conclusão</div>
        <h2 className="display">Não aceite menos<br />que o <span className="ital">melhor</span>.</h2>
        <p className="body-p" style={{ maxWidth: '400px', margin: '24px auto', fontSize: '18px', color: 'rgba(246, 241, 235, 0.72)' }}>O seu ritual merece curadoria, origem e frescor. Assine agora e mude a forma como você bebe café.</p>
        <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-ds"><span>Escolher meu plano →</span></a>
        <p className="cta-disc">Sem fidelidade · Pause quando quiser · Envio rápido</p>
      </div>
    </section>
  );
}
