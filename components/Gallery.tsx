import Image from "next/image";

const images = [
  { src: "/images/kaaba.webp", alt: "Sacred sites", span: "col-span-2 row-span-1" },
  { src: "/images/madinah.webp", alt: "Kaaba during Hajj", span: "col-span-2 row-span-2" },
  { src: "/images/quba.jpg", alt: "Masjid an-Nabawi", span: "col-span-1 row-span-2" },
  { src: "/images/madinah2.jpg", alt: "Holy Mosque", span: "col-span-1 row-span-1" },
  { src: "/images/kaaba2.webp", alt: "Pilgrimage journey", span: "col-span-1 row-span-1" },
  { src: "/images/mina.webp", alt: "Sacred sites", span: "col-span-2 row-span-1" },
   
];
export default function Gallery() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="eyebrow">Our Gallery</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Explore Our Recent Gallery
          </h2>
          <p className="text-ink-soft mt-3 text-[15px]">
            Browse through moments of faith, comfort, and spirituality from our travellers&#39; experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[180px] gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}