"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageGallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setActive((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div>
      {/* Main image */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-cream-100">
        <Image
          src={images[active]}
          alt={`${alt} - Image ${active + 1}`}
          fill
          className="object-cover"
          priority
        />
        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-soft flex items-center justify-center text-ink hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow-soft flex items-center justify-center text-ink hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-3">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 transition-all ${
              i === active
                ? "ring-2 ring-brand-600 ring-offset-2"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image src={src} alt={`Thumbnail ${i + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
