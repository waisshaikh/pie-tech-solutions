import type { Metadata } from "next";
import { Archivo_Black, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import "./premium.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

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
    icon: [{ url: "/zyberly-logo.png", type: "image/jpeg" }],
    shortcut: "/zyberly-logo.png",
    apple: "/zyberly-logo.png",
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
      className={`${inter.variable} ${archivo.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><Header/><main className="flex-1">{children}</main><Footer/></body>
    </html>
  );
}
