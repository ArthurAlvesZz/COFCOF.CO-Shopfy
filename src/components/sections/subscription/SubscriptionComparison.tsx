import React from 'react';

export default function SubscriptionComparison() {
  return (
    <section data-shopify-section="subscription-comparison" className="coffee-comparison">
      <style>{`
        .coffee-comparison {
          background: #f4efe6;
          color: #080705;
          padding: clamp(64px, 8vw, 120px) 20px;
        }

        .comparison-header {
          max-width: 760px;
          margin: 0 auto 42px;
          text-align: center;
        }

        .comparison-header .eyebrow {
          display: inline-block;
          margin-bottom: 14px;
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8a6238;
        }

        .comparison-header h2 {
          margin: 0;
          font-size: clamp(34px, 5vw, 68px);
          line-height: 0.95;
          letter-spacing: -0.055em;
          text-transform: uppercase;
          font-family: var(--fl);
          font-weight: 800;
        }

        .comparison-header p {
          margin: 18px auto 0;
          max-width: 620px;
          color: rgba(8, 7, 5, 0.68);
          font-size: 15px;
          line-height: 1.65;
          font-family: var(--fn);
        }

        .comparison-table {
          max-width: 1120px;
          margin: 0 auto;
          border: 1px solid rgba(8, 7, 5, 0.12);
          background: rgba(255, 255, 255, 0.28);
          font-family: var(--fn);
        }

        .comparison-row {
          display: grid;
          grid-template-columns: 210px 1fr 1fr;
          border-bottom: 1px solid rgba(8, 7, 5, 0.1);
        }

        .comparison-row:last-child {
          border-bottom: 0;
        }

        .comparison-row > div {
          padding: 24px;
          border-right: 1px solid rgba(8, 7, 5, 0.1);
        }

        .comparison-row > div:last-child {
          border-right: 0;
        }

        .comparison-head {
          background: rgba(8, 7, 5, 0.035);
        }

        .comparison-head div {
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 800;
          color: #5a3824;
          font-family: var(--fl);
        }

        .comparison-label {
          font-size: 12px;
          letter-spacing: 0.12em;
          line-height: 1.35;
          text-transform: uppercase;
          font-weight: 900;
          font-family: var(--fl);
        }

        .comparison-bad,
        .comparison-good {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .comparison-bad span,
        .comparison-good span {
          flex: 0 0 auto;
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 900;
        }

        .comparison-bad span {
          color: rgba(8, 7, 5, 0.48);
          border: 1px solid rgba(8, 7, 5, 0.16);
        }

        .comparison-good {
          background: rgba(8, 7, 5, 0.025);
        }

        .comparison-good span {
          background: #080705;
          color: #f4efe6;
        }

        .comparison-bad p,
        .comparison-good p {
          margin: 0;
          font-size: 15px;
          line-height: 1.55;
        }

        .comparison-bad p {
          color: rgba(8, 7, 5, 0.52);
        }

        .comparison-good p {
          color: #080705;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .coffee-comparison {
            padding: 56px 14px;
            padding-bottom: 96px;
          }

          .comparison-header {
            text-align: left;
            margin-bottom: 28px;
          }

          .comparison-header h2 {
            font-size: clamp(34px, 11vw, 48px);
          }

          .comparison-table {
            border: 0;
            background: transparent;
          }

          .comparison-head {
            display: none;
          }

          .comparison-row {
            display: block;
            margin-bottom: 14px;
            border: 1px solid rgba(8, 7, 5, 0.12);
            background: rgba(255, 255, 255, 0.32);
          }

          .comparison-row > div {
            border-right: 0;
            padding: 16px;
          }

          .comparison-label {
            border-bottom: 1px solid rgba(8, 7, 5, 0.1);
            background: rgba(8, 7, 5, 0.035);
          }

          .comparison-bad,
          .comparison-good {
            display: grid;
            grid-template-columns: 28px 1fr;
            gap: 12px;
          }

          .comparison-good {
            background: rgba(8, 7, 5, 0.04);
            border-top: 1px solid rgba(8, 7, 5, 0.08);
          }

          .comparison-bad::before {
            content: "Café comercial";
            grid-column: 1 / -1;
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: rgba(8, 7, 5, 0.48);
            font-weight: 800;
            font-family: var(--fl);
          }

          .comparison-good::before {
            content: "CofCof.co";
            grid-column: 1 / -1;
            font-size: 10px;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #5a3824;
            font-weight: 900;
            font-family: var(--fl);
          }

          .comparison-bad p,
          .comparison-good p {
            font-size: 14px;
          }

          .whatsapp-floating,
          .floating-whatsapp {
            right: 16px;
            bottom: 18px;
            transform: scale(0.88);
          }

          .coffee-comparison {
            padding-bottom: 96px;
          }
        }
      `}</style>
      <div className="comparison-header">
        <span className="eyebrow">Comparativo</span>
        <h2>Café comum não compete com café de origem.</h2>
        <p>
          A diferença não está só no sabor. Está no produtor, na torra,
          na rastreabilidade e na clareza do que chega na sua xícara.
        </p>
      </div>

      <div className="comparison-table" aria-label="Comparação entre café comercial e CofCof.co">
        <div className="comparison-row comparison-head">
          <div></div>
          <div>Café comercial</div>
          <div>CofCof.co</div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Origem & produtor</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Origem genérica, sem produtor identificado.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Produtor e lote identificados. Você sabe de onde veio.</p>
          </div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Torra</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Torra industrial, feita para escala e longa validade.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Torra sob demanda para preservar frescor e identidade.</p>
          </div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Sabor & qualidade</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Mais amargor, padrão genérico e pouca clareza sensorial.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Perfil sensorial claro: doçura, corpo, acidez e notas.</p>
          </div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Pontuação</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Sem pontuação sensorial transparente.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Pontuação SCA visível e rastreável por lote.</p>
          </div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Escolha</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Você escolhe pela marca, preço ou costume.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Você escolhe por origem, perfil e experiência na xícara.</p>
          </div>
        </div>

        <div className="comparison-row">
          <div className="comparison-label">Recorrência</div>
          <div className="comparison-bad">
            <span>×</span>
            <p>Você compra quando acaba.</p>
          </div>
          <div className="comparison-good">
            <span>✓</span>
            <p>Você pode receber café especial todo mês.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

