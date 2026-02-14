import { destinations } from "../data/destinations";
import { Link } from "react-router-dom";

export default function Destinations() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl mb-12">Destinations</h1>

      <div className="grid md:grid-cols-3 gap-12">
        {destinations.map((item) => (
          <Link key={item.id} to={`/destinations/${item.id}`}>
            <div>
              <img src={item.image} className="mb-4" />
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
