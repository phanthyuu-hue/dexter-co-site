"use client";

import { LegalNav, LegalFooter, SectionLabel, LegalDocBody, LegalSectionHeading } from "../_components";

function DisclosureRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10rem 1fr",
        gap: "1.5rem",
        padding: "1.1rem 0",
        borderBottom: "1px solid rgba(245,244,240,0.07)",
      }}
    >
      <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.05em", color: "rgba(200,164,110,0.8)" }}>{label}</p>
      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(245,244,240,0.75)", fontWeight: 300 }}>{value}</p>
    </div>
  );
}

export default function CommercialDisclosurePage() {
  return (
    <>
      <LegalNav />
      <main>
        <section
          style={{
            paddingTop: "14rem",
            paddingBottom: "3rem",
            paddingLeft: "2.5rem",
            paddingRight: "2.5rem",
            borderBottom: "1px solid rgba(245,244,240,0.08)",
          }}
        >
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <SectionLabel>Commercial Disclosure</SectionLabel>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                fontWeight: 500,
                lineHeight: 1.3,
                color: "var(--offwhite)",
                marginBottom: "0.5rem",
              }}
            >
              特定商取引法に基づく表記
            </h1>
            <p style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", color: "rgba(245,244,240,0.35)", letterSpacing: "0.04em" }}>
              最終改定日：2026年7月1日
            </p>
          </div>
        </section>

        <LegalDocBody>
          <LegalSectionHeading>事業者情報</LegalSectionHeading>
          <div>
            <DisclosureRow label="事業者名" value="Dexter & Co." />
            <DisclosureRow label="運営統括責任者" value="必要に応じて開示します" />
            <DisclosureRow label="所在地" value="必要に応じて開示します" />
            <DisclosureRow label="電話番号" value="必要に応じて開示します" />
            <DisclosureRow label="メールアドレス" value="dexter.company.jp@gmail.com" />
          </div>

          <LegalSectionHeading>販売価格</LegalSectionHeading>
          <div>
            <DisclosureRow label="販売価格" value="各サービス・各プロダクトのご利用ページに表示する価格によります（無料プロダクトを除く）。" />
            <DisclosureRow label="追加手数料等" value="現時点では準備中です。" />
          </div>

          <LegalSectionHeading>お支払い方法・時期</LegalSectionHeading>
          <div>
            <DisclosureRow label="お支払い方法" value="準備中" />
            <DisclosureRow label="お支払い時期" value="準備中" />
          </div>

          <LegalSectionHeading>サービス提供時期</LegalSectionHeading>
          <div>
            <DisclosureRow label="提供時期" value="お申し込み・お支払い手続き完了後、各サービスの定めに従い提供します。" />
          </div>

          <LegalSectionHeading>キャンセル・返品について</LegalSectionHeading>
          <div>
            <DisclosureRow label="キャンセル" value="準備中（各サービスの利用規約に従います）。" />
            <DisclosureRow label="返品・返金" value="準備中（各サービスの利用規約に従います）。" />
          </div>
        </LegalDocBody>
      </main>
      <LegalFooter />
    </>
  );
}