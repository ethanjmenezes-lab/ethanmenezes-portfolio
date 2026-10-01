import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";
export const alt =
  "Ethan Menezes — engineering, software, and AI. Built with curiosity.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#090a10",
        color: "#f1effb",
        display: "flex",
        padding: "80px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
        <span style={{ color: "#b7a0ff", fontSize: 18, letterSpacing: 5 }}>
          ENGINEERING × CURIOSITY
        </span>
        <span style={{ fontSize: 88, marginTop: 32, fontWeight: 700 }}>
          {portfolio.name}
        </span>
        <span style={{ color: "#aaa9bd", fontSize: 28, marginTop: 24 }}>
          {portfolio.headline}
        </span>
        <span style={{ fontSize: 18, marginTop: 50 }}>
          TEXAS A&M UNIVERSITY
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 28,
          gap: 20,
          border: "2px solid #555071",
          borderRadius: 12,
          background: "#111320",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              display: "flex",
              width: 110,
              height: 110,
              borderRadius: "50%",
              border: `9px solid ${i === 1 ? "#699cfb" : "#b18aff"}`,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                background: "#a4a0d8",
              }}
            />
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
