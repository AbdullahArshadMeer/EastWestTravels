import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Our Purpose</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">Mission, Vision</h2>
          <p className="text-ink-soft mt-4 text-[17px]">We exist to make travel simple and trusted. Here&#39;s how we decide what to build next.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Card icon={Target} title="Our Mission" items={[
            "Simplify booking for every traveller.",
            "Offer transparent choices that fit your budget and schedule.",
            "Provide real support before, during, and after your trip.",
          ]} />
          <Card icon={Eye} title="Our Vision" items={[
            "Trusted by families, groups, and pilgrims across the UK.",
            "Deliver digital journeys that feel personal and human.",
            "Build partnerships that raise quality and reduce costs.",
          ]} />
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, items }: { icon: React.ElementType; title: string; items: string[] }) {
  return (
    <div className="bg-cream-50 rounded-3xl p-8 md:p-10 border border-cream-200">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-xl bg-brand-600 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-ink-soft">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-600 flex-shrink-0" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
