import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck, Clock, Award } from 'lucide-react';
import { ActivePage } from '../types';

interface HeroProps {
  openOrderForm: () => void;
  setActivePage: (page: ActivePage) => void;
}

export default function Hero({ openOrderForm, setActivePage }: HeroProps) {
  const handleGetDirections = () => {
    setActivePage(ActivePage.Contact);
    setTimeout(() => {
      const element = document.getElementById('map-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  return (
    <section className="relative overflow-hidden bg-emerald-900 rounded-3xl py-12 sm:py-16 px-6 sm:px-12 text-white shadow-xl my-6 mx-4 sm:mx-6" id="hero-section">
      {/* Decorative ambient radial background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white to-transparent"></div>
      
      {/* Actual Unsplash Image Overlay with low opacity for background texture */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Hero Left: Text Content & CTAs */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-300 border border-emerald-500/30">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Trusted Pharmacy in Bela</span>
            </div>

            <div className="space-y-3">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                Your Trusted Pharmacy for <br className="hidden sm:inline" />
                <span className="text-emerald-400">Genuine Healthcare.</span>
              </h1>
              <p className="max-w-xl text-xs sm:text-sm leading-relaxed text-emerald-100/70">
                Providing genuine prescription medicines, baby care essentials, surgical supplies, and daily health essentials at the most affordable prices since 2010.
              </p>
            </div>

            {/* CTA Actions Grid */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={openOrderForm}
                className="bg-white text-emerald-900 px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg hover:bg-emerald-50 transition-all hover:scale-[1.02]"
              >
                Order via WhatsApp
              </button>

              <button
                onClick={handleGetDirections}
                className="bg-emerald-700 text-white px-6 py-2.5 rounded-xl font-bold text-sm border border-emerald-500/30 hover:bg-emerald-600/80 transition-all"
              >
                Get Directions
              </button>
            </div>

            {/* Quick stats / Features row */}
            <div className="grid grid-cols-3 gap-4 border-t border-emerald-800/60 pt-6 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white">Genuine</h3>
                  <p className="text-[10px] text-emerald-100/50">Sourced Directly</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white">8 AM - 10 PM</h3>
                  <p className="text-[10px] text-emerald-100/50">7 Days a Week</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white">Trusted</h3>
                  <p className="text-[10px] text-emerald-100/50">Local Leader</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right: Trust Cards Stack / Promo Card Banner */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-slate-900/40 p-1 shadow-2xl backdrop-blur-md">
              {/* Main promotional card with image */}
              <div className="overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-950">
                <img
                  src="https://images.unsplash.com/photo-1631549916768-4119b2e55c26?auto=format&fit=crop&w=800&q=80"
                  alt="Maa Jagdamba Medical Interior"
                  className="h-52 w-full object-cover transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                      Chariyari, Makhdumpur
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">✨ Since 2015</span>
                  </div>

                  <h3 className="font-display text-lg font-bold">
                    Easy Prescription Upload
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Don’t wait in queues. Send us a picture of your doctor’s slip. Our pharmacists will compile the authentic medications, check expiration codes, and secure your package immediately.
                  </p>

                  <button
                    onClick={openOrderForm}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-3 text-xs font-black text-white hover:from-emerald-400 hover:to-teal-500"
                  >
                    <span>Upload Prescription & Order</span>
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Float Card: Quick Support */}
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-900 sm:flex items-center gap-3 border border-slate-100 dark:border-slate-800 max-w-[200px]">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <MessageSquare className="h-5 w-5 animate-bounce" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">Live Support</h4>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Replied in minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
