import { destinations } from "../data/destinations";
import { Link } from "react-router-dom";

export default function DestinationsPreview() {
  return (
    <section id="destinations" className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="font-[var(--font-heading)] text-4xl mb-16 text-center">
        Signature Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {destinations.map((item) => (
          <Link key={item.id} to={`/destinations/${item.id}`}>
            <div className="group">
              <img
                src={item.image}
                alt={item.name}
                className="mb-6 h-64 w-full object-cover"
              />
              <h3 className="font-[var(--font-heading)] text-xl group-hover:text-[var(--color-champagne)] transition">
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
