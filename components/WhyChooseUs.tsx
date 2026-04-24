import { Award, Globe2, HeartHandshake, CircleDollarSign } from "lucide-react";

const items = [
  { icon: Award, title: "11+ Years Experience", body: "Over a decade managing Hajj, Umrah, and global travel packages with proven expertise." },
  { icon: Globe2, title: "Pilgrimage to Global", body: "From sacred journeys in the UK and abroad to bespoke worldwide adventures." },
  { icon: HeartHandshake, title: "Every Detail Handled", body: "A dedicated team ensures every aspect of your journey is taken care of." },
  { icon: CircleDollarSign, title: "Clear, Fair Pricing", body: "Transparent costs with a simple, confident booking experience." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-24 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Why Choose East West Travels?</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">Trusted Travel Made Easy</h2>
          <p className="text-ink-soft mt-4 text-[17px]">Four things we get right so that every journey — sacred or leisure — feels calm, considered, and completely supported.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <div key={i} className="bg-white rounded-2xl p-7 border border-cream-200 hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-5">
                <it.icon className="w-5 h-5 text-brand-700" />
              </div>
              <h3 className="font-display text-lg font-bold text-ink mb-2 leading-snug">{it.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
