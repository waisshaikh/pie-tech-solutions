import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Code2, LayoutTemplate, Palette, Smartphone, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/page-hero';

export const metadata: Metadata = { title: 'Services | Zyberly Solutions' };

const services = [
  { icon: LayoutTemplate, title: 'Web Development', description: 'We build custom, responsive, and high-performance websites that deliver exceptional user experiences using modern technologies.', features: ['Frontend Development', 'Backend Systems', 'E-commerce Solutions'] },
  { icon: Smartphone, title: 'Mobile App Development', description: 'We create native and cross-platform mobile applications that engage users with smooth performance and intuitive interfaces.', features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Maintenance & Updates'] },
  { icon: Palette, title: 'UI/UX Design', description: 'We craft beautiful, intuitive interfaces that elevate your brand and provide exceptional user experiences.', features: ['User Experience Research', 'Interface Design', 'Usability Testing'] },
  { icon: BarChart3, title: 'Digital Marketing', description: 'We develop data-driven marketing strategies that boost your visibility, engage your audience, and drive conversions.', features: ['Search Engine Optimization', 'Social Media Marketing', 'Paid Advertising'] },
  { icon: Sparkles, title: 'Branding & Identity', description: 'We create distinctive brand identities that resonate with your audience and communicate your unique value proposition.', features: ['Logo Design', 'Brand Strategy', 'Visual Identity Systems'] },
  { icon: Code2, title: 'Custom Software', description: 'We develop tailored software solutions that streamline operations, automate processes, and drive business efficiency.', features: ['Enterprise Applications', 'SaaS Products', 'API Development & Integration'] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our services" title="Everything your brand needs." description="We deliver exceptional results across multiple disciplines with precision and elegance." />
      <section className="section-pad">
        <div className="shell grid border-l border-t border-white/12 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, description, features }, index) => (
            <article className="service-card" key={title}>
              <div className="flex justify-between"><span className="text-white/32">0{index + 1}</span><Icon className="text-lime" /></div>
              <h2>{title}</h2>
              <p>{description}</p>
              <ul className="mt-8 space-y-3">{features.map((feature) => <li className="text-sm text-white/55" key={feature}>✓ {feature}</li>)}</ul>
              <Link href="/contact" className="card-link">Start a project <ArrowRight size={16} /></Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
