"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

/* ── Section label ── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.85, marginBottom: "1.5rem" }}>
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
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 2.5rem", background: "rgba(11,29,45,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(200,164,110,0.1)" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <Image src="/logo-dark.png" alt="Dexter & Co." width={160} height={36} style={{ height: "36px", width: "auto", objectFit: "contain" }} />
        <span className="nav-brand-text" style={{ fontFamily: "var(--font-playfair)", fontSize: "0.95rem", fontWeight: 500, color: "rgba(245,244,240,0.82)", letterSpacing: "0.14em", whiteSpace: "nowrap" }}>
          DEXTER <span style={{ color: "var(--gold)" }}>&</span> Co.
        </span>
      </Link>
      <div style={{ display: "flex", gap: "2.5rem" }}>
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="nav-link" style={pathname === link.href ? { color: "var(--gold)", opacity: 1 } : {}}>
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
    <section style={{ paddingTop: "16rem", paddingBottom: "8rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "800px" }}>
        <SectionLabel>Products</SectionLabel>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", fontWeight: 500, lineHeight: 1.1, color: "var(--offwhite)", marginBottom: "1.5rem", letterSpacing: "-0.01em" }}>
          DexTechが開発したプロダクト
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.75rem", fontWeight: 300 }}>
            Products built by DexTech.
          </span>
        </h1>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
        {/* リード文 — 追加 */}
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "1.05rem", lineHeight: 2, color: "rgba(245,244,240,0.78)", fontWeight: 300, maxWidth: "580px", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
          これらのプロダクトは、Dexter & Co. が発見した課題をもとに、DexTech が開発しています。
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", lineHeight: 1.9, color: "rgba(245,244,240,0.5)", fontWeight: 300, maxWidth: "560px", letterSpacing: "0.03em" }}>
          アイデアからではなく、現場の課題から生まれたプロダクトです。
        </p>
      </div>
    </section>
  );
}

/* ─── Product Cards (改: 統一フォーマット) ─── */
const products = [
  {
    name: "Lily Series",
    tags: ["Business Operations", "AI Tools"],
    why: "店舗現場では、シフト・売上・予約・LINE対応がバラバラで管理され、運営者の時間が消えていくという課題から生まれました。",
    forWhom: "店舗オーナー・複数店舗の運営者・現場スタッフを抱えるチーム",
    problem: "管理ツールの分散・対応の属人化・業務コストの肥大化",
    change: "管理業務を一元化し、AIが日常対応を自動化。現場の工数を大幅に削減できます。",
    status: "Live",
    ctas: [
      { label: "デモを見る", href: "https://lily-os.vercel.app/", external: true, primary: true },
      { label: "LINEで相談する", href: "https://line.me/ti/p/~hello-dexter", external: true, primary: false },
    ],
    featured: true,
  },
  {
    name: "Silent",
    tags: ["Privacy AI", "Communication"],
    why: "「AIに相談したいが、履歴が残るのが不安」という声から生まれた、プライバシー重視のAIチャットです。",
    forWhom: "ビジネスの意思決定・日常の悩み・誰にも言えない相談を安心してしたい方",
    problem: "AIへの相談における履歴・プライバシーへの不安",
    change: "履歴を残さず、静かに使えるAIアシスタントとして、日常の判断をサポートします。",
    status: "Live",
    ctas: [
      { label: "今すぐ使う", href: "/silent", external: false, primary: true },
    ],
    featured: false,
  },
  {
    name: "TabiLog",
    tags: ["Travel", "Personal OS"],
    why: "旅の記録がSNS・メモ・家計簿に散らばってしまうという不便さを解決するために開発しました。",
    forWhom: "旅行が好きな個人・支出管理をしたい方・旅の思い出を丁寧に残したい人",
    problem: "旅の記録・支出・思い出が複数ツールに分散してしまう",
    change: "旅の支出・記録・思い出をひとつのアプリにまとめ、AIが振り返りをサポートします。",
    status: "Live",
    ctas: [
      { label: "アプリを見る", href: "https://tabilog.app", external: true, primary: true },
    ],
    featured: false,
  },
];

