
import React, { useState, useEffect } from 'react';
import { MapPin, Sun, CloudRain, Settings as SettingsIcon, Share2, Clock, PlayCircle, Book, Heart, Image, Star, Users } from 'lucide-react';
import { AppTab, PrayerTimes } from '../types';
import { PRAYER_NAMES } from '../constants';
import { getDailyContent } from '../geminiService';

interface DashboardProps {
  onNavigate: (tab) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [dailyContent, setDailyContent] = useState<any>(null);
  
  const times: PrayerTimes = {
    imsak: '05:42',
    gunes: '07:15',
    ogle: '13:08',
    ikindi: '15:45',
    aksam: '18:12',
    yatsi: '19:40'
  };

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    getDailyContent().then(setDailyContent);
    return () => clearInterval(timer);
  }, []);

  const getNextPrayer = () => {
    const now = currentTime.getHours() * 60 + currentTime.getMinutes();
    const prayerMinutes = Object.entries(times).map(([key, time]) => {
      const [h, m] = time.split(':').map(Number);
      return { key, minutes: h * 60 + m };
    });

    const next = prayerMinutes.find(p => p.minutes > now) || prayerMinutes[0];
    const targetMinutes = next.minutes < now ? next.minutes + 1440 : next.minutes;
    const diff = targetMinutes - now;
    
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    const s = 59 - currentTime.getSeconds();
    
    return {
      key: next.key,
      name: PRAYER_NAMES[next.key],
      countdown: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
    };
  };

  const nextPrayer = getNextPrayer();
  
  const quickActions = [
    { label: 'Dua', icon: Users, color: 'bg-indigo-500', tab: AppTab.DUA_KARDESLIGI },
    { label: 'Ayet', icon: Book, color: 'bg-emerald-500', tab: AppTab.QURAN },
    { label: 'Amel', icon: Star, color: 'bg-amber-500', tab: AppTab.AMEL_DEHTERI },
    { label: 'Kaza', icon: Clock, color: 'bg-rose-500' },
    { label: 'Zekat', icon: Heart, color: 'bg-teal-500', tab: AppTab.ZEKAT },
  ];

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-700 pb-10 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-white sticky top-0 z-40">
        <div className="flex flex-col">
          <button className="flex items-center gap-1 text-slate-900 font-black text-xl" onClick={() => onNavigate(AppTab.SETTINGS)}>
            <MapPin size={20} className="text-emerald-600" />
            <span>İstanbul</span>
          </button>
          <div className="flex gap-2 text-[10px] font-bold text-slate-400">
            <span>22 ARALIK 2025</span>
            <span className="text-emerald-500">•</span>
            <span>2 RECEB 1447</span>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full">
            <CloudRain size={16} className="text-sky-500" />
            <span className="text-xs font-black text-slate-700">12°</span>
          </div>
          <button onClick={() => onNavigate(AppTab.SETTINGS)} className="p-2 text-slate-400">
            <SettingsIcon size={22} />
          </button>
        </div>
      </div>

      {/* Hero Circular Timer */}
      <div className="px-6 mb-8 mt-2">
        <div className="relative aspect-square bg-slate-900 rounded-[3rem] flex flex-col items-center justify-center text-white overflow-hidden shadow-2xl shadow-emerald-900/20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>
          
          {/* Circular Progress Ring */}
          <svg className="absolute w-[80%] h-[80%] -rotate-90">
            <circle cx="50%" cy="50%" r="45%" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <circle cx="50%" cy="50%" r="45%" fill="none" stroke="#10b981" strokeWidth="8" strokeDasharray="280" strokeDashoffset="70" strokeLinecap="round" />
          </svg>

          <div className="relative z-10 text-center">
             <div className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1 rounded-full mb-3 border border-emerald-500/30">
                SIRADAKİ: {nextPrayer.name}
             </div>
             <h2 className="text-6xl font-black tracking-tighter tabular-nums mb-1">{nextPrayer.countdown}</h2>
             <p className="text-sm font-medium text-slate-400">{times[nextPrayer.key as keyof PrayerTimes]} vaktinde</p>
          </div>
        </div>
      </div>

      {/* Quick Actions Scroll */}
      <div className="flex gap-6 overflow-x-auto px-6 py-2 no-scrollbar mb-8">
        {quickActions.map((action, idx) => (
          <button 
            key={idx} 
            onClick={() => action.tab && onNavigate(action.tab)}
            className="flex flex-col items-center gap-2 group"
          >
            <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center text-white shadow-xl shadow-black/5 transition-all group-active:scale-90 group-hover:-translate-y-1`}>
              <action.icon size={28} />
            </div>
            <span className="text-[11px] font-black text-slate-600 uppercase tracking-tighter">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Detailed Prayer Times Grid */}
      <div className="px-6 grid grid-cols-3 gap-3 mb-8">
         {Object.entries(times).map(([key, time]) => {
           const isNext = key === nextPrayer.key;
           return (
             <div key={key} className={`p-4 rounded-3xl border transition-all ${isNext ? 'bg-emerald-600 border-emerald-500 text-white shadow-lg shadow-emerald-200' : 'bg-slate-50 border-slate-100 text-slate-400'}`}>
                <p className={`text-[10px] font-black uppercase mb-1 ${isNext ? 'text-emerald-100' : 'text-slate-400'}`}>{PRAYER_NAMES[key]}</p>
                <p className="text-lg font-black">{time}</p>
             </div>
           )
         })}
      </div>

      {/* Content Cards */}
      <div className="px-6 space-y-4">
        <div className="bg-slate-900 rounded-[2rem] p-6 text-white overflow-hidden relative">
          <div className="relative z-10">
             <div className="flex items-center gap-2 text-emerald-400 mb-3">
                <Book size={18} />
                <span className="text-[10px] font-black uppercase tracking-widest">Günün Ayeti</span>
             </div>
             <p className="text-lg font-bold leading-tight mb-4 line-clamp-3">
               "{dailyContent?.ayah || "Şüphesiz her zorlukla beraber bir kolaylık vardır."}"
             </p>
             <div className="flex justify-between items-center">
                <span className="text-xs font-medium text-slate-400">İnşirah Suresi, 5. Ayet</span>
                <button className="bg-white/10 p-2 rounded-xl"><Share2 size={16} /></button>
             </div>
          </div>
          <Star size={120} className="absolute -right-10 -top-10 text-white/5 rotate-12" />
        </div>

        <div className="bg-amber-50 rounded-[2rem] p-6 border border-amber-100 flex items-center gap-4">
           <div className="w-14 h-14 bg-amber-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
              <Clock size={28} />
           </div>
           <div>
              <h4 className="font-black text-slate-800 uppercase text-xs tracking-wider">Kaza Takibi</h4>
              <p className="text-2xl font-black text-amber-700">128 Vakit <span className="text-xs font-bold opacity-60">borç</span></p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
