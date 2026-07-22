import React from 'react';
import { CheckCircle, ShieldCheck, Heart, Clock, Award, Compass, DollarSign } from 'lucide-react';

export default function TrustSection() {
  const trustPoints = [
    {
      title: 'Experienced Pharmacy',
      description: 'Serving Bihar since 2015 with qualified pharmacists and rigorous prescription standards.',
      icon: Award,
    },
    {
      title: '100% Quality Medicines',
      description: 'Sourced strictly from certified medical manufacturers and registered pharma entities.',
      icon: ShieldCheck,
    },
    {
      title: 'Quick Counter Service',
      description: 'Our medicine filing is organized to keep wait times under 5 minutes for your convenience.',
      icon: Clock,
    },
    {
      title: 'Friendly Professional Staff',
      description: 'Dedicated patient-first attitude to clarify doubts and explain drug dosages.',
      icon: Heart,
    },
    {
      title: 'Reasonable Pricing',
      description: 'Honest billing practices with standard discount margins and low-cost generic substitutes.',
      icon: DollarSign,
    },
    {
      title: 'Convenient Location',
      description: 'Located right on the main Makhdumpur-Sonwan-Hulasganj Road, offering easy parking.',
      icon: Compass,
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-200" id="trust-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Visual Metrics & Headline */}
          <div className="space-y-6 lg:col-span-5">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
              Verified Reputation
            </span>
            <h2 className="font-display text-3xl font-black leading-tight text-slate-900 dark:text-white sm:text-4xl">
              Why Our Customers Place Their Complete Trust In Us
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              For over a decade, Maa Jagdamba Medical has served Bela, Makhdumpur, and surrounding regions. Our priority has always been to offer complete medicine authenticity and immediate local support.
            </p>

            {/* Quick Metrics display */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-center">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
                  Genuine Medicines
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 text-center">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">50K+</div>
                <div className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mt-1">
                  Satisfied Orders
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Checkpoints Grid */}
          <div className="lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {trustPoints.map((point, index) => {
                const IconComponent = point.icon;
                return (
                  <div 
                    key={index}
                    className="flex gap-4 rounded-2xl bg-white p-5 border border-slate-100 dark:border-slate-800/80 dark:bg-slate-900 shadow-xs hover:shadow-md transition-shadow"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white">
                        {point.title}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
