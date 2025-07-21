import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EverClean Pools - Crystal Clear Pool Cleaning & Maintenance",
  description: "Professional pool cleaning, maintenance, and repair services. Get crystal-clear pools without the hassle. Free quotes available!",
  keywords: "pool cleaning, pool maintenance, pool repair, chemical balancing, pool service",
  openGraph: {
    title: "EverClean Pools - Professional Pool Services",
    description: "Crystal-clear pools without the hassle. Professional pool cleaning & maintenance services.",
    type: "website",
    locale: "en_US",
    url: "https://evercleanpools.com",
    siteName: "EverClean Pools",
    images: [
      {
        url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Crystal clear swimming pool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EverClean Pools - Professional Pool Services",
    description: "Crystal-clear pools without the hassle. Professional pool cleaning & maintenance services.",
    images: ["https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1200"],
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EverClean Pools",
    "description": "Professional pool cleaning, maintenance, and repair services",
    "url": "https://evercleanpools.com",
    "telephone": "+1234567890",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Metro Area",
      "addressRegion": "State",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7128,
      "longitude": -74.0060
    },
    "image": "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=1200",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://facebook.com/evercleanpools",
      "https://instagram.com/evercleanpools",
      "https://twitter.com/evercleanpools"
    ]
  };

  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <head>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-open-sans antialiased">
        <div className="min-h-screen flex flex-col pt-[73px]">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
