
import React, { useState, useEffect } from 'react';
import { RotateCcw, Volume2, VolumeX, Save, Target, Plus, ChevronLeft } from 'lucide-react';
import { Zikir } from '../types';

const Tasbih: React.FC = () => {
  const [zikirs, setZikirs] = useState<Zikir[]>([
    { id: '1', name: 'Sübhanallah', arabicName: 'سُبْحَانَ اللهِ', count: 0, target: 33 },
    { id: '2', name: 'Elhamdülillah', arabicName: 'الْحَمْدُ للهِ', count: 0, target: 33 },
    { id: '3', name: 'Allahu Ekber', arabicName: 'اللهُ أَكْبَرُ', count: 0, target: 33 },
  ]);
  const [activeZikirId, setActiveZikirId] = useState('1');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const activeZikir = zikirs.find(z => z.id === activeZikirId)!;

  const increment = () => {
    setZikirs(prev => prev.map(z => {
      if (z.id === activeZikirId) {
        const nextCount = z.count + 1;
        if (soundEnabled) {
          const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.setValueAtTime(800, ctx.currentTime);
          gain.gain.setValueAtTime(0.1, ctx.currentTime);
          osc.start();
          osc.stop(ctx.currentTime + 0.05);
        }
        if (nextCount === z.target && 'vibrate' in navigator) {
          navigator.vibrate([100, 50, 100]);
        }
        return { ...z, count: nextCount };
      }
      return z;
    }));
  };

  const reset = () => {
    if (confirm('Bu zikri sıfırlamak istiyor musunuz?')) {
      setZikirs(prev => prev.map(z => z.id === activeZikirId ? { ...z, count: 0 } : z));
    }
  };

  return (
    <div className="flex flex-col h-full bg-white animate-in slide-in-from-right-8 duration-500 overflow-hidden">
      <div className="p-8 pb-0 flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">Zikirmatik</h2>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mt-1">Zikir Dünyası</p>
        </div>
        <div className="flex gap-2">
           <button 
             onClick={() => setSoundEnabled(!soundEnabled)}
             className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${soundEnabled ? 'bg-amber-50 text-amber-600 shadow-xl shadow-amber-900/10' : 'bg-slate-100 text-slate-400'}`}
           >
             {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
           </button>
           <button className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
             <Plus size={24} />
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
        <div className="mb-10 text-center animate-in fade-in zoom-in duration-500" key={activeZikirId}>
           <h3 className="arabic-text text-5xl text-amber-900 font-bold mb-4">{activeZikir.arabicName}</h3>
           <p className="text-sm font-black text-slate-800 uppercase tracking-widest">{activeZikir.name}</p>
        </div>

        <div className="relative group active:scale-95 transition-all" onClick={increment}>
           <div className={`absolute inset-[-20px] rounded-full transition-all duration-500 ${activeZikir.count % 33 === 0 && activeZikir.count > 0 ? 'bg-amber-500/20 blur-3xl scale-125' : 'bg-slate-200/50'}`}></div>
           <button 
            className="relative w-72 h-72 rounded-full bg-white border-[12px] border-slate-900 flex flex-col items-center justify-center shadow-2xl z-10"
          >
             <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-4">HEDEF: {activeZikir.target}</span>
             <span className="text-8xl font-black text-slate-900 tracking-tighter tabular-nums leading-none">{activeZikir.count}</span>
             <div className="w-16 h-1.5 bg-amber-500 rounded-full mt-6 opacity-30 group-active:opacity-100 transition-opacity"></div>
          </button>
        </div>

        <div className="mt-14 flex gap-4 w-full max-w-[320px]">
           <button 
             onClick={reset}
             className="w-16 h-16 bg-slate-50 border-2 border-white rounded-[1.8rem] text-slate-300 flex items-center justify-center shadow-sm active:scale-90 transition-all hover:text-rose-500 hover:border-rose-100"
           >
             <RotateCcw size={24} />
           </button>
           <button className="flex-1 bg-slate-900 text-white rounded-[1.8rem] font-black uppercase text-[10px] tracking-[0.2em] shadow-xl active:scale-95 transition-all">
             ZİKRİ KAYDET
           </button>
        </div>
      </div>

      <div className="bg-slate-900/95 backdrop-blur-md p-8 rounded-t-[3rem] shadow-2xl mt-4">
         <p className="text-[10px] text-slate-500 font-black uppercase mb-4 tracking-widest">Tesbihatlarım</p>
         <div className="flex gap-3 overflow-x-auto no-scrollbar py-1">
            {zikirs.map(zikir => (
              <button 
                key={zikir.id} 
                onClick={() => setActiveZikirId(zikir.id)}
                className={`flex flex-col items-center gap-2 px-6 py-4 rounded-3xl border-2 transition-all min-w-[120px] ${
                  activeZikirId === zikir.id ? 'bg-amber-500 border-amber-400 text-white shadow-xl shadow-amber-900/20' : 'bg-white/5 border-white/5 text-slate-400'
                }`}
              >
                <span className="text-[9px] font-black uppercase tracking-tighter opacity-80">{zikir.name}</span>
                <span className="text-xl font-black">{zikir.count}</span>
              </button>
            ))}
         </div>
      </div>
    </div>
  );
};

export default Tasbih;
