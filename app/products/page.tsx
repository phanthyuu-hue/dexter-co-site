"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getProductBySlug, type Product } from "@/data/products";

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
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "1.05rem", lineHeight: 2, color: "rgba(245,244,240,0.78)", fontWeight: 300, maxWidth: "580px", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>
          現在提供中のAIツール・業務システム・アプリをご紹介します。
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", lineHeight: 1.9, color: "rgba(245,244,240,0.5)", fontWeight: 300, maxWidth: "560px", letterSpacing: "0.03em" }}>
          課題発見からプロダクト化までを一貫して行う、私たちの実績です。
        </p>
      </div>
    </section>
  );
}

/* ─── Status badge ─── */
function StatusBadge({ status, large }: { status: string; large?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: large ? "0.68rem" : "0.62rem",
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: "rgba(200,164,110,0.9)",
        border: "1px solid rgba(200,164,110,0.4)",
        padding: large ? "0.3rem 0.85rem" : "0.2rem 0.75rem",
        whiteSpace: "nowrap",
      }}
    >
      {status}
    </span>
  );
}

/** 保有データから対応プラットフォームを動的に導出する（products.tsに新規フィールドを増やさない） */
function getPlatforms(product: Product): string[] {
  const platforms: string[] = [];
  if (product.websiteUrl) platforms.push("Web");
  if (product.appStoreUrl) platforms.push("iOS");
  if (platforms.length === 0) platforms.push("準備中");
  return platforms;
}

/* ─── CTA button ─── */
function CtaButton({ href, label, primary }: { href: string | null; label: string; primary?: boolean }) {
  if (!href) {
    return (
      <span
        style={{
          display: "inline-block",
          padding: "0.75rem 1.8rem",
          fontFamily: "var(--font-noto)",
          fontSize: "0.82rem",
          fontWeight: 400,
          letterSpacing: "0.05em",
          borderRadius: "8px",
          border: "1px solid rgba(245,244,240,0.15)",
          color: "rgba(245,244,240,0.3)",
        }}
      >
        Coming Soon
      </span>
    );
  }
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      style={{
        display: "inline-block",
        padding: "0.75rem 1.8rem",
        fontFamily: "var(--font-noto)",
        fontSize: "0.82rem",
        fontWeight: 400,
        letterSpacing: "0.05em",
        textDecoration: "none",
        transition: "all 0.25s",
        borderRadius: "8px",
        ...(primary
          ? { backgroundColor: "var(--gold)", color: "var(--navy)" }
          : { border: "1px solid rgba(200,164,110,0.4)", color: "var(--gold)" }),
      }}
      onMouseEnter={(e) => {
        if (primary) {
          e.currentTarget.style.opacity = "0.85";
          e.currentTarget.style.transform = "translateY(-1px)";
        } else {
          e.currentTarget.style.borderColor = "rgba(200,164,110,0.8)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
        e.currentTarget.style.transform = "translateY(0)";
        if (!primary) e.currentTarget.style.borderColor = "rgba(200,164,110,0.4)";
      }}
    >
      {label}
    </a>
  );
}

/* ════════════════════════════════════════
   Featured Products
   会社の代表プロダクト：Lily Series / Silent / 巡帳 / AniStory
════════════════════════════════════════ */

interface FeaturedEntry {
  icon: string;
  name: string;
  description: string;
  status: string;
  platforms: string[];
  ctaLabel: string;
  ctaHref: string | null;
  ctaPrimary?: boolean;
}

function buildFeaturedEntries(): FeaturedEntry[] {
  const lily = getProductBySlug("lily");
  const silent = getProductBySlug("silent");
  const juncho = getProductBySlug("juncho");
  const anistory = getProductBySlug("anistory");

  const entries: FeaturedEntry[] = [];

  if (lily) {
    entries.push({
      icon: "🪷",
      name: "Lily Series",
      description: "店舗運営を支える、シフト・売上・AI対応をまとめた業務システム群。",
      status: "公開中",
      platforms: getPlatforms(lily),
      ctaLabel: "詳しく見る",
      ctaHref: lily.websiteUrl,
      ctaPrimary: true,
    });
  }
  if (silent) {
    entries.push({
      icon: "🤫",
      name: silent.name,
      description: silent.description,
      status: silent.status,
      platforms: getPlatforms(silent),
      ctaLabel: "詳しく見る",
      ctaHref: "/silent",
      ctaPrimary: true,
    });
  }
  if (juncho) {
    entries.push({
      icon: "⛩️",
      name: juncho.name,
      description: juncho.description,
      status: juncho.status,
      platforms: getPlatforms(juncho),
      ctaLabel: "Webサイト",
      ctaHref: juncho.websiteUrl,
      ctaPrimary: true,
    });
  }
  if (anistory) {
    entries.push({
      icon: "🎬",
      name: anistory.name,
      description: anistory.description,
      status: anistory.status,
      platforms: getPlatforms(anistory),
      ctaLabel: "Webサイト",
      ctaHref: anistory.websiteUrl,
      ctaPrimary: true,
    });
  }

  return entries;
}

