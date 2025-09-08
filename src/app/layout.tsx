import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import siteData from "../../content/site.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteData.orgName} | ${siteData.tagline}`,
    template: `%s | ${siteData.orgName}`,
  },
  description: siteData.tagline,
  keywords: [
    "cooperative society",
    "credit society",
    "savings",
    "fixed deposit",
    "recurring deposit",
    "loans",
    "Delhi",
    "financial services",
  ],
  authors: [{ name: siteData.orgName }],
  creator: siteData.orgName,
  metadataBase: new URL(`https://${siteData.domain}`),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: `https://${siteData.domain}`,
    siteName: siteData.orgName,
    title: siteData.orgName,
    description: siteData.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.orgName,
    description: siteData.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
