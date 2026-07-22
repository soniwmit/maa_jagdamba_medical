import React, { useState } from 'react';
import { Star, CheckCircle, Quote, MessageSquare, Plus, UserCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { TestimonialItem } from '../types';

export default function TestimonialsView() {
  const [reviews, setReviews] = useState<TestimonialItem[]>(TESTIMONIALS_DATA);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  
  // Custom submit state
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newText, setNewText] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim() || !newLocation.trim()) return;

    const newReview: TestimonialItem = {
      id: `custom-${Date.now()}`,
      name: newName,
      rating: newRating,
      text: newText,
      date: 'Today',
      location: `${newLocation}, Bihar`,
      verified: true
    };

    setReviews([newReview, ...reviews]);
    setSubmitSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setNewName('');
      setNewRating(5);
      setNewText('');
      setNewLocation('');
      setSubmitSuccess(false);
      setShowSubmitModal(false);
    }, 2000);
  };

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950/40 transition-colors duration-200" id="testimonials-section">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-3.5 py-1 rounded-full">
              Community Reviews
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900 dark:text-white sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Real opinions from real people who buy their monthly medicines, diabetic kits, and first aid accessories at Maa Jagdamba Medical.
            </p>
          </div>

          {/* Google Review Badge & CTA Button */}
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            {/* Google review box */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-xs dark:border-slate-800 dark:bg-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-55 text-blue-600 dark:bg-blue-950/50 font-bold text-lg border border-slate-100 dark:border-slate-800">
                G
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-black text-slate-800 dark:text-white">4.9</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
                <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide">
                  Verified Google Rating
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowSubmitModal(true)}
              className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-3 text-xs font-black text-white hover:bg-emerald-500 shadow-md shadow-emerald-600/10 transition-transform hover:scale-[1.02]"
            >
              <Plus className="h-4 w-4" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-xs hover:shadow-md dark:border-slate-800/80 dark:bg-slate-900 flex flex-col justify-between transition-all duration-300"
              id={`review-card-${rev.id}`}
            >
              {/* Quote bubble absolute icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-emerald-50/70 dark:text-emerald-950/20 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars Rating */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                  {Array.from({ length: 5 - rev.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-slate-200 dark:text-slate-700" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-50 dark:border-slate-800/60 pt-4">
                <div>
                  <h4 className="font-display text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    {rev.name}
                    {rev.verified && (
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950/40" title="Verified Customer">
                        <CheckCircle className="h-2.5 w-2.5 text-emerald-600 dark:text-emerald-400" />
                      </span>
                    )}
                  </h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase mt-0.5">
                    <span>{rev.location}</span>
                    <span>•</span>
                    <span>{rev.date}</span>
                  </div>
                </div>

                {/* Avatar Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 font-black text-emerald-600 dark:text-emerald-400 text-sm">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Submit Modal overlay */}
        {showSubmitModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-xs" id="review-modal">
            <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-900 transition-all">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <h3 className="font-display text-lg font-black text-slate-900 dark:text-white">
                  Write Your Review
                </h3>
                <button
                  onClick={() => setShowSubmitModal(false)}
                  className="rounded-lg p-1 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {submitSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50">
                    <UserCheck className="h-8 w-8 animate-pulse" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                    Review Submitted!
                  </h4>
                  <p className="text-xs text-slate-500">
                    Thank you for your valuable feedback. It helps our community!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4 mt-4">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      placeholder="e.g. Ramesh Prasad"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  {/* Location field */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Your Location (City/Village)
                    </label>
                    <input
                      type="text"
                      required
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      placeholder="e.g. Makhdumpur"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    />
                  </div>

                  {/* Stars select */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
                      Your Rating (Stars)
                    </label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="rounded-md p-1 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        >
                          <Star 
                            className={`h-6 w-6 ${
                              star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text message field */}
                  <div className="space-y-1">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      Your Review Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={newText}
                      onChange={(e) => setNewText(e.target.value)}
                      placeholder="Describe your shopping experience at our medical store..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs font-semibold focus:border-emerald-500 focus:bg-white focus:outline-hidden dark:border-slate-800 dark:bg-slate-950 dark:text-white"
                    ></textarea>
                  </div>

                  {/* Action button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-center text-sm font-black text-white hover:bg-emerald-500"
                  >
                    <span>Submit Feedbacks</span>
                  </button>

                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

// Custom Close icon definition just in case it is needed inside review form
const X = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);
