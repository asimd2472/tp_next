import Image from "next/image";
import { useMemo, useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Mr. Prakash Mehta",
    label: "Tata Pravesh",
    image: "/images/custome.jpeg",
    alt: "Customer testimonial portrait",
  },
  {
    id: 2,
    name: "Mrs. Neha Kousik Iqbal",
    label: "Tata Pravesh",
    image: "/images/custome.jpeg",
    alt: "Customer testimonial portrait",
  },
  {
    id: 3,
    name: "Mr. Rohan",
    label: "Tata Pravesh",
    image: "/images/custome.jpeg",
    alt: "Customer testimonial portrait",
  },
  {
    id: 4,
    name: "Mrs. Smita Gandhi",
    label: "Tata Pravesh",
    image: "/images/custome.jpeg",
    alt: "Customer testimonial portrait",
  },
];

export default function WhyChoose() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleReviews = useMemo(() => {
    return Array.from({ length: 3 }, (_, offset) => {
      const index = (activeIndex + offset) % reviews.length;
      return reviews[index];
    });
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  return (
    <section className="why-choose" aria-label="Why homeowners choose Tata Pravesh">
      <div className="why-choose__inner">
        <div className="why-choose__header">
          <p className="why-choose__eyebrow">REAL STORIES</p>
          <h2>
            Why Homeowners Choose <span>Tata Pravesh</span>
          </h2>
          <p className="why-choose__subtitle">
            Trusted by thousands of families across India for better homes, safer spaces and lasting comfort.
          </p>
        </div>

        <div className="why-choose__grid">
          {visibleReviews.map((review) => (
            <article key={review.id} className="why-choose__card" aria-label={review.name}>
              <div className="why-choose__image-wrap">
                <Image src={review.image} alt={review.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="why-choose__image" />
                <div className="why-choose__brand">TATA Pravesh</div>
                <button type="button" className="why-choose__play" aria-label={`Play review from ${review.name}`}>
                  <span aria-hidden="true">▶</span>
                </button>
              </div>

              <div className="why-choose__card-footer">
                <div className="why-choose__name-wrap">
                  <span className="why-choose__name">{review.name}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="why-choose__controls" aria-label="Customer reviews navigation">
          <button type="button" aria-label="Previous reviews" onClick={goToPrevious} className="why-choose__control">
            <span aria-hidden="true">‹</span>
          </button>
          <button type="button" aria-label="Next reviews" onClick={goToNext} className="why-choose__control">
            <span aria-hidden="true">›</span>
          </button>
        </div>
      </div>
    </section>
  );
}
