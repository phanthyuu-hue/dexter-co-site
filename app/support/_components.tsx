"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORT_EMAIL } from "@/data/products";

/**
 * ─────────────────────────────────────────────
 * Support Center 共通UIパーツ
 * ─────────────────────────────────────────────
 * /support 以下の全ページから読み込まれます。
 * デザインは既存サイト（app/page.tsx 等）のトーンに合わせています。
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
export function SupportNav() {
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
          const isActive = pathname === link.href || (link.href === "/support" && pathname?.startsWith("/support"));
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
export function SupportFooter() {
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
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.7rem",
              fontStyle: "italic",
              color: "rgba(200,164,110,0.4)",
              letterSpacing: "0.05em",
            }}
          >
            From Problem to Product.
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
            Support Center
          </p>
          {[
            { label: "FAQ", href: "/support/faq" },
            { label: "お問い合わせ", href: "/support/contact" },
            { label: "稼働状況", href: "/support/status" },
            { label: "ダウンロード", href: "/support/downloads" },
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

/* ─── Status badge (used across Support pages) ─── */
export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: "0.62rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(200,164,110,0.9)",
        border: "1px solid rgba(200,164,110,0.4)",
        padding: "0.2rem 0.75rem",
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

/* ─── Page header (shared hero pattern for Support sub-pages) ─── */
export function SupportPageHeader({
  label,
  title,
  subtitleEn,
  lead,
}: {
  label: string;
  title: string;
  subtitleEn?: string;
  lead?: string;
}) {
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
        <SectionLabel>{label}</SectionLabel>
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
          {title}
          {subtitleEn && (
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-inter)",
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                color: "rgba(200,164,110,0.45)",
                marginTop: "0.75rem",
                fontWeight: 300,
              }}
            >
              {subtitleEn}
            </span>
          )}
        </h1>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
        {lead && (
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
            {lead}
          </p>
        )}
      </div>
    </section>
  );
}
