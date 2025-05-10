import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout"; // ✅ Import the client-side wrapper
import { CheckoutProvider } from "./context/CheckoutContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "kretarferiwala",
  description: "kretarferiwala is an ecommerce site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
      >
        <CheckoutProvider>
          <ClientLayout>{children}</ClientLayout>
        </CheckoutProvider>
      </body>
    </html>
  );
}
