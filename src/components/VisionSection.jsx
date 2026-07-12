import React from 'react';
import { siteConfig } from '../siteConfig';

const iconPaths = {
  mosque: (
    <>
      <path d="M12 2C8 2 4 6 4 10v7a3 3 0 003 3h10a3 3 0 003-3v-7c0-4-4-8-8-8z" />
      <path d="M12 2v4M4 10h16" />
      <rect x="10" y="14" width="4" height="6" rx="1" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="7" r="3" />
      <circle cx="17" cy="7" r="2.5" />
      <path d="M2 21v-2a5 5 0 0110 0v2" />
      <path d="M16 21v-2a4 4 0 00-2-3.5" />
      <path d="M17 10a4 4 0 014 4v7" />
    </>
  ),
  growth: (
    <>
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0020 0h-3" />
      <path d="M12 2a5 5 0 015 5" />
      <path d="M12 2a5 5 0 00-5 5" />
      <path d="M12 8a3 3 0 013 3" />
      <path d="M12 8a3 3 0 00-3 3" />
    </>
  ),
};

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="relative py-24 md:py-32 bg-ice-100 geometric-pattern-light"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center reveal">
          <span className="section-badge text-navy-700 bg-navy-800/8">
            Our Vision
          </span>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl font-bold text-navy-900 reveal">
          {siteConfig.vision.heading}
        </h2>

        <p className="mt-4 text-center text-navy-700/70 font-sans text-lg max-w-2xl mx-auto reveal">
          {siteConfig.vision.subtitle}
        </p>

        <div className="gold-divider mt-6 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        {/* Pillar Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {siteConfig.vision.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="glass-card-light p-8 text-center hover:-translate-y-2 hover:shadow-xl hover:shadow-navy-900/8 transition-all duration-500 reveal"
            >
              {/* Icon */}
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center shadow-lg shadow-navy-900/20 mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {iconPaths[pillar.icon]}
                </svg>
              </div>

              <h3 className="font-serif text-xl font-bold text-navy-900">
                {pillar.title}
              </h3>

              <p className="mt-4 text-navy-700/70 font-sans text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
