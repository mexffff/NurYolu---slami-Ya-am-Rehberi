
import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Circle, Users, Flame } from 'lucide-react';

const HatimTakibi: React.FC = () => {
  const [completedJuzs, setCompletedJuzs] = useState<number[]>([1, 2, 5]);

  const toggleJuz = (j: number) => {
    setCompletedJuzs(prev => prev.includes(j) ? prev.filter(x => x !== j) : [...prev, j]);
  };

  return (
    <div className="p-8 animate-in fade-in duration-500 pb-20 overflow-y-auto no-scrollbar">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Hatim Takibi</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Kaldığım Yerden Devam</p>
        </div>
        <div className="w-14 h-14 bg-orange-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-orange-100">
           <BookOpen size={28} />
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white mb-10 shadow-2xl relative overflow-hidden">
         <div className="relative z-10">
            <div className="flex items-center gap-2 text-orange-400 mb-2">
               <Flame size={16} fill="currentColor" />
               <span className="text-[10px] font-black uppercase tracking-[0.2em]">HATİM İLERLEMESİ</span>
            </div>
            <h2 className="text-5xl font-black tracking-tighter mb-4">%{Math.round((completedJuzs.length / 30) * 100)}</h2>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
               <div className="h-full bg-orange-500" style={{ width: `${(completedJuzs.length / 30) * 100}%` }}></div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mt-4 uppercase tracking-widest">30 Cüzden {completedJuzs.length} tanesi tamamlandı</p>
         </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
         {Array.from({ length: 30 }, (_, i) => i + 1).map((j) => {
           const isDone = completedJuzs.includes(j);
           return (
             <button 
               key={j}
               onClick={() => toggleJuz(j)}
               className={`aspect-square rounded-2xl flex flex-col items-center justify-center border-2 transition-all ${
                 isDone 
                 ? 'bg-orange-500 border-orange-400 text-white shadow-lg' 
                 : 'bg-white border-slate-100 text-slate-400'
               }`}
             >
                <span className="text-lg font-black">{j}</span>
                <span className="text-[8px] font-bold uppercase">CÜZ</span>
             </button>
           );
         })}
      </div>

      <div className="mt-12 bg-slate-50 p-6 rounded-[2.5rem] border border-slate-100 flex items-center gap-4">
         <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
            <Users size={24} />
         </div>
         <div>
            <p className="text-xs font-black text-slate-800 uppercase tracking-tight">Ortak Hatimlere Katıl</p>
            <p className="text-[10px] text-slate-500 font-bold">1.240 kişi şu an hatim yapıyor.</p>
         </div>
      </div>
    </div>
  );
};

export default HatimTakibi;
