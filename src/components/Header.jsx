import React, { useState, useEffect } from 'react';
import { siteConfig } from '../siteConfig';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Vision', href: '#vision' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        id="header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-navy-950/95 backdrop-blur-xl shadow-lg shadow-navy-950/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-800 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:shadow-red-800/50 transition-shadow duration-300">
              <span className="text-white font-serif text-lg font-bold">ر</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-serif text-lg font-semibold tracking-wide leading-tight">
                {siteConfig.shortName}
              </span>
              <span className="text-silver-400 text-[0.6rem] tracking-[0.2em] uppercase font-sans">
                Rahma
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-silver-300 text-sm font-medium tracking-wide hover:text-white transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-700 to-red-800 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-60"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-backdrop fixed inset-0 z-40 bg-navy-950/60 backdrop-blur-sm ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`mobile-menu-panel fixed top-0 right-0 z-50 h-full w-72 bg-navy-900/98 backdrop-blur-xl border-l border-navy-700/30 shadow-2xl ${menuOpen ? 'open' : ''}`}
      >
        <div className="flex flex-col pt-24 px-8 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-silver-300 text-lg font-medium tracking-wide hover:text-white hover:pl-2 transition-all duration-300 border-b border-navy-700/20"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
