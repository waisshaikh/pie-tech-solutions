import type { Metadata } from "next";
import { Archivo_Black, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import "./premium.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsAppWidget } from "@/components/whatsapp-widget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo_Black({
  variable: "--font-archivo",
  weight: "400",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zyberly Solutions | Digital Growth for Modern Brands",
  description: "Digital marketing, web and app development, and creative solutions built for growth.",
  icons: {
    icon: [{ url: "/zyberly-icon.png?v=3", type: "image/png" }],
    shortcut: "/zyberly-icon.png?v=3",
    apple: "/zyberly-icon.png?v=3",
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
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header/><main className="flex-1">{children}</main><Footer/><WhatsAppWidget/></body>
    </html>
  );
}
