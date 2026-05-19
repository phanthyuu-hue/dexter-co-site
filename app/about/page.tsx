"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Section label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
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
function Nav() {
  const pathname = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.25rem 2.5rem",
      background: "rgba(11,29,45,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(200,164,110,0.1)",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image src="/logo-dark.png" alt="Dexter & Co." width={160} height={36}
          style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        <span className="nav-brand-text" style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "0.95rem",
          fontWeight: 500,
          color: "rgba(245,244,240,0.82)",
          letterSpacing: "0.14em",
          whiteSpace: "nowrap",
        }}>
          DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
        </span>
      </Link>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="nav-link"
            style={pathname === link.href ? { color: "var(--gold)", opacity: 1 } : {}}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
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
            <Image src="/logo-dark.png" alt="Dexter & Co." width={28} height={28}
              style={{ width: "28px", height: "28px", objectFit: "contain", opacity: 0.75 }} />
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "0.9rem", fontWeight: 500, color: "rgba(245,244,240,0.55)", letterSpacing: "0.12em" }}>
              DEXTER <span style={{ color: "var(--gold)", opacity: 0.7 }}>&</span> Co.
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.08em" }}>
            Tokyo / Remote
          </p>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.7rem", fontStyle: "italic", color: "rgba(200,164,110,0.4)", letterSpacing: "0.05em" }}>
            From Problem to Product.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>
            Contact
          </p>
          <a href="mailto:hello@dexter-co.jp"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.45)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.45)")}>
            hello@dexter-co.jp
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>
            Products
          </p>
          {["Lily Series", "Silent", "TabiLog"].map((p) => (
            <p key={p} style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.4)", letterSpacing: "0.04em" }}>
              {p}
            </p>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", borderTop: "1px solid rgba(245,244,240,0.05)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
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

/* ─── Section 1: Hero ─── */
function Hero() {
  return (
    <section
      style={{
        paddingTop: "18rem",
        paddingBottom: "7rem",
        paddingLeft: "2.5rem",
        paddingRight: "2.5rem",
        borderBottom: "1px solid rgba(245,244,240,0.06)",
      }}
    >
      <div style={{ maxWidth: "800px" }}>
        <SectionLabel>About</SectionLabel>
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 500,
            lineHeight: 1.1,
            color: "var(--offwhite)",
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          We build products
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>from real problems.</em>
        </h1>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.85rem",
          color: "rgba(200,164,110,0.75)",
          letterSpacing: "0.06em",
          marginBottom: "2.5rem",
          fontWeight: 300,
        }}>
          現場の課題を見つけ、実際に使われるプロダクトへ。
        </p>
        <span
          style={{
            display: "block",
            width: "40px",
            height: "1px",
            backgroundColor: "var(--gold)",
            opacity: 0.7,
            marginBottom: "2.5rem",
          }}
        />
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "1.05rem",
            lineHeight: 2,
            color: "rgba(245,244,240,0.78)",
            fontWeight: 300,
            maxWidth: "600px",
            letterSpacing: "0.04em",
            marginBottom: "0.75rem",
          }}
        >
          Dexter & Co. は、課題発見からプロダクト化までを一貫して行う課題解決型ブランドです。
        </p>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.95rem",
          lineHeight: 1.9,
          color: "rgba(245,244,240,0.62)",
          fontWeight: 300,
          maxWidth: "560px",
          letterSpacing: "0.04em",
        }}>
          実際の業務や日常の課題から、使えるツールを設計・開発しています。
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: What we do ─── */
function WhatWeDo() {
  const items = [
    "実際の業務フローに合ったツールを設計・開発します。",
    "スピード・シンプルさ・実用性を重視して構築します。",
  ];

  return (
    <section
      style={{
        padding: "10rem 2.5rem",
        borderBottom: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(18,37,57,0.3)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>What we do</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
            fontWeight: 600,
            color: "var(--offwhite)",
            marginBottom: "3rem",
            letterSpacing: "0.04em",
          }}
        >
          私たちのアプローチ
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>What we do</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          color: "rgba(245,244,240,0.42)",
          letterSpacing: "0.05em",
          marginBottom: "2rem",
          fontWeight: 300,
          marginTop: "-1.5rem",
        }}>
          私たちが提供すること
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom: "1px solid rgba(245,244,240,0.06)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  color: "var(--gold)",
                  opacity: 0.5,
                  minWidth: "2rem",
                  paddingTop: "0.2rem",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p
                style={{
                  fontFamily: "var(--font-noto)",
                  fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                  fontWeight: 500,
                  color: "rgba(245,244,240,0.85)",
                  lineHeight: 1.7,
                  letterSpacing: "0.03em",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3: Philosophy ─── */
function Philosophy() {
  const items = [
    "多くのプロダクトは、本質的な課題を解決していないから失敗します。",
    "私たちはアイデアではなく、課題から始めます。",
    "良いプロダクトは、実際に観察された課題からしか生まれません。",
  ];

  return (
    <section
      style={{
        padding: "10rem 2.5rem",
        borderBottom: "1px solid rgba(245,244,240,0.06)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Our philosophy</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            fontStyle: "italic",
            color: "var(--offwhite)",
            marginBottom: "4rem",
          }}
        >
          課題から始める。
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300, fontStyle: "normal" }}>From Problem to Product.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          color: "rgba(200,164,110,0.65)",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          fontWeight: 300,
          marginTop: "-2rem",
        }}>
          アイデアではなく、課題から始める。
        </p>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.8rem",
          color: "rgba(245,244,240,0.32)",
          letterSpacing: "0.04em",
          fontWeight: 300,
          marginBottom: "2.5rem",
          marginTop: "-2rem",
          lineHeight: 1.8,
        }}>
          良いプロダクトは、実際の課題からしか生まれないと考えています。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "2rem",
                padding: "2rem 0",
                borderBottom: "1px solid rgba(245,244,240,0.06)",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "var(--gold)",
                  opacity: 0.5,
                  minWidth: "6px",
                  marginTop: "0.6rem",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-noto)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(245,244,240,0.68)",
                  lineHeight: 1.9,
                  letterSpacing: "0.02em",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4: Products ─── */
