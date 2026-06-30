"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, SUPPORT_EMAIL } from "@/data/products";
import { getLegalContent } from "@/data/legal-content";
import { LegalNav, LegalFooter, LegalDocHeader, LegalDocBody, LegalSectionHeading, LegalParagraph, LegalList } from "../../_components";

const LAST_UPDATED = "2026年7月1日";

export default function PrivacyPolicyPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <>
        <LegalNav />
        <main>
          <section style={{ paddingTop: "16rem", paddingBottom: "8rem", paddingLeft: "2.5rem", paddingRight: "2.5rem", textAlign: "center" }}>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "2rem", color: "var(--offwhite)", marginBottom: "1.5rem" }}>
              プロダクトが見つかりませんでした
            </h1>
            <Link href="/legal" className="btn-gold">
              Legal Centerへ戻る
            </Link>
          </section>
        </main>
        <LegalFooter />
      </>
    );
  }

  const custom = getLegalContent(product.slug);

  return (
    <>
      <LegalNav />
      <main>
        <LegalDocHeader
          label="Privacy Policy"
          title="プライバシーポリシー"
          productName={product.name}
          updatedAt={LAST_UPDATED}
        />
        <LegalDocBody>
          <LegalParagraph>
            {custom?.privacyIntro ??
              `${product.name}（以下「本サービス」といいます）は、Dexter & Co.（以下「当社」といいます）が提供するサービスです。本ポリシーは、本サービスの利用に際して当社が取得する情報の取り扱いについて定めるものです。`}
          </LegalParagraph>

          <LegalSectionHeading>収集する情報</LegalSectionHeading>
          <LegalParagraph>当社は、本サービスの提供にあたり、以下の情報を取得することがあります。</LegalParagraph>
          <LegalList
            items={[
              "ユーザーが本サービス内で入力・登録した情報（記録、メモ、設定内容等）",
              "メールアドレス等、お問い合わせの際にご提供いただく情報",
              "アプリの利用状況に関する技術的情報（クラッシュログ、操作ログ等）",
            ]}
          />

          <LegalSectionHeading>利用目的</LegalSectionHeading>
          <LegalParagraph>取得した情報は、以下の目的のために利用します。</LegalParagraph>
          <LegalList
            items={[
              "本サービスの提供・維持・改善のため",
              "ユーザーからのお問い合わせに対応するため",
              "不具合の調査・修正のため",
              "利用規約に違反する行為への対応のため",
            ]}
          />

          <LegalSectionHeading>AI機能について</LegalSectionHeading>
          <LegalParagraph>
            {custom?.privacyAiNote ??
              `本サービスがAI機能を提供する場合、ユーザーが入力した情報をもとに、AI（大規模言語モデル等）を用いてコンテンツを生成することがあります。生成された内容は参考情報であり、内容の正確性・完全性を保証するものではありません。`}
          </LegalParagraph>

          <LegalSectionHeading>第三者提供</LegalSectionHeading>
          <LegalParagraph>
            当社は、法令に基づく場合を除き、ユーザーの同意なく取得した情報を第三者に提供することはありません。ただし、本サービスの提供に必要な範囲で、クラウドインフラやAI機能等の外部委託先に処理を委託することがあります。
          </LegalParagraph>

          <LegalSectionHeading>データ保存</LegalSectionHeading>
          <LegalParagraph>
            取得した情報は、利用目的の達成に必要な期間、安全に保存します。ユーザーがデータの削除を希望する場合は、お問い合わせフォームよりご連絡ください。
          </LegalParagraph>

          <LegalSectionHeading>お問い合わせ</LegalSectionHeading>
          <LegalParagraph>
            本ポリシーに関するお問い合わせは、下記メールアドレス、または
            <Link href={`/support/contact?product=${product.slug}`} style={{ color: "var(--gold)", textDecoration: "none" }}>
              お問い合わせフォーム
            </Link>
            よりご連絡ください。
          </LegalParagraph>
          <LegalParagraph>{SUPPORT_EMAIL}</LegalParagraph>

          <LegalSectionHeading>改定</LegalSectionHeading>
          <LegalParagraph>
            当社は、必要に応じて本ポリシーを改定することがあります。重要な変更がある場合は、本サービス内でお知らせします。
          </LegalParagraph>
        </LegalDocBody>
      </main>
      <LegalFooter />
    </>
  );
}