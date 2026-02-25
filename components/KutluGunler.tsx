
import React from 'react';
import { RELIGIOUS_DAYS } from '../constants';
import { Star, Calendar, ChevronRight } from 'lucide-react';

const KutluGunler: React.FC = () => {
  return (
    <div className="p-8 animate-in slide-in-from-right duration-500 h-full pb-20">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Kutlu Günler</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Hicri 1446-1447 Takvimi</p>
        </div>
        <div className="w-14 h-14 bg-amber-400 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-amber-100">
           <Star size={28} />
        </div>
      </div>

      <div className="space-y-6">
        {RELIGIOUS_DAYS.map((day, idx) => (
          <div key={idx} className="relative group cursor-pointer">
             <div className="bg-white border-2 border-slate-50 p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-amber-100 transition-all">
                <div className="flex justify-between items-start mb-4">
                   <div className="flex-1">
                      <h3 className="text-lg font-black text-slate-900 tracking-tight">{day.title}</h3>
                      <p className="text-[10px] text-amber-600 font-black uppercase tracking-widest mt-1">{day.hicriDate}</p>
                   </div>
                   <div className="bg-amber-50 text-amber-700 px-4 py-2 rounded-2xl text-[10px] font-black uppercase">
                      {day.remainingDays} GÜN
                   </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50 text-[10px] font-bold text-slate-400">
                   <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {day.date}
                   </div>
                   <ChevronRight size={16} />
                </div>
             </div>
             {idx === 0 && <div className="absolute -top-2 -right-2 bg-rose-500 text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">EN YAKIN</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KutluGunler;
