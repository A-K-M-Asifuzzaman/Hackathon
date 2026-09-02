import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#101f1d",
        }}
      >
        <div
          style={{
            width: 136,
            height: 136,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #b08d57",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", left: 34, top: 30, width: 13, height: 76, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 89, top: 30, width: 13, height: 76, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 47, top: 62, width: 42, height: 11, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 24, top: 30, width: 33, height: 6, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 79, top: 30, width: 33, height: 6, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 24, top: 100, width: 33, height: 6, backgroundColor: "#f6f1e8" }} />
          <div style={{ position: "absolute", left: 79, top: 100, width: 33, height: 6, backgroundColor: "#f6f1e8" }} />
        </div>
      </div>
    ),
    size
  );
}
