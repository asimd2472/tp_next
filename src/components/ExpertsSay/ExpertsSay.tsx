import Image from "next/image";

const cards = [
  {
    id: 1,
    title: "Mr. Krsna Mehta",
    image: "/images/sddefault.jpg",
    alt: "Expert testimonial portrait",
    overlay: "",
  },
  {
    id: 2,
    title: "Ms. Riddhi Khosla Jalan",
    image: "/images/sddefault.jpg",
    alt: "Expert testimonial portrait",
    overlay: "Ridhi, Which Window Should I Install?",
  },
  {
    id: 3,
    title: "Ms. Rohina",
    image: "/images/sddefault.jpg",
    alt: "Expert testimonial portrait",
    overlay: "Weather Proof Windows",
  },
  {
    id: 4,
    title: "Ms. Binita Gandhi",
    image: "/images/sddefault.jpg",
    alt: "Expert testimonial portrait",
    overlay: "Choosing Between UPVC and Aluminium Windows?",
  },
];

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4.2" />
    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export default function ExpertsSay() {
  return (
    <section className="experts-say" aria-label="Experts say section">
      <div className="experts-say__inner">
        <div className="experts-say__grid">
          {cards.map((card) => (
            <article key={card.id} className="experts-say__card" aria-label={card.title}>
              <div className="experts-say__image-wrap">
                <Image src={card.image} alt={card.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="experts-say__image" />

                {card.overlay && <div className="experts-say__overlay-text">{card.overlay}</div>}

                <button type="button" className="experts-say__play" aria-label={`Play testimonial from ${card.title}`}>
                  <span aria-hidden="true">▶</span>
                </button>
              </div>

              <div className="experts-say__footer">
                <div className="experts-say__avatar-wrap">
                  <Image src="/images/user.webp" alt={card.title} fill className="experts-say__avatar" />
                </div>

                <span className="experts-say__name">{card.title}</span>

                <button type="button" aria-label="Instagram" className="experts-say__social" title="Instagram">
                  <InstagramIcon />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="experts-say__nav" aria-label="Carousel navigation">
          <button type="button" className="experts-say__nav-btn" aria-label="Previous">
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" className="experts-say__nav-btn" aria-label="Next">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
