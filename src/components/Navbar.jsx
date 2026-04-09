import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLang } from "../context/LangContext";

const Navbar = () => {
  const { lang, toggle, t } = useLang();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "home",        path: "/" },
    { key: "about",       path: "/about" },
    { key: "technology",  path: "/technology" },
    { key: "products",    path: "/products" },
    { key: "performance", path: "/performance" },
    { key: "research",    path: "/research" },
    { key: "investor",    path: "/investor" },
    { key: "contact",     path: "/contact" },
  ];

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

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 sm:gap-3 group">
            
            <div className="block">
              <span className="font-display text-[11px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.15em] text-[#c9a45c] uppercase">
                Arquantis
              </span>
              <div className="hidden sm:block text-[9px] tracking-[0.3em] text-[#7a8fa6] uppercase font-mono">
                Teknologi Investama
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 ${
                    isActive ? "text-[#00e5ff]" : "text-[#7a8fa6] hover:text-[#c9a45c]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t("nav", item.key)}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 h-[2px] w-4 -translate-x-1/2 rounded-full bg-[#00e5ff] shadow-[0_0_8px_#00e5ff]" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right: Lang toggle + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language switcher */}
            <button
              onClick={toggle}
              className="relative flex items-center rounded-lg border border-[rgba(201,164,92,0.25)] bg-[rgba(201,164,92,0.05)] p-1 transition-all hover:border-[rgba(201,164,92,0.5)] hover:bg-[rgba(201,164,92,0.1)]"
              title={lang === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
            >
              <span
                className={`flex h-6 w-8 items-center justify-center rounded text-[10px] font-black tracking-[0.12em] uppercase transition-all duration-200 ${
                  lang === "id"
                    ? "bg-[#c9a45c] text-[#050d1a] shadow-[0_0_8px_rgba(201,164,92,0.5)]"
                    : "text-[#7a8fa6]"
                }`}
              >
                ID
              </span>
              <span className="mx-0.5 text-[8px] text-[rgba(201,164,92,0.3)]">|</span>
              <span
                className={`flex h-6 w-8 items-center justify-center rounded text-[10px] font-black tracking-[0.12em] uppercase transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#00e5ff] text-[#050d1a] shadow-[0_0_8px_rgba(0,229,255,0.5)]"
                    : "text-[#7a8fa6]"
                }`}
              >
                EN
              </span>
            </button>

            {/* CTA button */}
            <Link
              to="/contact"
              className="relative overflow-hidden rounded-lg px-4 py-2 text-xs font-bold tracking-[0.1em] uppercase transition-all duration-200 group"
            >
              <span className="absolute inset-0 border border-[rgba(201,164,92,0.4)] rounded-lg group-hover:border-[#c9a45c] transition-colors" />
              <span className="absolute inset-0 rounded-lg bg-[rgba(201,164,92,0.05)] group-hover:bg-[rgba(201,164,92,0.12)] transition-colors" />
              <span className="relative text-[#c9a45c]">{t("nav", "cta")}</span>
            </Link>
          </div>

          {/* Mobile: lang toggle + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggle}
              className="flex items-center rounded-lg border border-[rgba(201,164,92,0.25)] bg-[rgba(201,164,92,0.05)] p-1"
            >
              <span className={`flex h-5 w-7 items-center justify-center rounded text-[9px] font-black tracking-widest uppercase transition-all ${lang === "id" ? "bg-[#c9a45c] text-[#050d1a]" : "text-[#7a8fa6]"}`}>
                ID
              </span>
              <span className="mx-0.5 text-[7px] text-[rgba(201,164,92,0.3)]">|</span>
              <span className={`flex h-5 w-7 items-center justify-center rounded text-[9px] font-black tracking-widest uppercase transition-all ${lang === "en" ? "bg-[#00e5ff] text-[#050d1a]" : "text-[#7a8fa6]"}`}>
                EN
              </span>
            </button>
            <button
              onClick={() => setIsOpen((p) => !p)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(201,164,92,0.2)]"
            >
              <div className="relative h-4 w-5">
                <span className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "top-2 rotate-45" : ""}`} />
                <span className={`absolute left-0 top-2 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "opacity-0" : ""}`} />
                <span className={`absolute left-0 top-4 h-[2px] w-full rounded-full bg-[#c9a45c] transition-all ${isOpen ? "top-2 -rotate-45" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`overflow-hidden transition-all duration-300 lg:hidden ${isOpen ? "max-h-[600px] pb-3 sm:pb-4" : "max-h-0"}`}>
          <div className="rounded-xl border border-[rgba(201,164,92,0.15)] bg-[rgba(5,13,26,0.95)] backdrop-blur-xl p-2.5 sm:p-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 sm:px-4 py-3 text-[11px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.12em] uppercase transition-all ${
                    isActive
                      ? "bg-[rgba(0,229,255,0.08)] text-[#00e5ff] border-l-2 border-[#00e5ff]"
                      : "text-[#7a8fa6] hover:text-[#c9a45c] hover:bg-[rgba(201,164,92,0.05)]"
                  }`
                }
              >
                {t("nav", item.key)}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
