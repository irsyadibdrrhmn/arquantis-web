import Layout from "../components/Layout";
import Products from "../components/Products";
import PageHero from "../components/PageHero";

const ProductsPage = () => {
  return (
    <Layout>
      <PageHero
        eyebrow="Products"
        title={<>Produk <span className="text-gradient-gold">Kami</span></>}
        subtitle="Kumpulan solusi trading sistematis, analitik performa, dan monitoring risiko yang dibangun untuk kebutuhan pasar modern."
        accent="gold"
      />
      <Products />
    </Layout>
  );
};

export default ProductsPage;