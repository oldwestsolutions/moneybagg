import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moneyba.gg | Your Professional Digital Hub",
  description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space. Perfect for creators, professionals, and crypto enthusiasts.",
  keywords: "digital presence, link management, DeFi portfolio, social media hub, professional profile, crypto achievements, NFT showcase, creator platform",
  openGraph: {
    title: "moneyba.gg | Your Professional Digital Hub",
    description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space.",
    url: "https://moneyba.gg",
    siteName: "moneyba.gg",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "moneyba.gg - Your Professional Digital Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "moneyba.gg | Your Professional Digital Hub",
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
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
