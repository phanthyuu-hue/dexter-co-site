"use client";

import Image from "next/image";

/* ─────────────────────────────────────────────
   Dexter & Co. Brand Site — MVP
   Sections: Nav / Hero / About / Brand Structure
             / Products / Philosophy / Contact / Footer
───────────────────────────────────────────── */

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
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image
          src="/logo-dark.png"
          alt="Dexter & Co."
          width={160}
          height={36}
          style={{ height: "36px", width: "auto", objectFit: "contain" }}
        />
        <span
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "rgba(245,244,240,0.82)",
            letterSpacing: "0.14em",
            whiteSpace: "nowrap",
          }}
          className="nav-brand-text"
        >
          DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
        </span>
      </a>

      {/* Links */}
      <div style={{ display: "flex", gap: "2.5rem" }}>
        <a href="/about" className="nav-link">About</a>
        <a href="/products" className="nav-link">Products</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* 背景画像 */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* ダークオーバーレイ */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(5,12,22,0.68)",
        }}
      />

      {/* コンテンツ — テキスト中心・やや左寄せ */}
      <div
        style={{
          position: "relative",
          padding: "12rem 2.5rem 7rem",
          maxWidth: "860px",
        }}
      >
        {/* Brand name — small */}
        <p
          className="fade-up"
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.72rem",
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--gold)",
            opacity: 0.8,
            marginBottom: "2rem",
          }}
        >
          DEXTER &amp; Co.
        </p>

        {/* Main heading */}
        <h1
          className="fade-up delay-1"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
            fontWeight: 500,
            lineHeight: 1.06,
            color: "var(--offwhite)",
            marginBottom: "2.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          From Problem
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>to Product.</em>
        </h1>

        {/* Divider */}
        <span className="gold-line fade-up delay-2" style={{ marginBottom: "2.5rem" }} />

        {/* Description */}
        <p
          className="fade-up delay-3"
          style={{
            maxWidth: "540px",
            fontSize: "1rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.7)",
            fontWeight: 300,
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.02em",
            marginBottom: "1rem",
          }}
        >
          We design and build AI-powered tools, business systems, and digital products from real-world problems.
        </p>
        <p
          className="fade-up delay-3"
          style={{
            maxWidth: "540px",
            fontSize: "0.82rem",
            lineHeight: 1.9,
            color: "rgba(200,164,110,0.65)",
            fontWeight: 300,
            fontFamily: "var(--font-noto)",
            letterSpacing: "0.05em",
            marginBottom: "4rem",
          }}
        >
          現場の課題から、AIツール・業務システム・デジタルプロダクトをつくる会社です。
        </p>

        {/* CTAs */}
        <div className="fade-up delay-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="#products" className="btn-gold">Our Products</a>
          <a href="#contact" className="btn-ghost">Contact</a>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─── */
