import { Navigation } from "@/components/navigation";
import { PCScene } from "@/components/pc-scene";
import {
  Section,
  ProjectCard,
  SkillGroup,
  ExperienceList,
  ExternalLink,
} from "@/components/portfolio-sections";
import { portfolio as p } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation />
      <main id="main" className="container">
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="status-dot" /> ENGINEERING STUDENT & CURIOUS
              BUILDER
            </div>
            <h1 id="hero-heading">
              {p.name.split(" ")[0]}
              <br />
              <span>{p.name.split(" ").slice(1).join(" ")}</span>
              <span className="name-period">.</span>
            </h1>
            <h2>{p.headline}</h2>
            <p className="hero-intro">{p.intro}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#about">
                A little about me <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-location">
              <span aria-hidden="true">⌖</span> {p.school}
              <span className="small-divider" />
              {p.location}
            </div>
          </div>
          <PCScene />
        </section>
        <div className="intro-strip">
          <span className="eyebrow">
            THE SETUP IS PERSONAL.
            <br />
            <span className="muted">THE POSSIBILITIES ARE OPEN.</span>
          </span>
          <p>
            A little hardware. A lot of curiosity.
            <br />
            Click a component to see what’s inside.
          </p>
          <a href="#projects" aria-label="Scroll to projects">
            ↓
          </a>
        </div>
        <Section
          id="projects"
          number="01"
          label="SELECTED WORK"
          title="Built to make a difference."
        >
          <p className="section-description">
            An evolving collection of ideas, experiments, and things built with
            purpose.
          </p>
          <div className="project-grid">
            {p.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Section>
        <Section
          id="about"
          number="02"
          label="BEHIND THE BUILD"
          title="Curiosity is the starting point."
          className="about-section"
        >
          <div className="about-grid">
            <div className="about-copy">
              <p>{p.bio}</p>
              <p>{p.bioSecondary}</p>
              <div className="tags interest-tags">
                {p.interests.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <aside className="about-card">
              <span className="eyebrow">A FEW THINGS ABOUT ME</span>
              <div>
                <span>01</span>
                <p>
                  Learning at<strong>{p.school}</strong>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  Thinking about<strong>Software + intelligence</strong>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  Building with<strong>Intention. And a little RGB.</strong>
                </p>
              </div>
            </aside>
          </div>
        </Section>
        <Section
          id="skills"
          number="03"
          label="UNDER THE HOOD"
          title="The tools behind the ideas."
        >
          <p className="section-description">
            A toolkit for exploring, building, and connecting the dots.
          </p>
          {p.skillsAreExamples && (
            <p className="content-note">
              Example toolkit — these entries are placeholders to confirm or
              replace.
            </p>
          )}
          <div className="skills-grid">
            {p.skills.map((group, index) => (
              <SkillGroup key={group.title} {...group} index={index} />
            ))}
          </div>
        </Section>
        <Section
          id="experience"
          number="04"
          label="THE JOURNEY"
          title="Always a work in progress."
        >
          <p className="section-description">
            Learning by doing, asking better questions, and building alongside
            others.
          </p>
          <ExperienceList />
          <div id="resume" className="resume-card">
            <div>
              <span className="eyebrow">THE SHORT VERSION</span>
              <h3>A little more on paper.</h3>
              <p>{p.resume.summary}</p>
            </div>
            {p.resume.url ? (
              <a
                className="button button-secondary"
                href={p.resume.url}
                download
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            ) : (
              <div className="resume-unavailable">
                <button className="button button-secondary" disabled>
                  Résumé coming soon <span aria-hidden="true">↓</span>
                </button>
                <span>PDF will be added here.</span>
              </div>
            )}
          </div>
        </Section>
        <Section
          id="contact"
          number="05"
          label="LET’S CONNECT"
          title="Good things start with a conversation."
          className="contact-section"
        >
          <div className="contact-bottom">
            <p>
              Have an idea, an opportunity, or a shared curiosity?
              <br />
              I’d love to hear about it.
            </p>
            <div className="contact-links">
              {p.contact.email ? (
                <a href={`mailto:${p.contact.email}`}>Email me ↗</a>
              ) : (
                <span className="unavailable">Email coming soon</span>
              )}
              <ExternalLink href={p.contact.github}>GitHub</ExternalLink>
              <ExternalLink href={p.contact.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
          <div className="contact-orb" aria-hidden="true" />
        </Section>
      </main>
      <footer className="container footer">
        <a className="wordmark" href="#home">
          em<span>.</span>
        </a>
        <p>
          © {new Date().getFullYear()} {p.name}. Built with intention.
        </p>
        <a href="#home">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
