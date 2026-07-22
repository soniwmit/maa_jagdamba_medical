import React from 'react';
import { 
  Tablet, 
  Pill, 
  Droplets, 
  Syringe, 
  Activity, 
  Dumbbell, 
  Sparkles, 
  HeartHandshake, 
  Baby, 
  HandPlatter, 
  Bone, 
  Layers,
  ChevronRight
} from 'lucide-react';
import { CATEGORIES_DATA } from '../data';

// Helper to render category-specific lucide icons
const renderCategoryIcon = (iconName: string) => {
  const css = "h-5 w-5 text-emerald-600 dark:text-emerald-400";
  switch (iconName) {
    case 'Tablet':
      return <Tablet className={css} />;
    case 'Pill':
      return <Pill className={css} />;
    case 'Droplets':
      return <Droplets className={css} />;
    case 'Syringe':
      return <Syringe className={css} />;
    case 'Activity':
      return <Activity className={css} />;
    case 'Dumbbell':
      return <Dumbbell className={css} />;
    case 'Sparkles':
      return <Sparkles className={css} />;
    case 'HeartHandshake':
      return <HeartHandshake className={css} />;
    case 'Baby':
      return <Baby className={css} />;
    case 'HandPlatter':
      return <HandPlatter className={css} />;
    case 'Bone':
      return <Bone className={css} />;
    case 'Layers':
      return <Layers className={css} />;
    default:
      return <Pill className={css} />;
  }
};

interface CategoriesViewProps {
  openOrderForm: (prefilledCategory?: string) => void;
}

export default function CategoriesView({ openOrderForm }: CategoriesViewProps) {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-200" id="categories-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-950">
              Product Categories
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Browse Featured Healthcare Categories
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
              Find exactly what you need. We maintain extensive inventories of specialized formulations, hygiene supplies, surgical accessories, and chronic management tablets.
            </p>
          </div>
          <div className="shrink-0">
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-bold bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800/80 uppercase tracking-wider">
              ⚡ Over 1,200+ Stock Keeping Units
            </span>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES_DATA.map((cat) => (
            <div
              key={cat.id}
              onClick={() => openOrderForm(`Medical Products: ${cat.name}`)}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:border-emerald-500/40 hover:shadow-sm dark:border-slate-800/80 dark:bg-slate-900/40 transition-all duration-300 flex flex-col justify-between"
              id={`category-card-${cat.id}`}
            >
              <div className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40">
                    {renderCategoryIcon(cat.icon)}
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-100/55 dark:border-emerald-900/40">
                    {cat.count}
                  </span>
                </div>

                {/* Category Description */}
                <div className="space-y-1">
                  <h3 className="font-sans text-sm font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Inquiry Action Link */}
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/40 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                <span>Ask via WhatsApp</span>
                <ChevronRight className="h-3 w-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
