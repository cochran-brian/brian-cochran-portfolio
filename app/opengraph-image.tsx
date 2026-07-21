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
          background: "#f7f4ec",
          color: "#26221a",
          padding: 48,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            border: "3px dashed #26221a",
            borderRadius: 24,
            padding: 56,
          }}
        >
          <div style={{ fontSize: 92, fontWeight: 600, letterSpacing: -3 }}>
            Brian Cochran
          </div>
          <div style={{ fontSize: 36, color: "#2b4fd8", marginTop: 16 }}>
            Software Engineer
          </div>
          <div style={{ fontSize: 28, color: "#6d6759", marginTop: 28 }}>
            CS + Economics @ Illinois · briancochran.dev
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
