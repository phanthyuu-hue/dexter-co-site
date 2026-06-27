/**
 * ─────────────────────────────────────────────
 * Dexter & Co. / DexTech — Service Status Data
 * ─────────────────────────────────────────────
 *
 * /support/status で表示する稼働状況です。
 * products.ts とは意図的に分離しています
 * （稼働状況は「公開状況」とは別の軸の情報のため）。
 *
 * 【更新方法】
 * 障害・メンテナンス時は該当プロダクトの state を変更してください。
 *   "operational"  → 🟢 正常
 *   "degraded"     → 🟡 一部不具合
 *   "down"         → 🔴 停止中
 *
 * note は任意です（メンテナンス予定の告知などに使用）。
 */

export type ServiceState = "operational" | "degraded" | "down";

export interface ServiceStatusItem {
  /** data/products.ts の slug と一致させてください */
  slug: string;
  state: ServiceState;
  note?: string;
}

export const STATE_LABEL: Record<ServiceState, string> = {
  operational: "🟢 正常",
  degraded: "🟡 一部不具合",
  down: "🔴 停止中",
};

/**
 * 初期状態として、全プロダクトを正常稼働として登録しています。
 * data/products.ts に新しいプロダクトを追加した際は、
 * 任意でこちらにも1行追加してください（無くても /support/status は
 * 自動で「未登録分」を正常扱いで表示します）。
 */
export const serviceStatus: ServiceStatusItem[] = [
  { slug: "tabilog", state: "operational" },
  { slug: "juncho", state: "operational" },
  { slug: "anistory", state: "operational" },
  { slug: "silent", state: "operational" },
  { slug: "lily", state: "operational" },
  { slug: "lily-board", state: "operational" },
  { slug: "lily-shift", state: "operational" },
  { slug: "lily-assist", state: "operational" },
  { slug: "taishoku-techo", state: "operational" },
  { slug: "builddeck", state: "operational" },
  { slug: "pochiwork", state: "operational" },
  { slug: "chorus", state: "operational" },
];
