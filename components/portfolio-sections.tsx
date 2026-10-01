import type { ReactNode } from "react";
import { portfolio, type Project } from "@/data/portfolio";

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
  ) : (
    <span className="unavailable">
      {children} <span className="sr-only">— not available yet</span>
      <span aria-hidden="true">—</span>
    </span>
  );
}
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={`project-art art-${project.visual}`} aria-hidden="true">
        <div className="art-grid" />
        {project.visual === "neural" ? (
          <div className="neural-art">
            {Array.from({ length: 9 }, (_, i) => (
              <i key={i} />
            ))}
            <span className="neural-core">✳</span>
          </div>
        ) : project.visual === "orbit" ? (
          <div className="orbit-art">
            <i />
            <i />
            <i />
            <span>↗</span>
          </div>
        ) : (
          <div className="wave-art">
            {Array.from({ length: 28 }, (_, i) => (
              <i
                key={i}
                style={{
                  height: `${22 + Math.sin(i * 0.65) * 18 + Math.sin(i * 0.21) * 45}%`,
                }}
              />
            ))}
          </div>
        )}
        <span className="art-label">{project.category}</span>
      </div>
      <div className="project-body">
        <div className="project-title-row">
          <h3>{project.title}</h3>
          <span aria-hidden="true">↗</span>
        </div>
        {project.placeholder && (
          <span className="sample-label">
            SAMPLE PROJECT / REPLACE WITH YOUR WORK
          </span>
        )}
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="project-impact">{project.impact}</p>
        <div className="project-links">
          <ExternalLink href={project.github}>GitHub</ExternalLink>
          <ExternalLink href={project.demo}>Live demo</ExternalLink>
        </div>
      </div>
    </article>
  );
}
export function SkillGroup({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: number;
}) {
  return (
    <article className="skill-group">
      <span className="skill-index">0{index + 1}</span>
      <h3>{title}</h3>
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
        <article className="experience-item" key={item.category}>
          <div className="experience-marker" />
          <div>
            <span className="eyebrow">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.detail}</p>
          </div>
          <span
            className={item.placeholder ? "sample-label" : "experience-date"}
          >
            {item.label}
          </span>
        </article>
      ))}
    </div>
  );
}
