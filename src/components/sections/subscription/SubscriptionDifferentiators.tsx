import React from 'react';

export default function SubscriptionDifferentiators() {
  return (
    <section className="sec fi" style={{ background: '#fff', padding: '64px 0' }}>
      <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '32px', textAlign: 'center' }}>Por que essa assinatura é diferente?</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          
          <div style={{ padding: '32px', background: 'var(--sand)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--black)', marginBottom: '12px' }}>Apenas 87+ pontos</h3>
            <p style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>
              Não trabalhamos com linhas comerciais ou com lotes que não atinjam no mínimo 87 pontos nas avaliações cegas do mercado especial. Você recebe o topo do Cerrado.
            </p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--black)', marginBottom: '12px' }}>Produtores reais</h3>
            <p style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>
              A embalagem conta a história de quem plantou. Rastreabilidade via QR oficial. Do nome do produtor à altitude exata da lavoura em Minas Gerais.
            </p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--black)', marginBottom: '12px' }}>Torra fresca semanal</h3>
            <p style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>
              O seu café só entra no torrador quando você assina. Enviamos em até 48h pós-torra. Válvula especial na embalagem que permite o envio no ápice aromático.
            </p>
          </div>

          <div style={{ padding: '32px', background: 'var(--sand)', borderRadius: '4px' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--black)', marginBottom: '12px' }}>Livre de amarras</h3>
            <p style={{ fontSize: '15px', color: 'rgba(10,10,10,0.7)', lineHeight: 1.5 }}>
              Sem burocracia ou letras miúdas. Troque de plano, pause por um mês ou cancele na hora pelo seu painel. O seu compromisso é apenas com o sabor.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
