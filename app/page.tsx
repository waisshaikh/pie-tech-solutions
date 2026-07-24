import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Braces,
  Code2,
  LayoutTemplate,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

const services = [
  {
    icon: LayoutTemplate,
    title: "Web Development",
    text: "We build custom, responsive, and high-performance websites that deliver exceptional user experiences using modern technologies.",
    tags: ["Frontend Development", "Backend Systems", "E-commerce Solutions"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    text: "We create native and cross-platform mobile applications that engage users with smooth performance and intuitive interfaces.",
    tags: ["iOS & Android Apps", "Cross-platform Solutions", "App Maintenance & Updates"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "We craft beautiful, intuitive interfaces that elevate your brand and provide exceptional user experiences.",
    tags: ["User Experience Research", "Interface Design", "Usability Testing"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    text: "We develop data-driven marketing strategies that boost your visibility, engage your audience, and drive conversions.",
    tags: ["Search Engine Optimization", "Social Media Marketing", "Paid Advertising"],
  },
  {
    icon: Sparkles,
    title: "Branding & Identity",
    text: "We create distinctive brand identities that resonate with your audience and communicate your unique value proposition.",
    tags: ["Logo Design", "Brand Strategy", "Visual Identity Systems"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "We develop tailored software solutions that streamline operations, automate processes, and drive business efficiency.",
    tags: ["Enterprise Applications", "SaaS Products", "API Development & Integration"],
  },
];

const process = [
  {
    title: "Discovery & Strategy",
    text: "We begin by understanding your business, goals, target audience, and competition to inform our strategy.",
    points: ["Stakeholder interviews", "Market & competitor analysis", "User research", "Project scoping & planning"],
  },
  {
    title: "Design & User Experience",
    text: "We create detailed wireframes, prototypes and design mockups that align with your brand and delight users.",
    points: ["Information architecture", "Wireframing & prototyping", "Visual design & branding", "User testing & iteration"],
  },
  {
    title: "Development & Engineering",
    text: "Our engineers bring the designs to life with clean, efficient, and maintainable code using modern technologies.",
    points: ["Frontend development", "Backend systems architecture", "API integration", "Quality assurance & testing"],
  },
  {
    title: "Launch & Growth",
    text: "We provide reliable hosting, ongoing support, maintenance, and continuous improvements to ensure long-term success.",
    points: ["Secure hosting & deployment", "Performance optimization", "Analytics & monitoring", "Ongoing support & enhancement"],
  },
];

export default function Home() {
  return (
    <>
      <section id="home" className="hero-grid relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/10">
        <div className="orb orb-one" />
        <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] items-center px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-12">
          <div className="relative z-10">
            <div className="eyebrow mb-7"><Sparkles size={14} /> Everything your brand needs</div>
            <h1 className="max-w-4xl text-[clamp(3.5rem,7.4vw,7.6rem)] font-semibold leading-[.86] tracking-[-.075em]">
              Everything your brand needs, <span className="text-lime">delivered seamlessly.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/58">
              From design to code, hosting to photography — Zyberly does it all.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">Start a project <ArrowRight size={18} /></Link>
              <Link href="/portfolio" className="button-secondary">View our work</Link>
            </div>
          </div>
          <div className="relative isolate -mx-16 h-[440px] lg:-mr-28 lg:h-[700px]">
            <div className="absolute inset-0 z-0">
              <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full" />
            </div>
            <div className="robot-chest-brand" aria-hidden="true">
              <Image src="/zyberly-logo.png" alt="" width={1291} height={267} priority className="zyberly-wordmark" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad scroll-mt-28">
        <div className="shell">
          <div className="section-head">
            <div><span className="kicker">Our services</span><h2>Precision across<br />every discipline.</h2></div>
            <p>We deliver exceptional results across multiple disciplines with precision and elegance.</p>
          </div>
          <div className="mt-16 grid border-l border-t border-white/12 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text, tags }, i) => (
              <article key={title} className="service-card">
                <div className="flex justify-between"><span>0{i + 1}</span><Icon className="text-lime" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="mt-5 space-y-2 text-sm text-white/55">
                  {tags.map((tag) => <li key={tag}>✓ {tag}</li>)}
                </ul>
                <Link href="/services" className="card-link">Learn more <ArrowRight size={16} /></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-28 bg-offwhite py-24 text-ink sm:py-32">
        <div className="shell">
          <div className="max-w-4xl">
            <span className="kicker !text-ink/45 before:!bg-ink">Our process</span>
            <h2 className="mt-6 text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-7xl">
              A proven methodology, built to exceed expectations.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/58">
              We follow a proven methodology to ensure your project is delivered on time and exceeds expectations.
            </p>
          </div>
          <div className="mt-16 grid gap-px bg-ink/10 md:grid-cols-2">
            {process.map(({ title, text, points }, i) => (
              <article key={title} className="bg-offwhite p-8 sm:p-10">
                <span className="font-mono text-sm text-ink/35">0{i + 1}</span>
                <h3 className="mt-10 text-3xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-ink/58">{text}</p>
                <ul className="mt-6 space-y-2 text-sm text-ink/55">
                  {points.map((point) => <li key={point}>• {point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="section-pad scroll-mt-28">
        <div className="shell">
          <div className="section-head">
            <div><span className="kicker">Featured projects</span><h2>Digital experiences<br />made to matter.</h2></div>
            <p>Exceptional digital experiences we’ve created for forward-thinking clients.</p>
          </div>
          <article className="mt-16 grid overflow-hidden rounded-3xl border border-white/12 bg-white/[.035] lg:grid-cols-[1.1fr_.9fr]">
            <div className="hero-grid min-h-80 p-8 sm:p-12">
              <span className="eyebrow">Hospitality & web design</span>
              <Braces className="mt-24 h-20 w-20 text-lime" />
            </div>
            <div className="p-8 sm:p-12">
              <h3 className="text-4xl font-semibold">Mirage Hotel</h3>
              <p className="mt-5 leading-7 text-white/55">A Mumbai based hotel chain with renowned tour and stay options. Website developed under company guidance.</p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[.18em] text-white/35">Key features</p>
              <ul className="mt-4 space-y-3 text-white/60">
                {["Custom booking system", "Room showcase", "Tour packages", "Mobile-responsive design"].map((item) => <li key={item}>✓ {item}</li>)}
              </ul>
              <Link href="/contact" className="button-primary mt-9">Start a similar project <ArrowRight size={18} /></Link>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-offwhite py-24 text-ink sm:py-32">
        <div className="shell grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <span className="kicker !text-ink/45 before:!bg-ink">About Zyberly</span>
          <div>
            <h2 className="text-5xl font-semibold leading-[.94] tracking-[-.055em] sm:text-7xl">Everything your brand needs, delivered seamlessly.</h2>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/58">From design to code, hosting to photography — we do it all. One connected team turns your strategy into distinctive digital experiences and measurable growth.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad scroll-mt-28">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <span className="kicker">Let’s work together</span>
              <h2 className="mt-6">Let’s build something iconic.</h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/55">Ready to elevate your brand with cutting-edge digital solutions? Get in touch with us today and let’s start creating something extraordinary together.</p>
              <div className="mt-8 space-y-2 text-white/65">
                <p>hello@zyberly.in</p>
                <p>+91 8779 506310 · +91 7715 873180</p>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>
            <a href="mailto:hello@zyberly.in" className="button-primary">Send a message <ArrowRight size={18} /></a>
          </div>
        </div>
      </section>
    </>
  );
}
