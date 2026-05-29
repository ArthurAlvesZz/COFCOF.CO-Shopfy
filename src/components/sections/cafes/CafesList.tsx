import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const lots = [
  {
    id: 'lote-01',
    num: '01',
    sca: '88.5',
    producer: 'Wagner Crivelenti Ferrero',
    producerHtml: <>Wagner Crivelenti<br />Ferrero</>,
    varietyFull: 'Paraíso · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Lote de abertura da curadoria. Paraíso natural com complexidade floral e doçura marcante.',
    variety: 'Paraíso MG H 419-1',
    process: 'Natural',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1180m',
    year: '2025',
    traceLink: '/track/01', // Will need real trace link later
    notesDesc: 'Floral · Mel · Mascavo · Fruta cítrica · Final doce e limpo. Corpo aveludado, acidez cítrica delicada. Ideal para V60, Chemex e coado.',
    pills: ['Floral', 'Mel', 'Mascavo', 'Fruta cítrica', 'Doce'],
    profile: { sweet: 88, acid: 74, body: 82, aroma: 91 }
  },
  {
    id: 'lote-02',
    num: '02',
    sca: '88.0',
    producer: 'Marcelo Cocco Urtado',
    producerHtml: <>Marcelo Cocco<br />Urtado</>,
    varietyFull: 'Topázio · Nat. Fermentado',
    origin: 'Cerrado Mineiro',
    desc: 'Topázio natural fermentado com fruta branca no aroma, corpo cremoso e finalização longa.',
    variety: 'Topázio',
    process: 'Natural Fermentado',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1150m',
    year: '2025',
    traceLink: '/track/02',
    notesDesc: 'Fruta branca · Melão · Mel · Caramelo · Corpo cremoso. Acidez média e equilibrada. Finalização longa e doce.',
    pills: ['Fruta branca', 'Melão', 'Mel', 'Caramelo', 'Cremoso'],
    profile: { sweet: 88, acid: 66, body: 85, aroma: 86 }
  },
  {
    id: 'lote-03',
    num: '03',
    sca: '87.5',
    producer: 'Claudio Nasser de Carvalho',
    producerHtml: <>Claudio Nasser<br />de Carvalho</>,
    varietyFull: 'Arara · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Arara licoroso e envolvente. Menta e xarope de caramelo, corpo denso. Intensidade com elegância.',
    variety: 'Arara',
    process: 'Natural',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1210m',
    year: '2025',
    traceLink: '/track/03',
    notesDesc: 'Menta · Xarope · Caramelo · Licoroso. Acidez alta e vibrante. Finalização longa e complexa.',
    pills: ['Menta', 'Xarope', 'Caramelo', 'Licoroso'],
    profile: { sweet: 80, acid: 84, body: 82, aroma: 88 }
  },
  {
    id: 'lote-04',
    num: '04',
    sca: '87.5',
    producer: 'Geraldo Magelis Alves de Melo',
    producerHtml: <>Geraldo Magelis<br />Alves de Melo</>,
    varietyFull: 'Rubi · Ferm. Anaeróbica',
    origin: 'Cerrado Mineiro',
    desc: 'Rubi em fermentação anaeróbica. Doçura pura, fruta madura e licor. Corpo delicado, finalização limpa.',
    variety: 'Rubi',
    process: 'Ferm. Anaeróbica',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1165m',
    year: '2025',
    traceLink: '/track/04',
    notesDesc: 'Fruta madura · Licor · Mel · Doce. Corpo delicado. Finalização limpa, sem amargor.',
    pills: ['Fruta madura', 'Licor', 'Mel', 'Doce'],
    profile: { sweet: 92, acid: 56, body: 64, aroma: 86 }
  },
  {
    id: 'lote-05',
    num: '05',
    sca: '87.0',
    producer: 'Antônio Mazzo Junior',
    producerHtml: <>Antônio<br />Mazzo Junior</>,
    varietyFull: 'Catuaí 62 · Ferm. Aeróbico',
    origin: 'Cerrado Mineiro',
    desc: 'Catuaí 62 aeróbico com frescor cítrico marcante. Limão, mel e corpo meloso. Ótimo pra filtrados e cold brew.',
    variety: 'Catuaí 62',
    process: 'Fermentado Aeróbico',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1140m',
    year: '2025',
    traceLink: '/track/05',
    notesDesc: 'Frutas cítricas · Limão · Mel · Corpo meloso. Acidez alta e bem definida. Finalização longa e refrescante.',
    pills: ['Frutas cítricas', 'Limão', 'Mel', 'Meloso'],
    profile: { sweet: 76, acid: 87, body: 68, aroma: 82 }
  },
  {
    id: 'lote-06',
    num: '06',
    sca: '86.5',
    producer: 'Marcelo Pereira Lima Verde',
    producerHtml: <>Marcelo Pereira<br />Lima Verde</>,
    varietyFull: 'Arara · Nat. Fermentado',
    origin: 'Cerrado Mineiro',
    desc: 'Arara fermentado com perfil equilibrado. Caramelo, uva madura e corpo cremoso. Café do dia a dia.',
    variety: 'Arara',
    process: 'Natural Fermentado',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1120m',
    year: '2025',
    traceLink: '/track/06',
    notesDesc: 'Frutado · Caramelo · Uva · Cremoso. Acidez cítrica contida. Finalização doce e equilibrada.',
    pills: ['Frutado', 'Caramelo', 'Uva', 'Cremoso'],
    profile: { sweet: 82, acid: 62, body: 74, aroma: 78 }
  },
  {
    id: 'lote-07',
    num: '07',
    sca: '86.5',
    producer: 'Désio Rodrigo Silva',
    producerHtml: <>Désio Rodrigo<br />Silva</>,
    varietyFull: 'Acauã · Ferm. Anaeróbica',
    origin: 'Cerrado Mineiro',
    desc: 'Acauã anaeróbico com uva verde, frutas frescas e caramelo. Acidez alta. Personalidade marcante.',
    variety: 'Acauã',
    process: 'Ferm. Anaeróbica',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1190m',
    year: '2025',
    traceLink: '/track/07',
    notesDesc: 'Uva verde · Frutas frescas · Caramelo · Licorosa. Corpo cremoso. Finalização longa.',
    pills: ['Uva verde', 'Frutas frescas', 'Caramelo', 'Licorosa'],
    profile: { sweet: 76, acid: 83, body: 70, aroma: 84 }
  },
  {
    id: 'lote-08',
    num: '08',
    sca: '86.0',
    producer: 'Décio Bruxel',
    producerHtml: <>Décio<br />Bruxel</>,
    varietyFull: 'Paraíso · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Paraíso natural com chocolate ao leite, caramelo e frutado sutil. Corpo cremoso, finalização acolhedora.',
    variety: 'Paraíso',
    process: 'Natural',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1130m',
    year: '2025',
    traceLink: '/track/08',
    notesDesc: 'Frutado · Caramelo · Chocolate ao leite · Cremoso. Acidez cítrica sutil. Finalização longa e acolhedora.',
    pills: ['Frutado', 'Caramelo', 'Chocolate', 'Cremoso'],
    profile: { sweet: 84, acid: 52, body: 78, aroma: 80 }
  }
];

