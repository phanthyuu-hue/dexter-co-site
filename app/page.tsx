"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav
      style={{
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
      }}
    >
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

        {/* 事業内容タグ */}
        <div className="fade-up delay-2" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
          {["AIツール開発", "業務システム", "アプリ開発", "課題解決コンサル"].map((tag) => (
            <span key={tag} style={{
              fontFamily: "var(--font-noto)",
              fontSize: "0.72rem",
              letterSpacing: "0.06em",
              color: "var(--gold)",
              border: "1px solid rgba(200,164,110,0.3)",
              padding: "0.25rem 0.8rem",
              fontWeight: 300,
            }}>{tag}</span>
          ))}
        </div>

        {/* 日本語主役説明 */}
        <p
          className="fade-up delay-3"
          style={{
            maxWidth: "560px",
            fontSize: "1.05rem",
            lineHeight: 2,
            color: "rgba(245,244,240,0.82)",
            fontWeight: 300,
            fontFamily: "var(--font-noto)",
            letterSpacing: "0.04em",
            marginBottom: "0.75rem",
          }}
        >
          現場の課題から、AIツール・業務システム・デジタルプロダクトをつくる会社です。
        </p>
        <p
          className="fade-up delay-3"
          style={{
            maxWidth: "540px",
            fontSize: "0.88rem",
            lineHeight: 1.8,
            color: "rgba(245,244,240,0.45)",
            fontWeight: 300,
            fontFamily: "var(--font-inter)",
            letterSpacing: "0.02em",
            marginBottom: "3.5rem",
          }}
        >
          We design and build AI-powered tools, business systems, and digital products from real-world problems.
        </p>

        {/* CTAs */}
        <div className="fade-up delay-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/products" className="btn-gold">Our Products</Link>
          <Link href="/contact" className="btn-ghost">Contact</Link>
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
        borderTop: "1px solid rgba(200,164,110,0.15)",
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
          つくる前に、<br />課題を見つける。
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.5)", marginTop: "0.75rem", fontWeight: 300 }}>
            We solve before we build.
          </span>
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
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.78rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.05em", fontWeight: 300, marginTop: "2.5rem", marginBottom: "0.75rem" }}>
          私たちがつくるもの
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
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
    { num: "01", text: "Problem discovery", desc: "つくる前に、本質的な課題を特定します。" },
    { num: "02", text: "Workflow design", desc: "実際の業務フローを整理・再設計します。" },
    { num: "03", text: "AI tools & automation", desc: "日常業務に組み込める実用的なAIを構築します。" },
    { num: "04", text: "Custom product development", desc: "現場の課題を解決するプロダクトを開発・リリースします。" },
  ];
  return (
    <section
      style={{
        padding: "8.5rem 2.5rem",
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
            marginBottom: "1rem",
          }}
        >
          私たちがやっていること
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
            What we do
          </span>
        </h2>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.82rem", color: "rgba(245,244,240,0.55)", letterSpacing: "0.05em", fontWeight: 300, marginBottom: "1rem" }}>
          私たちが提供すること
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.95rem", lineHeight: 1.9, color: "rgba(245,244,240,0.65)", fontWeight: 300, maxWidth: "560px", marginBottom: "3.5rem", letterSpacing: "0.04em" }}>
          業務や日常の課題を、実際に使えるツールとして形にします。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
          {items.map((item) => (
            <div
              key={item.num}
              style={{
                borderTop: "1px solid rgba(200,164,110,0.2)",
                paddingTop: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold)", opacity: 0.6 }}>
                {item.num}
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.05rem", fontWeight: 500, color: "var(--offwhite)", lineHeight: 1.4 }}>
                {item.text}
              </p>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.8rem", fontWeight: 300, color: "rgba(245,244,240,0.55)", lineHeight: 1.8, letterSpacing: "0.03em" }}>
                {item.desc}
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
    { label: "店舗オーナー・運営者", desc: "シフト管理・売上・予約対応など、現場業務をまとめて効率化します。" },
    { label: "個人事業主・フリーランス", desc: "日常業務の自動化・AIツール活用・業務改善をサポートします。" },
    { label: "効率化を求める個人", desc: "個人のワークフローをシンプルなツールとして形にします。" },
    { label: "AI活用を検討している企業・チーム", desc: "実務に合わせたAIツールの設計・導入を支援します。" },
  ];
  return (
    <section
      style={{
        padding: "8.5rem 2.5rem",
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
          一緒に取り組む方々
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
            Who we work with
          </span>
        </h2>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.82rem", color: "rgba(245,244,240,0.55)", letterSpacing: "0.05em", fontWeight: 300, marginTop: "-3rem", marginBottom: "3rem" }}>
          私たちが支援する人たち
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "1.5rem",
                padding: "1.75rem 0",
                borderBottom: "1px solid rgba(245,244,240,0.06)",
              }}
            >
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.2em", color: "var(--gold)", opacity: 0.5, minWidth: "2rem", paddingTop: "0.3rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontWeight: 400, color: "rgba(245,244,240,0.75)", letterSpacing: "0.02em" }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", fontWeight: 300, color: "rgba(245,244,240,0.62)", lineHeight: 1.9, letterSpacing: "0.03em" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── For Whom ─── */
function ForWhom() {
  const items = [
    {
      target: "店舗運営者の方へ",
      en: "For store operators",
      desc: "シフト管理・売上管理・予約対応など、現場の煩雑な業務をまとめて効率化します。",
    },
    {
      target: "個人事業主・フリーランスの方へ",
      en: "For freelancers & small businesses",
      desc: "日常業務の自動化・AI活用・業務ツールの設計・構築をサポートします。",
    },
    {
      target: "AI導入を検討している企業へ",
      en: "For teams exploring AI",
      desc: "実際の業務フローに合わせたAIツールの設計・開発・導入を支援します。",
    },
  ];
  return (
    <section style={{
      padding: "8.5rem 2.5rem",
      borderTop: "1px solid rgba(200,164,110,0.12)",
      background: "rgba(7,15,24,0.35)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <SectionLabel>こんな方へ</SectionLabel>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "4rem",
        }}>
          こんな方に選ばれています
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
            Who we help
          </span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "2rem",
              padding: "2rem 0",
              borderBottom: "1px solid rgba(200,164,110,0.12)",
              alignItems: "start",
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-noto)",
                  fontSize: "0.95rem",
                  fontWeight: 400,
                  color: "rgba(245,244,240,0.82)",
                  letterSpacing: "0.04em",
                  lineHeight: 1.6,
                  marginBottom: "0.35rem",
                }}>
                  {item.target}
                </p>
                <p style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.7rem",
                  color: "rgba(200,164,110,0.55)",
                  letterSpacing: "0.08em",
                  fontWeight: 300,
                }}>
                  {item.en}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)",
                fontSize: "0.88rem",
                fontWeight: 300,
                color: "rgba(245,244,240,0.6)",
                lineHeight: 1.9,
                letterSpacing: "0.03em",
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 導入事例 ─── */
function UseCases() {
  const cases = [
    {
      title: "店舗運営者の業務改善",
      before: ["シフト管理がバラバラ", "売上管理が手作業", "LINE対応が属人化"],
      after: ["シフト／売上／顧客管理を一元化", "AIでLINE返信を自動化", "管理コストを大幅削減"],
      result: "管理工数 約50%削減",
    },
    {
      title: "業務の効率化・自動化",
      before: ["請求書や顧客管理が手作業", "ツールが分散している"],
      after: ["業務を一つのツールに集約", "自動化で手作業を削減"],
      result: "作業時間を大幅短縮",
    },
    {
      title: "AI活用による業務改善",
      before: ["AIをどう使えばいいか分からない", "業務に組み込めていない"],
      after: ["実務に合わせたAI設計", "日常業務に自然に組み込み"],
      result: "生産性向上＋人件費削減",
    },
  ];

  return (
    <section style={{
      padding: "8.5rem 2.5rem",
      borderTop: "1px solid rgba(200,164,110,0.12)",
      background: "rgba(5,12,22,0.4)",
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <SectionLabel>導入事例</SectionLabel>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "0.75rem",
        }}>
          こんな課題を解決しています
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.88rem",
          color: "rgba(245,244,240,0.5)",
          letterSpacing: "0.04em",
          fontWeight: 300,
          marginBottom: "4rem",
          lineHeight: 1.8,
        }}>
          現場のリアルな課題に対して、実際にこういった形で解決しています。
        </p>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {cases.map((c, i) => (
            <div
              key={i}
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.02)",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.3)";
                e.currentTarget.style.borderColor = "rgba(200,164,110,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "1rem", fontWeight: 500, color: "var(--offwhite)", letterSpacing: "0.03em" }}>
                {c.title}
              </p>

              {/* Before */}
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,244,240,0.3)", marginBottom: "0.6rem" }}>
                  Before
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {c.before.map((b, j) => (
                    <p key={j} style={{ fontFamily: "var(--font-noto)", fontSize: "0.82rem", color: "rgba(245,244,240,0.35)", fontWeight: 300, lineHeight: 1.6 }}>
                      ・{b}
                    </p>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div style={{ borderTop: "1px solid rgba(200,164,110,0.15)" }} />

              {/* After */}
              <div>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "0.6rem" }}>
                  After
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {c.after.map((a, j) => (
                    <p key={j} style={{ fontFamily: "var(--font-noto)", fontSize: "0.85rem", color: "rgba(245,244,240,0.72)", fontWeight: 400, lineHeight: 1.6 }}>
                      ✓ {a}
                    </p>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div style={{ borderTop: "1px solid rgba(200,164,110,0.2)", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.9rem", fontWeight: 500, color: "var(--gold)", letterSpacing: "0.04em" }}>
                  → {c.result}
                </p>
              </div>
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
    description: "店舗運営をスムーズにするオールインワン・プラットフォーム。シフト管理、売上管理、予約返信、AI文章生成など、現場の負担を軽減するツール群。",
    index: "01",
    ctas: [
      { label: "デモを見る", href: "https://lily-os.vercel.app/", external: true, primary: true },
      { label: "LINEで相談する", href: "https://line.me/ti/p/~hello-dexter", external: true, primary: false },
    ],
  },
  {
    name: "Silent",
    tag: "Privacy AI",
    description: "履歴を残さず、安心して相談できるプライバシー重視のAIチャット。日常の相談から業務利用まで、静かに使えるAIアシスタント。",
    index: "02",
    ctas: [
      { label: "今すぐ使う", href: "https://www.silent-ai.jp", external: true, primary: true },
    ],
  },
  {
    name: "TabiLog",
    tag: "Travel & Life",
    description: "旅の支出、記録、思い出をまとめるトラベルログアプリ。支出管理、旅の記録、AIによる振り返りや提案を通じて、旅をより豊かにする。",
    index: "03",
    ctas: [
      { label: "アプリを見る", href: "https://tabilog.app", external: true, primary: true },
    ],
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
          DexTechが開発したプロダクト
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
            Products built by DexTech
          </span>
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
              {/* CTAs */}
              <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
                {product.ctas.map((btn, j) => (
                  <a
                    key={j}
                    href={btn.href}
                    target={btn.external ? "_blank" : undefined}
                    rel={btn.external ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-block",
                      padding: "0.6rem 1.4rem",
                      fontFamily: "var(--font-noto)",
                      fontSize: "0.76rem",
                      fontWeight: 400,
                      letterSpacing: "0.04em",
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
          静かに、深く、実用的に。
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.16em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>
            Quietly useful. Deeply practical.
          </span>
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
          課題を、プロダクトへ。
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.16em", color: "rgba(200,164,110,0.45)", marginTop: "0.75rem", fontWeight: 300 }}>
            Let&apos;s turn problems into products.
          </span>
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
          業務改善、AI活用、アプリ開発など、お気軽にご相談ください。
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://line.me/ti/p/~hello-dexter" target="_blank" rel="noopener noreferrer" className="btn-gold">
            LINEで相談する
          </a>
          <a href="mailto:hello@dexter-co.jp" className="btn-ghost">
            メールで相談する
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
        <ForWhom />
        <UseCases />
        <BrandStructure />
        <Products />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}