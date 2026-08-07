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
  openGraph: {
    title: "Accredian Enterprise - Next-Gen Expertise For Your Enterprise",
    description: "Cultivate high-performance teams through expert learning",
    type: "website",
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
