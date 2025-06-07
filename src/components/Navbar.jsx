import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-6 px-8">
        <div className="w-full max-w-6xl flex flex-wrap items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-gray-100">
              Scenic Spots
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:flex md:w-auto items-center justify-between" id="navbar-default">
            <ul className="font-medium flex flex-col text-lg p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-[#1a1a1a] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-200 rounded md:hover:text-white hover:bg-gray-800 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/spots"
                  className="block py-2 px-3 text-gray-200 rounded md:hover:text-white hover:bg-gray-800 md:p-0"
                >
                  Spots
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-200 rounded md:hover:text-white hover:bg-gray-800 md:p-0"
                >
                  About
                </Link>
              </li>
            </ul>
            {/* Przycisk Login i Register */}
            <div className="flex space-x-4 ml-8">
              <Link
                to="/login"
                className="py-2 px-4 rounded text-gray-200 border border-gray-600 hover:border-gray-400 hover:text-white transition"
                style={{ backgroundColor: "transparent" }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
