import type { Metadata, Viewport } from "next";
import { Inter, Pacifico } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { PreorderBanner } from "@/components/preorder-banner";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const script = Pacifico({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "LeonidaHQ - GTA 6 News, Map Intel & Trailer Clues",
    template: "%s - LeonidaHQ",
  },
  description:
    "Track GTA 6 Leonida map evidence, trailer clues, character theories, and Rockstar news from @viraltbf. Fan intelligence hub.",
  metadataBase: new URL("https://leonidahq.gg"),
  verification: {
    other: { "msvalidate.01": "56E6FFAE9A9C1F3276B69C9127E6659E" },
  },
  alternates: {
    types: { "application/rss+xml": "https://leonidahq.gg/rss.xml" },
  },
  openGraph: {
    title: "LeonidaHQ - GTA 6 News, Map Intel, and Trailer Clues",
    description:
      "Track GTA 6 Leonida map evidence, trailer clues, character theories, and Rockstar news from @viraltbf. Fan intelligence hub.",
    url: "https://leonidahq.gg",
    siteName: "LeonidaHQ",
    type: "website",
    images: ["/img/leonidahq-social-card.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeonidaHQ - GTA 6 News. Leonida Map. No-Fluff Intel.",
    description: "Track trailer clues, map evidence, character theories, and Rockstar moves from @viraltbf.",
    site: "@viraltbf",
    creator: "@viraltbf",
    images: ["/img/leonidahq-social-card.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08060f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${sans.variable} ${script.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <PreorderBanner />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

