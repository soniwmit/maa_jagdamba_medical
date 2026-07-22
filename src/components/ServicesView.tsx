import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Pill, 
  Sparkles, 
  Baby, 
  Smile, 
  Activity, 
  Scissors, 
  LifeBuoy, 
  Bone, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

// Helper to render service-specific icons
const renderServiceIcon = (iconName: string) => {
  const css = "h-5 w-5 text-emerald-600 dark:text-emerald-400";
  switch (iconName) {
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={css} />;
    case 'Pil':
    case 'Pill':
      return <Pill className={css} />;
    case 'Sparkles':
      return <Sparkles className={css} />;
    case 'Baby':
      return <Baby className={css} />;
    case 'Smile':
      return <Smile className={css} />;
    case 'Activity':
    case 'ActivitySquare':
      return <Activity className={css} />;
    case 'Scissors':
      return <Scissors className={css} />;
    case 'LifeBuoy':
      return <LifeBuoy className={css} />;
    case 'Bone':
      return <Bone className={css} />;
    default:
      return <Pill className={css} />;
  }
};

interface ServicesViewProps {
  isFullPage?: boolean;
  openOrderForm: (prefilledService?: string) => void;
}

export default function ServicesView({ isFullPage = false, openOrderForm }: ServicesViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Gather unique categories for filter tabs (only in full-page view for clean controls)
  const categories = ['All', ...new Set(SERVICES_DATA.map(item => item.category))];

  const filteredServices = selectedCategory === 'All' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(item => item.category === selectedCategory);

  // If on home page, we only show top 6 for compact rhythm, otherwise all
  const displayedServices = isFullPage ? filteredServices : SERVICES_DATA.slice(0, 6);

  return (
    <section className={`py-16 ${isFullPage ? 'bg-slate-50 dark:bg-slate-950' : 'bg-slate-50 dark:bg-slate-950/40'} transition-colors duration-200`} id="services-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-950">
              Pharmacy Offerings
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional Pharmacy Services
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Maa Jagdamba Medical offers diverse, fully compliant healthcare services. We are fully stocked with high-grade daily formulations, surgical essentials, and baby care.
            </p>
          </div>

          {!isFullPage && (
            <div className="shrink-0">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 px-3 py-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                ⭐ 10+ Primary Services
              </span>
            </div>
          )}
        </div>

        {/* Category Filter Tabs (Only shown in full page mode) */}
        {isFullPage && (
          <div className="flex flex-wrap items-center gap-1.5 mb-10 pb-2 border-b border-slate-200/50 dark:border-slate-800/50" id="services-filters">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:border-emerald-500/40 hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900 flex flex-col justify-between transition-all duration-300 group hover:scale-[1.01]"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-4">
                {/* Card Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <span className="rounded-md bg-slate-100 border border-slate-200/60 px-2 py-0.5 text-[10px] font-bold text-slate-500 dark:bg-slate-800 dark:text-slate-400 uppercase tracking-wide">
                    {service.category}
                  </span>
                </div>

                {/* Card Details */}
                <div className="space-y-1.5">
                  <h3 className="font-sans text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-1.5 pt-3 border-t border-slate-150 dark:border-slate-800/60">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 dark:text-slate-300 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4">
                <button
                  onClick={() => openOrderForm(service.title)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-50 hover:bg-emerald-600 dark:bg-slate-950 dark:hover:bg-emerald-600 border border-slate-200/55 dark:border-slate-800 py-2.5 text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white transition-all duration-300 group/btn"
                >
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400 group-hover/btn:text-white" />
                  <span>Inquire / Order Now</span>
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
