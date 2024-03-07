import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrightBlueSky",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  picture: React.ReactNode;

}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&family=Sofia&display=swap" rel="stylesheet" />

      </head>
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className={'min-h-[60rem]  bg-white'}>{children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
