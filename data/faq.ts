/**
 * ─────────────────────────────────────────────
 * Dexter & Co. / DexTech — Support FAQ Data
 * ─────────────────────────────────────────────
 *
 * 全プロダクト共通のFAQです。/support/faq で表示されます。
 *
 * 【アプリ固有のFAQを追加したい場合】
 * ここではなく data/products.ts の各プロダクトオブジェクトに
 * `faq: [{ question: "...", answer: "..." }]` を追加してください。
 * 個別ページ（/support/[slug]）では、共通FAQの後に
 * そのプロダクト固有のFAQが自動で追加表示されます。
 */

export interface FaqItem {
  question: string;
  answer: string;
}

export const commonFaq: FaqItem[] = [
  {
    question: "使い方が分からない",
    answer:
      "Support Center内で対象プロダクトを選択し、関連リンクやFAQをご確認ください。解決しない場合はお問い合わせフォームからご連絡ください。",
  },
  {
    question: "不具合を見つけた",
    answer:
      "お問い合わせフォームから、対象プロダクト名・発生状況・端末/ブラウザ環境を添えてご連絡ください。",
  },
  {
    question: "要望を送りたい",
    answer:
      "お問い合わせフォームから送信できます。今後の改善の参考にします。",
  },
  {
    question: "データ削除を依頼したい",
    answer:
      "対象プロダクト名と登録メールアドレス等を添えて、お問い合わせフォームからご連絡ください。確認後、対応します。",
  },
  {
    question: "課金について確認したい",
    answer:
      "課金・購入状況に関するお問い合わせは、対象プロダクト名と購入方法を添えてご連絡ください。",
  },
];