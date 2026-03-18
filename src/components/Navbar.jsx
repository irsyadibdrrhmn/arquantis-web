import { Link, NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }) =>
  `transition ${
    isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
  }`;

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-xl font-bold text-transparent"
        >
          Arquantis
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <NavLink to="/" end className={navLinkClass}>
            Beranda
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            Tentang Kami
          </NavLink>
          <NavLink to="/technology" className={navLinkClass}>
            Teknologi
          </NavLink>
          <NavLink to="/products" className={navLinkClass}>
            Produk
          </NavLink>
          <NavLink to="/performance" className={navLinkClass}>
            Kinerja
          </NavLink>
          <NavLink to="/research" className={navLinkClass}>
            Riset
          </NavLink>
          <NavLink to="/investor" className={navLinkClass}>
            Investor
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Kontak
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;