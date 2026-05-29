import React, { useState, useEffect, useMemo } from "react";
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from "react-leaflet";
import { mockPartners, getPublicPartners, getPartnerRouteUrl } from "../data/seed";
import L from "leaflet";
import { MapPin, Search, X, Clock, Coffee, Store, Bed, Fuel, ShoppingBag, Utensils, Wheat, ArrowLeft, Navigation, Info } from "lucide-react";
import { Partner } from "../types";
import { Link, useNavigate } from "react-router-dom";
import { SafePartnerImage } from "../components/SafePartnerImage";

import '../origin.css'; 

function ChangeView({ center, zoom, isDesktop }: { center: [number, number]; zoom: number; isDesktop: boolean; }) {
  const map = useMap();
  useEffect(() => {
    const targetPoint = map.project(center, zoom);
    if (isDesktop) {
      targetPoint.x -= 210;
    } else {
      targetPoint.y -= 100;
    }
    const offsetCenter = map.unproject(targetPoint, zoom);
    map.flyTo(offsetCenter, zoom, { animate: true, duration: 1.2 });
  }, [center[0], center[1], zoom, map, isDesktop]);
  return null;
}

export default function MapPartners() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [activePartner, setActivePartner] = useState<Partner | null>(null);
  const [hasUserClosedPreview, setHasUserClosedPreview] = useState(false);
  const [hasAutoSelectedInitialPartner, setHasAutoSelectedInitialPartner] = useState(false);

  const [isMobileListOpen, setIsMobileListOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Onde encontrar CofCof | Parceiros Oficiais";
    document.body.classList.add('map-mode');
    return () => document.body.classList.remove('map-mode');
  }, []);

  const categories = ["Todos", "Cafeterias", "Empórios", "Restaurantes", "Padarias", "Hotéis", "Postos", "Conveniência"];

  const getPartnerCategory = (partner: Partner) => partner.category || "Outros";

  const filteredData = useMemo(() => {
    const normalizeText = (text: string) => text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    const term = normalizeText(searchTerm);

    return getPublicPartners().filter((p) => {
      const nName = normalizeText(p.publicName || p.name || "");
      const nCity = normalizeText(p.city || "");
      const nState = normalizeText(p.state || "");
      const nNeighborhood = normalizeText(p.neighborhood || "");
      const nCategory = normalizeText(p.category || "");
      const nAddress = normalizeText(p.fullAddress || p.address || "");
      
      const isSearchMatch = !term || nName.includes(term) || nCity.includes(term) || nState.includes(term) || nNeighborhood.includes(term) || nCategory.includes(term) || nAddress.includes(term);

      let isCategoryMatch = true;
      if (activeCategory !== "Todos") {
        const cat = activeCategory.toLowerCase();
        const pCat = getPartnerCategory(p).toLowerCase();
        if (cat === "cafeterias") isCategoryMatch = pCat === "cafeteria";
        else if (cat === "empórios") isCategoryMatch = pCat === "empório";
        else if (cat === "restaurantes") isCategoryMatch = pCat === "restaurante";
        else if (cat === "padarias") isCategoryMatch = pCat === "padaria";
        else if (cat === "hotéis") isCategoryMatch = pCat === "hotel";
        else if (cat === "postos") isCategoryMatch = pCat === "posto" || p.isRoutePartner;
        else if (cat === "conveniência") isCategoryMatch = pCat === "conveniência";
        else if (cat === "aberto agora") isCategoryMatch = true; // Mock implementation
        else if (cat === "perto de mim") isCategoryMatch = true; // Mock implementation
        else isCategoryMatch = false;
      }

      return isSearchMatch && isCategoryMatch;
    });
  }, [searchTerm, activeCategory]);

  const selectPartner = (partnerId: string) => {
    const partner = filteredData.find((p) => p.id === partnerId) || getPublicPartners(mockPartners).find((p) => p.id === partnerId);
    if (!partner) return;
    setHasUserClosedPreview(false);
    setActivePartner(partner);
    if (!isDesktop) {
        setIsMobileListOpen(false);
    }
  };

  useEffect(() => {
    if (filteredData.length > 0 && !activePartner && !hasUserClosedPreview && !hasAutoSelectedInitialPartner && isDesktop) {
      setActivePartner(filteredData[0]);
      setHasAutoSelectedInitialPartner(true);
    }
  }, [filteredData.length, activePartner?.id, hasUserClosedPreview, hasAutoSelectedInitialPartner, isDesktop]);

  useEffect(() => {
    if (!activePartner) return;
    const activePartnerStillVisible = filteredData.some((partner) => partner.id === activePartner.id);
    if (activePartnerStillVisible) return;
    if (filteredData.length > 0 && !hasUserClosedPreview) {
      setActivePartner(filteredData[0]);
      return;
    }
    setActivePartner(null);
  }, [filteredData, activePartner?.id, hasUserClosedPreview]);

  const handleOpenGoogleMaps = (partner: Partner, e?: React.MouseEvent) => {
    e?.stopPropagation();
    window.open(getPartnerRouteUrl(partner), "_blank");
  };

  return (
    <div className="find-page">
      <div className="find-layout">
        
        {/* Mobile Topbar */}
        {!isDesktop && (
          <div className="find-mobile-topbar flex gap-2 w-full">
            <button onClick={() => navigate('/')} className="find-mobile-back flex items-center justify-center shrink-0" style={{ background: 'var(--black)', color: 'var(--sand)', border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', borderRadius: '40px', width: '48px', height: '48px' }}>
              <ArrowLeft size={18} />
            </button>
            <div className="find-search-wrapper relative flex-1" style={{ background: 'var(--black)', border: '1px solid rgba(255,255,255,0.12)', color: 'var(--sand)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', borderRadius: '40px', height: '48px' }}>
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--clay)' }} />
              <input 
                type="text" 
                placeholder="Busque por bairro, cidade..." 
                value={searchTerm} 
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  if (e.target.value.length > 0 && !isMobileListOpen) {
                    setIsMobileListOpen(true);
                  }
                }} 
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                className="w-full h-full pl-11 pr-10 outline-none text-sm"
                style={{ color: 'var(--sand)', background: 'transparent' }}
              />
              {searchTerm && (
                <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--sand)', opacity: 0.5 }}>
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Sidebar / Mobile Bottom Sheet Filters Header */}
        <div className={`find-sidebar ${!isDesktop ? (isMobileListOpen ? 'mobile-sheet-open' : 'mobile-sheet-closed') : ''} ${(!isDesktop && activePartner && !isMobileListOpen) ? 'has-active-partner' : ''}`} style={isDesktop ? { background: 'var(--black)', borderRight: '1px solid rgba(255,255,255,0.05)' } : {}}>
          {isDesktop && (
            <div className="px-8 pt-8 pb-4">
              <button onClick={() => navigate('/')} className="find-exit-button mb-8" style={{ color: 'var(--sand)', opacity: 0.7 }}>
                <ArrowLeft size={16} /> Voltar ao site
              </button>
              
              <div className="eyebrow" style={{ color: 'var(--clay)', marginBottom: '8px' }}>Onde Encontrar</div>
              <h1 className="display" style={{ color: 'var(--sand)', fontSize: '32px', marginBottom: '16px', lineHeight: 1.1 }}>Parceiros oficiais<br/>CofCof.</h1>
              <p className="body-p" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', lineHeight: 1.5 }}>Encontre cafeterias, restaurantes e empórios selecionados.</p>

              <div className="relative mb-6">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--clay)' }} />
                <input 
                  type="text" 
                  placeholder="Busque por bairro, cidade..." 
                  value={searchTerm} 
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck="false"
                  onChange={(e) => setSearchTerm(e.target.value)} 
                  className="w-full rounded-[40px] py-3 pl-12 pr-10 text-sm outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--sand)' }}
                />
                {searchTerm && (
                  <button onClick={() => setSearchTerm("")} className="absolute right-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--sand)', opacity: 0.5 }}>
                    <X size={16} />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-2 pb-4">
                {categories.map((cat) => (
                  <button 
                    key={cat} 
                    onClick={() => setActiveCategory(cat)} 
                    className="shrink-0 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors"
                    style={{ 
                      background: activeCategory === cat ? 'var(--clay)' : 'transparent',
                      color: activeCategory === cat ? '#000' : 'var(--sand)',
                      border: activeCategory === cat ? '1px solid var(--clay)' : '1px solid rgba(255,255,255,0.2)'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Results List */}
          <div className={`find-results ${!isDesktop ? 'mobile-list' : 'px-7 pb-8 flex flex-col gap-3'}`}>
            {!isDesktop && (
              <div className="mobile-sheet-handle-area" onClick={() => setIsMobileListOpen(!isMobileListOpen)}>
                <div className="mobile-sheet-handle"></div>
                {isMobileListOpen && (
                  <div className="px-4 pb-3 pt-1 flex justify-between items-center text-[11px] uppercase tracking-wider font-bold w-full" style={{ color: 'var(--clay)' }}>
                    <span>{filteredData.length} parceiros encontrados</span>
                    <span style={{ color: 'rgba(255,255,255,0.4)' }}>Recolher</span>
                  </div>
                )}
                {!isMobileListOpen && activePartner && (
                  <div className="px-4 pb-3 pt-1 flex justify-between items-center text-[11px] uppercase tracking-wider font-bold w-full" style={{ color: 'var(--clay)' }}>
                    <span>{filteredData.length} parceiros</span>
                    <span style={{ color: 'var(--sand)' }}>Tocar para lista</span>
                  </div>
                )}
                {!activePartner && !isMobileListOpen && (
                   <div className="px-4 pb-3 pt-1 flex justify-between items-center text-[11px] uppercase tracking-wider font-bold w-full" style={{ color: 'var(--clay)' }}>
                     <span>{filteredData.length} parceiros</span>
                     <span style={{ color: 'var(--sand)' }}>Ver lista completa</span>
                   </div>
                )}
              </div>
            )}
            
            <div className={`results-scroll-area ${!isDesktop && !isMobileListOpen && activePartner ? 'showing-preview-only' : ''}`}>
                {(!isDesktop && !isMobileListOpen && activePartner) ? (
                    <PartnerCard partner={activePartner} isActive={true} onClick={() => selectPartner(activePartner.id)} onRoute={(e) => handleOpenGoogleMaps(activePartner, e)} />
                ) : (
                    <>
                    {filteredData.map((partner) => (
                        <PartnerCard 
                            key={partner.id} 
                            partner={partner} 
                            isActive={activePartner?.id === partner.id} 
                            onClick={() => selectPartner(partner.id)} 
                            onRoute={(e) => handleOpenGoogleMaps(partner, e)}
                        />
                    ))}
                    {filteredData.length === 0 && (
                        <div className="text-center py-12 px-6 border rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                          <MapPin size={32} style={{ color: 'var(--clay)', margin: '0 auto 16px', opacity: 0.5 }} />
                          <h3 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>Nenhum parceiro encontrado.</h3>
                          <p className="body-p" style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>Tente outra busca ou categoria.</p>
                        </div>
                    )}
                    </>
                )}
            </div>
          </div>
        </div>

        {/* Map Area */}
        <div className="find-map">
          <MapContainer center={[-18.9, -48.2]} zoom={11} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }} zoomControl={false}>
            {isDesktop && <ZoomControl position="bottomright" />}
            <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png" />
            {activePartner && <ChangeView center={[activePartner.lat, activePartner.lng]} zoom={15} isDesktop={isDesktop} />}
            {filteredData.map((partner) => {
              const isActive = activePartner?.id === partner.id;
              const isFeatured = partner.featured;
              const svgHtml = getIconSvg(partner.category || "", isFeatured || isActive);

              const icon = L.divIcon({
                className: "bg-transparent border-0",
                html: `
                  <div class="custom-pin-marker" style="
                    background-color: ${isActive ? "#f4efe6" : isFeatured ? "#C6A27A" : "#111"};
                    width: ${isActive ? "48px" : isFeatured ? "40px" : "36px"};
                    height: ${isActive ? "48px" : isFeatured ? "40px" : "36px"};
                    border-radius: 50%;
                    border: 2px solid ${isActive ? "#000" : isFeatured ? "#000" : "#f4efe6"};
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: ${isActive ? "#000" : isFeatured ? "#000" : "#f4efe6"};
                    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                    transform: ${isActive ? "scale(1.1) translateY(-6px)" : "scale(1)"};
                  ">
                    ${svgHtml}
                  </div>
                `,
                iconSize: isActive ? [48, 48] : isFeatured ? [40, 40] : [36, 36],
                iconAnchor: isActive ? [24, 24] : isFeatured ? [20, 20] : [18, 18],
              });

              return (
                <Marker 
                  key={partner.id} 
                  position={[partner.lat, partner.lng]} 
                  icon={icon} 
                  zIndexOffset={isActive ? 1000 : 0} 
                  eventHandlers={{ click: () => selectPartner(partner.id) }} 
                />
              )
            })}
          </MapContainer>
        </div>

      </div>
    </div>
  );
}

const PartnerCard: React.FC<{ partner: Partner, isActive: boolean, onClick: () => void, onRoute: (e: React.MouseEvent) => void }> = ({ partner, isActive, onClick, onRoute }) => {
  const getIcon = () => {
    const cat = (partner.category || "").toLowerCase();
    if (cat === "restaurante") return <Utensils size={14} />;
    if (cat === "empório" || cat === "revenda" || cat === "delicatessen") return <ShoppingBag size={14} />;
    if (cat === "padaria" || cat === "confeitaria") return <Wheat size={14} />;
    if (cat === "hotel") return <Bed size={14} />;
    if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota") || partner.isRoutePartner) return <Fuel size={14} />;
    if (cat === "conveniência") return <Store size={14} />;
    if (cat === "cafeteria") return <Coffee size={14} />;
    return <MapPin size={14} />;
  };

  const getLabel = () => {
    const cat = (partner.category || "").toLowerCase();
    if (cat === "empório" || cat === "delicatessen") return "Empório";
    if (cat === "padaria" || cat === "confeitaria") return "Padaria";
    if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota") || partner.isRoutePartner) return "Rota CofCof";
    if (cat === "cafeteria") return "Cafeteria";
    if (cat === "restaurante") return "Restaurante";
    if (cat === "hotel") return "Hotel";
    if (cat === "conveniência") return "Conveniência";
    return partner.category || "Outros";
  };

  return (
    <div 
      onClick={onClick} 
      className={`group cursor-pointer shrink-0 overflow-hidden transition-all flex flex-row items-center gap-3 p-3`}
      style={{
        minHeight: '112px',
        borderRadius: '14px',
        border: isActive ? '1px solid var(--clay)' : '1px solid rgba(244, 239, 230, 0.14)',
        background: isActive ? 'rgba(255,255,255,0.05)' : 'rgba(244, 239, 230, 0.035)'
      }}
    >
      <div className="w-[88px] h-[88px] shrink-0 relative bg-[#15110d] rounded-[10px] overflow-hidden">
        <SafePartnerImage partner={partner} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
        {partner.featured && (
          <span className="absolute top-1 left-1 text-[#000] text-[8px] uppercase font-bold tracking-wider px-1 py-0.5 rounded" style={{ background: 'var(--clay)' }}>Destaque</span>
        )}
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center py-1">
          <div className="flex items-center gap-1.5 mb-1" style={{ color: 'var(--clay)' }}>
             <span className="text-[10px] uppercase font-bold tracking-wider" style={{ letterSpacing: '0.12em' }}>{getLabel()}</span>
          </div>
          <h3 className="m-0" style={{ fontSize: '15px', color: '#f4efe6', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{partner.publicName}</h3>
          <p className="mt-1 mb-0" style={{ fontSize: '12px', color: 'rgba(244, 239, 230, 0.62)', lineHeight: 1.35, whiteSpace: 'normal' }}>
             {partner.neighborhood} · {partner.city}
          </p>

          <div className="flex gap-2 mt-2.5">
             <button onClick={onRoute} className="flex items-center justify-center px-4 rounded-full transition-colors font-bold uppercase" style={{ background: 'var(--sand)', color: 'var(--black)', minHeight: '34px', fontSize: '10px', letterSpacing: '0.08em' }}>
                Ver rota
             </button>
             <Link to={`/parceiros/${partner.slug}`} onClick={(e) => e.stopPropagation()} className="flex items-center justify-center px-4 rounded-full transition-colors font-bold uppercase" style={{ border: '1px solid rgba(244, 239, 230, 0.2)', color: 'var(--sand)', minHeight: '34px', fontSize: '10px', letterSpacing: '0.08em' }}>
                Detalhes
             </Link>
          </div>
      </div>
    </div>
  );
}

function getIconSvg(category: string, isFeatured: boolean) {
  const cat = (category || "").toLowerCase();
  let path = '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/>'; 
  if (cat === "restaurante") path = '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>';
  else if (cat === "empório" || cat === "revenda" || cat === "delicatessen") path = '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>';
  else if (cat === "padaria" || cat === "confeitaria") path = '<path d="M12 2A10 10 0 0 0 2 12c0 2.2.8 4.2 2.2 5.8a2 2 0 0 0 2.6.2l3-2.3a2 2 0 0 1 2.4 0l3 2.3a2 2 0 0 0 2.6-.2A10.1 10.1 0 0 0 22 12 10 10 0 0 0 12 2z"/><path d="M12 2v20"/><path d="M2 12h20"/>';
  else if (cat === "hotel") path = '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>';
  else if (cat === "posto" || cat === "rota cofcof" || cat.includes("rota")) path = '<line x1="3" x2="15" y1="22" y2="22"/><line x1="4" x2="14" y1="9" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>';
  else if (cat === "conveniência") path = '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2-2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/>';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${isFeatured ? "20" : "16"}" height="${isFeatured ? "20" : "16"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}
