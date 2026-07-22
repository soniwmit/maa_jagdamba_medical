export enum ActivePage {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Gallery = 'gallery',
  Contact = 'contact',
}

export interface WhyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  count: string;
  color: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  location: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'customers';
  imageUrl: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface WhatsAppFormData {
  customerName: string;
  mobileNumber: string;
  email: string;
  address: string;
  medicineName: string;
  prescriptionUploaded: boolean;
  message: string;
  preferredDeliveryTime: string;
}
