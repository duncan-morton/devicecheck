import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";
import JsonLdScript from "@/components/JsonLdScript";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/seo/jsonLd";
import { Analytics } from "@vercel/analytics/next";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import AppChrome from "@/components/AppChrome";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = genMeta({
  title: "DeviceCheck.io - Free Online Device Testing Tools",
  description: "Test your webcam, microphone, keyboard, screen, and more with our free online device testing tools. Instant browser-based diagnostics for Zoom, Teams, and Google Meet.",
  path: "/",
  keywords: [
    "online webcam test",
    "online microphone test",
    "online mic test",
    "online keyboard test",
    "dead pixel test",
    "screen test",
    "device check",
    "meeting check",
    "audio test online",
    "camera test",
    "hardware test",
    "device diagnostics"
  ]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = generateWebSiteSchema();
  const organizationSchema = generateOrganizationSchema();
  const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === '1';

  return (
    <html lang="en">
      <head>
        <JsonLdScript data={websiteSchema} />
        <JsonLdScript data={organizationSchema} />
        {adsEnabled && (
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1784695246771462"
            data-ad-client="ca-pub-1784695246771462"
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="fixed top-4 right-4 z-50">
          <LocaleSwitcher />
        </div>
        <AppChrome>{children}</AppChrome>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
