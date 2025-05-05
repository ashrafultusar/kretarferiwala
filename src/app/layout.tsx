// 'use client'; 
// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import { ToastContainer } from "react-toastify";
// import Link from "next/link";
// import { FaWhatsapp } from "react-icons/fa";
// import { usePathname } from "next/navigation";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "kretarferiwala",
//   description: "kretarferiwala in an ecommerce site ",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const isAdminPath = pathname.startsWith('/admin');

//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col relative`}
//       >
//         {/* Navbar */}
//         {!isAdminPath&&<Navbar />}

//         {/* Main Content */}
//         <main className="flex-1">
//           {children}
//           <ToastContainer />
//         </main>

//         {/* WhatsApp Icon with wave animation on all pages */}
//         {!isAdminPath &&<Link
//           href="https://wa.me/8801571419493" // Replace with your actual WhatsApp number in international format
//           target="_blank"
//           className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-wave"
//           aria-label="Chat with us on WhatsApp"
//         >
//           <FaWhatsapp className="w-6 h-6" />
//         </Link>}

//         {/* Footer */}
//        {!isAdminPath&& <Footer />}
//       </body>
//     </html>
//   );
// }



import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "@/components/ClientLayout"; // ✅ Import the client-side wrapper

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
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
