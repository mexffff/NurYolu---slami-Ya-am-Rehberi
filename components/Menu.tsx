
import React, { useState } from 'react';
import { 
  Heart, 
  Calendar, 
  MapPin, 
  Star, 
  Tv, 
  Calculator, 
  Clock, 
  BookOpen, 
  User,
  ExternalLink,
  ChevronLeft,
  Volume2,
  Users,
  Feather,
  Radio,
  Archive
} from 'lucide-react';
import { AppTab } from '../types';
import { ESMAUL_HUSNA } from '../constants';

interface MenuProps {
  onNavigate: (tab: AppTab) => void;
}

const Menu: React.FC<MenuProps> = ({ onNavigate }) => {
  const [showEsma, setShowEsma] = useState(false);

  const menuItems = [
    { label: 'Kur\'an-ı Kerim', icon: BookOpen, color: 'text-emerald-500', bg: 'bg-emerald-50', tab: AppTab.QURAN },
    { label: 'Kıble Pusulası', icon: MapPin, color: 'text-sky-500', bg: 'bg-sky-50', tab: AppTab.QIBLA },
    { label: 'Zikirmatik', icon: Clock, color: 'text-amber-500', bg: 'bg-amber-50', tab: AppTab.TASBIH },
    { label: 'Esmaül Hüsna', icon: Heart, color: 'text-rose-500', bg: 'bg-rose-50', action: () => setShowEsma(true) },
    { label: 'Kaza Takibi', icon: Archive, color: 'text-indigo-500', bg: 'bg-indigo-50', tab: AppTab.KAZA_TAKIBI },
    { label: 'Kutlu Günler', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50', tab: AppTab.KUTLU_GUNLER },
    { label: 'Dua Kardeşliği', icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-50', tab: AppTab.DUA_KARDESLIGI },
    { label: 'Amel Defteri', icon: Feather, color: 'text-emerald-700', bg: 'bg-emerald-100', tab: AppTab.AMEL_DEHTERI },
    { label: 'Hatim Paylaşımı', icon: Calendar, color: 'text-orange-500', bg: 'bg-orange-50', tab: AppTab.HATIM_TAKIBI },
    { label: 'Zekat Hesabı', icon: Calculator, color: 'text-teal-500', bg: 'bg-teal-50', tab: AppTab.ZEKAT },
    { label: 'En Yakın Cami', icon: MapPin, color: 'text-red-500', bg: 'bg-red-50', tab: AppTab.CAMI_BUL },
    { label: 'Kur\'an Radyo', icon: Radio, color: 'text-purple-500', bg: 'bg-purple-50' },
  ];

  if (showEsma) {
    return (
      <div className="h-full bg-white animate-in slide-in-from-right duration-500 overflow-y-auto pb-10">
        <div className="sticky top-0 bg-white/95 backdrop-blur-md p-6 flex items-center justify-between border-b border-slate-100 z-10">
          <button onClick={() => setShowEsma(false)} className="p-2 bg-slate-50 rounded-2xl text-slate-800 hover:bg-slate-100 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-xl font-black text-slate-900 tracking-tight">Esmaül Hüsna</h1>
          <div className="w-10"></div>
        </div>

        <div className="p-6 grid grid-cols-2 gap-4">
          {ESMAUL_HUSNA.map((item, idx) => (
            <div key={idx} className="bg-white border-2 border-slate-50 p-6 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm hover:border-emerald-100 transition-all">
               <div className="arabic-text text-4xl font-bold text-emerald-900 mb-3">الله</div>
               <h3 className="font-black text-slate-900 text-sm mb-1 uppercase tracking-tighter">{item.name}</h3>
               <p className="text-[10px] text-slate-400 font-bold leading-tight mb-4">{item.meaning}</p>
               <button className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 active:scale-90 transition-transform">
                  <Volume2 size={18} />
               </button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 animate-in fade-in duration-700">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Menü</h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">NurYolu İslami Rehber</p>
        </div>
        <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
           <User size={24} />
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-y-10 gap-x-6">
        {menuItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <button 
              key={idx}
              onClick={() => {
                if (item.tab) onNavigate(item.tab);
                if (item.action) item.action();
              }}
              className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-4 group"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <div className={`w-20 h-20 ${item.bg} rounded-[2.2rem] flex items-center justify-center ${item.color} shadow-md border-2 border-white group-hover:scale-105 group-hover:rotate-3 transition-all group-active:scale-95`}>
                <Icon size={32} strokeWidth={2.5} />
              </div>
              <span className="text-[10px] font-black text-slate-700 text-center leading-tight uppercase tracking-tight w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Highlights */}
      <div className="mt-14 space-y-4">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl group cursor-pointer">
           <div className="relative z-10">
              <h3 className="font-black text-2xl mb-1 tracking-tight">Kütüphane</h3>
              <p className="text-xs text-slate-400 mb-6 opacity-80 max-w-[180px]">Binlerce kitap, tefsir ve ilmihal parmaklarınızın ucunda.</p>
              <button className="bg-emerald-600 text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-emerald-900/40 group-hover:scale-105 transition-transform">
                 KİTAPLARI GÖR <ExternalLink size={14} />
              </button>
           </div>
           <BookOpen size={160} className="absolute -right-12 -bottom-12 text-white/5 rotate-12 transition-transform group-hover:rotate-0" strokeWidth={1.5} />
        </div>

        <div className="bg-emerald-50 rounded-[2.5rem] p-8 border-2 border-white flex justify-between items-center group cursor-pointer shadow-sm">
           <div className="flex-1">
              <h4 className="font-black text-emerald-900 uppercase text-xs tracking-wider mb-1">Cuma Tebrik Kartları</h4>
              <p className="text-[10px] text-emerald-700 font-bold opacity-70">En güzel resimli mesajlar</p>
           </div>
           <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm transition-transform group-hover:rotate-12">
              <Feather size={24} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
