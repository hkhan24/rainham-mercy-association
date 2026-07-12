import React from 'react';
import { usePrayerTimes } from '../hooks/usePrayerTimes';
import { siteConfig } from '../siteConfig';

const prayerNames = [
  { key: 'Fajr', label: 'Fajr', arabic: 'الفجر' },
  { key: 'Sunrise', label: 'Sunrise', arabic: 'الشروق' },
  { key: 'Dhuhr', label: 'Dhuhr', arabic: 'الظهر' },
  { key: 'Asr', label: 'Asr', arabic: 'العصر' },
  { key: 'Maghrib', label: 'Maghrib', arabic: 'المغرب' },
  { key: 'Isha', label: 'Isha', arabic: 'العشاء' },
];

export default function DailyPrayerTimes() {
  const { times, loading, error } = usePrayerTimes();

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="glass-card w-full max-w-sm p-6 animate-glow">
      {/* Header */}
      <div className="text-center mb-5">
        <p className="text-silver-400 font-sans text-xs tracking-[0.2em] uppercase">
          {siteConfig.dailyPrayers.city} Prayer Times
        </p>
        <p className="text-white font-serif text-lg font-semibold mt-1">{today}</p>
      </div>

      {/* Divider */}
      <div className="gold-divider mb-4">
        <span className="text-red-700 text-xs">☪</span>
      </div>

      {/* Prayer rows */}
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="w-6 h-6 border-2 border-red-700 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : error ? (
        <p className="text-red-700/70 text-center text-sm py-4">{error}</p>
      ) : (
        <div className="space-y-1">
          {prayerNames.map((prayer, idx) => (
            <div
              key={prayer.key}
              className={`flex items-center justify-between px-4 py-2.5 rounded-lg transition-colors duration-200 ${
                idx % 2 === 0 ? 'bg-white/5' : ''
              } hover:bg-white/10`}
            >
              <div className="flex items-center gap-3">
                <span className="text-silver-500 font-arabic text-sm w-10 text-right">
                  {prayer.arabic}
                </span>
                <span className="text-silver-200 font-sans text-sm font-medium">
                  {prayer.label}
                </span>
              </div>
              <span className="text-white font-sans text-sm font-semibold tracking-wide">
                {times[prayer.key]}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Footer note */}
      <p className="text-center text-silver-500/60 text-[0.65rem] mt-4 tracking-wide">
        Source: Aladhan API · Umm Al-Qura method
      </p>
    </div>
  );
}
