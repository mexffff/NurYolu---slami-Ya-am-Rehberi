
import React, { useState } from 'react';
import { CheckCircle2, Circle, Star, Calendar } from 'lucide-react';
import { AmelTask } from '../types';

const AmelDefteri: React.FC = () => {
  const [tasks, setTasks] = useState<AmelTask[]>([
    { id: '1', label: 'Sabah Namazı', done: true },
    { id: '2', label: 'Öğle Namazı', done: false },
    { id: '3', label: 'İkindi Namazı', done: false },
    { id: '4', label: 'Akşam Namazı', done: false },
    { id: '5', label: 'Yatsı Namazı', done: false },
    { id: '6', label: 'Kur\'an Okuma', done: true },
    { id: '7', label: 'Sadaka Verme', done: false },
    { id: '8', label: 'Günlük Evrad', done: false },
  ]);

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const progress = Math.round((tasks.filter(t => t.done).length / tasks.length) * 100);

  return (
    <div className="p-8 animate-in slide-in-from-right duration-500">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Amel Defteri</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Bugün: 22 Aralık</p>
        </div>
        <div className="w-14 h-14 rounded-2xl bg-amber-500 flex items-center justify-center text-white shadow-xl shadow-amber-200">
           <Star size={28} />
        </div>
      </div>

      <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white mb-8 shadow-2xl relative overflow-hidden">
         <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">Günlük İlerleme</p>
            <div className="flex items-end gap-2 mb-4">
               <span className="text-6xl font-black tracking-tighter">%{progress}</span>
               <span className="text-sm font-bold text-slate-400 mb-2">Tamamlandı</span>
            </div>
            <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 transition-all duration-700" style={{ width: `${progress}%` }}></div>
            </div>
         </div>
         <Calendar size={120} className="absolute -right-8 -bottom-8 text-white/5" />
      </div>

      <div className="space-y-3">
         {tasks.map((task) => (
           <button 
             key={task.id}
             onClick={() => toggleTask(task.id)}
             className={`w-full flex items-center gap-4 p-5 rounded-3xl border transition-all ${
               task.done ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-white border-slate-100 text-slate-600'
             }`}
           >
             {task.done ? <CheckCircle2 size={24} /> : <Circle size={24} className="text-slate-300" />}
             <span className="font-black text-sm uppercase tracking-tight">{task.label}</span>
           </button>
         ))}
      </div>

      <button className="w-full mt-8 bg-slate-100 py-4 rounded-3xl text-slate-400 text-xs font-black uppercase tracking-widest">
         Dün'e Göz At
      </button>
    </div>
  );
};

export default AmelDefteri;
