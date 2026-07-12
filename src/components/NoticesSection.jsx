import React from 'react';
import { siteConfig } from '../siteConfig';

const iconPaths = {
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 17V7h4a3 3 0 010 6H9" />
    </>
  ),
  wudhu: (
    <>
      <path d="M12 2v6" />
      <path d="M8 4c0 3 4 6 4 6s4-3 4-6" />
      <path d="M6 12c0 5 6 10 6 10s6-5 6-10" />
    </>
  ),
};

export default function NoticesSection() {
  if (!siteConfig.notices?.length) return null;

  return (
    <section className="relative py-20 bg-ice-100 geometric-pattern-light">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center reveal">
          <span className="section-badge text-navy-700 bg-navy-800/8">
            Notices
          </span>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-4xl font-bold text-navy-900 reveal">
          Important Information
        </h2>

        <div className="gold-divider mt-6 mb-12 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        <div className="space-y-6">
          {siteConfig.notices.map((notice) => (
            <div
              key={notice.id}
              className="glass-card-light p-6 md:p-8 flex gap-5 items-start hover:-translate-y-0.5 transition-all duration-300 reveal"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center shadow-lg shadow-navy-900/15 shrink-0">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  {iconPaths[notice.icon]}
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-navy-900">
                  {notice.title}
                </h3>
                <p className="mt-2 text-navy-700/70 font-sans text-sm leading-relaxed">
                  {notice.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
