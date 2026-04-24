import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

export default function CTABanner({
  title = "Are You Ready to Travel?",
  subtitle = "Whether it's your Hajj, Umrah, or a global adventure, East West Travels ensures a seamless, safe, and memorable experience. Focus on devotion or exploration while we handle every detail.",
  ctaLabel = "Book Now",
  ctaTo = "/contact",
}: Props) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] min-h-[340px] pattern-star">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(/images/kaaba.webp)" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/90 via-brand-800/75 to-brand-900/60" />
          <div className="relative z-10 p-10 md:p-16 max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-5">{title}</h2>
            <p className="text-white/85 text-[16px] leading-relaxed mb-8">{subtitle}</p>
            <Link href={ctaTo} className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white text-brand-800 font-bold text-base hover:bg-brand-50 transition-all hover:shadow-lift">
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}