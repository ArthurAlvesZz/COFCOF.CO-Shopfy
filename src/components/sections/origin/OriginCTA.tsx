import React from 'react';
import { Link } from 'react-router-dom';

export default function OriginCTA() {
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
    <section className="cta fi" style={{ background: 'var(--black)' }}>
      <div className="bx" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 0' }}>
        <div className="eyebrow" style={{ color: 'var(--clay)', justifyContent: 'center' }}>O Próximo Passo</div>
        <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(2rem,5vw,4.5rem)', maxWidth: '800px', margin: '24px auto' }}>Sua próxima xícara pode ter <span className="ital" style={{ color: 'var(--clay)' }}>origem comprovada</span>.</h2>
        <p className="body-p" style={{ color: 'rgba(246, 241, 235, 0.7)', fontSize: '18px', maxWidth: '640px', margin: '0 auto 48px' }}>
          Escolha um lote de 200g para experimentar ou assine nossa curadoria mensal de cafés especiais do Cerrado Mineiro, sempre com pontuações altíssimas e rastreabilidade total.
        </p>

        <div style={{ display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', gap: '24px', justifyContent: 'center' }}>
          <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '13px', padding: '20px 42px' }}>
            <span>Comprar cafés de origem</span>
          </Link>
          <button onClick={() => window.location.href = '/assinatura'} className="btn" style={{ background: 'transparent', border: '1px solid var(--rule-w)', color: 'var(--sand)', fontSize: '13px', padding: '20px 42px' }}>
            <span>Montar assinatura</span>
          </button>
        </div>
      </div>
    </section>
  );
}
