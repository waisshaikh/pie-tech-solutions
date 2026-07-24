import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Globe2 } from 'lucide-react';

export const metadata: Metadata = { title: 'Portfolio | Zyberly Solutions' };

const projects = [
  { number: '01', title: 'Oblix Pharma', category: 'Healthcare · Web Development', description: 'A polished pharmaceutical website presenting the company, products and healthcare expertise through a clear digital experience.', tags: ['Healthcare', 'Responsive', 'Corporate'], cover: '/portfolio/oblixpharma.png', href: 'https://oblixpharma.com/' },
  { number: '02', title: 'Saleem Bridals', category: 'Fashion · E-commerce', description: 'An elegant bridal shopping experience designed to showcase collections and help customers discover statement occasion wear.', tags: ['E-commerce', 'Fashion', 'Mobile'], cover: '/portfolio/saleem%20%20bridal.png', href: 'https://saleemsbridalstore.com/' },
  { number: '03', title: 'Aaeesha Boutique', category: 'Fashion · Boutique', description: 'A contemporary boutique storefront balancing expressive fashion imagery with a simple, conversion-focused shopping journey.', tags: ['Boutique', 'Commerce', 'UI/UX'], cover: '/portfolio/aaeesha%20boutique.png', href: 'https://aaeeshaboutique.com/' },
  { number: '04', title: 'SK Corporate Wear', category: 'Corporate Fashion · E-commerce', description: 'A professional corporate-wear storefront showcasing uniforms, workwear collections and tailored apparel solutions.', tags: ['Corporate Wear', 'E-commerce', 'Responsive'], cover: '/portfolio/sk%20corporate.png', href: 'https://skcorporatewear.com/' },
  { number: '05', title: 'Gulmarg Destinations', category: 'Travel · Tourism', description: 'An immersive destination website helping travellers explore Gulmarg experiences, stays and memorable mountain adventures.', tags: ['Travel', 'Destination', 'Responsive'], cover: '/portfolio/gulmarg.png', href: 'https://gulmarg-destinations.vercel.app/' },
] as const;

function ProjectCover({ title, cover, index }: { title: string; cover: string | null; index: number }) {
  return (
    <div className={`portfolio-cover portfolio-cover-${(index % 3) + 1}`}>
      {cover ? <Image src={cover} alt={`${title} website cover`} fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" /> : (
        <div className="portfolio-cover-placeholder">
          <div className="portfolio-browser-bar"><i /><i /><i /><span>{title.toLowerCase().replaceAll(' ', '-')}.com</span></div>
          <div className="portfolio-placeholder-copy">
            <span>WEBSITE COVER</span>
            <strong>{title}</strong>
          </div>
          <Globe2 />
        </div>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <div className="premium-portfolio-page">
      <section className="portfolio-editorial-hero">
        <div className="portfolio-hero-shape" />
        <div className="shell relative z-10">
          <div className="portfolio-hero-top">
            <span className="mono-label">[ SELECTED WORK · 2024—26 ]</span>
            <p>Websites and digital products<br />built to perform and be remembered.</p>
          </div>
          <h1>WORK THAT<br /><span>MAKES AN</span><br />IMPACT.</h1>
          <div className="portfolio-hero-bottom">
            <p>A growing collection of digital experiences created for ambitious businesses across industries.</p>
            <span>05 <small>FEATURED<br />PROJECTS</small></span>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery">
        <div className="shell">
          <div className="portfolio-gallery-heading">
            <span className="mono-label">[ THE WORK ]</span>
            <h2>MULTIPLE INDUSTRIES.<br />ONE STANDARD.</h2>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <article className="portfolio-project" key={project.number}>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Visit ${project.title} website`}>
                  <ProjectCover title={project.title} cover={project.cover} index={index} />
                </a>
                <div className="portfolio-project-meta">
                  <div className="portfolio-project-index">{project.number}</div>
                  <div>
                    <span className="mono-label">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}><ArrowUpRight /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio-premium-cta">
        <span className="mono-label">YOUR PROJECT COULD BE NEXT</span>
        <h2>LET&apos;S CREATE<br /><em>SOMETHING ICONIC.</em></h2>
        <Link href="/contact">START A PROJECT <ArrowRight size={20} /></Link>
      </section>
    </div>
  );
}
