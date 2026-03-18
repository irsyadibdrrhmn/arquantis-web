import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Beranda", path: "/" },
  { label: "Tentang", path: "/about" },
  { label: "Teknologi", path: "/technology" },
  { label: "Produk", path: "/products" },
  { label: "Kinerja", path: "/performance" },
  { label: "Riset", path: "/research" },
  { label: "Investor", path: "/investor" },
  { label: "Kontak", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(201,164,92,0.2)] bg-[rgba(5,13,26,0.92)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#c9a45c] to-transparent opacity-60" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 group">
            
            <div className="hidden sm:block">
              <span className="font-display text-xs font-bold tracking-[0.15em] text-[#c9a45c] uppercase">
                Arquantis
              </span>
              <div className="text-[9px] tracking-[0.3em] text-[#7a8fa6] uppercase font-mono">
                Teknologi Investama
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                    isActive
                      ? "text-[#00e5ff]"
                      : "text-[#7a8fa6] hover:text-[#c9a45c]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="relative overflow-hidden rounded-lg px-4 py-2 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-200 group"
            >
              <span className="absolute inset-0 border border-[rgba(201,164,92,0.4)] rounded-lg group-hover:border-[#c9a45c] transition-colors" />
              <span className="absolute inset-0 rounded-lg bg-[rgba(201,164,92,0.05)] group-hover:bg-[rgba(201,164,92,0.12)] transition-colors" />
              <span className="relative text-[#c9a45c]">Hubungi Kami</span>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen((p) => !p)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(201,164,92,0.2)] md:hidden"
          >
            <div className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "top-2 rotate-45" : ""}`} />
              <span className={`absolute left-0 top-2 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-4 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "top-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden transition-all duration-300 md:hidden ${isOpen ? "max-h-[600px] pb-4" : "max-h-0"}`}>
          <div className="rounded-xl border border-[rgba(201,164,92,0.15)] bg-[rgba(5,13,26,0.95)] backdrop-blur-xl p-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all ${
                    isActive
                      ? "bg-[rgba(0,229,255,0.08)] text-[#00e5ff] border-l-2 border-[#00e5ff]"
                      : "text-[#7a8fa6] hover:text-[#c9a45c] hover:bg-[rgba(201,164,92,0.05)]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;