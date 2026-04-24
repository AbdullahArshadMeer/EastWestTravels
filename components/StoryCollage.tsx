import Image from "next/image";
import Link from "next/link";
import { Compass, Tag, ArrowRight } from "lucide-react";

export default function StoryCollage() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Collage */}
          <div className="relative h-[520px] md:h-[600px]">
            <div className="absolute top-0 left-0 w-[56%] h-[65%] rounded-[180px] overflow-hidden shadow-lift">
              <Image src="/images/kaaba.webp" alt="Kaaba" fill className="object-cover" />
            </div>
            <div className="absolute top-[22%] right-0 w-[52%] h-[55%] rounded-[180px] overflow-hidden shadow-lift">
              <Image src="/images/madinah.webp" alt="Madinah" fill className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-[14%] w-[42%] h-[42%] rounded-[160px] overflow-hidden shadow-lift ring-8 ring-white">
              <Image src="/images/kaaba2.webp" alt="Kaaba interior" fill className="object-cover" />
            </div>
            <div className="absolute top-[35%] left-[52%] w-3 h-3 rounded-full bg-brand-600" />
          </div>
          {/* Text */}
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-ink leading-[1.08] tracking-tight mb-6">
              From Pilgrimage<br />to Worldwide Tours
            </h2>
            <p className="text-ink-soft text-[17px] leading-relaxed mb-5">
              At East West Travels, we make travel effortless and dependable. Whether you&#39;re
              booking a Hajj or Umrah package from the UK, or exploring worldwide destinations,
              we manage every detail for you.
            </p>
            <p className="text-ink-soft text-[17px] leading-relaxed mb-10">
              From flights and hotels to transport, visas, and guided tours, we provide clear
              choices, fair pricing, and real support from start to finish. Thousands of pilgrims
              trust our expertise to create seamless experiences — spiritual or leisure, always
              simple, safe, and memorable.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5 text-brand-700" />
                  <h4 className="font-semibold text-brand-700">Guided Pilgrimage &amp; Tours</h4>
                </div>
                <div className="p-5 rounded-2xl bg-cream-100 border border-cream-200">
                  <p className="text-sm text-ink-soft leading-relaxed">
                    A dedicated team focused on your Hajj and Umrah needs, guiding you step-by-step
                    through ritual, travel, and accommodation. We also offer curated global tours.
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="w-5 h-5 text-brand-700" />
                  <h4 className="font-semibold text-brand-700">Honest Pricing</h4>
                </div>
                <div className="p-5 rounded-2xl bg-cream-100 border border-cream-200">
                  <p className="text-sm text-ink-soft leading-relaxed">
                    All packages come with transparent pricing — no hidden fees, no surprises.
                    Just honest, easy-to-understand costs for every traveller.
                  </p>
                </div>
              </div>
            </div>
            <Link href="/about" className="btn-primary !px-7 !py-3.5 text-base mt-8">
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}