import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Premier Blockchain Solutions",
  description:
    "Cutting-Edge Blockchain Technology.Secure. Scalable. Revolutionary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen flex-col`}>
        <Header />
        <div className="flex-1 bg-[#020000]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
