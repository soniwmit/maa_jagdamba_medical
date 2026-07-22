import React, { useState } from 'react';
import { ActivePage } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesView from './components/ServicesView';
import CategoriesView from './components/CategoriesView';
import TrustSection from './components/TrustSection';
import WorkingProcess from './components/WorkingProcess';
import TestimonialsView from './components/TestimonialsView';
import FAQView from './components/FAQView';
import MapSection from './components/MapSection';
import AboutView from './components/AboutView';
import GalleryView from './components/GalleryView';
import ContactView from './components/ContactView';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import Footer from './components/Footer';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>(ActivePage.Home);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  // Opens the WhatsApp order sheet, optional with prefilled medicine name
  const openOrderForm = (medicine = '') => {
    setPrefilledMedicine(medicine);
    setIsOrderFormOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. STICKY HEADER MODULE */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openOrderForm={openOrderForm} 
      />

      {/* Main Core Layout Router */}
      <main className="flex-1">
        {activePage === ActivePage.Home && (
          <div className="animate-fade-in">
            {/* 2. HERO SECTION */}
            <Hero openOrderForm={() => openOrderForm()} setActivePage={setActivePage} />
            
            {/* 3. WHY CHOOSE US */}
            <WhyChooseUs />
            
            {/* 4. OUR SERVICES (Compact Home list) */}
            <ServicesView openOrderForm={openOrderForm} />
            
            {/* 5. FEATURED CATEGORIES */}
            <CategoriesView openOrderForm={openOrderForm} />
            
            {/* 6. WHY CUSTOMERS TRUST US */}
            <TrustSection />
            
            {/* 7. WORKING PROCESS */}
            <WorkingProcess />
            
            {/* 8. TESTIMONIALS & REVIEWS */}
            <TestimonialsView />
            
            {/* 9. FAQ ACCORDION SECTION */}
            <FAQView />
            
            {/* 10. GOOGLE MAPS & CONTACT CTA */}
            <MapSection openOrderForm={() => openOrderForm()} />
          </div>
        )}

        {/* 11. DEDICATED ABOUT PAGE */}
        {activePage === ActivePage.About && (
          <div className="animate-fade-in">
            {/* Breadcrumb block */}
            <div className="bg-slate-100 dark:bg-slate-900/60 py-4 px-4 border-b border-slate-200/40 dark:border-slate-800">
              <div className="max-w-7xl mx-auto text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <button onClick={() => setActivePage(ActivePage.Home)} className="hover:text-emerald-600">Home</button>
                <span>/</span>
                <span className="text-slate-600 dark:text-slate-300">About Us</span>
              </div>
            </div>
            <AboutView />
          </div>
        )}

        {/* 12. DEDICATED SERVICES PAGE */}
        {activePage === ActivePage.Services && (
          <div className="animate-fade-in">
            <div className="bg-slate-100 dark:bg-slate-900/60 py-4 px-4 border-b border-slate-200/40 dark:border-slate-800">
              <div className="max-w-7xl mx-auto text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <button onClick={() => setActivePage(ActivePage.Home)} className="hover:text-emerald-600">Home</button>
                <span>/</span>
                <span className="text-slate-600 dark:text-slate-300">Services</span>
              </div>
            </div>
            <ServicesView isFullPage={true} openOrderForm={openOrderForm} />
          </div>
        )}

        {/* 13. DEDICATED GALLERY PAGE */}
        {activePage === ActivePage.Gallery && (
          <div className="animate-fade-in">
            <div className="bg-slate-100 dark:bg-slate-900/60 py-4 px-4 border-b border-slate-200/40 dark:border-slate-800">
              <div className="max-w-7xl mx-auto text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <button onClick={() => setActivePage(ActivePage.Home)} className="hover:text-emerald-600">Home</button>
                <span>/</span>
                <span className="text-slate-600 dark:text-slate-300">Store Gallery</span>
              </div>
            </div>
            <GalleryView />
          </div>
        )}

        {/* 14. DEDICATED CONTACT PAGE */}
        {activePage === ActivePage.Contact && (
          <div className="animate-fade-in">
            <div className="bg-slate-100 dark:bg-slate-900/60 py-4 px-4 border-b border-slate-200/40 dark:border-slate-800">
              <div className="max-w-7xl mx-auto text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <button onClick={() => setActivePage(ActivePage.Home)} className="hover:text-emerald-600">Home</button>
                <span>/</span>
                <span className="text-slate-600 dark:text-slate-300">Contact Us</span>
              </div>
            </div>
            <ContactView />
            <MapSection openOrderForm={() => openOrderForm()} />
          </div>
        )}
      </main>

      {/* 15. WHATSAPP FLOATING FLOATS & MODALS FORM */}
      <WhatsAppOrderForm 
        isOpen={isOrderFormOpen} 
        onClose={() => setIsOrderFormOpen(false)} 
        prefilledMedicine={prefilledMedicine}
      />

      {/* 16. DETAILED FOOTER MODULE */}
      <Footer setActivePage={setActivePage} activePage={activePage} />

    </div>
  );
}
