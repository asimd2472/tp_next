import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = ["Home", "About Us", "Products", "Buyer’s Guide", "Gallery", "Track Your Order", "Contact Us"];

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
      <div className="utility-bar"><div className="utility-bar__inner"><span>TATA STEEL | Building a better tomorrow</span><div><span>Investor Relations</span><span>Careers</span><span>Contact Us</span><span>India</span></div></div></div>
      <div className="main-header">
        <div className="main-header__inner">
          <Link href="#home" aria-label="Tata Pravesh home" className="tata-steel-logo"><Image src="/images/tatasteel-logo.png" alt="Tata Steel" width={108} height={32} priority /></Link>
          <nav aria-label="Primary navigation" className="desktop-navigation">{links.map((link) => <Link key={link} href={linkTarget(link)}>{link}</Link>)}</nav>
          <div className="header-actions"><Link href="#products" className="enquire-button">Enquire Now <span>-&gt;</span></Link><button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="menu-button"><span className={`menu-icon ${menuOpen ? "menu-icon--open" : ""}`}><i /><i /><i /></span></button></div>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="mobile-navigation">{links.map((link) => <Link key={link} href={linkTarget(link)} onClick={() => setMenuOpen(false)}>{link}</Link>)}<Link href="#products" onClick={() => setMenuOpen(false)} className="mobile-navigation__enquire">Enquire Now</Link></nav>}
      </div>
      <Link href="#home" aria-label="Tata Pravesh" className="tata-pravesh-logo"><Image src="/images/Tata-Pravesh-logo.jpg" alt="Tata Pravesh" fill priority sizes="166px" /></Link>
    </header>
  );
}