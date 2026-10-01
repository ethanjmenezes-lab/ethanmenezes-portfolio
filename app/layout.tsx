import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { portfolio } from "@/data/portfolio";
import "./globals.css";
const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
export const metadata: Metadata = {
  metadataBase: new URL(
    portfolio.siteUrl ||
      (deploymentHost ? `https://${deploymentHost}` : "http://localhost:3000"),
  ),
  title: `${portfolio.name} | Engineering, Software & AI`,
  description: `${portfolio.name} — ${portfolio.headline} Explore a PC-inspired portfolio of projects, interests, and ideas.`,
  openGraph: {
    title: `${portfolio.name} | Built with curiosity`,
    description: portfolio.headline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} | Built with curiosity`,
    description: portfolio.headline,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
