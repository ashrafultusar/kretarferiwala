'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // added X icon
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Mobile topbar */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-3 shadow-md">
        <Link href={'/admin'} className="text-xl font-bold text-orange-500">Admin</Link>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? (
            <X className="w-6 h-6 text-gray-700 cursor-pointer" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 cursor-pointer" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          showSidebar ? 'block' : 'hidden'
        } md:block w-full md:w-64 bg-white shadow-md p-6 space-y-6 absolute md:relative z-20 md:z-auto`}
      >
        <div className="flex justify-between items-center">
        <Link href={'/admin'} className="text-xl font-bold text-orange-500">Admin Home</Link>
          {/* Close button for mobile */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setShowSidebar(false)}
          >
            <X className="w-6 h-6 cursor-pointer" />
          </button>
        </div>

        <nav className="space-y-4">
          
          <a href="/admin/orders" className="block hover:text-orange-500">Orders</a>
          <a href="/admin/products" className="block hover:text-orange-500">Product Upload</a>
          <a href="/admin/categories" className="block hover:text-orange-500">Categories</a>
          
        </nav>

        <button
          onClick={handleLogout}
          className="mt-2 py-1 rounded-sm text-sm text-white  cursor-pointer w-full bg-orange-400 hover:bg-orange-500 hover:transition"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 mt-16 md:mt-0">{children}</main>
    </div>
  );
}
