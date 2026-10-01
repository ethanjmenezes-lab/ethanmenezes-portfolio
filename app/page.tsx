import { Navigation } from "@/components/navigation";
import { PCScene } from "@/components/pc-scene";
import {
  Section,
  ProjectCard,
  SkillGroup,
  ExperienceList,
  ExternalLink,
  Footer,
} from "@/components/portfolio-sections";
import { portfolio as p } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navigation home />
      <main id="main" className="container">
        <section id="home" className="hero" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="status-dot" /> EARLY IN THE JOURNEY. ALREADY
              BUILDING.
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
              <a className="text-link" href={p.resume.url} download>
                Résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-socials">
              <ExternalLink href={p.contact.github}>GitHub</ExternalLink>
              <ExternalLink href={p.contact.linkedin}>LinkedIn</ExternalLink>
              <a href="#contact">Get in touch ↗</a>
            </div>
            <div className="hero-location">
              <span aria-hidden="true">⌖</span>
              {p.school}
              <span className="small-divider" />
              {p.location}
            </div>
          </div>
          <PCScene />
        </section>
        <div className="intro-strip">
          <span className="eyebrow">
            REAL PROBLEMS. REAL PROJECTS.
            <br />
            <span className="muted">A LOT MORE TO LEARN.</span>
          </span>
          <p>
            From a hackathon prototype to a product with users.
            <br />
            Here’s what I’ve been working on.
          </p>
          <a href="#projects" aria-label="Scroll to projects">
            ↓
          </a>
        </div>
        <Section
          id="projects"
          number="01"
          label="SELECTED WORK"
          title="Built beyond the classroom."
        >
          <p className="section-description">
            The problem, my part in it, and the details behind the build.
          </p>
          <div className="featured-grid">
            {p.projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="foundations-heading">
            <span className="eyebrow">FOUNDATIONS / HARVARD CS50x</span>
            <p>Smaller builds. Fundamental ideas.</p>
          </div>
          <div className="foundations-grid">
            {p.foundations.map((project) => (
              <article className="foundation-card" key={project.title}>
                <span className="eyebrow">{project.context}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.concepts.map((concept) => (
                    <span key={concept}>{concept}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
        <Section
          id="about"
          number="02"
          label="BEHIND THE BUILD"
          title="A strong foundation. An open mind."
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
              <span className="eyebrow">THE DIRECTION</span>
              <div>
                <span>01</span>
                <p>
                  Starting with
                  <strong>General Engineering → Computer Science</strong>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  Building toward
                  <strong>AI engineering & practical products</strong>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  Curious about
                  <strong>Research, vision & GPU acceleration</strong>
                </p>
              </div>
            </aside>
          </div>
        </Section>
        <Section
          id="exploration"
          number="03"
          label="CURRENT EXPLORATION"
          title="The next set of questions."
        >
          <p className="section-description exploration-intro">
            {p.explorationIntro}
          </p>
          <div className="exploration-grid">
            {p.exploration.map((item) => (
              <article className="exploration-card" key={item.title}>
                <div className="exploration-top">
                  <span className="eyebrow">
                    {item.number} / LEARNING INTEREST
                  </span>
                  <span className="status-dot" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <span className="exploration-direction">
                  {item.direction} <span aria-hidden="true">↗</span>
                </span>
              </article>
            ))}
          </div>
        </Section>
        <Section
          id="skills"
          number="04"
          label="UNDER THE HOOD"
          title="A toolkit, still growing."
        >
          <p className="section-description">
            Languages and tools from coursework and projects, alongside what I’m
            learning next.
          </p>
          <div className="skills-grid verified-skills">
            {p.skills.map((group, index) => (
              <SkillGroup key={group.title} {...group} index={index} />
            ))}
          </div>
        </Section>
        <Section
          id="experience"
          number="05"
          label="INITIATIVE & PEOPLE"
          title="More than the code."
        >
          <p className="section-description">
            A few places I’ve learned to take responsibility, work with people,
            and follow through.
          </p>
          <ExperienceList />
          <div className="honors">
            <span className="eyebrow">SELECTED RECOGNITION</span>
            <ul>
              {p.honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>
          <div id="resume" className="resume-card">
            <div>
              <span className="eyebrow">THE FULL PICTURE</span>
              <h3>Details, on paper.</h3>
              <p>{p.resume.summary}</p>
            </div>
            <a className="button button-secondary" href={p.resume.url} download>
              Download résumé <span aria-hidden="true">↓</span>
            </a>
          </div>
        </Section>
        <section className="setup-section" aria-labelledby="setup-heading">
          <div>
            <span className="eyebrow">THE WORKSPACE / PERSONAL HARDWARE</span>
            <h2 id="setup-heading">The machine behind the theme.</h2>
            <p>
              A PC I enjoy building around, and the inspiration for this
              portfolio’s purple-and-blue lighting.
            </p>
            <a className="text-link" href="#home">
              Explore the setup ↑
            </a>
          </div>
          <dl className="hardware-specs">
            {p.hardware.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
        <Section
          id="contact"
          number="06"
          label="LET’S CONNECT"
          title="Good things start with a conversation."
          className="contact-section"
        >
          <div className="contact-bottom">
            <p>
              Working on an interesting problem, looking for a teammate,
              <br />
              or exploring a research question? I’d love to connect.
            </p>
            <div className="contact-links">
              <a href={`mailto:${p.contact.email}`}>Email me ↗</a>
              <ExternalLink href={p.contact.github}>GitHub</ExternalLink>
              <ExternalLink href={p.contact.linkedin}>LinkedIn</ExternalLink>
            </div>
          </div>
          <div className="contact-orb" aria-hidden="true" />
        </Section>
      </main>
      <Footer home />
    </>
  );
}
