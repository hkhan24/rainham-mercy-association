import React from 'react';
import { siteConfig } from '../siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-950 py-16 overflow-hidden">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Closing message */}
        <p className="text-silver-400 font-sans text-lg font-medium">
          {siteConfig.footer.closingMessage}
        </p>

        {/* Quranic verse */}
        <div className="mt-10 space-y-4">
          <p className="text-silver-500/70 font-arabic text-2xl md:text-3xl leading-relaxed" dir="rtl">
            {siteConfig.footer.verse.arabic}
          </p>
          <p className="text-silver-500 font-serif text-sm italic max-w-lg mx-auto">
            "{siteConfig.footer.verse.translation}"
          </p>
          <p className="text-red-700/70 font-sans text-xs tracking-widest uppercase">
            — {siteConfig.footer.verse.reference}
          </p>
        </div>

        {/* Divider */}
        <div className="gold-divider mt-10">
          <span className="text-red-700/50 text-xs">✦</span>
        </div>

        {/* Copyright */}
        <p className="mt-6 text-silver-600 font-sans text-xs tracking-wide">
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
