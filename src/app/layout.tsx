import { Background } from "@/components/background";
import { cn } from "@/lib/utils";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { WebVitals } from "@/components/web-vitals";
import { SITE } from "@/config";
import { SOCIALS } from "@/constants";
import Head from "next/head";
import Script from "next/script";
import "./globals.css";
import { METADATA } from "./metadata";

const primary = Inter({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = METADATA;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: SITE.author,
  url: SITE.origin,
  description: SITE.description,
  image: SITE.image,
  mainEntity: {
    "@type": "Person",
    name: SITE.author,
    alternateName: SITE.name,
    description: SITE.description,
    image: SITE.image,
    sameAs: SOCIALS.map(({ href }) => href),
  },
  publisher: {
    "@type": "Organization",
    name: SITE.author,
  },
  genre: "Portfolio",
  about: {
    "@type": "CreativeWork",
    name: `Soham Nandi's Portfolio`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === "production";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="dark scroll-smooth bg-black"
    >
      <Head>
        {isProduction && <GoogleTagManager gtmId="GTM-K3BH2KKR" />}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <body
        className={cn(
          primary.variable,
          "m-0 min-h-screen min-w-0 overflow-auto p-0 antialiased",
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3BH2KKR"
            height="0"
            width="0"
            className="invisible hidden"
            title="Google Tag Manager"
          ></iframe>
        </noscript>
        <WebVitals />
        <Background />
        <div className="min-h-4 w-full min-w-0"></div>
        <div className="relative z-0 mt-28">{children}</div>
      </body>
      {isProduction && (
        <>
          <SpeedInsights debug={false} />
          <Analytics debug={false} />
          <GoogleAnalytics gaId="G-C4QRFW9V3P" />
          <Script id="ms_clarity" strategy="lazyOnload">
            {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "qbe0vb3jqn");`}
          </Script>
        </>
      )}
    </html>
  );
}
