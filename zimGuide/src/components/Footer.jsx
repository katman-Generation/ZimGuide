import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-40 bg-[var(--color-primary)] text-white">

      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <h3 className="text-xl mb-6 tracking-wide text-[var(--color-accent)]">
            ZimGuide
          </h3>

          <p className="text-white/80 leading-relaxed text-sm">
            Curated private journeys across Zimbabwe.
            Thoughtfully designed experiences inspired by nature,
            culture and authentic connection.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-6 text-[var(--color-accent)]">
            Explore
          </h4>

          <div className="flex flex-col gap-4 text-sm text-white/80">
            <Link to="/destinations" className="hover:text-[var(--color-accent)] transition">
              Destinations
            </Link>
            <Link to="/blog" className="hover:text-[var(--color-accent)] transition">
              Journal
            </Link>
            <Link to="/contact" className="hover:text-[var(--color-accent)] transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="uppercase tracking-widest text-xs mb-6 text-[var(--color-accent)]">
            Connect
          </h4>

          <div className="flex flex-col gap-4 text-sm text-white/80">
            <a
              href="https://wa.me/263785080894"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:tkatema5@gmail.com"
              className="hover:text-[var(--color-accent)] transition"
            >
              Email
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs tracking-widest text-white/60">
        © {new Date().getFullYear()} ZimGuide. Crafted with care in Zimbabwe.
      </div>

    </footer>
  );
}