export default function CafesList() {
  return (
    <section className="cafes-wrapper fi" style={{ paddingTop: 'clamp(60px, 10vh, 120px)', paddingBottom: 'clamp(60px, 10vh, 120px)' }}>
      <div className="bx">
        <div 
          className="lotes-grid-carousel"
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: '24px',
            paddingBottom: '24px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {lots.map((lote) => (
            <div 
              key={lote.id} 
              data-shopify-section={`cafe-${lote.id}`} 
              className="cf-card" 
              id={lote.id}
              style={{
                scrollSnapAlign: 'start',
                flexShrink: 0,
                width: '100%',
                borderTop: '1px solid var(--rule)',
                paddingTop: '40px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div className="cf-grid-card" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div className="cf-media" style={{ background: '#111', padding: '32px', borderRadius: '8px', color: 'var(--sand)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <span className="label" style={{ color: 'var(--clay)' }}>Lote {lote.num}</span>
                    <span className="label" style={{ padding: '6px 12px', background: 'var(--clay)', color: 'var(--black)', borderRadius: '4px' }}>{lote.sca} SCA</span>
                  </div>
                  
                  <div style={{ padding: '40px 0', textAlign: 'center' }}>
                    <div style={{ 
                      width: '140px', height: '180px', margin: '0 auto', 
                      background: 'linear-gradient(45deg, #1a1a1a, #2a2a2a)', 
                      borderRadius: '8px', border: '1px solid #333',
                      display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <span style={{ fontFamily: 'var(--fl)', fontSize: '48px', color: '#444', fontWeight: '800' }}>{lote.num}</span>
                    </div>
                  </div>

                  <div>
                    <h3 style={{ fontFamily: 'var(--fl)', fontSize: '20px', fontWeight: '800', marginBottom: '8px', textTransform: 'uppercase' }}>{lote.producerHtml}</h3>
                    <div style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {lote.origin} • {lote.year}
                    </div>
                  </div>
                </div>

                <div className="cf-info" style={{ paddingTop: '0' }}>
                  <div className="eyebrow" style={{ color: 'var(--sub)' }}>Produtor premiado</div>
                  <h2 className="display" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginTop: '8px', marginBottom: '16px' }}>{lote.producerHtml}</h2>
                  <p className="body-p" style={{ marginBottom: '32px' }}>{lote.desc}</p>
                  
                  <div className="cf-pills" style={{ marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {lote.pills.map((p, i) => <span key={i} className="cf-pill" style={{ fontSize: '11px', padding: '6px 12px' }}>{p}</span>)}
                  </div>

                  <details className="cf-tech-details" style={{ marginBottom: '32px', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
                    <summary style={{ padding: '16px 0', cursor: 'pointer', fontFamily: 'var(--fl)', fontWeight: '700', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      Ver ficha técnica completa
                    </summary>
                    <div className="cf-specs" style={{ paddingBottom: '16px', margin: 0, gap: '16px 32px' }}>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Variedade</div><div className="label" style={{ fontSize: '13px' }}>{lote.variety}</div></div>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Processo</div><div className="label" style={{ fontSize: '13px' }}>{lote.process}</div></div>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Torra</div><div className="label" style={{ fontSize: '13px' }}>{lote.roast}</div></div>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Fazenda</div><div className="label" style={{ fontSize: '13px' }}>{lote.farm}</div></div>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Altitude</div><div className="label" style={{ fontSize: '13px' }}>{lote.alt}</div></div>
                      <div className="cf-spec"><div className="eyebrow" style={{ marginBottom: '4px' }}>Safra</div><div className="label" style={{ fontSize: '13px' }}>{lote.year}</div></div>
                    </div>
                  </details>
                  
                  <div className="cf-cta" style={{ marginTop: '0', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <Link to="/cafes" className="btn btn-ds" style={{ padding: '16px 24px', fontSize: '11px', flex: '1 1 auto', textAlign: 'center', justifyContent: 'center' }}><span>Comprar 200g</span></Link>
                    <Link to="/assinaturas" className="btn btn-sd" style={{ padding: '16px 24px', fontSize: '11px', flex: '1 1 auto', textAlign: 'center', justifyContent: 'center' }}><span>Assinar</span></Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @media(min-width: 768px) {
          .lotes-grid-carousel {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: auto;
            gap: 40px !important;
            overflow: visible !important;
          }
          .cf-card {
            width: auto !important;
            scroll-snap-align: none !important;
          }
        }
      `}} />
    </section>
  );
}
