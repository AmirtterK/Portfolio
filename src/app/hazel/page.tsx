"use client";

import React, { useState, useEffect } from "react";
import { 
  ArrowLeft, 
  Sparkles, 
  Compass, 
  Layers, 
  Sun, 
  Wind, 
  Check, 
  Bookmark, 
  Plus, 
  Trash2,
  Maximize2,
  Tv,
  Coffee,
  Grid
} from "lucide-react";

// Curated high-end design assets
interface FurnitureItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  colorCode: string;
  size: string;
  material: string;
}

const FURNITURE_CATALOG: FurnitureItem[] = [
  { 
    id: "chair", 
    name: "Bouclé Lounge Chair", 
    category: "Seating", 
    desc: "Organic sweeping curves upholstered in heavy textured flaxen bouclé.",
    colorCode: "#F5EFEB",
    size: "82 x 85 x 74 cm",
    material: "Textured Wool Bouclé"
  },
  { 
    id: "credenza", 
    name: "Oak Sideboard Credenza", 
    category: "Casegoods", 
    desc: "Roasted oak frame featuring thin solid legs and a soft, deep grain profile.",
    colorCode: "#5C3E29",
    size: "160 x 45 x 75 cm",
    material: "Roasted European Oak"
  },
  { 
    id: "plinth", 
    name: "Travertine Stone Plinth", 
    category: "Tables", 
    desc: "A raw, unpolished travertine block displaying rich geological cavities.",
    colorCode: "#E2D9CD",
    size: "40 x 40 x 50 cm",
    material: "Honed Beige Travertine"
  },
  { 
    id: "vase", 
    name: "Terracotta Apothecary Vase", 
    category: "Objects", 
    desc: "Hand-thrown coarse clay vessel holding a single dry hazel branch.",
    colorCode: "#A76543",
    size: "Ø 28 x 42 cm",
    material: "Raw Earthenware Clay"
  },
  { 
    id: "pendant", 
    name: "Woven Linen Pendant", 
    category: "Lighting", 
    desc: "Floating translucent linen dome casting a warm, filtered amber glow.",
    colorCode: "#EDE7DC",
    size: "Ø 60 x 30 cm",
    material: "Fine Sheer Linen"
  }
];

