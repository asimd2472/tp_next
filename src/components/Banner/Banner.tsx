import Image from "next/image";
import { useEffect, useState } from "react";

const banners = [
  { type: "video", src: "/images/home-video.mp4", image: "/images/home-poster.jpg", alt: "A Tata Pravesh smart door in a modern home" },
  { type: "image", src: "/images/home-poster.jpg", image: "/images/home-poster.jpg", alt: "A beautiful Tata Pravesh home interior" },
  { type: "image", src: "/images/home-poster-2.jpg", image: "/images/home-poster-2.jpg", alt: "A premium Tata Pravesh entrance" },
];

export default function Banner() {
  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveBanner((current) => (current + 1) % banners.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  const showBanner = (index: number) => setActiveBanner((index + banners.length) % banners.length);
  const active = banners[activeBanner];

  return (
    <>
      <section className="hero-banner" aria-label="Tata Pravesh banner">
        <Image
          src={active.image}
          alt={active.alt}
          fill
          priority={activeBanner === 0}
          sizes="100vw"
          className="hero-banner__image"
        />
        {active.type === "video" && (
          <video
            key={active.src}
            className="hero-banner__video"
            autoPlay
            muted
            loop
            playsInline
            poster={active.image}
            aria-label={active.alt}
          >
            <source src={active.src} type="video/mp4" />
          </video>
        )}
        <div className="hero-banner__overlay" />
        <div className="hero-banner__content">
          <p className="hero-banner__eyebrow">Premium doors &amp; windows</p>
          <h1>
            Beautiful Homes
            <br />
            Begin with <span>Tata Pravesh</span>
          </h1>
          <p className="hero-banner__description">Premium doors and windows for a safer, smarter and more beautiful tomorrow.</p>
          <a href="#products" className="hero-banner__cta">
            Explore Now <span>-&gt;</span>
          </a>
        </div>
        <button
          type="button"
          aria-label="Previous banner"
          onClick={() => showBanner(activeBanner - 1)}
          className="hero-banner__previous"
        >
          ‹
        </button>
        <div className="hero-banner__controls" aria-label="Banner pagination">
          {banners.map((banner, index) => (
            <button
              key={banner.src}
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={activeBanner === index}
              onClick={() => showBanner(index)}
              className={`hero-banner__dot ${activeBanner === index ? "hero-banner__dot--active" : ""}`}
            />
          ))}
          <button
            type="button"
            aria-label="Next banner"
            onClick={() => showBanner(activeBanner + 1)}
            className="hero-banner__next"
          >
            ›
          </button>
        </div>
      </section>
      <section id="products" className="product-strip">
        <p>Want to know more about our products?</p>
        <a href="#home">
          Enquire Now <span>-&gt;</span>
        </a>
      </section>
    </>
  );
}