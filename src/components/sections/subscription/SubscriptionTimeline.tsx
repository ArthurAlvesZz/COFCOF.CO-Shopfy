import React from 'react';

export default function SubscriptionTimeline() {
  return (
    <section data-shopify-section="subscription-timeline" className="sec sec-d fi">
      <div className="bx">
        <div className="head" style={{ marginBottom: '48px' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--clay)' }}>Da fazenda à xícara</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--sand)', marginTop: '20px', maxWidth: '900px' }}>Cada passo<br /><span className="ital">documentado</span>.</h2>
            <p className="body-p" style={{ maxWidth: '640px', marginTop: '24px', fontSize: '18px', color: 'rgba(246, 241, 235, 0.72)' }}>Do produtor à sua xícara, você sabe o que está recebendo — e por que aquele café é especial.</p>
          </div>
          <div className="label head-meta" style={{ opacity: 0.5 }}>09 passos</div>
        </div>
        <div className="prod">
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">01</div>
            <div className="prod-t">Seleção do produtor</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Mapeamos as melhores fazendas do Cerrado Mineiro, conhecendo quem planta e as práticas de cultivo.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">02</div>
            <div className="prod-t">Escolha do lote</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Avaliamos pequenas parcelas da safra para encontrar nanolotes ou microlotes com potencial excepcional.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">03</div>
            <div className="prod-t">Análise sensorial</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Q-Graders provam às cegas. Apenas lotes com perfil complexo e alta pontuação seguem para assinatura.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">04</div>
            <div className="prod-t">Torra sob demanda</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Sem café velho. Seu pacote só vai para o torrador depois que sua renovação ou pedido acontece.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">05</div>
            <div className="prod-t">Descanso</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Processo vital de desgaseificação para as notas abrirem corretamente, acompanhado pela equipe térmica.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">06</div>
            <div className="prod-t">Empacotamento</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Pacote com válvula para proteger da oxidação, selado com a identificação técnica do seu lote específico.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">07</div>
            <div className="prod-t">Envio</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Postagem rápida. A embalagem leva o QR de procedência rastreável que garante ser Cerrado Mineiro.</div>
          </div>
          <div className="prod-row fi" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
            <div className="prod-n">08</div>
            <div className="prod-t">Preparo em casa</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>Você recebe um café no ápice do sabor e escolhe seu ritual – V60, espresso, prensa ou coador.</div>
          </div>
          <div className="prod-row fi" style={{ padding: '24px 0' }}>
            <div className="prod-n">09</div>
            <div className="prod-t">Próxima curadoria</div>
            <div className="prod-c" style={{ color: 'rgba(246,241,235,0.6)' }}>No mês seguinte, um novo perfil sensorial te surpreende. Nada de repetição automática sem graça.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
