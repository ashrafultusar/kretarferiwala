"use client";

import { useState } from 'react';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const adminPassword = "secret123"; // 🔥 Ei password nije set koro

  const handleSubmit = () => {
    if (password === adminPassword) {
      setAuthorized(true);
    } else {
      alert("Wrong Password! Try again.");
    }
  };

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
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          Enter
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome Admin</h1>
      <p className="text-gray-600">You are now logged into the admin dashboard.</p>
    </div>
  );
}
