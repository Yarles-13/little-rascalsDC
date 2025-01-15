import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

import Header from "./shared/header/Header";
import Footer from "./shared/footer/Footer";


// Font import from Google Fonts
const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Little Rascals Daycare",
  description:
    "A warm, home-based daycare promoting learning and fun for children aged 6 months to 12 years.",
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
        className={`${baloo.variable} antialiased bg-gray-50 text-gray-900`}
      >
       
        <Header />
        {/* Main Content */}
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

