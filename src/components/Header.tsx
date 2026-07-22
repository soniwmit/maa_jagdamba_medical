import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Phone, 
  MessageSquare, 
  Sun, 
  Moon, 
  Heart, 
  Activity, 
  ShieldCheck, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { ActivePage } from '../types';
import { CATEGORIES_DATA, SERVICES_DATA } from '../data';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  openOrderForm: (prefilledMedicine?: string) => void;
}

export default function Header({ activePage, setActivePage, openOrderForm }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<{ name: string; type: string }[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Load and apply dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  // Close search suggestions on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update suggestions based on query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const suggestions: { name: string; type: string }[] = [];

    // Search in categories
    CATEGORIES_DATA.forEach(cat => {
      if (cat.name.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query)) {
        suggestions.push({ name: cat.name, type: 'Category' });
      }
    });

    // Search in services
    SERVICES_DATA.forEach(srv => {
      if (srv.title.toLowerCase().includes(query) || srv.description.toLowerCase().includes(query)) {
        suggestions.push({ name: srv.title, type: 'Service' });
      }
    });

    // Add common generic medicine suggestions
    const commonMedicines = [
      'Paracetamol 650mg Tablets',
      'Amoxicillin 500mg Capsules',
      'Metformin 500mg (Diabetic Care)',
      'Pantoprazole 40mg Antacid',
      'Cetirizine 10mg Allergy Tablets',
      'Cough Relief Herbal Syrup',
      'Vitamin C 500mg Chewable',
      'Zincovit Multivitamin Tablets',
      'B-Complex B12 Capsules',
      'Omee D Capsule',
      'Telmisartan 40mg BP Tablets',
      'Glucometer Test Strips',
      'Crepe Bandage',
      'Baby Diapers Premium',
      'Antiseptic Dettol Liquid',
      'Moisturizing Skin Lotion'
    ];

    commonMedicines.forEach(med => {
      if (med.toLowerCase().includes(query)) {
        suggestions.push({ name: med, type: 'Medicine' });
      }
    });

    setSearchSuggestions(suggestions.slice(0, 6));
  }, [searchQuery]);

  const handleSuggestionClick = (name: string) => {
    setSearchQuery(name);
    setIsSearchFocused(false);
    openOrderForm(name); // Directly trigger the WhatsApp Order Form with prefilled medicine name!
  };

  const navItems = [
    { label: 'Home', value: ActivePage.Home },
    { label: 'About Us', value: ActivePage.About },
    { label: 'Services', value: ActivePage.Services },
    { label: 'Gallery', value: ActivePage.Gallery },
    { label: 'Contact', value: ActivePage.Contact },
  ];

  const handleNavClick = (value: ActivePage) => {
    setActivePage(value);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-xs backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/95 transition-all duration-200" id="main-header">
      {/* Top Banner (Emergency Contact and Location info) */}
      <div className="bg-emerald-600 px-4 py-1.5 text-xs text-white dark:bg-emerald-700 transition-colors">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <Activity className="h-3.5 w-3.5 animate-pulse text-emerald-100" />
              Emergency Support: <a href="tel:09934098161" className="hover:underline font-bold">+91 9934098161</a>
            </span>
            <span className="hidden h-3 w-px bg-emerald-400 md:inline"></span>
            <span className="hidden items-center gap-1 md:flex text-emerald-100">
              📍 Bela, Chariyari, Makhdumpur, Bihar 804422
            </span>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-4">
            <span className="font-medium text-emerald-500 bg-white dark:bg-slate-800 dark:text-emerald-400 px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wide">
              🟢 Store Open: 8:00 AM - 10:00 PM
            </span>
            <button 
              onClick={() => handleNavClick(ActivePage.Contact)}
              className="text-white hover:text-emerald-100 underline transition-all flex items-center gap-0.5"
            >
              Get Directions <ExternalLink className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6">
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick(ActivePage.Home)} id="logo-brand">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white font-bold text-xl shadow-sm shadow-emerald-200 dark:shadow-none">
            +
          </div>
          <div>
            <h1 className="font-sans text-base font-bold leading-none tracking-tight text-slate-900 dark:text-white sm:text-lg">
              Maa Jagdamba Medical
            </h1>
            <p className="text-[10px] font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mt-0.5 leading-none">
              Health First
            </p>
          </div>
        </div>

        {/* Global Medicine Search Utility */}
        <div className="relative hidden max-w-xs flex-1 px-4 lg:block" ref={searchRef} id="search-box-container">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              placeholder="Search genuine medicines..."
              className="w-full rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-emerald-500 dark:focus:bg-slate-900"
            />
            <Search className="absolute top-2.5 left-3.5 h-3.5 w-3.5 text-slate-400" />
            
            {/* Live Search Suggestions Dropdown */}
            {isSearchFocused && (searchQuery.trim() || searchSuggestions.length > 0) && (
              <div className="absolute top-full right-0 left-0 mt-1.5 max-h-80 overflow-y-auto rounded-xl border border-slate-100 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
                <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex justify-between items-center">
                  <span>Medicine Suggestions</span>
                  <Sparkles className="h-3 w-3 text-emerald-500" />
                </div>
                {searchSuggestions.length > 0 ? (
                  <div className="space-y-0.5 mt-1">
                    {searchSuggestions.map((item, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(item.name)}
                        className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-xs text-slate-700 hover:bg-emerald-50/50 dark:text-slate-300 dark:hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="font-medium truncate">{item.name}</span>
                        <span className="ml-2 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 whitespace-nowrap">
                          {item.type}
                        </span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400 dark:text-slate-500">
                    <p className="font-medium">Type to search medicines</p>
                    <p className="text-[10px] mt-0.5">Click to order via WhatsApp form</p>
                  </div>
                )}
                {searchQuery.trim() && (
                  <div className="border-t border-slate-100 dark:border-slate-800 mt-2 pt-1.5 px-2">
                    <button
                      onClick={() => handleSuggestionClick(searchQuery)}
                      className="flex w-full items-center justify-between text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Order &quot;{searchQuery}&quot; via WhatsApp</span>
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" id="desktop-nav">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => handleNavClick(item.value)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold tracking-wide transition-all ${
                activePage === item.value
                  ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-all"
            id="theme-toggle-btn"
          >
            {isDarkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Quick Call Action (Click To Call) */}
          <a
            href="tel:09934098161"
            className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:bg-slate-800/80 sm:flex transition-all"
            id="header-call-btn"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Order Action */}
          <button
            onClick={() => openOrderForm()}
            className="hidden items-center gap-1.5 rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 sm:flex transition-all hover:scale-105"
            id="header-whatsapp-order-btn"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            <span>WhatsApp Order</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800 md:hidden transition-all"
            id="mobile-menu-toggle-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (Only visible under Large/Medium screens) */}
      <div className="px-4 pb-3 lg:hidden" ref={searchRef} id="mobile-search-bar">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            placeholder="Search general & prescription medicines..."
            className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-xs font-medium text-slate-800 placeholder-slate-400 focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 dark:placeholder-slate-500 dark:focus:border-emerald-500 dark:focus:bg-slate-900"
          />
          <Search className="absolute top-2.5 left-3.5 h-3.5 w-3.5 text-slate-400" />
          
          {/* Mobile search suggestions dropdown */}
          {isSearchFocused && (searchQuery.trim() || searchSuggestions.length > 0) && (
            <div className="absolute top-full right-0 left-0 mt-1.5 max-h-72 overflow-y-auto rounded-xl border border-slate-100 bg-white p-2 shadow-xl dark:border-slate-800 dark:bg-slate-900 z-50">
              <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex justify-between items-center">
                <span>Medicine Suggestions</span>
                <Sparkles className="h-3 w-3 text-emerald-500" />
              </div>
              {searchSuggestions.length > 0 ? (
                <div className="space-y-0.5 mt-1">
                  {searchSuggestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(item.name)}
                      className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-xs text-slate-700 hover:bg-emerald-50/50 dark:text-slate-300 dark:hover:bg-slate-800/50 transition-colors"
                    >
                      <span className="font-medium truncate">{item.name}</span>
                      <span className="ml-2 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 whitespace-nowrap">
                        {item.type}
                      </span>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-slate-400 dark:text-slate-500">
                  <p className="font-medium">Type to search medicines</p>
                  <p className="text-[10px] mt-0.5">Click suggestions to open order sheet</p>
                </div>
              )}
              {searchQuery.trim() && (
                <div className="border-t border-slate-100 dark:border-slate-800 mt-2 pt-1.5 px-2">
                  <button
                    onClick={() => handleSuggestionClick(searchQuery)}
                    className="flex w-full items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    <span>Order &quot;{searchQuery}&quot; via WhatsApp</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[110px] sm:top-[90px] z-40 bg-slate-900/60 backdrop-blur-xs md:hidden" id="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="absolute right-0 left-0 bg-white px-4 py-5 shadow-xl dark:bg-slate-900 transition-all duration-300 max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => handleNavClick(item.value)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    activePage === item.value
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400'
                      : 'text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </button>
              ))}
            </div>

            {/* Mobile Actions Drawer Bottom */}
            <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800 space-y-2.5">
              <a
                href="tel:09934098161"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-3 text-center text-sm font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Call Store Now</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openOrderForm();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center text-sm font-bold text-white shadow-md shadow-emerald-600/10 hover:bg-emerald-500"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Order via WhatsApp Form</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
