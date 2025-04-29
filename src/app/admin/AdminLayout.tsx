'use client';

import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    router.push('/admin'); // রিডাইরেক্ট করে login page দেখাবে
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-orange-500"> Admin</h1>
        
        <nav className="space-y-4">
          <a href="/admin/dashboard" className="block hover:text-orange-500">Dashboard</a>
          <a href="/admin/products" className="block hover:text-orange-500">Products</a>
          <a href="/admin/categories" className="block hover:text-orange-500">Categories</a>
          <a href="/admin/orders" className="block hover:text-orange-500">Orders</a>
         
        </nav>

        <button
          onClick={handleLogout}
          className="mt-8 text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
