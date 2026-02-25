
import React, { useState, useEffect } from 'react';
import { Map, Navigation2, Compass as CompassIcon, ChevronDown } from 'lucide-react';

const Qibla: React.FC = () => {
  const [heading, setHeading] = useState(0);
  const [qiblaAngle] = useState(153); // Example angle for Istanbul
  const [isMapMode, setIsMapMode] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: any) => {
      let alpha = event.alpha;
      if (event.webkitCompassHeading) alpha = event.webkitCompassHeading;
      if (alpha !== null) setHeading(alpha);
    };

    window.addEventListener('deviceorientation', handleOrientation, true);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  const simulateRotate = () => setHeading((prev) => (prev + 10) % 360);
  const isPointed = Math.abs(heading - qiblaAngle) < 5 || Math.abs(heading - qiblaAngle) > 355;

  return (
    <div className="flex flex-col h-full bg-[#0a0f18] text-white animate-in fade-in duration-700">
      {/* Header Info */}
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold mb-1 tracking-tight">Kıble Pusulası</h2>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-[0.2em]">%100 Doğruluk İçin Kalibre Edin</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 gap-12">
        
        {/* Alignment Guidance */}
        <div className={`flex flex-col items-center gap-2 transition-opacity duration-500 ${isPointed ? 'opacity-100' : 'opacity-40'}`}>
           <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isPointed ? 'bg-emerald-500 animate-pulse' : 'bg-slate-800'}`}>
              <Navigation2 size={24} className={isPointed ? 'text-white' : 'text-slate-500'} fill="currentColor" />
           </div>
           <span className="text-[10px] font-black uppercase tracking-widest">
             {isPointed ? 'Kıble Bulundu' : 'Sağa/Sola Dönün'}
           </span>
        </div>

        {/* Professional Compass UI */}
        {!isMapMode ? (
          <div className="relative group" onClick={simulateRotate}>
             {/* Glow effect when aligned */}
             {isPointed && <div className="absolute inset-[-40px] bg-emerald-500/10 blur-[60px] rounded-full transition-all"></div>}
             
             <div 
              className="relative w-72 h-72 border-[1px] border-slate-800 rounded-full flex items-center justify-center transition-transform duration-300"
              style={{ transform: `rotate(${-heading}deg)` }}
            >
              {/* Outer ticks */}
              {[...Array(36)].map((_, i) => (
                <div key={i} className="absolute h-full w-full flex justify-center py-2" style={{ transform: `rotate(${i * 10}deg)` }}>
                   <div className={`w-0.5 h-1.5 ${i % 9 === 0 ? 'bg-slate-400 h-3' : 'bg-slate-700'}`}></div>
                </div>
              ))}

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute top-6 font-black text-slate-400 text-xs">N</span>
                <span className="absolute bottom-6 font-black text-slate-400 text-xs">S</span>
                <span className="absolute left-6 font-black text-slate-400 text-xs">W</span>
                <span className="absolute right-6 font-black text-slate-400 text-xs">E</span>
              </div>

              {/* Central Needle / Dial */}
              <div className="w-60 h-60 border border-slate-800 rounded-full flex items-center justify-center bg-gradient-to-b from-slate-900/50 to-black/50 backdrop-blur-sm">
                 <div className="w-1.5 h-full bg-slate-800/50 absolute rotate-0"></div>
                 <div className="w-full h-1.5 bg-slate-800/50 absolute rotate-0"></div>
                 
                 {/* Kabe Marker */}
                 <div 
                   className="absolute h-full w-full flex justify-center transition-all duration-300"
                   style={{ transform: `rotate(${qiblaAngle}deg)` }}
                 >
                    <div className={`-translate-y-6 flex flex-col items-center`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-xl ${isPointed ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                         <CompassIcon size={24} />
                      </div>
                      <div className={`w-0.5 h-20 mt-1 ${isPointed ? 'bg-emerald-500 shadow-[0_0_15px_emerald]' : 'bg-slate-700'}`}></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-80 bg-slate-900 rounded-[3rem] overflow-hidden relative border border-slate-800 shadow-2xl">
             <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=600" alt="Map" className="w-full h-full object-cover opacity-20 grayscale" />
             <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <Map size={32} className="text-emerald-500" />
                </div>
                <p className="text-slate-400 font-bold text-sm">Harita Yükleniyor...</p>
             </div>
             <div className="absolute top-1/2 left-1/2 w-0.5 h-64 bg-emerald-500/60 -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-[-35deg]"></div>
          </div>
        )}

        {/* Bottom Stats */}
        <div className="flex flex-col items-center gap-6 w-full px-8">
           <div className="text-center">
              <span className="text-7xl font-black tracking-tighter text-white block">{Math.round(heading)}°</span>
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-2 block">Mevcut Açı</span>
           </div>

           <div className="w-full bg-slate-900/80 backdrop-blur rounded-[2rem] p-6 flex justify-between items-center border border-slate-800">
              <div className="text-left">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Kıble Açısı</p>
                <p className="text-xl font-black text-emerald-400">{qiblaAngle}°</p>
              </div>
              <div className="h-10 w-px bg-slate-800"></div>
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Uzaklık</p>
                <p className="text-xl font-black text-white">2.335 km</p>
              </div>
           </div>
        </div>
      </div>

      {/* Footer Controls */}
      <div className="p-8 flex justify-center gap-4">
        <button 
          onClick={() => setIsMapMode(!isMapMode)}
          className="bg-white text-slate-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center gap-2"
        >
          {isMapMode ? 'Pusula' : 'Harita'}
          <ChevronDown size={16} />
        </button>
      </div>
    </div>
  );
};

export default Qibla;
