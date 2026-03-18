import Layout from "../components/Layout";
import Products from "../components/Products";

const ProductsPage = () => {
  return (
    <Layout>
      <section className="bg-[#050B14] pt-32 pb-8">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Produk</h1>
          <p className="mt-4 max-w-2xl text-gray-400">
            Kumpulan solusi trading sistematis, analitik performa, dan
            monitoring risiko untuk pasar modern.
          </p>
        </div>
      </section>

      <Products />
    </Layout>
  );
};

export default ProductsPage;