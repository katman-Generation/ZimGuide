import tatendaImg from '../assets/tatenda.JPG';
import alishaImg from '../assets/alisha.jpg';

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6 md:py-40 max-w-6xl mx-auto">
      <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl text-center mb-16 md:mb-20">
        The Team
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        
        {/* Founder */}
        <div className="flex flex-col items-center text-center">
          <img
            src={tatendaImg}
            alt="Tatenda Katema"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-6"
          />
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl md:text-2xl mb-2">
            Tatenda Katema
          </h3>
          <p className="uppercase text-xs sm:text-sm tracking-widest text-[var(--color-champagne)] mb-4">
            Founder
          </p>

          <p className="text-[var(--color-ivory)]/70 leading-relaxed mb-6 px-2 sm:px-4 md:px-0">
            Focused on delivering private, controlled and seamless travel
            experiences in Zimbabwe. Built on trust, clarity and long-term vision.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-[var(--color-champagne)] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[var(--color-champagne)] transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[var(--color-champagne)] transition">
              Twitter
            </a>
          </div>
        </div>

        {/* Alisha */}
        <div className="flex flex-col items-center text-center">
          <img
            src={alishaImg}
            alt="Alisha"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-full mb-6"
          />
          <h3 className="font-[var(--font-heading)] text-xl sm:text-2xl md:text-2xl mb-2">
            Alisha
          </h3>
          <p className="uppercase text-xs sm:text-sm tracking-widest text-[var(--color-champagne)] mb-4">
            Member
          </p>

          <p className="text-[var(--color-ivory)]/70 leading-relaxed mb-6 px-2 sm:px-4 md:px-0">
            Details coming soon.
          </p>

          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm uppercase tracking-widest">
            <a href="#" className="hover:text-[var(--color-champagne)] transition">
              Instagram
            </a>
            <a href="#" className="hover:text-[var(--color-champagne)] transition">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
