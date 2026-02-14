export default function Services() {
  return (
    <section id="services" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-20 text-center">

        <div>
          <h3 className="font-[var(--font-heading)] text-2xl mb-6">
            Private Itinerary Design
          </h3>
          <p className="text-[var(--color-ivory)]/70">
            Tailored journeys designed around your pace and preferences.
          </p>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-2xl mb-6">
            On-Ground Host
          </h3>
          <p className="text-[var(--color-ivory)]/70">
            A trusted presence ensuring comfort and cultural clarity.
          </p>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-2xl mb-6">
            Seamless Coordination
          </h3>
          <p className="text-[var(--color-ivory)]/70">
            Logistics handled discreetly from arrival to departure.
          </p>
        </div>

      </div>
    </section>
  );
}
