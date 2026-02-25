
import React, { useState } from 'react';
import { AppTab } from './types';
import Dashboard from './components/Dashboard';
import Quran from './components/Quran';
import Qibla from './components/Qibla';
import Tasbih from './components/Tasbih';
import Menu from './components/Menu';
import Settings from './components/Settings';
import AmelDefteri from './components/AmelDefteri';
import ZekatCalculator from './components/ZekatCalculator';
import DuaKardesligi from './components/DuaKardesligi';
import KazaTakibi from './components/KazaTakibi';
import KutluGunler from './components/KutluGunler';
import HatimTakibi from './components/HatimTakibi';
import CamiBul from './components/CamiBul';
import TabBar from './components/TabBar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DASHBOARD);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.DASHBOARD: return <Dashboard onNavigate={(tab) => setActiveTab(tab)} />;
      case AppTab.QURAN: return <Quran />;
      case AppTab.QIBLA: return <Qibla />;
      case AppTab.TASBIH: return <Tasbih />;
      case AppTab.MENU: return <Menu onNavigate={(tab) => setActiveTab(tab)} />;
      case AppTab.SETTINGS: return <Settings />;
      case AppTab.AMEL_DEHTERI: return <AmelDefteri />;
      case AppTab.ZEKAT: return <ZekatCalculator />;
      case AppTab.DUA_KARDESLIGI: return <DuaKardesligi />;
      case AppTab.KAZA_TAKIBI: return <KazaTakibi />;
      case AppTab.KUTLU_GUNLER: return <KutluGunler />;
      case AppTab.HATIM_TAKIBI: return <HatimTakibi />;
      case AppTab.CAMI_BUL: return <CamiBul />;
      default: return <Dashboard onNavigate={(tab) => setActiveTab(tab)} />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden max-w-md mx-auto border-x border-slate-200 shadow-2xl">
      <div className="flex-1 overflow-y-auto pb-24 scroll-smooth no-scrollbar">
        {renderContent()}
      </div>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
