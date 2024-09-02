import type { Metadata } from "next";
import "./globals.css";
import { LayoutMain } from "@/common/layouts/LayoutMain";
import localFont from "next/font/local";

const satoshi = localFont({
  display: 'swap',
  src: [
    {
      path: './fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Variable.woff',
      style: 'italic',
    },
    {
      path: './fonts/Satoshi-Variable.ttf',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: "Mitobyte",
  description: "Build cool shit.",
  // TODO: remove this when we go live
  robots: "noindex,"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <LayoutMain>
         {children}
        </LayoutMain>
      </body>
    </html>
  );
}
