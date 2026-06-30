"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { getProductBySlug, SUPPORT_EMAIL } from "@/data/products";
import { getLegalContent } from "@/data/legal-content";
import { LegalNav, LegalFooter, LegalDocHeader, LegalDocBody, LegalSectionHeading, LegalParagraph, LegalList } from "../../_components";

export default function DataDeletionPage() {
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
          label="Data Deletion"
          title="データ削除について"
          productName={product.name}
          updatedAt="2026年7月1日"
        />
        <LegalDocBody>
          <LegalParagraph>
            {custom?.dataDeletionNote ??
              `${product.name} のアカウント・データの削除をご希望の場合、以下の方法でご依頼いただけます。`}
          </LegalParagraph>

          <LegalSectionHeading>データ削除の依頼方法</LegalSectionHeading>
          <LegalParagraph>
            下記の
            <Link href={`/support/contact?product=${product.slug}`} style={{ color: "var(--gold)", textDecoration: "none" }}>
              お問い合わせフォーム
            </Link>
            、またはメールにて、データ削除をご希望の旨をご連絡ください。
          </LegalParagraph>

          <LegalSectionHeading>削除対象</LegalSectionHeading>
          <LegalParagraph>ご依頼いただいた場合、以下の情報を削除いたします。</LegalParagraph>
          <LegalList
            items={[
              `${product.name} に登録されたユーザーアカウント情報`,
              "アプリ内で入力・保存された記録・メモ等のコンテンツ",
              "お問い合わせ履歴を除く、サービス利用に関する付随情報",
            ]}
          />

          <LegalSectionHeading>削除に必要な情報</LegalSectionHeading>
          <LegalParagraph>本人確認のため、以下の情報をご提供いただく場合があります。</LegalParagraph>
          <LegalList
            items={["ご登録のメールアドレス", "対象プロダクト名（" + product.name + "）", "削除をご希望の理由（任意）"]}
          />

          <LegalSectionHeading>連絡先</LegalSectionHeading>
          <LegalParagraph>{SUPPORT_EMAIL}</LegalParagraph>
          <LegalParagraph>
            確認のうえ、合理的な期間内に削除対応いたします。法令により保存が義務付けられている情報については、この限りではありません。
          </LegalParagraph>
        </LegalDocBody>
      </main>
      <LegalFooter />
    </>
  );
}