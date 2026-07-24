import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, Code2, LayoutTemplate, Palette, Smartphone, Sparkles } from 'lucide-react';

export const metadata: Metadata = { title: 'Services | Zyberly Solutions' };

const services = [
  { icon: LayoutTemplate, number: '01', title: 'Web Development', description: 'Custom, responsive and high-performance websites engineered to turn attention into action.', features: ['Frontend Development', 'Backend Systems', 'E-commerce Solutions'], tone: 'paper' },
  { icon: Smartphone, number: '02', title: 'Mobile App Development', description: 'Native and cross-platform applications shaped around intuitive journeys and smooth performance.', features: ['iOS & Android Apps', 'Cross-platform Solutions', 'App Maintenance'], tone: 'forest' },
  { icon: Palette, number: '03', title: 'UI/UX Design', description: 'Distinctive interfaces that feel effortless to use and unmistakably connected to your brand.', features: ['Experience Research', 'Interface Design', 'Usability Testing'], tone: 'blue' },
  { icon: BarChart3, number: '04', title: 'Digital Marketing', description: 'Data-led growth systems that improve visibility, engage audiences and create measurable demand.', features: ['Search Optimization', 'Social Media Marketing', 'Paid Advertising'], tone: 'ink' },
  { icon: Sparkles, number: '05', title: 'Branding & Identity', description: 'A clear strategy and memorable visual language built to make your business impossible to overlook.', features: ['Logo Design', 'Brand Strategy', 'Visual Identity Systems'], tone: 'paper' },
  { icon: Code2, number: '06', title: 'Custom Software', description: 'Tailored digital tools that simplify complex operations, automate work and unlock efficiency.', features: ['Enterprise Applications', 'SaaS Products', 'API Integration'], tone: 'forest' },
] as const;

export default function ServicesPage() {
  return (
    <div className="premium-services-page">
      <section className="services-editorial-hero">
        <div className="services-orbit services-orbit-one" />
        <div className="services-orbit services-orbit-two" />
        <div className="shell relative z-10">
          <div className="services-hero-top">
            <span className="mono-label">[ OUR SERVICES · 01—06 ]</span>
            <p>Strategy, design and technology<br />working as one connected system.</p>
          </div>
          <h1>EVERYTHING<br />YOUR BRAND<br /><span>NEEDS.</span></h1>
          <div className="services-hero-bottom">
            <p>We deliver exceptional results across multiple disciplines with precision, imagination and care.</p>
            <Link href="/contact">START A PROJECT <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      <section className="services-bento">
        <div className="shell">
          <div className="services-bento-heading">
            <span className="mono-label">[ CAPABILITIES ]</span>
            <h2>ONE TEAM.<br />EVERY TOUCHPOINT.</h2>
          </div>
          <div className="services-bento-grid">
            {services.map(({ icon: Icon, number, title, description, features, tone }, index) => (
              <article className={`premium-service-card service-tone-${tone} ${index === 0 || index === 5 ? 'service-card-wide' : ''}`} key={title}>
                <div className="service-card-top">
                  <span>{number}</span>
                  <Icon />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="service-feature-list">{features.map((feature) => <span key={feature}>{feature}</span>)}</div>
                </div>
                <Link href="/contact" aria-label={`Start a ${title} project`}>EXPLORE SERVICE <ArrowRight size={18} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services-premium-cta">
        <span className="mono-label">HAVE A PROJECT IN MIND?</span>
        <h2>LET&apos;S BUILD<br />WHAT&apos;S NEXT.</h2>
        <Link href="/contact">START A CONVERSATION <ArrowRight size={20} /></Link>
      </section>
    </div>
  );
}
