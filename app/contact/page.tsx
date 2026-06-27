"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ─── Nav ─── */
function Nav() {
  const pathname = usePathname();
  const links = [
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Support", href: "/support" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2.5rem", background: "rgba(11,29,45,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,164,110,0.1)" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image src="/logo-dark.png" alt="Dexter & Co." width={160} height={36} style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        <span className="nav-brand-text" style={{ fontFamily: "var(--font-playfair)", fontSize: "0.95rem", fontWeight: 500, color: "rgba(245,244,240,0.82)", letterSpacing: "0.14em", whiteSpace: "nowrap" }}>
          DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
        </span>
      </Link>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((link) => {
          const isActive = link.href === "/support" ? pathname?.startsWith("/support") : pathname === link.href;
          return (
            <Link key={link.href} href={link.href} className="nav-link" style={isActive ? { color: "var(--gold)", opacity: 1 } : {}}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer style={{ padding: "2.5rem 2.5rem 2rem", borderTop: "1px solid rgba(200,164,110,0.12)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "2rem", alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", alignItems: "flex-start" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.25rem" }}>
            <Image src="/logo-dark.png" alt="Dexter & Co." width={28} height={28} style={{ width: "28px", height: "28px", objectFit: "contain", opacity: 0.75 }} />
            <span style={{ fontFamily: "var(--font-playfair)", fontSize: "0.9rem", fontWeight: 500, color: "rgba(245,244,240,0.55)", letterSpacing: "0.12em" }}>
              DEXTER <span style={{ color: "var(--gold)", opacity: 0.7 }}>&</span> Co.
            </span>
          </div>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.08em" }}>Tokyo / Remote</p>
          <p style={{ fontFamily: "var(--font-playfair)", fontSize: "0.7rem", fontStyle: "italic", color: "rgba(200,164,110,0.4)", letterSpacing: "0.05em" }}>From Problem to Product.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>Contact</p>
          <a href="mailto:hello@dexter-co.jp" style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.45)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, marginBottom: "0.25rem" }}>Support</p>
          {[
            { label: "Support", href: "/support" },
            { label: "FAQ", href: "/support/faq" },
            { label: "Downloads", href: "/support/downloads" },
            { label: "Status", href: "/support/status" },
          ].map((l) => (
            <Link key={l.href} href={l.href} style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", color: "rgba(245,244,240,0.4)", letterSpacing: "0.04em", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,244,240,0.4)")}>
              {l.label}
            </Link>
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

/* ─── Contact Hero (改) ─── */
function Hero() {
  const consultItems = [
    { title: "AIツール開発", desc: "業務に合わせたAIツールを設計・開発します。" },
    { title: "業務システム開発", desc: "現場の非効率を一つのシステムに集約します。" },
    { title: "業務自動化", desc: "手作業・繰り返し業務をAIと仕組みで自動化します。" },
    { title: "プロダクト企画相談", desc: "アイデアを課題ベースで整理し、実装可能な形にします。" },
    { title: "既存業務の改善相談", desc: "現状のフローを見直し、最適な改善策を提案します。" },
  ];

  return (
    <section style={{ paddingTop: "16rem", paddingBottom: "7rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "720px" }}>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.85, marginBottom: "1.5rem" }}>Contact</p>

        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.1, color: "var(--offwhite)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
          Let&apos;s turn problems
          <br />
          <em style={{ fontStyle: "italic", color: "var(--gold)" }}>into products.</em>
        </h1>

        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.85rem", color: "rgba(200,164,110,0.75)", letterSpacing: "0.06em", marginBottom: "2.5rem", fontWeight: 300 }}>
          課題を、使えるプロダクトへ。
        </p>

        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />

        <p style={{ fontFamily: "var(--font-noto)", fontSize: "1.05rem", lineHeight: 2, color: "rgba(245,244,240,0.78)", fontWeight: 300, maxWidth: "560px", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
          プロダクト開発・業務改善の相談を受け付けています。
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(245,244,240,0.5)", fontWeight: 300, maxWidth: "520px", letterSpacing: "0.03em", marginBottom: "3rem" }}>
          まずは、どんな課題があるかを教えてください。一緒に整理するところから始めます。
        </p>

        {/* 相談内容リスト — 強化 */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "1.5rem" }}>
            以下のようなご相談を受けています
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {consultItems.map((item, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "10rem 1fr", gap: "1.5rem", padding: "1.2rem 0", borderBottom: "1px solid rgba(245,244,240,0.05)", alignItems: "start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "var(--gold)", opacity: 0.55, flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", fontWeight: 500, color: "rgba(245,244,240,0.75)", letterSpacing: "0.03em" }}>{item.title}</p>
                </div>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.82rem", fontWeight: 300, color: "rgba(245,244,240,0.5)", letterSpacing: "0.02em", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.85rem", color: "rgba(245,244,240,0.38)", fontWeight: 300, letterSpacing: "0.03em", marginTop: "1.75rem", lineHeight: 1.8 }}>
            「こういうことで困っているんだけど…」という段階でもお気軽にどうぞ。
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="https://line.me/ti/p/~hello-dexter" target="_blank" rel="noopener noreferrer" className="btn-gold">LINEで相談する</a>
          <a href="mailto:hello@dexter-co.jp" className="btn-ghost">メールで相談する</a>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}