"use client";
import { useState } from "react";
import Link from "next/link";
import { Star, Plane, Calendar, Clock, Building2, ChevronRight, MapPin } from "lucide-react";
import ImageGallery from "./ImageGallery";
import BookingForm from "./BookingForm";
import PackageTabs from "./PackageTabs";
import type { Package } from "@/data/packages";

export default function PackageDetail({ pkg }: { pkg: Package }) {
  const categoryLabel = pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1);

  // Track which Maktab tier customer wants to book (passed to booking form)
  const [bookingMaktab, setBookingMaktab] = useState(
    pkg.maktabOptions ? pkg.maktabOptions.length - 1 : 0
  );

  // For BookingForm: pass package with the selected Maktab pre-filled
  const currentMaktab = pkg.maktabOptions?.[bookingMaktab];
  const packageForBooking = currentMaktab
    ? {
        ...pkg,
        sharingOptions: currentMaktab.sharingOptions,
        hotels: currentMaktab.hotels,
        startFrom: currentMaktab.sharingOptions[0].price,
        name: `${pkg.name} (${currentMaktab.label})`,
      }
    : pkg;

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

        {/* Maktab tiers — both shown side by side (no toggle) */}
        {pkg.maktabOptions && pkg.maktabOptions.length > 0 && (
          <div className="space-y-5 mb-8">
            {pkg.maktabOptions.map((opt, i) => (
              <div key={i} className="bg-white rounded-2xl border-2 border-cream-200 overflow-hidden">
                {/* Maktab header bar */}
                <div className="bg-brand-50 border-b border-cream-200 px-5 py-3 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <div className="font-display text-lg font-bold text-brand-700">{opt.label}</div>
                    <div className="text-xs text-ink-soft">{opt.description}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-semibold text-ink-muted uppercase tracking-wider">From</div>
                    <div className="font-display text-2xl font-extrabold text-ink leading-none">
                      {opt.sharingOptions[0].price}
                    </div>
                    <div className="text-[10px] text-ink-muted">per person</div>
                  </div>
                </div>

                {/* Sharing prices */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5">
                  {opt.sharingOptions.map((sharing, j) => (
                    <div
                      key={j}
                      className="text-center py-3 px-4 rounded-xl border border-cream-200 bg-cream-50"
                    >
                      <div className="text-xs font-semibold text-ink-muted uppercase tracking-wider mb-1">
                        {sharing.label}
                      </div>
                      <div className="font-display text-xl font-extrabold text-ink">
                        {sharing.price}
                      </div>
                      <div className="text-[10px] text-ink-muted">per person</div>
                    </div>
                  ))}
                </div>

                {/* Hotels for this Maktab */}
                <div className="px-5 pb-5 pt-1 border-t border-cream-200">
                  <div className="text-[10px] font-semibold tracking-[0.1em] uppercase text-ink-muted mb-2 mt-3">
                    Accommodation
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-ink-soft">
                    {opt.hotels.map((h, k) => (
                      <div key={k} className="flex items-center gap-1.5">
                        <Building2 className="w-3.5 h-3.5 text-brand-600" />
                        <span>
                          <span className="font-semibold text-ink">{h.city}:</span> {h.stars}★ {h.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                
              </div>
            ))}
          </div>
        )}

        {/* Sharing options (for packages without Maktab options) */}
        {!pkg.maktabOptions && pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
          <div className={`mb-6 ${
            pkg.sharingOptions.length === 1
              ? "flex justify-center"
              : pkg.sharingOptions.length === 2
              ? "grid grid-cols-1 sm:grid-cols-2 gap-3"
              : "grid grid-cols-1 sm:grid-cols-3 gap-3"
          }`}>
            {pkg.sharingOptions.map((opt, i) => (
              <div
                key={i}
                className={`text-center py-3 px-4 rounded-xl border border-cream-200 bg-cream-50 ${
                  pkg.sharingOptions!.length === 1 ? "w-full sm:w-1/2 max-w-md" : ""
                }`}
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
            <span className="text-ink-muted mx-1">→</span>
            <span>{pkg.departFrom}</span>
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

        {/* Hotels row (non-Hajj packages only) */}
        {!pkg.maktabOptions && pkg.hotels && pkg.hotels.length > 0 && (
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

        {/* Itinerary section (multi-stop Hajj packages) */}
        {pkg.itinerary && pkg.itinerary.length > 0 && (
          <div className="bg-white rounded-2xl border border-cream-200 p-5 md:p-6 mb-6">
            <h3 className="font-display text-base font-bold text-ink mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-600" />
              Itinerary
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pkg.itinerary.map((day, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-brand-700">{day.date}</div>
                    <div className="text-sm text-ink mt-0.5">{day.location}</div>
                  </div>
                </div>
              ))}
            </div>
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
        <div id="booking-form-section" className="grid lg:grid-cols-5 gap-8 mb-12 scroll-mt-24">
          <div className="lg:col-span-3">
            <ImageGallery images={pkg.gallery} alt={pkg.name} />
          </div>
          <div className="lg:col-span-2">
            <BookingForm pkg={packageForBooking} />
          </div>
        </div>

        {/* Tabs */}
        <PackageTabs pkg={pkg} />
      </div>
    </>
  );
}