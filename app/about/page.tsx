"use client";

import Image from "next/image";
import Link from "next/link";

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
        {[
          { label: "About", href: "/about" },
          { label: "Products", href: "/#products" },
          { label: "Contact", href: "/#contact" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-link"
            style={item.href === "/about" ? { color: "var(--gold)" } : {}}
          >
            {item.label}
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
        paddingTop: "14rem",
        paddingBottom: "8rem",
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
          fontSize: "0.82rem",
          color: "rgba(200,164,110,0.55)",
          letterSpacing: "0.06em",
          marginBottom: "2rem",
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
            fontFamily: "var(--font-inter)",
            fontSize: "1.05rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.5)",
            fontWeight: 300,
            maxWidth: "600px",
            letterSpacing: "0.02em",
          }}
        >
          Dexter & Co. is a product-driven company focused on identifying
          real-world problems and turning them into scalable solutions.
        </p>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.8rem",
          color: "rgba(245,244,240,0.3)",
          letterSpacing: "0.04em",
          marginTop: "1rem",
          fontWeight: 300,
          lineHeight: 1.9,
        }}>
          Dexter & Co. は、課題発見からプロダクト化までを一貫して行う課題解決型ブランドです。
        </p>
      </div>
    </section>
  );
}

/* ─── Section 2: What we do ─── */
function WhatWeDo() {
  const items = [
    "We design, build, and launch digital products.",
    "We focus on speed, simplicity, and real usability.",
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
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "4rem",
          }}
        >
          What we do.
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.8rem",
          color: "rgba(245,244,240,0.3)",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          fontWeight: 300,
          marginTop: "-2.5rem",
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
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  fontWeight: 400,
                  color: "rgba(245,244,240,0.75)",
                  lineHeight: 1.5,
                  letterSpacing: "0.01em",
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
    "Many products fail because they don't solve real problems.",
    "We start from the problem, not the idea.",
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
          From Problem to Product.
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.8rem",
          color: "rgba(245,244,240,0.3)",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          fontWeight: 300,
          marginTop: "-2.5rem",
        }}>
          アイデアではなく、課題から始める。
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
                  fontFamily: "var(--font-inter)",
                  fontSize: "1rem",
                  fontWeight: 300,
                  color: "rgba(245,244,240,0.55)",
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
    description: "An all-in-one platform for store management — shifts, sales, reservations, and AI-assisted messaging.",
    index: "01",
  },
  {
    name: "Silent",
    tag: "Privacy AI",
    description: "A privacy-first AI chat that leaves no history. Quietly useful for daily decisions and work.",
    index: "02",
  },
  {
    name: "TabiLog",
    tag: "Travel & Life",
    description: "A travel log app for tracking expenses, memories, and AI-powered trip reflections.",
    index: "03",
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
          Products built by DexTech.
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.8rem",
          color: "rgba(245,244,240,0.3)",
          letterSpacing: "0.05em",
          marginBottom: "3rem",
          fontWeight: 300,
          marginTop: "-2.5rem",
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
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "rgba(245,244,240,0.45)",
                    fontWeight: 300,
                    maxWidth: "560px",
                  }}
                >
                  {product.description}
                </p>
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