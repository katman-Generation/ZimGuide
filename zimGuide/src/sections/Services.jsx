import itineraryImg from "../assets/itinerary.jpeg";
import hostImg from "../assets/host.jpeg";
import coordinationImg from "../assets/coordination.jpeg";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 max-w-6xl mx-auto">
      
      <h2 className="text-3xl md:text-4xl font-[var(--font-heading)] text-center mb-16">
        Our Services
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Service 1 */}
        <div className="group bg-[var(--color-ivory)]/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
          <div className="overflow-hidden">
            <img
              src={itineraryImg}
              alt="Private Itinerary Design"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="font-[var(--font-heading)] text-xl mb-4">
              Private Itinerary Design
            </h3>
            <p className="text-[var(--color-ivory)]/70 leading-relaxed">
              Tailored journeys designed around your pace, preferences, and
              personal standards of comfort.
            </p>
          </div>
        </div>

        {/* Service 2 */}
        <div className="group bg-[var(--color-ivory)]/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
          <div className="overflow-hidden">
            <img
              src={hostImg}
              alt="On-Ground Host"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="font-[var(--font-heading)] text-xl mb-4">
              On-Ground Host
            </h3>
            <p className="text-[var(--color-ivory)]/70 leading-relaxed">
              A trusted presence ensuring comfort, clarity, and seamless
              navigation throughout your stay.
            </p>
          </div>
        </div>

        {/* Service 3 */}
        <div className="group bg-[var(--color-ivory)]/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
          <div className="overflow-hidden">
            <img
              src={coordinationImg}
              alt="Seamless Coordination"
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="font-[var(--font-heading)] text-xl mb-4">
              Seamless Coordination
            </h3>
            <p className="text-[var(--color-ivory)]/70 leading-relaxed">
              Every detail handled discreetly from arrival to departure,
              allowing you to travel without friction.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
