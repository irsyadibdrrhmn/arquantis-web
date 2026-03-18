import Card from "./Card";

const Markets = () => {
  return (
    <section className="bg-[#08111F] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Cakupan Pasar Global</h2>
        <p className="mt-3 text-center text-gray-400">
          Strategi lintas aset untuk berbagai kondisi pasar.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card
            title="Forex"
            desc="Strategi tren, mean reversion, dan liquidity-driven execution."
          />
          <Card
            title="Crypto"
            desc="Adaptasi cepat terhadap volatilitas tinggi dan market inefficiency."
          />
          <Card
            title="Commodities"
            desc="Eksposur terukur pada pasar energi, logam, dan komoditas utama."
          />
          <Card
            title="Derivatives"
            desc="Optimasi hedging, spread, dan pendekatan risiko sistematis."
          />
        </div>
      </div>
    </section>
  );
};

export default Markets;