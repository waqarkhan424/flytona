import { Nunito_Sans } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-sans",
  fallback: ["Nunito Sans", "ui-sans-serif"],
});

export const metadata = {
  title: "Flytona",
  description: "Flight booking UI built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunitoSans.className}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
