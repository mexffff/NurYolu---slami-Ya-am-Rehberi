
import React from 'react';
import { Home, BookOpen, Compass, RotateCcw, Menu as MenuIcon } from 'lucide-react';
import { AppTab } from '../types';

interface TabBarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: AppTab.DASHBOARD, label: 'Ana Sayfa', icon: Home },
    { id: AppTab.QURAN, label: 'Kur\'an', icon: BookOpen },
    { id: AppTab.QIBLA, label: 'Kıble', icon: Compass },
    { id: AppTab.TASBIH, label: 'Zikirmatik', icon: RotateCcw },
    { id: AppTab.MENU, label: 'Menü', icon: MenuIcon },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 flex justify-around py-3 px-2 z-50">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-emerald-600' : 'text-slate-400'
            }`}
          >
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
