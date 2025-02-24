"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    const newTheme = !darkMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", !darkMode);
    localStorage.setItem("theme", newTheme);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Uses", href: "/uses" },
  ];

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-900">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">My Portfolio</h1>

      <ul className="flex space-x-8 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow-inner">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>
              <span
                className={`px-4 py-2 rounded-full cursor-pointer ${
                  pathname === link.href
                    ? "text-teal-500 font-semibold bg-white dark:bg-gray-700 shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:text-teal-500"
                }`}
              >
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleDarkMode}
        className="w-10 h-10 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full shadow-md"
      >
        {darkMode ? (
          <span role="img" aria-label="Moon">
            🌙
          </span>
        ) : (
          <span role="img" aria-label="Sun">
            ☀️
          </span>
        )}
      </button>
    </nav>
  );
}
