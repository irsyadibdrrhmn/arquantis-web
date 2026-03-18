import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TechnologyPage from "./pages/TechnologyPage";
import ProductsPage from "./pages/ProductsPage";
import PerformancePage from "./pages/PerformancePage";
import ResearchPage from "./pages/ResearchPage";
import InvestorPage from "./pages/InvestorPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/performance" element={<PerformancePage />} />
      <Route path="/research" element={<ResearchPage />} />
      <Route path="/investor" element={<InvestorPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;