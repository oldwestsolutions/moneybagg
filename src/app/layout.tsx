import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "moneyba.gg | Your Professional Digital Hub",
  description: "Transform your digital presence into a powerful, unified hub. Connect your social media, DeFi achievements, and professional profiles in one stunning, customizable space. Perfect for creators, professionals, and crypto enthusiasts.",
  keywords: "digital presence, link management, DeFi portfolio, social media hub, professional profile, crypto achievements, NFT showcase, creator platform",
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MoneyBagg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
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
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MoneyBagg" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <Script
          id="register-sw"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registration successful');
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
