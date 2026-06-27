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
    // Web PWA。iOSは申請中のため appStoreUrl はまだ null。
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
    appStoreUrl: "https://apps.apple.com/us/app/%E5%B7%A1%E5%B8%B3/id6779092869",
  },
  {
    slug: "anistory",
    name: "AniStory",
    category: "Entertainment / Anime",
    description: "見たアニメを記録し、感想や視聴履歴を整理するアプリ。",
    status: "公開中",
    websiteUrl: "https://anistory.vercel.app",
    appStoreUrl: "https://apps.apple.com/us/app/anistory-%E3%82%A2%E3%83%8B%E3%83%A1%E4%BA%BA%E7%94%9F%E8%A8%98%E9%8C%B2/id6780205586",
  },
  {
    slug: "silent",
    name: "Silent",
    category: "AI Tools / Privacy",
    description: "履歴を残さず、本音で使えるプライバシー重視のAI。",
    status: "公開中",
    websiteUrl: "https://silent-ai.jp",
    appStoreUrl: null,
  },
  {
    slug: "lily",
    name: "Lily",
    category: "Business Operations / Lily Series",
    description: "店舗運営を支えるLilyシリーズの統合入口。",
    status: "公開中",
    websiteUrl: "https://lily-taupe.vercel.app",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "lily-board",
    name: "Lily Board",
    category: "Business Operations / Lily Series",
    description: "売上・利益・経費など店舗運営の数字を管理するツール。",
    status: "公開中",
    websiteUrl: "https://lily-board.vercel.app",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "lily-shift",
    name: "Lily Shift",
    category: "Business Operations / Lily Series",
    description: "店舗スタッフのシフト管理を効率化するツール。",
    status: "公開中",
    websiteUrl: "https://lily-shift.vercel.app",
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
    websiteUrl: "https://lily-assist.vercel.app",
    appStoreUrl: null,
    group: "lily-series",
    groupLabel: "Lily Series",
  },
  {
    slug: "taishoku-techo",
    name: "退職手帳",
    category: "Life / Web Service",
    description: "退職後の手続き・保険・税金・年金を整理するサポートツール。",
    status: "公開中",
    websiteUrl: "https://taishoku-compass-three.vercel.app",
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
    websiteUrl: "https://pochiwork.vercel.app",
    appStoreUrl: null,
  },
  {
    slug: "chorus",
    name: "Chorus",
    category: "Communication / AI Tools",
    description: "複数の視点や会話を整理し、思考やコミュニケーションを支援するツール。",
    status: "開発中",
    websiteUrl: "https://trychorus.app",
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

/**
 * 表示用にグルーピングした結果の1行。
 * group指定があるプロダクト群は1件のGroupedEntryにまとめられ、
 * group指定がないプロダクトは単独でGroupedEntryになる。
 */
export type GroupedEntry =
  | { type: "single"; product: Product }
  | { type: "group"; groupKey: string; groupLabel: string; products: Product[] };

/**
 * Support Home表示用：同じgroupを持つプロダクトを1つのグループにまとめる。
 * 例：Lily / Lily Board / Lily Shift / Lily Assist → 1件の "Lily Series" グループ
 * グループのメンバーは、渡された list（公開中のみ／開発中のみ等）に
 * 含まれるものだけに絞り込む。そのため、グループの一部だけが公開中の場合、
 * 公開中タブには公開中メンバーだけが表示される。
 */
export function groupProductsForDisplay(list: Product[]): GroupedEntry[] {
  const seenGroups = new Set<string>();
  const entries: GroupedEntry[] = [];

  for (const p of list) {
    if (p.group) {
      if (seenGroups.has(p.group)) continue;
      seenGroups.add(p.group);
      const groupMembers = list.filter((item) => item.group === p.group);
      entries.push({
        type: "group",
        groupKey: p.group,
        groupLabel: p.groupLabel ?? p.group,
        products: groupMembers,
      });
    } else {
      entries.push({ type: "single", product: p });
    }
  }

  return entries;
}

/** 共通の問い合わせ先メールアドレス */
export const SUPPORT_EMAIL = "dexter.company.jp@gmail.com";