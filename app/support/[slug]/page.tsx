"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, products, type Product } from "@/data/products";
import { commonFaq } from "@/data/faq";
import { serviceStatus, STATE_LABEL, type ServiceState } from "@/data/status";
import { SupportNav, SupportFooter, SectionLabel, StatusBadge } from "../_components";

/* ─── Quick link card (Webサイト / App Store / FAQ / お問い合わせ) ─── */
function QuickLinkCard({
  label,
  description,
  href,
  external,
  disabled,
}: {
  label: string;
  description: string;
  href: string | null;
  external?: boolean;
  disabled?: boolean;
}) {
  const baseStyle: React.CSSProperties = {
    display: "block",
    padding: "1.5rem 1.5rem",
    border: "1px solid rgba(200,164,110,0.15)",
    background: "rgba(30,35,41,0.35)",
    textDecoration: "none",
    transition: "border-color 0.25s, background 0.25s",
  };

  if (disabled || !href) {
    return (
      <div style={{ ...baseStyle, opacity: 0.4 }}>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "var(--offwhite)", marginBottom: "0.4rem" }}>
          {label}（準備中）
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.78rem", color: "rgba(245,244,240,0.45)" }}>{description}</p>
      </div>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={baseStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.45)";
        e.currentTarget.style.background = "rgba(30,35,41,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.15)";
        e.currentTarget.style.background = "rgba(30,35,41,0.35)";
      }}
    >
      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "var(--offwhite)", marginBottom: "0.4rem" }}>
        {label}
      </p>
      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.78rem", color: "rgba(245,244,240,0.55)" }}>{description}</p>
    </a>
  );
}

/* ─── FAQ accordion item ─── */
function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(245,244,240,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.95rem",
            color: "var(--offwhite)",
            fontWeight: 400,
          }}
        >
          {question}
        </span>
        <span style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, marginLeft: "1rem" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.85rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.6)",
            fontWeight: 300,
            paddingBottom: "1.5rem",
            maxWidth: "640px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

/** プロダクトの対応環境を、保有データから動的に導出する（products.tsに新規フィールドを増やさない） */
function getSupportedPlatforms(product: Product): string[] {
  const platforms: string[] = [];
  if (product.websiteUrl) platforms.push("Web");
  if (product.appStoreUrl) platforms.push("iOS");
  if (platforms.length === 0) platforms.push("準備中");
  return platforms;
}

function getStateForSlug(slug: string): ServiceState {
  return serviceStatus.find((s) => s.slug === slug)?.state ?? "operational";
}

