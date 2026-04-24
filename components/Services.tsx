import { UserCheck, Calendar, ShieldCheck, Clock, MapPin, PackageCheck } from "lucide-react";

const services = [
  { icon: UserCheck, title: "Expert Guides", body: "Knowledgeable guides ensure your Hajj and Umrah experience is smooth, meaningful, and spiritually enriching." },
  { icon: Calendar, title: "Hassle-Free Booking", body: "We manage flights, hotels, transport, visas, and special requests for a completely stress-free experience." },
  { icon: ShieldCheck, title: "Best Price Guarantee", body: "Competitive pricing for Hajj, Umrah, and global tours — without compromising on quality or service." },
  { icon: Clock, title: "24/7 Support", body: "Our support team is available around the clock to assist with any travel-related needs." },
  { icon: MapPin, title: "Curated Experiences", body: "Each package is carefully designed, including Ziyarat for Hajj and Umrah, plus global itineraries." },
  { icon: PackageCheck, title: "Safe & Secure Travel", body: "Reliable accommodations, secure transport, and end-to-end guidance for your peace of mind." },
];

export default function Services() {
  return (
    <section className="py-20 md:py-24 bg-brand-50 pattern-islamic overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Features</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">
            Making Your Sacred Journey<br className="hidden md:block" /> Seamless &amp; Comfortable
          </h2>
          <p className="text-ink-soft mt-4 text-[17px]">We handle every aspect of your journey from planning to execution, so you can focus on your spiritual growth or travel enjoyment.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="flex gap-4 bg-white rounded-2xl p-6 border border-brand-100 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug">{s.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}