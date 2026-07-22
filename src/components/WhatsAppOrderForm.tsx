import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Phone, 
  ArrowUp, 
  X, 
  Upload, 
  FileText, 
  Check, 
  Clock, 
  MapPin, 
  ClipboardCheck,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { WhatsAppFormData } from '../types';

interface WhatsAppOrderFormProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export default function WhatsAppOrderForm({ isOpen, onClose, prefilledMedicine = '' }: WhatsAppOrderFormProps) {
  // Floating triggers states
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState('No');
  const [message, setMessage] = useState('');
  const [preferredDelivery, setPreferredDelivery] = useState('As soon as possible');
  
  // File upload simulation states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update medicine name if prefilled changes
  useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Drag & Drop event handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setSelectedFile(e.dataTransfer.files[0]);
      setHasPrescription('Yes');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
      setHasPrescription('Yes');
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setHasPrescription('No');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Build formatting and open WhatsApp
  const handleSendOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Exact schema mapping requested by user
    const formattedText = `Hello Maa Jagdamba Medical

Customer Name:
${customerName}

Phone:
${mobileNumber}

Medicine Required:
${medicineName}

Address:
${address}

Prescription:
${hasPrescription}${selectedFile ? ` (${selectedFile.name})` : ''}

Message:
${message || 'No additional message.'}

Preferred Delivery Time:
${preferredDelivery}

Email:
${email || 'Not provided'}`;

    const whatsappUrl = `https://wa.me/919934098161?text=${encodeURIComponent(formattedText)}`;
    window.open(whatsappUrl, '_blank', 'noreferrer');
    
    // Reset and close
    onClose();
  };

  return (
    <>
      {/* FLOATING ACTION WIDGETS CORNER */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" id="floating-actions-bar">
        
        {/* Back To Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 dark:bg-white dark:text-slate-900 transition-all hover:scale-110"
            id="back-to-top-floating"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href="tel:09934098161"
          title="Call Medical Store"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl hover:bg-blue-500 transition-all hover:scale-110 relative group"
          id="call-floating-btn"
        >
          <Phone className="h-5.5 w-5.5" />
          <span className="absolute right-14 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Call Store Now
          </span>
        </a>

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => onClose() /* toggles or simply forces modal open */}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-2xl hover:bg-emerald-500 transition-all hover:scale-110 relative group"
          id="whatsapp-floating-btn"
        >
          <MessageSquare className="h-6.5 w-6.5 animate-pulse" />
          <span className="absolute right-16 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Order via WhatsApp
          </span>
          {/* Unread dot indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-black text-white">
            1
          </span>
        </button>

      </div>

      {/* DYNAMIC MODAL DRAWER ORDER FORM */}
      {isOpen && (
        <div className="fixed inset-0 z-55 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-xs" id="whatsapp-order-modal">
          <div 
            className="w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all max-h-[92vh] overflow-y-auto"
            id="order-form-card"
          >
            {/* Modal Title & Close */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <MessageSquare className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-black text-slate-900 dark:text-white">
                    WhatsApp Order Form
                  </h3>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">
                    Maa Jagdamba Medical
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Introductory instructions card */}
            <div className="bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-500/10 p-4 rounded-2xl flex gap-3 mt-4 mb-5">
              <ClipboardCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-800 dark:text-emerald-400">How WhatsApp Ordering Works</h4>
                <p className="text-[10px] text-slate-500 leading-relaxed mt-0.5">
                  Fill out the template below. When you click <strong className="font-black">Send via WhatsApp</strong>, we’ll build a formatted copy of your details and open WhatsApp immediately so you can finalize and dispatch it to us in one click!
                </p>
              </div>
            </div>

            {/* Order Form Body */}
            <form onSubmit={handleSendOrder} className="space-y-4">
              
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Name */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Mobile */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="e.g. 09934098161"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>
              </div>

              {/* Email & Delivery Preference */}
              <div className="grid gap-4 sm:grid-cols-2">
                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. rkumar@gmail.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  />
                </div>

                {/* Preferred Delivery Time */}
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Preferred Delivery Time
                  </label>
                  <select
                    value={preferredDelivery}
                    onChange={(e) => setPreferredDelivery(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                  >
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4:00 PM - 10:00 PM)">Evening (4 PM - 10 PM)</option>
                  </select>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Local Delivery Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. Bela, Makhdumpur, Chariyari"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Medicine Name required */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Medicine Name(s) & Quantities <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  placeholder="e.g. Paracetamol 650mg (2 strips), Syrup Cough Relief (1 bottle)"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                ></textarea>
              </div>

              {/* Prescription Upload Module (Drag and Drop simulation + Click) */}
              <div className="space-y-1.5" id="prescription-upload-box">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  Upload Doctor Prescription Paper (PDF, JPG, PNG)
                </label>
                
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*,.pdf"
                  className="hidden"
                />

                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={triggerFileSelect}
                  className={`border-2 border-dashed rounded-2xl p-4 text-center cursor-pointer transition-all ${
                    isDragOver 
                      ? 'border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/20' 
                      : 'border-slate-200 bg-slate-50 hover:bg-slate-100/50 dark:border-slate-800 dark:bg-slate-950/40'
                  }`}
                >
                  {selectedFile ? (
                    <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-150 dark:border-slate-800 text-left">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                          <FileText className="h-4.5 w-4.5" />
                        </div>
                        <div className="min-w-0">
                          <h5 className="text-[11px] font-bold truncate text-slate-800 dark:text-slate-200">{selectedFile.name}</h5>
                          <p className="text-[9px] text-slate-400">{(selectedFile.size / 1024).toFixed(1)} KB • Valid prescription attached</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFile();
                        }}
                        className="rounded-full bg-slate-100 p-1 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-slate-500 dark:text-slate-400">
                      <Upload className="h-5 w-5 mx-auto text-slate-400 animate-bounce" />
                      <p className="text-[11px] font-semibold text-slate-700 dark:text-slate-300">
                        Drag and drop prescription here or <span className="text-emerald-600 underline">browse</span>
                      </p>
                      <p className="text-[9px] text-slate-400">Supports PDF, JPEG, PNG formats (Max 5MB)</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Additional Notes (Optional)
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Call before coming, deliver near primary school Bela..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                />
              </div>

              {/* Call Now vs WhatsApp Order triggers */}
              <div className="flex gap-3 pt-3">
                <a
                  href="tel:09934098161"
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-250 bg-white py-3 text-center text-xs font-black text-slate-800 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-200 hover:bg-slate-50"
                >
                  <Phone className="h-4 w-4 text-emerald-600" />
                  <span>Call Store</span>
                </a>

                <button
                  type="submit"
                  className="flex flex-2 items-center justify-center gap-1.5 rounded-xl bg-emerald-600 py-3 text-center text-xs font-black text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/15"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
