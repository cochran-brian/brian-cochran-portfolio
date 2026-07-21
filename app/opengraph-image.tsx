import { ImageResponse } from "next/og";

export const alt = "Brian Cochran · Software Engineer";
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
          justifyContent: "flex-end",
          background: "#0b0b0c",
          color: "#ece9e2",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -3 }}>
          Brian Cochran
        </div>
        <div style={{ fontSize: 36, color: "#ff8a3b", marginTop: 16 }}>
          Software Engineer
        </div>
        <div style={{ fontSize: 28, color: "#8f8d87", marginTop: 28 }}>
          CS + Economics @ Illinois · briancochran.dev
        </div>
      </div>
    ),
    { ...size }
  );
}
