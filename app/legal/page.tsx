"use client";

import Link from "next/link";
import { products, type Product } from "@/data/products";
import { LegalNav, LegalFooter, SectionLabel } from "./_components";

const DOC_TYPES = [
  {
    key: "privacy" as const,
    label: "Privacy Policy",
    labelJa: "プライバシーポリシー",
    description: "収集する情報・利用目的・第三者提供・データ保存についての方針です。",
  },
  {
    key: "terms" as const,
    label: "Terms of Service",
    labelJa: "利用規約",
    description: "サービスの利用条件・禁止事項・免責事項についての定めです。",
  },
  {
    key: "dataDeletion" as const,
    label: "Data Deletion",
    labelJa: "データ削除について",
    description: "アカウント・データの削除をご希望の場合の手続き方法です。",
  },
];

function ProductLegalRow({ product }: { product: Product }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "0.75rem",
        padding: "1.25rem 0",
        borderBottom: "1px solid rgba(245,244,240,0.07)",
      }}
    >
      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "var(--offwhite)" }}>{product.name}</p>
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
        {DOC_TYPES.map((doc) => {
          const href = product.legal?.[doc.key];
          if (!href) {
            return (
              <span
                key={doc.key}
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.25)" }}
              >
                {doc.labelJa}（準備中）
              </span>
            );
          }
          return (
            <Link
              key={doc.key}
              href={href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                color: "var(--gold)",
                textDecoration: "none",
                opacity: 0.85,
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
            >
              {doc.labelJa}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function LegalPage() {
  return (
    <>
      <LegalNav />
      <main>
        {/* Hero */}
        <section
          style={{
            paddingTop: "16rem",
            paddingBottom: "5rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            borderBottom: "1px solid rgba(245,244,240,0.06)",
          }}
        >
          <div style={{ maxWidth: "700px" }}>
            <SectionLabel>Legal</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 5vw, 3.6rem)",
                fontWeight: 500,
                lineHeight: 1.15,
                color: "var(--offwhite)",
                marginBottom: "1.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Legal Center
            </h1>
            <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
            <p
              style={{
                fontFamily: "var(--font-noto)",
                fontSize: "1rem",
                lineHeight: 2,
                color: "rgba(245,244,240,0.75)",
                fontWeight: 300,
                maxWidth: "560px",
                letterSpacing: "0.04em",
              }}
            >
              Dexter & Co. が提供するサービス・アプリの法務情報をまとめています。
            </p>
          </div>
        </section>

        {/* 文書種別の説明 */}
        <section style={{ padding: "5rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <SectionLabel>Document Types</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {DOC_TYPES.map((doc) => (
                <div key={doc.key}>
                  <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "0.5rem" }}>
                    {doc.labelJa}
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(200,164,110,0.5)", marginLeft: "0.75rem", letterSpacing: "0.05em" }}>
                      {doc.label}
                    </span>
                  </h3>
                  <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(245,244,240,0.55)", fontWeight: 300 }}>
                    {doc.description}
                  </p>
                </div>
              ))}
              <div>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.15rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "0.5rem" }}>
                  特定商取引法に基づく表記
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(200,164,110,0.5)", marginLeft: "0.75rem", letterSpacing: "0.05em" }}>
                    Commercial Disclosure
                  </span>
                </h3>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.8, color: "rgba(245,244,240,0.55)", fontWeight: 300, marginBottom: "0.75rem" }}>
                  特定商取引法に基づく事業者情報の表記です。
                </p>
                <Link
                  href="/legal/commercial-disclosure"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "var(--gold)", textDecoration: "none" }}
                >
                  表記を見る →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* プロダクト別リンク一覧 */}
        <section style={{ padding: "5rem 2.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <SectionLabel>Products</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "2rem" }}>
              プロダクト別 法務情報
            </h2>
            <div>
              {products.map((p) => (
                <ProductLegalRow key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <LegalFooter />
    </>
  );
}