
export enum AppTab {
  DASHBOARD = 'dashboard',
  QURAN = 'quran',
  QIBLA = 'qibla',
  TASBIH = 'tasbih',
  MENU = 'menu',
  SETTINGS = 'settings',
  AMEL_DEHTERI = 'amel_defteri',
  ZEKAT = 'zekat',
  DUA_KARDESLIGI = 'dua_kardesligi',
  KAZA_TAKIBI = 'kaza_takibi',
  KUTLU_GUNLER = 'kutlu_gunler',
  HATIM_TAKIBI = 'hatim_takibi',
  CAMI_BUL = 'cami_bul'
}

export interface PrayerTimes {
  imsak: string;
  gunes: string;
  ogle: string;
  ikindi: string;
  aksam: string;
  yatsi: string;
}

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface AmelTask {
  id: string;
  label: string;
  done: boolean;
}

export interface DuaRequest {
  id: string;
  name: string;
  text: string;
  count: number;
}

export interface ReligiousDay {
  date: string;
  hicriDate: string;
  title: string;
  remainingDays: number;
}

export interface Zikir {
  id: string;
  name: string;
  arabicName?: string;
  count: number;
  target: number;
}
