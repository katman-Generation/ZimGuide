export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">

      <div className="absolute inset-0">
        <img
          src="/victoria-falls.jpg"
          alt="Victoria Falls"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl leading-tight mb-6">
          Zimbabwe. Experienced Without Compromise.
        </h1>

        <p className="text-lg text-[var(--color-ivory)]/80 mb-10">
          Private guidance. Seamless planning. Absolute peace of mind.
        </p>

        <button className="border border-[var(--color-champagne)] text-[var(--color-champagne)] px-10 py-4 tracking-widest uppercase text-sm hover:bg-[var(--color-champagne)] hover:text-black transition duration-500">
          Plan Your Private Experience
        </button>
      </div>
    </section>
  );
}