export default function HazelSpaceShowcase() {
  // --- UI & Canvas States ---
  const [selectedItems, setSelectedItems] = useState<string[]>(["chair", "vase", "pendant"]);
  const [lighting, setLighting] = useState<"morning" | "noon" | "sunset">("morning");
  const [wallTexture, setWallTexture] = useState<"plaster" | "linen" | "clay">("plaster");
  const [lightingAngle, setLightingAngle] = useState(45); // slider 0-180 deg
  
  const [activeTab, setActiveTab] = useState<"palette" | "implication" | "details">("palette");
  const [isSaved, setIsSaved] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // --- Dynamic Generative Copy ---
  const [spatialPhilosophy, setSpatialPhilosophy] = useState("");
  const [isLoadingPhilosophy, setIsLoadingPhilosophy] = useState(false);

  const triggerPhilosophyGeneration = () => {
    setIsLoadingPhilosophy(true);
    
    // Simulate premium AI curation synthesis
    setTimeout(() => {
      const activeFurniture = FURNITURE_CATALOG.filter(i => selectedItems.includes(i.id));
      const count = activeFurniture.length;
      
      let atmosphere = "";
      if (lighting === "morning") { atmosphere = "flooded with cold, low-angle morning goldenness"; }
      else if (lighting === "noon") { atmosphere = "saturated with bright, high-noon raw warmth"; }
      else { atmosphere = "draped in deep, high-contrast, gold-caramel shadows"; }

      const textureDesc = wallTexture === "plaster" ? "raw plaster acoustics" : wallTexture === "clay" ? "earthy warm-clay textures" : "brushed natural linen drapes";

      let composition = "";
      if (count === 0) {
        composition = "an absolute minimalist void of slow-living potential.";
      } else {
        const itemNames = activeFurniture.map(i => i.name.split(" ")[0]).join(" paired with ");
        composition = `a balanced assembly of ${itemNames}, grounded by fine ${textureDesc}.`;
      }

      setSpatialPhilosophy(
        `A slow-living sanctuary ${atmosphere}. The space behaves as ${composition} Every texture is optimized to refract light softly, maintaining a serene, low-entropy microclimate.`
      );
      setIsLoadingPhilosophy(false);
    }, 600);
  };

  // Generate philosophy on states change
  useEffect(() => {
    triggerPhilosophyGeneration();
  }, [selectedItems, lighting, wallTexture]);

  const toggleItemSelection = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(i => i !== id) 
        : [...prev, id]
    );
  };

  const handleExit = () => {
    window.location.href = "/";
  };

  // Calculate dynamic lighting styles based on the slider
  const getLightingGradients = () => {
    // Calculates a beautiful backdrop gradient to simulate solar drift
    const opacity = 0.85;
    const shadowIntensity = (lightingAngle - 90) / 10; // offset shadow drift
    
    if (lighting === "morning") {
      return {
        background: `linear-gradient(${lightingAngle}deg, rgba(253, 251, 247, ${opacity}) 0%, rgba(246, 237, 226, ${opacity}) 60%, rgba(230, 214, 196, ${opacity}) 100%)`,
        shadow: `${shadowIntensity * -2.5}px ${Math.abs(shadowIntensity) * 1.5}px 32px rgba(117, 81, 57, 0.08)`,
        glowColor: "rgba(224, 193, 161, 0.4)",
        status: "Solar Angle: Low East"
      };
    } else if (lighting === "noon") {
      return {
        background: `linear-gradient(${lightingAngle}deg, rgba(253, 251, 247, ${opacity}) 0%, rgba(249, 245, 239, ${opacity}) 50%, rgba(239, 232, 222, ${opacity}) 100%)`,
        shadow: `0px ${Math.abs(shadowIntensity) * 2}px 24px rgba(36, 25, 19, 0.05)`,
        glowColor: "rgba(255, 255, 255, 0.6)",
        status: "Solar Angle: Zenith"
      };
    } else {
      // Sunset
      return {
        background: `linear-gradient(${lightingAngle}deg, rgba(246, 235, 222, ${opacity}) 0%, rgba(229, 203, 178, ${opacity}) 50%, rgba(188, 149, 115, ${opacity}) 100%)`,
        shadow: `${shadowIntensity * 3.5}px ${Math.abs(shadowIntensity) * 2.5}px 48px rgba(92, 62, 41, 0.16)`,
        glowColor: "rgba(188, 149, 115, 0.65)",
        status: "Solar Angle: Low West"
      };
    }
  };

  const currentLighting = getLightingGradients();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#FDFBF7] text-[#2C1E16] font-sans selection:bg-[#B59A7C]/20 flex flex-col min-h-screen">
      
      {/* Dynamic Texture Overlay Layer */}
      {wallTexture === "plaster" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#2C1E16_1px,transparent_1px)] [background-size:16px_16px] z-0"></div>
      )}
      {wallTexture === "linen" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[linear-gradient(to_right,#2C1E16_1px,transparent_1px),linear-gradient(to_bottom,#2C1E16_1px,transparent_1px)] [background-size:8px_8px] z-0"></div>
      )}
      {wallTexture === "clay" && (
        <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#7D5C45_1px,transparent_1px)] [background-size:24px_24px] z-0"></div>
      )}

      {/* Editorial Decorative Wire Grid */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-5 gap-0 opacity-10 z-0">
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="border-r border-[#EBE4D8] h-full"></div>
        <div className="h-full"></div>
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#EBE4D8] px-6 lg:px-12 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#7D5C45] flex items-center justify-center text-[#FDFBF7] shadow-sm font-semibold tracking-wider text-xs">
            H
          </div>
          <div>
            <span className="font-serif font-bold tracking-widest text-[#2C1E16] text-base">HAZEL</span>
            <span className="text-[#B59A7C] font-mono text-3xs ml-1 uppercase tracking-widest">.Space</span>
          </div>
        </div>

        <button 
          onClick={handleExit}
          className="group flex items-center gap-2 text-3xs font-mono text-[#7D5C45] border border-[#EBE4D8] bg-[#FDFBF7] px-4 py-2 rounded-full hover:bg-[#7D5C45] hover:text-[#FDFBF7] transition-all duration-300 shadow-2xs"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          BACK TO PORTFOLIO
        </button>
      </header>

      {/* Core Layout Grid */}
      <main className="flex-1 flex flex-col max-w-6xl mx-auto w-full px-6 lg:px-12 py-8 lg:py-16 gap-16 relative z-10">
        
        {/* HERO HEADER */}
        <section className="flex flex-col items-start text-left gap-6 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#B59A7C] bg-[#B59A7C]/5 text-[#7D5C45] font-mono text-3xs uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-[#B59A7C]" />
            AI Interior Curator
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl font-bold tracking-tight text-[#2C1E16] leading-[1.12]">
            Ditch the cold tech. <br />
            Curate <span className="text-[#7D5C45] italic underline decoration-[#B59A7C] decoration-wavy underline-offset-4 font-normal">slow-living</span> architectural spaces.
          </h1>

          <p className="text-[#2C1E16]/70 font-sans text-sm lg:text-base leading-relaxed">
            Hazel.Space is a spatial layout synthesiser. It generates beautiful, low-entropy interior mood boards using natural textures (raw plaster, dry linen, warm clay) and golden-hour solar angles. 
          </p>
        </section>

        {/* WORKSPACE DECK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT: CONTROLLER CONSOLE (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Catalog Selector */}
            <div className="bg-white p-6 rounded-3xl border border-[#EBE4D8] flex flex-col gap-4 text-left shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EBE4D8] pb-3">
                <span className="font-mono text-3xs text-[#B59A7C] uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Grid className="w-3.5 h-3.5" /> 01 &bull; Natural Catalog
                </span>
                <span className="text-3xs font-mono text-[#2C1E16]/50 uppercase">
                  {selectedItems.length} Selected
                </span>
              </div>

              <div className="flex flex-col gap-2.5 max-h-64 overflow-y-auto pr-1">
                {FURNITURE_CATALOG.map((item) => {
                  const isSelected = selectedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleItemSelection(item.id)}
                      className={`w-full text-left p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                        isSelected 
                          ? "bg-[#FAF6F0] border-[#7D5C45] shadow-3xs" 
                          : "bg-white border-[#EBE4D8] hover:border-[#B59A7C]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Dot indicator matching material color */}
                        <div 
                          className="w-4 h-4 rounded-full border border-[#2C1E16]/10 shadow-inner shrink-0" 
                          style={{ backgroundColor: item.colorCode }}
                        />
                        <div>
                          <span className="block font-serif text-sm font-semibold text-[#2C1E16]">{item.name}</span>
                          <span className="block text-4xs font-mono text-[#7D5C45] uppercase tracking-wider mt-0.5">{item.material}</span>
                        </div>
                      </div>
                      
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-all ${
                        isSelected 
                          ? "bg-[#7D5C45] border-[#7D5C45] text-white" 
                          : "border-[#EBE4D8] text-transparent"
                      }`}>
                        <Plus className="w-3 h-3 stroke-[3]" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Environmental Lighting Engine */}
            <div className="bg-white p-6 rounded-3xl border border-[#EBE4D8] flex flex-col gap-4 text-left shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EBE4D8] pb-3">
                <span className="font-mono text-3xs text-[#B59A7C] uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Sun className="w-3.5 h-3.5" /> 02 &bull; Solar Engine
                </span>
                <span className="text-3xs font-mono text-[#7D5C45] uppercase tracking-wider font-semibold">
                  {currentLighting.status}
                </span>
              </div>

              {/* Lighting Preset Selectors */}
              <div className="grid grid-cols-3 gap-2">
                {(["morning", "noon", "sunset"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      setLighting(mode);
                      setLightingAngle(mode === "morning" ? 45 : mode === "noon" ? 90 : 135);
                    }}
                    className={`py-2 px-3 text-3xs font-mono uppercase tracking-wider rounded-xl border text-center transition-all ${
                      lighting === mode
                        ? "bg-[#7D5C45] border-[#7D5C45] text-white shadow-3xs"
                        : "bg-white border-[#EBE4D8] text-[#2C1E16] hover:border-[#7D5C45]"
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>

              {/* Solar Angle Slider */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex justify-between items-center text-4xs font-mono uppercase text-[#2C1E16]/60">
                  <span>Dawn Horizon (0°)</span>
                  <span>Zenith (90°)</span>
                  <span>Dusk Horizon (180°)</span>
                </div>
                <input 
                  type="range"
                  min="5"
                  max="175"
                  value={lightingAngle}
                  onChange={(e) => setLightingAngle(parseInt(e.target.value))}
                  className="w-full h-1 bg-[#EBE4D8] rounded-lg appearance-none cursor-pointer accent-[#7D5C45]"
                />
              </div>
            </div>

            {/* Tactile Texture Toggles */}
            <div className="bg-white p-6 rounded-3xl border border-[#EBE4D8] flex flex-col gap-4 text-left shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#EBE4D8] pb-3">
                <span className="font-mono text-3xs text-[#B59A7C] uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> 03 &bull; Surface Tactility
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: "plaster", name: "Raw Plaster", spec: "Damp Sand" },
                  { id: "linen", name: "Natural Linen", spec: "Coarse Weft" },
                  { id: "clay", name: "Warm Clay", spec: "Earthenware" }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setWallTexture(t.id as any)}
                    className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all ${
                      wallTexture === t.id
                        ? "bg-[#FAF6F0] border-[#7D5C45] shadow-3xs"
                        : "bg-white border-[#EBE4D8] hover:border-[#B59A7C]"
                    }`}
                  >
                    <span className="block font-serif text-xs font-semibold text-[#2C1E16]">{t.name}</span>
                    <span className="block text-4xs font-mono text-[#7D5C45] uppercase tracking-widest mt-1">{t.spec}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: THE SPATIAL CURATOR CANVAS (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* The Visual Curation Frame */}
            <div 
              className="w-full aspect-[4/3] rounded-[2.5rem] border border-[#EBE4D8] shadow-lg relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-700"
              style={{ 
                background: currentLighting.background,
                boxShadow: currentLighting.shadow
              }}
            >
              
              {/* Dynamic Sun/Moon Orb casting soft glowing light */}
              <div 
                className="absolute w-80 h-80 rounded-full blur-3xl pointer-events-none transition-all duration-700 opacity-60"
                style={{
                  top: `${100 - (Math.sin(lightingAngle * Math.PI / 180) * 80)}%`,
                  left: `${(lightingAngle / 180) * 100}%`,
                  background: currentLighting.glowColor,
                  transform: "translate(-50%, -50%)"
                }}
              ></div>

              {/* Top Details */}
              <div className="flex items-start justify-between relative z-10 w-full">
                <div className="text-left flex flex-col gap-0.5">
                  <span className="font-mono text-3xs text-[#7D5C45] uppercase tracking-widest">Active Space Visualization</span>
                  <span className="font-serif text-lg font-bold text-[#2C1E16]">The Morning Sanctuary</span>
                </div>
                
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2.5 rounded-full border bg-white/80 backdrop-blur-md transition-all shadow-2xs hover:scale-105 active:scale-95 ${
                    isSaved ? "text-[#7D5C45] border-[#7D5C45]" : "text-[#2C1E16]/60 border-[#EBE4D8]"
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
                </button>
              </div>

              {/* Dynamic Mockup Floor Layout (Abstract architectural grid) */}
              <div className="flex-1 w-full flex items-center justify-center relative my-4">
                
                {/* Visualizer Grid Bounds */}
                <div className="w-[85%] h-[85%] border border-dashed border-[#2C1E16]/10 rounded-2xl relative flex items-center justify-center">
                  
                  {/* Floating Items Showcase (Abstract Geometry Mapping) */}
                  <div className="w-full h-full p-6 relative flex flex-wrap items-center justify-center gap-6 z-10">
                    {selectedItems.length === 0 ? (
                      <div className="flex flex-col items-center gap-2.5 text-center text-[#2C1E16]/40 p-4">
                        <Compass className="w-8 h-8 animate-spin-slow text-[#B59A7C]" />
                        <span className="font-mono text-3xs uppercase tracking-widest">The Canvas is Empty</span>
                        <span className="text-4xs max-w-xs font-sans">Select furniture items from the natural catalog to build your slow-living layout.</span>
                      </div>
                    ) : (
                      FURNITURE_CATALOG.filter(i => selectedItems.includes(i.id)).map((item) => (
                        <div
                          key={item.id}
                          className="bg-white/90 backdrop-blur-xs border border-[#EBE4D8] p-4 rounded-2xl shadow-3xs flex flex-col items-center gap-2.5 hover:scale-105 transition-transform duration-300 w-36 text-center animate-fade-in"
                        >
                          {/* Colored circular plinth */}
                          <div 
                            className="w-10 h-10 rounded-full shadow-inner flex items-center justify-center relative"
                            style={{ backgroundColor: item.colorCode }}
                          >
                            {/* Inner core detail */}
                            <div className="w-3.5 h-3.5 rounded-full bg-white/40"></div>
                          </div>
                          
                          <div className="text-center w-full">
                            <span className="block font-serif text-xs font-bold text-[#2C1E16] truncate">{item.name.split(" ")[0]}</span>
                            <span className="block text-4xs font-mono text-[#7D5C45] uppercase mt-0.5">{item.category}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Dynamic architectural layout markings */}
                  <div className="absolute top-2 left-4 font-mono text-4xs text-[#2C1E16]/30 uppercase tracking-widest">
                    Elevation Profile AA
                  </div>
                  <div className="absolute bottom-2 right-4 font-mono text-4xs text-[#2C1E16]/30 uppercase">
                    Scale: 1:25 &bull; {wallTexture.toUpperCase()} WALLS
                  </div>
                </div>

              </div>

              {/* Bottom Curation Status */}
              <div className="flex items-center justify-between relative z-10 w-full border-t border-[#2C1E16]/10 pt-4 text-left">
                <div className="flex gap-4">
                  <div>
                    <span className="block text-4xs font-mono uppercase tracking-widest text-[#2C1E16]/50">Luminescence</span>
                    <span className="block font-serif text-sm font-bold text-[#7D5C45]">{Math.round((lightingAngle / 180) * 100)} lm</span>
                  </div>
                  <div className="h-6 border-r border-[#2C1E16]/10"></div>
                  <div>
                    <span className="block text-4xs font-mono uppercase tracking-widest text-[#2C1E16]/50">Microclimate</span>
                    <span className="block font-serif text-sm font-bold text-[#7D5C45]">Balanced</span>
                  </div>
                </div>
                <div className="text-right flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#7E8578] animate-pulse"></div>
                  <span className="font-mono text-3xs text-[#7E8578] uppercase tracking-wider font-semibold">AI Curated</span>
                </div>
              </div>

            </div>

            {/* AI Philosophy & Implication Synthesizer Board */}
            <div className="bg-white p-8 rounded-3xl border border-[#EBE4D8] flex flex-col gap-4 text-left shadow-2xs relative overflow-hidden">
              <div className="flex items-center gap-2 border-b border-[#EBE4D8] pb-3">
                <div className="w-5 h-5 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#7D5C45]">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span className="font-mono text-3xs text-[#7D5C45] uppercase tracking-widest font-semibold">
                  Generative Spatial Philosophy
                </span>
              </div>

              {isLoadingPhilosophy ? (
                <div className="flex flex-col gap-2 py-4">
                  <div className="h-4 bg-[#FAF6F0] rounded-md w-[90%] animate-pulse"></div>
                  <div className="h-4 bg-[#FAF6F0] rounded-md w-[80%] animate-pulse"></div>
                  <div className="h-4 bg-[#FAF6F0] rounded-md w-[60%] animate-pulse"></div>
                </div>
              ) : (
                <p className="font-serif text-sm lg:text-base leading-relaxed text-[#2C1E16] animate-fade-in italic">
                  &ldquo;{spatialPhilosophy}&rdquo;
                </p>
              )}

              {/* Presets Breakdown / Color breakdown tabs */}
              <div className="flex items-center gap-6 mt-4 pt-4 border-t border-[#EBE4D8] text-4xs font-mono uppercase tracking-widest text-[#2C1E16]/60">
                <span className="text-[#7D5C45] font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> Golden Ratio Match
                </span>
                <span>Contrast Depth: Low-Entropy</span>
                <span>Tactility: 9.4/10</span>
              </div>
            </div>

          </div>

        </section>

        {/* 3-COLUMN EDITORIAL SHOWCASE */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <div className="flex flex-col text-left gap-3 border-t border-[#EBE4D8] pt-6">
            <div className="w-8 h-8 rounded-full bg-[#B59A7C]/10 flex items-center justify-center text-[#7D5C45]">
              <Compass className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2C1E16]">01 &bull; Biological Layouts</h4>
            <p className="text-xs text-[#2C1E16]/70 font-sans leading-relaxed">
              Synthesize room flows structured by natural ratios and biological movement curves. Designed to encourage organic visual rest and cognitive recovery.
            </p>
          </div>

          <div className="flex flex-col text-left gap-3 border-t border-[#EBE4D8] pt-6">
            <div className="w-8 h-8 rounded-full bg-[#B59A7C]/10 flex items-center justify-center text-[#7D5C45]">
              <Sun className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2C1E16]">02 &bull; Solar Integration</h4>
            <p className="text-xs text-[#2C1E16]/70 font-sans leading-relaxed">
              Hazel coordinates light refraction across textures dynamically. The algorithm tracks golden hour drift to schedule optimal visual atmospheres.
            </p>
          </div>

          <div className="flex flex-col text-left gap-3 border-t border-[#EBE4D8] pt-6">
            <div className="w-8 h-8 rounded-full bg-[#B59A7C]/10 flex items-center justify-center text-[#7D5C45]">
              <Layers className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-lg font-bold text-[#2C1E16]">03 &bull; Surface Tactility</h4>
            <p className="text-xs text-[#2C1E16]/70 font-sans leading-relaxed">
              Map and compile raw plaster, damp clay, and course woven linen finishes to prevent visual coldness, introducing grounding haptic feedback.
            </p>
          </div>
        </section>

        {/* ECO-LIFESTYLE NEWSLETTER */}
        <section className="bg-[#7D5C45] text-[#FDFBF7] p-8 lg:p-16 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 shadow-md relative overflow-hidden">
          
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-[#FDFBF7]/5 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
          <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full border border-[#FDFBF7]/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex-1 flex flex-col items-start text-left gap-3 relative z-10 max-w-md">
            <span className="font-mono text-3xs text-[#B59A7C] uppercase tracking-widest font-semibold">Slow Living Digest</span>
            <h3 className="font-serif text-3xl font-bold tracking-tight">The Tactile Dispatch</h3>
            <p className="text-xs text-[#FDFBF7]/85 font-sans leading-relaxed">
              Explore the frontiers of mindful architecture, warm color psychology, and minimal spatial curation. Dispatched every second Sunday.
            </p>
          </div>

          <div className="flex-1 w-full max-w-md relative z-10">
            {newsletterSuccess ? (
              <div className="bg-[#7E8578] border border-[#7E8578] text-[#FDFBF7] p-6 rounded-2xl flex items-center gap-3 animate-fade-in">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-mono text-2xs uppercase tracking-wider font-semibold">Subscription successful</span>
                  <span className="block text-3xs opacity-80">Welcome to the dispatch. Slow designs await.</span>
                </div>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (newsletterEmail.trim()) {
                    setNewsletterSuccess(true);
                  }
                }} 
                className="flex flex-col sm:flex-row items-stretch gap-2.5 w-full"
              >
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-5 py-3 rounded-full bg-white/10 text-[#FDFBF7] border border-white/20 placeholder:text-[#FDFBF7]/50 focus:outline-none focus:border-[#B59A7C] focus:bg-white/15 text-sm transition-all"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#FDFBF7] text-[#7D5C45] hover:bg-[#B59A7C] hover:text-[#FDFBF7] font-mono text-xs uppercase tracking-widest transition-all shadow-md active:scale-95 duration-200"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}
          </div>
        </section>

      </main>

      {/* Aesthetic Architectural Footer */}
      <footer className="bg-[#FDFBF7] border-t border-[#EBE4D8] px-6 lg:px-12 py-10 text-center flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 relative z-10 max-w-6xl mx-auto w-full">
        <p className="text-3xs font-mono text-[#2C1E16]/60 uppercase tracking-widest">
          &copy; 2026 HAZEL.SPACE &bull; ACCREDITED SPATIAL DESIGN MODEL TYPE-F
        </p>
        
        <div className="flex justify-center gap-4 text-3xs font-mono uppercase tracking-widest text-[#7D5C45]">
          <a href="#" className="hover:underline">Tactile Curation</a>
          <span className="text-[#EBE4D8]">&bull;</span>
          <a href="#" className="hover:underline">Slow Living Philosophy</a>
          <span className="text-[#EBE4D8]">&bull;</span>
          <a href="#" className="hover:underline">Legal Serenity</a>
        </div>
      </footer>

      {/* Styled custom CSS embedded for inputs */}
      <style jsx global>{`
        /* Simple clean fade in utility */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin 24s linear infinite;
        }
      `}</style>
    </div>
  );
}
