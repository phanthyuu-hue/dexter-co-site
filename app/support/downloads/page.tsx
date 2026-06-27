"use client";

import Link from "next/link";
import { getLiveProducts } from "@/data/products";
import { SupportNav, SupportFooter, SupportPageHeader, StatusBadge } from "../_components";

function LinkChip({ href, label }: { href: string | null; label: string }) {
  if (!href) {
    return (
      <span
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.72rem",
          color: "rgba(245,244,240,0.3)",
          border: "1px solid rgba(245,244,240,0.1)",
          padding: "0.4rem 0.9rem",
        }}
      >
        {label}：準備中
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: "0.72rem",
        color: "var(--gold)",
        border: "1px solid rgba(200,164,110,0.35)",
        padding: "0.4rem 0.9rem",
        textDecoration: "none",
        transition: "border-color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,110,0.8)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,110,0.35)")}
    >
      {label}
    </a>
  );
}

export default function DownloadsPage() {
  const liveProducts = getLiveProducts();

  return (
    <>
      <SupportNav />
      <main>
        <SupportPageHeader
          label="Downloads"
          title="ダウンロード"
          subtitleEn="Available Products"
          lead="現在公開中の全プロダクトの一覧です。"
        />
        <section style={{ padding: "5rem 2.5rem 8rem" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {liveProducts.length === 0 ? (
              <p style={{ fontFamily: "var(--font-noto)", color: "rgba(245,244,240,0.4)" }}>
                現在公開中のプロダクトはありません。
              </p>
            ) : (
              liveProducts.map((p) => (
                <div
                  key={p.slug}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "1rem",
                    padding: "1.5rem 2rem",
                    border: "1px solid rgba(200,164,110,0.15)",
                    background: "rgba(30,35,41,0.35)",
                  }}
                >
                  <div style={{ minWidth: "200px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                      <Link
                        href={`/support/${p.slug}`}
                        style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", color: "var(--offwhite)", textDecoration: "none" }}
                      >
                        {p.name}
                      </Link>
                      <StatusBadge status={p.status} />
                    </div>
                    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "var(--gold)", opacity: 0.6 }}>
                      {p.category}
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                    <LinkChip href={p.websiteUrl} label="Web" />
                    <LinkChip href={p.appStoreUrl} label="App Store" />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}
