import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

export default function ContactView() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('loading');
    
    // Simulate API submission
    setTimeout(() => {
      setSubmitStatus('success');
    }, 1200);
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
    setSubmitStatus('idle');
  };

  const handleSendViaWhatsApp = () => {
    const formattedText = `Hello Maa Jagdamba Medical,\n\nMy Name: ${name}\nPhone: ${phone}\nEmail: ${email || 'Not specified'}\nMessage: ${message}`;
    const url = `https://wa.me/919934098161?text=${encodeURIComponent(formattedText)}`;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors duration-200" id="contact-page">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Contact Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-16">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-100 dark:border-emerald-950">
            Get In Touch
          </span>
          <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Maa Jagdamba Medical
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            Have questions about specific chronic medicines, diagnostic equipment availability, or local orders? Send us a message or call our Makhdumpur counter.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-12" id="contact-grid">
          
          {/* Contact details / Working Hours column */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white">
              Official Store Details
            </h3>

            {/* Methods Grid */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">Physical Location</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-1">
                    3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Makhdumpur, Bihar 804422, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">Phone Numbers</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-1">
                    For active orders, drug queries, and fast local verification:
                  </p>
                  <a href="tel:09934098161" className="text-sm font-bold text-emerald-650 dark:text-emerald-400 hover:underline mt-1 block">
                    +91 9934098161
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">Email Communications</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-1">
                    For corporate proposals, bulk supplies, and medical documentation:
                  </p>
                  <a href="mailto:soni.wmit@gmail.com" className="text-sm font-bold text-slate-800 dark:text-slate-300 hover:underline mt-1 block">
                    soni.wmit@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/40">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-sans text-sm font-bold text-slate-900 dark:text-white">Operating Hours</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed mt-1">
                    Open seven days a week, Sunday through Saturday:
                  </p>
                  <p className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">
                    8:00 AM – 10:00 PM IST (Indian Standard Time)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Inquiry Form Column */}
          <div className="lg:col-span-7" id="contact-form-container">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/40 shadow-xs relative overflow-hidden">
              <h3 className="font-sans text-lg font-bold text-slate-900 dark:text-white mb-6">
                Send a Quick Message
              </h3>

              {submitStatus === 'success' ? (
                <div className="py-12 text-center space-y-4" id="contact-success-state">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 border border-emerald-100">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h4 className="font-sans text-base font-bold text-slate-900 dark:text-white">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Your message has been logged securely. Our support staff will contact you shortly. You can also duplicate this message directly to WhatsApp for an instant response.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 justify-center pt-4">
                    <button
                      onClick={handleSendViaWhatsApp}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white hover:bg-emerald-500"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={resetForm}
                      className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-xs font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                    >
                      <span>Write Another Message</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 rounded-xl bg-rose-50 p-3.5 text-xs font-bold text-rose-600 dark:bg-rose-950/20 dark:text-rose-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>Please fill in all mandatory fields before submitting!</span>
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Anand Kumar"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 09934098161"
                        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Your Message / Inquiry Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="List the prescription brand medicines, strength, and any diagnostic device requirements..."
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3.5 text-center text-sm font-black text-white hover:bg-emerald-500 transition-all disabled:opacity-50"
                  >
                    {submitStatus === 'loading' ? (
                      <span>Sending your message...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message Form</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
