import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter, spaceGrotesk, jetbrainsMono } from "@/lib/fonts";

import { siteConfig } from "../config/site";
import HomeLayout from "@/layout/HomeLayout";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.getStartedUrl),
  description: siteConfig.description,
  keywords: [
    "AI image editing",
    "Photo enhancement",
    "Image generation",
    "Background removal",
    "Mobile app",
    "AI photography",
    "Image upscaling",
    "Beauty filters",
  ],
  authors: [
    {
      name: "Zed Team",
      url: siteConfig.url,
    },
  ],
  creator: "zedai",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@zedaiapp",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: "dark" }} className="dark">
      <body
        className={`${spaceGrotesk.className} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-background antialiased`}
      >
        <ThemeProvider>
          <HomeLayout>{children}</HomeLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
