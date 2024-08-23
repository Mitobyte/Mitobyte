import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/common/styles/globals.css";
import { MainLayout } from "@/common/layouts/MainLayout";

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
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
