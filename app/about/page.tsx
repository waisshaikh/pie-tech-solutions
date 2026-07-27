import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Eye, Gem, MessageCircle, Sparkles } from 'lucide-react';

export const metadata: Metadata = { title: 'About | Zyberly Solutions' };

const values = [
  { number: '01', icon: Eye, title: 'Curiosity', text: 'We question the obvious, explore what others overlook and find the useful truth underneath.', tone: 'paper' },
  { number: '02', icon: Gem, title: 'Craft', text: 'The small decisions create the big feeling. We care deeply about every interaction and every detail.', tone: 'blue' },
  { number: '03', icon: MessageCircle, title: 'Candor', text: 'Straight conversations create smarter work, faster decisions and stronger long-term partnerships.', tone: 'forest' },
] as const;

export default function AboutPage() {
  return (
    <div className="premium-about-page">
      <section className="about-editorial-hero">
        <div className="about-hero-ring" />
        <div className="about-hero-dot" />
        <div className="shell relative z-10">
          <div className="about-hero-top">
            <span className="mono-label">[ ABOUT ZYBERLY · EST. 2026 ]</span>
            <p>An independent digital studio<br />for brands ready to move forward.</p>
          </div>
          <h1>BOLD MINDS.<br /><span>BIG ENERGY.</span><br />REAL IMPACT.</h1>
          <div className="about-hero-bottom">
            <p>Strategy, design, technology and growth thinking brought together as one connected creative force.</p>
            <Sparkles />
          </div>
        </div>
      </section>

      <section className="about-manifesto">
        <div className="shell">
          <div className="about-manifesto-grid">
            <span className="mono-label">[ OUR POINT OF VIEW ]</span>
            <p>THE BEST DIGITAL WORK FEELS <em>CLEAR, USEFUL</em> AND UNMISTAKABLY YOURS.</p>
          </div>
          <div className="about-story-grid">
            <div className="about-story-number">01</div>
            <h2>One idea.<br />One connected team.</h2>
            <div>
              <p>Zyberly brings strategists, designers, developers and growth thinkers together. Fewer handoffs mean faster decisions, sharper execution and one clear idea from first sketch to market.</p>
              <p>We partner with ambitious businesses that value momentum, honesty and work with real character.</p>
            </div>
          </div>
          <div className="about-stats">
            <div><strong>05+</strong><span>LIVE DIGITAL<br />EXPERIENCES</span></div>
            <div><strong>04</strong><span>CONNECTED<br />DISCIPLINES</span></div>
            <div><strong>01</strong><span>DEDICATED<br />TEAM</span></div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="shell">
          <div className="about-values-heading">
            <span className="mono-label">[ WHAT DRIVES US ]</span>
            <h2>VALUES YOU CAN<br />FEEL IN THE WORK.</h2>
          </div>
          <div className="about-values-grid">
            {values.map(({ number, icon: Icon, title, text, tone }) => (
              <article
                className={`about-value-card about-value-${tone}`}
                key={number}
                style={tone === 'blue' ? { backgroundColor: '#3157ff', color: '#ffffff' } : undefined}
              >
                <div><span>{number}</span><Icon /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-premium-cta">
        <span className="mono-label">MAKE US PART OF YOUR TEAM</span>
        <h2>BIG AMBITION<br />DESERVES A<br /><em>BOLD PARTNER.</em></h2>
        <Link href="/contact">MEET YOUR NEXT PARTNER <ArrowRight size={20} /></Link>
      </section>
    </div>
  );
}
