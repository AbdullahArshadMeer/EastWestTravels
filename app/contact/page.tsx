"use client";
import { useState } from "react";
import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", pkg: "", message: "" });
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const t = encodeURIComponent(
      `New Enquiry\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPackage: ${form.pkg || "General enquiry"}\n\nMessage:\n${form.message}`
    );
    window.open(`https://wa.me/447886857459?text=${t}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's plan your journey"
        subtitle="WhatsApp us or fill in the form below. Our Stoke-On-Trent team is here Monday to Saturday."
        breadcrumb={[{ label: "Contact" }]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <div className="bg-cream-50 rounded-3xl border border-cream-200 p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-ink mb-2">Send us an enquiry</h2>
              <p className="text-sm text-ink-muted mb-8">We reply within 24 hours (usually much faster).</p>
              <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
                <Input label="Full Name *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                <Input label="Email *" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                <Input label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />

                <div className="bg-white border border-cream-200 rounded-xl px-4 py-2.5 focus-within:border-brand-500 transition-colors">
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-muted mb-1">Package</label>
                  <select value={form.pkg} onChange={(e) => setForm({ ...form, pkg: e.target.value })} className="w-full bg-transparent text-sm text-ink focus:outline-none">
                    <option value="">Select a package…</option>
                    <option>Hajj 2026 — Standard</option>
                    <option>Hajj 2026 — Premium</option>
                    <option>Hajj 2026 — VIP</option>
                    <option>Umrah — Economy</option>
                    <option>Umrah — Standard</option>
                    <option>Umrah — Deluxe</option>
                    <option>Global Tour — Turkey</option>
                    <option>Global Tour — Dubai</option>
                    <option>Global Tour — Custom</option>
                    <option>Other / Not sure yet</option>
                  </select>
                </div>

                <div className="sm:col-span-2 bg-white border border-cream-200 rounded-xl px-4 py-2.5 focus-within:border-brand-500 transition-colors">
                  <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-muted mb-1">Your Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your plans — dates, group size, preferences…" className="w-full bg-transparent text-sm text-ink placeholder-ink-muted/70 focus:outline-none resize-none" />
                </div>

                <div className="sm:col-span-2 flex flex-wrap items-center gap-3">
                  <button type="submit" className="btn-primary !px-7 !py-3.5 text-base">
                    {sent ? "Opening WhatsApp…" : "Send Enquiry"} {!sent && <Send className="w-4 h-4" />}
                  </button>
                  <a href="https://wa.me/447886857459" target="_blank" rel="noopener noreferrer" className="btn-ghost !px-7 !py-3.5 text-base">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={MessageCircle} title="WhatsApp Us">
              <a href="https://wa.me/447814678543" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-700">07814 678 543</a>
              <a href="https://wa.me/447886857459" target="_blank" rel="noopener noreferrer" className="block hover:text-brand-700 mt-1">07886 857 459</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href="mailto:info@eastweststoke.co.uk" className="block hover:text-brand-700">info@eastweststoke.co.uk</a>
            </InfoCard>
            <InfoCard icon={MapPin} title="Visit Us">East West Travels<br />(Stoke-On-Trent) Ltd<br /> 1 Beresford Street Stoke On Trent, United Kingdom ST4 2EX</InfoCard>
            <InfoCard icon={Clock} title="Opening Hours">Mon – Fri: 10am – 6pm<br />Sat: 10am – 3pm<br />Sun: Closed</InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div className="bg-white border border-cream-200 rounded-xl px-4 py-2.5 focus-within:border-brand-500 transition-colors">
      <label className="block text-[11px] font-semibold tracking-[0.1em] uppercase text-ink-muted mb-1">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)} className="w-full bg-transparent text-sm text-ink focus:outline-none" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-cream-50 rounded-2xl border border-cream-200 p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center"><Icon className="w-5 h-5 text-white" /></div>
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
      </div>
      <div className="text-sm text-ink-soft leading-relaxed">{children}</div>
    </div>
  );
}