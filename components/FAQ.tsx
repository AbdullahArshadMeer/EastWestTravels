"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Can I book a Hajj or Umrah package with a single room option?",
    a: "Yes! East West Travels allows single-room accommodations in your UK Umrah package or Hajj package. We coordinate with top hotels near Haram to ensure comfort, privacy, and convenience in every package for UK and global pilgrims.",
  },
  {
    q: "What is included in an Umrah package from East West Travels?",
    a: "Our Umrah packages include return flights from the UK, hotel accommodation in Makkah and Madinah, visa processing, airport transfers, ground transportation, and guided Ziyarat tours. Meal plans vary by package tier.",
  },
  {
    q: "Are your Hajj and Umrah packages ATOL protected?",
    a: "Absolutely. All East West Travels packages are fully ATOL protected, meaning your money is secure and your booking is financially protected by the UK's Civil Aviation Authority.",
  },
  {
    q: "Can I customise my Hajj or Umrah package?",
    a: "Yes, every package can be tailored to your needs. You can choose your departure airport, hotel preferences, room sharing type, meal plans, and add Ziyarat tours. Contact us to build your ideal package.",
  },
  {
    q: "Do you offer group discounts for Hajj and Umrah?",
    a: "We offer competitive group discounts for families, friends, and community groups. The larger your group, the more you save. Get in touch for a personalised group quote.",
  },
  {
    q: "What documents do I need for Umrah or Hajj?",
    a: "You'll need a valid passport (with at least 6 months validity), passport-sized photographs, and a meningitis vaccination certificate. We handle the visa processing and guide you through every step.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-24 bg-cream-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Hajj &amp; Umrah Packages UK and Global
          </h2>
          <p className="text-ink-soft mt-3 text-[15px]">by East West Travels</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-brand-200 bg-white shadow-card"
                    : "border-cream-200 bg-white hover:border-brand-200"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="flex items-center justify-between w-full text-left px-6 py-5 gap-4"
                >
                  <span className="font-display text-[15px] font-bold text-ink leading-snug">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    isOpen ? "bg-brand-600 text-white" : "bg-cream-100 text-ink-muted"
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 -mt-1">
                    <p className="text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}