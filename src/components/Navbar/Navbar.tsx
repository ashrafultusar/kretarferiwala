
"use client";
import Image from 'next/image';
import { IoMenuSharp } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { FiShoppingCart } from 'react-icons/fi';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const categories = [
  "Electronics",
  "Kitchen Accessories",
  "Home Decor",
  "Home Accessories",
  "Baby Products",
  "Safety Products",
  "Flash Sales",
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile hamburger + logo + cart */}
          <div className="flex items-center md:hidden w-full justify-between">
            <button onClick={() => setIsOpen(true)}>
              <IoMenuSharp className="text-2xl text-black" />
            </button>
            <div className="flex items-center space-x-2">
              <Image src="/icons/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-black font-bold text-lg">Shop</span>
            </div>
            <div className="text-black text-2xl">
              <FiShoppingCart />
            </div>
          </div>

          {/* Desktop view */}
          <div className="hidden md:flex w-full items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image src="/icons/logo.png" alt="Logo" width={50} height={50} />
            </div>
            <div className="flex-1 mx-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products..."
                  className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:border-blue-400"
                />
                <FaSearch className="absolute right-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-end">
                <span className="text-sm text-gray-600">অর্ডার করতে কল করুন</span>
                <span className="text-red-500 font-semibold">01710417359</span>
              </div>
              <div className="text-black text-2xl">
                <FiShoppingCart />
              </div>
            </div>
          </div>
        </div>

        {/* Categories (only desktop) */}
        <div className="hidden md:flex bg-gray-100 py-3 mt-2 justify-center space-x-8">
          {categories.map((category, index) => (
            <span key={index} className=" text-black hover:text-red-500 cursor-pointer">
              {category}
            </span>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50 flex flex-col space-y-6">
          <button onClick={() => setIsOpen(false)} className="self-end">
            <ImCross className="text-2xl text-black" />
          </button>

          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 focus:outline-none focus:border-blue-400"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>

          {/* Categories (inside mobile menu) */}
          <div className="flex flex-col space-y-4 mt-4">
            {categories.map((category, index) => (
              <span key={index} className="text-black text-base hover:text-red-500 cursor-pointer">
                {category}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
