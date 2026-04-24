import Link from "next/link";
import { ArrowRight, Globe2, Sparkles, Plane } from "lucide-react";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { globalPackages } from "@/data/packages";

export default function GlobalPage() {
  return (
    <>
      <PageHero
        eyebrow="Global Tours"
        title="Explore the world, your way"
        subtitle="Curated worldwide tours and fully bespoke itineraries — Turkey, Dubai, the Balkans, or anywhere you've dreamt of going."
        breadcrumb={[{ label: "Packages" }, { label: "Global" }]}
        image="/images/kaaba.webp"
      />
      <QuoteForm />

      {/* Build Your Own */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream-50 rounded-[32px] border border-cream-200 p-8 md:p-12 grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <span className="eyebrow">Build Your Own</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight mb-4">Add a custom package — anywhere in the world</h2>
              <p className="text-ink-soft text-[16px] leading-relaxed mb-6">Not every trip fits a template. Share your destination, dates, group size, and the experiences that matter — and we&#39;ll design the itinerary.</p>
              <Link href="/contact" className="btn-primary !px-7 !py-3.5 text-base">Design My Trip <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="md:col-span-2 grid gap-3">
              {[
                { icon: Globe2, title: "Any destination", body: "Europe, Asia, Middle East — you name it." },
                { icon: Plane, title: "Any UK airport", body: "Departures from Manchester, Birmingham, London, and more." },
                { icon: Sparkles, title: "Fully bespoke", body: "Private tours, group trips, family holidays — all tailored." },
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-4 border border-cream-200">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-4 h-4 text-brand-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-ink text-sm">{f.title}</div>
                    <div className="text-xs text-ink-soft mt-0.5">{f.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured tours */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow">Featured Global Tours</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">Popular trips we&#39;ve crafted</h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm">Starting points for your own adventure — all can be adjusted.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {globalPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>

      <CTABanner title="Ready to plan your next adventure?" subtitle="Whether it's a week in Istanbul or a two-week grand tour, we'll put together options that fit your style and budget." ctaLabel="Start Planning" />
    </>
  );
}
