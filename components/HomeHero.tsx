"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Users, Award } from "lucide-react";

const slides = [
  { src: "/images/kaaba.webp", alt: "Kaaba in Makkah" },
  { src: "/images/madinah.webp", alt: "Madinah" },
  { src: "/images/mina.webp", alt: "Mina" },
];

export default function HomeHero() {
  const [current, setCurrent] = useState(0);
  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    const id = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[620px] overflow-hidden -mt-20">
      {slides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-[1400ms] ease-out ${i === current ? "opacity-100" : "opacity-0"}`}>
          <Image src={s.src} alt={s.alt} fill className="object-cover" priority={i === 0} />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink/80" />

      <div className="relative h-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-xs font-semibold tracking-[0.14em] uppercase mb-6 animate-fadeIn">
              <ShieldCheck className="w-3.5 h-3.5" /> ATOL Protected · Since 2015
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.02] animate-fadeIn delay-1">
              Your Sacred Journey,<br />
              <span className="text-brand-300">thoughtfully arranged.</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl leading-relaxed animate-fadeIn delay-2">
              Hajj, Umrah, and world tours from the UK — flights, visas, hotels, and transport handled
              by a team that has guided more than five thousand pilgrims since 2015.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 animate-fadeIn delay-3">
              <Link href="/packages/umrah" className="btn-primary !px-7 !py-3.5 text-base">
                Explore Umrah <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/packages/hajj" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 backdrop-blur border border-white/25 text-white font-semibold text-base hover:bg-white/20 transition-all">
                View Hajj Packages
              </Link>
            </div>
          </div>

          {/* Trust strip */}
          <div className="mt-19 lg:mt-24 animate-fadeIn delay-4">
            <div className="inline-flex flex-wrap items-center gap-x-10 gap-y-4 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur border border-white/15">
              {[
                { icon: Users, val: "5,000+", lab: "Pilgrims Served" },
                { icon: Award, val: "11 Years", lab: "Trusted Service" },
                { icon: ShieldCheck, val: "ATOL", lab: "Fully Protected" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/20 -ml-10 mr-0" />}
                  <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-brand-300" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white leading-none">{s.val}</div>
                    <div className="text-[11px] text-white/70 tracking-wider uppercase">{s.lab}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === current ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/70"}`} />
        ))}
      </div>
    </section>
  );
}
