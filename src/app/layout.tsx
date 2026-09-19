import type { Metadata } from "next";
import "./globals.css";
import { LayoutMain } from "@/common/layouts/LayoutMain";
import localFont from "next/font/local";

// Satoshi Variable carries a 300-900 weight axis in one file per style, so
// two woff2 files cover everything. Declaring the range lets 700-weight
// headings use the real bold instead of a synthesized one.
const satoshi = localFont({
  display: "swap",
  weight: "300 900",
  src: [
    {
      path: "./fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: "Mitobyte",
  description: "Build it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <LayoutMain>{children}</LayoutMain>
      </body>
    </html>
  );
}
