"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight, Star, Plane, Calendar, Clock, Building2,
  ChevronLeft, ChevronRight as ChevronR, User, Mail, Phone, Users,
  Send, ShieldCheck, MapPin,
} from "lucide-react";
import { findPackage } from "@/data/packages";

const tabKeys = ["overview", "hotels", "transport", "pricing", "ziyarah-makkah", "ziyarah-madinah"] as const;
const tabLabels: Record<string, string> = {
  overview: "Overview",
  hotels: "Hotels",
  transport: "Transportation",
  pricing: "Pricing",
  "ziyarah-makkah": "Makkah Ziyarah",
  "ziyarah-madinah": "Madinah Ziyarah",
};

export default function PackageDetailPage() {
  const params = useParams();
  const category = params.category as string;
  const id = params.id as string;
  const pkg = findPackage(category, id);

  const [activeTab, setActiveTab] = useState<string>("overview");
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", travelers: "1", sharing: "" });
  const [sent, setSent] = useState(false);

  if (!pkg) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <h1 className="font-display text-4xl font-bold text-ink mb-4">Package not found</h1>
        <p className="text-ink-soft mb-8">The package you&#39;re looking for doesn&#39;t exist or has been removed.</p>
        <Link href={`/packages/${category}`} className="btn-primary">View All Packages</Link>
      </div>
    );
  }

  const gallery = pkg.gallery || [pkg.image];
  const categoryLabel = category.charAt(0).toUpperCase() + category.slice(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = [
      `📦 Package Booking Request`,
      ``,
      `Package: ${pkg.name}`,
      `Category: ${categoryLabel}`,
      `Price: ${pkg.startFrom}/person`,
      ``,
      `👤 Name: ${form.name}`,
      `📧 Email: ${form.email}`,
      `📱 Phone: ${form.phone}`,
      `👥 Travelers: ${form.travelers}`,
      form.sharing ? `🏨 Sharing: ${form.sharing}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/447814678543?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const prevImage = () => setGalleryIdx((p) => (p - 1 + gallery.length) % gallery.length);
  const nextImage = () => setGalleryIdx((p) => (p + 1) % gallery.length);

  const activeTabs = tabKeys.filter((t) => {
    if (t === "hotels" && (!pkg.hotels || pkg.hotels.length === 0)) return false;
    if (t === "transport" && !pkg.transport) return false;
    if (t === "ziyarah-makkah" && (!pkg.ziyarahMakkah || pkg.ziyarahMakkah.length === 0)) return false;
    if (t === "ziyarah-madinah" && (!pkg.ziyarahMadinah || pkg.ziyarahMadinah.length === 0)) return false;
    return true;
  });

  return (
    <div className="bg-white">
      <div className="bg-cream-50 border-b border-cream-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-ink-muted">
            <Link href="/" className="hover:text-brand-700">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={`/packages/${category}`} className="hover:text-brand-700">{categoryLabel} Packages</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-ink font-medium truncate max-w-[200px]">{pkg.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-ink leading-tight">{pkg.name}</h1>
            <div className="h-1 w-16 bg-brand-600 rounded-full mt-3" />
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: pkg.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm text-ink-soft">{pkg.reviews} Customer Reviews</span>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-sm text-ink-muted">Start From</div>
            <div className="font-display text-3xl md:text-4xl font-extrabold text-ink">
              {pkg.startFrom}
              {pkg.startFrom !== "On request" && (
                <span className="text-base font-normal text-ink-muted">/Person</span>
              )}
            </div>
          </div>
        </div>

        {pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
            {pkg.sharingOptions.map((opt, i) => (
              <div
                key={i}
                className="text-center py-3 px-4 rounded-xl border border-cream-200 bg-cream-50 hover:border-brand-600 transition-colors cursor-default"
              >
                <span className="text-sm text-ink-soft">{opt.label} </span>
                <span className="text-sm font-bold text-ink">{opt.price}</span>
                <span className="text-sm text-ink-muted">/person</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-3">
          <div className="flex items-center gap-1.5">
            <Plane className="w-4 h-4 text-brand-600" />
            <span>{pkg.departFrom}</span>
            <span className="mx-1">→</span>
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

        {pkg.hotels && pkg.hotels.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-6">
            {pkg.hotels.map((h, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-brand-600" />
                <span>
                  {h.city}: {h.stars}★ {h.name}
                  {h.meal ? ` (${h.meal})` : ""}
                </span>
              </div>
            ))}
          </div>
        )}

        {pkg.badge && (
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 border border-amber-200 mb-8">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500 flex-shrink-0" />
            <span className="text-sm font-semibold text-amber-800">{pkg.badge}</span>
          </div>
        )}

        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="relative h-[360px] md:h-[440px] rounded-2xl overflow-hidden bg-cream-100">
              <Image
                src={gallery[galleryIdx]}
                alt={`${pkg.name} image ${galleryIdx + 1}`}
                fill
                className="object-cover"
              />
              {gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-soft hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5 text-ink" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-soft hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronR className="w-5 h-5 text-ink" />
                  </button>
                </>
              )}
            </div>

            {gallery.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setGalleryIdx(i)}
                    className={`relative h-16 w-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                      i === galleryIdx ? "border-brand-600" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card sticky top-24">
              <h3 className="font-display text-xl font-bold text-ink mb-2">
                Book {pkg.name}
              </h3>
              <p className="text-sm text-ink-soft mb-6">
                For assistance, email us, message us on WhatsApp, or complete the form below. Our team will get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <FormInput icon={User} placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <FormInput icon={Mail} placeholder="Enter your email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <FormInput icon={Phone} placeholder="+44 000 0000000" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
                <FormInput icon={Users} placeholder="Number of travelers" type="number" value={form.travelers} onChange={(v) => setForm({ ...form, travelers: v })} />

                {pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-muted px-1">Select Sharing Type</div>
                    <div className="grid gap-2">
                      {pkg.sharingOptions.map((opt, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setForm({ ...form, sharing: opt.label })}
                          className={`flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all ${
                            form.sharing === opt.label
                              ? "border-brand-600 bg-brand-50 shadow-soft"
                              : "border-cream-200 bg-white hover:border-brand-300"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                              form.sharing === opt.label ? "border-brand-600" : "border-ink-line"
                            }`}>
                              {form.sharing === opt.label && (
                                <div className="w-2.5 h-2.5 rounded-full bg-brand-600" />
                              )}
                            </div>
                            <span className="text-sm font-semibold text-ink">{opt.label}</span>
                          </div>
                          <span className="text-sm font-bold text-brand-700">{opt.price}<span className="text-ink-muted font-normal">/person</span></span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-brand-600 text-white font-bold text-sm hover:bg-brand-700 transition-all hover:shadow-soft flex items-center justify-center gap-2"
                >
                  {sent ? "Opening WhatsApp…" : "Book Package"}
                  {!sent && <Send className="w-4 h-4" />}
                </button>
              </form>

              <div className="flex items-center gap-2 mt-4 text-xs text-ink-muted">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
                ATOL Protected · Your money is safe
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {activeTabs.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTab(t)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all border ${
                  activeTab === t
                    ? "bg-brand-600 text-white border-brand-600"
                    : "bg-white text-ink-soft border-cream-200 hover:border-brand-600 hover:text-brand-700"
                }`}
              >
                {tabLabels[t]}
              </button>
            ))}
          </div>

          <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6 md:p-8">
            {activeTab === "overview" && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-3">Overview</h4>
                <p className="text-ink-soft leading-relaxed">{pkg.description}</p>
                {pkg.features.length > 0 && (
                  <div className="mt-6">
                    <h5 className="font-display text-base font-bold text-ink mb-3">What&#39;s Included</h5>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {pkg.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-1.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {activeTab === "hotels" && pkg.hotels && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-4">Hotel Accommodation</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {pkg.hotels.map((h, i) => (
                    <div key={i} className="bg-white rounded-xl p-5 border border-cream-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-brand-600" />
                        <span className="font-bold text-ink">{h.city}</span>
                      </div>
                      <div className="text-sm text-ink-soft mb-1">{h.name}</div>
                      <div className="flex items-center gap-1 text-sm">
                        {Array.from({ length: h.stars }).map((_, j) => (
                          <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      {h.meal && <div className="text-xs text-ink-muted mt-2">Meal Plan: {h.meal}</div>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "transport" && pkg.transport && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-3">Transportation</h4>
                <p className="text-ink-soft leading-relaxed">{pkg.transport}</p>
              </div>
            )}

            {activeTab === "pricing" && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-4">Pricing</h4>
                {pkg.sharingOptions && pkg.sharingOptions.length > 0 ? (
                  <div className="space-y-3">
                    {pkg.sharingOptions.map((opt, i) => (
                      <div key={i} className="flex items-center justify-between bg-white rounded-xl p-4 border border-cream-200">
                        <span className="text-ink font-medium">{opt.label}</span>
                        <span className="font-display text-xl font-bold text-ink">{opt.price}<span className="text-sm font-normal text-ink-muted">/person</span></span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-ink-soft">Contact us for a custom quote tailored to your group size and preferences.</p>
                )}
                <p className="text-xs text-ink-muted mt-4">All prices are per person and subject to availability. Terms and conditions apply.</p>
              </div>
            )}

            {activeTab === "ziyarah-makkah" && pkg.ziyarahMakkah && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-3">Makkah Ziyarah</h4>
                <ul className="space-y-2">
                  {pkg.ziyarahMakkah.map((z, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                      <MapPin className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "ziyarah-madinah" && pkg.ziyarahMadinah && (
              <div>
                <h4 className="font-display text-lg font-bold text-ink mb-3">Madinah Ziyarah</h4>
                <ul className="space-y-2">
                  {pkg.ziyarahMadinah.map((z, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-soft">
                      <MapPin className="w-4 h-4 text-brand-600 mt-0.5 flex-shrink-0" />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function FormInput({
  icon: Icon,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}: {
  icon: React.ElementType;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-cream-200 bg-white focus-within:border-brand-500 transition-colors">
      <Icon className="w-4 h-4 text-ink-muted flex-shrink-0" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={type === "number" ? 1 : undefined}
        className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none"
      />
    </div>
  );
}