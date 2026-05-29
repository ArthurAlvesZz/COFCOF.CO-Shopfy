import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OriginFarm } from '../../../types';

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { animate: true, duration: 1.2 });
  }, [center[0], center[1], zoom, map]);
  return null;
}

interface OriginMapProps {
  isOpen: boolean;
  onClose: () => void;
  activeFarm: OriginFarm | null;
  setActiveFarm: (farm: OriginFarm | null) => void;
  filteredFarms: OriginFarm[];
  filterOptions: any[];
  mapFilter: string;
  setMapFilter: (filter: string) => void;
}

export default function OriginMap({ isOpen, onClose, activeFarm, setActiveFarm, filteredFarms, filterOptions, mapFilter, setMapFilter }: OriginMapProps) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isBottomSheetExpanded, setIsBottomSheetExpanded] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('map-is-open');
    } else {
      document.body.classList.remove('map-is-open');
    }
    return () => document.body.classList.remove('map-is-open');
  }, [isOpen]);

  const getPinProps = (farm: OriginFarm) => {
    if (farm.featured) return { fill: '#c9a263', stroke: '#0a0a0a', hasLot: true };
    if (farm.active && farm.linkedProductSlug) return { fill: '#c9a263', stroke: '#0a0a0a', hasLot: true };
    return { fill: 'transparent', stroke: '#c9a263', hasLot: false };
  };

  const createFarmIcon = (farm: OriginFarm, isActive: boolean) => {
    const props = getPinProps(farm);
    return L.divIcon({
      className: 'bg-transparent border-0',
      html: `
        <div class="custom-pin-marker" style="
          background-color: ${props.fill};
          width: ${isActive ? '40px' : '32px'};
          height: ${isActive ? '40px' : '32px'};
          border-radius: 50%;
          border: 2px solid ${isActive ? '#fff' : props.stroke};
          box-shadow: ${isActive ? '0 0 0 4px rgba(201,162,99,0.3), 0 4px 12px rgba(0, 0, 0, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.5)'};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${props.hasLot ? '#0a0a0a' : props.stroke};
          transition: all 0.3s ease;
          transform: ${isActive ? 'scale(1.1) translateY(-4px)' : 'scale(1)'};
        ">
          ${farm.featured 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
          }
        </div>
      `,
      iconSize: isActive ? [40, 40] : [32, 32],
      iconAnchor: isActive ? [20, 20] : [16, 16],
    });
  };

  const intentFilters = ['Todos', '86+ SCA', 'Mais doce', 'Mais frutado', 'Natural', 'Fermentado'];

  const finalFarms = filteredFarms.filter(f => 
    searchTerm === '' || 
    f.farmName.toLowerCase().includes(searchTerm.toLowerCase()) || 
    f.producer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (f.linkedProductSlug && f.linkedProductSlug.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  if (!isOpen) return null;

  return (
    <div className="origin-map-mode">
      
      {/* Painel Esquerdo Desktop */}
      <div className="origin-map-panel hidden md:block">
        <button onClick={onClose} className="origin-map-back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Sair do mapa
        </button>

        <h2 className="display" style={{ fontSize: '32px', marginBottom: '8px' }}>Mapa da Origem CofCof</h2>
        <p className="body-p" style={{ fontSize: '14px', color: 'rgba(244, 239, 230, 0.7)', marginBottom: '0' }}>
          Fazendas, produtores e lotes rastreáveis.
        </p>

        <input 
          type="text" 
          placeholder="Buscar fazenda, produtor ou lote" 
          className="origin-map-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="origin-map-filters">
          {filterOptions.filter(o => intentFilters.includes(o.id)).map(option => (
            <button 
              key={option.id}
              onClick={() => setMapFilter(option.id)}
              className={mapFilter === option.id ? 'is-active' : ''}
            >
              {option.label}
            </button>
          ))}
        </div>

        {activeFarm ? (
          <div className="origin-selected-card">
            <span className="eyebrow" style={{ margin: 0, color: 'var(--sub)' }}>Origem selecionada</span>
            <h3 className="display" style={{ fontSize: '24px', marginTop: '8px', marginBottom: '4px' }}>{activeFarm.farmName}</h3>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sand)', opacity: 0.8, marginBottom: '16px' }}>{activeFarm.producer} &middot; {activeFarm.region}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: '2px', letterSpacing: '0.05em' }}>Lote</p>
                <p style={{ fontSize: '14px', fontWeight: 600 }}>{activeFarm.linkedProductSlug ? '01 — ' + activeFarm.farmName : 'Não vinculado'}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: '2px', letterSpacing: '0.05em' }}>Pontuação</p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#d8c7ad' }}>{activeFarm.scaScore} SCA</p>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '11px', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.05em' }}>Na xícara</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeFarm.sensoryNotes.split(',').map((note, idx) => (
                  <span key={idx} style={{ background: 'rgba(244, 239, 230, 0.1)', color: '#f4efe6', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>{note.trim()}</span>
                ))}
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#f4efe6' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--sub)' }}>Altitude</span>
                <span>{activeFarm.altitude}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                <span style={{ color: 'var(--sub)' }}>Processo</span>
                <span>{activeFarm.process}</span>
              </div>
              {activeFarm.linkedProductSlug && (
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Disponível como</span>
                  <span style={{ color: '#d8c7ad' }}>200g / Assinatura</span>
                </div>
              )}
            </div>

            <div className="origin-map-actions">
              {activeFarm.linkedProductSlug ? (
                <>
                  <Link to={`/cafes/${activeFarm.linkedProductSlug}`} className="primary">Comprar 200g deste lote</Link>
                  <Link to="/assinaturas" className="secondary" style={{ borderColor: 'transparent', borderBottom: '1px solid currentColor', borderRadius: 0, padding: 0, minHeight: 'auto', display: 'inline-flex', alignSelf: 'center', margin: '0 auto', marginTop: '8px' }}>Receber na assinatura</Link>
                </>
              ) : (
                <a href="#produtores" onClick={onClose} className="secondary">Ver produtor</a>
              )}
            </div>
          </div>
        ) : (
          <div className="origin-selected-card" style={{ textAlign: 'center', padding: '48px 24px', opacity: 0.7 }}>
            <MapPin size={24} style={{ margin: '0 auto 12px' }} />
            <p>Clique em uma origem no mapa para ver lote, produtor e perfil sensorial.</p>
          </div>
        )}
      </div>

      {/* Mapa Canvas */}
      <div className="origin-map-canvas">
        <MapContainer 
          center={[-18.9, -46.9]} 
          zoom={8} 
          scrollWheelZoom={true} 
          style={{ width: '100%', height: '100%', background: '#111' }}
          zoomControl={false}
        >
          <ZoomControl position="bottomright" />
          <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
          
          {activeFarm && (
            <ChangeView center={[activeFarm.lat, activeFarm.lng]} zoom={11} />
          )}

          {finalFarms.map(farm => (
            <Marker 
              key={farm.id} 
              position={[farm.lat, farm.lng]}
              icon={createFarmIcon(farm, activeFarm?.id === farm.id)}
              zIndexOffset={activeFarm?.id === farm.id ? 1000 : 0}
              eventHandlers={{ click: () => {
                setActiveFarm(farm);
                setIsBottomSheetExpanded(true);
              } }}
            />
          ))}
        </MapContainer>
      </div>

      {/* Topbar Mobile */}
      <div className="origin-mobile-topbar md:hidden">
        <button onClick={onClose} className="origin-mobile-back" aria-label="Sair do mapa">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <input 
          type="text" 
          placeholder="Buscar fazenda..." 
          className="origin-mobile-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Bottom Sheet Mobile */}
      {activeFarm && (
        <div className={`origin-bottom-sheet md:hidden ${isBottomSheetExpanded ? 'is-expanded' : ''}`}>
          <div className="origin-bottom-sheet-drag" onClick={() => setIsBottomSheetExpanded(!isBottomSheetExpanded)}></div>
          
          <div className="origin-bottom-sheet-content">
            <h3 className="display" style={{ fontSize: '24px', marginBottom: '4px' }}>{activeFarm.farmName}</h3>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sand)', opacity: 0.8, marginBottom: '16px' }}>{activeFarm.producer} &middot; {activeFarm.region}</p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: '2px', letterSpacing: '0.05em' }}>Lote</p>
                <p style={{ fontSize: '14px', fontWeight: 600 }}>{activeFarm.linkedProductSlug ? '01 — ' + activeFarm.farmName : 'Não vinculado'}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', color: 'var(--sub)', textTransform: 'uppercase', marginBottom: '2px', letterSpacing: '0.05em' }}>Pontuação</p>
                <p style={{ fontSize: '14px', fontWeight: 600, color: '#d8c7ad' }}>{activeFarm.scaScore} SCA</p>
              </div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeFarm.sensoryNotes.split(',').map((note, idx) => (
                  <span key={idx} style={{ background: 'rgba(244, 239, 230, 0.1)', color: '#f4efe6', padding: '4px 8px', fontSize: '11px', borderRadius: '4px' }}>{note.trim()}</span>
                ))}
              </div>
            </div>
            
            {isBottomSheetExpanded && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#f4efe6' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Altitude</span>
                  <span>{activeFarm.altitude}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Processo</span>
                  <span>{activeFarm.process}</span>
                </div>
              </div>
            )}

            <div className="origin-map-actions">
              {activeFarm.linkedProductSlug ? (
                <>
                  <Link to={`/cafes/${activeFarm.linkedProductSlug}`} className="primary">Comprar 200g deste lote</Link>
                  <Link to="/assinaturas" className="secondary" style={{ borderColor: 'transparent', borderBottom: '1px solid currentColor', borderRadius: 0, padding: 0, minHeight: 'auto', display: 'inline-flex', alignSelf: 'center', margin: '0 auto', marginTop: '8px' }}>Receber na assinatura</Link>
                </>
              ) : (
                <a href="#produtores" onClick={onClose} className="secondary">Ver produtor</a>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
