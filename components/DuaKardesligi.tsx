
import React, { useState } from 'react';
import { Heart, MessageCircle, Send, User } from 'lucide-react';
import { DuaRequest } from '../types';

const DuaKardesligi: React.FC = () => {
  const [requests, setRequests] = useState<DuaRequest[]>([
    { id: '1', name: 'Ahmet Y.', text: 'Hastalığım için şifa dileyen kardeşlerimden dua bekliyorum.', count: 124 },
    { id: '2', name: 'Zeynep B.', text: 'Sınavlarımda başarılı olmak için dualarınızı bekliyorum.', count: 86 },
    { id: '3', name: 'Mustafa K.', text: 'Vefat eden babam için birer Fatiha rica ediyorum.', count: 212 },
  ]);

  const addAmin = (id: string) => {
    setRequests(prev => prev.map(r => r.id === id ? { ...r, count: r.count + 1 } : r));
  };

  return (
    <div className="p-8 animate-in fade-in duration-700">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Dua Kardeşliği</h1>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Birlikte daha güçlüyüz.</p>
        </div>
        <button className="w-14 h-14 bg-rose-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-rose-200">
           <Send size={28} />
        </button>
      </div>

      <div className="space-y-4">
         {requests.map((dua) => (
           <div key={dua.id} className="bg-white border border-slate-100 p-6 rounded-[2.5rem] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                    <User size={20} />
                 </div>
                 <h4 className="font-black text-slate-800 text-sm uppercase">{dua.name}</h4>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium text-sm mb-6 italic">"{dua.text}"</p>
              <div className="flex items-center justify-between">
                 <div className="flex items-center gap-2">
                    <Heart size={16} className="text-rose-500" fill="#f43f5e" />
                    <span className="text-xs font-black text-slate-800">{dua.count} kişi amin dedi</span>
                 </div>
                 <button 
                   onClick={() => addAmin(dua.id)}
                   className="bg-rose-50 text-rose-600 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all"
                 >
                    Amin
                 </button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default DuaKardesligi;
