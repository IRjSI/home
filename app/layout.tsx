import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const quicksand = Quicksand({
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "home",
  description: "A blog site for my thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className} antialiased container mx-auto max-w-4xl py-18 px-8 grid md:grid-cols-[3fr_1fr] min-h-screen`}
      >
        {children}
        <Sidebar />
      </body>
    </html>
  );
}
