/**
 * ─────────────────────────────────────────────
 * Dexter & Co. / DexTech — Product Data Source
 * ─────────────────────────────────────────────
 *
 * Support Center（/support 以下）が参照する唯一のプロダクトデータです。
 * ページ側に情報を直書きしないでください。
 *
 * 【新しいプロダクトを追加する方法】
 * 下の `products` 配列に1件オブジェクトを追加するだけでOKです。
 * 追加すると、以下のページに自動で反映されます。
 *   - /support              （一覧：公開中 / 開発中に自動振り分け）
 *   - /support/[slug]        （個別ページ：slugを指定するだけで自動生成）
 *   - /support/downloads     （公開中のみ自動表示）
 *
 * 【入力のコツ】
 *   - websiteUrl / appStoreUrl は、まだ無いものは null にしてください。
 *     （null の場合、ボタンは自動で非表示 or 「準備中」表示になります）
 *   - status は型で決まっている4つの値のうちどれかにしてください。
 *   - group は関連プロダクトをまとめたい時だけ指定してください
 *     （例：Lily / Lily Board / Lily Shift / Lily Assist → "lily-series"）
 */

/** 公開状況のラベル（この4種類のみ使用可能） */
export type ProductStatus = "公開中" | "β公開中" | "開発中" | "公開終了";

/** 公開中グループに分類するかどうかを判定するためのstatus一覧 */
export const LIVE_STATUSES: ProductStatus[] = ["公開中", "β公開中"];
export const DEV_STATUSES: ProductStatus[] = ["開発中"];

export interface Product {
  /** URL用の識別子。英数字とハイフンのみ。例: "tabilog" */
  slug: string;
  /** 表示名（正式名称） */
  name: string;
  /** カテゴリ表示（例: "Travel / Personal Tools"） */
  category: string;
  /** 一覧カード・個別ページで使う一言説明 */
  description: string;
  /** 公開状況 */
  status: ProductStatus;
  /** Webサイトのリンク。無い場合は null */
  websiteUrl: string | null;
  /** App Storeのリンク。無い場合は null */
  appStoreUrl: string | null;
  /**
   * 関連プロダクトのグループキー（任意）。
   * 同じgroupを持つプロダクトは、Support Home上で
   * まとめて表示できます。例: "lily-series"
   */
  group?: string;
  /** グループの表示名（任意。groupを指定する場合のみ使用） */
  groupLabel?: string;
  /**
   * このプロダクト固有のFAQ（任意）。
   * 指定しない場合は共通FAQのみが個別ページに表示されます。
   */
  faq?: { question: string; answer: string }[];
}

export const products: Product[] = [
  // ── 公開中・β公開中 ──────────────────────────
  {
    slug: "tabilog",
    name: "TabiLog",
    category: "Travel / Personal Tools",
    description: "旅の支出・記録・思い出をまとめて管理する旅ログアプリ。",
    status: "公開中",
    websiteUrl: "https://tabilog.app",
    appStoreUrl: null,
  },
  {
    slug: "juncho",
    name: "巡帳",
    category: "Travel / iOS App",
    description: "神社・城・温泉・名物を巡る旅の記録アプリ。",
    status: "公開中",
    websiteUrl: "https://juncho.vercel.app",
    appStoreUrl: null,
  },
  {
    slug: "anistory",
    name: "AniStory",
    category: "Entertainment / Anime",
    description: "見たアニメを記録し、感想や視聴履歴を整理するアプリ。",
    status: "β公開中",
    websiteUrl: null,
    appStoreUrl: null,
  },
  {
    slug: "silent",
    name: "Silent",
    category: "AI Tools / Privacy",
    description: "履歴を残さず、本音で使えるプライバシー重視のAI。",
    status: "公開中",
    websiteUrl: "https://www.silent-ai.jp",
    appStoreUrl: null,
  },
  {
    slug: "lily",
    name: "Lily",
    category: "Business Operations / Lily Series",
    description: "店舗運営を支えるLilyシリーズの統合入口。",
    status: "β公開中",
    websiteUrl: "https://lily-os.vercel.app/",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "lily-board",
    name: "Lily Board",
    category: "Business Operations / Lily Series",
    description: "売上・利益・経費など店舗運営の数字を管理するツール。",
    status: "β公開中",
    websiteUrl: "https://lily-os.vercel.app/",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "lily-shift",
    name: "Lily Shift",
    category: "Business Operations / Lily Series",
    description: "店舗スタッフのシフト管理を効率化するツール。",
    status: "β公開中",
    websiteUrl: "https://lily-os.vercel.app/",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "lily-assist",
    name: "Lily Assist",
    category: "Business Operations / Lily Series",
    description: "文章作成や返信補助など、店舗業務をAIで支援するツール。",
    status: "β公開中",
    websiteUrl: "https://lily-os.vercel.app/",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "taishoku-techo",
    name: "退職手帳",
    category: "Life / Web Service",
    description: "退職後の手続き・保険・税金・年金を整理するサポートツール。",
    status: "β公開中",
    websiteUrl: null,
    appStoreUrl: null,
  },

  // ── 開発中 ──────────────────────────────────
  {
    slug: "builddeck",
    name: "BuildDeck",
    category: "Developer Tools",
    description: "Vercelのデプロイやプロジェクト状況をスマホから確認する開発管理ツール。",
    status: "開発中",
    websiteUrl: "https://builddeck-mu.vercel.app",
    appStoreUrl: null,
  },
  {
    slug: "pochiwork",
    name: "PochiWork",
    category: "Productivity / Business Tools",
    description: "小さな業務や作業を整理し、日々の仕事を軽くするためのツール。",
    status: "開発中",
    websiteUrl: null,
    appStoreUrl: null,
  },
  {
    slug: "chorus",
    name: "Chorus",
    category: "Communication / AI Tools",
    description: "複数の視点や会話を整理し、思考やコミュニケーションを支援するツール。",
    status: "開発中",
    websiteUrl: null,
    appStoreUrl: null,
  },
];

/** slugからプロダクトを1件取得（/support/[slug] 用） */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** 公開中・β公開中のプロダクトのみ取得 */
export function getLiveProducts(): Product[] {
  return products.filter((p) => LIVE_STATUSES.includes(p.status));
}

/** 開発中のプロダクトのみ取得 */
export function getDevProducts(): Product[] {
  return products.filter((p) => DEV_STATUSES.includes(p.status));
}

/** 全slugを取得（generateStaticParams用） */
export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

/** 共通の問い合わせ先メールアドレス */
export const SUPPORT_EMAIL = "dexter.company.jp@gmail.com";
