import Image from "next/image";
import { useMemo, useState } from "react";

const features = [
  {
    id: 1,
    eyebrow: "Premium windows & doors",
    title: "Superior Noise Insulation",
    description:
      "Enjoy peace and quiet with advanced soundproofing that blocks external noise and keeps your home calm.",
    image: "/images/home-poster.jpg",
    alt: "Modern living room with large premium windows",
    icon: "shield",
  },
  {
    id: 2,
    eyebrow: "Energy efficiency",
    title: "Energy Efficient",
    description:
      "Helps maintain indoor temperature, reduces energy bills and keeps your home comfortable throughout the year.",
    image: "/images/home-poster-2.jpg",
    alt: "Stylish home interior with glass windows",
    icon: "sun",
  },
  {
    id: 3,
    eyebrow: "Clean air",
    title: "Dust and Pollution Free",
    description:
      "Unique sealing keeps dust and pollutants out, ensuring cleaner indoor air and a fresher living environment.",
    image: "/images/home-poster.jpg",
    alt: "Premium window and door detail with natural sunlight",
    icon: "sparkle",
  },
  {
    id: 4,
    eyebrow: "Smart design",
    title: "Elegant, Modern Living",
    description:
      "Upgrade your home with refined design and durable materials that deliver beauty, comfort and long-term value.",
    image: "/images/home-poster-2.jpg",
    alt: "Contemporary entrance with premium doors and windows",
    icon: "home",
  },
];

const Icon = ({ type }: { type: string }) => {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (type) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3.5 18.5 6v5.6c0 4.1-2.8 7.9-6.5 9.9-3.7-2-6.5-5.8-6.5-9.9V6L12 3.5Z" />
          <path d="M9.2 12.2 11 14l3.8-4.1" />
        </svg>
      );
    case "sun":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 2.6v2.2M12 19.2v2.2M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...commonProps}>
          <path d="M12 2.8v4.9M12 16.3v4.9M2.8 12h4.9M16.3 12h4.9" />
          <path d="m6.2 6.2 2.8 2.8M15 15l2.8 2.8M17.8 6.2 15 9M9 15l-2.8 2.8" />
        </svg>
      );
    case "home":
      return (
        <svg {...commonProps}>
          <path d="M4 10.8 12 4l8 6.8" />
          <path d="M6.4 9.6v9h11.2v-9" />
          <path d="M10 18.6v-5h4v5" />
        </svg>
      );
    default:
      return null;
  }
};

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleFeatures = useMemo(() => {
    return [
      features[activeIndex],
      features[(activeIndex + 1) % features.length],
    ];
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + features.length) % features.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % features.length);
  };

  return (
    <section className="features-section" aria-label="Premium features section">
      <div className="features-section__inner">
        <div className="features-section__header">
          <div className="features-section__text-wrap">
            <p className="features-section__eyebrow">Premium windows &amp; doors</p>
            <h2>Windows that Do More than Just Look Good</h2>
            <p className="features-section__lead">
              Thoughtfully designed for modern Indian homes, our windows bring in more natural light, better ventilation,
              energy efficiency and lasting beauty.
            </p>
          </div>

          <div className="features-section__controls" aria-label="Feature navigation">
            <button type="button" aria-label="Previous feature" onClick={goToPrevious} className="features-section__control features-section__control--left">
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" aria-label="Next feature" onClick={goToNext} className="features-section__control features-section__control--right">
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="features-grid">
          {visibleFeatures.map((feature) => (
            <article key={feature.id} className="feature-card" aria-label={feature.title}>
              <div className="feature-card__image-wrap">
                <Image src={feature.image} alt={feature.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="feature-card__image" />
              </div>

              <div className="feature-card__content">
                <div className="feature-card__icon" aria-hidden="true">
                  <Icon type={feature.icon} />
                </div>

                <div className="feature-card__body">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <a href="#products" className="feature-card__link">
                    Read More <span>→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
