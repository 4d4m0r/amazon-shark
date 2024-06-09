import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function DropdownMenu({ onLogout, userName }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover flex items-center gap-2"
        onClick={handleToggle}
      >
        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          {userName[0].toUpperCase()}
        </div>
        <span>{userName}</span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 border rounded-md shadow-lg">
          <Link href="/dashboard"  className="block text-left py-2 px-4 hover:bg-gray-400 rounded">
              Dashboard
          </Link>
          <button
            className="w-full text-left py-2 px-4 hover:bg-gray-400 rounded"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
