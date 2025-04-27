export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-orange-400  text-white p-6">
          <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
          <ul className="space-y-4">
            <li className="hover:text-gray-300 cursor-pointer">Dashboard</li>
            <li className="hover:text-gray-300 cursor-pointer">Products</li>
            <li className="hover:text-gray-300 cursor-pointer">Orders</li>
            <li className="hover:text-gray-300 cursor-pointer">Users</li>
          </ul>
        </aside>
  
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {children}
        </main>
      </div>
    );
  }
  