"use client";
import { useState } from "react";
import { MapPin, Calendar, Users, Mail, Send } from "lucide-react";

export default function QuoteForm() {
  const [data, setData] = useState({ from: "", to: "", date: "", travelers: "", email: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = encodeURIComponent(
      `Travel Quote\nFrom: ${data.from}\nTo: ${data.to}\nDate: ${data.date}\nTravelers: ${data.travelers}\nEmail: ${data.email}`
    );
    window.open(`https://wa.me/447814678543?text=${t}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="relative -mt-16 md:-mt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-lift border border-cream-200 p-6 md:p-8">
          <div className="mb-5">
            <h3 className="font-display text-xl md:text-2xl font-bold text-ink">Get Your Travel Quote Instantly</h3>
            <p className="text-sm text-ink-muted mt-1">Plan your journey in seconds with a quick enquiry.</p>
          </div>
          <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
            <Field icon={MapPin} label="From">
              <input type="text" placeholder="Origin" value={data.from} onChange={(e) => setData({ ...data, from: e.target.value })} className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none" />
            </Field>
            <Field icon={MapPin} label="To">
              <input type="text" placeholder="Destination" value={data.to} onChange={(e) => setData({ ...data, to: e.target.value })} className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none" />
            </Field>
            <Field icon={Calendar} label="Date">
              <input type="date" value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} className="w-full bg-transparent text-sm text-ink focus:outline-none" />
            </Field>
            <Field icon={Users} label="Travellers">
              <input type="number" min={1} placeholder="No. of people" value={data.travelers} onChange={(e) => setData({ ...data, travelers: e.target.value })} className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none" />
            </Field>
            <Field icon={Mail} label="Email">
              <input type="email" required placeholder="Your email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none" />
            </Field>
            <button type="submit" className="btn-primary !rounded-xl h-full">
              {sent ? "Sent!" : "Get Quote"} {!sent && <Send className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Field({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="bg-cream-50 border border-cream-200 rounded-xl px-4 py-2.5 focus-within:border-brand-500 transition-colors">
      <div className="flex items-center gap-2 mb-0.5">
        <Icon className="w-3.5 h-3.5 text-brand-700" />
        <span className="text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-muted">{label}</span>
      </div>
      {children}
    </div>
  );
}
