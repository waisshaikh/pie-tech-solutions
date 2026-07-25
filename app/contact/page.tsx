import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact | Zyberly Solutions' };

const channels = [
  { icon: Mail, label: 'General enquiries', value: 'info@zyberly.in', href: 'mailto:info@zyberly.in' },
  { icon: Mail, label: 'Mojammil', value: 'mojammil@zyberly.in', href: 'mailto:mojammil@zyberly.in' },
  { icon: Mail, label: 'Wais', value: 'wais@zyberly.in', href: 'mailto:wais@zyberly.in' },
  { icon: Phone, label: 'Phone', value: '+91 93215 82803', href: 'tel:+919321582803' },
  { icon: Phone, label: 'Alternate phone', value: '+91 96570 89562', href: 'tel:+919657089562' },
  { icon: MapPin, label: 'Studio', value: 'Shop No. 3, Nepean Sea Road, Malabar Hill, Mumbai 400026', href: 'https://www.google.com/maps/search/?api=1&query=Shop+No+3+Nepean+Sea+Road+opposite+Simla+House+Malabar+Hill+Mumbai+400026' },
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
            <a href="mailto:info@zyberly.in">INFO@ZYBERLY.IN <ArrowUpRight size={18} /></a>
          </div>
          <div className="contact-map">
            <div className="contact-map-copy">
              <span className="mono-label">[ VISIT OUR STUDIO ]</span>
              <h3>MUMBAI,<br />MAHARASHTRA.</h3>
              <p>Shop No. 3, Nepean Sea Road, opposite Simla House, Simla Nagar, Malabar Hill, Mumbai, Maharashtra 400026.</p>
              <a href="https://www.google.com/maps/search/?api=1&query=Shop+No+3+Nepean+Sea+Road+opposite+Simla+House+Malabar+Hill+Mumbai+400026" target="_blank" rel="noopener noreferrer">GET DIRECTIONS <ArrowUpRight size={18} /></a>
            </div>
            <iframe
              title="Zyberly office location on Google Maps"
              src="https://www.google.com/maps?q=Shop+No+3,+Nepean+Sea+Road,+opposite+Simla+House,+Malabar+Hill,+Mumbai,+Maharashtra+400026&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
        <a href="mailto:info@zyberly.in">INFO@ZYBERLY.IN <ArrowUpRight size={20} /></a>
      </section>
    </div>
  );
}
