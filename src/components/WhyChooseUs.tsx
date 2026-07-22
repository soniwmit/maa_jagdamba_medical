import React from 'react';
import { 
  ShieldCheck, 
  Users, 
  BadgePercent, 
  Zap, 
  ClipboardList, 
  Layers, 
  Heart, 
  MessageSquare 
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data';

// Helper to render lucide icons dynamically
const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck':
      return <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'Users':
      return <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'BadgePercent':
      return <BadgePercent className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'Zap':
      return <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'ClipboardList':
      return <ClipboardList className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'Layers':
      return <Layers className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'Heart':
      return <Heart className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    case 'MessageSquareShare':
      return <MessageSquare className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
    default:
      return <ShieldCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />;
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-200" id="why-choose-us-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-950">
            Our Care Values
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Maa Jagdamba Medical?
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            We operate with the highest professional pharmacy standards in Bihar. Discover how we support your family’s wellness.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US_DATA.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs hover:border-emerald-500/40 hover:shadow-sm transition-all duration-300 group"
              id={`why-card-${card.id}`}
            >
              {/* Card Icon Container */}
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/40 group-hover:bg-emerald-600 transition-all duration-300 mb-4">
                <div className="group-hover:scale-105 transition-transform duration-300 flex items-center justify-center group-hover:text-white [&_svg]:group-hover:text-white">
                  {renderIcon(card.icon)}
                </div>
              </div>

              {/* Card Title & Text */}
              <h3 className="font-sans text-sm font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {card.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[11px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
