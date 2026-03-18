import Card from "./Card";

const markets = [
  {
    title: "Forex",
    desc: "Strategi tren, mean reversion, dan liquidity-driven execution untuk pasar valuta asing global.",
  },
  {
    title: "Crypto",
    desc: "Model adaptif untuk memanfaatkan volatilitas tinggi dan market inefficiency pada aset digital.",
  },
  {
    title: "Commodities",
    desc: "Eksposur terukur pada energi, logam, dan komoditas utama dengan pendekatan kuantitatif.",
  },
  {
    title: "Derivatives",
    desc: "Optimasi hedging, spread, dan pendekatan risiko sistematis untuk instrumen turunan.",
  },
];

const Markets = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
            Market Coverage
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#081526] md:text-5xl">
            Cakupan Pasar Global
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#5A6B7F]">
            Strategi lintas aset yang dirancang untuk merespons berbagai
            karakter pasar dengan disiplin eksekusi dan manajemen risiko.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {markets.map((item, index) => (
            <Card key={index} title={item.title} desc={item.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;