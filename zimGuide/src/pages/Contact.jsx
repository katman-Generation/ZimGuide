export default function Contact() {
  return (
    <section className="py-40 px-6 max-w-xl mx-auto text-center">
      <h1 className="font-[var(--font-heading)] text-4xl mb-10">
        Inquiries
      </h1>

      <p className="text-[var(--color-ivory)]/70 mb-12">
        Direct communication ensures clarity and discretion.
      </p>

      <div className="flex flex-col gap-6">

        <a
          href="https://wa.me/263785080894"
          target="_blank"
          className="border border-[var(--color-champagne)] text-[var(--color-champagne)] py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-champagne)] hover:text-black transition"
        >
          WhatsApp +263 78 508 0894
        </a>

        <a
          href="mailto:tkatema5@gmail.com"
          className="border border-[var(--color-champagne)] text-[var(--color-champagne)] py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-champagne)] hover:text-black transition"
        >
          Email tkatema5@gmail.com
        </a>

      </div>
    </section>
  );
}
