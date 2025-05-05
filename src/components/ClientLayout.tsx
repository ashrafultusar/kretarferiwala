'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <>
      {!isAdmin && <Navbar />}
      <main className="flex-1">
        {children}
        <ToastContainer />
      </main>
      {!isAdmin && (
        <Link
          href="https://wa.me/8801571419493"
          target="_blank"
          className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 animate-wave"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </Link>
      )}
      {!isAdmin && <Footer />}
    </>
  );
}
