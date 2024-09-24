"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Cart from './Cart';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Elegant Jewelry</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Home</Link>
              <Link href="/products" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Products</Link>
              <Link href="/about" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">About</Link>
              <Link href="/contact" className="py-4 px-2 text-gray-500 hover:text-gray-900 transition duration-300">Contact</Link>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {user ? (
              <>
                <span className="text-gray-700">{user.email}</span>
                <button
                  onClick={handleLogout}
                  className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 hover:text-gray-900 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-gray-100 hover:text-gray-900 transition duration-300">Login</Link>
                <Link href="/register" className="py-2 px-2 font-medium text-white bg-indigo-500 rounded hover:bg-indigo-400 transition duration-300">Register</Link>
              </>
            )}
            <button
              className="relative p-2 text-gray-500 hover:text-gray-900"
              onClick={() => setIsCartOpen(!isCartOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                  {totalItems}
                </span>
              )}
            </button>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</Link>
        <Link href="/products" className="block py-2 px-4 text-sm hover:bg-gray-200">Products</Link>
        <Link href="/about" className="block py-2 px-4 text-sm hover:bg-gray-200">About</Link>
        <Link href="/contact" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact</Link>
      </div>
      {isCartOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10">
          <Cart />
        </div>
      )}
    </nav>
  );
};

export default Navbar;