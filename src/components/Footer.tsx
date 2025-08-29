import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} Sunil Kumar. All rights reserved.
        </p>
        <p className="mt-2 text-sm">
          Built with <span className="text-blue-400">React + TypeScript + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
