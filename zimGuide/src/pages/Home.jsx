import Hero from "../sections/Hero";
import Positioning from "../sections/Positioning";
import Services from "../sections/Services";
import DestinationsPreview from "../sections/DestinationsPreview";
import CTA from "../sections/CTA";
import Founder from "../sections/Founder";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Services />
      <DestinationsPreview />
      <Founder />
      <CTA />
    </>
  );
}
