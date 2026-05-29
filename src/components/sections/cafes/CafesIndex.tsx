import React from 'react';

const indexLots = [
  { id: 'lote-01', num: '01', producer: 'Wagner Crivelenti Ferreiro', sca: '88.5', profile: 'Doce, floral e aveludado', notes: 'Floral • Mel • Mascavo' },
  { id: 'lote-02', num: '02', producer: 'Marcelo Cocco Urtado', sca: '88.0', profile: 'Frutado e cremoso', notes: 'Fruta branca • Melão • Caramelo' },
  { id: 'lote-03', num: '03', producer: 'Claudio Nasser de Carvalho', sca: '87.5', profile: 'Licoroso e envolvente', notes: 'Menta • Xarope • Caramelo' },
  { id: 'lote-04', num: '04', producer: 'Geraldo Magelis Alves de Melo', sca: '87.5', profile: 'Doçura pura e delicada', notes: 'Fruta madura • Licor • Mel' },
  { id: 'lote-05', num: '05', producer: 'Antônio Mazzo Junior', sca: '87.0', profile: 'Cítrico e refrescante', notes: 'Frutas cítricas • Limão • Mel' },
  { id: 'lote-06', num: '06', producer: 'Marcelo Pereira Lima Verde', sca: '86.5', profile: 'Equilibrado e cremoso', notes: 'Frutado • Caramelo • Uva' },
  { id: 'lote-07', num: '07', producer: 'Désio Rodrigo Silva', sca: '86.5', profile: 'Marcante e licoroso', notes: 'Uva verde • Frutas frescas' },
  { id: 'lote-08', num: '08', producer: 'Décio Bruxel', sca: '86.0', profile: 'Doce e acolhedor', notes: 'Chocolate • Caramelo • Frutado' },
];

export default function CafesIndex() {
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
    <section data-shopify-section="cafes-index" className="sec sec-d fi" id="indice" style={{ background: '#080705', padding: 'clamp(80px, 10vw, 120px) 0' }}>
      <div className="bx">
        <div style={{ maxWidth: '640px', marginBottom: '64px' }}>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '16px' }}>Índice dos lotes</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px' }}>Compare os lotes antes de escolher.</h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.72)' }}>Cada café tem uma história, uma pontuação e um perfil sensorial diferente. Use o índice para encontrar o lote ideal para sua xícara.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {indexLots.map(lote => (
            <a 
              key={lote.id} 
              href={`#${lote.id}`} 
              onClick={(e) => handleScroll(e, lote.id)}
              style={{ 
                display: 'flex', flexDirection: 'column', gap: '16px', padding: '24px', justifyContent: 'space-between',
                background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', 
                borderRadius: '8px', transition: 'background 0.3s' 
              }}
              className="idx-row-hover"
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  <span className="label" style={{ color: 'var(--clay)' }}>LOTE {lote.num}</span>
                  <span className="label" style={{ background: 'var(--clay)', color: 'var(--black)', padding: '4px 8px', borderRadius: '4px' }}>{lote.sca} pts</span>
                </div>
                <strong style={{ fontFamily: 'var(--fl)', fontSize: '18px', color: 'var(--sand)' }}>{lote.producer}</strong>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(246,241,235,0.9)', fontWeight: 500 }}>{lote.profile}</span>
                <span style={{ fontSize: '13px', color: 'rgba(246,241,235,0.6)' }}>{lote.notes}</span>
              </div>
              <div style={{ marginTop: 'auto' }}>
                <span className="lnk label" style={{ color: 'var(--sand)', whiteSpace: 'nowrap' }}>Ver lote →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <style>{`
        .idx-row-hover:hover { background: rgba(255,255,255,0.08) !important; }
        @media(min-width: 900px) {
          .idx-row-hover { grid-template-columns: 3fr 4fr !important; align-items: center; }
        }
      `}</style>
    </section>
  );
}
