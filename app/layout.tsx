import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
  description: "Cultivate high-performance teams through expert learning. Specialized corporate training programs in Product Innovation, Gen-AI, Leadership, Tech & Data, and more.",
  keywords: "corporate training, enterprise learning, professional development, upskilling, Gen-AI training, leadership programs",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
    description: "Cultivate high-performance teams through expert learning",
    type: "website",
    siteName: "Accredian Enterprise",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Accredian Enterprise",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
    description: "Cultivate high-performance teams through expert learning",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