function About() {
  return (
    <section
      id="about"
      className="section-pad"
      style={{
        padding: "10rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(18,37,57,0.35)",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <SectionLabel>About</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "2.5rem",
            lineHeight: 1.2,
          }}
        >
          We solve before<br />we build.
        </h2>
        <span className="gold-line" style={{ marginBottom: "2.5rem" }} />
        <div
          className="font-jp"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
            fontSize: "0.97rem",
            lineHeight: 2.1,
            color: "rgba(245,244,240,0.6)",
            fontWeight: 300,
          }}
        >
          <p>
            Dexter & Co. は、単なる開発会社ではありません。
          </p>
          <p>
            まず現場の課題を見つけ、構造を整理し、最も効果的な解決策を設計します。
            そのうえで、必要なものを <strong style={{ color: "rgba(245,244,240,0.85)", fontWeight: 500 }}>DexTech</strong> によって素早くプロダクト化します。
          </p>
          <p>
            コンサルティングの思考と、エンジニアリングの実行力。
            その両輪で、本質的な価値を生み出します。
          </p>
        </div>

        {/* What we build chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", marginTop: "2.5rem" }}>
          {["AI tools", "Business systems", "Workflow automation", "Digital products"].map((item) => (
            <span
              key={item}
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--gold)",
                border: "1px solid rgba(200,164,110,0.25)",
                padding: "0.3rem 0.85rem",
                opacity: 0.8,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What we do ─── */
function WhatWeDo() {
  const items = [
    { num: "01", text: "Business problem analysis" },
    { num: "02", text: "Workflow optimization" },
    { num: "03", text: "AI / automation design" },
    { num: "04", text: "Custom app development" },
  ];
  return (
    <section
      style={{
        padding: "10rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
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
            marginBottom: "4.5rem",
          }}
        >
          What we do.
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {items.map((item) => (
            <div
              key={item.num}
              style={{
                borderTop: "1px solid rgba(200,164,110,0.2)",
                paddingTop: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold)", opacity: 0.6 }}>
                {item.num}
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", fontWeight: 500, color: "var(--offwhite)", lineHeight: 1.4 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Who we work with ─── */
function WhoWeWorkWith() {
  const items = [
    "Small business owners",
    "Store operators",
    "Individuals seeking efficiency",
    "Teams exploring AI adoption",
  ];
  return (
    <section
      style={{
        padding: "10rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(18,37,57,0.3)",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Who we work with</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "4.5rem",
          }}
        >
          Who we work with.
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                padding: "1.75rem 0",
                borderBottom: "1px solid rgba(245,244,240,0.06)",
              }}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", opacity: 0.5, minWidth: "2rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1rem, 2.5vw, 1.35rem)", fontWeight: 400, color: "rgba(245,244,240,0.75)", letterSpacing: "0.02em" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Brand Structure ─── */
function BrandStructure() {
  return (
    <section
      className="section-pad"
      style={{ padding: "10rem 2.5rem", borderTop: "1px solid rgba(245,244,240,0.06)" }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>Brand Structure</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "4.5rem",
          }}
        >
          One Vision, Two Engines.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Dexter & Co. */}
          <div className="brand-node" style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7 }}>
              The Company
            </p>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--offwhite)", fontWeight: 500, letterSpacing: "0.04em" }}>
              DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
            </p>
            <span className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(245,244,240,0.5)", lineHeight: 2, fontWeight: 300 }}>
              → Problem Solving<br />
              → Consulting<br />
              → Strategy
            </p>
          </div>

          {/* DexTech */}
          <div className="brand-node" style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7 }}>
              The Dev Brand
            </p>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--offwhite)", fontWeight: 500, letterSpacing: "0.04em" }}>
              Dex<span style={{ color: "var(--gold)" }}>Tech</span>
            </p>
            <span className="gold-line" />
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(245,244,240,0.5)", lineHeight: 2, fontWeight: 300 }}>
              → Product Building<br />
              → App Development<br />
              → AI Tools
            </p>
          </div>

          {/* Products */}
          <div className="brand-node" style={{ padding: "3rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7 }}>
              Products
            </p>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.4rem", color: "var(--offwhite)", fontWeight: 500 }}>
              Our Work
            </p>
            <span className="gold-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              {["Lily Series", "Silent", "TabiLog"].map((p) => (
                <p key={p} style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(245,244,240,0.5)", fontWeight: 300, borderBottom: "1px solid rgba(200,164,110,0.08)", paddingBottom: "0.65rem" }}>
                  → {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Products ─── */
const products = [
  {
    name: "Lily Series",
    tag: "Store Operations",
    description:
      "店舗運営をスムーズにするオールインワン・プラットフォーム。シフト管理、売上管理、予約返信、AI文章生成など、現場の負担を軽減するツール群。",
    index: "01",
  },
  {
    name: "Silent",
    tag: "Privacy AI",
    description:
      "履歴を残さず、安心して相談できるプライバシー重視のAIチャット。日常の相談から業務利用まで、静かに使えるAIアシスタント。",
    index: "02",
  },
  {
    name: "TabiLog",
    tag: "Travel & Life",
    description:
      "旅の支出、記録、思い出をまとめるトラベルログアプリ。支出管理、旅の記録、AIによる振り返りや提案を通じて、旅をより豊かにする。",
    index: "03",
  },
];

function Products() {
  return (
    <section
      id="products"
      className="section-pad"
      style={{
        padding: "10rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(18,37,57,0.25)",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionLabel>Our Products</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "4.5rem",
          }}
        >
          Products built by DexTech.
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.name}
              className="product-card"
              style={{
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
              }}
            >
              {/* Index */}
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  color: "var(--gold)",
                  opacity: 0.6,
                }}
              >
                {product.index}
              </p>
              {/* Name */}
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "1.45rem",
                  fontWeight: 500,
                  color: "var(--offwhite)",
                }}
              >
                {product.name}
              </h3>
              {/* Tag pill */}
              <span
                style={{
                  display: "inline-block",
                  alignSelf: "flex-start",
                  padding: "0.2rem 0.8rem",
                  border: "1px solid rgba(200,164,110,0.3)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {product.tag}
              </span>
              <span className="gold-line" />
              {/* Description */}
              <p
                className="font-jp"
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 2,
                  color: "rgba(245,244,240,0.5)",
                  fontWeight: 300,
                }}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Philosophy ─── */
