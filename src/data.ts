import { WhyCard, ServiceItem, CategoryItem, TestimonialItem, FAQItem, GalleryItem, TimelineEvent } from './types';

export const WHY_CHOOSE_US_DATA: WhyCard[] = [
  {
    id: 'genuine',
    title: '100% Genuine Medicines',
    description: 'We source directly from registered pharmaceutical companies and verified distributors, ensuring strict batch-tracking and high standard authenticity.',
    icon: 'ShieldCheck',
  },
  {
    id: 'staff',
    title: 'Experienced Pharmacists',
    description: 'Our certified pharmacists check all prescriptions rigorously and provide precise, easy-to-understand dosage instructions.',
    icon: 'Users',
  },
  {
    id: 'prices',
    title: 'Affordable Prices',
    description: 'We offer fair discount schemes, special chronic medication pricing, and authentic generic alternatives that fit every budget.',
    icon: 'BadgePercent',
  },
  {
    id: 'service',
    title: 'Fast Counter Service',
    description: 'Minimal wait times and organized medicine inventory allow us to dispense prescription orders rapidly and seamlessly.',
    icon: 'Zap',
  },
  {
    id: 'prescription',
    title: 'Prescription Verification',
    description: 'Dual checking system for prescription accuracy, ensuring you get exactly what your healthcare provider advised.',
    icon: 'ClipboardList',
  },
  {
    id: 'products',
    title: 'Diverse Healthcare Stock',
    description: 'Comprehensive inventory including baby care, personal care, medical devices, wellness supplements, and surgical essentials.',
    icon: 'Layers',
  },
  {
    id: 'local',
    title: 'Trusted Local Pharmacy',
    description: 'Serving Makhdumpur, Chariyari, and surrounding Bihar areas with integrity, warm community relationships, and stellar service.',
    icon: 'Heart',
  },
  {
    id: 'support',
    title: 'Easy WhatsApp Support',
    description: 'Upload your doctor’s prescription paper or text us your order on WhatsApp for direct packaging and local pickup arrangements.',
    icon: 'MessageSquareShare',
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    category: 'Core Service',
    description: 'Accurate dispensing of life-saving prescription medications for cardiovascular, diabetic, respiratory, and chronic/acute health conditions.',
    features: ['Pharmacist-reviewed orders', 'Dual dosage verification', 'Generic alternative advice', 'Strict batch-control'],
    icon: 'FileSpreadsheet',
  },
  {
    id: 'general',
    title: 'General Medicines (OTC)',
    category: 'Daily Essentials',
    description: 'Comprehensive stock of over-the-counter formulations for fever, cold, allergies, indigestion, pain relief, and seasonal symptoms.',
    features: ['Trusted pharma brands', 'Detailed usage guidance', 'Fast symptom relief stocks', 'Safe age-appropriate options'],
    icon: 'Pil',
  },
  {
    id: 'supplements',
    title: 'Health Supplements & Vitamins',
    category: 'Wellness',
    description: 'A wide range of high-quality multivitamins, protein powders, immunity boosters, calcium pills, and energy supplements.',
    features: ['Certified quality brands', 'Nutritional guidance', 'Sugar-free formulations', 'Age-specific supplements'],
    icon: 'Sparkles',
  },
  {
    id: 'baby-care',
    title: 'Premium Baby Care',
    category: 'Family Care',
    description: 'Everything your little one needs, from nutrient-rich baby milk formulas and cereals to baby skin lotions and gentle wipes.',
    features: ['Hypoallergenic brands', 'Dermatologist-tested products', 'Baby food and nutritionals', 'Safe diagnostic supplies'],
    icon: 'Baby',
  },
  {
    id: 'personal-care',
    title: 'Personal Care & Hygiene',
    category: 'Daily Essentials',
    description: 'Selected dermatological skincare, dental hygiene essentials, premium hair care, and high-quality antiseptics.',
    features: ['Daily family hygiene', 'Skin-friendly solutions', 'Premium herbal selections', 'Antiseptic hand & skin care'],
    icon: 'Smile',
  },
  {
    id: 'medical-equip',
    title: 'Medical Devices & Diagnostics',
    category: 'Specialty Devices',
    description: 'Home diagnostics like digital blood pressure machines, blood sugar glucometers, digital thermometers, and inhalation nebulizers.',
    features: ['Pre-calibrated devices', 'Demonstration by staff', 'Extended warranty support', 'Accurate medical sensors'],
    icon: 'Activity',
  },
  {
    id: 'surgical-supplies',
    title: 'Surgical Items & Disposables',
    category: 'Clinical Care',
    description: 'Hospital grade surgical dressings, adhesive plasters, clean syringes, disposable gloves, IV sets, and sterile gauze.',
    features: ['100% sterile packaging', 'Medical-grade plastics', 'Bulk surgical rates', 'Approved safety compliance'],
    icon: 'Scissors',
  },
  {
    id: 'first-aid',
    title: 'First Aid Supplies',
    category: 'Emergency Prep',
    description: 'Emergency prep kits, cotton wools, medical alcohol rubs, antiseptic sprays, burn creams, and elastic support bandages.',
    features: ['Custom modular kits', 'School & office standards', 'Instant emergency solutions', 'Refill pack packages'],
    icon: 'LifeBuoy',
  },
  {
    id: 'diabetic-care',
    title: 'Complete Diabetic Care',
    category: 'Chronic Wellness',
    description: 'Specially organized supplies including insulin needles, lancets, test strips, sugar-free sweeteners, and foot-care solutions.',
    features: ['Temperature-controlled insulin', 'Regular strip refills', 'Diabetic nutritional drinks', 'Sugar monitoring diaries'],
    icon: 'ActivitySquare',
  },
  {
    id: 'home-care',
    title: 'Home Care & Orthopedic Support',
    category: 'Specialty Support',
    description: 'Support equipment including knee braces, lumbar support belts, cervical neck collars, wrist splints, and mobility aids.',
    features: ['Ergonomic medical contours', 'Breathable fabric structures', 'Variable size options', 'Durable material standards'],
    icon: 'Bone',
  }
];

