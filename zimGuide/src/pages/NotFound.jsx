import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="py-40 text-center">
      <h1 className="font-[var(--font-heading)] text-5xl mb-6">
        404
      </h1>

      <p className="mb-10 text-[var(--color-ivory)]/70">
        The page you’re looking for does not exist.
      </p>

      <Link
        to="/"
        className="border border-[var(--color-champagne)] text-[var(--color-champagne)] px-8 py-4 uppercase tracking-widest text-sm hover:bg-[var(--color-champagne)] hover:text-black transition"
      >
        Return Home
      </Link>
    </section>
  );
}
