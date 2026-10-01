const links = [
  ["Projects", "projects"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Résumé", "resume"],
];
export function Navigation() {
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="#home" aria-label="Ethan Menezes home">
          em<span>.</span>
          <span className="wordmark-divider" />{" "}
          <span className="wordmark-caption">ENGINEERING × CURIOSITY</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, id]) => (
            <a key={id} href={`#${id}`}>
              {name}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s connect <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Toggle navigation">
            Menu <span aria-hidden="true">＋</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {[...links, ["Contact", "contact"]].map(([name, id]) => (
              <a key={id} href={`#${id}`}>
                {name}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
