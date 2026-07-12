import React from 'react';
import { siteConfig } from '../siteConfig';

export default function LocationSection() {
  const { location } = siteConfig;
  const mapSrc = `https://www.google.com/maps?q=${location.mapsQuery}&output=embed`;

  return (
    <section
      id="location"
      className="relative py-24 md:py-32 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 geometric-pattern opacity-15" />
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-red-800/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center reveal">
          <span className="section-badge text-red-700 bg-red-900/15 border-red-800/25">
            Find Us
          </span>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl font-bold text-white reveal">
          Our Location
        </h2>

        <div className="gold-divider mt-6 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        {/* Content grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="glass-card overflow-hidden reveal">
            <iframe
              title="Rainham Mercy Association Location"
              src={mapSrc}
              className="w-full h-80 lg:h-full min-h-[320px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Address card */}
          <div className="glass-card p-8 flex flex-col justify-center reveal">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-800 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20 shrink-0">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-serif text-xl font-bold">
                  {location.venueName}
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-silver-400 text-sm">{location.addressLine1}</p>
                  <p className="text-silver-400 text-sm">{location.addressLine2}</p>
                  <p className="text-silver-300 text-sm font-semibold">{location.postcode}</p>
                </div>
              </div>
            </div>

            {/* Directions button */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-900/20 hover:shadow-red-800/40 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
