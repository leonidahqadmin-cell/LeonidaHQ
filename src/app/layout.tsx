import type { Metadata } from "next";
import { Inter, Orbitron, Pacifico } from "next/font/google";
import "./globals.css";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
});

const script = Pacifico({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "LeonidaHQ — GTA 6 News. All Day. Every Day.",
    template: "%s — LeonidaHQ",
  },
  description:
    "The #1 source for GTA 6 news, leaks, and updates. Fast. Reliable. Connected to Vice City.",
  metadataBase: new URL("https://leonidahq.gg"),
  icons: { icon: "/img/favicon-source.png" },
  openGraph: {
    title: "LeonidaHQ — GTA 6 News. All Day. Every Day.",
    description:
      "The #1 source for GTA 6 news, leaks, and updates. Fast. Reliable. Connected to Vice City.",
    url: "https://leonidahq.gg",
    siteName: "LeonidaHQ",
    type: "website",
    images: ["/img/banner-wide.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "LeonidaHQ",
    description: "GTA 6 News. All Day. Every Day.",
    creator: "@LeonidaHQgg",
    images: ["/img/banner-wide.png"],
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
      className={`dark ${sans.variable} ${orbitron.variable} ${script.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
