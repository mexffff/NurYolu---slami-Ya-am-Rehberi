
import { Surah, ReligiousDay } from './types';

export const PRAYER_NAMES: Record<string, string> = {
  imsak: 'İmsak',
  gunes: 'Güneş',
  ogle: 'Öğle',
  ikindi: 'İkindi',
  aksam: 'Akşam',
  yatsi: 'Yatsı'
};

export const SURAHS: Surah[] = [
  { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', revelationType: 'Meccan', numberOfAyahs: 7 },
  { number: 2, name: 'البقرة', englishName: 'Al-Baqara', revelationType: 'Medinan', numberOfAyahs: 286 },
  { number: 3, name: 'آل عمران', englishName: 'Aal-Imran', revelationType: 'Medinan', numberOfAyahs: 200 },
  { number: 4, name: 'النساء', englishName: 'An-Nisa', revelationType: 'Medinan', numberOfAyahs: 176 },
  { number: 36, name: 'يس', englishName: 'Ya-Seen', revelationType: 'Meccan', numberOfAyahs: 83 },
  { number: 67, name: 'الملك', englishName: 'Al-Mulk', revelationType: 'Meccan', numberOfAyahs: 30 },
  { number: 112, name: 'الإخلاص', englishName: 'Al-Ikhlas', revelationType: 'Meccan', numberOfAyahs: 4 },
  { number: 113, name: 'الفلق', englishName: 'Al-Falaq', revelationType: 'Meccan', numberOfAyahs: 5 },
  { number: 114, name: 'الناس', englishName: 'An-Nas', revelationType: 'Meccan', numberOfAyahs: 6 },
];

export const ESMAUL_HUSNA = [
  { name: 'Allah', meaning: 'Her şeyin hakiki sahibi, eşi benzeri olmayan.' },
  { name: 'Er-Rahman', meaning: 'Dünyada bütün mahlükata merhamet eden.' },
  { name: 'Er-Rahim', meaning: 'Ahirette müminlere şefkat eden.' },
  { name: 'El-Melik', meaning: 'Bütün kainatın mutlak sahibi ve hükümdarı.' },
  { name: 'El-Kuddüs', meaning: 'Hata, kusur ve her türlü noksanlıktan uzak.' },
  { name: 'Es-Selam', meaning: 'Kullarını selamete çıkaran.' },
  { name: 'El-Mümin', meaning: 'Gönüllerde iman ışığı uyandıran.' },
  { name: 'El-Müheymin', meaning: 'Gözeten ve koruyan.' },
];

export const RELIGIOUS_DAYS: ReligiousDay[] = [
  { date: '13 Ocak 2025', hicriDate: '13 Receb 1446', title: 'Regaib Kandili', remainingDays: 22 },
  { date: '06 Şubat 2025', hicriDate: '27 Receb 1446', title: 'Miraç Kandili', remainingDays: 46 },
  { date: '24 Şubat 2025', hicriDate: '15 Şaban 1446', title: 'Berat Kandili', remainingDays: 64 },
  { date: '01 Mart 2025', hicriDate: '1 Ramazan 1446', title: 'Ramazan Başlangıcı', remainingDays: 69 },
  { date: '26 Mart 2025', hicriDate: '27 Ramazan 1446', title: 'Kadir Gecesi', remainingDays: 94 },
  { date: '30 Mart 2025', hicriDate: '1 Şevval 1446', title: 'Ramazan Bayramı 1. Gün', remainingDays: 98 },
];
