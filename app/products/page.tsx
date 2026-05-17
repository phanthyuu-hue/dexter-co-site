"use client";

import Image from "next/image";
import Link from "next/link";

/* ── Section label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-inter)",
      fontSize: "0.7rem",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--gold)",
      opacity: 0.85,
      marginBottom: "1.5rem",
    }}>
      {children}
    </p>
  );
}

/* ─── Nav ─── */
function Nav() {
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
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/products" className="nav-link" style={{ color: "var(--gold)" }}>Products</Link>
        <Link href="/#contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ padding: "2.5rem 2.5rem 2rem", borderTop: "1px solid rgba(200,164,110,0.12)" }}>
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "3rem",
        marginBottom: "2rem",
        alignItems: "start",
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
            <Image src="/logo-dark.png" alt="Dexter & Co." width={28} height={28}
              style={{ width: "28px", height: "28px", objectFit: "contain", opacity: 0.75 }} />
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "0.9rem", fontWeight: 500, color: "rgba(245,244,240,0.55)", letterSpacing: "0.12em" }}>
              DEXTER <span style={{ color: "var(--gold)", opacity: 0.7 }}>&</span> Co.
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.08em" }}>Tokyo / Remote</p>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.7rem", fontStyle: "italic", color: "rgba(200,164,110,0.4)", letterSpacing: "0.05em" }}>From Problem to Product.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>Contact</p>
          <a href="mailto:hello@dexter-co.jp"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.45)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.45)")}>
            hello@dexter-co.jp
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>Products</p>
          {["Lily Series", "Silent", "TabiLog"].map((p) => (
            <p key={p} style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.4)", letterSpacing: "0.04em" }}>{p}</p>
          ))}
        </div>
      </div>
      <div style={{ maxWidth: "900px", margin: "0 auto", borderTop: "1px solid rgba(245,244,240,0.05)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(245,244,240,0.25)", letterSpacing: "0.04em" }}>© Dexter & Co. All rights reserved.</p>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(245,244,240,0.25)", letterSpacing: "0.04em" }}>Built by DexTech.</p>
      </div>
    </footer>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section style={{
      paddingTop: "18rem",
      paddingBottom: "8rem",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
    }}>
      <div style={{ maxWidth: "800px" }}>
        <SectionLabel>Products</SectionLabel>
        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          fontWeight: 500,
          lineHeight: 1.1,
          color: "var(--offwhite)",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          Products built by{" "}
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>DexTech.</em>
        </h1>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.85rem",
          color: "rgba(200,164,110,0.75)",
          letterSpacing: "0.06em",
          marginBottom: "2.5rem",
          fontWeight: 300,
        }}>
          DexTechによって生まれたプロダクト群。
        </p>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1.05rem",
          lineHeight: 1.9,
          color: "rgba(245,244,240,0.7)",
          fontWeight: 300,
          maxWidth: "600px",
          letterSpacing: "0.02em",
        }}>
          DexTech builds practical tools that turn real problems into working products.
        </p>
      </div>
    </section>
  );
}

/* ─── Product Cards ─── */
const products = [
  {
    name: "Lily Series",
    tags: ["Business Operations", "AI Tools"],
    descJa: "店舗運営をスムーズにするオールインワン・プラットフォーム。シフト管理、売上管理、予約返信、AI文章生成など、現場の負担を軽減するツール群。",
    descEn: null,
    status: "Live",
    cta: { label: "View Product", href: "https://lily-os.vercel.app/", external: true },
    featured: true,
  },
  {
    name: "Silent",
    tags: ["Privacy AI", "Communication"],
    descJa: "履歴を残さず、安心して相談できるプライバシー重視のAIチャット。日常の相談から業務利用まで、静かに使えるAIアシスタント。",
    descEn: null,
    status: "Coming Soon",
    cta: null,
    featured: false,
  },
  {
    name: "TabiLog",
    tags: ["Travel", "Personal OS"],
    descJa: "旅の支出、記録、思い出をまとめるトラベルログアプリ。支出管理、旅の記録、AIによる振り返りや提案を通じて、旅をより豊かにする。",
    descEn: null,
    status: "Coming Soon",
    cta: null,
    featured: false,
  },
];

