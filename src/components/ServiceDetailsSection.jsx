import React from 'react';
import { siteConfig } from '../siteConfig';

export default function ServiceDetailsSection() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 geometric-pattern opacity-20" />

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-800/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center reveal">
          <span className="section-badge text-red-700 bg-red-900/15 border-red-800/25">
            Services
          </span>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl font-bold text-white reveal">
          Join Us in Prayer
        </h2>

        <div className="gold-divider mt-6 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">

          {/* Jummah Card */}
          <div className="glass-card p-8 hover:-translate-y-1 transition-all duration-300 reveal">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-800 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20 mb-6">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2C8 2 4 6 4 10v7a3 3 0 003 3h10a3 3 0 003-3v-7c0-4-4-8-8-8z" />
                <path d="M12 2v4M4 10h16" />
                <rect x="10" y="14" width="4" height="6" rx="1" />
              </svg>
            </div>

            <h3 className="text-white font-serif text-2xl font-bold">
              Jummah Prayer
            </h3>
            <p className="text-silver-400 font-sans text-sm mt-2 mb-6">
              {siteConfig.jummah.date}
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-silver-400 text-sm">Doors Open</span>
                <span className="text-white font-semibold">{siteConfig.jummah.startTime}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-silver-400 text-sm">Jamaat Time</span>
                <span className="text-white font-semibold text-red-700">
                  {siteConfig.jummah.jamaatTime}
                </span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-silver-400 text-sm">Led by</span>
                <span className="text-silver-200 font-medium">{siteConfig.jummah.imam}</span>
              </div>
            </div>
          </div>

          {/* Eid Card / Coming Soon */}
          <div className="glass-card p-8 hover:-translate-y-1 transition-all duration-300 reveal">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center shadow-lg shadow-navy-900/20 mb-6">
              <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>

            {siteConfig.eid ? (
              <>
                <h3 className="text-white font-serif text-2xl font-bold">Eid Prayer</h3>
                <p className="text-silver-400 font-sans text-sm mt-2 mb-6">
                  {siteConfig.eid.date}
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/5">
                    <span className="text-silver-400 text-sm">Prayer Time</span>
                    <span className="text-white font-semibold text-red-700">
                      {siteConfig.eid.time}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-white font-serif text-2xl font-bold">
                  More Services
                </h3>
                <p className="text-silver-400 font-sans text-sm mt-2 mb-6">
                  Coming Soon
                </p>
                <p className="text-silver-500 font-sans text-sm leading-relaxed">
                  As our community grows, we plan to introduce additional services including Eid prayers, educational programmes, Quran circles, and community events. Stay connected to be the first to know.
                </p>
                <div className="mt-6 flex items-center gap-2 text-red-700 text-sm font-medium">
                  <span className="w-2 h-2 bg-red-700 rounded-full animate-pulse" />
                  Watch this space
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
