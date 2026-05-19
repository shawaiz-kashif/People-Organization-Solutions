'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/solutions", label: "Solutions" },
    { href: "/values", label: "Values" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className="site-header" aria-label="Primary navigation">
        <Link className="brand" href="/" onClick={closeMenu}>
          <Image
            src="/images/POS-Logo.png"
            alt="People Org Solutions"
            width={360}
            height={88}
            priority
          />
        </Link>
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link className="nav-cta desktop-cta" href="/contact">
          Consultation
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="mobile-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={isActive(link.href) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
          <Link className="mobile-cta" href="/contact" onClick={closeMenu}>
            Consultation
          </Link>
        </nav>
      )}
    </>
  );
}
