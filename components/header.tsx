'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" transitionTypes={['route-stairs']} onClick={() => setOpen(false)}>
          <Image src="/zyberly-navbar-logo.webp" alt="Zyberly" width={2149} height={441} priority className="zyberly-wordmark h-11 w-44 rounded-md" />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <Link key={href} href={href} transitionTypes={['route-stairs']} className={`nav-link ${pathname === href ? 'active' : ''}`}>{label}</Link>)}
        </nav>
        <button aria-label="Toggle navigation" className="text-ink lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-ink/10 bg-offwhite px-5 py-6 lg:hidden">
          {links.map(([label, href]) => <Link key={href} href={href} transitionTypes={['route-stairs']} onClick={() => setOpen(false)} className="block border-b border-ink/10 py-4 text-2xl text-ink">{label}</Link>)}
        </nav>
      )}
    </header>
  );
}
