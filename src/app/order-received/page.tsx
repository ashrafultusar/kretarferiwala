"use client";

import Link from "next/link";

const page = () => {
//   const orderId = "DNI4984";
  const totalAmount = 6067;

  return (
    <div className="flex justify-center px-4 py-10">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-7xl w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Order Place Successfully</h1>

        <p className="text-green-700 mb-4">
          আপনার অর্ডারটি সফলভাবে সম্পন্ন হয়েছে। আমাদের কল সেন্টার থেকে ফোন করে আপনার অর্ডারটি কনফর্ম করা হবে।
        </p>

        <div className="flex flex-col items-center justify-center mb-6 space-y-2">
          {/* <div className="text-lg font-semibold">
            অর্ডার নম্বর:{" "}
            <span className="bg-red-500 text-white px-3 py-1 rounded-full">{orderId}</span>
          </div> */}
          <div className="text-lg">
            অর্ডারের মোট মূল্য <span className="font-semibold">{totalAmount} ৳</span>
          </div>
        </div>

        <p className="text-red-600 font-semibold mb-8">
          ফেইক অর্ডার শনাক্ত করতে আপনার IP অ্যাড্রেস আমরা রেখেছি। ফেইক অর্ডার করলে, আমরা তার বিরুদ্ধে আইনি পদক্ষেপ নিব।
        </p>

        <Link href="/">
          <button className="bg-orange-400 hover:bg-orange-500 cursor-pointer text-white font-semibold px-6 py-3 rounded-md transition">
            অন্যান্য পণ্য দেখতে ক্লিক করুন
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
