import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-cyan-400">Arquantis</h3>
          <p className="mt-3 text-gray-400">
            Quantitative trading company dengan pendekatan teknologi, AI, dan
            infrastruktur performa tinggi.
          </p>
        </div>

        <div>
          <h4 className="font-semibold">Perusahaan</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/technology">Teknologi</Link></li>
            <li><Link to="/products">Produk</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Informasi</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link to="/performance">Kinerja</Link></li>
            <li><Link to="/research">Riset</Link></li>
            <li><Link to="/investor">Investor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Kontak</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link to="/contact">Hubungi Kami</Link></li>
            <li>info@arquantis.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;