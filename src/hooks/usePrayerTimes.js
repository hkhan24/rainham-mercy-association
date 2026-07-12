import { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';

/**
 * Fetches today's prayer times from the Aladhan API.
 * Returns { times, loading, error }.
 *
 * `times` is an object like:
 *   { Fajr: '04:12', Sunrise: '05:30', Dhuhr: '12:58', Asr: '16:45', Maghrib: '20:15', Isha: '21:50' }
 */
export function usePrayerTimes() {
  const [times, setTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const { city, country, method } = siteConfig.dailyPrayers;
    let url = `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=${method}`;
    if (method === 15) {
      url += '&shafaq=general';
    }

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`API responded with ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const t = json.data.timings;
        setTimes({
          Fajr: t.Fajr,
          Sunrise: t.Sunrise,
          Dhuhr: t.Dhuhr,
          Asr: t.Asr,
          Maghrib: t.Maghrib,
          Isha: t.Isha,
          methodName: json.data.meta?.method?.name || 'Moonsighting Committee Worldwide',
        });
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { times, loading, error };
}
