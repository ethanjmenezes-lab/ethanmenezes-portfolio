import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
import { Navigation } from "@/components/navigation";
import { ExternalLink, Footer, Metrics } from "@/components/portfolio-sections";
import { ProjectVisual } from "@/components/project-visual";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return portfolio.projects.map(({ slug }) => ({ slug }));
}
function findProject(slug: string) {
  const project = portfolio.projects.find((project) => project.slug === slug);
  if (!project) notFound();
  return project;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  const title = `${project.title} | ${portfolio.name}`;
  return {
    title,
    description: project.description,
    openGraph: {
      title,
      description: project.description,
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${portfolio.name} — Computer Science + AI Engineering`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
      images: ["/opengraph-image"],
    },
  };
}
export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  const nextProject = portfolio.projects.find(
    (item) => item.slug !== project.slug,
  );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="container case-study">
        <Link className="back-link" href="/#projects">
          ← All projects
        </Link>
        <header className="case-header">
          <span className="eyebrow">{project.category}</span>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-description">{project.description}</p>
          <div className="case-facts">
            <div>
              <span>MY ROLE</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>CONTEXT</span>
              <p>{project.period}</p>
            </div>
          </div>
          <div className="case-external">
            <ExternalLink href={project.github}>GitHub repository</ExternalLink>
            <ExternalLink href={project.demo}>Visit the product</ExternalLink>
            <ExternalLink href={project.channel}>YouTube channel</ExternalLink>
          </div>
        </header>
        <ProjectVisual project={project} />
        <div className="case-overview">
          <section aria-labelledby="problem-heading">
            <span className="eyebrow">01 / THE PROBLEM</span>
            <h2 id="problem-heading">What we set out to solve.</h2>
            <p>{project.problem}</p>
          </section>
          <aside className="case-toolkit">
            <h2>{project.stackLabel}</h2>
            <div className="tags">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </aside>
        </div>
        <section
          className="case-section"
          aria-labelledby="contribution-heading"
        >
          <span className="eyebrow">02 / MY CONTRIBUTION</span>
          <h2 id="contribution-heading">Where I focused.</h2>
          <div className="case-contributions">
            {project.contributions.map((item, index) => (
              <article key={item.title}>
                <span className="contribution-index">0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="case-section" aria-labelledby="details-heading">
          <span className="eyebrow">03 / A CLOSER LOOK</span>
          <h2 id="details-heading">
            {project.visual === "review-flow"
              ? "The decisions behind the interface."
              : "Building a product, reaching an audience."}
          </h2>
          <div className="case-details">
            {project.details.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="case-section case-outcome"
          aria-labelledby="outcome-heading"
        >
          <span className="eyebrow">04 / THE RESULT</span>
          <h2 id="outcome-heading">Evidence of progress.</h2>
          <Metrics items={project.metrics} note={project.metricNote} />
          <p>{project.outcome}</p>
        </section>
        <section
          className="case-section takeaways"
          aria-labelledby="takeaways-heading"
        >
          <span className="eyebrow">05 / WHAT THIS WORK HIGHLIGHTS</span>
          <h2 id="takeaways-heading">{project.takeawayLabel}</h2>
          <ul>
            {project.takeaways.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <nav className="case-bottom" aria-label="Project navigation">
          <Link href="/#projects">← Back to selected work</Link>
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`}>
              Next: {nextProject.title} →
            </Link>
          )}
        </nav>
      </main>
      <Footer />
    </>
  );
}
