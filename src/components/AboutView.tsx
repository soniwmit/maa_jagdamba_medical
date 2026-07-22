import React from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  Award, 
  Clock, 
  CheckCircle, 
  UserCheck, 
  Quote 
} from 'lucide-react';
import { TIMELINE_DATA } from '../data';

export default function AboutView() {
  const values = [
    { title: 'Medicine Authenticity', description: 'Zero compromise on quality. Every single tablet, capsule, and syrup is 100% genuine.', icon: CheckCircle },
    { title: 'Community First', description: 'Caring for Chariyari and Makhdumpur villagers with fair discount systems and warm relationships.', icon: Heart },
    { title: 'Professional Integrity', description: 'Rigorous prescription checks and safe drug consultation by certified medical staff.', icon: Award },
    { title: '24/7 Availability Prep', description: 'Ready to assist during local emergencies and quick drug sourcing within 12 hours.', icon: Clock }
  ];

  return (
    <div className="py-12 bg-white dark:bg-slate-900 transition-colors duration-200" id="about-page">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* About Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
            Our Legacy
          </span>
          <h2 className="font-display text-4xl font-black text-slate-900 dark:text-white">
            About Maa Jagdamba Medical
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Your trusted healthcare partner in Bela, Makhdumpur, committed to ensuring authentic medical supplies, expert pharmacist consulting, and fair prices for everyone.
          </p>
        </div>

        {/* Business Story Split */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20" id="about-story">
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              The Maa Jagdamba Medical Story
            </h3>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              Founded in 2015, Maa Jagdamba Medical was established with a singular, powerful vision: to provide rural and semi-urban communities of Makhdumpur, Chariyari, and Bela with instant access to 100% genuine prescription medicines and emergency medical gear. Before our launch, local residents often had to travel long distances for specialized drugs.
            </p>
            <p className="text-slate-650 dark:text-slate-300 text-sm leading-relaxed">
              Through honest pharmaceutical practices, strict climate-controlled storage for critical drugs (like insulin and vaccinations), and a warm, customer-centric approach, we became Makhdumpur’s highest-rated pharmacy store. We continue to innovate by adopting instant digital orders on WhatsApp, ensuring no patient waits in queues.
            </p>
            
            <div className="border-l-4 border-emerald-500 bg-emerald-50/40 dark:bg-emerald-950/20 p-5 rounded-r-2xl">
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold italic">
                &ldquo;We don’t just sell medications; we build lifelines of trust. Every customer who walks through our doors is treated with the care and patient attention they deserve.&rdquo;
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual presentation wrapper */}
            <div className="overflow-hidden rounded-3xl border border-slate-100 bg-slate-50 dark:border-slate-800 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80" 
                alt="Pharmacy Store Inside"
                className="h-80 w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6 bg-slate-900 text-white">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm">Maa Jagdamba Medical Store</h4>
                    <p className="text-[10px] text-emerald-400 font-medium">Bela Makhdumpur - Sonwan Road, Chariyari</p>
                  </div>
                  <span className="text-xs font-bold bg-emerald-600 px-3 py-1 rounded-full text-white">
                    Established 2015
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Core Values Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-20" id="about-mission-vision">
          {/* Mission Card */}
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-emerald-50/20 to-white p-8 dark:border-slate-800 dark:from-slate-950/10 dark:to-slate-900 shadow-xs space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400">
              <Target className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              Our mission is to maximize the healthcare parameters of our local community. We do this by sourcing 100% authentic medicines directly from authorized pharma manufacturers, maintaining fair and ethical discount margins, and leveraging smart digital tools for rapid medical response.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-blue-50/10 to-white p-8 dark:border-slate-800 dark:from-slate-950/10 dark:to-slate-900 shadow-xs space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">
              <Eye className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">Our Vision</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
              We envision becoming the primary healthcare trust framework in Bihar. We aim to expand our services into digital diagnostics consults and local healthcare camps, serving as an essential pillar of support and safety for every family in Bela and Makhdumpur.
            </p>
          </div>
        </div>

        {/* Core values block */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              Our Corporate Values
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              We guide every single medicine filing, consultation, and delivery through strict behavioral principles.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="about-values">
            {values.map((v, i) => {
              const IconComp = v.icon;
              return (
                <div key={i} className="rounded-2xl border border-slate-100 bg-slate-50/40 p-5 dark:border-slate-800 dark:bg-slate-950/20 text-center space-y-3">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                    <IconComp className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white">{v.title}</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Chronological Timeline */}
        <div className="mb-20" id="about-timeline">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-12">
            <h3 className="font-display text-2xl font-black text-slate-900 dark:text-white">
              Our Journey Timeline
            </h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              A brief retrospective of our key milestones and growth as a trusted medical store in Bihar.
            </p>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 space-y-8">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative group" id={`timeline-event-${index}`}>
                {/* Timeline node icon */}
                <div className="absolute -left-[31px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-emerald-500 bg-white dark:bg-slate-900 group-hover:bg-emerald-600 transition-colors"></div>
                
                <div className="space-y-1.5">
                  <span className="font-display text-sm font-black text-emerald-600 dark:text-emerald-400">
                    {item.year}
                  </span>
                  <h4 className="font-display text-base font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Owner Message Block */}
        <div className="rounded-3xl border border-slate-150 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-950/20" id="about-owner-message">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            
            {/* Owner Image / Avatar */}
            <div className="md:col-span-3 text-center">
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-emerald-50 dark:border-slate-800 shadow-md">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-emerald-500 to-teal-600 text-3xl font-black text-white">
                  RS
                </div>
              </div>
              <h4 className="font-display text-base font-black text-slate-900 dark:text-white mt-4">
                Soni Kumar
              </h4>
              <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                Store Owner & Founder
              </p>
            </div>

            {/* Message Body */}
            <div className="md:col-span-9 space-y-4">
              <Quote className="h-8 w-8 text-emerald-600/35 dark:text-emerald-500/20" />
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                A Personal Message to Our Community
              </h3>
              <p className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed">
                &ldquo;Maa Jagdamba Medical was founded because we saw a genuine need for a high-quality, dependable healthcare shop in Bela. To us, every patient is a responsibility. We ensure that every tablet we hand over is authentic, stored properly, and billed transparently. We promise to continue serving Makhdumpur and Bihar with the highest standard of pharmacy care and absolute clinical integrity.&rdquo;
              </p>
              
              <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">
                <span>📍 Maa Jagdamba Medical Team</span>
                <span>•</span>
                <span>Bihar, India</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
