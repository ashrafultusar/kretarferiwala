"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const OrderConfirmation = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const subTotal = 1999 * quantity;
  const deliveryCharge = 70;
  const totalAmount = subTotal + deliveryCharge;

  return (
    <div className="flex flex-col md:flex-row items-start gap-8 max-w-7xl mx-auto px-4 py-8 mt-32">

      {/* Left Form */}
      <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-md">
        <h2 className="text-center text-lg font-semibold mb-6">
          অর্ডারটি কনফর্ম করতে আপনার নাম, ঠিকানা, মোবাইল নাম্বার লিখে{" "}
          <span className="text-red-500">অর্ডার কনফর্ম করুন</span> বাটনে ক্লিক করুন
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">আপনার নাম *</label>
            <input
              type="text"
              placeholder="আপনার নাম"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">আপনার মোবাইল নম্বর *</label>
            <input
              type="text"
              placeholder="আপনার মোবাইল নম্বর"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">আপনার সম্পূর্ণ ঠিকানা</label>
            <input
              type="text"
              placeholder="আপনার সম্পূর্ণ ঠিকানা"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">আপনার মন্তব্য</label>
            <textarea
              placeholder="কালার, সাইজ, অর্ডার সম্পর্কে কোনো কথা থাকলে লিখুন"
              className="w-full border rounded-md p-2"
            />
          </div>

          {/* Delivery Charge */}
          <div>
            <h3 className="font-semibold mb-2">কুরিয়ার চার্জ</h3>
            <div className="space-y-2">
              <label className="flex items-center bg-green-600 text-white p-2 rounded-md cursor-pointer">
                <input type="radio" name="delivery" defaultChecked className="mr-2" />
                ঢাকার বাইরে ১৫০ টাকা
              </label>
              <label className="flex items-center bg-gray-300 text-black p-2 rounded-md cursor-pointer">
                <input type="radio" name="delivery" className="mr-2" />
                ঢাকার ভিতরে ৭০ টাকা
              </label>
            </div>
          </div>

          <Link
            href="/order-received"
            className="inline-block w-full text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md"
          >
            অর্ডার কনফর্ম করুন
          </Link>
        </form>
      </div>

      {/* Right Product Summary */}
      <div className="bg-white w-full md:w-1/2 p-6 rounded-lg shadow-md overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Product</h2>

        <table className="w-full text-sm text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-2 py-2">Product</th>
              <th className="px-2 py-2">Price</th>
              <th className="px-2 py-2">Quantity</th>
              <th className="px-2 py-2">Total</th>
              <th className="px-2 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-2 py-2 flex items-center gap-2">
                <Image
                  src="/card/card2.jpg"
                  alt="Product"
                  width={40}
                  height={40}
                  className="rounded"
                />
                <span>Rechargeable Double-Ended Spray Fan</span>
              </td>

              <td className="px-2 py-2">1999 টাকা</td>

              <td className="px-2 py-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleDecrease}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  type="button"
                  onClick={handleIncrease}
                  className="bg-blue-500 text-white px-2 rounded"
                >
                  +
                </button>
              </td>

              <td className="px-2 py-2">{1999 * quantity} টাকা</td>

              <td className="px-2 py-2">
                <button className="text-red-500 hover:text-red-700 cursor-pointer ">
                  🗑️
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Amount summary */}
        <div className="mt-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Sub-Total</span>
            <span>{subTotal.toLocaleString()} টাকা</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span>{deliveryCharge} টাকা</span>
          </div>
          <div className="flex justify-between font-bold text-red-500 pt-2 border-t mt-2">
            <span>Total Amount</span>
            <span>{totalAmount.toLocaleString()} টাকা</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
