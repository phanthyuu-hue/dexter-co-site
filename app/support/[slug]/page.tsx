"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { commonFaq } from "@/data/faq";
import { SupportNav, SupportFooter, SectionLabel, StatusBadge } from "../_components";

/* ─── Link button (準備中なら非活性表示) ─── */
function LinkButton({
  href,
  label,
  primary,
}: {
  href: string | null;
  label: string;
  primary?: boolean;
}) {
  if (!href) {
    return (
      <span
        style={{
          display: "inline-block",
          padding: "0.75rem 1.8rem",
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          fontWeight: 400,
          letterSpacing: "0.05em",
          borderRadius: "8px",
          border: "1px solid rgba(245,244,240,0.15)",
          color: "rgba(245,244,240,0.3)",
        }}
      >
        {label}（準備中）
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        padding: "0.75rem 1.8rem",
        fontFamily: "var(--font-noto)",
        fontSize: "0.82rem",
        fontWeight: 400,
        letterSpacing: "0.05em",
        textDecoration: "none",
        transition: "all 0.25s",
        borderRadius: "8px",
        ...(primary
          ? { backgroundColor: "var(--gold)", color: "var(--navy)" }
          : { border: "1px solid rgba(200,164,110,0.4)", color: "var(--gold)" }),
      }}
      onMouseEnter={(e) => {
        if (primary) {
          e.currentTarget.style.opacity = "0.85";
          e.currentTarget.style.transform = "translateY(-1px)";
        } else {
          e.currentTarget.style.borderColor = "rgba(200,164,110,0.8)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateY(0)";
        if (!primary) e.currentTarget.style.borderColor = "rgba(200,164,110,0.4)";
      }}
    >
      {label}
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

  const faqItems = [...commonFaq, ...(product.faq ?? [])];
  const relatedGroup = product.group
    ? products.filter((p) => p.group === product.group && p.slug !== product.slug)
    : [];

  return (
    <>
      <SupportNav />
      <main>
        {/* ── Hero ── */}
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
                marginBottom: "2.5rem",
              }}
            >
              {product.description}
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <LinkButton href={product.websiteUrl} label="Webサイト" primary />
              <LinkButton href={product.appStoreUrl} label="App Store" />
            </div>
          </div>
        </section>

        {/* ── Related (Lily Series等) ── */}
        {relatedGroup.length > 0 && (
          <section style={{ padding: "4rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
              <SectionLabel>{product.groupLabel} の他のプロダクト</SectionLabel>
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

        {/* ── FAQ ── */}
        <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <SectionLabel>FAQ</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.6rem", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1.5rem" }}>
              よくあるご質問
            </h2>
            <div>
              {faqItems.map((item, i) => (
                <FaqAccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
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
              {product.name} について問い合わせる
            </Link>
          </div>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}
