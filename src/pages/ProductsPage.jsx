import Layout from "../components/Layout";
import Products from "../components/Products";

const ProductsPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-br from-[#081526] to-[#102845] pt-32 pb-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#E0C68A]">
            Products
          </p>

          <h1 className="mt-3 text-4xl font-bold text-white md:text-6xl">
            Produk
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-[#D9DEE7]">
            Kumpulan solusi trading sistematis, analitik performa, dan
            monitoring risiko yang dibangun untuk kebutuhan pasar modern.
          </p>
        </div>
      </section>

      <Products />
    </Layout>
  );
};

export default ProductsPage;