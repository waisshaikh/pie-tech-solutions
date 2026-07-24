import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact | Zyberly Solutions' };

const channels = [
  { icon: Mail, label: 'Email', value: 'hello@zyberly.in', href: 'mailto:hello@zyberly.in' },
  { icon: Phone, label: 'Phone', value: '+91 8779 506310', href: 'tel:+918779506310' },
  { icon: MapPin, label: 'Studio', value: 'Mumbai, Maharashtra', href: '#' },
] as const;

export default function ContactPage() {
  return (
    <div className="premium-contact-page">
      <section className="contact-editorial-hero">
        <div className="contact-hero-orbit" />
        <div className="contact-hero-pulse" />
        <div className="shell relative z-10">
          <div className="contact-hero-top">
            <span className="mono-label">[ START A CONVERSATION ]</span>
            <p>Have an idea, a challenge<br />or a bold move in mind?</p>
          </div>
          <h1>LET&apos;S BUILD<br /><span>SOMETHING</span><br />ICONIC.</h1>
          <div className="contact-hero-bottom">
            <p>Tell us where you want to go. We’ll bring the strategy, design and technology to help you get there.</p>
            <a href="mailto:hello@zyberly.in">HELLO@ZYBERLY.IN <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </section>

      <section className="contact-main">
        <div className="shell">
          <div className="contact-main-heading">
            <span className="mono-label">[ YOUR NEXT MOVE ]</span>
            <h2>GOOD THINGS START<br />WITH A CLEAR BRIEF.</h2>
          </div>
          <div className="contact-layout">
            <aside className="contact-details">
              <div>
                <span className="mono-label">DIRECT CONTACT</span>
                <h3>Let&apos;s talk.</h3>
                <p>Prefer a direct conversation? Reach out through any channel. We usually respond within one business day.</p>
              </div>
              <div className="contact-channels">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a href={href} key={label}>
                    <span><Icon /></span>
                    <div><small>{label}</small><strong>{value}</strong></div>
                    <ArrowUpRight />
                  </a>
                ))}
              </div>
              <div className="contact-social">
                <span className="mono-label">FIND US ONLINE</span>
                <div><a href="#">INSTAGRAM ↗</a><a href="#">LINKEDIN ↗</a></div>
              </div>
            </aside>

            <form className="contact-premium-form">
              <div className="contact-form-top">
                <span className="mono-label">PROJECT ENQUIRY</span>
                <span>01 / 01</span>
              </div>
              <div className="contact-form-grid">
                <label>YOUR NAME*<input required name="name" placeholder="Jane Smith" /></label>
                <label>WORK EMAIL*<input required type="email" name="email" placeholder="jane@company.com" /></label>
                <label>PHONE NUMBER<input type="tel" name="phone" placeholder="+91" /></label>
                <label>COMPANY<input name="company" placeholder="Your company" /></label>
              </div>
              <label>WHAT CAN WE HELP WITH?
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Branding & Identity</option>
                  <option>Digital Marketing</option>
                  <option>Custom Software</option>
                </select>
              </label>
              <label>TELL US ABOUT THE PROJECT*
                <textarea required name="message" rows={6} placeholder="A few words about your goals, timing and what success looks like..." />
              </label>
              <button type="submit">SEND YOUR ENQUIRY <Send size={18} /></button>
              <p>By submitting this form, you agree that we may contact you about your enquiry.</p>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-closing">
        <span className="mono-label">NOT READY FOR A FULL BRIEF?</span>
        <h2>JUST SAY<br /><em>HELLO.</em></h2>
        <a href="mailto:hello@zyberly.in">HELLO@ZYBERLY.IN <ArrowUpRight size={20} /></a>
      </section>
    </div>
  );
}
