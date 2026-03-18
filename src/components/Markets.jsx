const markets = [
  {
    title: "Forex",
    code: "FX",
    desc: "Strategi tren, mean reversion, dan liquidity-driven execution untuk pasar valuta asing global.",
    return: "+28.4%",
    color: "#00e5ff",
    pairs: ["EUR/USD", "GBP/JPY", "USD/JPY"],
  },
  {
    title: "Crypto",
    code: "CX",
    desc: "Model adaptif untuk memanfaatkan volatilitas tinggi dan market inefficiency pada aset digital.",
    return: "+41.2%",
    color: "#c9a45c",
    pairs: ["BTC/USD", "ETH/USD", "SOL/USD"],
  },
  {
    title: "Commodities",
    code: "CM",
    desc: "Eksposur terukur pada energi, logam, dan komoditas utama dengan pendekatan kuantitatif.",
    return: "+34.1%",
    color: "#ff2d78",
    pairs: ["XAUUSD", "WTI", "NATGAS"],
  },
  {
    title: "Derivatives",
    code: "DV",
    desc: "Optimasi hedging, spread, dan pendekatan risiko sistematis untuk instrumen turunan.",
    return: "+22.8%",
    color: "#9b5de5",
    pairs: ["SPX", "NQ", "DAX"],
  },
];

const Markets = () => {
  return (
    <section className="relative bg-[#050d1a] py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#9b5de5] opacity-[0.03] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[rgba(201,164,92,0.5)]" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">// Market_Coverage</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[rgba(201,164,92,0.5)]" />
          </div>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            Cakupan <span className="text-gradient-cyan">Pasar Global</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7a8fa6]">
            Strategi lintas aset yang dirancang untuk merespons berbagai karakter pasar dengan disiplin eksekusi.
          </p>
        </div>

        {/* Market grid */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {markets.map((m, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(8,21,38,0.7)] p-6 card-hover group overflow-hidden"
            >
              {/* BG glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top, ${m.color}10 0%, transparent 70%)` }}
              />

              {/* Top bar */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-sm font-black border"
                  style={{ color: m.color, borderColor: `${m.color}30`, backgroundColor: `${m.color}10`, textShadow: `0 0 10px ${m.color}` }}
                >
                  {m.code}
                </div>
                <div
                  className="rounded-lg px-2.5 py-1 font-mono text-xs font-bold"
                  style={{ color: m.color, backgroundColor: `${m.color}15`, boxShadow: `0 0 8px ${m.color}20` }}
                >
                  {m.return}
                </div>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">{m.title}</h3>
              <p className="text-sm leading-6 text-[#7a8fa6] mb-5">{m.desc}</p>

              {/* Pairs */}
              <div className="space-y-1.5">
                {m.pairs.map((pair, j) => (
                  <div key={j} className="flex items-center gap-2">
                    <div className="h-1 w-1 rounded-full" style={{ backgroundColor: m.color }} />
                    <span className="font-mono text-[10px] tracking-[0.1em] text-[#7a8fa6]">{pair}</span>
                  </div>
                ))}
              </div>

              {/* Bottom line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${m.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Markets;