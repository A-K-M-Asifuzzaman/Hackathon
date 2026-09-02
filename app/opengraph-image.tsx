import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — bespoke furniture and interior styling in Chattogram`;

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101f1d",
          padding: 72,
          color: "#f6f1e8",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, letterSpacing: 12, color: "#f6f1e8" }}>HEAVEN</div>
            <div style={{ fontSize: 14, letterSpacing: 8, color: "#b08d57", marginTop: 10 }}>
              FURNITURE MART
            </div>
          </div>
          <div style={{ fontSize: 15, letterSpacing: 6, color: "#b08d57" }}>
            CHATTOGRAM · EST. 2020
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ width: 96, height: 1, backgroundColor: "#b08d57", marginBottom: 34 }} />
          <div style={{ fontSize: 76, lineHeight: 1.08, maxWidth: 880, letterSpacing: -1 }}>
            Furniture, Crafted Around You
          </div>
          <div style={{ fontSize: 24, color: "rgba(246,241,232,0.66)", marginTop: 26, maxWidth: 760 }}>
            Bespoke furniture and interior styling from our Agrabad studio.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <div style={{ fontSize: 15, letterSpacing: 5, color: "rgba(246,241,232,0.55)" }}>
            DESIGNED
          </div>
          <div style={{ width: 5, height: 5, backgroundColor: "#b08d57" }} />
          <div style={{ fontSize: 15, letterSpacing: 5, color: "rgba(246,241,232,0.55)" }}>
            CRAFTED
          </div>
          <div style={{ width: 5, height: 5, backgroundColor: "#b08d57" }} />
          <div style={{ fontSize: 15, letterSpacing: 5, color: "rgba(246,241,232,0.55)" }}>
            CUSTOMIZED
          </div>
        </div>
      </div>
    ),
    size
  );
}
