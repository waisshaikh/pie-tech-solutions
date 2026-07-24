import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Process | Zyberly Solutions' };

const steps = [
  ['01', 'Discovery & Strategy', 'We begin by understanding your business, goals, target audience, and competition to inform our strategy.', ['Stakeholder interviews', 'Market & competitor analysis', 'User research', 'Project scoping & planning']],
  ['02', 'Design & User Experience', 'We create detailed wireframes, prototypes and design mockups that align with your brand and delight users.', ['Information architecture', 'Wireframing & prototyping', 'Visual design & branding', 'User testing & iteration']],
  ['03', 'Development & Engineering', 'Our engineers bring the designs to life with clean, efficient, and maintainable code using modern technologies.', ['Frontend development', 'Backend systems architecture', 'API integration', 'Quality assurance & testing']],
  ['04', 'Launch & Growth', 'We provide reliable hosting, ongoing support, maintenance, and continuous improvements to ensure long-term success.', ['Secure hosting & deployment', 'Performance optimization', 'Analytics & monitoring', 'Ongoing support & enhancement']],
] as const;

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Our process" title="A proven methodology. Exceptional outcomes." description="We follow a proven methodology to ensure your project is delivered on time and exceeds expectations." />
      <section className="section-pad">
        <div className="shell">
          {steps.map(([number, title, description, points]) => (
            <article key={number} className="grid gap-8 border-t border-white/14 py-12 lg:grid-cols-[100px_1fr_1.1fr]">
              <span className="text-lime">{number}</span>
              <div><h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2><p className="mt-5 leading-7 text-white/52">{description}</p></div>
              <ul className="space-y-3 text-white/55">{points.map((point) => <li key={point}>✓ {point}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-offwhite py-24 text-ink">
        <div className="shell text-center">
          <h2 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-.05em] sm:text-7xl">Ready to begin your project?</h2>
          <Link href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 font-semibold text-white">Start a project <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  );
}
