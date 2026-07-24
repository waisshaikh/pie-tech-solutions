import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Braces } from 'lucide-react';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Portfolio | Zyberly Solutions' };

const projects = [
  { category: 'Hospitality & Web Design', title: 'Mirage Hotel', description: 'A Mumbai based hotel chain with renowned tour and stay options. Website developed under company guidance.', features: ['Custom booking system', 'Room showcase', 'Tour packages', 'Mobile-responsive design'] },
  { category: 'Product Design & Engineering', title: 'Digital Commerce Platform', description: 'A fast, conversion-focused commerce experience designed to make discovery and checkout effortless.', features: ['Responsive storefront', 'Product management', 'Secure checkout', 'Performance optimization'] },
  { category: 'Branding & Growth', title: 'Modern Brand Launch', description: 'A connected identity and launch campaign built to turn a new proposition into a recognizable market presence.', features: ['Brand strategy', 'Visual identity', 'Launch creative', 'Social campaign system'] },
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero eyebrow="Featured projects" title="Digital experiences made to matter." description="Exceptional digital experiences we’ve created for forward-thinking clients." />
      <section className="section-pad">
        <div className="shell space-y-10">
          {projects.map((project, index) => (
            <article key={project.title} className="grid overflow-hidden rounded-3xl border border-white/12 bg-white/[.035] lg:grid-cols-[.8fr_1.2fr]">
              <div className="hero-grid min-h-72 p-10"><span className="eyebrow">0{index + 1}</span><Braces className="mt-28 h-16 w-16 text-lime" /></div>
              <div className="p-8 sm:p-12">
                <span className="kicker">{project.category}</span>
                <h2 className="mt-5 text-4xl font-semibold sm:text-5xl">{project.title}</h2>
                <p className="mt-5 max-w-2xl leading-7 text-white/55">{project.description}</p>
                <ul className="mt-8 grid gap-3 text-white/60 sm:grid-cols-2">{project.features.map((feature) => <li key={feature}>✓ {feature}</li>)}</ul>
                <Link href="/contact" className="button-primary mt-9">Discuss this project <ArrowRight size={18} /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
