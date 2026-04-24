"use client";
import { useState } from "react";
import { Check, Building2, Bus, Receipt, MapPin } from "lucide-react";
import type { Package } from "@/data/packages";

const tabDefs = [
  { key: "overview", label: "Overview", icon: Check },
  { key: "hotels", label: "Hotels", icon: Building2 },
  { key: "transport", label: "Transportation", icon: Bus },
  { key: "pricing", label: "Pricing", icon: Receipt },
  { key: "ziyarah-makkah", label: "Makkah Ziyarah", icon: MapPin },
  { key: "ziyarah-madinah", label: "Madinah Ziyarah", icon: MapPin },
] as const;

export default function PackageTabs({ pkg }: { pkg: Package }) {
  const [active, setActive] = useState("overview");

  // Filter tabs based on available data
  const visibleTabs = tabDefs.filter((t) => {
    if (t.key === "hotels" && (!pkg.hotels || pkg.hotels.length === 0)) return false;
    if (t.key === "ziyarah-makkah" && (!pkg.ziyarahMakkah || pkg.ziyarahMakkah.length === 0)) return false;
    if (t.key === "ziyarah-madinah" && (!pkg.ziyarahMadinah || pkg.ziyarahMadinah.length === 0)) return false;
    return true;
  });

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-8">
        {visibleTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              active === tab.key
                ? "bg-brand-600 text-white border-brand-600"
                : "bg-white text-ink-soft border-cream-200 hover:border-brand-300 hover:text-brand-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="min-h-[120px]">
        {active === "overview" && (
          <div>
            <p className="text-ink-soft leading-relaxed text-[15px]">{pkg.description}</p>
            <div className="mt-6">
              <h4 className="font-display text-lg font-bold text-ink mb-3">What&apos;s Included</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {pkg.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                    <Check className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {active === "hotels" && pkg.hotels && (
          <div className="space-y-4">
            {pkg.hotels.map((h, i) => (
              <div key={i} className="bg-cream-50 rounded-2xl border border-cream-200 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-brand-700 uppercase tracking-wider mb-1">{h.city}</div>
                    <div className="font-display text-lg font-bold text-ink">{h.name}</div>
                  </div>
                  <div className="flex items-center gap-1 bg-white rounded-lg px-2.5 py-1 border border-cream-200">
                    <Building2 className="w-3.5 h-3.5 text-brand-600" />
                    <span className="text-sm font-bold text-ink">{h.stars}★</span>
                  </div>
                </div>
                {h.meal && (
                  <div className="mt-2 text-sm text-ink-soft">
                    Meal plan: <span className="font-medium text-ink">{h.meal}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {active === "transport" && (
          <div>
            <p className="text-ink-soft leading-relaxed text-[15px]">
              {pkg.transport || "Ground transportation details will be provided upon booking. Contact us for specific transport arrangements."}
            </p>
          </div>
        )}

        {active === "pricing" && (
          <div>
            {pkg.sharingOptions && pkg.sharingOptions.length > 0 ? (
              <div className="space-y-3">
                {pkg.sharingOptions.map((opt, i) => (
                  <div key={i} className="flex items-center justify-between bg-cream-50 rounded-xl border border-cream-200 px-5 py-4">
                    <span className="font-medium text-ink">{opt.label}</span>
                    <span className="font-display text-xl font-bold text-brand-700">{opt.price}<span className="text-sm font-normal text-ink-muted">/person</span></span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-ink-soft">Pricing is available on request. Contact us for a personalised quote.</p>
            )}
            <p className="text-xs text-ink-muted mt-4">All prices are per person and subject to availability. Terms and conditions apply.</p>
          </div>
        )}

        {active === "ziyarah-makkah" && pkg.ziyarahMakkah && (
          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-3">Makkah Ziyarah Tour</h4>
            <div className="space-y-2">
              {pkg.ziyarahMakkah.map((z, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ink-soft bg-cream-50 rounded-xl border border-cream-200 px-4 py-3">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  {z}
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "ziyarah-madinah" && pkg.ziyarahMadinah && (
          <div>
            <h4 className="font-display text-lg font-bold text-ink mb-3">Madinah Ziyarah Tour</h4>
            <div className="space-y-2">
              {pkg.ziyarahMadinah.map((z, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-ink-soft bg-cream-50 rounded-xl border border-cream-200 px-4 py-3">
                  <MapPin className="w-4 h-4 text-brand-600 flex-shrink-0" />
                  {z}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
