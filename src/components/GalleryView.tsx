import React, { useState } from 'react';
import { ZoomIn, X, Compass, ArrowRightLeft, Sparkles, MessageSquare } from 'lucide-react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';

export default function GalleryView() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'store' | 'medicines' | 'equipment' | 'customers'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { label: 'All Store Photos', value: 'all' },
    { label: 'Store Front', value: 'store' },
    { label: 'Medicine Shelves', value: 'medicines' },
    { label: 'Medical Equipment', value: 'equipment' },
    { label: 'Our Staff & Customers', value: 'customers' }
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors duration-200" id="gallery-page">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-12">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-950">
            Visual Tour
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Maa Jagdamba Medical Gallery
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Take a visual tour of our modern, hygienic, and fully stocked pharmacy. We store all critical medications in a clean, temperature-controlled facility.
          </p>
        </div>

        {/* Categorization Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 pb-2 border-b border-slate-100 dark:border-slate-800/80 max-w-3xl mx-auto" id="gallery-filters">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value as any)}
              className={`rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                activeFilter === tab.value
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Masonry-Style Image Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" id="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800/80 dark:bg-slate-900/40 shadow-xs hover:border-emerald-500/40 hover:shadow-md transition-all duration-300 relative"
              id={`gallery-item-${item.id}`}
            >
              {/* Image Container with Zoom Effect */}
              <div className="overflow-hidden relative h-64 w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-emerald-650 shadow-xs">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>

                {/* Small Category Tag */}
                <span className="absolute top-4 left-4 rounded-md bg-emerald-600 px-2 py-0.5 text-[9px] font-bold text-white uppercase tracking-wider shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Text Description Box */}
              <div className="p-4 bg-white dark:bg-slate-950 border-t border-slate-150 dark:border-slate-800/50">
                <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Lightbox Modal Overlay */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-55 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-xs" 
            id="lightbox-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button inside lightbox */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-slate-950/60 p-2 text-white hover:bg-slate-950/90 transition-colors"
                id="lightbox-close-btn"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Grid content split: Image Left, Details Right */}
              <div className="grid md:grid-cols-12 md:items-stretch">
                
                {/* Lightbox Image Container */}
                <div className="md:col-span-8 bg-slate-950 flex items-center justify-center min-h-[300px] md:min-h-[480px]">
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.title}
                    className="max-h-[500px] w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Lightbox Details sidebar */}
                <div className="md:col-span-4 p-6 bg-slate-900 text-white flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="rounded-md bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-emerald-500/20">
                      Maa Jagdamba {selectedImage.category}
                    </span>

                    <h3 className="font-display text-xl font-bold">
                      {selectedImage.title}
                    </h3>

                    <p className="text-xs leading-relaxed text-slate-400">
                      {selectedImage.description}
                    </p>
                  </div>

                  {/* Trust credentials footer inside lightbox */}
                  <div className="space-y-4 pt-6 border-t border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                        <Compass className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Store Quality</h4>
                        <p className="text-[11px] font-bold text-slate-200">Strict Pharmacy Protocols</p>
                      </div>
                    </div>

                    {/* Quick inquiry option inside lightbox */}
                    <a 
                      href={`https://wa.me/919934098161?text=Hello%20Maa%20Jagdamba%20Medical,%20I%20am%20inquiring%20about%20your%20products:%20${encodeURIComponent(selectedImage.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-3 text-xs font-black text-white hover:bg-emerald-500"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Ask via WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
