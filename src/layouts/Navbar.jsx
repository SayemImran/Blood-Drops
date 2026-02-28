import { useState, useRef, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSquareQuestion } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router";
import useAuthContext from "../hook/useAuthContext";

const navLinks = [
  { to: "/dashboard", label: "Dashboard", icon: <MdDashboard className="text-lg" /> },
  { to: "/requests",  label: "Requests",  icon: <CiSquareQuestion className="text-xl" /> },
  { to: "/donors",    label: "Donors",    icon: <CgProfile className="text-lg" /> },
];

const Navbar = () => {
  const { user, logoutUser } = useAuthContext();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const linkCls = (path) =>
    `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors
    ${isActive(path)
      ? "text-red-400 border border-red-400"
      : "text-white hover:text-red-400 hover:border hover:border-red-400"}`;

  return (
    <nav className="bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white hover:text-red-400 transition-colors shrink-0">
          🩸 BloodDrops
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map(({ to, label, icon }) => (
            <li key={to}>
              <Link to={to} className={linkCls(to)}>
                {icon} {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">

          {/* Auth buttons (desktop, logged out) */}
          {!user && (
            <div className="hidden md:flex items-center gap-2">
              <Link to="/login">
                <button className="text-sm font-semibold px-4 py-1.5 border border-red-500 text-white hover:bg-red-400 rounded-lg transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="text-sm font-semibold px-4 py-1.5 border border-red-500 text-white hover:bg-red-400 rounded-lg transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          )}

          {/* Profile dropdown (logged in) */}
          {user && (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((p) => !p)}
                className="flex items-center gap-2 text-white hover:text-red-400 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-red-400 flex items-center justify-center text-white font-bold text-sm">
                  {user?.username?.[0]?.toUpperCase() ?? <CgProfile />}
                </div>
                <span className="hidden sm:block text-sm font-semibold">{user?.username}</span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 top-11 w-44 bg-gray-700 rounded-xl shadow-lg py-1 border border-gray-600 overflow-hidden">
                  <Link to="/profile" className="flex items-center gap-2 px-4 py-2.5 text-sm text-white hover:bg-gray-600 transition-colors">
                    <CgProfile /> Profile
                  </Link>
                  <div className="border-t border-gray-600 my-1" />
                  <button
                    onClick={logoutUser}
                    className="w-full text-left flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-gray-600 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMobileOpen((p) => !p)}
            className="md:hidden text-white hover:text-red-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 pb-4 pt-2 space-y-1">
          {navLinks.map(({ to, label, icon }) => (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors
                ${isActive(to)
                  ? "text-red-400 bg-gray-700"
                  : "text-white hover:text-red-400 hover:bg-gray-700"}`}
            >
              {icon} {label}
            </Link>
          ))}

          {/* Auth buttons (mobile, logged out) */}
          {!user && (
            <div className="flex gap-2 pt-2 border-t border-gray-700 mt-2">
              <Link to="/login" className="flex-1">
                <button className="w-full text-sm font-semibold px-4 py-2 border border-red-500 text-white hover:bg-red-400 rounded-lg transition-colors">
                  Login
                </button>
              </Link>
              <Link to="/register" className="flex-1">
                <button className="w-full text-sm font-semibold px-4 py-2 border border-red-500 text-white hover:bg-red-400 rounded-lg transition-colors">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;