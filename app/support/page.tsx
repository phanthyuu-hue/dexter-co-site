"use client";

import Link from "next/link";
import { getLiveProducts, getDevProducts, groupProductsForDisplay, type Product, type GroupedEntry } from "@/data/products";
import { SupportNav, SupportFooter, SectionLabel, StatusBadge } from "./_components";

/* ─── Product card (Support一覧用) ─── */
function SupportProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/support/${product.slug}`}
      style={{
        display: "block",
        border: "1px solid rgba(200,164,110,0.15)",
        background: "rgba(30,35,41,0.35)",
        padding: "2rem 2rem",
        textDecoration: "none",
        transition: "border-color 0.25s, transform 0.2s, background 0.25s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.45)";
        e.currentTarget.style.background = "rgba(30,35,41,0.6)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.15)";
        e.currentTarget.style.background = "rgba(30,35,41,0.35)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "var(--offwhite)",
          }}
        >
          {product.name}
        </h3>
        <StatusBadge status={product.status} />
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--gold)",
          opacity: 0.7,
          marginBottom: "1rem",
        }}
      >
        {product.category}
      </p>
      <p
        style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.88rem",
          lineHeight: 1.85,
          color: "rgba(245,244,240,0.6)",
          fontWeight: 300,
        }}
      >
        {product.description}
      </p>
    </Link>
  );
}

/* ─── Group card (Lily Seriesなど、複数プロダクトをまとめて表示) ─── */
function SupportGroupCard({ groupLabel, products }: { groupLabel: string; products: Product[] }) {
  // グループの代表ステータス：1件でも「公開中」があれば公開中、なければβ公開中扱いで表示
  const representativeStatus = products.some((p) => p.status === "公開中") ? "公開中" : products[0].status;

  return (
    <div
      style={{
        border: "1px solid rgba(200,164,110,0.2)",
        background: "rgba(30,35,41,0.4)",
        padding: "2rem 2rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "1.3rem",
            fontWeight: 500,
            color: "var(--offwhite)",
          }}
        >
          {groupLabel}
        </h3>
        <StatusBadge status={representativeStatus} />
      </div>
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.65rem",
          letterSpacing: "0.1em",
          color: "var(--gold)",
          opacity: 0.7,
          marginBottom: "1.25rem",
        }}
      >
        {products.length}件のプロダクト
      </p>
      <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/support/${p.slug}`}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.75rem",
              color: "rgba(245,244,240,0.65)",
              border: "1px solid rgba(200,164,110,0.25)",
              padding: "0.4rem 0.9rem",
              textDecoration: "none",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--gold)";
              e.currentTarget.style.borderColor = "rgba(200,164,110,0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(245,244,240,0.65)";
              e.currentTarget.style.borderColor = "rgba(200,164,110,0.25)";
            }}
          >
            {p.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
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
        <SectionLabel>Support</SectionLabel>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "var(--offwhite)",
            marginBottom: "1.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Dexter & Co. Support Center
        </h1>
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
          サービス・アプリに関するヘルプ、お問い合わせ、FAQをまとめています。
        </p>
      </div>
    </section>
  );
}

/* ─── Product grid section ─── */
function ProductGridSection({
  label,
  title,
  entries,
  emptyText,
}: {
  label: string;
  title: string;
  entries: GroupedEntry[];
  emptyText: string;
}) {
  return (
    <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionLabel>{label}</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "2.5rem",
          }}
        >
          {title}
        </h2>
        {entries.length === 0 ? (
          <p
            style={{
              fontFamily: "var(--font-noto)",
              fontSize: "0.9rem",
              color: "rgba(245,244,240,0.4)",
              fontWeight: 300,
            }}
          >
            {emptyText}
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {entries.map((entry) =>
              entry.type === "group" ? (
                <SupportGroupCard key={entry.groupKey} groupLabel={entry.groupLabel} products={entry.products} />
              ) : (
                <SupportProductCard key={entry.product.slug} product={entry.product} />
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}

/* ─── FAQ teaser ─── */
function FaqTeaser() {
  return (
    <section style={{ padding: "6rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <SectionLabel>FAQ</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "1.5rem",
          }}
        >
          よくあるご質問
        </h2>
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.92rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.6)",
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          使い方・不具合・データ削除・課金についてのご質問はこちらをご確認ください。
        </p>
        <Link href="/support/faq" className="btn-gold">
          FAQを見る
        </Link>
      </div>
    </section>
  );
}

/* ─── Contact CTA ─── */
function ContactCta() {
  return (
    <section style={{ padding: "6rem 2.5rem" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <SectionLabel>Contact</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "1.5rem",
          }}
        >
          解決しない場合は、お問い合わせください
        </h2>
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.92rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.6)",
            fontWeight: 300,
            marginBottom: "2.5rem",
          }}
        >
          対象のプロダクトを選択して、お気軽にご連絡ください。
        </p>
        <Link href="/support/contact" className="btn-gold">
          お問い合わせ
        </Link>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function SupportPage() {
  const liveEntries = groupProductsForDisplay(getLiveProducts());
  const devEntries = groupProductsForDisplay(getDevProducts());

  return (
    <>
      <SupportNav />
      <main>
        <Hero />
        <ProductGridSection
          label="Live Products"
          title="公開中プロダクト"
          entries={liveEntries}
          emptyText="現在公開中のプロダクトはありません。"
        />
        <ProductGridSection
          label="In Development"
          title="開発中プロダクト"
          entries={devEntries}
          emptyText="現在開発中のプロダクトはありません。"
        />
        <FaqTeaser />
        <ContactCta />
      </main>
      <SupportFooter />
    </>
  );
}