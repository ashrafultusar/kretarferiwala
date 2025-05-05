"use client";
import React, { useEffect, useState } from "react";

const statusTabs = ["Active", "Shipped", "Delivered", "Cancelled"];
const statusOptions = ["Processing", "Shipped", "Delivered", "Cancelled"];
const paymentOptions = ["Paid", "Pending"];

type Order = {
  id: string;
  customer: string;
  date: string;
  payment: string;
  status: string;
  total: string;
};

const Page = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState("Active");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("/api/orders");
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };
    fetchOrders();
  }, []);
console.log(orders);

  const handleStatusChange = (id: string, newStatus: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    // Optionally send update to DB here
  };

  const handlePaymentChange = (id: string, newPayment: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, payment: newPayment } : order
      )
    );
    // Optionally send update to DB here
  };

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "Active") {
      return order.status === "Processing" || order.status === "Shipped";
    }
    return order.status === activeTab;
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Total Orders: {orders?.length}</h2>

      {/* Tabs */}
      <div className="mb-4 flex flex-wrap gap-2">
        {statusTabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 cursor-pointer ${
              activeTab === tab ? "bg-[#0f766e] text-white" : "bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Order Table */}
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
            {filteredOrders.map((order) => (
              <tr key={order?.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.customer}</td>
                <td className="px-6 py-4">{order.date}</td>
                <td className="px-6 py-4">
                  <select
                    value={order.payment}
                    onChange={(e) => handlePaymentChange(order.id, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      order.payment === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {paymentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                      order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {statusOptions.map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">{order.total}</td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:underline">View</button>
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
