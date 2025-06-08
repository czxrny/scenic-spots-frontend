import React, { useState } from "react";

export default function ThemeSwitcher() {
  function toggleTheme(mode) {
    document.documentElement.className = mode;
  }

  const [open, setOpen] = useState(false);

  function handleToggle(mode) {
    toggleTheme(mode);
    setOpen(false);
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-[var(--color-bg)] text-[var(--color-text)] rounded border border-[var(--color-border)] shadow-md focus:outline-none"
      >
        Theme ▼
      </button>

      {open && (
        <div className="mt-2 flex flex-col bg-[var(--color-bg)] border border-[var(--color-border)] rounded shadow-md">
          <button
            onClick={() => handleToggle("light")}
            className="px-4 py-2 text-black bg-gray-200 hover:bg-gray-300 rounded-t"
          >
            Light
          </button>
          <button
            onClick={() => handleToggle("dark")}
            className="px-4 py-2 text-white bg-gray-800 hover:bg-gray-700"
          >
            Dark
          </button>
          <button
            onClick={() => handleToggle("high-contrast")}
            className="px-4 py-2 text-yellow-300 bg-black hover:bg-gray-900 rounded-b"
          >
            High Contrast
          </button>
        </div>
      )}
    </div>
  );
}
