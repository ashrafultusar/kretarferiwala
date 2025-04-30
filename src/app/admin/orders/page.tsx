"use client";
import React from "react";

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    date: "2025-04-30",
    payment: "Paid",
    status: "Shipped",
    total: "$99.99",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    date: "2025-04-29",
    payment: "Pending",
    status: "Processing",
    total: "$149.50",
  },
  {
    id: "ORD-003",
    customer: "Robert Lee",
    date: "2025-04-28",
    payment: "Paid",
    status: "Delivered",
    total: "$75.25",
  },
];

const Page = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Recent Orders</h2>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-200 text-gray-700 uppercase">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Payment</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">{order.payment}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
