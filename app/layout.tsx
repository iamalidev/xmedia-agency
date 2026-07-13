import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="font-body">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
