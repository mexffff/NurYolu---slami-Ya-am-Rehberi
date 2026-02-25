
import React from 'react';
import { MapPin, Navigation, Compass, Search } from 'lucide-react';

const CamiBul: React.FC = () => {
  const mosques = [
    { name: 'Sultanahmet Camii', distance: '1.2 km', address: 'Sultan Ahmet, Atmeydanı Cd. No:7' },
    { name: 'Ayasofya-i Kebir Cami', distance: '1.4 km', address: 'Sultan Ahmet, Ayasofya Meydanı No:1' },
    { name: 'Süleymaniye Camii', distance: '2.8 km', address: 'Süleymaniye, Prof. Sıddık Sami Onar Cd. No:1' },
    { name: 'Fatih Camii', distance: '3.5 km', address: 'Fatih, Fevzi Paşa Cd.' },
  ];

  return (
    <div className="h-full bg-slate-50 animate-in slide-in-from-top-8 duration-500 pb-20">
      <div className="bg-white p-8 pb-10 rounded-b-[3rem] shadow-sm">
        <div className="flex items-center justify-between mb-8">
           <div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Yakın Camiler</h1>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Huzur Kapınızda</p>
           </div>
           <div className="w-14 h-14 bg-rose-500 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-rose-100">
              <MapPin size={28} />
           </div>
        </div>

        <div className="relative">
           <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
           <input 
             type="text" 
             placeholder="Cami ismi ara..." 
             className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] py-4 pl-12 pr-6 text-sm font-bold outline-none focus:border-rose-500 transition-all"
           />
        </div>
      </div>

      <div className="p-8 space-y-4">
         {mosques.map((m, idx) => (
           <div key={idx} className="bg-white border-2 border-white p-6 rounded-[2.5rem] shadow-sm flex items-center gap-5 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-slate-50 rounded-[1.8rem] flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all">
                 <Compass size={28} strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                 <div className="flex justify-between items-start mb-1">
                    <h3 className="font-black text-slate-900 uppercase text-xs tracking-tight">{m.name}</h3>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full">{m.distance}</span>
                 </div>
                 <p className="text-[10px] text-slate-400 font-medium line-clamp-1">{m.address}</p>
                 <button className="flex items-center gap-1.5 mt-3 text-slate-900 font-black uppercase text-[9px] tracking-widest hover:text-rose-500 transition-colors">
                    <Navigation size={12} /> YOL TARİFİ AL
                 </button>
              </div>
           </div>
         ))}
      </div>

      <div className="px-8 mt-4">
         <div className="bg-slate-900 rounded-[2.5rem] h-48 overflow-hidden relative shadow-2xl">
            <img src="https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover opacity-20 grayscale" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
               <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                  <Navigation size={24} className="text-white" />
               </div>
               <p className="text-white text-xs font-black uppercase tracking-[0.2em]">Harita Modunu Aç</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default CamiBul;
