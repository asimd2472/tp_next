import Image from "next/image";

const posts = [
  {
    id: 1,
    category: "WINDOWS",
    date: "Sep 1, 2025",
    title: "How to Choose the Right Windows for a Modern Home",
    description:
      "Discover key factors like material, style, energy efficiency and design to find the perfect windows for your home.",
    image: "/images/home-poster.jpg",
    alt: "Modern living room with large windows",
  },
  {
    id: 2,
    category: "DOORS",
    date: "Sep 12, 2025",
    title: "5 Ways Premium Doors Transform Your Entrance",
    description:
      "See how the right door can enhance curb appeal, improve security and add lasting value to your home.",
    image: "/images/home-poster-2.jpg",
    alt: "Modern front entrance with premium door",
  },
  {
    id: 3,
    category: "INTERIORS",
    date: "Sep 26, 2025",
    title: "Natural Light: Designing Brighter, More Comfortable Spaces",
    description:
      "Learn how natural light can improve mood, boost productivity and create a healthier, more inviting home.",
    image: "/images/home-poster.jpg",
    alt: "Bright interior with large windows",
  },
];

export default function Blogs() {
  return (
    <section className="blogs-section" aria-label="Latest insights blog section">
      <div className="blogs-section__inner">
        <div className="blogs-section__header">
          <div className="blogs-section__title-wrap">
            <p className="blogs-section__eyebrow">TIPS &amp; TRENDS</p>
            <h2>Latest Insights</h2>
            <p className="blogs-section__subtitle">
              Explore expert tips, design ideas and practical advice on doors, windows, interiors and modern living.
            </p>
          </div>

          <a href="#blogs" className="blogs-section__link">
            View All Blogs <span>→</span>
          </a>
        </div>

        <div className="blogs-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card" aria-label={post.title}>
              <div className="blog-card__image-wrap">
                <Image src={post.image} alt={post.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="blog-card__image" />
              </div>

              <div className="blog-card__content">
                <div className="blog-card__meta">
                  <span className="blog-card__tag">{post.category}</span>
                  <span className="blog-card__dot" aria-hidden="true">•</span>
                  <span className="blog-card__date">{post.date}</span>
                </div>

                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href="#blog" className="blog-card__link">
                  Read Article <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
