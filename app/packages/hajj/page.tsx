import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { hajjPackages } from "@/data/packages";

export default function HajjPage() {
  return (
    <>
      <PageHero
        eyebrow="Hajj 2026"
        title="Hajj Packages — UK Departures"
        subtitle="Three tiers of Hajj packages with experienced guides, carefully chosen hotels near Haram, and complete logistics handled from the UK."
        breadcrumb={[{ label: "Packages" }, { label: "Hajj" }]}
        image="/images/mina.webp"
      />
      <QuoteForm />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow">Explore Hajj Packages</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">Hajj 2026 — {hajjPackages.length} tiers</h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm">Book early — Hajj allocation is limited by the Ministry of Hajj quota.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hajjPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>
      <CTABanner title="Ready to begin your Hajj?" subtitle="Our team will walk you through every stage — from visa and meningitis certificate to arrival in Jeddah and the rituals in Mina. You're not alone on this journey." ctaLabel="Speak to a Hajj Advisor" />
    </>
  );
}
