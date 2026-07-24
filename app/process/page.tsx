import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, DraftingCompass, Rocket, TerminalSquare } from 'lucide-react';

export const metadata: Metadata = { title: 'Process | Zyberly Solutions' };

const steps = [
  { number: '01', icon: Compass, title: 'Discovery & Strategy', label: 'Find the real opportunity', description: 'We begin by understanding your business, goals, target audience and competitive landscape, turning what we learn into a focused direction.', points: ['Stakeholder interviews', 'Market & competitor analysis', 'User research', 'Project scoping & planning'], tone: 'paper' },
  { number: '02', icon: DraftingCompass, title: 'Design & User Experience', label: 'Make complexity feel simple', description: 'We create wireframes, prototypes and expressive visual systems that align with your brand while making every interaction feel natural.', points: ['Information architecture', 'Wireframing & prototyping', 'Visual design & branding', 'User testing & iteration'], tone: 'blue' },
  { number: '03', icon: TerminalSquare, title: 'Development & Engineering', label: 'Build for today and tomorrow', description: 'Our engineers bring the experience to life with clean, efficient and maintainable code built on dependable modern technologies.', points: ['Frontend development', 'Backend systems architecture', 'API integration', 'Quality assurance & testing'], tone: 'forest' },
  { number: '04', icon: Rocket, title: 'Launch & Growth', label: 'Turn momentum into growth', description: 'We launch with confidence, then support, measure and continuously improve the product to ensure meaningful long-term performance.', points: ['Secure hosting & deployment', 'Performance optimization', 'Analytics & monitoring', 'Ongoing support & enhancement'], tone: 'paper' },
] as const;

export default function ProcessPage() {
  return (
    <div className="premium-process-page">
      <section className="process-editorial-hero">
        <div className="process-disc process-disc-one" />
        <div className="process-disc process-disc-two" />
        <div className="shell relative z-10">
          <div className="process-hero-top">
            <span className="mono-label">[ OUR PROCESS · 01—04 ]</span>
            <p>A clear, collaborative path<br />from first thought to lasting impact.</p>
          </div>
          <h1>CLARITY<br />FIRST.<br /><span>MOMENTUM ALWAYS.</span></h1>
          <div className="process-hero-bottom">
            <p>We follow a proven methodology to ensure every project is delivered on time and exceeds expectations.</p>
            <span className="process-count">04 <small>CONNECTED<br />STAGES</small></span>
          </div>
        </div>
      </section>

      <section className="process-story">
        <div className="shell">
          <div className="process-story-heading">
            <span className="mono-label">[ HOW WE MOVE ]</span>
            <h2>NO BLACK BOX.<br />JUST FORWARD MOTION.</h2>
          </div>
          <div className="process-track">
            {steps.map(({ number, icon: Icon, title, label, description, points, tone }, index) => (
              <article className={`process-stage process-tone-${tone} ${index % 2 ? 'process-stage-right' : ''}`} key={number}>
                <span className="process-stage-number">{number}</span>
                <div className="process-stage-icon"><Icon /></div>
                <div className="process-stage-copy">
                  <span className="mono-label">{label}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <ul>{points.map((point) => <li key={point}>↗ {point}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-premium-cta">
        <span className="mono-label">READY WHEN YOU ARE</span>
        <h2>LET&apos;S TURN<br />YOUR IDEA INTO<br /><em>IMPACT.</em></h2>
        <Link href="/contact">BEGIN YOUR PROJECT <ArrowRight size={20} /></Link>
      </section>
    </div>
  );
}
