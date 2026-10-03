import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://super-beauty-salon.vercel.app"),

  title: "Super Beauty Salon | Beauty Services Near You",

  description:
    "Super Beauty Salon helps you find salons, beauty parlours, barbers, bridal makeup artists and home beauty services near you.",

  keywords: [
    "Super Beauty Salon",
    "Super Beauty",
    "beauty salon near me",
    "beauty parlour",
    "hair salon",
    "barber",
    "bridal makeup",
    "home beauty services",
  ],

  verification: {
    google: "yc5eFWaprzicScqxwhCWMrKDqKEtmPuXXhIOQg8s0Tw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}