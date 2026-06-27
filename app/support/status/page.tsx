"use client";

import { products } from "@/data/products";
import { serviceStatus, STATE_LABEL, type ServiceState } from "@/data/status";
import { SupportNav, SupportFooter, SupportPageHeader } from "../_components";

/** slugに対応するstateを取得。未登録の場合は正常扱い */
function getStateForSlug(slug: string): ServiceState {
  return serviceStatus.find((s) => s.slug === slug)?.state ?? "operational";
}

function getNoteForSlug(slug: string): string | undefined {
  return serviceStatus.find((s) => s.slug === slug)?.note;
}

export default function StatusPage() {
  const allOperational = products.every((p) => getStateForSlug(p.slug) === "operational");

  return (
    <>
      <SupportNav />
      <main>
        <SupportPageHeader
          label="Status"
          title="サービス稼働状況"
          subtitleEn="Service Status"
          lead="各プロダクトの現在の稼働状況です。"
        />
        <section style={{ padding: "5rem 2.5rem 8rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div
              style={{
                padding: "1.5rem 2rem",
                marginBottom: "3rem",
                border: "1px solid rgba(200,164,110,0.25)",
                background: "rgba(30,35,41,0.4)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>{allOperational ? "🟢" : "🟡"}</span>
              <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "var(--offwhite)" }}>
                {allOperational ? "全てのサービスが正常に稼働しています" : "一部のサービスで問題が発生しています"}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {products.map((p) => {
                const state = getStateForSlug(p.slug);
                const note = getNoteForSlug(p.slug);
                return (
                  <div
                    key={p.slug}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1.25rem 0",
                      borderBottom: "1px solid rgba(245,244,240,0.06)",
                      gap: "1rem",
                      flexWrap: "wrap",
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.92rem", color: "var(--offwhite)" }}>
                        {p.name}
                      </p>
                      {note && (
                        <p style={{ fontFamily: "var(--font-noto)", fontSize: "0.75rem", color: "rgba(245,244,240,0.45)", marginTop: "0.25rem" }}>
                          {note}
                        </p>
                      )}
                    </div>
                    <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.82rem", color: "rgba(245,244,240,0.7)", whiteSpace: "nowrap" }}>
                      {STATE_LABEL[state]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <SupportFooter />
    </>
  );
}
