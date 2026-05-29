import React from 'react';

const REVIEWS = [
  {
    text: "Foi o primeiro café que não precisei adoçar. O cuidado com a torra é perceptível em cada xícara. Mudou meu padrão.",
    author: "Marcelo T.",
    location: "Uberlândia, MG"
  },
  {
    text: "Sensacional a experiência de conhecer a fazenda e a história de quem produziu antes mesmo de abrir o pacote.",
    author: "Camila R.",
    location: "São Paulo, SP"
  },
  {
    text: "Passamos a servir CofCof no nosso escritório de arquitetura e a diferença no impacto dos clientes foi imediata.",
    author: "Roberto & Assoc.",
    location: "Curitiba, PR"
  },
  {
    text: "A entrega sempre no prazo e o café fresco me surpreenderam. O aroma invadiu a casa antes de abrir a caixa.",
    author: "Juliana M.",
    location: "Rio de Janeiro, RJ"
  },
  {
    text: "Não sou barista, mas esse café me fez comprar equipamentos para aprender a extrair o melhor dele. Incrível.",
    author: "Ricardo F.",
    location: "Belo Horizonte, MG"
  },
  {
    text: "Receber a cada mês um microlote diferente me faz sentir que estou sempre provando algo exclusivo. Recomendo muito.",
    author: "Aline S.",
    location: "Florianópolis, SC"
  },
  {
    text: "Moro no interior de Goiás e a entrega chegou super rápido. O frescor do grão faz toda a diferença.",
    author: "Pedro N.",
    location: "Rio Verde, GO"
  },
  {
    text: "Cancelei minhas idas diárias à cafeteria depois que assinei. O sachê drip é absurdamente prático.",
    author: "Fernanda L.",
    location: "Vitória, ES"
  },
  {
    text: "Gostei tanto que presenteei meus pais com uma assinatura. Agora eles só falam do café do mês.",
    author: "Henrique V.",
    location: "Porto Alegre, RS"
  },
  {
    text: "Pela primeira vez consegui sentir notas de chocolate sem ser sugestionada. Um espetáculo.",
    author: "Sofia A.",
    location: "Brasília, DF"
  }
];

export default function HomeReviews() {
  return (
    <section className="sec fi" style={{ overflow: 'hidden' }}>
      <style>{`
        .reviews-marquee-container {
          position: relative;
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          margin-top: clamp(40px, 6vh, 60px);
          overflow: hidden;
          background: var(--rule-w);
          border-top: 1px solid var(--rule-w);
          border-bottom: 1px solid var(--rule-w);
          display: flex;
        }

        .reviews-marquee-track {
          display: flex;
          width: max-content;
          animation: reviewsMarquee 90s linear infinite;
        }
        
        .reviews-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes reviewsMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .hm-rvw-card {
          background: var(--black);
          padding: clamp(32px, 4vw, 40px);
          display: flex;
          flex-direction: column;
          width: 85vw;
          max-width: 420px;
          flex-shrink: 0;
          border-right: 1px solid var(--rule-w);
        }
          
        @media (min-width: 768px) {
          .hm-rvw-card {
            width: 420px;
          }
        }
      `}</style>

      <div className="bx">
        <div className="head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>O que os clientes dizem</div>
            <h2 className="display" style={{ color: 'var(--black)' }}>A diferença entre tomar café<br />por hábito e por <span className="ital">prazer</span>.</h2>
          </div>
        </div>
      </div>

      <div className="reviews-marquee-container">
        <div className="reviews-marquee-track">
          {[...REVIEWS, ...REVIEWS].map((review, idx) => (
            <div key={idx} className="hm-rvw-card">
              <p className="hm-rvw-q">"{review.text}"</p>
              <div className="hm-rvw-n">
                <strong>{review.author}</strong>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
