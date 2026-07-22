import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Heart, ShieldCheck, Mail, MapPin, X } from 'lucide-react';
import { ActivePage } from '../types';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
  activePage?: ActivePage;
}

export default function Footer({ setActivePage, activePage }: FooterProps) {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclaimer' | null>(null);

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);

    const rawCid = urlParams.get('cid');
    let cid = rawCid || localStorage.getItem('wmit_active_cid');
    if (rawCid) {
      localStorage.setItem('wmit_active_cid', rawCid);
    }

    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      if (activePage) return activePage;
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(() => {});
    };

    const sendExitPayload = () => {
      const payload = { cid: cid, session_id: sessionId, page_name: getPageName(), action: 'page_change' };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(() => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { sendExitPayload(); }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      sendExitPayload();
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activePage]);

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 dark:border-slate-800" id="main-footer">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-600 text-white font-black text-sm">
                M
              </div>
              <h3 className="font-display text-base font-black text-white">
                Maa Jagdamba Medical
              </h3>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Your trusted partner for 100% genuine medicines, surgical disposables, diabetic kits, baby food, and family personal care products. Serving Makhdumpur with integrity.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-bold">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified Local Retail Pharmacy</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button onClick={() => handleNav(ActivePage.Home)} className="hover:text-emerald-400 transition-colors">
                  Home Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => handleNav(ActivePage.About)} className="hover:text-emerald-400 transition-colors">
                  About Business Story
                </button>
              </li>
              <li>
                <button onClick={() => handleNav(ActivePage.Services)} className="hover:text-emerald-400 transition-colors">
                  Pharmacy Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav(ActivePage.Gallery)} className="hover:text-emerald-400 transition-colors">
                  Store Tour & Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleNav(ActivePage.Contact)} className="hover:text-emerald-400 transition-colors">
                  Contact Coordinates
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Featured Specialties
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Prescription Medicines</li>
              <li>General OTC Medicines</li>
              <li>Health Supplements</li>
              <li>Premium Baby Care</li>
              <li>Orthopedic Support Gear</li>
              <li>Diabetic Testing Kits</li>
              <li>Hospital Surgical Items</li>
            </ul>
          </div>

          {/* Col 4: Contact Coordinate */}
          <div className="space-y-4">
            <h4 className="font-display text-sm font-bold text-white tracking-wide uppercase">
              Store Timings & Contact
            </h4>
            <div className="space-y-3 text-xs">
              <p className="leading-relaxed">
                📍 3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Bihar 804422, India
              </p>
              <p className="text-emerald-400 font-bold">
                ⏰ Daily: 8:00 AM – 10:00 PM IST
              </p>
              
              <div className="pt-2 space-y-1.5 border-t border-slate-850">
                <a href="tel:09934098161" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Call: +91 9934098161</span>
                </a>
                <a href="https://wa.me/919934098161" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                  <span>WhatsApp: +91 9934098161</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal buttons */}
        <div className="mt-12 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="text-[11px] text-slate-500 font-medium">
            © {new Date().getFullYear()} Maa Jagdamba Medical. All rights reserved. Sourced with Clinical Integrity. |{' '}
            <a
              href="https://main.webmakerit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline font-semibold"
            >
              Developed by WMIT
            </a>
          </div>

          {/* Legal Popups triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-500">
            <button onClick={() => setModalType('privacy')} className="hover:text-slate-350 transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => setModalType('terms')} className="hover:text-slate-350 transition-colors">
              Terms & Conditions
            </button>
            <span>•</span>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-slate-350 transition-colors text-amber-500/80">
              Medical Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* DYNAMIC COMPLIANCE POPUP MODALS */}
      {modalType && (
        <div className="fixed inset-0 z-55 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-xs" id="legal-modal">
          <div className="w-full max-w-lg rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <h3 className="font-display text-sm font-black uppercase tracking-wider text-white">
                {modalType === 'privacy' && 'Privacy Policy'}
                {modalType === 'terms' && 'Terms & Conditions'}
                {modalType === 'disclaimer' && '⚠️ Important Medical Disclaimer'}
              </h3>
              <button onClick={() => setModalType(null)} className="rounded-lg p-1 hover:bg-slate-850 text-slate-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs leading-relaxed max-h-[360px] overflow-y-auto pr-1">
              {modalType === 'privacy' && (
                <>
                  <p>Maa Jagdamba Medical (&ldquo;we&rdquo;, &ldquo;our&rdquo;) prioritizes user privacy. When you utilize our customized digital WhatsApp Order Form or the Contact Inquiry forms, the values you enter (Customer Name, Mobile Number, Address, and Prescription images) are compiled solely on your client device browser.</p>
                  <p>We do not operate secondary background tracking servers, external cookies, database mirrors, or profiling algorithms. Your prescription files and details are sent directly to our official WhatsApp messaging portal securely using standard HTTPS links without third party access.</p>
                  <p>If you choose to purchase medicines physically or via WhatsApp, patient purchase records are stored in high-grade local billing registries in complete compliance with Indian Drug regulations.</p>
                </>
              )}

              {modalType === 'terms' && (
                <>
                  <p>By browsing this medical website or sending purchase coordinates on WhatsApp, you fully agree to our Terms and Conditions:</p>
                  <p>1. <strong className="text-white">Prescription Requirement:</strong> Maa Jagdamba Medical will absolutely NOT dispense Scheduled H, H1, or X drugs (including critical painkillers, specialized antibiotics, or psychotropics) without a verified prescription from a registered Medical Practitioner.</p>
                  <p>2. <strong className="text-white">Price Transparency:</strong> Prices are regulated as per the National Pharmaceutical Pricing Authority (NPPA). Final rates will be provided with an original retail invoice at the store counter.</p>
                  <p>3. <strong className="text-white">Delivery Terms:</strong> Local home delivery options are subject to staff availability and safety parameters within Bela and Makhdumpur village limits.</p>
                </>
              )}

              {modalType === 'disclaimer' && (
                <>
                  <p className="font-black text-amber-400">PLEASE READ CAREFULLY:</p>
                  <p>The informational content, medical lists, dosage descriptions, and product categories featured on this website are compiled for general educational purposes ONLY and should never be treated as professional medical advice, self-diagnosis, or a substitute for expert consulting.</p>
                  <p>Maa Jagdamba Medical strongly advises all patients to consult with a registered healthcare physician regarding any chronic symptoms, dosage adjustments, or medical treatments. Do not ignore doctor prescriptions because of materials published on this page.</p>
                  <p>We act strictly as a retail pharmaceutical outlet dispensing authentic medical supplies under state licensing standards.</p>
                </>
              )}
            </div>

            <div className="border-t border-slate-800 pt-4 mt-4 text-right">
              <button
                onClick={() => setModalType(null)}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500"
              >
                I Understand & Accept
              </button>
            </div>

          </div>
        </div>
      )}
    </footer>
  );
}
