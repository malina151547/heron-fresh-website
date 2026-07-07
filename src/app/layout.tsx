import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heron Fresh | Redefining Premium Fresh Export",
  description: "Heron Fresh is a premium B2B agricultural exporter, bridging pristine Asian orchards with global premium tables via smart cold-chain technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F4F7F2] text-[#0B2014] selection:bg-[#74B72E] selection:text-[#F4F7F2]">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
