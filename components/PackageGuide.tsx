import Image from "next/image";
import Link from "next/link";
import { Plane, Building2, FileCheck, Bus, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Plane,
    title: "Return Flights",
    body: "Round-trip flights from major UK cities — London, Birmingham, and Manchester — landing at Jeddah airport for easy access to Makkah.",
  },
  {
    icon: Building2,
    title: "Hotel Accommodation",
    body: "Carefully selected hotels near Haram in Makkah and Masjid an-Nabawi in Madinah. Choose from 3-star to 5-star options.",
  },
  {
    icon: FileCheck,
    title: "Hajj & Umrah Visa",
    body: "Full visa assistance included in every package, ensuring compliance with Saudi regulations. Valid for three months for flexible planning.",
  },
  {
    icon: Bus,
    title: "Ground Transport",
    body: "Airport transfers, inter-city travel between Makkah and Madinah, and all transport to ritual sites — fully coordinated with your schedule.",
  },
  {
    icon: Smartphone,
    title: "Digital Support",
    body: "Access the Nusuk App to track itineraries, manage transport, and confirm hotel bookings — keeping your journey organised and efficient.",
  },
  {
    icon: ShieldCheck,
    title: "ATOL Protection",
    body: "Every package is ATOL protected, meaning your money is safe and your booking is financially secured by the UK Civil Aviation Authority.",
  },
];

export default function PackageGuide() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="eyebrow">Everything You Need to Know</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">
            What is a UK Hajj &amp; Umrah<br className="hidden md:block" /> Package?
          </h2>
          <p className="text-ink-soft mt-5 text-[17px] leading-relaxed">
            A complete travel solution designed to help pilgrims from the UK perform Hajj or Umrah
            in Makkah and Madinah — comfortably, conveniently, and spiritually. Every detail managed
            so you can focus entirely on your ibadah.
          </p>
        </div>

        {/* Alternating content rows */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[400px] shadow-lift">
            <Image src="/images/kaaba.webp" alt="Pilgrims at Kaaba" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-brand-800 text-xs font-bold">
                Trusted by 5,000+ UK Pilgrims
              </span>
            </div>
          </div>
          <div>
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-display font-bold text-lg mb-4">1</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
              Why Choose a Managed Package?
            </h3>
            <p className="text-ink-soft text-[16px] leading-relaxed mb-4">
              Thousands of pilgrims across the UK trust East West Travels to simplify their journey.
              Choosing a managed Hajj or Umrah package ensures all logistics, documentation, and
              accommodations are professionally handled — giving you peace of mind throughout your
              spiritual journey.
            </p>
            <p className="text-ink-soft text-[16px] leading-relaxed">
              While it&#39;s possible to arrange everything independently, a well-structured package
              saves time and effort, allowing pilgrims from London, Birmingham, Manchester, and
              other UK cities to focus entirely on prayers and rituals.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-display font-bold text-lg mb-4">2</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mb-4">
              What&#39;s Included in Every Package?
            </h3>
            <p className="text-ink-soft text-[16px] leading-relaxed mb-4">
              Each UK Hajj or Umrah package combines return flights from major cities, carefully
              selected hotel accommodation, ground transport, visa processing, health insurance,
              and expert guidance — ensuring your pilgrimage is smooth, organised, and worry-free.
            </p>
            <p className="text-ink-soft text-[16px] leading-relaxed">
              We also offer global packages for those looking to combine spiritual travel with
              international tours, making East West Travels your one-stop provider for Hajj,
              Umrah, and worldwide travel.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-[340px] md:h-[400px] shadow-lift order-1 lg:order-2">
            <Image src="/images/madinah.webp" alt="Masjid an-Nabawi" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-brand-800 text-xs font-bold">
                Flights, Hotels, Visa — All Handled
              </span>
            </div>
          </div>
        </div>

        {/* Feature highlight cards */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-600 text-white font-display font-bold text-lg mb-4">3</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-ink">
              Your Package, Step by Step
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-brand-50 rounded-2xl p-6 border border-brand-100 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <h.icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-display text-base font-bold text-ink">{h.title}</h4>
                </div>
                <p className="text-sm text-ink-soft leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Best experience CTA */}
        <div className="bg-brand-800 rounded-[28px] p-8 md:p-12 grid md:grid-cols-5 gap-8 items-center pattern-star overflow-hidden">
          <div className="md:col-span-2 relative h-[240px] md:h-[280px] rounded-2xl overflow-hidden">
            <Image src="/images/kaaba2.webp" alt="Kaaba close-up" fill className="object-cover" />
          </div>
          <div className="md:col-span-3 relative z-10">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
              How to Have the Best UK Hajj &amp; Umrah Experience
            </h3>
            <p className="text-brand-100/80 text-[15px] leading-relaxed mb-6">
              Many pilgrims face challenges during Hajj and Umrah due to incomplete planning or
              mismanaged services. At East West Travels, we ensure your package is tailored,
              transparent, and fully supported — from the moment you book until you return home safely.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-800 font-bold text-sm hover:bg-brand-50 transition-all">
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}