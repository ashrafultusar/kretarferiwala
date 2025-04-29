'use client';

import { useEffect, useState } from 'react';
import AdminLayout from './AdminLayout';

export default function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true); // loading state

  const adminPassword = '123456';

  useEffect(() => {
    const isAuth = localStorage.getItem('admin-auth');
    if (isAuth === 'true') {
      setAuthorized(true);
    }
    setLoading(false); // auth check done
  }, []);

  const handleSubmit = () => {
    if (password === adminPassword) {
      setAuthorized(true);
      localStorage.setItem('admin-auth', 'true');
    } else {
      alert('Wrong Password! Try again.');
    }
  };

  if (loading) {
    // Optional: show a spinner or blank screen while checking auth
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!authorized) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl mb-4 font-bold">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 rounded-md mb-4"
        />
        <button
          onClick={handleSubmit}
          className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
        >
          Enter
        </button>
      </div>
    );
  }

  return <AdminLayout>{children}</AdminLayout>;
}
