import Image from "next/image";
import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Birla Vanya",
    subtitle: "2-3 Storeys Towers",
    image: "/images/project.webp",
    alt: "Modern apartment tower building",
  },
  {
    id: 2,
    title: "Himalark Trasea",
    subtitle: "30 Storey Luxury Tower",
    image: "/images/project.webp",
    alt: "Luxury residential tower",
  },
  {
    id: 3,
    title: "Aagastwamy Altezza",
    subtitle: "Three 38 Storey Towers",
    image: "/images/project.webp",
    alt: "High-rise residential towers",
  },
  {
    id: 4,
    title: "Sreenidhi Villas",
    subtitle: "Luxury Villa Complex",
    image: "/images/project.webp",
    alt: "Luxury villa complex",
  },
];

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 21s6-5.2 6-11A6 6 0 1 0 6 10c0 5.8 6 11 6 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleProjects = useMemo(() => {
    const maxVisible = 4;
    return Array.from({ length: maxVisible }, (_, offset) => {
      const index = (activeIndex + offset) % projects.length;
      return projects[index];
    });
  }, [activeIndex]);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + projects.length) % projects.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % projects.length);
  };

  return (
    <section className="projects-section" aria-label="Iconic projects section">
      <div className="projects-section__inner">
        <div className="projects-section__header">
          <div className="projects-section__heading-block">
            <p className="projects-section__eyebrow">ICONIC SPACES</p>
            <h2>
              TATAPravash&apos;s <span>Iconic Projects</span>
            </h2>
          </div>

          <div className="projects-section__controls" aria-label="Project navigation">
            <button type="button" aria-label="Previous projects" onClick={goToPrevious} className="projects-section__control">
              <span aria-hidden="true">‹</span>
            </button>
            <button type="button" aria-label="Next projects" onClick={goToNext} className="projects-section__control">
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {visibleProjects.map((project) => (
            <article key={project.id} className="project-card" aria-label={project.title}>
              <div className="project-card__image-wrap">
                <Image src={project.image} alt={project.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="project-card__image" />
              </div>

              <div className="project-card__meta">
                <div className="project-card__location" aria-hidden="true">
                  <LocationIcon />
                </div>
                <div className="project-card__info">
                  <h3>{project.title}</h3>
                  <p>{project.subtitle}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
