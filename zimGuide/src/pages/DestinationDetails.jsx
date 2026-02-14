import { useParams } from "react-router-dom";
import { destinations } from "../data/destinations";

export default function DestinationDetails() {
  const { id } = useParams();
  const destination = destinations.find((d) => d.id === id);

  if (!destination) return <div className="py-32 text-center">Not Found</div>;

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl mb-6">{destination.name}</h1>
      <p>{destination.description}</p>
    </section>
  );
}
