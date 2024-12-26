import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './shared/header/Header';
import Footer from "./shared/footer/Footer"; // Adjust the path to your Footer component

// Font import from Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

// Metadata
export const metadata: Metadata = {
  title: "Little Rascals Daycare",
  description: "A warm, home-based daycare promoting learning and fun for children aged 6 months to 12 years.",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <Header />
        {/* Main Content */}
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