function ProductCards() {
  return (
    <section style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {products.map((product, i) => (
          <div
            key={product.name}
            style={{
              border: product.featured
                ? "1px solid rgba(200,164,110,0.35)"
                : "1px solid rgba(200,164,110,0.15)",
              background: product.featured
                ? "rgba(30,35,41,0.55)"
                : "rgba(30,35,41,0.3)",
              padding: "3rem 2.5rem",
              transition: "border-color 0.3s, transform 0.25s, box-shadow 0.25s",
              cursor: product.cta ? "pointer" : "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
              e.currentTarget.style.borderColor = "rgba(200,164,110,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.borderColor = product.featured
                ? "rgba(200,164,110,0.35)"
                : "rgba(200,164,110,0.15)";
            }}
          >
            {/* 上部：番号・ステータス */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold)", opacity: 0.5 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.62rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: product.status === "Live" ? "rgba(200,164,110,0.9)" : "rgba(245,244,240,0.35)",
                border: `1px solid ${product.status === "Live" ? "rgba(200,164,110,0.4)" : "rgba(245,244,240,0.15)"}`,
                padding: "0.2rem 0.75rem",
              }}>
                {product.status}
              </span>
            </div>

            {/* 名前 */}
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 500,
              color: "var(--offwhite)",
              marginBottom: "1rem",
            }}>
              {product.name}
            </h2>

            {/* タグ */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              {product.tags.map((tag) => (
                <span key={tag} style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  border: "1px solid rgba(200,164,110,0.25)",
                  padding: "0.18rem 0.65rem",
                  opacity: 0.8,
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* 説明文（日本語） */}
            <p style={{
              fontFamily: "var(--font-noto)",
              fontSize: "0.92rem",
              lineHeight: 2,
              color: "rgba(245,244,240,0.62)",
              fontWeight: 300,
              maxWidth: "580px",
              marginBottom: product.cta ? "2rem" : "0",
            }}>
              {product.descJa}
            </p>

            {/* CTA */}
            {product.cta && (
              <a
                href={product.cta.href}
                target={product.cta.external ? "_blank" : undefined}
                rel={product.cta.external ? "noopener noreferrer" : undefined}
                className="btn-gold"
                style={{ display: "inline-block" }}
              >
                {product.cta.label}
              </a>
            )}
            {product.status === "Coming Soon" && !product.cta && (
              <p style={{
                fontFamily: "var(--font-inter)",
                fontSize: "0.72rem",
                letterSpacing: "0.18em",
                color: "rgba(245,244,240,0.25)",
                textTransform: "uppercase",
                marginTop: "1.5rem",
              }}>
                — Coming Soon —
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DexTech Section ─── */
function DexTechSection() {
  return (
    <section style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
      background: "rgba(18,37,57,0.3)",
    }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionLabel>DexTech</SectionLabel>
        {/* DexTech テキストロゴ — シンボル＋テキスト横並び */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "0.5rem" }}>
          <Image
            src="/dextech-symbol.png"
            alt=""
            width={30}
            height={30}
            aria-hidden
            style={{ width: "30px", height: "30px", objectFit: "contain", opacity: 0.8 }}
          />
          <p style={{
            fontFamily: "var(--font-inter)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300,
            color: "var(--offwhite)",
            letterSpacing: "0.08em",
            lineHeight: 1,
          }}>
            DexTech
          </p>
        </div>
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.72rem",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--gold)",
          opacity: 0.7,
          marginBottom: "3rem",
        }}>
          Build. Solve. Scale.
        </p>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize: "1rem",
          lineHeight: 1.9,
          color: "rgba(245,244,240,0.68)",
          fontWeight: 300,
          maxWidth: "580px",
          letterSpacing: "0.02em",
          marginBottom: "0.85rem",
        }}>
          DexTech is the product development arm of Dexter & Co., focused on building practical tools powered by technology and AI.
        </p>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          color: "rgba(245,244,240,0.4)",
          letterSpacing: "0.04em",
          fontWeight: 300,
          lineHeight: 1.9,
        }}>
          DexTechは、Dexter & Co.の開発ブランドです。
        </p>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function ProductsPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductCards />
        <DexTechSection />
      </main>
      <Footer />
    </>
  );
}