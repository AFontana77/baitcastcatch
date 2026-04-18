import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://www.baitcastcatch.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "FishLog — Search 375+ fish species with size limits and regulations",
    template: "%s | FishLog",
  },
  description: "FishLog has 375+ fish species from FishBase and NOAA with size limits, habitat, and state regulation links. Log your catches, track your best fish, and build a record book worth keeping.",
  keywords: ["fishing log app", "catch log", "fish species database", "fishing journal", "personal fishing record"],
  authors: [{ name: "Anvil Road LLC" }],
  creator: "Anvil Road LLC",
  publisher: "Anvil Road LLC",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "FishLog",
    title: "FishLog — Search 375+ fish species with size limits and regulations",
    description: "FishLog has 375+ fish species from FishBase and NOAA with size limits, habitat, and state regulation links. Log your catches, track your best fish, and build a record book worth keeping.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "FishLog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FishLog — Search 375+ fish species with size limits and regulations",
    description: "FishLog has 375+ fish species from FishBase and NOAA with size limits, habitat, and state regulation links. Log your catches, track your best fish, and build a record book worth keeping.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: SITE_URL },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/icons/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1D4ED8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
