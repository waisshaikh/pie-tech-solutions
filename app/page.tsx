import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BarChart3, Braces, Palette, Sparkles } from "lucide-react";
import { SplineScene } from "@/components/ui/splite";

// Kept as a compact reference to the original starter during the initial integration.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function LegacyHome() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}

const services=[{icon:BarChart3,title:'Digital Marketing',text:'Strategy, content, paid media, and SEO designed around measurable growth.'},{icon:Braces,title:'Web & App Development',text:'Fast, scalable digital products that turn complex ideas into simple experiences.'},{icon:Palette,title:'Creative Solutions',text:'Brand systems and campaigns that make your business impossible to overlook.'}];

export default function Home(){return <><section className="hero-grid relative min-h-[calc(100svh-5rem)] overflow-hidden border-b border-white/10"><div className="orb orb-one"/><div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-[1440px] items-center px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-12"><div className="relative z-10"><div className="eyebrow mb-7"><Sparkles size={14}/> Digital impact, engineered</div><h1 className="max-w-4xl text-[clamp(3.5rem,7.4vw,7.6rem)] font-semibold leading-[.86] tracking-[-.075em]">Building digital growth <span className="text-lime">for modern brands.</span></h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/58">We help ambitious businesses grow with <span className="text-white">digital marketing</span>, <span className="text-white">web & app development</span>, and <span className="text-white">creative solutions</span> that convert.</p><div className="mt-10 flex flex-wrap gap-4"><Link href="/contact" className="button-primary">Start a project <ArrowRight size={18}/></Link><Link href="/services" className="button-secondary">Explore services</Link></div><div className="mt-14 flex gap-8 text-sm text-white/42"><div><strong className="block text-2xl text-white">40+</strong>projects shipped</div><div><strong className="block text-2xl text-white">4.9/5</strong>client rating</div></div></div><div className="relative isolate -mx-16 h-[440px] lg:-mr-28 lg:h-[700px]"><div className="absolute inset-0 z-0"><SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="h-full w-full"/></div><div className="robot-chest-brand" aria-hidden="true"><Image src="/zyberly%20logo.jpg.jpeg" alt="" width={1536} height={1536} priority className="zyberly-wordmark"/></div></div></div></section><section className="section-pad"><div className="shell"><div className="section-head"><div><span className="kicker">What we do</span><h2>One partner.<br/>Every digital touchpoint.</h2></div><p>Strategy without execution is just a slide deck. We bring senior thinking and hands-on making together under one roof.</p></div><div className="mt-16 grid border-l border-t border-white/12 md:grid-cols-3">{services.map(({icon:Icon,title,text},i)=><article key={title} className="service-card"><div className="flex justify-between"><span>0{i+1}</span><Icon className="text-lime"/></div><h3>{title}</h3><p>{text}</p><Link href="/services" className="card-link">Discover more <ArrowRight size={16}/></Link></article>)}</div></div></section><section className="bg-offwhite py-24 text-ink"><div className="shell grid items-center gap-16 lg:grid-cols-2"><div><span className="kicker !text-ink/45 before:!bg-ink">Why Zyberly</span><h2 className="mt-6 text-5xl font-semibold leading-[.92] tracking-[-.055em] sm:text-7xl">Built to move at the speed of your ambition.</h2></div><div className="grid gap-px bg-ink/10 sm:grid-cols-2">{[['Clear thinking','No jargon—just a focused plan you can believe in.'],['Senior talent','Direct access to the people doing the work.'],['Fast momentum','Lean teams, rapid decisions, thoughtful execution.'],['Shared outcomes','We measure our work by business impact.']].map(([t,d])=><div key={t} className="bg-offwhite p-7"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-3 leading-7 text-ink/58">{d}</p></div>)}</div></div></section><section className="section-pad"><div className="shell cta-panel"><h2>Let’s make your next move matter.</h2><Link href="/contact" className="button-primary">Tell us about it <ArrowRight size={18}/></Link></div></section></>}

