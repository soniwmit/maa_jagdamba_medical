import React from 'react';
import { MapPin, FileSpreadsheet, Pill, Wallet, ArrowRight } from 'lucide-react';

export default function WorkingProcess() {
  const steps = [
    {
      step: '01',
      title: 'Visit Store',
      description: 'Walk into our clean, air-conditioned Chariyari store or initiate your request digitally on WhatsApp.',
      icon: MapPin,
      bgColor: 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400',
    },
    {
      step: '02',
      title: 'Share Prescription',
      description: 'Hand over your doctor’s slip to our certified staff, or snap a quick photo and send it online.',
      icon: FileSpreadsheet,
      bgColor: 'bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400',
    },
    {
      step: '03',
      title: 'Get Medicines',
      description: 'Our pharmacists will double-check each pack’s expiry dates and neatly bag your order.',
      icon: Pill,
      bgColor: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400',
    },
    {
      step: '04',
      title: 'Easy Payment',
      description: 'Complete your checkout rapidly using UPI (PhonePe, GPay, Paytm), card, or standard cash billing.',
      icon: Wallet,
      bgColor: 'bg-violet-50 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400',
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-200" id="working-process-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
            How We Operate
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
            Our Streamlined Working Process
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Getting your authentic healthcare items is direct, secure, and hassle-free. Follow these four straightforward phases.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="absolute top-1/2 left-4 right-4 hidden h-0.5 -translate-y-1/2 bg-dashed border-t-2 border-dashed border-slate-100 dark:border-slate-800 lg:block z-0"></div>

          <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index} 
                  className="group relative rounded-2xl border border-slate-100 bg-slate-50/30 p-6 shadow-xs hover:border-emerald-500/20 hover:bg-white hover:shadow-md dark:border-slate-800/60 dark:bg-slate-950/10 dark:hover:border-emerald-500/20 dark:hover:bg-slate-900 transition-all duration-300"
                  id={`process-step-${index}`}
                >
                  {/* Step Number Tag */}
                  <span className="absolute top-4 right-4 font-display text-3xl font-black text-slate-200 dark:text-slate-800 group-hover:text-emerald-100 dark:group-hover:text-emerald-950/40 transition-colors">
                    {step.step}
                  </span>

                  {/* Icon Wrapper */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 transition-transform duration-300 group-hover:scale-110 ${step.bgColor}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-2">
                    <h3 className="font-display text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Indicator on Right for Desktop (except last item) */}
                  {index < 3 && (
                    <div className="absolute top-1/2 -right-4 hidden -translate-y-1/2 bg-white dark:bg-slate-900 rounded-full p-1 border border-slate-100 dark:border-slate-800 shadow-xs lg:block z-20 group-hover:translate-x-1 transition-transform">
                      <ArrowRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
