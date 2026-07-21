import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { site } from "@/data/resume";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const description =
  "CS + Economics at Illinois, Class of 2028. I build software around connections — fraud graphs at Synchrony, graph RAG systems, and apps shipped end-to-end.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Brian Cochran — Software Engineer",
  description,
  openGraph: {
    title: "Brian Cochran — Software Engineer",
    description,
    url: site.url,
    siteName: "Brian Cochran",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brian Cochran — Software Engineer",
    description,
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
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
