import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moneyba.gg | Your Professional Digital Hub",
  description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space. Perfect for creators, professionals, and crypto enthusiasts.",
  keywords: "digital presence, link management, DeFi portfolio, social media hub, professional profile, crypto achievements, NFT showcase, creator platform",
  openGraph: {
    title: "Moneyba.gg | Your Professional Digital Hub",
    description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space.",
    url: "https://moneyba.gg",
    siteName: "Moneyba.gg",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moneyba.gg - Your Professional Digital Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moneyba.gg | Your Professional Digital Hub",
    description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
