"use client";
import { useRef, type PointerEvent } from "react";

function Fan({ index }: { index: number }) {
  return (
    <span
      className="fan"
      style={{ "--fan-delay": `${index * -1.7}s` } as React.CSSProperties}
    >
      <span className="fan-blades" />
      <span className="fan-hub" />
    </span>
  );
}

export function PCScene() {
  const scene = useRef<HTMLDivElement>(null);
  function tilt(event: PointerEvent<HTMLDivElement>) {
    if (
      event.pointerType !== "mouse" ||
      !window.matchMedia(
        "(prefers-reduced-motion: no-preference) and (hover: hover)",
      ).matches
    )
      return;
    const bounds = event.currentTarget.getBoundingClientRect();
    scene.current?.style.setProperty(
      "--tilt-x",
      `${((event.clientY - bounds.top) / bounds.height - 0.5) * -5}deg`,
    );
    scene.current?.style.setProperty(
      "--tilt-y",
      `${((event.clientX - bounds.left) / bounds.width - 0.5) * 7}deg`,
    );
  }
  function reset() {
    scene.current?.style.setProperty("--tilt-x", "0deg");
    scene.current?.style.setProperty("--tilt-y", "0deg");
  }
  return (
    <div className="pc-exhibit" onPointerMove={tilt} onPointerLeave={reset}>
      <div className="exhibit-grid" aria-hidden="true" />
      <div className="pc-aura" aria-hidden="true" />
      <div className="scene" ref={scene}>
        <a
          href="#experience"
          className="monitor hardware"
          aria-label="Monitor: explore experience and résumé"
        >
          <span className="monitor-screen">
            <span className="terminal-label">ETHAN / WORKSPACE</span>
            <span className="terminal-line">ENGINEERING / CS50x</span>
            <span className="terminal-line purple">
              Teams. Products. Initiative.
            </span>
            <span className="terminal-bars">
              <i />
              <i />
              <i />
            </span>
            <span className="screen-link">EXPERIENCE ↗</span>
          </span>
          <span className="monitor-neck" />
          <span className="monitor-foot" />
        </a>
        <div className="pc-case">
          <div className="case-top" />
          <div className="case-side">
            <span>NV / 07</span>
            <i />
            <i />
          </div>
          <div className="case-interior">
            <div className="case-grill" aria-hidden="true" />
            <a
              href="#about"
              className="motherboard hardware"
              aria-label="Motherboard: about Ethan"
            >
              <span className="board-traces" />
              <span className="heatsink" />
              <span className="cpu">
                <span>EM</span>
              </span>
              <span className="ram ram-one" />
              <span className="ram ram-two" />
              <span className="board-label">ABOUT ME ↗</span>
            </a>
            <div className="cooling-tube tube-one" aria-hidden="true" />
            <div className="cooling-tube tube-two" aria-hidden="true" />
            <a
              href="#skills"
              className="fan-bank hardware"
              aria-label="Cooling fans: explore skills"
            >
              <Fan index={0} />
              <Fan index={1} />
              <Fan index={2} />
              <span className="fan-label">SKILLS ↗</span>
            </a>
            <a
              href="#projects"
              className="gpu hardware"
              aria-label="Graphics card: explore projects"
            >
              <span className="gpu-top">
                GEFORCE RTX <span>4070 Ti</span>
              </span>
              <span className="gpu-face">
                <span className="gpu-diamond">◇</span>
                <span>
                  SUPRIM <b>X</b>
                </span>
              </span>
              <span className="gpu-strip" />
              <span className="gpu-link">PROJECTS ↗</span>
            </a>
            <div className="bottom-fans" aria-hidden="true">
              <Fan index={3} />
              <Fan index={4} />
              <Fan index={5} />
            </div>
            <div className="glass-sheen" aria-hidden="true" />
          </div>
          <a
            className="rgb-rail hardware"
            href="#contact"
            aria-label="RGB side panel: contact Ethan"
          >
            <span>CONNECT</span>
          </a>
          <div className="case-base">
            <span>BUILT FROM CURIOSITY</span>
            <i />
          </div>
          <div className="case-foot foot-left" />
          <div className="case-foot foot-right" />
        </div>
        <div className="desk-line" aria-hidden="true" />
      </div>
      <div className="exhibit-caption">
        <span>
          <i className="status-dot" /> AN INTERACTIVE WORKSPACE
        </span>
        <span>HOVER. EXPLORE. CONNECT.</span>
      </div>
      <nav className="hardware-legend" aria-label="Explore PC components">
        <a href="#projects">
          01 <span>GPU / Projects</span> ↗
        </a>
        <a href="#skills">
          02 <span>Cooling / Skills</span> ↗
        </a>
        <a href="#about">
          03 <span>Board / About</span> ↗
        </a>
        <a href="#experience">
          04 <span>Monitor / Experience</span> ↗
        </a>
        <a href="#contact">
          05 <span>RGB / Contact</span> ↗
        </a>
      </nav>
    </div>
  );
}
