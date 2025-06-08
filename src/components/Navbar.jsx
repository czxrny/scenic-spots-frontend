import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitch";
import { useAuth } from "../context/AuthContext";
import { PersonStanding } from "lucide-react";
import { toggleTheme } from "./ThemeSwitch";



export default function Navbar() {
  const { auth, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const spotsDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (spotsDropdownRef.current && !spotsDropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className="border-b sticky top-0 z-50"
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
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded md:p-0"
                  style={{ color: "var(--color-text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                >
                  Home
                </Link>
              </li>

              <li className="relative" ref={spotsDropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="block py-2 px-3 rounded md:p-0 text-left md:text-center w-full md:w-auto"
                  style={{ color: "var(--color-text)" }}
                >
                  Spots ▾
                </button>

                {isDropdownOpen && (
                  <ul
                    className="absolute mt-2 w-40 bg-white rounded shadow-lg z-50"
                    style={{
                      backgroundColor: "var(--color-muted)",
                      border: "1px solid var(--color-border)",
                      listStyle: "none",
                      padding: "0",
                      margin: "0",
                    }}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <li>
                      <Link
                        to="/spots"
                        className="block px-4 py-2 hover:bg-gray-100"
                        style={{ color: "var(--color-text)" }}
                      >
                        All Spots
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/spots/new"
                        className="block px-4 py-2 hover:bg-gray-100"
                        style={{ color: "var(--color-text)" }}
                      >
                        Add New Spot
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/about"
                  className="block py-2 px-3 rounded md:p-0"
                  style={{ color: "var(--color-text)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text)")}
                >
                  About
                </Link>
              </li>
            </ul>

            <div className="flex space-x-4 ml-8 relative" ref={userDropdownRef}>
              {auth ? (
                <div className="relative">
                  <button
                    onClick={() => setUserDropdownOpen(!isUserDropdownOpen)}
                    className="py-2 px-4 rounded border text-sm font-medium transition"
                    style={{
                      color: "var(--color-text)",
                      borderColor: "var(--color-border)",
                      backgroundColor: "var(--color-secondary)",
                    }}
                  >
                    {auth.username} ▾
                  </button>

                  {isUserDropdownOpen && (
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
                          setUserDropdownOpen(false);
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
        <button className="cursor-pointer float-end" onClick={() => toggleTheme("high-contrast")}>
          <PersonStanding size={48} />
        </button>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