const products = [
  {
    name: "Lily Series",
    tag: "Store Operations",
    description: "店舗運営に必要な管理を一つにまとめた業務プラットフォーム。シフト管理・売上管理・予約対応・LINE返信までを一元化し、運用負担を大幅に削減します。",
    index: "01",
    cta: [
      { label: "デモを見る", href: "https://lily-os.vercel.app/", primary: true },
      { label: "LINEで相談する", href: "https://line.me/ti/p/~hello-dexter", primary: false },
    ],
  },
  {
    name: "Silent",
    tag: "Privacy AI",
    description: "履歴を残さない、プライバシー重視のAIチャット。日常の判断や業務のちょっとした意思決定を、安心してサポートします。",
    index: "02",
    cta: [
      { label: "コンセプトについて相談する", href: "/contact", primary: true },
    ],
  },
  {
    name: "TabiLog",
    tag: "Travel & Life",
    description: "旅の記録と振り返りをまとめて管理できるアプリ。支出・思い出・移動履歴を一元化し、AIが旅の気づきや振り返りをサポートします。",
    index: "03",
    cta: [
      { label: "開発状況を相談する", href: "/contact", primary: true },
    ],
  },
];

function Products() {
  return (
    <section
      style={{
        padding: "10rem 2.5rem",
        borderBottom: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(18,37,57,0.2)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Products</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "4rem",
          }}
        >
          DexTechが開発したプロダクト
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>Products built by DexTech.</span>
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          color: "rgba(245,244,240,0.42)",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          fontWeight: 300,
          marginTop: "-2rem",
        }}>
          DexTechによって生まれたプロダクト群。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {products.map((product) => (
            <div
              key={product.name}
              style={{
                display: "grid",
                gridTemplateColumns: "3rem 1fr",
                gap: "1.5rem",
                padding: "2.5rem 0",
                borderBottom: "1px solid rgba(245,244,240,0.06)",
                alignItems: "start",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.22em",
                  color: "var(--gold)",
                  opacity: 0.5,
                  paddingTop: "0.3rem",
                }}
              >
                {product.index}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair)",
                      fontSize: "1.25rem",
                      fontWeight: 500,
                      color: "var(--offwhite)",
                    }}
                  >
                    {product.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.62rem",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      border: "1px solid rgba(200,164,110,0.3)",
                      padding: "0.15rem 0.65rem",
                    }}
                  >
                    {product.tag}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-noto)",
                    fontSize: "0.9rem",
                    lineHeight: 1.9,
                    color: "rgba(245,244,240,0.68)",
                    fontWeight: 300,
                    maxWidth: "560px",
                    letterSpacing: "0.03em",
                  }}
                >
                  {product.description}
                </p>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
                  {product.cta.map((btn, j) => (
                    <a
                      key={j}
                      href={btn.href}
                      target={btn.href.startsWith("http") ? "_blank" : undefined}
                      rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        display: "inline-block",
                        padding: "0.65rem 1.6rem",
                        fontFamily: "var(--font-noto)",
                        fontSize: "0.78rem",
                        fontWeight: 400,
                        letterSpacing: "0.05em",
                        textDecoration: "none",
                        transition: "all 0.25s",
                        ...(btn.primary
                          ? { backgroundColor: "var(--gold)", color: "var(--navy)" }
                          : { border: "1px solid rgba(200,164,110,0.4)", color: "var(--gold)" }
                        ),
                      }}
                      onMouseEnter={(e) => {
                        if (btn.primary) e.currentTarget.style.opacity = "0.85";
                        else e.currentTarget.style.borderColor = "rgba(200,164,110,0.8)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "1";
                        if (!btn.primary) e.currentTarget.style.borderColor = "rgba(200,164,110,0.4)";
                      }}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WhatWeDo />
        <Philosophy />
        <Products />
      </main>
      <Footer />
    </>
  );
}