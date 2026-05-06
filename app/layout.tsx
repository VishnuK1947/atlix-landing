import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlix — Narrative Intelligence for Policymakers",
  description:
    "Atlix tracks how political and cultural narratives cluster, spread, and polarize — in real time, across platforms, filtered by geography. Built for policymakers, NGOs, and institutional comms teams.",
  openGraph: {
    title: "Atlix — Narrative Intelligence for Policymakers",
    description:
      "Real-time narrative intelligence for the people whose job it is to respond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
