import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Tentang Kami", path: "/about" },
  { label: "Teknologi", path: "/technology" },
  { label: "Produk", path: "/products" },
  { label: "Kinerja", path: "/performance" },
  { label: "Riset", path: "/research" },
  { label: "Investor", path: "/investor" },
  { label: "Kontak", path: "/contact" },
];

const desktopLinkClass = ({ isActive }) =>
  `relative transition ${
    isActive ? "text-[#081526]" : "text-[#2F435C] hover:text-[#081526]"
  }`;

const mobileLinkClass = ({ isActive }) =>
  `block rounded-xl px-4 py-3 text-sm font-medium transition ${
    isActive
      ? "bg-[#102845] text-white"
      : "text-[#2F435C] hover:bg-[#F5F7FB] hover:text-[#081526]"
  }`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-[#C9A45C]/15 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
            <span className="text-1xl font-bold tracking-tight text-[#C9A45C]">
              ARQUANTIS TEKNOLOGI INVESTAMA
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={desktopLinkClass}
              >
                {({ isActive }) => (
                  <span className="relative">
                    {item.label}
                    {isActive && (
                      <span className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full bg-[#081526]" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A45C]/20 text-[#081526] transition hover:bg-[#F8FAFC] md:hidden"
          >
            <span className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-[520px] pb-4" : "max-h-0"
          }`}
        >
          <div className="rounded-2xl border border-[#C9A45C]/15 bg-white p-3 shadow-[0_12px_32px_rgba(8,21,38,0.08)]">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
