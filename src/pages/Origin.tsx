import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Mountain, Award, Flame, QrCode, ClipboardCheck, Send } from 'lucide-react';
import { publicContentService } from '../services/publicContentService';
import { mockOriginFarms, mockProducts } from '../data/seed';
import { OriginFarm } from '../types';

import '../origin.css';

import OriginHero from '../components/sections/origin/OriginHero';
import OriginWhy from '../components/sections/origin/OriginWhy';
import OriginLearn from '../components/sections/origin/OriginLearn';
import OriginMap from '../components/sections/origin/OriginMap';
import OriginProducers from '../components/sections/origin/OriginProducers';
import OriginFAQ from '../components/sections/origin/OriginFAQ';
import OriginCTA from '../components/sections/origin/OriginCTA';

export default function Origin() {
  const [content, setContent] = useState<any>({});
  const [activeFarm, setActiveFarm] = useState<OriginFarm | null>(null);
  const [mapFilter, setMapFilter] = useState('Todos');

  const filterOptionsRaw = [
    { id: 'Todos', label: 'Todos', test: (f: OriginFarm) => true, category: 'Técnico' },
    { id: '86+ SCA', label: '86+ SCA', test: (f: OriginFarm) => (f.scaScore || 0) >= 86, category: 'Técnico' },
    { id: 'Natural', label: 'Natural', test: (f: OriginFarm) => f.process.toLowerCase().includes('natural'), category: 'Técnico' },
    { id: 'Fermentado', label: 'Fermentado', test: (f: OriginFarm) => f.process.toLowerCase().includes('fermentado'), category: 'Técnico' },
    { id: 'Honey', label: 'Honey', test: (f: OriginFarm) => f.process.toLowerCase().includes('honey'), category: 'Técnico' },
    { id: 'Cup of Excellence', label: 'Cup of Excellence', test: (f: OriginFarm) => f.featured || (f.scaScore || 0) >= 88, category: 'Técnico' },
    { id: 'Mais doce', label: 'Mais doce', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('caramelo') || f.sensoryNotes.toLowerCase().includes('doce') || f.sensoryNotes.toLowerCase().includes('chocolate') || f.sensoryNotes.toLowerCase().includes('melaço'), category: 'Sensorial' },
    { id: 'Mais floral', label: 'Mais floral', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('floral') || f.sensoryNotes.toLowerCase().includes('jasmim') || f.sensoryNotes.toLowerCase().includes('chá'), category: 'Sensorial' },
    { id: 'Mais frutado', label: 'Mais frutado', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('fruta') || f.sensoryNotes.toLowerCase().includes('morango') || f.sensoryNotes.toLowerCase().includes('pêssego') || f.sensoryNotes.toLowerCase().includes('licor'), category: 'Sensorial' },
    { id: 'Disponível agora', label: 'Disponível agora', test: (f: OriginFarm) => f.active && !!f.linkedProductSlug, category: 'Comercial' },
  ];

  const filterOptions = filterOptionsRaw.map(opt => ({
    ...opt,
    count: mockOriginFarms.filter(opt.test).length
  }));

  const filteredFarms = mockOriginFarms.filter(farm => {
    const opt = filterOptionsRaw.find(o => o.id === mapFilter);
    return opt ? opt.test(farm) : true;
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const isMapOpen = searchParams.get('mapa') === 'aberto';

  const openMap = () => {
    setSearchParams(params => {
      params.set('mapa', 'aberto');
      return params;
    });
  };

  const closeMap = () => {
    setSearchParams(params => {
      params.delete('mapa');
      return params;
    });
    setTimeout(() => {
      const el = document.getElementById('mapa-preview');
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }, 100);
  };

  useEffect(() => {
    if (filteredFarms.length === 1) {
      if (activeFarm?.id !== filteredFarms[0].id) {
        setActiveFarm(filteredFarms[0]);
      }
    } else if (filteredFarms.length > 0 && (!activeFarm || !filteredFarms.find(f => f.id === activeFarm.id))) {
      const defaultFarm = filteredFarms.find(f => f.featured) || filteredFarms.find(f => f.active) || filteredFarms[0];
      setActiveFarm(defaultFarm);
    } else if (filteredFarms.length === 0) {
      setActiveFarm(null);
    }
  }, [mapFilter]);

  useEffect(() => {
    const farmId = searchParams.get('farmId');
    const filterFromUrl = searchParams.get('originFilter');
    const focusMap = searchParams.get('focusMap');

    window.scrollTo(0, 0);
    document.title = "Origem | CofCof.co";

    if (filterFromUrl && filterOptionsRaw.some(o => o.id === filterFromUrl)) {
      setMapFilter(filterFromUrl);
    }

    if (farmId) {
      const farmTarget = mockOriginFarms.find(f => f.id === farmId);
      if (farmTarget) {
        setActiveFarm(farmTarget);
        if (focusMap === '1' || window.location.hash.includes('mapa-preview')) {
          setTimeout(() => {
            const el = document.getElementById('mapa-preview');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          }, 500);
        }
      }
    } else if (!activeFarm && filteredFarms.length > 0) {
      const defaultFarm = filteredFarms.find(f => f.featured) || filteredFarms.find(f => f.active) || filteredFarms[0];
      setActiveFarm(defaultFarm);
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }, 500);
    }

    const fetchContent = async () => {
      const blocks = await publicContentService.getPageContent('origem');
      const contentMap: any = {};
      blocks.forEach(b => { contentMap[b.key] = b; });
      setContent(contentMap);
    };
    fetchContent();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <OriginHero content={content} />
      <OriginWhy />
      <OriginLearn />

      {/* Preview Section */}
      <section id="mapa-preview" className="sec sec-d fi" style={{ background: '#080705', padding: '120px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <div className="bx" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '16px' }}>MAPA RASTREÁVEL</div>
          <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '24px' }}>
            Explore a origem de cada lote CofCof.
          </h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.7)', marginBottom: '40px' }}>
            Veja fazendas, produtores, altitude, processo, pontuação e perfil sensorial em uma experiência interativa. Cada ponto no mapa representa uma origem real por trás dos cafés CofCof.
          </p>
          <button onClick={openMap} className="btn btn-sd" style={{ fontSize: '13px', padding: '20px 48px' }}>
            <span>Abrir mapa da origem</span>
          </button>
        </div>
      </section>

      <OriginMap 
        isOpen={isMapOpen}
        onClose={closeMap}
        activeFarm={activeFarm} 
        setActiveFarm={setActiveFarm} 
        filteredFarms={filteredFarms} 
        filterOptions={filterOptions} 
        mapFilter={mapFilter} 
        setMapFilter={setMapFilter} 
      />

      <OriginProducers farms={mockOriginFarms} onSelectFarm={setActiveFarm} />

      {/* 6. TIMELINE */}
      <section className="sec sec-d fi" style={{ background: 'var(--black)', padding: '120px 0' }}>
        <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Da origem até você</h2>
            <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.7)', maxWidth: '640px', margin: '24px auto 0' }}>
              Uma cadeia curta, rastreável e focada em preservar o que cada lote tem de melhor.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px', textAlign: 'center', position: 'relative' }}>
            {window.innerWidth > 1024 && (
              <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px', background: 'rgba(255,255,255,0.1)', zIndex: 0 }}></div>
            )}
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Mountain size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>1. Fazenda</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Seleção de produtores e lotes no Cerrado Mineiro.</p>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <QrCode size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>2. Lote</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Cada café é identificado por produtor, processo e perfil.</p>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Award size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>3. Avaliação</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Pontuação superior a 86 SCA, análise sensorial e qualidade.</p>
            </div>
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Flame size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>4. Torra</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Torra sob demanda para preservar frescor e identidade aromática.</p>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Send size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>5. Envio</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Embalagem hermética própria e entrega com rastreio protegido.</p>
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <ClipboardCheck size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>6. Xícara</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Você recebe um café com história, origem e sabor identificados.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CAFÉS DISPONÍVEIS */}
      <section className="sec sec-p fi" style={{ background: '#fff', padding: '120px 0' }}>
        <div className="bx" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="head" style={{ marginBottom: '64px', display: 'flex', flexDirection: window.innerWidth > 768 ? 'row' : 'column', justifyContent: 'space-between', alignItems: window.innerWidth > 768 ? 'flex-end' : 'flex-start', gap: '24px' }}>
            <div style={{ maxWidth: '640px' }}>
              <div className="eyebrow" style={{ marginBottom: '16px', color: 'var(--clay)' }}>Catálogo de Origem</div>
              <h2 className="display" style={{ color: 'var(--black)', fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>Escolha um lote com <span className="ital">origem comprovada</span>.</h2>
              <p className="body-p" style={{ fontSize: '18px', color: 'rgba(10,10,10,0.7)', marginTop: '24px' }}>Cada café abaixo carrega produtor, pontuação, processo e perfil sensorial. Escolha seu 200g ou receba cafés assim na assinatura.</p>
            </div>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/cafes" className="btn" style={{ fontSize: '11px', padding: '16px 32px', border: '1px solid rgba(10,10,10,0.2)', backgroundColor: 'transparent', color: 'var(--black)' }}>
                <span>Ver todos os cafés</span>
              </Link>
            </div>
          </div>
          
          <div className="hm-prd-grid" style={{ marginTop: 0 }}>
            {mockProducts.filter(p => p.category === 'grão' && p.stock > 0).slice(0, 4).map(product => {
              const linkedFarm = mockOriginFarms.find(f => f.linkedProductSlug === product.slug);
              
              return (
                <div key={product.id} className="hm-prd-i" style={{ border: '1px solid rgba(10,10,10,0.05)', background: 'var(--sand)' }}>
                  <div className="hm-prd-head">
                    <div className="hm-prd-reg">{linkedFarm ? `${linkedFarm.region} • MG` : product.region}</div>
                    {product.isAwardWinning && <div className="label" style={{ color: 'var(--sand)', fontSize: '9px', background: 'var(--clay)' }}>{linkedFarm?.scaScore ? `${linkedFarm.scaScore} SCA` : '86+ SCA'}</div>}
                  </div>
                  <h3 className="hm-prd-t" style={{ fontSize: '20px' }}>{product.name}</h3>
                  <p className="hm-prd-n" style={{ color: 'var(--clay)', fontWeight: 500 }}>{product.sensoryNotes.join(' • ')}</p>
                  
                  <div className="hm-prd-b" style={{ flexDirection: 'column', gap: '16px', alignItems: 'stretch' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: 'rgba(10,10,10,0.6)' }}>200g</span>
                      <div className="hm-prd-pr" style={{ margin: 0 }}>R$ {product.price.toFixed(2)}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Link to={`/cafes/${product.slug}`} className="btn btn-sd" style={{ flex: 1, textAlign: 'center', fontSize: '11px', padding: '12px' }}>Comprar 200g</Link>
                      <Link to={`/cafes/${product.slug}`} className="btn" style={{ background: 'transparent', border: '1px solid rgba(10,10,10,0.2)', color: 'var(--black)', fontSize: '11px', padding: '12px' }}>Detalhes</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <OriginFAQ />
      <OriginCTA />
    </>
  );
}
