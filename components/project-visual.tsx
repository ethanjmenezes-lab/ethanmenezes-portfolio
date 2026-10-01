import Image from "next/image";
import type { Project } from "@/data/portfolio";

export function ProjectVisual({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  if (project.media) {
    return (
      <figure className={`project-media ${compact ? "media-compact" : ""}`}>
        <div className="browser-frame" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>satprep1600.com</em>
        </div>
        <Image
          src={project.media.src}
          alt={project.media.alt}
          width={project.media.width}
          height={project.media.height}
          sizes={
            compact
              ? "(max-width: 800px) 90vw, 50vw"
              : "(max-width: 800px) 90vw, 1100px"
          }
        />
        <figcaption>
          {compact ? "Live product · public homepage" : project.media.caption}
        </figcaption>
      </figure>
    );
  }
  return (
    <figure className={`review-visual ${compact ? "review-compact" : ""}`}>
      <div className="diagram-top">
        <span className="eyebrow">VELO / DOCUMENT REVIEW</span>
        <span className="diagram-badge">HUMAN IN THE LOOP</span>
      </div>
      <ol
        className="review-flow"
        aria-label="Conceptual document review workflow"
      >
        <li>
          <span className="flow-index">01</span>
          <strong>Compare</strong>
          <span>Page-linked changes</span>
          <div className="diff-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
        </li>
        <li>
          <span className="flow-index">02</span>
          <strong>Validate</strong>
          <span>Rewrite requests & responses</span>
          <div className="validation-mark" aria-hidden="true">
            [ ✓ ]
          </div>
        </li>
        <li>
          <span className="flow-index">03</span>
          <strong>Review</strong>
          <span>Approve · reject · revise</span>
          <div className="decision-marks" aria-hidden="true">
            <i>✓</i>
            <i>×</i>
            <i>↻</i>
          </div>
        </li>
      </ol>
      <figcaption>
        Conceptual workflow · not an application screenshot
      </figcaption>
    </figure>
  );
}
