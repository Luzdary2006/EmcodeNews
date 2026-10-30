import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = `${site.name} — The digital toolkit for university life`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f7f3ea",
          padding: "64px 72px",
          color: "#15161a",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#5c5b54",
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            <span>{site.issue}</span>
            <span>{site.issueDate}</span>
          </div>
          <span>A digital magazine for students</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              width: 72,
              height: 6,
              backgroundColor: "#7939cc",
              marginBottom: 32,
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 96,
              lineHeight: 1,
              letterSpacing: -4,
              maxWidth: 960,
            }}
          >
            The digital toolkit for university life.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "2px solid #ded8c9",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
            <span style={{ fontSize: 44, letterSpacing: -2 }}>Emcode</span>
            <span style={{ fontSize: 44, fontStyle: "italic" }}>News</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 24,
              color: "#5c5b54",
            }}
          >
            <span>12 tools</span>
            <span>3 categories</span>
            <span>No pay-to-rank</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
