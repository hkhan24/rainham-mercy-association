import React, { useState } from 'react';
import { siteConfig } from '../siteConfig';

export default function ContactBar() {
  const { contact } = siteConfig;
  const [qrVisible, setQrVisible] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-pattern opacity-15" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-800/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center reveal">
          <span className="section-badge text-red-700 bg-red-900/15 border-red-800/25">
            Get in Touch
          </span>
        </div>

        <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl font-bold text-white reveal">
          Contact Us
        </h2>

        <p className="mt-4 text-center text-silver-400 font-sans text-lg max-w-2xl mx-auto reveal">
          We'd love to hear from you. Reach out through any of the channels below.
        </p>

        <div className="gold-divider mt-6 reveal">
          <span className="text-red-700 text-sm">✦</span>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* WhatsApp */}
          {contact.whatsapp.raw && (
            <a
              href={`https://wa.me/44${contact.whatsapp.raw.replace(/^0/, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300 group reveal"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shadow-lg shadow-green-900/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </div>
              <p className="text-silver-300 font-sans text-sm font-medium">WhatsApp</p>
              <p className="text-white font-sans text-lg font-semibold mt-1">{contact.whatsapp.display}</p>
            </a>
          )}

          {/* Phone */}
          {contact.phone.raw && (
            <a
              href={`tel:${contact.phone.raw}`}
              className="glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300 group reveal"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 flex items-center justify-center shadow-lg shadow-navy-900/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <p className="text-silver-300 font-sans text-sm font-medium">Phone</p>
              <p className="text-white font-sans text-lg font-semibold mt-1">{contact.phone.display}</p>
            </a>
          )}

          {/* WhatsApp Group */}
          {contact.whatsappGroup && (
            <a
              href={contact.whatsappGroup}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 text-center hover:-translate-y-1 transition-all duration-300 group reveal sm:col-span-2 lg:col-span-1"
            >
              <div className="mx-auto w-14 h-14 rounded-2xl bg-gradient-to-br from-red-800 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87" />
                  <path d="M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <p className="text-silver-300 font-sans text-sm font-medium">Community Group</p>
              <p className="text-white font-sans text-base font-semibold mt-1">Join on WhatsApp</p>
            </a>
          )}
        </div>

        {/* Fallback if no contact details yet */}
        {!contact.whatsapp.raw && !contact.phone.raw && !contact.whatsappGroup && (
          <div className="mt-16 text-center reveal">
            <div className="glass-card inline-block px-10 py-8">
              <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-red-800 to-red-700 flex items-center justify-center shadow-lg shadow-red-900/20 mb-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-white font-serif text-xl font-bold">Coming Soon</h3>
              <p className="text-silver-400 font-sans text-sm mt-2 max-w-xs">
                Our contact details are being set up. Please check back soon for ways to reach us.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
