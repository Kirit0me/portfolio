import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  // { name: "Blogs", path: "/blogs" },
  // { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg border-b border-green-500 px-4 py-4 relative z-50">
      <div className="flex items-center justify-between">
 
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-green-400 hover:text-pink-400 transition">
            kiri<span className="text-pink-400">t0me</span>
          </Link>
        </div>

        <ul className="hidden md:flex flex-1 justify-end gap-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`px-3 py-2 rounded-md transition ${
                    location.pathname === link.path
                      ? "text-green-400 bg-green-900/30 ring-1 ring-green-400"
                      : "text-green-300 hover:text-pink-400"
                  }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-green-400 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-black border-t border-green-500 flex flex-col gap-2 py-4 px-6">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
               className={`block px-3 py-2 rounded-md transition ${
                    location.pathname === link.path
                      ? "text-green-400 bg-green-900/30 ring-1 ring-green-400"
                      : "text-green-300 hover:text-pink-400"
                  }`}
                onClick={() => setMenuOpen(false)} // close menu on click
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
