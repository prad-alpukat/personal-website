import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const montserrat = localFont({
  src: [
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Praditya Aldi Syahputra - Frontend Developer & Web Developer",
  description:
    "Praditya Aldi Syahputra is a skilled Frontend Developer and Web Developer based in Yogyakarta, Indonesia. Specializing in React, Next.js, TypeScript, and modern web technologies. View my portfolio, projects, and professional experience.",
  keywords: [
    "Praditya Aldi",
    "Praditya Aldi Syahputra",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Yogyakarta Developer",
    "Indonesia Developer",
    "UI/UX Designer",
    "JavaScript Developer",
    "Neuversity Mentor",
    "Fasticket Developer",
    "Krasanvilla Developer",
  ],
  authors: [{ name: "Praditya Aldi Syahputra" }],
  creator: "Praditya Aldi Syahputra",
  publisher: "Praditya Aldi Syahputra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://pradityaaldi.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Praditya Aldi Syahputra - Frontend Developer & Web Developer",
    description:
      "Praditya Aldi Syahputra is a skilled Frontend Developer and Web Developer based in Yogyakarta, Indonesia. Specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://pradityaaldi.com",
    siteName: "Praditya Aldi Syahputra Portfolio",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Praditya Aldi Syahputra - Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praditya Aldi Syahputra - Frontend Developer & Web Developer",
    description:
      "Praditya Aldi Syahputra is a skilled Frontend Developer and Web Developer based in Yogyakarta, Indonesia.",
    creator: "@prad_alpukat", // Replace with your actual Twitter handle
    images: ["/og.png"],
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
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Praditya Aldi Syahputra",
    alternateName: "Praditya Aldi",
    jobTitle: "Frontend Developer",
    description:
      "Frontend Developer and Web Developer specializing in React, Next.js, and TypeScript",
    url: "https://pradityaaldi.com",
    image: "https://pradityaaldi.com/avatar.jpeg",
    sameAs: [
      "https://github.com/prad-alpukat",
      "https://www.linkedin.com/in/praditya-aldi-syahputra",
      "https://www.instagram.com/prad.alpukat",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yogyakarta",
      addressCountry: "Indonesia",
    },
    worksFor: {
      "@type": "Organization",
      name: "Neuversity",
    },
    knowsAbout: [
      "Frontend Development",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "UI/UX Design",
      "Web Development",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <link rel="canonical" href="https://pradityaaldi.com" />
      </head>
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased pb-36`}
      >
        {children}
      </body>
    </html>
  );
}
