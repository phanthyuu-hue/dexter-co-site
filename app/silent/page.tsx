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
  const items = [
    {
      main: "この相談、どこかに残るんじゃないか",
      sub: "AIサービスは通常、会話をサーバーに記録している。気になって当然だ。",
    },
    {
      main: "後から見られるんじゃないか",
      sub: "運営側・開発側・広告目的——誰かが読んでいるかもしれないという不安は消えない。",
    },
    {
      main: "履歴として残したくない",
      sub: "アカウントに紐付いた会話は、積み重なって「自分の記録」になってしまう。",
    },
  ];
  return (
    <section style={{
      background: "#FAF8F3",
      padding: "10rem 2.5rem",
      borderTop: "2px solid #C8A96A",
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
          marginBottom: "1.5rem", lineHeight: 1.25,
        }}>
          AIは便利なのに、なぜ<br />本音で使えないのか？
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "3.5rem",
        }}>
          使ってみると気づく。「便利だけど、本音では使えない」という感覚に。
          その正体は、記録への不安だ。
        </p>
        <div style={{ display: "flex", flexDirection: "column", marginBottom: "4rem" }}>
          {items.map((item, i) => (
            <div key={i} style={{
              padding: "2rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "0.75rem" }}>
                <span style={{ color: "#C8A96A", fontSize: "0.85rem", paddingTop: "0.15rem", flexShrink: 0 }}>・</span>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                  fontWeight: 500, color: "#1A1A1A",
                  lineHeight: 1.7, letterSpacing: "0.03em",
                }}>
                  {item.main}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.9rem",
                fontWeight: 300, color: "rgba(0,0,0,0.55)",
                lineHeight: 1.9, letterSpacing: "0.03em",
                paddingLeft: "1.75rem",
              }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "1rem",
          lineHeight: 2.1, color: "rgba(0,0,0,0.65)",
          fontWeight: 400, letterSpacing: "0.03em",
          borderLeft: "3px solid #C8A96A",
          paddingLeft: "1.5rem",
        }}>
          だから多くの人は、<br />
          <strong style={{ fontWeight: 600, color: "#1A1A1A" }}>「本音を隠した使い方」しかできていない。</strong>
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
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem", borderTop: "2px solid #C8A96A" }}>
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
          marginBottom: "1.5rem", lineHeight: 1.3,
        }}>
          Silentは、<br />
          &ldquo;残らない前提&rdquo;で使えるAIです
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "3.5rem",
        }}>
          「残したくない」という前提で設計されたAIは、今まで存在しなかった。
          Silentはその空白を埋めるために作られました。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { main: "会話は保存されません", sub: "やりとりの内容は、Silentのサーバーには一切記録されません。" },
            { main: "閉じると消えます", sub: "ページを閉じた瞬間、会話は完全に消去されます。キャッシュにも残りません。" },
            { main: "必要な時だけ、一時保存を選べます", sub: "保存したい場合はユーザー自身が選択します。デフォルトは「保存しない」です。" },
          ].map((item, i) => (
            <div key={i} style={{
              padding: "2rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "0.65rem" }}>
                <span style={{ color: "#C8A96A", fontSize: "1rem", flexShrink: 0 }}>✓</span>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                  fontWeight: 500, color: "#1A1A1A",
                  lineHeight: 1.7, letterSpacing: "0.03em",
                }}>
                  {item.main}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.9rem",
                fontWeight: 300, color: "rgba(0,0,0,0.55)",
                lineHeight: 1.9, letterSpacing: "0.03em",
                paddingLeft: "2rem",
              }}>
                {item.sub}
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
    <section id="how" style={{ background: "#FAF8F3", padding: "10rem 2.5rem", borderTop: "2px solid #C8A96A" }}>
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
          marginBottom: "1.5rem", lineHeight: 1.25,
        }}>
          なぜ安心して使えるのか
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "3.5rem",
        }}>
          Silentは、通常のAIサービスとは異なる設計になっています。
          「信頼してください」ではなく、「信頼できる構造になっています」と言えることを優先しました。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { main: "会話内容をデータベースに保存しません", sub: "やりとりはサーバーに書き込まれません。記録として存在しないものは、漏洩しません。" },
            { main: "セッション単位でのみ内容を保持します", sub: "ページを開いている間だけ、一時的にメモリ上に存在します。閉じれば消えます。" },
            { main: "保存する場合も、ユーザーが明示的に選択した時のみです", sub: "デフォルトは「保存しない」。あなたが選んだ時だけ、あなたのデバイスに保存されます。" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "2rem 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", marginBottom: "0.65rem" }}>
                <span style={{
                  fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                  letterSpacing: "0.2em", color: "#C8A96A",
                  minWidth: "2rem", paddingTop: "0.2rem", flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                  fontWeight: 500, color: "#1A1A1A",
                  lineHeight: 1.7, letterSpacing: "0.03em",
                }}>
                  {item.main}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.9rem",
                fontWeight: 300, color: "rgba(0,0,0,0.55)",
                lineHeight: 1.9, letterSpacing: "0.03em",
                paddingLeft: "3.25rem",
              }}>
                {item.sub}
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
      detail: "答えが欲しいけど、誰かに相談するのが憚られる。そういう時のために、Silentはある。",
    },
    {
      title: "仕事の判断・意思決定",
      quote: "「この判断、リスクないか整理したい」",
      detail: "社内では言いにくい。でも一人で考えると詰まる。AIに壁打ちしながら、自分の考えを整理する。",
    },
    {
      title: "人に聞きづらいこと",
      quote: "「誰にも聞けないけど、答えが欲しい」",
      detail: "「こんなこと聞いていいのか」という躊躇がなくなる。履歴が残らないから、本音で聞ける。",
    },
  ];
  return (
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem", borderTop: "2px solid #C8A96A" }}>
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
          marginBottom: "1.5rem", lineHeight: 1.25,
        }}>
          こんな時に使われています
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "4rem",
        }}>
          「整理したいけど、誰かに見られたくない」。そういう場面が、日常には思ったより多い。
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {cases.map((c, i) => (
            <div key={i} style={{ padding: "2.5rem 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <span style={{
                  fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                  letterSpacing: "0.22em", color: "#C8A96A",
                  minWidth: "2rem", paddingTop: "0.3rem", flexShrink: 0,
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p style={{
                    fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                    fontWeight: 500, color: "#1A1A1A",
                    letterSpacing: "0.03em", marginBottom: "0.6rem",
                  }}>
                    {c.title}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-noto)", fontSize: "0.92rem",
                    fontWeight: 300, color: "rgba(0,0,0,0.5)",
                    lineHeight: 1.8, letterSpacing: "0.03em",
                    fontStyle: "italic", marginBottom: "0.75rem",
                  }}>
                    {c.quote}
                  </p>
                  <p style={{
                    fontFamily: "var(--font-noto)", fontSize: "0.9rem",
                    fontWeight: 300, color: "rgba(0,0,0,0.62)",
                    lineHeight: 1.9, letterSpacing: "0.03em",
                  }}>
                    {c.detail}
                  </p>
                </div>
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
    {
      title: "履歴なし",
      story: "会話はその場で消える。",
      detail: "「後から見られるかも」という不安がない。本音で書いても、記録として残らない。それだけで、使い方が変わる。",
    },
    {
      title: "ログイン不要",
      story: "アカウントを作らなくていい。",
      detail: "名前もメールアドレスも必要ない。あなたが誰かを、Silentは知らない。知る必要がないから、聞かない。",
    },
    {
      title: "即使える",
      story: "開いた瞬間から相談できる。",
      detail: "準備も設定も不要。思い立った瞬間に使い始められる。ハードルがないことが、一番の設計だと思っている。",
    },
  ];
  return (
    <section style={{ background: "#FAF8F3", padding: "10rem 2.5rem", borderTop: "2px solid #C8A96A" }}>
      <div style={{ maxWidth: "760px" }}>
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
          marginBottom: "1.5rem", lineHeight: 1.25,
        }}>
          Silentが他と違う理由
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "4rem",
        }}>
          「使いやすさ」を優先したサービスは多い。<br />
          Silentが優先したのは、「安心して使えるか」だ。
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {features.map((f, i) => (
            <div key={i} style={{
              padding: "2.5rem 0",
              borderBottom: "1px solid rgba(0,0,0,0.08)",
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "2.5rem",
              alignItems: "start",
            }}>
              <div>
                <p style={{
                  fontFamily: "var(--font-inter)", fontSize: "0.65rem",
                  letterSpacing: "0.22em", color: "#C8A96A",
                  marginBottom: "0.6rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p style={{
                  fontFamily: "var(--font-playfair)", fontSize: "1.2rem",
                  fontWeight: 500, color: "#1A1A1A",
                  lineHeight: 1.4,
                }}>
                  {f.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "0.88rem",
                  fontWeight: 400, color: "#C8A96A",
                  lineHeight: 1.7, marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                }}>
                  {f.story}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.92rem",
                fontWeight: 300, color: "rgba(0,0,0,0.62)",
                lineHeight: 2, letterSpacing: "0.03em",
                paddingTop: "0.2rem",
              }}>
                {f.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════
   ⑦ TRUST — クリーム
══════════════════════════════════════ */
function Trust() {
  return (
    <section style={{ background: "#F7F4ED", padding: "10rem 2.5rem", borderTop: "2px solid #C8A96A" }}>
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
          marginBottom: "1.5rem", lineHeight: 1.25,
        }}>
          安全なAI設計
        </h2>
        <p style={{
          fontFamily: "var(--font-noto)", fontSize: "0.95rem",
          lineHeight: 2, color: "rgba(0,0,0,0.55)",
          fontWeight: 300, letterSpacing: "0.03em",
          marginBottom: "3.5rem",
        }}>
          「誰にも残らない」ことと「安全であること」は、矛盾しません。
          Silentは匿名性を悪用に使わせないために、以下の設計を採用しています。
        </p>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { main: "危険な内容をそのまま助長しません", sub: "有害・違法・自傷に関わる内容は、そのまま答えるのではなく安全な方向に変換して返します。" },
            { main: "より安全な選択肢に変換して返します", sub: "「それは危険です」で終わらせない。代わりに何ができるかを一緒に考えます。" },
            { main: "ユーザーを守る設計を優先しています", sub: "「何でも言える場所」は、「何でも許す場所」ではない。その区別を大切にしています。" },
          ].map((item, i) => (
            <div key={i} style={{ padding: "2rem 0", borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "0.65rem" }}>
                <span style={{ color: "#C8A96A", fontSize: "1rem", flexShrink: 0 }}>✓</span>
                <p style={{
                  fontFamily: "var(--font-noto)", fontSize: "1.05rem",
                  fontWeight: 500, color: "#1A1A1A",
                  lineHeight: 1.7, letterSpacing: "0.03em",
                }}>
                  {item.main}
                </p>
              </div>
              <p style={{
                fontFamily: "var(--font-noto)", fontSize: "0.9rem",
                fontWeight: 300, color: "rgba(0,0,0,0.55)",
                lineHeight: 1.9, letterSpacing: "0.03em",
                paddingLeft: "2rem",
              }}>
                {item.sub}
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