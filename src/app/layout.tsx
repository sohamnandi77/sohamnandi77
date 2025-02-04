import { Background } from "@/components/background";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sohamnandi.com"),
  title: "Soham Nandi",
  description: "Portfolio website showcasing my work.",
  openGraph: {
    title: `Soham's Portfolio`,
    description: "Portfolio website showcasing my work.",
    url: "sohamnandi.com",
    siteName: `Soham's Portfolio`,
    locale: "en_US",
    type: "website",
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
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth bg-black"
    >
      <body
        className={cn(
          primary.variable,
          "m-0 min-h-screen min-w-0 overflow-auto p-0 antialiased",
        )}
      >
        <Background />
        <div className="min-h-4 w-full min-w-0"></div>
        <div className="relative z-0 mt-28">{children}</div>
      </body>
    </html>
  );
}
