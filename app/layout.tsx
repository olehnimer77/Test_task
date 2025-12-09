import type { Metadata } from "next";
import { Roboto, Inter, Poppins, Manrope } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter, poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Test Task Next.js",
  description: "Test Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className}`}
      >
        <Header/>
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
