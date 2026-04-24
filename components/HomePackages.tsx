"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PackageCard from "./PackageCard";
import { umrahPackages, hajjPackages, globalPackages } from "@/data/packages";

const tabs = [
  { key: "umrah", label: "Umrah", href: "/packages/umrah" },
  { key: "hajj", label: "Hajj", href: "/packages/hajj" },
  { key: "global", label: "Global", href: "/packages/global" },
] as const;

const featured = {
  umrah: umrahPackages.slice(0, 3),
  hajj: hajjPackages.slice(0, 3),
  global: globalPackages.slice(0, 3),
};

export default function HomePackages() {
  const [active, setActive] = useState<"umrah" | "hajj" | "global">("umrah");

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow">Our Packages</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">
              Explore Our Packages
            </h2>
            <p className="text-ink-soft mt-3 text-[17px] max-w-2xl">
              Carefully crafted packages designed to suit every budget and preference.
              All packages are ATOL protected and fully customisable.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === tab.key
                    ? "bg-brand-600 text-white shadow-soft"
                    : "bg-cream-100 text-ink-soft hover:bg-cream-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured[active].map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* View all */}
        <div className="mt-10 text-center">
          <Link
            href={tabs.find((t) => t.key === active)?.href || "/packages/umrah"}
            className="btn-primary !px-7 !py-3.5 text-base"
          >
            View All {tabs.find((t) => t.key === active)?.label} Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
