import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Process', '/process'],
  ['Portfolio', '/portfolio'],
  ['About', '/about'],
  ['Contact', '/contact'],
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/"><Image src="/zyberly-navbar-logo.png" alt="Zyberly" width={2149} height={441} className="zyberly-wordmark h-14 w-52" /></Link>
            <p className="mt-5 max-w-sm leading-7 text-white/42">Everything your brand needs, delivered seamlessly. From design to code, hosting to photography — we do it all.</p>
          </div>
          <div>
            <p className="footer-label">Navigation</p>
            {links.map(([title, href]) => <Link className="footer-link" key={href} href={href}>{title}</Link>)}
          </div>
          <div>
            <p className="footer-label">Contact</p>
            <a className="footer-link" href="mailto:hello@zyberly.in">hello@zyberly.in</a>
            <a className="footer-link" href="tel:+918779506310">+91 8779 506310</a>
            <p className="mt-4 text-sm text-white/35">Mumbai, Maharashtra</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/28 sm:flex-row">
          <p>© 2026 Zyberly. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
