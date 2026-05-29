import React from 'react';
import { User, MapPin, Mountain, Cog, Award, Droplets } from 'lucide-react';

export default function OriginLearn() {
  return (
    <section className="sec fi" style={{ background: '#fff', paddingTop: '64px', paddingBottom: '64px' }}>
      <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="head" style={{ marginBottom: '48px', textAlign: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: '24px', justifyContent: 'center', color: 'var(--clay)' }}>Leitura de Rótulo</div>
            <h2 className="display" style={{ color: 'var(--black)' }}>Como ler a origem de<br/>um café <span className="ital">CofCof</span>.</h2>
            <p className="body-p" style={{ marginTop: '24px', fontSize: '18px', color: 'rgba(10,10,10,0.7)' }}>
              Entenda o valor da rastreabilidade antes de ver o mapa e descobrir as fazendas.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          
          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <User size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Produtor</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>Quem cultivou e cuidou do lote da semente até a colheita.</p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <MapPin size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Região</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>A cidade e o município onde a fazenda está localizada no Cerrado Mineiro.</p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <Mountain size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Altitude</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>Exemplifica como o clima montanhoso influenciou a maturação do fruto.</p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <Cog size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Processo</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>O método que o fruto foi tratado após a colheita (ex: natural, fermentado).</p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <Award size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Pontuação</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>A avaliação sensorial oficial (SCA), atestando a pureza e ausência de defeitos.</p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', border: '1px solid rgba(10,10,10,0.05)', borderRadius: '4px' }}>
            <Droplets size={24} style={{ color: 'var(--clay)', marginBottom: '16px' }} />
            <h4 className="display" style={{ fontSize: '20px', color: 'var(--black)', marginBottom: '12px' }}>Notas</h4>
            <p className="body-p" style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>Os aromas e sabores que você perceberá na xícara devido à origem.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
