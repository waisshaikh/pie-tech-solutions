'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navigation = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export default function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scaleY, setScaleY] = useState(1);
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      const height = numberRef.current?.offsetHeight || window.innerHeight;
      setScaleY(window.innerHeight / height);
    };

    document.title = '404 | Zyberly Solutions';
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <section className="zyberly-404">
      <div className="zyberly-404-grid" aria-hidden="true" />

      <div className="zyberly-404-background" aria-hidden="true">
        <div
          ref={numberRef}
          className="zyberly-404-number"
          style={{ transform: `translate(-50%,-50%) scale(1.12, ${scaleY * 1.3})` }}
        >
          404
        </div>
        <div
          className="zyberly-404-orbit"
          style={{ transform: `translate(-50%,-50%) scaleY(${scaleY})` }}
        />
      </div>

      <nav className="zyberly-404-nav">
        <Link href="/" className="zyberly-404-logo" aria-label="Zyberly home">
          <Image
            src="/zyberly-navbar-logo.webp"
            alt="Zyberly"
            width={2149}
            height={441}
            priority
          />
        </Link>

        <div className="zyberly-404-navlinks">
          {navigation.slice(1).map(([label, href]) => (
            <Link href={href} key={href}>{label}</Link>
          ))}
        </div>

        <button
          type="button"
          className="zyberly-404-menu-button"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
          <span>Menu</span>
        </button>
      </nav>

      <div className="zyberly-404-video" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="zyberly-404-message">
        <span>LOST IN THE DIGITAL WILD?</span>
        <h1>This page took a wrong turn.</h1>
        <p>The link may be broken, or the page may have moved somewhere new.</p>
        <Link href="/"><ArrowLeft size={19} /> Back to home</Link>
      </div>

      <div className={`zyberly-404-drawer ${menuOpen ? 'is-open' : ''}`}>
        <button
          type="button"
          className="zyberly-404-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        />
        <aside>
          <div className="zyberly-404-drawer-head">
            <Image
              src="/zyberly-navbar-logo.webp"
              alt="Zyberly"
              width={2149}
              height={441}
            />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <X size={20} />
            </button>
          </div>
          <div className="zyberly-404-drawer-links">
            {navigation.map(([label, href], index) => (
              <Link
                href={href}
                key={href}
                onClick={() => setMenuOpen(false)}
                style={{ transitionDelay: menuOpen ? `${130 + index * 55}ms` : '0ms' }}
              >
                <span>0{index + 1}</span>{label}
              </Link>
            ))}
          </div>
          <Link href="/" className="zyberly-404-drawer-home" onClick={() => setMenuOpen(false)}>
            <ArrowLeft size={19} /> Back to home
          </Link>
        </aside>
      </div>
    </section>
  );
}
