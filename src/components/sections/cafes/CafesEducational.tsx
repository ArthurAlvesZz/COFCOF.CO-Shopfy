import React from 'react';

export default function CafesEducational() {
  return (
    <section className="sec sec-p fi">
      <div className="bx" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '64px' }}>
        
        {/* Pontuação */}
        <div style={{ maxWidth: '720px' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Qualidade SCA</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px' }}>Por que 87+ pontos importa?</h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'rgba(10, 10, 10, 0.72)', marginBottom: '40px' }}>
            Na escala de cafés especiais, a pontuação indica qualidade sensorial, equilíbrio, aroma, doçura, acidez, corpo e finalização. Cafés acima de 80 pontos já são considerados especiais. Lotes acima de 87 pontos representam uma seleção ainda mais refinada, com maior complexidade e personalidade na xícara.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ background: 'var(--sand)', padding: '24px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.05)' }}>
              <div className="display" style={{ fontSize: '32px', color: 'var(--clay)', marginBottom: '8px' }}>80+</div>
              <div className="label">Especial</div>
            </div>
            <div style={{ background: 'var(--sand)', padding: '24px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.05)' }}>
              <div className="display" style={{ fontSize: '32px', color: 'var(--clay)', marginBottom: '8px' }}>85+</div>
              <div className="label">Seleção premium</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '24px', borderRadius: '4px' }}>
              <div className="display" style={{ fontSize: '32px', color: 'var(--sand)', marginBottom: '8px' }}>87+</div>
              <div className="label" style={{ color: 'rgba(246, 241, 235, 0.8)' }}>Lote de destaque</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '24px', borderRadius: '4px' }}>
              <div className="display" style={{ fontSize: '32px', color: 'var(--clay)', marginBottom: '8px' }}>88+</div>
              <div className="label" style={{ color: 'rgba(246, 241, 235, 0.8)' }}>Lote raro</div>
            </div>
          </div>
        </div>

        {/* Guia de escolha */}
        <div style={{ maxWidth: '840px', marginTop: '32px', paddingTop: '64px', borderTop: '1px solid rgba(10,10,10,0.1)' }}>
          <div className="eyebrow" style={{ marginBottom: '16px' }}>Guia Sensorial</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px' }}>Qual lote combina com você?</h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'rgba(10, 10, 10, 0.72)', marginBottom: '40px' }}>
            Não escolha só pela pontuação. Escolha pelo tipo de experiência que você quer na xícara.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ background: 'var(--sand)', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.08)' }}>
              <h3 className="label" style={{ fontSize: '14px', marginBottom: '16px', color: 'var(--black)' }}>Para quem gosta de café doce</h3>
              <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10, 10, 10, 0.7)', marginBottom: '24px' }}>Escolha lotes com notas de caramelo, chocolate e mel.</p>
              <div className="eyebrow" style={{ color: 'var(--clay)' }}>Lote 01, Lote 08</div>
            </div>

            <div style={{ background: 'var(--sand)', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.08)' }}>
              <h3 className="label" style={{ fontSize: '14px', marginBottom: '16px', color: 'var(--black)' }}>Para quem prefere frutado</h3>
              <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10, 10, 10, 0.7)', marginBottom: '24px' }}>Procure notas de frutas amarelas, cítricas ou uva.</p>
              <div className="eyebrow" style={{ color: 'var(--clay)' }}>Lote 02, Lote 05</div>
            </div>

            <div style={{ background: 'var(--sand)', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.08)' }}>
              <h3 className="label" style={{ fontSize: '14px', marginBottom: '16px', color: 'var(--black)' }}>Para quem quer mais corpo</h3>
              <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10, 10, 10, 0.7)', marginBottom: '24px' }}>Escolha lotes com corpo cremoso, licoroso e final longo.</p>
              <div className="eyebrow" style={{ color: 'var(--clay)' }}>Lote 03, Lote 07</div>
            </div>

            <div style={{ background: 'var(--sand)', padding: '32px', borderRadius: '4px', border: '1px solid rgba(10, 10, 10, 0.08)' }}>
              <h3 className="label" style={{ fontSize: '14px', marginBottom: '16px', color: 'var(--black)' }}>Quer começar sem errar?</h3>
              <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10, 10, 10, 0.7)', marginBottom: '24px' }}>Experimente múltiplos sabores em pacotes menores de 200g.</p>
              <a href="#saches" onClick={(e) => { e.preventDefault(); document.getElementById('saches')?.scrollIntoView({behavior: 'smooth'}) }} className="lnk label" style={{ color: 'var(--clay)' }}>Conhecer sachês 200g →</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
