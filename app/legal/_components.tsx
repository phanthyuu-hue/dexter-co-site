"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORT_EMAIL } from "@/data/products";

/**
 * ─────────────────────────────────────────────
 * Legal Center 共通UIパーツ
 * ─────────────────────────────────────────────
 * /legal 以下の全ページから読み込まれます。
 * Legal文書ページなので、Support Centerより装飾を抑え
 * 「読みやすさ優先」のレイアウトにしています。
 */

/* ── Section label ── */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: "0.7rem",
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "var(--gold)",
        opacity: 0.85,
        marginBottom: "1.5rem",
      }}
    >
      {children}
    </p>
  );
}

/* ─── Nav ─── */
export function LegalNav() {
  const pathname = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2.5rem",
        background: "rgba(11,29,45,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,164,110,0.1)",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image
          src="/logo-dark.png"
          alt="Dexter & Co."
          width={160}
          height={36}
          style={{ height: "36px", width: "auto", objectFit: "contain" }}
        />
        <span
          className="nav-brand-text"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "rgba(245,244,240,0.82)",
            letterSpacing: "0.14em",
            whiteSpace: "nowrap",
          }}
        >
          DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
        </span>
      </Link>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((link) => {
          const isActive = link.href === "/support" ? pathname?.startsWith("/support") : pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              style={isActive ? { color: "var(--gold)", opacity: 1 } : {}}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
export function LegalFooter() {
  return (
    <footer style={{ padding: "2.5rem 2.5rem 2rem", borderTop: "1px solid rgba(200,164,110,0.12)" }}>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          marginBottom: "2rem",
          alignItems: "start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
            <Image
              src="/logo-dark.png"
              alt="Dexter & Co."
              width={28}
              height={28}
              style={{ width: "28px", height: "28px", objectFit: "contain", opacity: 0.75 }}
            />
            <span
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "rgba(245,244,240,0.55)",
                letterSpacing: "0.12em",
              }}
            >
              DEXTER <span style={{ color: "var(--gold)", opacity: 0.7 }}>&</span> Co.
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.08em" }}>
            Tokyo / Remote
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: 0.65,
              marginBottom: "0.25rem",
            }}
          >
            Support
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.78rem",
              color: "rgba(245,244,240,0.45)",
              letterSpacing: "0.04em",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.45)")}
          >
            {SUPPORT_EMAIL}
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--gold)",
              opacity: 0.65,
              marginBottom: "0.25rem",
            }}
          >
            Legal
          </p>
          {[
            { label: "Legal Center", href: "/legal" },
            { label: "特定商取引法に基づく表記", href: "/legal/commercial-disclosure" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                color: "rgba(245,244,240,0.4)",
                letterSpacing: "0.04em",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.4)")}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          borderTop: "1px solid rgba(245,244,240,0.05)",
          paddingTop: "1rem",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(245,244,240,0.25)", letterSpacing: "0.04em" }}>
          © Dexter & Co. All rights reserved.
        </p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(245,244,240,0.25)", letterSpacing: "0.04em" }}>
          Built by DexTech.
        </p>
      </div>
    </footer>
  );
}

/* ─── Legal文書ページ共通ヘッダー ─── */
export function LegalDocHeader({
  label,
  title,
  productName,
  updatedAt,
}: {
  label: string;
  title: string;
  productName: string;
  updatedAt: string;
}) {
  return (
    <section
      style={{
        paddingTop: "14rem",
        paddingBottom: "3rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        borderBottom: "1px solid rgba(245,244,240,0.08)",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionLabel>{label}</SectionLabel>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 500,
            lineHeight: 1.3,
            color: "var(--offwhite)",
            marginBottom: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h1>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "rgba(245,244,240,0.5)", marginBottom: "0.5rem" }}>
          対象プロダクト：{productName}
        </p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.04em" }}>
          最終改定日：{updatedAt}
        </p>
      </div>
    </section>
  );
}

/* ─── Legal文書の見出し ─── */
export function LegalSectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-playfair)",
        fontSize: "1.15rem",
        fontWeight: 500,
        color: "var(--offwhite)",
        marginTop: "2.75rem",
        marginBottom: "1rem",
        paddingBottom: "0.6rem",
        borderBottom: "1px solid rgba(200,164,110,0.2)",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Legal文書の本文段落 ─── */
export function LegalParagraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-noto)",
        fontSize: "0.92rem",
        lineHeight: 2,
        color: "rgba(245,244,240,0.72)",
        fontWeight: 300,
        letterSpacing: "0.02em",
        marginBottom: "1rem",
      }}
    >
      {children}
    </p>
  );
}

/* ─── Legal文書の箇条書き ─── */
export function LegalList({ items }: { items: string[] }) {
  return (
    <ul style={{ marginBottom: "1rem", paddingLeft: "1.4rem" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.92rem",
            lineHeight: 2,
            color: "rgba(245,244,240,0.72)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            marginBottom: "0.3rem",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Legal文書ページ全体のラッパー（本文幅を制限） ─── */
export function LegalDocBody({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ padding: "0 2.5rem 6rem" }}>
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>{children}</div>
    </section>
  );
}