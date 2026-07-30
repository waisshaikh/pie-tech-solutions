'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Fox404Video } from '@/components/404-fox-video';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 | Zyberly Solutions';
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <main className="zyberly-404">
      <div className="zyberly-404-grid" aria-hidden="true" />

      <Link href="/" className="zyberly-404-logo" aria-label="Zyberly home">
        <Image
          src="/zyberly-navbar-logo.webp"
          alt="Zyberly"
          width={2149}
          height={441}
          priority
        />
      </Link>

      <div className="zyberly-404-background" aria-hidden="true">
        <div className="zyberly-404-number">404</div>
      </div>

      <div className="zyberly-404-video" aria-hidden="true">
        <Fox404Video />
      </div>

      <section className="zyberly-404-message">
        <span>Oops, something went off track.</span>
        <h1>This page does not exist.</h1>
        <Link href="/"><ArrowLeft size={16} /> Go back home</Link>
      </section>

      <span className="zyberly-404-spark zyberly-404-spark-one" aria-hidden="true">✦</span>
      <span className="zyberly-404-spark zyberly-404-spark-two" aria-hidden="true">✦</span>
    </main>
  );
}
