import React from 'react';
import { Link } from 'react-router-dom';

export default function OriginFAQ() {
  return (
    <section className="sec fi" style={{ background: 'var(--sand)' }}>
      <div className="bx" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: 'var(--clay)', textAlign: 'center' }}>Dúvidas Frequentes</div>
        <h2 className="display" style={{ fontSize: 'clamp(2rem,4vw,3.2rem)', color: 'var(--black)', marginTop: '20px', marginBottom: '48px', textAlign: 'center' }}>
          Mais sobre<br /><span className="ital">origem</span>.
        </h2>
        
        <div className="faq-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>O que significa origem rastreável?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>Na CofCof, rastreabilidade significa que cada lote tem o nome da fazenda, do produtor, pontuação e métodos de processamento abertos. Diferente de misturas anônimas de mercado, você sabe exatamente o que está bebendo.</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Por que o Cerrado Mineiro é importante?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>É a primeira região produtora de café com Denominação de Origem no Brasil. Seu Terroir (estações bem definidas e altitude) garante cafés encorpados, doces, com notas de chocolate, caramelo e acidez refinada.</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>O que é SCA?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>SCA é a Specialty Coffee Association. Os provadores certificados pontuam o lote de 0 a 100. Acima de 80 pontos, o café é considerado Especial. Na CofCof, trabalhamos apenas com lotes acima de 86 pontos (superiores).</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>O que muda entre natural e fermentado?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>O café Natural seca com a casca do fruto, transferindo sabor adocicado, notas de caramelo e corpo aveludado. A Fermentação induzida (controlada) evidencia notas mais frutadas, exóticas e complexidade aromática que surpreendem o paladar.</p>
          </details>

          <details style={{ background: '#fff', border: '1px solid rgba(10,10,10,0.08)', borderRadius: '4px', padding: '24px', cursor: 'pointer' }}>
            <summary style={{ fontSize: '18px', fontWeight: 500, outline: 'none' }}>Posso receber cafés de origem na assinatura?</summary>
            <p className="body-p" style={{ marginTop: '16px', color: 'rgba(10,10,10,0.7)', fontSize: '15px', lineHeight: 1.6 }}>Sim. Nossa Assinatura de Cafés envia curadorias mensais diferentes com grãos de produtores que acompanhamos e conhecemos. Assim você prova a diversidade real do Cerrado, sem se preocupar em procurar, direto em sua casa.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
