import React from 'react';
import { siteConfig } from '../siteConfig';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-ice-100 geometric-pattern-light"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section badge */}
        <div className="text-center reveal">
          <span className="section-badge text-navy-700 bg-navy-800/8">
            Our Story
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl font-bold text-navy-900 reveal">
          {siteConfig.about.heading}
        </h2>

        {/* Decorative divider */}
        <div className="gold-divider mt-6 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        {/* Paragraphs */}
        <div className="mt-10 space-y-6">
          {siteConfig.about.paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-navy-700/80 font-sans text-base md:text-lg leading-relaxed text-center reveal"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Established stamp */}
        <div className="mt-12 text-center reveal">
          <span className="inline-block px-6 py-3 border border-red-800/20 rounded-full text-red-800 font-sans text-sm font-medium tracking-wide">
            Est. June {siteConfig.established} · Rainham, Kent
          </span>
        </div>
      </div>
    </section>
  );
}
