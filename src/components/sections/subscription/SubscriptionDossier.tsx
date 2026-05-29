import React from 'react';

export default function SubscriptionDossier() {
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
    <section data-shopify-section="subscription-dossier" className="sec sec-p fi">
      <div className="bx">
        <div className="eyebrow" style={{ color: 'var(--clay)' }}>Ficha de degustação</div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--black)', marginTop: '20px', maxWidth: '900px' }}>O que você está provando<br />quando assina <span className="ital">CofCof</span>.</h2>
        <p className="body-p" style={{ fontSize: '18px', color: 'rgba(10,10,10,0.7)', marginTop: '20px', maxWidth: '640px' }}>Cada envio carrega um lote real, com produtor, pontuação, processo e perfil sensorial identificados.</p>
        <div className="ts">
          <div className="ts-card fi">
            <div className="ts-card-head">
              <div className="eyebrow">Lote N° 01 · Safra 25</div>
              <div style={{ textAlign: 'right' }}>
                <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                <div className="ts-score">88.5</div>
              </div>
            </div>
            <div className="ts-name">Wagner Crivelenti<br />Ferrero</div>
            <div className="ts-notes" style={{ borderBottom: '1px solid var(--rule)', paddingBottom: '24px', marginBottom: '24px' }}>
              <div className="eyebrow" style={{ color: 'var(--clay)' }}>Na xícara</div>
              <p className="body-p" style={{ fontSize: '18px', marginTop: '12px' }}>Doçura alta, corpo marcante, notas de chocolate e caramelo, final limpo e aveludado. Um café confortável e surpreendente ao mesmo tempo.</p>
            </div>
            <div>
              <div className="eyebrow" style={{ marginBottom: '16px' }}>Para quem gosta de detalhes:</div>
              <div className="ts-meta" style={{ gap: '16px' }}>
                <div>
                  <div className="eyebrow">Variedade</div>
                  <div className="label">Paraíso MG H 419-1</div>
                </div>
                <div>
                  <div className="eyebrow">Processo</div>
                  <div className="label">Natural</div>
                </div>
                <div>
                  <div className="eyebrow">Altitude</div>
                  <div className="label">1180m</div>
                </div>
                <div>
                  <div className="eyebrow">Fazenda</div>
                  <div className="label">Fazenda Pinheiro</div>
                </div>
                <div>
                  <div className="eyebrow">Origem</div>
                  <div className="label">Patrocínio · MG</div>
                </div>
                <div>
                  <div className="eyebrow">Torra</div>
                  <div className="label">Sob demanda</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: '32px' }}>Perfil sensorial</div>
            <div className="ts-bars">
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Doçura</span><span className="label v">88/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.88', width: '88%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Acidez</span><span className="label v">74/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.74', width: '74%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Corpo</span><span className="label v">82/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.82', width: '82%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Aroma</span><span className="label v">91/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.91', width: '91%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Finalização</span><span className="label v">85/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.85', width: '85%' } as React.CSSProperties}></div></div>
              </div>
            </div>
            <div className="ts-cite"><p>Avaliação conforme <span className="label">Specialty Coffee Association (SCA) · Cup of Excellence · Q-Grader ref. AB217</span></p></div>
            <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-ds" style={{ marginTop: '32px', fontSize: '13px', padding: '18px 36px' }}><span>Receber cafés assim na assinatura</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