function Philosophy() {
  return (
    <section
      className="section-pad"
      style={{
        padding: "8rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionLabel>Philosophy</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.8rem, 4vw, 3rem)",
            fontWeight: 500,
            fontStyle: "italic",
            color: "var(--offwhite)",
            marginBottom: "2rem",
            lineHeight: 1.25,
          }}
        >
          Quietly useful.<br />Deeply practical.
        </h2>
        <span className="gold-line" style={{ margin: "0 auto 2.5rem" }} />
        <p
          className="font-jp"
          style={{
            fontSize: "0.95rem",
            lineHeight: 2.2,
            color: "rgba(245,244,240,0.5)",
            fontWeight: 300,
          }}
        >
          私たちが目指すのは、目立つだけのサービスではありません。
          <br />
          使う人の仕事や生活に自然に溶け込み、
          <br />
          気づけば欠かせない存在になっている。
          <br />
          そんな静かで実用的なプロダクトを作ります。
        </p>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "10rem 2.5rem",
        borderTop: "1px solid rgba(245,244,240,0.06)",
        background: "rgba(7,15,24,0.5)",
      }}
    >
      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <SectionLabel>Contact</SectionLabel>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
            fontWeight: 500,
            color: "var(--offwhite)",
            marginBottom: "2rem",
            lineHeight: 1.2,
          }}
        >
          Let&apos;s turn problems<br />into products.
        </h2>
        <span className="gold-line" style={{ marginBottom: "2.5rem" }} />
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.95rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.45)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            marginBottom: "3.5rem",
          }}
        >
          We help businesses and individuals identify real problems
          <br />
          and turn them into working solutions.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://line.me/ti/p/~hello-dexter" className="btn-gold">
            Talk on LINE
          </a>
          <a href="mailto:hello@dexter-co.jp" className="btn-ghost">
            Send an Email
          </a>
        </div>
      </div>
    </section>
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
        {/* Brand — B案：アイコン＋テキストで再構成 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
          {/* ロゴ行：logo-dark.png（小） + DEXTER & Co. */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
            <Image
              src="/logo-dark.png"
              alt="Dexter & Co."
              width={28}
              height={28}
              style={{ width: "28px", height: "28px", objectFit: "contain", opacity: 0.75 }}
            />
            <span style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.9rem",
              fontWeight: 500,
              color: "rgba(245,244,240,0.55)",
              letterSpacing: "0.12em",
            }}>
              DEXTER <span style={{ color: "var(--gold)", opacity: 0.7 }}>&</span> Co.
            </span>
          </div>
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "0.72rem",
            color: "rgba(245,244,240,0.35)",
            letterSpacing: "0.08em",
          }}>
            Tokyo / Remote
          </p>
          <p style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "0.7rem",
            fontStyle: "italic",
            color: "rgba(200,164,110,0.4)",
            letterSpacing: "0.05em",
          }}>
            From Problem to Product.
          </p>
        </div>

        {/* Contact */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>
            Contact
          </p>
          <a
            href="mailto:hello@dexter-co.jp"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.45)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.45)")}
          >
            hello@dexter-co.jp
          </a>
        </div>

        {/* Products */}
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

      {/* Bottom bar */}
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

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <WhoWeWorkWith />
        <BrandStructure />
        <Products />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}