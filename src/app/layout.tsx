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
  title: "Praditya Aldi - Personal Website",
  description:
    "Personal blog and portfolio of Praditya Aldi Syahputra. Explore insights on web development, cybersecurity, and personal learning documentation. Connect for collaborations or discussions.",
  icons: {
    icon: "favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Analytics />
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased pb-36`}
      >
        {children}
      </body>
    </html>
  );
}
