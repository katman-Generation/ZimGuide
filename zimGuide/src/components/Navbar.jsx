import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-cream)]/95 backdrop-blur border-b border-[var(--color-primary)]/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-wide font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition"
        >
          ZimGuide
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide">

          <Link
            to="/destinations"
            className="hover:text-[var(--color-primary)] transition"
          >
            Destinations
          </Link>

          <Link
            to="/blog"
            className="hover:text-[var(--color-primary)] transition"
          >
            Journal
          </Link>

          <Link
            to="/contact"
            className="hover:text-[var(--color-primary)] transition"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="ml-4 bg-[var(--color-primary)] text-white px-6 py-3 text-xs uppercase tracking-widest rounded-full hover:bg-[var(--color-accent)] hover:text-black transition"
          >
            Plan Your Journey
          </Link>

        </nav>
      </div>
    </header>
  );
}
