import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav
      className="border-b sticky top-0 z-50"
      style={{
        backgroundColor: "var(--color-muted)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between py-6 px-8">
        <div className="w-full max-w-6xl flex flex-wrap items-center justify-between py-6">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span
              className="self-center text-3xl font-semibold whitespace-nowrap"
              style={{ color: "var(--color-text)" }}
            >
              Scenic Spots
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2"
            aria-controls="navbar-default"
            aria-expanded="false"
            style={{ color: "var(--color-muted)" }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:flex md:w-auto items-center justify-between"
            id="navbar-default"
          >
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
                      onMouseEnter={e =>
                        (e.currentTarget.style.color = "var(--color-primary)")
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.color = "var(--color-text)")
                      }
                    >
                      {label}
                    </Link>
                  </li>
                )
              )}
            </ul>
            <div className="flex space-x-4 ml-8">
              <Link
                to="/login"
                className="py-2 px-4 rounded border transition"
                style={{
                  color: "var(--color-muted)",
                  borderColor: "var(--color-border)",
                  backgroundColor: "#2d2d2d",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                  e.currentTarget.style.color = "var(--color-primary)";
                  e.currentTarget.style.backgroundColor = "#2d2d2d";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--color-border)";
                  e.currentTarget.style.color = "var(--color-muted)";
                  e.currentTarget.style.backgroundColor = "#2d2d2d";
                }}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-4 rounded text-white transition"
                style={{ backgroundColor: "#2563eb" }}
                onMouseEnter={e =>
                  (e.currentTarget.style.backgroundColor = "#1d4ed8")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.backgroundColor = "#2563eb")
                }
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
