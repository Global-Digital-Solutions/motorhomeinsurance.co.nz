import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MotorHomeInsurance.co.nz | Motorhome Insurance NZ | Compare & Save",
  description: "Compare motorhome insurance in New Zealand. Get impartial quotes from leading NZ insurers. Comprehensive cover, agreed value, and more. Expert advice.",
  keywords: [
    "motorhome insurance NZ",
    "campervan insurance New Zealand",
    "motorhome insurance",
    "compare motorhome insurance",
    "motorhome insurance cost NZ",
    "campervan insurance",
    "motorhome comprehensive cover",
    "agreed value motorhome",
    "rental motorhome insurance",
    "motorhome insurance Auckland",
    "motorhome insurance Christchurch",
    "motorhome insurance Wellington",
    "cheap motorhome insurance NZ",
    "best motorhome insurance NZ",
    "self-contained motorhome insurance",
    "imported motorhome insurance NZ",
    "luxury motorhome insurance",
    "NZ motorhome cover",
    "motorhome third party insurance",
    "motorhome contents cover",
  ],
  authors: [{ name: "MotorHomeInsurance.co.nz" }],
  alternates: { canonical: "https://motorhomeinsurance.co.nz" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://motorhomeinsurance.co.nz",
    title: "MotorHomeInsurance.co.nz | Motorhome Insurance NZ | Compare & Save",
    description: "Compare motorhome insurance from NZ's top providers. Find the best coverage, pricing, and customer service for your motorhome.",
    siteName: "MotorHomeInsurance.co.nz",
    images: [{ url: 'https://motorhomeinsurance.co.nz/android-chrome-512x512.png', width: 512, height: 512, alt: 'MotorHomeInsurance.co.nz' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotorHomeInsurance.co.nz | Motorhome Insurance NZ | Compare & Save",
    description: "Compare motorhome insurance providers in New Zealand. Expert quotes within 24 hours.",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://motorhomeinsurance.co.nz/#organization",
      name: "MotorHomeInsurance.co.nz",
      url: "https://motorhomeinsurance.co.nz",
      logo: "https://motorhomeinsurance.co.nz/android-chrome-512x512.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+6498859549",
        contactType: "customer service",
        areaServed: "NZ",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://motorhomeinsurance.co.nz/#website",
      url: "https://motorhomeinsurance.co.nz",
      name: "MotorHomeInsurance.co.nz",
      description: "Motorhome insurance comparison and broker referral service",
      publisher: { "@id": "https://motorhomeinsurance.co.nz/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Compare motorhome insurance in New Zealand. Get impartial quotes from leading NZ insurers. Comprehensive cover, agreed value, and more. Expert advice."
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6745344450942342"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <NavBar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
