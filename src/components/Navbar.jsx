import { Link } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitch";
import { useAuth } from "../context/AuthContext";
import { PersonStanding } from "lucide-react";
import { toggleTheme } from "./ThemeSwitch";
import { Menu, X } from "lucide-react"; // do hamburgera

export default function Navbar() {
  const { auth, logout } = useAuth();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setUserDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const spotsDropdownRef = useRef(null);
  const userDropdownRef = useRef(null);

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
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center space-x-3">
          <span
            className="text-3xl font-semibold"
            style={{ color: "var(--color-text)" }}
          >
            Scenic Spots
          </span>
        </Link>

        {/* Mobile menu toggle */}
          <div className=" md:hidden  space-x-4">
          <ThemeSwitcher />
        </div>
        <button
          className="md:hidden text-var(--color-text) hover:text-primary transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        

        {/* Desktop & Mobile menu */}
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            mobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className="font-medium flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-lg"
            style={{
              backgroundColor: "var(--color-muted)",
              borderColor: "var(--color-border)",
            }}
          >
            <li>
              <Link
                to="/"
                className="block py-2 px-3 rounded"
                style={{ color: "var(--color-text)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
              >
                Home
              </Link>
            </li>

            <li className="relative" ref={spotsDropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="block py-2 px-3 rounded w-full text-left md:text-center"
                style={{ color: "var(--color-text)" }}
              >
                Spots ▾
              </button>
              {isDropdownOpen && (
                <ul
                  className="md:absolute mt-2 md:w-40 bg-white rounded shadow-lg z-50"
                  style={{
                    backgroundColor: "var(--color-muted)",
                    border: "1px solid var(--color-border)",
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
                className="block py-2 px-3 rounded"
                style={{ color: "var(--color-text)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--color-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--color-text)")
                }
              >
                About
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0 ml-0 md:ml-8" ref={userDropdownRef}>
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
                  className="py-2 px-4 rounded border transition text-center"
                  style={{
                    color: "var(--color-text)",
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--color-secondary)",
                  }}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="py-2 px-4 rounded text-white transition text-center"
                  style={{ backgroundColor: "#2563eb" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="cursor-pointer" onClick={() => toggleTheme("high-contrast")}>
            <PersonStanding size={32} />
          </button>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}