/* ─── Page ─── */
export default function ProductSupportPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <>
        <SupportNav />
        <main>
          <section style={{ paddingTop: "16rem", paddingBottom: "8rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", textAlign: "center" }}>
            <SectionLabel>Support</SectionLabel>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", color: "var(--offwhite)", marginBottom: "1.5rem" }}>
              プロダクトが見つかりませんでした
            </h1>
            <p style={{ fontFamily: "var(--font-noto)", color: "rgba(245,244,240,0.6)", marginBottom: "2rem" }}>
              指定されたプロダクトは存在しないか、削除されています。
            </p>
            <Link href="/support" className="btn-gold">
              Support Centerへ戻る
            </Link>
          </section>
        </main>
        <SupportFooter />
      </>
    );
  }

  const faqPreview = commonFaq.slice(0, 5);
  const relatedGroup = product.group
    ? products.filter((p) => p.group === product.group && p.slug !== product.slug)
    : [];
  const platforms = getSupportedPlatforms(product);
  const serviceState = getStateForSlug(product.slug);

  return (
    <>
      <SupportNav />
      <main>
        {/* ── 1. Hero ── */}
        <section
          style={{
            paddingTop: "16rem",
            paddingBottom: "5rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            borderBottom: "1px solid rgba(245,244,240,0.06)",
          }}
        >
          <div style={{ maxWidth: "800px" }}>
            <SectionLabel>Support / {product.groupLabel ?? product.category}</SectionLabel>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <h1
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(2rem, 5vw, 3.6rem)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  color: "var(--offwhite)",
                  letterSpacing: "-0.01em",
                }}
              >
                {product.name}
              </h1>
              <StatusBadge status={product.status} />
            </div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                color: "var(--gold)",
                opacity: 0.6,
                marginBottom: "2rem",
              }}
            >
              {product.category}
            </p>
            <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
            <p
              style={{
                fontFamily: "var(--font-noto)",
                fontSize: "1.05rem",
                lineHeight: 2,
                color: "rgba(245,244,240,0.78)",
                fontWeight: 300,
                maxWidth: "580px",
                letterSpacing: "0.04em",
              }}
            >
              {product.description}
            </p>
          </div>
        </section>

        {/* ── Related (Lily Series等) ── */}
        {relatedGroup.length > 0 && (
          <section style={{ padding: "3rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <SectionLabel>{product.groupLabel} の関連プロダクト</SectionLabel>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {relatedGroup.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/support/${p.slug}`}
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.78rem",
                      color: "rgba(245,244,240,0.6)",
                      border: "1px solid rgba(200,164,110,0.25)",
                      padding: "0.5rem 1.2rem",
                      textDecoration: "none",
                      transition: "color 0.2s, border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--gold)";
                      e.currentTarget.style.borderColor = "rgba(200,164,110,0.6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(245,244,240,0.6)";
                      e.currentTarget.style.borderColor = "rgba(200,164,110,0.25)";
                    }}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 2. Quick Links ── */}
        <section style={{ padding: "5rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <SectionLabel>Quick Links</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "2rem" }}>
              関連リンク
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "1rem",
              }}
            >
              <QuickLinkCard
                label="Webサイト"
                description={`${product.name} のWebサイトを開きます`}
                href={product.websiteUrl}
                external
              />
              <QuickLinkCard
                label="App Store"
                description={`${product.name} をApp Storeで見る`}
                href={product.appStoreUrl}
                external
              />
              <QuickLinkCard
                label="FAQ"
                description="共通のよくあるご質問を確認する"
                href="/support/faq"
              />
              <QuickLinkCard
                label="お問い合わせ"
                description={`${product.name} について問い合わせる`}
                href={`/support/contact?product=${product.slug}`}
              />
            </div>
          </div>
        </section>

        {/* ── 3. Support Information ── */}
        <section style={{ padding: "5rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <SectionLabel>Support Information</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "2rem" }}>
              サポート情報
            </h2>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 0", borderBottom: "1px solid rgba(245,244,240,0.08)", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,164,110,0.7)" }}>
                  対応環境
                </span>
                <span style={{ fontFamily: "var(--font-noto)", fontSize: "0.9rem", color: "var(--offwhite)" }}>
                  {platforms.join(" / ")}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 0", borderBottom: "1px solid rgba(245,244,240,0.08)", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,164,110,0.7)" }}>
                  公開状況
                </span>
                <StatusBadge status={product.status} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 0", borderBottom: "1px solid rgba(245,244,240,0.08)", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,164,110,0.7)" }}>
                  現在の状態
                </span>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.85rem", color: "rgba(245,244,240,0.75)" }}>
                  {STATE_LABEL[serviceState]}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.1rem 0", flexWrap: "wrap", gap: "0.5rem" }}>
                <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(200,164,110,0.7)" }}>
                  問い合わせ先
                </span>
                <Link
                  href={`/support/contact?product=${product.slug}`}
                  style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", color: "var(--gold)", textDecoration: "none" }}
                >
                  共通お問い合わせフォーム →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Common FAQ ── */}
        <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <SectionLabel>FAQ</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1.5rem" }}>
              よくあるご質問
            </h2>
            <div style={{ marginBottom: "1.5rem" }}>
              {faqPreview.map((item, i) => (
                <FaqAccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
            <Link
              href="/support/faq"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.08em", color: "var(--gold)", textDecoration: "none" }}
            >
              さらに見る →
            </Link>
          </div>
        </section>

        {/* ── 5. Contact CTA ── */}
        <section style={{ padding: "6rem 2.5rem" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <SectionLabel>Contact</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1.5rem" }}>
              解決しませんか？
            </h2>
            <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "rgba(245,244,240,0.6)", marginBottom: "2rem" }}>
              {product.name} についてのご質問・ご要望はこちらからお送りください。
            </p>
            <Link href={`/support/contact?product=${product.slug}`} className="btn-gold">
              このプロダクトについて問い合わせる
            </Link>
          </div>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}