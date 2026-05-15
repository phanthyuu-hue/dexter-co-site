import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dexter & Co. | From Problem to Product.",
  description:
    "ビジネスとライフスタイルに潜む本質的な課題を見つけ出し、コンサルティングの知見とテクノロジーの力で、実際に役立つプロダクトへと昇華させます。",
  keywords: ["Dexter & Co.", "DexTech", "コンサルティング", "アプリ開発", "AI", "課題解決"],
  authors: [{ name: "Dexter & Co." }],
  openGraph: {
    title: "Dexter & Co. | From Problem to Product.",
    description:
      "課題を見つけ、価値を形にする。コンサルティングの知見とテクノロジーで、本質的な課題をプロダクトへ。",
    url: "https://dexter-co.vercel.app",
    siteName: "Dexter & Co.",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter & Co. | From Problem to Product.",
    description: "課題を見つけ、価値を形にする。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500&family=Noto+Sans+JP:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
