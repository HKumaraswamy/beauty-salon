import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Super Beauty | Beauty Services Near You",
  description:
    "Find beauty salons, parlours, barbers, bridal makeup artists and home beauty services near you.",
  keywords: [
    "Super Beauty",
    "beauty salon",
    "beauty parlour",
    "salon near me",
    "bridal makeup",
    "hair salon",
    "beauty services",
  ],
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