const stats = [
  { value: "5K+", label: "Pilgrims Served" },
  { value: "95%", label: "Customer Satisfaction" },
  { value: "500+", label: "Tours Completed" },
  { value: "11Y", label: "Of Experience" },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 pattern-star overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:divide-x divide-white/20">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight">{s.value}</div>
              <div className="text-xs md:text-sm text-white/70 tracking-[0.14em] uppercase mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}