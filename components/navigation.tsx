import Link from "next/link";
import { portfolio } from "@/data/portfolio";
const links = [
  ["Projects", "projects"],
  ["About", "about"],
  ["Exploring", "exploration"],
  ["Skills", "skills"],
  ["Experience", "experience"],
];
export function Navigation({ home = false }: { home?: boolean }) {
  const NavigationLink = home ? "a" : Link;
  const sectionHref = (id: string) => `${home ? "" : "/"}#${id}`;
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <NavigationLink
          className="wordmark"
          href={sectionHref("home")}
          aria-label="Ethan Menezes home"
        >
          em<span>.</span>
          <span className="wordmark-divider" />
          <span className="wordmark-caption">ENGINEERING × CURIOSITY</span>
        </NavigationLink>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <NavigationLink key={id} href={sectionHref(id)}>
              {name}
            </NavigationLink>
          ))}
        </nav>
        <NavigationLink className="nav-contact" href={sectionHref("contact")}>
          Let’s connect <span aria-hidden="true">↗</span>
        </NavigationLink>
        <details className="mobile-nav">
          <summary aria-label="Toggle navigation">
            Menu <span aria-hidden="true">＋</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {[...links, ["Contact", "contact"]].map(([name, id]) => (
              <NavigationLink key={id} href={sectionHref(id)}>
                {name}
              </NavigationLink>
            ))}
            <a href={portfolio.resume.url} download>
              Résumé ↓
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
