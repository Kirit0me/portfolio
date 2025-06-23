import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Skills", path: "/skills" },
//   { name: "Projects", path: "/projects" },
//   { name: "Blogs", path: "/blogs" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black shadow-lg border-b border-green-500">
      <div className="text-2xl font-bold text-green-400">kiri<span className="text-pink-400">t0me</span></div>
      <ul className="flex gap-6">
        {navLinks.map(link => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`hover:text-pink-400 transition ${
                location.pathname === link.path ? "underline decoration-green-400" : ""
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
