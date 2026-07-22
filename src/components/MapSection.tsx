import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation } from 'lucide-react';

interface MapSectionProps {
  openOrderForm: () => void;
}

export default function MapSection({ openOrderForm }: MapSectionProps) {
  // Coordinates for Maa Jagdamba Medical on Makhdumpur-Hulasganj road, Chariyari
  // We formulate a secure embed URL using openstreetmap or clean google maps matching coordinates.
  const mapEmbedUrl = "https://maps.google.com/maps?q=Makhdumpur%20Chariyari%20Bihar%20804422&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 transition-colors duration-200" id="map-section">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
              Store Location
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              Visit Our Physical Store in Bihar
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              We are conveniently located right on the main Makhdumpur-Sonwan-Hulasganj Road, Chariyari. Easy vehicle parking is available for medical pick-ups.
            </p>
          </div>

          <a 
            href="https://maps.google.com/?q=Maa+Jagdamba+Medical+Chariyari+Makhdumpur+Bihar"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            <Navigation className="h-4 w-4 text-emerald-600" />
            <span>Open in Google Maps App</span>
          </a>
        </div>

        {/* Map and Store Details Row */}
        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* Map Embed Column */}
          <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 dark:border-slate-800/80 dark:bg-slate-950 min-h-[380px] relative shadow-xs">
            <iframe
              title="Maa Jagdamba Medical Map Location"
              src={mapEmbedUrl}
              className="absolute inset-0 w-full h-full border-0 grayscale dark:invert"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Quick contact Details Card Column */}
          <div className="lg:col-span-4 rounded-3xl border border-slate-100 bg-slate-50/50 p-6 dark:border-slate-800 dark:bg-slate-950/40 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-display text-lg font-black text-slate-900 dark:text-white">
                Contact Details & Hours
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wide">Address</h4>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed">
                      3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Makhdumpur, Bihar 804422, India
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wide">Phone Number</h4>
                    <a href="tel:09934098161" className="text-sm font-bold text-slate-800 dark:text-emerald-400 hover:underline mt-0.5 block">
                      +91 9934098161
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wide">Working Hours</h4>
                    <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      8:00 AM – 10:00 PM (Daily)
                    </p>
                    <span className="inline-block bg-emerald-100 text-emerald-800 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-md mt-1">
                      Open Sundays
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Rating Indicator */}
            <div className="border-t border-slate-200/50 dark:border-slate-800 pt-4 mt-6">
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                ⭐ Rated 4.9 stars by local villagers and residents.
              </span>
            </div>
          </div>

        </div>

        {/* 11. CONTACT CTA Block */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white dark:from-emerald-700 dark:to-teal-850 shadow-xl shadow-emerald-600/10" id="contact-cta-panel">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-display text-2xl font-black">
                Need Prescription or Emergency Medicines?
              </h3>
              <p className="text-emerald-100 text-sm max-w-xl">
                Our certified pharmacists are ready to pack your medicines. Call us directly or place your order via WhatsApp for super fast turnaround!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              {/* Call CTA */}
              <a
                href="tel:09934098161"
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-center text-sm font-black text-slate-950 w-full sm:w-auto shadow-md hover:bg-slate-50 transition-all hover:scale-105"
              >
                <Phone className="h-4.5 w-4.5 text-emerald-600" />
                <span>Call: +91 9934098161</span>
              </a>

              {/* WhatsApp CTA */}
              <button
                onClick={openOrderForm}
                className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-center text-sm font-black text-white w-full sm:w-auto shadow-md hover:bg-slate-950 transition-all hover:scale-105"
              >
                <MessageSquare className="h-4.5 w-4.5 text-emerald-400" />
                <span>WhatsApp Order</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
