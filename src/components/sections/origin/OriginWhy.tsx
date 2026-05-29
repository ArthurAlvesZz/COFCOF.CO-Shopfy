import React from 'react';

export default function OriginWhy() {
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="sec fi" style={{ background: '#EFE7DB', padding: '80px 0' }}>
      <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="head" style={{ marginBottom: '64px', textAlign: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="display" style={{ color: 'var(--black)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>O que a origem muda no <span className="ital">sabor</span>?</h2>
            <p className="body-p" style={{ marginTop: '24px', fontSize: '18px', color: 'rgba(10,10,10,0.7)', maxWidth: '640px', margin: '24px auto 0' }}>
              Origem não é cenário. É o que explica o sabor, a doçura, a acidez, o corpo e a personalidade de cada lote.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '48px' }}>
          
          <article style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px', padding: '32px', display: 'flex', flexDirection: 'column' }} className="fi">
            <span style={{ fontSize: '12px', color: 'var(--clay)', fontWeight: 'bold', marginBottom: '16px' }}>01</span>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>Altitude</h3>
            <strong style={{ fontSize: '14px', color: 'var(--black)', marginBottom: '16px', display: 'block' }}>Maturação mais lenta.</strong>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', flex: 1, marginBottom: '24px', lineHeight: 1.6 }}>Em regiões mais altas, o fruto amadurece com mais calma. Na xícara, isso pode aparecer como mais doçura, acidez mais elegante e final mais limpo.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Doçura</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Acidez limpa</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Complexidade</span>
            </div>
          </article>

          <article style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px', padding: '32px', display: 'flex', flexDirection: 'column' }} className="fi">
            <span style={{ fontSize: '12px', color: 'var(--clay)', fontWeight: 'bold', marginBottom: '16px' }}>02</span>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>Estações</h3>
            <strong style={{ fontSize: '14px', color: 'var(--black)', marginBottom: '16px', display: 'block' }}>Inverno seco.</strong>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', flex: 1, marginBottom: '24px', lineHeight: 1.6 }}>O clima do Cerrado ajuda no controle da colheita e da secagem. Isso favorece cafés mais consistentes, limpos e estáveis.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Consistência</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Limpeza</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Equilíbrio</span>
            </div>
          </article>

          <article style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px', padding: '32px', display: 'flex', flexDirection: 'column' }} className="fi">
            <span style={{ fontSize: '12px', color: 'var(--clay)', fontWeight: 'bold', marginBottom: '16px' }}>03</span>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>Solo</h3>
            <strong style={{ fontSize: '14px', color: 'var(--black)', marginBottom: '16px', display: 'block' }}>Basalto e mineralidade.</strong>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', flex: 1, marginBottom: '24px', lineHeight: 1.6 }}>O solo influencia o desenvolvimento da planta e ajuda a construir cafés com mais estrutura, corpo e identidade sensorial.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Corpo</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Estrutura</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Identidade</span>
            </div>
          </article>

          <article style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px', padding: '32px', display: 'flex', flexDirection: 'column' }} className="fi">
            <span style={{ fontSize: '12px', color: 'var(--clay)', fontWeight: 'bold', marginBottom: '16px' }}>04</span>
            <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>Processos</h3>
            <strong style={{ fontSize: '14px', color: 'var(--black)', marginBottom: '16px', display: 'block' }}>Natural, fermentado e controlado.</strong>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', flex: 1, marginBottom: '24px', lineHeight: 1.6 }}>A forma como o café é processado muda aroma, doçura, acidez e complexidade. É aqui que o produtor imprime parte da assinatura do lote.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Aroma</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Doçura</span>
              <span style={{ background: 'var(--sand)', color: 'rgba(10,10,10,0.6)', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>Complexidade</span>
            </div>
          </article>

        </div>

      </div>
    </section>
  );
}
