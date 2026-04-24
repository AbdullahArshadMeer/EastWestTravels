const values = [
  { title: "Integrity", body: "Honesty and promise-keeping in every package." },
  { title: "Care", body: "We treat every trip as if it were our own — hassle-free pilgrimage and world tours." },
  { title: "Reliability", body: "Always on time and delivering as promised." },
  { title: "Clarity", body: "Plain language and transparent communication on pricing." },
  { title: "Respect", body: "We honour people, places, and time." },
  { title: "Stewardship", body: "Responsible handling of finances and personal data." },
];

export default function Values() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <span className="eyebrow">Our Values</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink tracking-tight">What we stand for</h2>
          <p className="text-ink-soft mt-4 text-[17px]">We follow simple principles to ensure excellence in every Hajj, Umrah, or global travel experience.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {values.map((v, i) => (
            <div key={i} className="relative pl-5">
              <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-brand-600" />
              <h3 className="font-display text-xl font-bold text-ink mb-1.5">{v.title}</h3>
              <p className="text-sm text-ink-soft leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
