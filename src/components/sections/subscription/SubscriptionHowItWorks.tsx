import React from 'react';

export default function SubscriptionHowItWorks() {
  return (
    <section data-shopify-section="subscription-how-it-works" className="sec fi">
      <div className="bx">
        <div className="head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="eyebrow">Como funciona</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--black)', marginTop: '20px', maxWidth: '900px' }}>Café premiado não<br />deveria ser <span className="ital">complicado</span>.</h2>
            <p className="body-p" style={{ maxWidth: '640px', marginTop: '24px', fontSize: '18px' }}>Você escolhe sua rotina, a CofCof cuida da curadoria, torra e envio. Todo mês, um café especial com origem e perfil sensorial claros chega até você.</p>
          </div>
          <div className="label head-meta">03 passos</div>
        </div>
        <div className="steps">
          <div className="step fi">
            <div className="step-n">01</div>
            <h3 className="label" style={{ fontSize: '16px' }}>Escolha sua rotina</h3>
            <p className="body-p" style={{ fontSize: '16px' }}>Defina o volume ideal para sua casa ou empresa.</p>
          </div>
          <div className="step fi">
            <div className="step-n">02</div>
            <h3 className="label" style={{ fontSize: '16px' }}>Receba uma curadoria</h3>
            <p className="body-p" style={{ fontSize: '16px' }}>A CofCof seleciona cafés especiais com origem, pontuação e perfil sensorial.</p>
          </div>
          <div className="step fi">
            <div className="step-n">03</div>
            <h3 className="label" style={{ fontSize: '16px' }}>Prove sem complicar</h3>
            <p className="body-p" style={{ fontSize: '16px' }}>O café chega com torra sob demanda e pronto para entrar na sua rotina.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
