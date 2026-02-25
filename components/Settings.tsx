
import React from 'react';
import { Bell, MapPin, Layers, Globe, Shield, Info, ChevronRight } from 'lucide-react';

const Settings: React.FC = () => {
  const sections = [
    {
      title: 'Genel Ayarlar',
      items: [
        { label: 'Konum Ayarları', sub: 'İstanbul, Türkiye', icon: MapPin },
        { label: 'Hesaplama Yöntemi', sub: 'Diyanet İşleri Başkanlığı', icon: Layers },
        { label: 'Dil', sub: 'Türkçe', icon: Globe },
      ]
    },
    {
      title: 'Bildirimler',
      items: [
        { label: 'Ezan Vakitleri', sub: 'Tüm vakitler aktif', icon: Bell },
        { label: 'Erken Uyarı', sub: '15 dakika önce', icon: Bell },
      ]
    },
    {
      title: 'Diğer',
      items: [
        { label: 'Gizlilik Politikası', icon: Shield },
        { label: 'Hakkımızda', icon: Info },
      ]
    }
  ];

  return (
    <div className="p-6 animate-in slide-in-from-bottom-8 duration-500">
      <h1 className="text-2xl font-bold text-slate-800 mb-8">Ayarlar</h1>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 ml-1">{section.title}</h3>
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              {section.items.map((item, iIdx) => {
                const Icon = item.icon;
                return (
                  <button 
                    key={iIdx}
                    className={`w-full flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors ${
                      iIdx !== section.items.length - 1 ? 'border-b border-slate-50' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600">
                       <Icon size={20} />
                    </div>
                    <div className="flex-1 text-left">
                       <p className="text-sm font-bold text-slate-800">{item.label}</p>
                       {item.sub && <p className="text-[10px] text-slate-400 font-medium">{item.sub}</p>}
                    </div>
                    <ChevronRight size={18} className="text-slate-300" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center pb-8">
         <p className="text-xs text-slate-400">NurYolu v1.0.4</p>
         <p className="text-[10px] text-slate-300 mt-1">Made with Spiritual Intent</p>
      </div>
    </div>
  );
};

export default Settings;
