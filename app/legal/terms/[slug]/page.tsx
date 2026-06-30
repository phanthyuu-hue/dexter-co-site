"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, SUPPORT_EMAIL } from "@/data/products";
import { getLegalContent } from "@/data/legal-content";
import { LegalNav, LegalFooter, LegalDocHeader, LegalDocBody, LegalSectionHeading, LegalParagraph, LegalList } from "../../_components";

const LAST_UPDATED = "2026年7月1日";

export default function TermsOfServicePage() {
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
          label="Terms of Service"
          title="利用規約"
          productName={product.name}
          updatedAt={LAST_UPDATED}
        />
        <LegalDocBody>
          <LegalSectionHeading>サービス概要</LegalSectionHeading>
          <LegalParagraph>
            {custom?.termsOverview ??
              `${product.name}（以下「本サービス」といいます）は、Dexter & Co.（以下「当社」といいます）が提供するサービスです。本規約は、本サービスの利用条件を定めるものです。`}
          </LegalParagraph>

          <LegalSectionHeading>利用条件</LegalSectionHeading>
          <LegalParagraph>
            ユーザーは、本規約に同意の上、本サービスを利用するものとします。本サービスの利用にあたり、正確な情報の登録にご協力ください。
          </LegalParagraph>

          <LegalSectionHeading>禁止事項</LegalSectionHeading>
          <LegalParagraph>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</LegalParagraph>
          <LegalList
            items={[
              "法令または公序良俗に違反する行為",
              "当社または第三者の権利を侵害する行為",
              "本サービスの運営を妨害する行為",
              "不正アクセスその他不正な手段により本サービスを利用する行為",
              "第三者になりすます行為",
            ]}
          />

          <LegalSectionHeading>AI生成内容について</LegalSectionHeading>
          <LegalParagraph>
            {custom?.termsAiNote ??
              `本サービスがAI機能を提供する場合、生成された内容はAIによる参考情報であり、その正確性・完全性・適切性を保証するものではありません。生成内容の利用や、それに基づく判断は、ユーザー自身の責任で行うものとします。`}
          </LegalParagraph>

          <LegalSectionHeading>免責事項</LegalSectionHeading>
          <LegalParagraph>
            当社は、本サービスの利用により生じた損害について、当社に故意または重過失がある場合を除き、責任を負わないものとします。本サービスは、医療・心理療法・法律相談等の専門的助言を提供するものではありません。
          </LegalParagraph>

          <LegalSectionHeading>サービス変更・停止</LegalSectionHeading>
          <LegalParagraph>
            当社は、ユーザーへの事前通知なく、本サービスの内容を変更し、または提供を停止・終了することがあります。これによりユーザーに生じた損害について、当社は責任を負わないものとします。
          </LegalParagraph>

          <LegalSectionHeading>お問い合わせ</LegalSectionHeading>
          <LegalParagraph>
            本規約に関するお問い合わせは、下記メールアドレス、または
            <Link href={`/support/contact?product=${product.slug}`} style={{ color: "var(--gold)", textDecoration: "none" }}>
              お問い合わせフォーム
            </Link>
            よりご連絡ください。
          </LegalParagraph>
          <LegalParagraph>{SUPPORT_EMAIL}</LegalParagraph>

          <LegalSectionHeading>改定</LegalSectionHeading>
          <LegalParagraph>
            当社は、必要に応じて本規約を改定することがあります。重要な変更がある場合は、本サービス内でお知らせします。
          </LegalParagraph>
        </LegalDocBody>
      </main>
      <LegalFooter />
    </>
  );
}