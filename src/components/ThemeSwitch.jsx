import React, { useState, useRef, useEffect } from "react";

export function toggleTheme(mode) {
  document.documentElement.className = mode;
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  function handleToggle(mode) {
    toggleTheme(mode);
    setOpen(false);
    // Return focus to the button after selection
    buttonRef.current && buttonRef.current.focus();
  }

  // Close dropdown on Escape
  useEffect(() => {
    if (!open) return;
    function handleKeyDown(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Trap focus inside dropdown when open
  useEffect(() => {
    if (!open || !dropdownRef.current) return;
    const focusable = dropdownRef.current.querySelectorAll('button');
    if (focusable.length) focusable[0].focus();
  }, [open]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-[var(--color-bg)] text-[var(--color-text)] rounded border border-[var(--color-border)] shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer min-w-[120px] text-base font-semibold"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Wybierz motyw kolorystyczny"
      >
        Theme ▼
      </button>

      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-44 flex flex-col bg-[var(--color-bg)] border border-[var(--color-border)] rounded shadow-md z-50"
          role="menu"
          aria-label="Wybierz motyw kolorystyczny"
        >
          <button
            onClick={() => handleToggle("light")}
            className="px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-t text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            role="menuitem"
            tabIndex={0}
            aria-label="Motyw jasny"
          >
            Light
          </button>
          <button
            onClick={() => handleToggle("dark")}
            className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            role="menuitem"
            tabIndex={0}
            aria-label="Motyw ciemny"
          >
            Dark
          </button>
          <button
            onClick={() => handleToggle("high-contrast")}
            className="px-4 py-2 text-yellow-300 bg-black hover:bg-gray-900 rounded-b text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            role="menuitem"
            tabIndex={0}
            aria-label="Motyw wysokiego kontrastu"
          >
            High Contrast
          </button>
        </div>
      )}
    </div>
  );
}
