import Link from "next/link";

type LegalSection = { title: string; content: React.ReactNode };

export function LegalDocument({ eyebrow, title, intro, updated, sections }: {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="shell">
          <span className="mono-label">[ {eyebrow} ]</span>
          <h1>{title}</h1>
          <div className="legal-hero-meta">
            <p>{intro}</p>
            <span>LAST UPDATED<br />{updated}</span>
          </div>
        </div>
      </section>
      <section className="legal-body">
        <div className="shell legal-layout">
          <aside>
            <span className="mono-label">DOCUMENT INDEX</span>
            <nav>
              {sections.map((section, index) => (
                <a href={`#section-${index + 1}`} key={section.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>{section.title}
                </a>
              ))}
            </nav>
          </aside>
          <article>
            {sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h2>{section.title}</h2>{section.content}</div>
              </section>
            ))}
          </article>
        </div>
      </section>
      <section className="legal-contact">
        <div className="shell">
          <span className="mono-label">QUESTIONS OR REQUESTS?</span>
          <h2>LET&apos;S KEEP<br />THINGS CLEAR.</h2>
          <Link href="/contact">CONTACT ZYBERLY →</Link>
        </div>
      </section>
    </div>
  );
}
