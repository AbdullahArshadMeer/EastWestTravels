import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  image?: string;
  eyebrow?: string;
};

export default function PageHero({ title, subtitle, breadcrumb = [], image = "/images/kaaba.webp", eyebrow }: Props) {
  return (
    <section className="relative overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-white/80 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {b.href ? <Link href={b.href} className="hover:text-white">{b.label}</Link> : <span className="text-white">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-xs font-semibold tracking-[0.14em] uppercase mb-5">{eyebrow}</span>
          )}
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.05]">{title}</h1>
          {subtitle && <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
