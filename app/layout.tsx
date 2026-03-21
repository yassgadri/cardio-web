import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { contactInfo } from "@/content/navigation";
import {
  SITE_ADDRESS,
  SITE_CITY,
  SITE_COUNTRY,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_PHONE,
  SITE_POSTAL_CODE,
  SITE_REGION,
  SITE_URL,
} from "@/lib/site";
import { absoluteUrl, buildWebPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  applicationName: SITE_NAME,
  description: SITE_DESCRIPTION,
  referrer: "origin-when-cross-origin",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
    images: [
      {
        url: absoluteUrl(SITE_IMAGE),
        width: 1600,
        height: 900,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [absoluteUrl(SITE_IMAGE)],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/icon-192.png" }],
  },
};

const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${SITE_URL}/#medical-clinic`,
      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      telephone: SITE_PHONE,
      email: contactInfo.email,
      medicalSpecialty: ["Cardiology", "InterventionalCardiology"],
      areaServed: [SITE_CITY, SITE_REGION],
      image: absoluteUrl(SITE_IMAGE),
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE_ADDRESS,
        addressLocality: SITE_CITY,
        postalCode: SITE_POSTAL_CODE,
        addressRegion: SITE_REGION,
        addressCountry: SITE_COUNTRY,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: SITE_PHONE,
          email: contactInfo.email,
          areaServed: "RE",
          availableLanguage: ["fr"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-FR",
      description: SITE_DESCRIPTION,
    },
    buildWebPageJsonLd({
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      path: "/",
    }),
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalClinicJsonLd) }}
        />
      </body>
    </html>
  );
}
