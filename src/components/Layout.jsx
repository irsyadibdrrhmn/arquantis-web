import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050d1a] text-[#e8edf5]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;