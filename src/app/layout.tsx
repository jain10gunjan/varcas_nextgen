import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/homepage/Navbar";
import Footer from "@/components/homepage/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Varcas Nexgen",
  description:
    "Varcas NexGen Digital Marketing is a cutting-edge digital marketing agency dedicated to helping businesses thrive in the online world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} mainBg`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
