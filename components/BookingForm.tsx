"use client";
import { useState } from "react";
import { User, Mail, Phone, Users, CircleDot, Send } from "lucide-react";
import type { Package } from "@/data/packages";

export default function BookingForm({ pkg }: { pkg: Package }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "1",
    sharing: pkg.sharingOptions?.[0]?.label || "",
  });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const msg = [
      `📦 *Package Booking Request*`,
      ``,
      `*Package:* ${pkg.name}`,
      `*Category:* ${pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}`,
      `*Price From:* ${pkg.startFrom}`,
      `*Dates:* ${pkg.dateRange}`,
      ``,
      `*Customer Details:*`,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Travelers: ${form.travelers}`,
      `Sharing: ${form.sharing}`,
    ].join("\n");

    window.open(
      `https://wa.me/923466953642?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-white rounded-2xl border border-cream-200 p-6 shadow-card">
      <h3 className="font-display text-xl font-bold text-ink mb-1">
        Book {pkg.name.length > 25 ? pkg.name.slice(0, 25) + "…" : pkg.name}
      </h3>
      <p className="text-[13px] text-ink-muted mb-6">
        For assistance, email us, message us on WhatsApp, or complete the form below.
        Our East West Travels team will get back to you shortly.
      </p>

      <form onSubmit={onSubmit} className="space-y-3.5">
        <FormField icon={User} placeholder="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
        <FormField icon={Mail} placeholder="Enter your email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
        <FormField icon={Phone} placeholder="+44 000 0000000" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />

        <div className="flex items-center gap-2 bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 focus-within:border-brand-500 transition-colors">
          <Users className="w-4 h-4 text-ink-muted flex-shrink-0" />
          <input
            type="number"
            min={1}
            max={50}
            value={form.travelers}
            onChange={(e) => setForm({ ...form, travelers: e.target.value })}
            className="w-full bg-transparent text-sm text-ink focus:outline-none"
            placeholder="Number of travelers"
          />
        </div>

        {pkg.sharingOptions && pkg.sharingOptions.length > 0 && (
          <div className="flex items-center gap-2 bg-cream-50 border border-cream-200 rounded-xl px-4 py-3 focus-within:border-brand-500 transition-colors">
            <CircleDot className="w-4 h-4 text-ink-muted flex-shrink-0" />
            <select
              value={form.sharing}
              onChange={(e) => setForm({ ...form, sharing: e.target.value })}
              className="w-full bg-transparent text-sm text-ink focus:outline-none"
            >
              {pkg.sharingOptions.map((opt, i) => (
                <option key={i} value={opt.label}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        )}

        <button
          type="submit"
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-all hover:shadow-soft mt-2"
        >
          {sent ? "Opening WhatsApp…" : "Book Package"}
          {!sent && <Send className="w-4 h-4" />}
        </button>
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
