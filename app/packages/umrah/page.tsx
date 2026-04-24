import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import PackageCard from "@/components/PackageCard";
import CTABanner from "@/components/CTABanner";
import { umrahPackages } from "@/data/packages";

export default function UmrahPage() {
  return (
    <>
      <PageHero
        eyebrow="Best place to start your journey"
        title="Explore All UK Umrah Packages"
        subtitle="A wide range of UK Umrah packages with flights, hotels, transport, visa support, and expert guidance for a smooth, spiritual journey."
        breadcrumb={[{ label: "Packages" }, { label: "Umrah" }]}
        image="/images/madinah.webp"
      />
      <QuoteForm />
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="eyebrow">Explore Umrah Packages</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">Umrah 2026 — {umrahPackages.length} packages</h2>
            </div>
            <p className="text-sm text-ink-muted max-w-sm">All packages are ATOL protected. Speak to us for group discounts and bespoke dates.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {umrahPackages.map((pkg) => <PackageCard key={pkg.id} pkg={pkg} />)}
          </div>
        </div>
      </section>
      <CTABanner title="Don't see a date that works?" subtitle="Every Umrah package can be adjusted to your departure airport, preferred hotels, and group size. Tell us what you need." ctaLabel="Request Custom Umrah" />
    </>
  );
}
