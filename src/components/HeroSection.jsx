import React from 'react';
import { siteConfig } from '../siteConfig';
import DailyPrayerTimes from './DailyPrayerTimes';

export default function HeroSection() {
  // Particles for background ambience
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 10}s`,
    duration: `${10 + Math.random() * 8}s`,
    size: `${3 + Math.random() * 4}px`,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Geometric overlay */}
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      {/* Decorative radial glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-800/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-600/15 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-800/5 rounded-full animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-silver-500/5 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse' }} />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            '--delay': p.delay,
            '--duration': p.duration,
          }}
        />
      ))}

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">

          {/* Left content — 3 cols */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Established badge */}
            <div className="animate-fade-in">
              <span className="section-badge text-red-700 bg-red-900/20 border-red-800/30">
                ✦ Established June {siteConfig.established} ✦
              </span>
            </div>

            {/* Arabic Bismillah */}
            <p className="mt-8 text-silver-400 font-arabic text-2xl md:text-3xl animate-slide-up opacity-0 leading-relaxed">
              بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
            </p>

            {/* Main heading with Rahma highlight */}
            <h1 className="mt-6 animate-slide-up-delay-1 opacity-0">
              <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                <span className="text-red-700">Ra</span><span className="text-white">in</span><span className="text-red-700">h</span><span className="text-white">am</span>
              </span>
              <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-2">
                <span className="text-red-700">M</span><span className="text-white">ercy</span>
              </span>
              <span className="block font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mt-2">
                <span className="text-red-700">A</span><span className="text-white">ssociation</span>
              </span>
              <span className="block mt-4 text-silver-400 font-sans text-lg sm:text-xl md:text-2xl font-medium tracking-[0.15em]">
                ( <span className="text-red-700 font-semibold">Ra</span><span className="text-red-700 font-semibold">h</span><span className="text-red-700 font-semibold">m</span><span className="text-red-700 font-semibold">a</span> )
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-silver-300 font-sans text-lg md:text-xl max-w-xl mx-auto lg:mx-0 animate-slide-up-delay-2 opacity-0">
              {siteConfig.tagline}
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up-delay-3 opacity-0">
              <a
                href="#services"
                className="px-8 py-3.5 bg-gradient-to-r from-red-800 to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-900/30 hover:shadow-red-800/50 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
              >
                Prayer Times
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 border border-silver-500/30 text-silver-300 font-semibold rounded-xl hover:bg-white/5 hover:border-silver-400/50 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right — Prayer Times card — 2 cols */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <DailyPrayerTimes />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-ice-100 to-transparent" />
    </section>
  );
}
