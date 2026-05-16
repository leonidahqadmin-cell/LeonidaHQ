import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LeonidaHQ — Your Guide to GTA 6's Leonida",
    template: "%s — LeonidaHQ",
  },
  description:
    "Interactive map, news, leaks, and lore for Grand Theft Auto VI. Filed by the Leonida State Bureau of Civilian Affairs.",
  metadataBase: new URL("https://leonidahq.gg"),
  openGraph: {
    title: "LeonidaHQ — Your Guide to GTA 6's Leonida",
    description:
      "Interactive map, news, leaks, and lore for Grand Theft Auto VI.",
    url: "https://leonidahq.gg",
    siteName: "LeonidaHQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeonidaHQ",
    description: "Your guide to GTA 6's Leonida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
