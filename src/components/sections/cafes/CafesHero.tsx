import React from 'react';
import { Link } from 'react-router-dom';

export default function CafesHero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="cafes-hero" className="pg-hero fi">
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="pg-hero-grain"></div>
      <div className="bx pg-hero-in">
        <div className="eyebrow" style={{ color: 'var(--parch)' }}>Safra 25</div>
        <h1 className="display" style={{ marginBottom: '24px' }}>8 lotes premiados.<br />Uma curadoria rara do <span className="ital">Cerrado</span>.</h1>
        <p className="body-p" style={{ fontSize: '18px', maxWidth: '640px', marginBottom: '32px' }}>Conheça cafés especiais selecionados por produtor, pontuação e perfil sensorial — e escolha o lote que combina com sua rotina.</p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}>
          <a href="#indice" onClick={(e) => handleScroll(e, 'indice')} className="btn btn-ds" style={{ padding: '16px 32px', fontSize: '13px' }}><span>Explorar os lotes</span></a>
          <Link to="/assinaturas" className="btn btn-sd" style={{ padding: '16px 32px', fontSize: '13px' }}><span>Assinar cafés do Cerrado</span></Link>
        </div>

        <div className="pg-hero-meta" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', borderTop: '1px solid rgba(246, 241, 235, 0.15)', paddingTop: '32px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Origem</div>
            <div className="label">Cerrado Mineiro</div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Curadoria</div>
            <div className="label">8 produtores</div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Qualidade</div>
            <div className="label">Até 88.5 pontos</div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Produção</div>
            <div className="label">Torra fresca</div>
          </div>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Disponibilidade</div>
            <div className="label">Sachês 200g disponíveis</div>
          </div>
        </div>
      </div>
    </section>
  );
}
