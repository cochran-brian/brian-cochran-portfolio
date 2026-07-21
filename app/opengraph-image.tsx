import { ImageResponse } from "next/og";

export const alt = "Brian Cochran — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0b0c",
          color: "#ece9e2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <svg
          width="1200"
          height="630"
          viewBox="0 0 1200 630"
          style={{ position: "absolute", top: 0, left: 0, opacity: 0.5 }}
        >
          <line x1="900" y1="90" x2="1050" y2="210" stroke="#3a3936" strokeWidth="2" />
          <line x1="1050" y1="210" x2="960" y2="360" stroke="#3a3936" strokeWidth="2" />
          <line x1="1050" y1="210" x2="1160" y2="330" stroke="#3a3936" strokeWidth="2" />
          <line x1="960" y1="360" x2="1080" y2="480" stroke="#3a3936" strokeWidth="2" />
          <circle cx="900" cy="90" r="10" fill="#8f8d87" />
          <circle cx="1050" cy="210" r="16" fill="#ff8a3b" />
          <circle cx="960" cy="360" r="10" fill="#8f8d87" />
          <circle cx="1160" cy="330" r="8" fill="#8f8d87" />
          <circle cx="1080" cy="480" r="12" fill="#8f8d87" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: "#8f8d87",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#ff8a3b",
            }}
          />
          Open to Summer 2027 SWE internships
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 600, letterSpacing: -3 }}>
            Brian Cochran
          </div>
          <div style={{ fontSize: 38, color: "#ff8a3b", marginTop: 12 }}>
            Everything interesting is a graph.
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#8f8d87" }}>
          Software Engineer · CS + Economics @ Illinois · briancochran.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