function ProductCards() {
  return (
    <section style={{ padding: "10rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
        {products.map((product, i) => (
          <div
            key={product.name}
            style={{
              border: product.featured ? "1px solid rgba(200,164,110,0.5)" : "1px solid rgba(200,164,110,0.15)",
              background: product.featured ? "rgba(30,35,41,0.7)" : "rgba(30,35,41,0.3)",
              padding: product.featured ? "3.5rem 3rem" : "3rem 2.5rem",
              transition: "border-color 0.3s, transform 0.25s, box-shadow 0.25s",
              boxShadow: product.featured ? "0 4px 32px rgba(200,164,110,0.08)" : "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)"; e.currentTarget.style.borderColor = "rgba(200,164,110,0.45)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = product.featured ? "0 4px 32px rgba(200,164,110,0.08)" : "none"; e.currentTarget.style.borderColor = product.featured ? "rgba(200,164,110,0.5)" : "rgba(200,164,110,0.15)"; }}
          >
            {/* 上部 */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.25em", color: "var(--gold)", opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(200,164,110,0.9)", border: "1px solid rgba(200,164,110,0.4)", padding: "0.2rem 0.75rem" }}>
                {product.status}
              </span>
            </div>

            {/* 名前 */}
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1rem" }}>{product.name}</h2>

            {/* タグ */}
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              {product.tags.map((tag) => (
                <span key={tag} style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid rgba(200,164,110,0.25)", padding: "0.18rem 0.65rem", opacity: 0.8 }}>{tag}</span>
              ))}
            </div>

            {/* 統一フォーマット */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem", marginBottom: "2rem" }}>
              {/* なぜ */}
              <div style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem", paddingBottom: "1.4rem", borderBottom: "1px solid rgba(245,244,240,0.05)" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, paddingTop: "0.2rem" }}>なぜ</p>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(245,244,240,0.62)", fontWeight: 300, letterSpacing: "0.02em" }}>{product.why}</p>
              </div>
              {/* 誰向け */}
              <div style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem", paddingBottom: "1.4rem", borderBottom: "1px solid rgba(245,244,240,0.05)" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, paddingTop: "0.2rem" }}>誰向け</p>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(245,244,240,0.62)", fontWeight: 300, letterSpacing: "0.02em" }}>{product.forWhom}</p>
              </div>
              {/* 解決する課題 */}
              <div style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem", paddingBottom: "1.4rem", borderBottom: "1px solid rgba(245,244,240,0.05)" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, paddingTop: "0.2rem" }}>課題</p>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.85, color: "rgba(245,244,240,0.62)", fontWeight: 300, letterSpacing: "0.02em" }}>{product.problem}</p>
              </div>
              {/* 変化 */}
              <div style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem" }}>
                <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.65, paddingTop: "0.2rem" }}>変化</p>
                <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.9rem", lineHeight: 1.85, color: "rgba(245,244,240,0.82)", fontWeight: 400, letterSpacing: "0.02em" }}>{product.change}</p>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", paddingTop: "0.5rem", borderTop: "1px solid rgba(200,164,110,0.12)" }}>
              {product.ctas.map((btn, j) => (
                <a key={j} href={btn.href} target={btn.external ? "_blank" : undefined} rel={btn.external ? "noopener noreferrer" : undefined}
                  style={{ display: "inline-block", padding: "0.75rem 1.8rem", fontFamily: "var(--font-noto)", fontSize: "0.82rem", fontWeight: 400, letterSpacing: "0.05em", textDecoration: "none", transition: "all 0.25s", borderRadius: "8px", ...(btn.primary ? { backgroundColor: "var(--gold)", color: "var(--navy)" } : { border: "1px solid rgba(200,164,110,0.4)", color: "var(--gold)" }) }}
                  onMouseEnter={(e) => { if (btn.primary) { e.currentTarget.style.opacity = "0.85"; e.currentTarget.style.transform = "translateY(-1px)"; } else e.currentTarget.style.borderColor = "rgba(200,164,110,0.8)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; if (!btn.primary) e.currentTarget.style.borderColor = "rgba(200,164,110,0.4)"; }}>
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── DexTech Section ─── */
function DexTechSection() {
  return (
    <section style={{ padding: "10rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <SectionLabel>DexTech</SectionLabel>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.5rem" }}>
          <Image src="/dextech-symbol.png" alt="" width={42} height={42} aria-hidden style={{ width: "42px", height: "42px", objectFit: "contain", opacity: 0.9 }} />
          <p style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1.92rem, 4.8vw, 3.36rem)", fontWeight: 300, color: "var(--offwhite)", letterSpacing: "0.08em", lineHeight: 1 }}>DexTech</p>
        </div>
        <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.7, marginBottom: "3rem" }}>
          つくる。解く。スケールさせる。
          <span style={{ display: "block", fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.18em", color: "rgba(200,164,110,0.45)", marginTop: "0.5rem", fontWeight: 300 }}>Build. Solve. Scale.</span>
        </p>
        <span style={{ display: "block", width: "40px", height: "1px", backgroundColor: "var(--gold)", opacity: 0.7, marginBottom: "2.5rem" }} />
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "1rem", lineHeight: 2, color: "rgba(245,244,240,0.72)", fontWeight: 300, maxWidth: "580px", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
          DexTechは、Dexter & Co.の開発ブランドです。テクノロジーとAIを活用し、実際の業務・生活の課題をプロダクトとして形にします。
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", lineHeight: 1.9, color: "rgba(245,244,240,0.45)", fontWeight: 300, maxWidth: "560px", letterSpacing: "0.03em" }}>
          DexTech が開発するのは、Dexter & Co. が課題として確認したものだけ。だから使われるプロダクトが生まれます。
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