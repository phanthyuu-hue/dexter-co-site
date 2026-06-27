"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import { SupportNav, SupportFooter, SupportPageHeader } from "../_components";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.9rem 1rem",
  background: "rgba(245,244,240,0.04)",
  border: "1px solid rgba(245,244,240,0.15)",
  borderRadius: "8px",
  color: "var(--offwhite)",
  fontFamily: "var(--font-noto)",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-inter)",
  fontSize: "0.7rem",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "var(--gold)",
  opacity: 0.75,
  marginBottom: "0.6rem",
};

function ContactForm() {
  const searchParams = useSearchParams();
  const presetSlug = searchParams.get("product") ?? "";

  const [selectedProduct, setSelectedProduct] = useState(presetSlug);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 送信処理は未実装（Phase 1ではUIのみ）
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: "560px",
          margin: "0 auto",
          textAlign: "center",
          padding: "3rem 2rem",
          border: "1px solid rgba(200,164,110,0.25)",
          background: "rgba(30,35,41,0.4)",
        }}
      >
        <p style={{ fontFamily: "var(--font-playfair)", fontSize: "1.3rem", color: "var(--offwhite)", marginBottom: "1rem" }}>
          送信内容を確認しました
        </p>
        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", color: "rgba(245,244,240,0.6)", lineHeight: 1.8 }}>
          ※ Phase 1では送信処理は未実装のため、実際には送信されていません。
          <br />
          ご連絡は直接メールでも受け付けています。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "560px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.75rem" }}>
      <div>
        <label style={labelStyle}>対象プロダクト</label>
        <select
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          style={{ ...inputStyle, cursor: "pointer" }}
        >
          <option value="">選択してください（任意）</option>
          {products.map((p) => (
            <option key={p.slug} value={p.slug} style={{ color: "#000" }}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label style={labelStyle}>お名前（任意）</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label style={labelStyle}>メールアドレス</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label style={labelStyle}>お問い合わせ内容</label>
        <textarea
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }}
          placeholder="お問い合わせ内容をご記入ください"
        />
      </div>

      <button
        type="submit"
        className="btn-gold"
        style={{ border: "1px solid var(--gold)", cursor: "pointer", background: "none", marginTop: "0.5rem" }}
      >
        送信する
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <SupportNav />
      <main>
        <SupportPageHeader
          label="Contact"
          title="お問い合わせ"
          subtitleEn="Contact Support"
          lead="プロダクトに関するご質問・不具合報告・ご要望など、お気軽にご連絡ください。"
        />
        <section style={{ padding: "5rem 2.5rem 8rem" }}>
          <Suspense fallback={null}>
            <ContactForm />
          </Suspense>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}
