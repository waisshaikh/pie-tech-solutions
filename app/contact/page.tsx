import type { Metadata } from 'next';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

export const metadata: Metadata = { title: 'Contact | Zyberly Solutions' };

export default function ContactPage() {
  return (
    <section className="hero-grid min-h-[calc(100svh-5rem)]">
      <div className="shell py-20 lg:py-28">
        <div className="text-center">
          <span className="kicker">Contact</span>
          <h1 className="mx-auto mt-7 max-w-6xl text-[clamp(3.7rem,8vw,8rem)] font-semibold leading-[.86] tracking-[-.075em]">Let’s build something iconic.</h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/52">Ready to elevate your brand with cutting-edge digital solutions? Get in touch with us today and let’s start creating something extraordinary together.</p>
        </div>
        <div className="mt-16 grid gap-6 lg:grid-cols-[.65fr_1.35fr]">
          <aside className="rounded-3xl border border-white/12 bg-white/[.035] p-8">
            <h2 className="text-2xl font-semibold">Contact information</h2>
            <div className="mt-8 space-y-6 text-white/65">
              <a href="tel:+918779506310" className="flex items-start gap-3"><Phone size={18} />+91 8779 506310<br />+91 7715 873180</a>
              <a href="mailto:hello@zyberly.in" className="flex items-center gap-3"><Mail size={18} />hello@zyberly.in</a>
              <p className="flex items-center gap-3"><MapPin size={18} />Mumbai, Maharashtra</p>
              <a href="#" className="flex items-center gap-3"><ArrowUpRight size={18} />@zyberly.in</a>
              <a href="#" className="flex items-center gap-3"><ArrowUpRight size={18} />Zyberly on LinkedIn</a>
            </div>
          </aside>
          <form className="rounded-3xl border border-white/12 bg-white/[.035] p-6 sm:p-10">
            <h2 className="mb-8 text-2xl font-semibold">Send us a message</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <label>Full name*<input required name="name" placeholder="Your name" /></label>
              <label>Email address*<input required type="email" name="email" placeholder="you@company.com" /></label>
              <label>Phone number<input type="tel" name="phone" placeholder="+91" /></label>
              <label>Subject*<input required name="subject" placeholder="How can we help?" /></label>
            </div>
            <label className="mt-6">Services you’re interested in<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Web Development</option><option>Mobile App Development</option><option>UI/UX Design</option><option>Branding</option><option>Digital Marketing</option><option>Custom Software</option></select></label>
            <label className="mt-6">Message*<textarea required name="message" rows={6} placeholder="Tell us about your project..." /></label>
            <button className="button-primary mt-7 w-full justify-center" type="submit">Send message <ArrowUpRight size={18} /></button>
          </form>
        </div>
      </div>
    </section>
  );
}
