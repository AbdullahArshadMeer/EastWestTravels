"use client";
import { useState, useMemo } from "react";
import { User, Mail, Phone, Users, Send, ShieldCheck, FileText, Tent, BedDouble } from "lucide-react";
import type { Package, MaktabOption, SharingOption } from "@/data/packages";

// Helper: parse "£6,750" → 6750
function parsePrice(str: string): number {
  return parseInt(str.replace(/[£,\s]/g, "")) || 0;
}

export default function BookingForm({ pkg }: { pkg: Package }) {
  // Default to second Maktab tier (D Plus = cheaper) when available
  const [selectedMaktabIdx, setSelectedMaktabIdx] = useState(
    pkg.maktabOptions ? pkg.maktabOptions.length - 1 : 0
  );

  // Active sharing options (depend on Maktab tier for Hajj, or pkg.sharingOptions for others)
  const activeMaktab: MaktabOption | undefined = pkg.maktabOptions?.[selectedMaktabIdx];
  const activeSharingOptions: SharingOption[] =
    activeMaktab?.sharingOptions || pkg.sharingOptions || [];

  // Base price = Quad Sharing (always the cheapest = the first option)
  const basePrice = activeSharingOptions[0] ? parsePrice(activeSharingOptions[0].price) : 0;
  const baseLabel = activeSharingOptions[0]?.label || "Base";

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    sharingIdx: 0, // 0 = base (Quad), 1 = Triple, 2 = Double
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Live total calculation
  const calculation = useMemo(() => {
    const travelers = parseInt(form.travelers) || 1;
    const selectedSharing = activeSharingOptions[form.sharingIdx];
    const selectedPrice = selectedSharing ? parsePrice(selectedSharing.price) : basePrice;
    const upgradePerPerson = selectedPrice - basePrice;

    const baseTotal = basePrice * travelers;
    const upgradeTotal = upgradePerPerson * travelers;
    const total = baseTotal + upgradeTotal;

    return {
      travelers,
      basePrice,
      baseTotal,
      upgradePerPerson,
      upgradeTotal,
      total,
      selectedSharingLabel: selectedSharing?.label || baseLabel,
    };
  }, [form.travelers, form.sharingIdx, basePrice, baseLabel, activeSharingOptions]);

  // Reset sharing selection when Maktab changes
  const handleMaktabChange = (idx: number) => {
    setSelectedMaktabIdx(idx);
    setForm((f) => ({ ...f, sharingIdx: 0 })); // Reset to Quad
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Save to database
    try {
      await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "package",
          customerName: form.name,
          customerEmail: form.email,
          customerPhone: form.phone,
          passengers: calculation.travelers,
          notes: form.notes,
          packageId: pkg.id,
          packageName: activeMaktab
            ? `${pkg.name} (${activeMaktab.label})`
            : pkg.name,
          packageCategory: pkg.category,
          sharingType: calculation.selectedSharingLabel,
          finalPrice: calculation.total,
        }),
      });
    } catch (err) {
      console.error("Booking save failed:", err);
      // Continue to WhatsApp even if DB save fails
    }

    // Build WhatsApp message
    const msgLines = [
      `📦 *Package Booking Request*`,
      ``,
      `*Package:* ${pkg.name}`,
      `*Category:* ${pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}`,
      `*Dates:* ${pkg.dateRange}`,
      `*Departure:* ${pkg.departFrom} → ${pkg.arriveTo}`,
    ];

    if (activeMaktab) {
      msgLines.push(``);
      msgLines.push(`*Maktab Tier:* ${activeMaktab.label}`);
      msgLines.push(`_${activeMaktab.description}_`);
    }

    msgLines.push(``);
    msgLines.push(`*Room Type:* ${calculation.selectedSharingLabel}`);
    msgLines.push(`*Travelers:* ${calculation.travelers}`);
    msgLines.push(``);
    msgLines.push(`💰 *Price Breakdown:*`);
    msgLines.push(`Base (${baseLabel}): £${calculation.baseTotal.toLocaleString()}`);
    if (calculation.upgradeTotal > 0) {
      msgLines.push(`Upgrade fee: +£${calculation.upgradeTotal.toLocaleString()}`);
    }
    msgLines.push(`*Total: £${calculation.total.toLocaleString()}*`);
    msgLines.push(``);
    msgLines.push(`*Customer Details:*`);
    msgLines.push(`Name: ${form.name}`);
    msgLines.push(`Email: ${form.email}`);
    msgLines.push(`Phone: ${form.phone}`);
    if (form.notes) {
      msgLines.push(``);
      msgLines.push(`*Notes:* ${form.notes}`);
    }

    const msg = msgLines.join("\n");

    window.open(
      `https://wa.me/447886857459?text=${encodeURIComponent(msg)}`,
      "_blank"
    );

    setSent(true);
    setSubmitting(false);
    setTimeout(() => setSent(false), 4000);
  };

  // Truncate package name for header
  const headerName = pkg.name.length > 30 ? pkg.name.slice(0, 30) + "…" : pkg.name;

  return (
    <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
      <h3 className="font-display text-xl font-bold text-ink mb-1">
        Book {headerName}
      </h3>
      <p className="text-[13px] text-ink-muted mb-5">
        Complete the form below. Our East West Travels team will get back to you shortly via WhatsApp.
      </p>

      <form onSubmit={onSubmit} className="space-y-3.5">
        {/* Personal details */}
        <FormField icon={User} placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
        <FormField icon={Mail} placeholder="Enter your email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
        <FormField icon={Phone} placeholder="+447886857459" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />

        {/* Number of travelers */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-1.5 block">
            Number of Travelers
          </label>
          <div className="flex items-center gap-2 bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 focus-within:border-brand-500 transition-colors">
            <Users className="w-4 h-4 text-ink-muted flex-shrink-0" />
            <input
              type="number"
              min={1}
              max={50}
              required
              value={form.travelers}
              onChange={(e) => setForm({ ...form, travelers: e.target.value })}
              className="w-full bg-transparent text-sm text-ink focus:outline-none"
            />
          </div>
        </div>

        {/* Maktab selector — Hajj packages only */}
        {pkg.maktabOptions && pkg.maktabOptions.length > 0 && (
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-1.5 block flex items-center gap-1.5">
              <Tent className="w-3.5 h-3.5 text-brand-600" />
              Maktab Tier
            </label>
            <div className="grid grid-cols-2 gap-2">
              {pkg.maktabOptions.map((opt, i) => {
                const isActive = selectedMaktabIdx === i;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleMaktabChange(i)}
                    className={`text-center py-2.5 px-2 rounded-xl border-2 transition-all ${
                      isActive
                        ? "border-brand-600 bg-brand-50"
                        : "border-cream-200 bg-white hover:border-brand-300"
                    }`}
                  >
                    <div className={`text-xs font-bold ${isActive ? "text-brand-700" : "text-ink"}`}>
                      {opt.label}
                    </div>
                    <div className={`text-[14px] font-extrabold mt-0.5 ${isActive ? "text-brand-700" : "text-ink"}`}>
                      {opt.sharingOptions[0].price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Room type — base + upgrade options */}
        {activeSharingOptions.length > 0 && (
          <div>
            <label className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-1.5 block flex items-center gap-1.5">
              <BedDouble className="w-3.5 h-3.5 text-brand-600" />
              Room Type
            </label>

            <div className="space-y-1.5">
              {activeSharingOptions.map((opt, i) => {
                const optPrice = parsePrice(opt.price);
                const upgradeFee = optPrice - basePrice;
                const isActive = form.sharingIdx === i;
                const isBase = i === 0;

                return (
                  <label
                    key={i}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                      isActive
                        ? "border-brand-600 bg-brand-50"
                        : "border-cream-200 bg-cream-50 hover:border-brand-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="sharing"
                      checked={isActive}
                      onChange={() => setForm({ ...form, sharingIdx: i })}
                      className="w-4 h-4 accent-brand-600 flex-shrink-0"
                    />
                    <div className="flex-1 flex items-center justify-between gap-2 min-w-0">
                      <div className="min-w-0">
                        <div className={`text-sm font-bold ${isActive ? "text-brand-700" : "text-ink"}`}>
                          {opt.label}
                        </div>
                        <div className="text-[11px] text-ink-muted">
                          £{optPrice.toLocaleString()}/person
                          {isBase && <span className="ml-1 text-green-700">· Base price</span>}
                        </div>
                      </div>
                      {!isBase && (
                        <span className={`text-[11px] font-bold whitespace-nowrap ${isActive ? "text-brand-700" : "text-amber-700"}`}>
                          +£{upgradeFee.toLocaleString()}/pp
                        </span>
                      )}
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* Notes */}
        <div>
          <label className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mb-1.5 block flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-brand-600" />
            Notes (optional)
          </label>
          <textarea
            rows={2}
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Special requests, dietary requirements..."
            className="w-full bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-muted focus:outline-none focus:border-brand-500 transition-colors resize-none"
          />
        </div>

        {/* Live price breakdown */}
        <div className="bg-brand-50 border border-brand-200 rounded-xl p-4 mt-2">
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <span className="text-ink-soft">
                Base ({baseLabel}) × {calculation.travelers}
              </span>
              <span className="font-semibold text-ink">£{calculation.baseTotal.toLocaleString()}</span>
            </div>
            {calculation.upgradeTotal > 0 && (
              <div className="flex justify-between">
                <span className="text-ink-soft">
                  Upgrade fee × {calculation.travelers}
                </span>
                <span className="font-semibold text-amber-700">
                  +£{calculation.upgradeTotal.toLocaleString()}
                </span>
              </div>
            )}
            <div className="border-t border-brand-200 pt-2 mt-2 flex items-end justify-between">
              <span className="text-sm font-bold text-ink">Total</span>
              <span className="font-display text-2xl font-extrabold text-brand-700 leading-none">
                £{calculation.total.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-all hover:shadow-soft mt-2 disabled:opacity-50"
        >
          {submitting ? "Sending..." : sent ? "Opening WhatsApp…" : "Book Package"}
          {!submitting && !sent && <Send className="w-4 h-4" />}
        </button>

        <div className="flex items-center justify-center gap-1.5 text-[11px] text-ink-muted pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-700" />
          ATOL Protected · Secure booking · No payment now
        </div>
      </form>
    </div>
  );
}

function FormField({
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
    <div className="flex items-center gap-2 bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 focus-within:border-brand-500 transition-colors">
      <Icon className="w-4 h-4 text-ink-muted flex-shrink-0" />
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-transparent text-sm text-ink placeholder-ink-muted focus:outline-none"
      />
    </div>
  );
}