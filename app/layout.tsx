import type { Metadata } from "next";
import { Hanken_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
// import Script from "next/script";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maqsoud | Agentic Engineer & Full Stack Engineer",
  description: "Portfolio of Maqsoud, a Paris-based Agentic Engineer and Full Stack Engineer specializing in generative AI, modern web applications, and scalable architectures.",
  keywords: ["Agentic Engineer", "Full Stack Engineer", "Next.js", "React", "Python", "Paris", "Portfolio", "Web Development", "Generative AI"],
  openGraph: {
    title: "Maqsoud | Agentic Engineer & Full Stack Engineer",
    description: "Building the future of digital experiences with AI and modern tech.",
    url: "https://maqsoud.tech",
    siteName: "Maqsoud Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Maqsoud Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maqsoud | Agentic Engineer",
    description: "Building the future of digital experiences with AI and modern tech.",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        {children}
        {/* <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="lazyOnload"
          type="text/javascript"
        /> */}
      </body>
    </html>
  );
}
