
import React, { useState } from 'react';
import { Plus, Minus, Archive, RotateCcw, ChevronLeft } from 'lucide-react';

const KazaTakibi: React.FC = () => {
  const [kazas, setKazas] = useState<Record<string, number>>({
    sabah: 12,
    ogle: 45,
    ikindi: 32,
    aksam: 18,
    yatsi: 21,
    vitir: 15
  });

  const updateKaza = (key: string, delta: number) => {
    setKazas(prev => ({ ...prev, [key]: Math.max(0, prev[key] + delta) }));
  };

  // Fixed error by providing explicit number types for reduce parameters to avoid 'unknown' inference
  const total = Object.values(kazas).reduce((a: number, b: number) => a + b, 0);

  return (
    <div className="h-full bg-white animate-in slide-in-from-bottom-8 duration-500 overflow-y-auto pb-10 no-scrollbar">
      <div className="p-8 pb-4 flex justify-between items-end mb-8">
         <div>
            <h1 className="text-2xl font-black text-slate-900">Kaza Takibi</h1>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Borçlarımı Ödüyorum</p>
         </div>
         <div className="w-14 h-14 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-indigo-100">
            <Archive size={28} />
         </div>
      </div>

      <div className="px-8 mb-10">
         <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex justify-between items-center">
               <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-1">TOPLAM BORÇ</p>
                  <h2 className="text-5xl font-black tracking-tighter">{total} <span className="text-xs font-bold opacity-40">Vakit</span></h2>
               </div>
               <button className="bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors">
                  <RotateCcw size={24} className="text-white" />
               </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
         </div>
      </div>

      <div className="px-8 space-y-4">
         {Object.entries(kazas).map(([key, value]) => (
           <div key={key} className="bg-slate-50 border-2 border-white p-6 rounded-[2.5rem] flex items-center justify-between shadow-sm">
              <div className="text-left">
                 <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">{key.replace('i', 'İ').toUpperCase()}</p>
                 <p className="text-2xl font-black text-slate-800">{value}</p>
              </div>
              <div className="flex gap-2">
                 <button 
                   onClick={() => updateKaza(key, -1)}
                   className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-rose-500 shadow-sm border border-slate-100 active:scale-90 transition-transform"
                 >
                    <Minus size={20} />
                 </button>
                 <button 
                   onClick={() => updateKaza(key, 1)}
                   className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-90 transition-transform"
                 >
                    <Plus size={20} />
                 </button>
              </div>
           </div>
         ))}
      </div>

      <div className="mt-12 px-8">
         <button className="w-full bg-slate-900 text-white py-5 rounded-[2.5rem] font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-[1.02] transition-all">
            HESAPLAMAYI SIFIRLA
         </button>
      </div>
    </div>
  );
};

export default KazaTakibi;
