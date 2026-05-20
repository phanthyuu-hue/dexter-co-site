"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
          <Link key={link.href} href={link.href} className="nav-link"
            style={pathname === link.href ? { color: "var(--gold)", opacity: 1 } : {}}>
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
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <Link href="/" style={{ textDecoration: "none" }}>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.85rem", color: "rgba(245,244,240,0.4)", letterSpacing: "0.08em" }}>
            DEXTER <span style={{ color: "var(--gold)", opacity: 0.5 }}>&</span> Co. / Silent
          </p>
        </Link>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", color: "rgba(245,244,240,0.2)", letterSpacing: "0.04em" }}>
          © Dexter & Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ─── ① Hero ─── */
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "14rem 2.5rem 8rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
      position: "relative",
    }}>
      <div style={{ maxWidth: "720px" }}>
        <p style={{
          fontFamily: "var(--font-inter)",
          fontSize: "0.7rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "var(--gold)",
          opacity: 0.75,
          marginBottom: "2rem",
        }}>
          Silent — by DexTech
        </p>
        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          fontWeight: 500,
          lineHeight: 1.08,
          color: "var(--offwhite)",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          履歴を残さないAI。
        </h1>
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "1.05rem",
          lineHeight: 1.9,
          color: "rgba(200,164,110,0.75)",
          fontWeight: 300,
          letterSpacing: "0.04em",
          marginBottom: "2rem",
        }}>
          誰にも残らないから、本音で使える。
        </p>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6, marginBottom: "2rem" }} />
        <p style={{
          fontFamily: "var(--font-noto)",
          fontSize: "0.95rem",
          lineHeight: 2,
          color: "rgba(245,244,240,0.6)",
          fontWeight: 300,
          maxWidth: "520px",
          letterSpacing: "0.03em",
          marginBottom: "3.5rem",
        }}>
          AIは便利だが、「履歴が残る」ことが心理的な障壁になっている。
          Silentはその問題を解決する。
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="https://www.silent-ai.jp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.4rem",
              backgroundColor: "var(--gold)",
              color: "var(--navy)",
              fontFamily: "var(--font-noto)",
              fontSize: "0.85rem",
              fontWeight: 500,
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            今すぐ使う
          </a>
          <a
            href="#features"
            style={{
              display: "inline-block",
              padding: "0.9rem 2.4rem",
              border: "1px solid rgba(200,164,110,0.35)",
              color: "var(--gold)",
              fontFamily: "var(--font-noto)",
              fontSize: "0.85rem",
              fontWeight: 300,
              letterSpacing: "0.06em",
              textDecoration: "none",
              transition: "border-color 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,110,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,164,110,0.35)")}
          >
            特徴を見る
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── ② 問題提起 ─── */
function Problem() {
  const items = [
    "履歴が残る",
    "誰かに見られるかもしれない",
    "本音で使えない",
  ];
  return (
    <section style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
      background: "rgba(5,12,22,0.4)",
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "1.5rem" }}>
          Problem
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "0.75rem",
          lineHeight: 1.2,
        }}>
          なぜ、AIは使いづらいのか
        </h2>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6, marginBottom: "3.5rem" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem 0",
              borderBottom: "1px solid rgba(245,244,240,0.06)",
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", color: "rgba(245,244,240,0.25)", minWidth: "1.5rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "1rem", fontWeight: 300, color: "rgba(245,244,240,0.65)", lineHeight: 1.8, letterSpacing: "0.03em" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ③ 解決 ─── */
function Solution() {
  const items = [
    "履歴を残さない設計",
    "個人情報を持たない",
    "気軽に、何度でも使える",
  ];
  return (
    <section style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "1.5rem" }}>
          Solution
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "0.75rem",
          lineHeight: 1.2,
        }}>
          Silentは、それをなくした
        </h2>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6, marginBottom: "3.5rem" }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.5rem 0",
              borderBottom: "1px solid rgba(200,164,110,0.1)",
            }}>
              <span style={{ color: "var(--gold)", opacity: 0.7, fontSize: "0.9rem", minWidth: "1.5rem" }}>✓</span>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "1rem", fontWeight: 400, color: "rgba(245,244,240,0.82)", lineHeight: 1.8, letterSpacing: "0.03em" }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ④ 特徴 ─── */
function Features() {
  const features = [
    { title: "履歴なし", desc: "会話はその場で消える。どこにも記録されない。" },
    { title: "ログイン不要", desc: "アカウント作成なしで、すぐに使い始められる。" },
    { title: "即使える", desc: "開いたらすぐ話しかけられる。準備不要。" },
  ];
  return (
    <section id="features" style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
      background: "rgba(18,37,57,0.3)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "1.5rem" }}>
          Features
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "4rem",
        }}>
          3つの特徴
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
          {features.map((f, i) => (
            <div key={i} style={{
              borderTop: "1px solid rgba(200,164,110,0.25)",
              paddingTop: "1.75rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold)", opacity: 0.6 }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "1.1rem", fontWeight: 500, color: "var(--offwhite)", letterSpacing: "0.03em" }}>
                {f.title}
              </p>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", fontWeight: 300, color: "rgba(245,244,240,0.58)", lineHeight: 1.8, letterSpacing: "0.02em" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ⑤ 利用シーン ─── */
function UseCases() {
  const scenes = [
    "誰にも見られたくない相談",
    "仕事の判断・意思決定",
    "人に聞きづらいこと",
  ];
  return (
    <section style={{
      padding: "10rem 2.5rem",
      borderBottom: "1px solid rgba(245,244,240,0.06)",
    }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "1.5rem" }}>
          Use cases
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "4rem",
        }}>
          こんな時に使われています
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {scenes.map((scene, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              padding: "1.75rem 0",
              borderBottom: "1px solid rgba(245,244,240,0.06)",
            }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", color: "var(--gold)", opacity: 0.45, minWidth: "2rem" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)", fontWeight: 400, color: "rgba(245,244,240,0.75)", letterSpacing: "0.03em" }}>
                {scene}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ⑥ CTA ─── */
function CTASection() {
  return (
    <section style={{
      padding: "12rem 2.5rem",
      textAlign: "center",
      background: "rgba(5,12,22,0.5)",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "2rem" }}>
          Silent
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 500,
          color: "var(--offwhite)",
          marginBottom: "1.5rem",
          lineHeight: 1.15,
        }}>
          履歴を残さずに、<br />使い始める。
        </h2>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.6, margin: "0 auto 3rem" }} />
        <a
          href="https://www.silent-ai.jp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            padding: "1rem 3rem",
            backgroundColor: "var(--gold)",
            color: "var(--navy)",
            fontFamily: "var(--font-noto)",
            fontSize: "0.92rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textDecoration: "none",
            transition: "opacity 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          今すぐ使う
        </a>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.78rem", color: "rgba(245,244,240,0.3)", marginTop: "1.5rem", letterSpacing: "0.04em" }}>
          登録不要・無料で使えます
        </p>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function SilentPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <UseCases />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}