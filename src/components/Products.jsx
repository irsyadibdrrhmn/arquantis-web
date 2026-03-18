const products = [
  {
    icon: "⬡",
    title: "Algoritma Forex",
    desc: "Strategi otomatis berbasis momentum, mean reversion, dan liquidity pattern pada pasar valuta asing global.",
    color: "#00e5ff",
    tags: ["Momentum", "Mean Reversion", "FX"],
    metrics: [{ label: "Return", val: "+28.4%" }, { label: "Sharpe", val: "1.80" }],
  },
  {
    icon: "◈",
    title: "Algoritma Crypto",
    desc: "Model kuantitatif untuk pasar digital yang memanfaatkan volatilitas tinggi dan peluang arbitrase sistematis.",
    color: "#c9a45c",
    tags: ["Volatility", "Arbitrage", "DeFi"],
    metrics: [{ label: "Return", val: "+41.2%" }, { label: "Sharpe", val: "1.90" }],
  },
  {
    icon: "◉",
    title: "Platform Analitik",
    desc: "Dashboard observasi performa, monitoring risiko, dan evaluasi strategi untuk kebutuhan institusional.",
    color: "#ff2d78",
    tags: ["Analytics", "Risk", "Dashboard"],
    metrics: [{ label: "Uptime", val: "99.97%" }, { label: "Latency", val: "<1ms" }],
  },
];

const Products = () => {
  return (
    <section className="relative bg-[#081526] py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,229,255,0.3)] to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(201,164,92,0.5)]" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#c9a45c]">// Solutions</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(201,164,92,0.5)]" />
          </div>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            Solusi <span className="text-gradient-gold">Perdagangan</span>{" "}
            <span className="neon-cyan">Sistematis</span>
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {products.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(5,13,26,0.8)] p-8 card-hover group overflow-hidden flex flex-col"
            >
              {/* hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(ellipse at top left, ${item.color}0d 0%, transparent 60%)` }}
              />

              {/* Top border glow on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />

              {/* Icon */}
              <div
                className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl text-3xl border"
                style={{ color: item.color, borderColor: `${item.color}30`, backgroundColor: `${item.color}10`, textShadow: `0 0 16px ${item.color}` }}
              >
                {item.icon}
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-[#7a8fa6] mb-5 flex-1">{item.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="rounded-lg px-2.5 py-1 font-mono text-[9px] tracking-[0.15em] uppercase"
                    style={{ color: item.color, backgroundColor: `${item.color}12`, border: `1px solid ${item.color}20` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="flex gap-4 mb-6 pt-4 border-t border-[rgba(255,255,255,0.04)]">
                {item.metrics.map((m, j) => (
                  <div key={j}>
                    <div className="font-mono text-[9px] text-[#7a8fa6] uppercase tracking-widest">{m.label}</div>
                    <div className="font-display text-base font-bold mt-0.5" style={{ color: item.color, textShadow: `0 0 10px ${item.color}60` }}>
                      {m.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase transition-all group/btn"
                style={{ color: item.color }}
              >
                <span>Pelajari Lebih Lanjut</span>
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;