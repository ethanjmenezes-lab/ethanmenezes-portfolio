import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/portfolio-sections";
export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="container not-found">
        <span className="eyebrow">404 / PAGE NOT FOUND</span>
        <h1>Nothing connected here.</h1>
        <p>
          This page doesn’t exist. You can explore the latest projects from the
          portfolio.
        </p>
        <Link className="button button-primary" href="/#projects">
          Back to projects →
        </Link>
      </main>
      <Footer />
    </>
  );
}
