
import React, { useState } from 'react';
import { Calculator, Wallet, Coins, Landmark, TrendingUp } from 'lucide-react';

const ZekatCalculator: React.FC = () => {
  const [cash, setCash] = useState('');
  const [gold, setGold] = useState('');
  const [silver, setSilver] = useState('');

  const calculate = () => {
    const total = (Number(cash) || 0) + (Number(gold) * 2900) + (Number(silver) * 35);
    return (total / 40).toLocaleString('tr-TR', { maximumFractionDigits: 2 });
  };

  return (
    <div className="p-8 animate-in slide-in-from-bottom-8 duration-500 pb-20">
      <h1 className="text-2xl font-black text-slate-900 mb-2">Zekat Hesaplayıcı</h1>
      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Mal varlığınızı girerek zekatınızı öğrenin.</p>

      <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white mb-8 shadow-2xl shadow-emerald-200">
         <p className="text-[10px] font-black uppercase tracking-widest mb-1 opacity-80">Ödenmesi Gereken</p>
         <div className="flex items-baseline gap-2">
            <span className="text-5xl font-black tracking-tighter">{calculate()}</span>
            <span className="text-xl font-bold">₺</span>
         </div>
      </div>

      <div className="space-y-6">
         <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase flex items-center gap-2">
               <Wallet size={14} className="text-emerald-500" /> Nakit Para (TL)
            </label>
            <input 
              type="number" 
              value={cash}
              onChange={(e) => setCash(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-3xl font-black text-lg focus:border-emerald-500 outline-none transition-all"
              placeholder="0"
            />
         </div>

         <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase flex items-center gap-2">
               <Coins size={14} className="text-amber-500" /> Altın (Gram)
            </label>
            <input 
              type="number" 
              value={gold}
              onChange={(e) => setGold(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-3xl font-black text-lg focus:border-emerald-500 outline-none transition-all"
              placeholder="0"
            />
         </div>

         <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase flex items-center gap-2">
               <Landmark size={14} className="text-sky-500" /> Gümüş (Gram)
            </label>
            <input 
              type="number" 
              value={silver}
              onChange={(e) => setSilver(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 p-5 rounded-3xl font-black text-lg focus:border-emerald-500 outline-none transition-all"
              placeholder="0"
            />
         </div>
      </div>

      <div className="mt-12 bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-start gap-4">
         <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
            <TrendingUp size={20} />
         </div>
         <div>
            <h4 className="font-black text-xs text-slate-800 uppercase mb-1">Hesaplama Mantığı</h4>
            <p className="text-[10px] text-slate-500 leading-tight font-medium">Zekat, nisap miktarına ulaşan mal varlığınızın %2.5 (1/40) oranında verilmesidir. Altın ve gümüş fiyatları tahmini güncel değerlerdir.</p>
         </div>
      </div>
    </div>
  );
};

export default ZekatCalculator;
