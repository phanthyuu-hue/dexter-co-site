"use client";

import { useState } from "react";
import Link from "next/link";
import { commonFaq } from "@/data/faq";
import { SupportNav, SupportFooter, SupportPageHeader } from "../_components";

function FaqAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(245,244,240,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span style={{ fontFamily: "var(--font-noto)", fontSize: "1rem", color: "var(--offwhite)", fontWeight: 400 }}>
          {question}
        </span>
        <span style={{ color: "var(--gold)", fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p
          style={{
            fontFamily: "var(--font-noto)",
            fontSize: "0.88rem",
            lineHeight: 1.9,
            color: "rgba(245,244,240,0.6)",
            fontWeight: 300,
            paddingBottom: "1.5rem",
            maxWidth: "640px",
          }}
        >
          {answer}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <SupportNav />
      <main>
        <SupportPageHeader
          label="FAQ"
          title="よくあるご質問"
          subtitleEn="Frequently Asked Questions"
          lead="全プロダクト共通のご質問をまとめています。解決しない場合はお問い合わせください。"
        />
        <section style={{ padding: "5rem 2.5rem" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ marginBottom: "3rem" }}>
              {commonFaq.map((item, i) => (
                <FaqAccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.88rem", color: "rgba(245,244,240,0.5)", marginBottom: "1.5rem" }}>
                解決しない場合は、お気軽にお問い合わせください。
              </p>
              <Link href="/support/contact" className="btn-gold">
                お問い合わせ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}
