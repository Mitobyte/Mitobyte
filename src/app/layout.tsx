import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LayoutMain } from "@/common/layouts/LayoutMain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mitobyte",
  description: "Build cool shit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutMain>
         {children}
        </LayoutMain>
      </body>
    </html>
  );
}
