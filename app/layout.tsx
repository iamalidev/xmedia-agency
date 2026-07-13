import type { Metadata } from "next";
import Head from "next/head";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",

  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "XMedia Agency — Raqamli marketing agentligi",
  description:
    "Ijtimoiy tarmoqlar, kontent strategiyasi va reklama kampaniyalari orqali brendlarni o'stiramiz. 120+ muvaffaqiyatli loyiha.",
  keywords: [
    "marketing agentligi",
    "ijtimoiy tarmoqlar",
    "digital marketing",
    "Instagram",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="uz"
      className={`${bricolage.variable} ${inter.variable}`}
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Inter:opsz,wght@12..96,200..800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
