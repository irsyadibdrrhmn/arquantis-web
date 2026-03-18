import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-[#C9A45C]/10 bg-[#081526] py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div>
          <h3 className="text-2xl font-bold text-[#E0C68A]">Arquantis</h3>
          <p className="mt-4 leading-7 text-[#D9DEE7]">
            Innovative investment solutions with global vision and quant
            precision.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Perusahaan</h4>
          <ul className="mt-4 space-y-3 text-[#D9DEE7]">
            <li><Link to="/about">Tentang Kami</Link></li>
            <li><Link to="/technology">Teknologi</Link></li>
            <li><Link to="/products">Produk</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Informasi</h4>
          <ul className="mt-4 space-y-3 text-[#D9DEE7]">
            <li><Link to="/performance">Kinerja</Link></li>
            <li><Link to="/research">Riset</Link></li>
            <li><Link to="/investor">Investor</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Kontak</h4>
          <ul className="mt-4 space-y-3 text-[#D9DEE7]">
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