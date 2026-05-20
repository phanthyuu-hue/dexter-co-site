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
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "1.25rem 2.5rem",
      background: "rgba(11,29,45,0.92)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(200,164,110,0.1)",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image src="/logo-dark.png" alt="Dexter & Co." width={160} height={36}
          style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        <span className="nav-brand-text" style={{
          fontFamily: "var(--font-playfair)", fontSize: "0.95rem", fontWeight: 500,
          color: "rgba(245,244,240,0.82)", letterSpacing: "0.14em", whiteSpace: "nowrap",
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
    <footer style={{ padding: "2.5rem 2.5rem 2rem", background: "#0B1C2C", borderTop: "1px solid rgba(200,164,110,0.12)" }}>
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

/* ══════════════════════════════════════
   ① HERO — 黒ネイビー（Dexter）
══════════════════════════════════════ */
function Hero() {
  return (
    <section style={{
      background: "#0B1C2C",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "14rem 2.5rem 10rem",
    }}>
      <div style={{ maxWidth: "860px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.3em", textTransform: "uppercase",
          color: "#C8A96A", opacity: 0.8, marginBottom: "2.5rem",
        }}>
          Silent — by DexTech
        </p>
        <h1 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          fontWeight: 500, lineHeight: 1.06,
          color: "#FAF8F3",
          marginBottom: "1.5rem",
          letterSpacing: "-0.01em",
        }}>
          履歴を残さないAI。
        </h1>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "1.1rem",
          lineHeight: 1.9, color: "#C8A96A",
          fontWeight: 300, letterSpacing: "0.04em",
          marginBottom: "2rem",
        }}>
          誰にも残らないから、本音で使える。
        </p>
        <span style={{ display: "block", width: "40px", height: "1px", background: "#C8A96A", opacity: 0.55, marginBottom: "2rem" }} />
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "1rem",
          lineHeight: 2, color: "rgba(250,248,243,0.6)",
          fontWeight: 300, maxWidth: "520px",
          letterSpacing: "0.03em", marginBottom: "4rem",
        }}>
          Silentは「残したくない相談」を整理するためのAIです。
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://www.silent-ai.jp" target="_blank" rel="noopener noreferrer"
            style={{
              display: "inline-block", padding: "0.95rem 2.5rem",
              background: "#C8A96A", color: "#0B1C2C",
              fontFamily: "var(--font-noto)", fontSize: "0.88rem",
              fontWeight: 500, letterSpacing: "0.06em",
              textDecoration: "none", transition: "opacity 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            今すぐ使う
          </a>
          <a href="#how"
            style={{
              display: "inline-block", padding: "0.95rem 2.5rem",
              border: "1px solid rgba(200,169,106,0.4)",
              color: "#C8A96A",
              fontFamily: "var(--font-noto)", fontSize: "0.88rem",
              fontWeight: 300, letterSpacing: "0.06em",
              textDecoration: "none", transition: "border-color 0.25s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,106,0.8)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(200,169,106,0.4)")}
          >
            どういう仕組み？
          </a>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ② PROBLEM — 白クリーム（Silent）
══════════════════════════════════════ */
function Problem() {
  return (
    <section style={{
      background: "#FAF8F3",
      padding: "10rem 2.5rem",
      borderTop: "3px solid #C8A96A",
    }}>
      <div style={{ maxWidth: "760px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          Problem
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "3.5rem", lineHeight: 1.25,
        }}>
          AIは便利なのに、なぜ<br />本音で使えないのか？
        </h2>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "3rem" }}>
          {[
            "この相談、どこかに残るんじゃないか",
            "後から見られるんじゃないか",
            "履歴として残したくない",
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "1.25rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <span style={{ color: "#C8A96A", fontSize: "0.85rem", paddingTop: "0.1rem", flexShrink: 0 }}>・</span>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "1rem",
                fontWeight: 300, color: "rgba(0,0,0,0.72)",
                lineHeight: 1.8, letterSpacing: "0.03em",
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "1rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          borderLeft: "2px solid #C8A96A",
          paddingLeft: "1.5rem",
        }}>
          だから、多くの人は<br />
          「当たり障りのない使い方」しかできていない。
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ③ SOLUTION — クリーム
══════════════════════════════════════ */
function Solution() {
  return (
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem" }}>
      <div style={{ maxWidth: "760px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          Solution
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "3.5rem", lineHeight: 1.3,
        }}>
          Silentは、<br />
          &ldquo;残らない前提&rdquo;で使えるAIです
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            "会話は保存されません",
            "閉じると消えます",
            "必要な時だけ、一時保存を選べます",
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "1.25rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <span style={{ color: "#C8A96A", fontSize: "1rem", flexShrink: 0 }}>✓</span>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "1rem",
                fontWeight: 400, color: "#1A1A1A",
                lineHeight: 1.8, letterSpacing: "0.03em",
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ④ HOW IT WORKS — クリーム（重要）
══════════════════════════════════════ */
function HowItWorks() {
  return (
    <section id="how" style={{ background: "#FAF8F3", padding: "10rem 2.5rem" }}>
      <div style={{ maxWidth: "760px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          How it works
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "2.5rem", lineHeight: 1.25,
        }}>
          なぜ安心して使えるのか
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "1rem",
          lineHeight: 2, color: "rgba(0,0,0,0.6)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "2.5rem",
        }}>
          Silentは、通常のAIサービスとは異なる設計になっています。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            "会話内容をデータベースに保存しません",
            "セッション単位でのみ内容を保持します",
            "保存する場合も、ユーザーが明示的に選択した時のみです",
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "1.25rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                letterSpacing: "0.2em", color: "#C8A96A",
                minWidth: "2rem", paddingTop: "0.2rem",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "1rem",
                fontWeight: 300, color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8, letterSpacing: "0.03em",
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ⑤ USE CASES — クリーム
══════════════════════════════════════ */
function UseCases() {
  const cases = [
    {
      title: "誰にも言えない相談",
      quote: "「これ、人に話していい内容なのか分からない…」",
    },
    {
      title: "仕事の判断・意思決定",
      quote: "「この判断、リスクないか整理したい」",
    },
    {
      title: "人に聞きづらいこと",
      quote: "「誰にも聞けないけど、答えが欲しい」",
    },
  ];
  return (
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem" }}>
      <div style={{ maxWidth: "760px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          Use cases
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "4rem", lineHeight: 1.25,
        }}>
          こんな時に使われています
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {cases.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              <span style={{
                fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                letterSpacing: "0.22em", color: "#C8A96A",
                minWidth: "2rem", paddingTop: "0.3rem",
              }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                  fontWeight: 500, color: "#1A1A1A",
                  letterSpacing: "0.03em", marginBottom: "0.75rem",
                }}>
                  {c.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "0.92rem",
                  fontWeight: 300, color: "rgba(0,0,0,0.55)",
                  lineHeight: 1.8, letterSpacing: "0.03em",
                  fontStyle: "italic",
                }}>
                  {c.quote}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ⑥ FEATURES — クリーム
══════════════════════════════════════ */
function Features() {
  const features = [
    { title: "履歴なし", desc: "会話はその場で消えます。記録として残りません。" },
    { title: "ログイン不要", desc: "アカウント作成なしで、すぐに使い始められます。" },
    { title: "即使える", desc: "開いた瞬間から相談できます。準備は何もいりません。" },
  ];
  return (
    <section style={{ background: "#FAF8F3", padding: "10rem 2.5rem" }}>
      <div style={{ maxWidth: "900px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          Features
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "4rem", lineHeight: 1.25,
        }}>
          Silentが他と違う理由
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          marginBottom: "3.5rem",
        }}>
          {features.map((f, i) => (
            <div key={i} style={{ borderTop: "2px solid #C8A96A", paddingTop: "1.75rem" }}>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                fontWeight: 500, color: "#1A1A1A",
                letterSpacing: "0.03em", marginBottom: "0.85rem",
              }}>
                {f.title}
              </p>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.88rem",
                fontWeight: 300, color: "rgba(0,0,0,0.6)",
                lineHeight: 1.9, letterSpacing: "0.02em",
              }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          fontWeight: 300, color: "rgba(0,0,0,0.5)",
          lineHeight: 2, letterSpacing: "0.03em",
          borderLeft: "2px solid #C8A96A", paddingLeft: "1.5rem",
        }}>
          「使いやすさ」ではなく<br />
          「安心して使えるか」を優先しています。
        </p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ⑦ TRUST — クリーム
══════════════════════════════════════ */
function Trust() {
  return (
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem" }}>
      <div style={{ maxWidth: "760px" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", marginBottom: "2rem",
        }}>
          Trust
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(1.8rem, 4vw, 3rem)",
          fontWeight: 500, color: "#1A1A1A",
          marginBottom: "3.5rem", lineHeight: 1.25,
        }}>
          安全なAI設計
        </h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            "危険な内容をそのまま助長しません",
            "より安全な選択肢に変換して返します",
            "ユーザーを守る設計を優先しています",
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "flex-start", gap: "1.25rem",
              padding: "1.25rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <span style={{ color: "#C8A96A", fontSize: "1rem", flexShrink: 0 }}>✓</span>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "1rem",
                fontWeight: 300, color: "rgba(0,0,0,0.7)",
                lineHeight: 1.8, letterSpacing: "0.03em",
              }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ⑧ FINAL CTA — 黒ネイビー（Dexter）
══════════════════════════════════════ */
function FinalCTA() {
  return (
    <section style={{
      background: "#0B1C2C",
      padding: "12rem 2.5rem",
      textAlign: "center",
      borderTop: "3px solid #C8A96A",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <p style={{
          fontFamily: "var(--font-inter)", fontSize: "0.7rem",
          letterSpacing: "0.28em", textTransform: "uppercase",
          color: "#C8A96A", opacity: 0.75, marginBottom: "2.5rem",
        }}>
          Silent
        </p>
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          fontWeight: 500, color: "#FAF8F3",
          marginBottom: "2rem", lineHeight: 1.15,
        }}>
          履歴を残さずに、<br />今すぐ使い始める
        </h2>
        <span style={{ display: "block", width: "40px", height: "1px", background: "#C8A96A", opacity: 0.55, margin: "0 auto 3rem" }} />
        <a
          href="https://www.silent-ai.jp"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", padding: "1rem 3.5rem",
            background: "#C8A96A", color: "#0B1C2C",
            fontFamily: "var(--font-noto)", fontSize: "0.95rem",
            fontWeight: 500, letterSpacing: "0.08em",
            textDecoration: "none", transition: "opacity 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Silentを開く
        </a>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.78rem",
          color: "rgba(250,248,243,0.3)", marginTop: "1.5rem",
          letterSpacing: "0.04em",
        }}>
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
        <HowItWorks />
        <UseCases />
        <Features />
        <Trust />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}