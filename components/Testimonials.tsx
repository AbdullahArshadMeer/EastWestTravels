import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Ahmed Hussain", location: "Stoke-On-Trent", rating: 5, body: "The team handled every detail of our Hajj journey with care. From visa to flights to the hotels near Haram — completely stress-free. Highly recommended." },
  { name: "Fatima Khan", location: "Birmingham", rating: 5, body: "My Umrah with East West Travels was spiritually fulfilling and beautifully organised. The guide was knowledgeable and the accommodation exceeded expectations." },
  { name: "Yusuf Patel", location: "Manchester", rating: 5, body: "Eleven years of experience shows. Transparent pricing, honest advice, and a team that actually answers the phone when you call. A rare thing these days." },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-brand-50/50 pattern-islamic overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">Voices from the journey</h2>
          <p className="text-ink-soft mt-4 text-[17px]">Real stories from pilgrims and travellers who chose East West Travels.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 border border-brand-100 hover:shadow-card transition-all">
              <Quote className="w-8 h-8 text-brand-600/30 mb-4" />
              <p className="text-ink-soft leading-relaxed mb-6">&ldquo;{r.body}&rdquo;</p>
              <div className="flex items-center justify-between pt-5 border-t border-brand-100">
                <div>
                  <div className="font-bold text-ink">{r.name}</div>
                  <div className="text-xs text-ink-muted mt-0.5">{r.location}</div>
                </div>
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-500 text-brand-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}