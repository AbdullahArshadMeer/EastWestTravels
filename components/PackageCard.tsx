"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Star, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import type { Package } from "@/data/packages";

export default function PackageCard({ pkg }: { pkg: Package }) {
  const [showFeatures, setShowFeatures] = useState(false);
  const detailUrl = `/packages/${pkg.category}/${pkg.id}`;

  return (
    <div className="group bg-white rounded-2xl border border-cream-200 overflow-hidden hover:shadow-lift transition-all duration-300 flex flex-col">
      {/* Image section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          {pkg.badge && (
            <span className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-50/90 backdrop-blur-sm text-amber-800 text-[11px] font-bold tracking-wide">
              <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
              {pkg.badge}
            </span>
          )}
          {pkg.available && (
            <span className="px-3 py-1.5 rounded-lg bg-brand-600/90 backdrop-blur-sm text-white text-[11px] font-bold tracking-wide">
              Available
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
          <div>
            <div className="text-white font-display text-[15px] font-bold leading-tight">{pkg.country}</div>
            <div className="text-white/80 text-[12px] mt-0.5">
              {pkg.durationDays > 0 ? `${pkg.durationDays} Days` : "Custom Duration"}
            </div>
          </div>
          <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm rounded-lg px-2.5 py-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-white text-[12px] font-bold">{pkg.rating}.0</span>
            <span className="text-white/70 text-[11px]">({pkg.reviews})</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-display text-[17px] font-bold text-ink leading-snug mb-3 line-clamp-2">
          {pkg.name}
        </h3>

        {/* MAKTAB TIERS — Hajj packages with maktabOptions */}
        {pkg.maktabOptions && pkg.maktabOptions.length > 0 && (
          <div className={`grid gap-2 mb-4 ${pkg.maktabOptions.length === 2 ? "grid-cols-2" : "grid-cols-1"}`}>
            {pkg.maktabOptions.map((tier, i) => {
              const isFirst = i === 0; // Maktab A typically (premium)
              return (
                <div
                  key={i}
                  className={`text-center py-3 px-2 rounded-xl border-2 ${
                    isFirst
                      ? "border-amber-300 bg-amber-50/60"
                      : "border-brand-600/30 bg-brand-50/50"
                  }`}
                >
                  <div className={`text-[10px] font-bold uppercase tracking-wider leading-tight ${
                    isFirst ? "text-amber-800" : "text-brand-700"
                  }`}>
                    {tier.label}
                  </div>
                  <div className={`text-[18px] font-extrabold mt-1 ${
                    isFirst ? "text-amber-900" : "text-brand-700"
                  }`}>
                    {tier.sharingOptions[0].price}
                  </div>
                  <div className="text-[9px] text-ink-muted mt-0.5">from quad</div>
                </div>
              );
            })}
          </div>
        )}

        {/* SHARING OPTIONS — Umrah/Global packages with sharingOptions */}
        {!pkg.maktabOptions && pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
          <div className="grid grid-cols-3 gap-1.5 mb-4">
            {pkg.sharingOptions.map((opt, i) => (
              <div
                key={i}
                className="text-center py-2.5 px-1 rounded-xl border-2 border-brand-600/20 bg-brand-50/40"
              >
                <div className="text-[9px] font-bold text-ink-soft uppercase tracking-wider leading-tight">{opt.label}</div>
                <div className="text-[15px] font-extrabold text-brand-700 mt-1">{opt.price}</div>
              </div>
            ))}
          </div>
        )}

        {/* Route + details */}
        <div className="space-y-2.5 mb-4">
          {/* Flight route */}
          <div className="flex items-center gap-2 text-[13px]">
            <Image src="/images/airplane.png" alt="" width={18} height={18} className="object-contain flex-shrink-0" />
            <span className="font-bold text-ink whitespace-nowrap">{pkg.departFrom}</span>
            <span className="flex-1 relative mx-1">
              <span className="block border-t-2 border-dotted border-ink-soft/50" />
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src="/images/airplane.png" alt="" width={20} height={20} className="object-contain" />
              </span>
            </span>
            <span className="font-bold text-ink whitespace-nowrap">{pkg.arriveTo}</span>
          </div>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-[12px] text-ink-soft">
            <Calendar className="w-3.5 h-3.5 text-brand-600" />
            <span>{pkg.dateRange}</span>
          </div>

          {/* Duration + Airline */}
          <div className="flex items-center justify-between text-[12px] text-ink-soft">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-600" />
              <span>{pkg.durationDays > 0 ? `${pkg.durationDays} Days` : "Custom"}</span>
            </div>
            {pkg.airline && (
              <div className="flex items-center gap-1.5">
                <Image src="/images/airplane.png" alt="Airline" width={16} height={16} className="object-contain" />
                <span className="font-bold text-ink">{pkg.airline}</span>
              </div>
            )}
          </div>
        </div>

        {/* Expandable features */}
        <button
          onClick={() => setShowFeatures(!showFeatures)}
          className="flex items-center gap-1 text-[12px] font-semibold text-brand-700 hover:text-brand-800 mb-3 self-start transition-colors"
        >
          {showFeatures ? "Hide" : "View"} inclusions
          {showFeatures ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
        {showFeatures && (
          <ul className="mb-4 space-y-1.5 pl-1">
            {pkg.features.map((f, i) => (
              <li key={i} className="text-[12px] text-ink-soft flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {/* Price + CTA */}
        <div className="mt-auto pt-4 border-t border-cream-200">
          <div className="flex items-end justify-between mb-4">
            <div>
              <div className="text-[10px] font-semibold text-ink-muted tracking-wider uppercase">
                {pkg.maktabOptions ? "From (Maktab D Plus)" : "Start From"}
              </div>
              <div className="font-display text-[28px] font-extrabold text-ink leading-none mt-1">
                {pkg.startFrom}
              </div>
              {pkg.startFrom !== "On request" && (
                <div className="text-[11px] text-ink-muted mt-0.5">per person</div>
              )}
            </div>
            {pkg.popular && (
              <span className="px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 text-[10px] font-bold uppercase tracking-wider">
                Popular
              </span>
            )}
          </div>
          <Link
            href={detailUrl}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-all hover:shadow-soft"
          >
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}