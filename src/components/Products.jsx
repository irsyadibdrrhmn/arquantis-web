const products = [
  {
    title: "Algoritma Forex",
    desc: "Strategi otomatis berbasis momentum, mean reversion, dan liquidity pattern pada pasar valuta asing global.",
  },
  {
    title: "Algoritma Crypto",
    desc: "Model kuantitatif untuk pasar digital yang memanfaatkan volatilitas tinggi dan peluang arbitrase sistematis.",
  },
  {
    title: "Platform Analitik",
    desc: "Dashboard observasi performa, monitoring risiko, dan evaluasi strategi untuk kebutuhan institusional.",
  },
];

const Products = () => {
  return (
    <section className="bg-[#F5F7FB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
            Solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#081526] md:text-5xl">
            Solusi Perdagangan Sistematis
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#5A6B7F]">
            Produk algoritma kami dirancang untuk memberikan eksposur yang
            dioptimalkan pada berbagai kelas aset dengan profil risiko yang
            terukur.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="rounded-[30px] border border-[#C9A45C]/15 bg-white p-8 shadow-[0_12px_32px_rgba(8,21,38,0.08)]"
            >
              <div className="mb-6 h-14 w-14 rounded-2xl bg-[#EEF3F8]" />

              <h3 className="text-2xl font-bold leading-snug text-[#081526]">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-[#5A6B7F]">{item.desc}</p>

              <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#102845] transition hover:text-[#C9A45C]">
                Pelajari Lebih Lanjut
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;