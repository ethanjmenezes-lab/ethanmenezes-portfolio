import Link from "next/link";
import type { ReactNode } from "react";
import { portfolio, type Metric, type Project } from "@/data/portfolio";
import { ProjectVisual } from "@/components/project-visual";

export function Section({
  id,
  number,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  number: string;
  label: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-topline">
        <span className="eyebrow">
          {number} / {label}
        </span>
        <span className="section-line" />
      </div>
      <h2 id={`${id}-heading`}>{title}</h2>
      {children}
    </section>
  );
}
export function ExternalLink({
  href,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  ) : null;
}
export function Metrics({ items, note }: { items: Metric[]; note: string }) {
  return (
    <div className="metrics-block">
      <dl className="metrics">
        {items.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
      <p className="metric-note">{note}</p>
    </div>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="featured-card">
      <ProjectVisual project={project} compact />
      <div className="featured-body">
        <span className="eyebrow">{project.category}</span>
        <h3>
          <Link href={`/projects/${project.slug}`}>
            {project.title} <span aria-hidden="true">↗</span>
          </Link>
        </h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-summary">{project.description}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <Metrics items={project.metrics} note={project.metricNote} />
        <div className="featured-links">
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Read ${project.title} case study`}
          >
            Explore the project <span aria-hidden="true">→</span>
          </Link>
          <ExternalLink href={project.demo}>Visit product</ExternalLink>
        </div>
      </div>
    </article>
  );
}
export function SkillGroup({
  title,
  items,
  index,
  note,
}: {
  title: string;
  items: string[];
  index: number;
  note: string;
}) {
  return (
    <article className="skill-group">
      <span className="skill-index">0{index + 1}</span>
      <h3>{title}</h3>
      <p className="skill-note">{note}</p>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
export function ExperienceList() {
  return (
    <div className="experience-list">
      {portfolio.experience.map((item) => (
        <article className="experience-item" key={item.title}>
          <div className="experience-marker" />
          <div>
            <span className="eyebrow">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
          <span className="experience-date">{item.label}</span>
        </article>
      ))}
    </div>
  );
}
export function Footer({ home = false }: { home?: boolean }) {
  const HomeLink = home ? "a" : Link;
  return (
    <footer className="container footer">
      <HomeLink
        className="wordmark"
        href={home ? "#home" : "/#home"}
        aria-label="Ethan Menezes home"
      >
        em<span>.</span>
      </HomeLink>
      <p>
        © {new Date().getFullYear()} {portfolio.name}. Built with intention.
      </p>
      <HomeLink href={home ? "#home" : "/#home"}>
        Back to home <span aria-hidden="true">↑</span>
      </HomeLink>
    </footer>
  );
}
