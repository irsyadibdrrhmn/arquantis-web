import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#050B14] text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;