export const CATEGORIES_DATA: CategoryItem[] = [
  { id: 'tablets', name: 'Tablets', icon: 'Tablet', description: 'Anti-infectives, analgesics, blood pressure controls, cardiac support tablets.', count: '450+ items', color: 'from-blue-500/10 to-blue-500/20' },
  { id: 'capsules', name: 'Capsules', icon: 'Pill', description: 'Amoxicillin, vitamin complexes, gastro-resistant capsules, joint care.', count: '300+ items', color: 'from-emerald-500/10 to-emerald-500/20' },
  { id: 'syrups', name: 'Syrups & Suspensions', icon: 'Droplets', description: 'Pediatric cough formulas, digestives, tonic liquids, health liquids.', count: '200+ items', color: 'from-amber-500/10 to-amber-500/20' },
  { id: 'injection', name: 'Injections', icon: 'Syringe', description: 'Vials, ampoules, IV fluids, anesthetic injections, vaccines.', count: '120+ items', color: 'from-rose-500/10 to-rose-500/20' },
  { id: 'medical-equip', name: 'Medical Equipment', icon: 'Activity', description: 'BP monitors, Glucometers, Nebulizers, Pulse Oximeters.', count: '45+ items', color: 'from-violet-500/10 to-violet-500/20' },
  { id: 'protein', name: 'Protein Supplements', icon: 'Dumbbell', description: 'Whey supplements, diabetic nutritional shakes, weight gainers.', count: '80+ items', color: 'from-indigo-500/10 to-indigo-500/20' },
  { id: 'vitamins', name: 'Vitamins & Minerals', icon: 'Sparkles', description: 'Vitamin C, Zinc, Vitamin D3, daily multivitamins, calcium tablets.', count: '150+ items', color: 'from-cyan-500/10 to-cyan-500/20' },
  { id: 'skin', name: 'Skin Care', icon: 'HeartHandshake', description: 'Moisturizers, therapeutic creams, baby powders, sunscreens.', count: '180+ items', color: 'from-teal-500/10 to-teal-500/20' },
  { id: 'baby', name: 'Baby Products', icon: 'Baby', description: 'Diapers, gentle shampoos, milk powders, feeding bottles.', count: '140+ items', color: 'from-pink-500/10 to-pink-500/20' },
  { id: 'hygiene', name: 'Personal Hygiene', icon: 'HandPlatter', description: 'Sanitizers, antiseptic washes, masks, personal sanitization.', count: '90+ items', color: 'from-orange-500/10 to-orange-500/20' },
  { id: 'orthopedic', name: 'Orthopedic Support', icon: 'Bone', description: 'Knee bands, lumbar belts, ankle wraps, cervical supports.', count: '75+ items', color: 'from-purple-500/10 to-purple-500/20' },
  { id: 'diabetic', name: 'Diabetic Care', icon: 'Layers', description: 'Insulins, sugar-free foods, lancets, test strips.', count: '110+ items', color: 'from-sky-500/10 to-sky-500/20' }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'rev1',
    name: 'Rajesh Kumar Singh',
    rating: 5,
    text: 'Maa Jagdamba Medical has been our family pharmacy for years. They always have the medicines we need, and they verify the prescriptions thoroughly. The owner and staff are extremely helpful and cooperative.',
    date: 'June 18, 2026',
    location: 'Makhdumpur, Bihar',
    verified: true,
  },
  {
    id: 'rev2',
    name: 'Anjali Kumari',
    rating: 5,
    text: 'Very fast service! I ordered my grandmother’s blood pressure and diabetes medicines via WhatsApp. They packaged them beautifully and kept them ready for pick up. Highly recommended for people in Makhdumpur.',
    date: 'July 02, 2026',
    location: 'Chariyari, Bihar',
    verified: true,
  },
  {
    id: 'rev3',
    name: 'Manoj Prasad',
    rating: 5,
    text: 'Genuine medicines and reasonable rates. Previously I had to travel far for specialized medicines, but now Maa Jagdamba Medical keeps or arranges them within a day. A highly trusted medical store!',
    date: 'May 12, 2026',
    location: 'Sonwan, Bihar',
    verified: true,
  },
  {
    id: 'rev4',
    name: 'Sunita Devi',
    rating: 5,
    text: 'Clean shop, hygienic environment, and very friendly behavior. They explained how to take the syrup doses for my kid very patiently. They also carry authentic baby diapers and quality formulas.',
    date: 'June 25, 2026',
    location: 'Makhdumpur, Bihar',
    verified: true,
  },
  {
    id: 'rev5',
    name: 'Vikash Kumar',
    rating: 5,
    text: 'I bought a blood pressure monitor and a steam inhaler. The pharmacist explained how to operate and calibrate the BP machine properly. Excellent knowledge and professional advice.',
    date: 'April 30, 2026',
    location: 'Hulasganj, Bihar',
    verified: true,
  },
  {
    id: 'rev6',
    name: 'Sanjay Yadav',
    rating: 5,
    text: 'Unmatched customer service in our area. Whenever we have an emergency late in the evening, we trust Maa Jagdamba Medical. Honest rates, original bills, and genuine products.',
    date: 'July 10, 2026',
    location: 'Bela, Makhdumpur',
    verified: true,
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Are the medicines available at Maa Jagdamba Medical 100% genuine?',
    answer: 'Yes, absolutely. We source our pharmaceutical products exclusively from licensed manufacturers and highly trusted national distributors. Every batch is carefully inspected for expiry date, seal verification, and authentic drug approvals.',
    category: 'Medicines'
  },
  {
    id: 'faq2',
    question: 'Can I order medicines by sharing my doctor’s prescription over WhatsApp?',
    answer: 'Yes, we make ordering incredibly easy! You can use our customized online WhatsApp Order Form to fill in your name, address, and upload or take a photo of your prescription. This instantly formats a beautiful text proposal and opens WhatsApp with our official number (+919934098161) to place your order.',
    category: 'Ordering'
  },
  {
    id: 'faq3',
    question: 'What are the timing/hours of Maa Jagdamba Medical?',
    answer: 'Our physical store is open seven days a week, from 8:00 AM to 10:00 PM. We remain accessible during standard holidays as well to handle critical prescription refills and emergency medicine supplies for the Makhdumpur community.',
    category: 'Store Info'
  },
  {
    id: 'faq4',
    question: 'Do you offer home delivery of medicines?',
    answer: 'Yes, we provide free local home delivery for senior citizens and large prescription orders within a specific radius of Makhdumpur and Chariyari. For other areas, you can pre-order on WhatsApp and pick up a packaged parcel without waiting.',
    category: 'Delivery'
  },
  {
    id: 'faq5',
    question: 'Do you sell chronic care products like insulin and diabetic essentials?',
    answer: 'Yes, we have a specialized section for diabetic care. We stock multiple insulin variants (stored under absolute temperature-controlled conditions in our medical refrigerator), blood sugar monitors, test strips, syringes, lancets, and sugar-free nutritional supplements.',
    category: 'Specialties'
  },
  {
    id: 'faq6',
    question: 'What payment modes do you accept?',
    answer: 'We believe in digital convenience. We accept Cash, all UPI payments (Google Pay, PhonePe, Paytm, BHIM), Net Banking, and major debit/credit cards at our billing counter.',
    category: 'Payment'
  },
  {
    id: 'faq7',
    question: 'Can I purchase surgical accessories and orthopedic supports at your store?',
    answer: 'Yes. We stock a robust range of surgical disposables (sterile gloves, IV sets, syringes, bandages, medical tape) and high-quality orthopedic supports (cervical neck collars, lumbar support belts, knee sleeves, wrist splints, and ankle binders).',
    category: 'Specialties'
  },
  {
    id: 'faq8',
    question: 'What should I do if a medicine I need is out of stock?',
    answer: 'If a specific medicine is unavailable, our staff can consult with you to either source the exact medicine from our central distributor within 12 to 24 hours, or provide a 100% equivalent pharmaceutical brand with the identical compound salt and strength, with your consent.',
    category: 'Medicines'
  },
  {
    id: 'faq9',
    question: 'Are over-the-counter (OTC) medicines available without prescription?',
    answer: 'Yes, basic OTC medications such as general pain relievers, cold and cough drops, mild antacids, vitamins, band-aids, and wellness supplements do not require a prescription and can be bought directly.',
    category: 'Medicines'
  },
  {
    id: 'faq10',
    question: 'Where is your medical store located in Makhdumpur?',
    answer: 'We are situated at: 3XFF+3QC, Makhdumpur - Sonwan - Hulasganj Rd, Chariyari, Makhdumpur, Bihar 804422. It is easily accessible on the main road, with parking space for visitors.',
    category: 'Store Info'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Store Front & Entrance',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
    description: 'Clean, professional and welcoming store front of Maa Jagdamba Medical, located on Makhdumpur-Hulasganj Road.'
  },
  {
    id: 'gal2',
    title: 'Authentic Medicine Shelves',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d304b3b86?auto=format&fit=crop&w=1200&q=80',
    description: 'Systematically organized, dust-free shelves storing genuine medicines labeled clearly for instant retrieval.'
  },
  {
    id: 'gal3',
    title: 'Surgical & Diagnostic Products',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80',
    description: 'High-quality medical devices, digital BP apparatus, nebulizers, and medical accessories on display.'
  },
  {
    id: 'gal4',
    title: 'Warm Professional Service',
    category: 'customers',
    imageUrl: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80',
    description: 'Our experienced staff assisting community members, ensuring they receive custom medical care and accurate directions.'
  },
  {
    id: 'gal5',
    title: 'Baby Care & Nutrition Shelves',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?auto=format&fit=crop&w=1200&q=80',
    description: 'Fully stocked shelves containing reliable baby care diapers, baby wipes, and certified premium formulas.'
  },
  {
    id: 'gal6',
    title: 'Modern Dispensary Setup',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbc88?auto=format&fit=crop&w=1200&q=80',
    description: 'Cold-chain storage refrigerators and secure pharmaceutical counters to handle life-saving prescription items.'
  }
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Inception of a Vision',
    description: 'Founded with the mission to bring genuine, highly affordable pharmaceutical medicines to Makhdumpur and surrounding villages.'
  },
  {
    year: '2018',
    title: 'Expanding Our Reach',
    description: 'Renovated store layout to house specialized diabetic care, baby products, and diagnostic equipment in temperature-controlled spaces.'
  },
  {
    year: '2021',
    title: 'Pandemic Community Shield',
    description: 'Operated tirelessly 24/7 providing sterile masks, essential sanitizers, critical oxygen parameters, and verified antiviral formulations.'
  },
  {
    year: '2024',
    title: 'Smart Digital Ordering',
    description: 'Launched our modern local home-delivery framework and instant WhatsApp-based prescription order dispatch services.'
  },
  {
    year: '2026',
    title: 'A Century of Trust',
    description: 'Evolved into Makhdumpur’s highest-rated family medical pharmacy, offering modern clinic integrations and digital diagnostics support.'
  }
];
