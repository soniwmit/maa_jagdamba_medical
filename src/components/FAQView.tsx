import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Sparkles, MessageSquare } from 'lucide-react';
import { FAQS_DATA } from '../data';
import { FAQItem } from '../types';

interface FAQViewProps {
  isFullPage?: boolean;
}

export default function FAQView({ isFullPage = false }: FAQViewProps) {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [faqSearch, setFaqSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [filteredFaqs, setFilteredFaqs] = useState<FAQItem[]>(FAQS_DATA);

  const categories = ['All', ...new Set(FAQS_DATA.map(item => item.category))];

  useEffect(() => {
    let result = FAQS_DATA;

    if (selectedCat !== 'All') {
      result = result.filter(item => item.category === selectedCat);
    }

    if (faqSearch.trim()) {
      const query = faqSearch.toLowerCase();
      result = result.filter(
        item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
      );
    }

    setFilteredFaqs(result);
  }, [faqSearch, selectedCat]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 bg-white dark:bg-slate-900 transition-colors duration-200" id="faq-section">
      <div className="mx-auto max-w-4xl px-4">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
            Help & Guidelines
          </span>
          <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white">
            Commonly Asked Questions (FAQ)
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xl mx-auto">
            Get instant answers to core queries regarding medicine validity, custom doctor prescriptions, UPI billing, and local deliveries in Makhdumpur.
          </p>
        </div>

        {/* Search & Category Filter Header Box */}
        <div className="rounded-3xl border border-slate-100 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-950/40 space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Live Search Input */}
            <div className="relative flex-1 w-full">
              <input
                type="text"
                value={faqSearch}
                onChange={(e) => setFaqSearch(e.target.value)}
                placeholder="Search queries (e.g. insulin, prescription, timings)..."
                className="w-full rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-xs font-semibold focus:border-emerald-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
              />
              <Search className="absolute top-3 left-3.5 h-4 w-4 text-slate-400" />
            </div>

            {/* Quick Helper Badge */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold rounded-xl shrink-0">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{filteredFaqs.length} Answers Found</span>
            </div>
          </div>

          {/* Quick Filter Bubbles */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`rounded-xl px-3 py-1.5 text-[11px] font-bold tracking-wide transition-all ${
                  selectedCat === cat
                    ? 'bg-emerald-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200/40 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-3.5">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-emerald-500/30 bg-emerald-50/10 dark:border-emerald-500/20 dark:bg-emerald-950/5' 
                      : 'border-slate-100 bg-white dark:border-slate-800/80 dark:bg-slate-900'
                  }`}
                  id={`faq-item-${faq.id}`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="flex w-full items-center justify-between px-6 py-4.5 text-left transition-colors"
                  >
                    <span className="font-display text-sm font-bold text-slate-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <span className="shrink-0 rounded-full bg-slate-50 p-1.5 text-slate-400 dark:bg-slate-800 dark:text-slate-500 transition-transform">
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </span>
                  </button>

                  {/* Accordion Panel Content */}
                  {isOpen && (
                    <div className="px-6 pb-5 border-t border-slate-50 dark:border-slate-800/50 pt-3">
                      <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-400 font-bold">No results match your search query</p>
              <button 
                onClick={() => { setFaqSearch(''); setSelectedCat('All'); }}
                className="text-xs text-emerald-600 font-bold hover:underline mt-1"
              >
                Clear filters and show all FAQs
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
