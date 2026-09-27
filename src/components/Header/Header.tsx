import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaDownload, FaMapMarkerAlt, FaCalendarCheck, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const links = ["Home", "About Us", "Products", "Buyer’s Guide", "Gallery", "Track Your Order", "Contact Us"];
const utilityLinks = [
  { label: "Download Brochure", href: "#download-brochure", icon: FaDownload },
  { label: "Find A Store", href: "#find-a-store", icon: FaMapMarkerAlt },
  { label: "Book a Demo", href: "#book-a-demo", icon: FaCalendarCheck },
  { label: "Product Enquiry - Mail", href: "#product-enquiry-mail", icon: FaEnvelope },
  { label: "Product Enquiry - Phone", href: "#product-enquiry-phone", icon: FaPhoneAlt },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();                                       
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);                                                                           

  const linkTarget = (link: string) => `#${link.toLowerCase().replaceAll(" ", "-")}`;

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="utility-bar">
        <div className="utility-bar__inner utility-bar__inner--actions">
          {utilityLinks.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href} className="utility-link">
              <span className="utility-link__icon">
                <Icon aria-hidden="true" />
              </span>
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className="main-header">
        <div className="main-header__inner">
          <Link href="#home" aria-label="Tata Pravesh home" className="tata-steel-logo">
            <Image src="/images/tatasteel-logo.png" alt="Tata Steel" width={108} height={32} priority />
          </Link>
          <nav aria-label="Primary navigation" className="desktop-navigation">
            {links.map((link) => (
              <Link key={link} href={linkTarget(link)}>
                {link}
              </Link>
            ))}
          </nav>
          <div className="header-actions">
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="menu-button"
            >
              <span className={`menu-icon ${menuOpen ? "menu-icon--open" : ""}`}>
                <i />
                <i />
                <i />
              </span>
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="mobile-navigation">
            {links.map((link) => (
              <Link key={link} href={linkTarget(link)} onClick={() => setMenuOpen(false)}>
                {link}
              </Link>
            ))}
          </nav>
        )}
      </div>
      <Link href="#home" aria-label="Tata Pravesh" className="tata-pravesh-logo">
        <Image src="/images/Tata-Pravesh-logo.jpg" alt="Tata Pravesh" fill priority sizes="166px" />
      </Link>
    </header>
  );
}