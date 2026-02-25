
import React, { useState } from 'react';
import { Search, Play, Pause, Bookmark, Type as FontIcon, Palette, List, Layers, Star, BookOpen, FastForward, SkipBack } from 'lucide-react';
import { SURAHS } from '../constants';

const Quran: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'suras' | 'juz' | 'bookmarks'>('suras');
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [fontSize, setFontSize] = useState(24);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  const renderSurahList = () => (
    <div className="p-6 space-y-3 animate-in slide-in-from-bottom-4 duration-500">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
        <input 
          type="text" 
          placeholder="Sure veya Cüz ara..." 
          className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] py-4 pl-12 pr-6 text-sm font-bold focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
        />
      </div>
      {SURAHS.map((surah) => (
        <button 
          key={surah.number}
          onClick={() => setSelectedSurah(surah.number)}
          className="w-full flex items-center gap-5 p-5 bg-white rounded-[2.5rem] border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-emerald-700 font-black text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
            {surah.number}
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-black text-slate-800 uppercase text-xs tracking-wider">{surah.englishName}</h3>
            <p className="text-[10px] text-slate-400 font-bold uppercase">{surah.revelationType} • {surah.numberOfAyahs} Ayet</p>
          </div>
          <span className="arabic-text text-3xl font-bold text-emerald-900">{surah.name}</span>
        </button>
      ))}
    </div>
  );

  const renderReadingView = () => {
    const surah = SURAHS.find(s => s.number === selectedSurah);
    return (
      <div className="flex flex-col h-full bg-[#fdfaf5] animate-in zoom-in-95 duration-500">
        <div className="bg-white/90 backdrop-blur-md p-6 flex items-center justify-between sticky top-0 z-10 border-b border-amber-100">
           <button onClick={() => setSelectedSurah(null)} className="p-2 bg-slate-50 rounded-xl text-emerald-700">
              <SkipBack size={20} fill="currentColor" />
           </button>
           <div className="text-center">
              <h2 className="font-black text-slate-800 uppercase text-xs tracking-widest">{surah?.englishName}</h2>
              <p className="text-[9px] font-bold text-emerald-600 uppercase">Tecvidli Okuma</p>
           </div>
           <button className="p-2 bg-slate-50 rounded-xl text-slate-400">
              <Bookmark size={20} />
           </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-10 text-center space-y-12 no-scrollbar">
           <div className="arabic-text text-5xl text-emerald-900 leading-[2]" style={{ fontSize: `${fontSize * 1.5}px` }}>
             بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
           </div>
           <div className="arabic-text text-slate-800 leading-[3] tracking-wide" style={{ fontSize: `${fontSize}px` }}>
             الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ <span className="text-emerald-500 font-black mx-2">۝</span> الرَّحْمَٰنِ الرَّحِيمِ <span className="text-emerald-500 font-black mx-2">۝</span> مَالِكِ يَوْمِ الدِّينِ <span className="text-emerald-500 font-black mx-2">۝</span> إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ <span className="text-emerald-500 font-black mx-2">۝</span> اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ <span className="text-emerald-500 font-black mx-2">۝</span> صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ <span className="text-emerald-500 font-black mx-2">۝</span>
           </div>
           
           <div className="space-y-6 pt-10">
              <div className="text-emerald-900/60 text-xs font-black uppercase tracking-widest border-b border-amber-100 pb-2">Meali (Diyanet)</div>
              <p className="text-slate-600 font-medium leading-relaxed italic">
                Hamd, Âlemlerin Rabbi, Rahmân, Rahîm, hesap ve ceza gününün maliki Allah’a mahsustur. (Allahım!) Yalnız sana ibadet ederiz ve yalnız senden yardım dileriz. Bizi doğru yola, kendilerine nimet verdiklerinin yoluna ilet; gazaba uğrayanlarınkine ve sapkınlarınkine değil.
              </p>
           </div>
        </div>

        {/* Player Controls */}
        <div className="bg-white border-t border-slate-100 p-8 shadow-2xl rounded-t-[3rem]">
           <div className="flex items-center justify-between mb-8">
              <button onClick={() => setPlaybackSpeed(prev => prev === 1 ? 1.5 : 1)} className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full">
                 HIZ: {playbackSpeed}x
              </button>
              <div className="flex items-center gap-10">
                 <button className="text-slate-300"><skipBack size={24} /></button>
                 <button onClick={() => setIsPlaying(!isPlaying)} className="w-16 h-16 rounded-[2rem] bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-200 transition-all active:scale-90">
                    {isPlaying ? <Pause size={28} fill="white" /> : <Play size={28} fill="white" className="translate-x-0.5" />}
                 </button>
                 <button className="text-slate-300 rotate-180"><skipBack size={24} /></button>
              </div>
              <button className="p-2 bg-slate-50 rounded-xl text-slate-400">
                 <Palette size={20} />
              </button>
           </div>
           
           <div className="flex items-center gap-4">
              <select className="flex-1 bg-slate-50 border-none rounded-2xl p-4 text-xs font-black uppercase tracking-widest text-slate-700 outline-none appearance-none">
                 <option>🎙️ Davut Kaya</option>
                 <option>🎙️ Abdurrahman El-Ussi</option>
                 <option>🎙️ Kabe İmamı Sudeys</option>
              </select>
              <div className="flex bg-slate-50 rounded-2xl p-2">
                 <button onClick={() => setFontSize(prev => Math.max(16, prev - 2))} className="p-2 text-slate-400 font-black">A-</button>
                 <div className="w-px h-6 bg-slate-200 self-center"></div>
                 <button onClick={() => setFontSize(prev => Math.min(40, prev + 2))} className="p-2 text-slate-400 font-black">A+</button>
              </div>
           </div>
        </div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-white">
      {!selectedSurah ? (
        <>
          <div className="p-8 pb-4">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-6">Kur'an-ı Kerim</h1>
            <div className="flex bg-slate-50 p-1.5 rounded-[1.5rem] border border-slate-100">
              {[
                { id: 'suras', label: 'Sureler', icon: List },
                { id: 'juz', label: 'Cüzler', icon: Layers },
                { id: 'bookmarks', label: 'Favoriler', icon: Star }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-[1rem] text-[10px] font-black uppercase tracking-wider transition-all ${
                    activeTab === tab.id ? 'bg-white text-emerald-600 shadow-xl shadow-black/5' : 'text-slate-400'
                  }`}
                >
                  <tab.icon size={14} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto no-scrollbar">
            {activeTab === 'suras' && renderSurahList()}
            {activeTab !== 'suras' && (
              <div className="flex flex-col items-center justify-center h-full opacity-10 p-12 text-center grayscale">
                <BookOpen size={120} className="mb-6" />
                <p className="font-black uppercase tracking-[0.2em]">Yükleniyor...</p>
              </div>
            )}
          </div>
        </>
      ) : renderReadingView()}
    </div>
  );
};

export default Quran;
