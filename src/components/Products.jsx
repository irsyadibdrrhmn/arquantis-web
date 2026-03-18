import Card from "./Card";

const Products = () => {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Produk Kami</h2>
        <p className="mt-3 text-center text-gray-400">
          Solusi sistematis untuk strategi, analitik, dan monitoring.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card
            title="Algoritma Forex"
            desc="Strategi otomatis berbasis momentum, mean reversion, dan liquidity pattern."
          />
          <Card
            title="Algoritma Crypto"
            desc="Model kuantitatif untuk pasar digital berfrekuensi tinggi dan volatil."
          />
          <Card
            title="Platform Analitik"
            desc="Dashboard untuk observasi performa, eksposur, dan stabilitas strategi."
          />
        </div>
      </div>
    </section>
  );
};

export default Products;