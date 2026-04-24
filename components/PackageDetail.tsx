import Link from "next/link";
import { Star, Plane, Calendar, Clock, Building2, ChevronRight } from "lucide-react";
import ImageGallery from "./ImageGallery";
import BookingForm from "./BookingForm";
import PackageTabs from "./PackageTabs";
import type { Package } from "@/data/packages";

export default function PackageDetail({ pkg }: { pkg: Package }) {
  const categoryLabel = pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink-muted">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/packages/${pkg.category}`} className="hover:text-brand-700">{categoryLabel} Packages</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-medium">{pkg.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header: Title + Price */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-ink tracking-tight">
              {pkg.name}
            </h1>
            <div className="h-[3px] w-16 bg-brand-600 rounded-full mt-3 mb-4" />

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: pkg.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-ink-muted">{pkg.reviews} Customer Reviews</span>
            </div>
          </div>

          <div className="text-right">
            <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Start From</div>
            <div className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-none mt-1">
              {pkg.startFrom}
              {pkg.startFrom !== "On request" && <span className="text-base font-normal text-ink-muted">/Person</span>}
            </div>
          </div>
        </div>

        {/* Sharing options */}
        {pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {pkg.sharingOptions.map((opt, i) => (
              <div
                key={i}
                className="text-center py-3 px-4 rounded-xl border border-cream-200 bg-cream-50"
              >
                <span className="text-sm text-ink">{opt.label} </span>
                <span className="font-bold text-ink">{opt.price}</span>
                <span className="text-xs text-ink-muted">/person</span>
              </div>
            ))}
          </div>
        )}

        {/* Info row */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-3">
          <div className="flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-brand-600" />
            <span>{pkg.departFrom}</span>
            <span className="text-ink-muted mx-1">→</span>
            <span>{pkg.arriveTo}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-brand-600" />
            <span>{pkg.dateRange}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-brand-600" />
            <span>{pkg.durationDays > 0 ? `${pkg.durationDays} Days` : "Custom"}</span>
          </div>
          {pkg.airline && (
            <div className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-brand-600" />
              <span>{pkg.airline}</span>
            </div>
          )}
        </div>

        {/* Hotels row */}
        {pkg.hotels && pkg.hotels.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-6">
            {pkg.hotels.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-brand-600" />
                <span>{h.city}: {h.stars}★ {h.name}</span>
                {h.meal && <span className="text-xs text-ink-muted">({h.meal})</span>}
              </div>
            ))}
          </div>
        )}

        {/* Badge */}
        {pkg.badge && (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold mb-8 w-fit">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            {pkg.badge}
          </div>
        )}

        {/* Gallery + Booking Form */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <ImageGallery images={pkg.gallery} alt={pkg.name} />
          </div>
          <div className="lg:col-span-2">
            <BookingForm pkg={pkg} />
          </div>
        </div>

        {/* Tabs */}
        <PackageTabs pkg={pkg} />
      </div>
    </>
  );
}
