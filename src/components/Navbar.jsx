import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitch";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { auth, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="border-b sticky top-0"
      style={{
        backgroundColor: "var(--color-muted)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between py-1 px-8">
        <div className="w-full max-w-6xl flex flex-wrap items-center justify-between py-6">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span
              className="self-center text-3xl font-semibold whitespace-nowrap"
              style={{ color: "var(--color-text)" }}
            >
              Scenic Spots
            </span>
          </Link>

          <div className="hidden w-full md:flex md:w-auto items-center justify-between" id="navbar-default">
            <ul
              className="font-medium flex flex-col text-lg p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent"
              style={{
                backgroundColor: "var(--color-muted)",
                borderColor: "var(--color-border)",
              }}
            >
              {[{ to: "/", label: "Home" }, { to: "/spots", label: "Spots" }, { to: "/about", label: "About" }].map(
                ({ to, label }) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="block py-2 px-3 rounded md:p-0"
                      style={{ color: "var(--color-text)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>

            <div className="flex space-x-4 ml-8 relative" ref={dropdownRef}>
              {auth ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="py-2 px-4 rounded border text-sm font-medium transition"
                    style={{
                      color: "var(--color-text)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  >
                    {auth.username} ▾
                  </button>

                  {isDropdownOpen && (
                    <div
                      className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-50"
                      style={{
                        backgroundColor: "var(--color-muted)",
                        border: "1px solid var(--color-border)",
                      }}
                    >
                      <button
                        onClick={() => {
                          logout();
                          setDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        style={{ color: "var(--color-text)" }}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="py-2 px-4 rounded border transition"
                    style={{
                      color: "var(--color-text)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-secondary)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-primary)";
                      e.currentTarget.style.color = "var(--color-primary)";
                      e.currentTarget.style.backgroundColor = "var(--color-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--color-border)";
                      e.currentTarget.style.color = "var(--color-muted)";
                      e.currentTarget.style.backgroundColor = "var(--color-secondary)";
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="py-2 px-4 rounded text-white transition"
                    style={{ backgroundColor: "#2563eb" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
