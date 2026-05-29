import React from 'react';
import { Link } from 'react-router-dom';

export default function SubscriptionPlans() {
  return (
    <section data-shopify-section="subscription-plans" id="planos" className="sec sec-d fi">
      <div className="bx">
        <div className="head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Os Planos</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--sand)', marginTop: '20px' }}>Escolha sua<br /><span className="ital">assinatura mensal</span>.</h2>
            <p className="body-p" style={{ maxWidth: '640px', marginTop: '24px', fontSize: '18px', color: 'rgba(246, 241, 235, 0.72)' }}>Mais do que comprar café em quilo, você escolhe o volume ideal para transformar sua rotina.</p>
          </div>
          <div className="label head-meta" style={{ opacity: 0.5 }}>A partir de R$ 1,87 / xícara</div>
        </div>
        <div className="plans">
          <div className="pl fi">
            <div className="pl-head">
              <div className="pl-head-l">
                 <div className="eyebrow">Para quem quer sair do café comum</div>
                <div className="pl-name">Essencial</div>
              </div>
              <div className="pl-disc">base</div>
            </div>
            <div className="pl-kg">1kg</div>
            <p className="body-p" style={{ fontSize: '13px', marginTop: '16px', color: 'rgba(246,241,235,0.7)' }}>Ideal para 1 a 2 pessoas.</p>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">179,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-rule"></div>
            <Link to="/checkout?plan=essencial" className="pl-btn"><span>Assinar Essencial →</span></Link>
          </div>
          <div className="pl feat fi">
            <div className="pl-tag">Mais escolhido</div>
            <div className="pl-head">
              <div className="pl-head-l">
                <div className="eyebrow">Para quem toma café todos os dias</div>
                <div className="pl-name">Clássico</div>
              </div>
              <div className="pl-disc has">−8%</div>
            </div>
            <div className="pl-kg">2kg</div>
            <p className="body-p" style={{ fontSize: '13px', marginTop: '16px', color: 'rgba(10,10,10,0.7)' }}>Ideal para rotina intensa ou casal.</p>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">329,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-rule"></div>
            <Link to="/checkout?plan=classico" className="pl-btn"><span>Assinar Clássico →</span></Link>
          </div>
          <div className="pl fi">
            <div className="pl-head">
              <div className="pl-head-l">
                <div className="eyebrow">Para casa cheia, escritório ou alto consumo</div>
                <div className="pl-name">Família</div>
              </div>
              <div className="pl-disc has">−17%</div>
            </div>
            <div className="pl-kg">5kg</div>
            <p className="body-p" style={{ fontSize: '13px', marginTop: '16px', color: 'rgba(246,241,235,0.7)' }}>Melhor custo por kg.</p>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">749,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-rule"></div>
            <Link to="/checkout?plan=familia" className="pl-btn"><span>Assinar Família →</span></Link>
          </div>
        </div>
        
        <div className="emp-row fi" style={{ background: '#111', padding: '32px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)', marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <div className="display" style={{ fontSize: '24px', color: 'var(--sand)', marginBottom: '16px' }}>Consumo acima de 10kg?</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.72)', maxWidth: '600px' }}>Criamos uma condição especial para empresas, escritórios, restaurantes e parceiros.</p>
          </div>
          <Link to="/para-empresas" className="btn btn-sd" style={{ alignSelf: 'flex-start', padding: '16px 32px', background: 'transparent', color: 'var(--sand)', border: '1px solid var(--sand)' }}><span>Solicitar proposta</span></Link>
        </div>
        
        <p className="plans-foot" style={{ marginTop: '32px' }}>Você pode ajustar sua assinatura, pausar ou falar com a CofCof antes do próximo envio.</p>
      </div>
    </section>
  );
}
