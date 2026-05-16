import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto",
  display: "swap",
});

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
    url: "https://dexter-co-site.vercel.app",
    siteName: "Dexter & Co.",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dexter & Co. | From Problem to Product.",
    description: "課題を見つけ、価値を形にする。",
    images: ["/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${inter.variable} ${noto.variable}`}>
      <body>{children}</body>
    </html>
  );
}