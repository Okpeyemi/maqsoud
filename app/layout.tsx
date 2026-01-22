import type { Metadata } from "next";
import { Hanken_Grotesk, Montserrat } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maqsoud | AI Developer & Full Stack Engineer",
  description: "Portfolio of Maqsoud, a Paris-based AI Developer and Full Stack Engineer specializing in generative AI, modern web applications, and scalable architectures.",
  keywords: ["AI Developer", "Full Stack Engineer", "Next.js", "React", "Python", "Paris", "Portfolio", "Web Development", "Generative AI"],
  openGraph: {
    title: "Maqsoud | AI Developer & Full Stack Engineer",
    description: "Building the future of digital experiences with AI and modern tech.",
    url: "https://maqsoud.dev",
    siteName: "Maqsoud Portfolio",
    images: [
      {
        url: "/og-image.png", // Assuming we might add one later, or it falls back
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
    title: "Maqsoud | AI Developer",
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
        {children}
      </body>
    </html>
  );
}
