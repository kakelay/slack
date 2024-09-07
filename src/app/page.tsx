"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';

// Header Component with Responsive Mobile Menu
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if clicking outside of the header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="w-full bg-gray-800 text-white p-4 flex justify-between items-center relative"
    >
      <h1 className="text-lg font-semibold">Admin Dashboard</h1>

      {/* Desktop Menu */}
      <nav className="hidden sm:block">
        <ul className="flex gap-4 items-center">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Profile
            </a>
          </li>
          {/* Profile Image for Desktop */}
          <li>
            <Image
              src="https://avatars.githubusercontent.com/u/110383694?s=96&v=4"
              alt="Profile"
              width={40} // Adjust size as needed
              height={40} // Adjust size as needed
              className="rounded-full"
            />
          </li>
        </ul>
      </nav>

      {/* Hamburger Icon for Mobile */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gray-800 text-white sm:hidden">
          <ul className="flex flex-col gap-4 p-4">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Profile
              </a>
            </li>
            {/* Profile Image for Mobile */}
            <li className="text-center mt-4">
              <Image
                src="https://avatars.githubusercontent.com/u/110383694?s=96&v=4"
                alt="Profile"
                width={80} // Adjust size as needed
                height={80} // Adjust size as needed
                className="rounded-full"
              />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

// Body Component (Dashboard Content)
function DashboardBody() {
  return (
    <main className="flex-grow p-8 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Example cards, you can replace these with actual content */}
        <div className="p-6 bg-white shadow rounded">
          <h2 className="font-semibold text-lg mb-2">Users</h2>
          <p>Manage user accounts and permissions.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="font-semibold text-lg mb-2">Analytics</h2>
          <p>View site analytics and reports.</p>
        </div>
        <div className="p-6 bg-white shadow rounded">
          <h2 className="font-semibold text-lg mb-2">Settings</h2>
          <p>Customize the admin dashboard settings.</p>
        </div>
      </div>
    </main>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 Admin Dashboard. All rights reserved.</p>
    </footer>
  );
}

// Main Component (Combining Header, Body, Footer)
export default function AdminDashboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <DashboardBody />
      <Footer />
    </div>
  );
}
