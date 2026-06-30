/**
 * ─────────────────────────────────────────────
 * Legal Center — プロダクト別カスタム文面
 * ─────────────────────────────────────────────
 * /legal/privacy/[slug], /legal/terms/[slug], /legal/data-deletion/[slug]
 * で使う、プロダクトごとの個別文面です。
 *
 * Phase 1ではMoyaのみ個別に作り込んでいます。
 * ここに定義が無いプロダクトは、各ページ側の共通テンプレート
 * （プロダクト名を差し込んだ汎用文面）が自動的に使われます。
 *
 * 【後続フェーズで他プロダクトの本文を個別最適化する場合】
 * このファイルの `legalContent` オブジェクトに、
 * 該当slugをキーとしたエントリを1件追加するだけでOKです。
 */

export interface LegalContentEntry {
  /** プライバシーポリシー本文の上書き（未指定なら共通テンプレート） */
  privacyIntro?: string;
  privacyAiNote?: string;
  /** 利用規約本文の上書き（未指定なら共通テンプレート） */
  termsOverview?: string;
  termsAiNote?: string;
  /** データ削除ページの補足（未指定なら共通テンプレート） */
  dataDeletionNote?: string;
}

export const legalContent: Record<string, LegalContentEntry> = {
  moya: {
    privacyIntro:
      "Moya（モヤ）は、ふたりの記録や日々のメモ・感情ログをもとに、AIが関係性をやさしく振り返る「おたより」を生成するiOSアプリです。本ポリシーは、Moyaの利用に際して取得する情報の取り扱いについて定めるものです。",
    privacyAiNote:
      "Moyaは、ユーザーが入力した記録・メモ・感情ログをもとに、AI（大規模言語モデル）を用いておたより文・振り返り文を生成します。生成された内容はAIによる参考的な振り返りであり、医療・心理療法・法律相談などの専門的助言にはあたりません。関係性や心身の状態について不安がある場合は、専門家にご相談ください。",
    termsOverview:
      "Moya（モヤ）は、パートナーとの関係性における記録・振り返りを補助するiOSアプリです。本規約は、Moyaの利用条件を定めるものです。",
    termsAiNote:
      "Moyaが生成するおたより・振り返り文は、ユーザーが入力した情報をもとにAIが作成する参考情報です。内容の正確性・適切性を保証するものではなく、関係性に関する最終的な判断はユーザー自身が行うものとします。Moyaは医療行為、心理療法、法律相談を提供するものではありません。",
    dataDeletionNote:
      "Moyaのアカウント・記録データの削除をご希望の場合は、お問い合わせフォームよりご連絡ください。確認のうえ、合理的な期間内に削除対応いたします。",
  },
};

/** 指定slugのカスタム文面を取得する。無ければundefined（呼び出し側で共通テンプレートにフォールバック） */
export function getLegalContent(slug: string): LegalContentEntry | undefined {
  return legalContent[slug];
}