function FeaturedProducts() {
  const entries = buildFeaturedEntries();

  return (
    <section style={{ padding: "8rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel>Featured</SectionLabel>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 500, color: "var(--offwhite)", marginBottom: "0.75rem" }}>
          代表プロダクト
        </h2>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "rgba(245,244,240,0.5)", fontWeight: 300, marginBottom: "3rem", maxWidth: "560px" }}>
          Dexter &amp; Co. が現在最も力を入れているプロダクトです。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {entries.map((entry) => (
            <div
              key={entry.name}
              style={{
                border: "1px solid rgba(200,164,110,0.3)",
                background: "rgba(30,35,41,0.55)",
                padding: "3rem 2.5rem",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 4px 32px rgba(200,164,110,0.06)",
                transition: "transform 0.25s, box-shadow 0.25s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                e.currentTarget.style.borderColor = "rgba(200,164,110,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 32px rgba(200,164,110,0.06)";
                e.currentTarget.style.borderColor = "rgba(200,164,110,0.3)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <span style={{ fontSize: "2.2rem", lineHeight: 1 }} aria-hidden>{entry.icon}</span>
                <StatusBadge status={entry.status} large />
              </div>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.5rem, 3vw, 1.9rem)", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1rem" }}>
                {entry.name}
              </h3>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", lineHeight: 1.9, color: "rgba(245,244,240,0.65)", fontWeight: 300, marginBottom: "1.5rem", flexGrow: 1 }}>
                {entry.description}
              </p>
              <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.6, marginBottom: "1.75rem" }}>
                {entry.platforms.join(" / ")}
              </p>
              <div>
                <CtaButton href={entry.ctaHref} label={entry.ctaLabel} primary={entry.ctaPrimary} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════
   通常カード（Public Products / Beta・In Development 共通）
════════════════════════════════════════ */

function ProductCard({ product, devOverride }: { product: Product; devOverride?: boolean }) {
  const platforms = getPlatforms(product);
  const displayStatus = devOverride ? "開発中" : product.status;
  const hasLink = Boolean(product.websiteUrl);

  return (
    <div
      style={{
        border: "1px solid rgba(200,164,110,0.15)",
        background: "rgba(30,35,41,0.35)",
        padding: "2.25rem 2rem",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s, background 0.25s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.4)";
        e.currentTarget.style.background = "rgba(30,35,41,0.55)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(200,164,110,0.15)";
        e.currentTarget.style.background = "rgba(30,35,41,0.35)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
        <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", fontWeight: 500, color: "var(--offwhite)" }}>
          {product.name}
        </h3>
        <StatusBadge status={displayStatus} />
      </div>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--gold)", opacity: 0.65, marginBottom: "1rem" }}>
        {product.category}
      </p>
      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.85rem", lineHeight: 1.8, color: "rgba(245,244,240,0.6)", fontWeight: 300, marginBottom: "1.5rem", flexGrow: 1 }}>
        {product.description}
      </p>
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.62rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", opacity: 0.55, marginBottom: "1.5rem" }}>
        {platforms.join(" / ")}
      </p>
      <div>
        <CtaButton href={hasLink ? product.websiteUrl : null} label="Webサイト" primary={hasLink} />
      </div>
    </div>
  );
}

/* ─── Public Products ─── */
function PublicProducts() {
  const slugs = ["tabilog", "taishoku-techo", "builddeck"];
  const items = slugs.map((slug) => getProductBySlug(slug)).filter((p): p is Product => Boolean(p));

  return (
    <section style={{ padding: "8rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel>Public Products</SectionLabel>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 500, color: "var(--offwhite)", marginBottom: "2.5rem" }}>
          公開中のプロダクト
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} devOverride={p.slug === "builddeck"} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Beta / In Development ─── */
function BetaProducts() {
  const slugs = ["lily-assist", "pochiwork", "chorus"];
  const items = slugs.map((slug) => getProductBySlug(slug)).filter((p): p is Product => Boolean(p));

  return (
    <section style={{ padding: "8rem 2.5rem", borderBottom: "1px solid rgba(245,244,240,0.06)", background: "rgba(18,37,57,0.3)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <SectionLabel>Beta / In Development</SectionLabel>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)", fontWeight: 500, color: "var(--offwhite)", marginBottom: "1rem" }}>
          β版・開発中のプロダクト
        </h2>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", color: "rgba(245,244,240,0.5)", fontWeight: 300, marginBottom: "2.5rem", maxWidth: "560px" }}>
          現在開発を進めているプロダクトです。公開時期は順次お知らせします。
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DexTech Section ─── */
function DexTechSection() {
  return (
    <section style={{ padding: "10rem 2.5rem", background: "rgba(18,37,57,0.3)" }}>
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
        <FeaturedProducts />
        <PublicProducts />
        <BetaProducts />
        <DexTechSection />
      </main>
      <Footer />
    </>
  );
}