const performanceRows = [
  { strategy: "Trend Forex", asset: "Forex", return: "+28.4%", drawdown: "-12.1%", sharpe: "1.80", color: "#00e5ff" },
  { strategy: "Momentum Gold", asset: "Commodities", return: "+34.1%", drawdown: "-15.3%", sharpe: "1.60", color: "#c9a45c" },
  { strategy: "Crypto Momentum", asset: "Crypto", return: "+41.2%", drawdown: "-18.7%", sharpe: "1.90", color: "#ff2d78" },
];

const metrics = [
  {
    title: "Return Tahunan",
    desc: "Tingkat pertumbuhan majemuk tahunan (CAGR) dari strategi setelah memperhitungkan estimasi biaya transaksi dan slippage.",
    icon: "◈", color: "#00e5ff",
  },
  {
    title: "Maximum Drawdown",
    desc: "Penurunan persentase terbesar dari puncak tertinggi ke titik terendah portofolio sebagai indikator toleransi risiko.",
    icon: "◉", color: "#ff2d78",
  },
];

const Performance = () => {
  return (
    <section className="relative bg-[#050d1a] py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-[#00e5ff] opacity-[0.02] blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[rgba(0,229,255,0.5)]" />
            <span className="font-mono text-[10px] tracking-[0.35em] uppercase text-[#00e5ff]">// Performance_Metrics</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[rgba(0,229,255,0.5)]" />
          </div>
          <h2 className="font-display text-3xl font-black text-white md:text-5xl">
            Kinerja & <span className="neon-cyan">Evaluasi</span> Strategi
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#7a8fa6]">
            Transparansi dalam pengukuran hasil adalah kunci. Kami menggunakan metrik standar industri.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-[rgba(0,229,255,0.12)] bg-[rgba(8,21,38,0.7)] backdrop-blur overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.04)]">
          {/* Table header */}
          <div className="border-b border-[rgba(255,255,255,0.04)] bg-[rgba(0,229,255,0.03)] px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-[#00e5ff] animate-pulse shadow-[0_0_6px_#00e5ff]" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-[#00e5ff]">
                Live Strategy Performance Dashboard
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.04)]">
                  {["Nama Strategi", "Kelas Aset", "Return (Tahunan)", "Max Drawdown", "Sharpe Ratio"].map((h, i) => (
                    <th key={i} className="px-6 py-4 text-left font-mono text-[9px] tracking-[0.25em] uppercase text-[#7a8fa6]">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {performanceRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-[rgba(255,255,255,0.03)] hover:bg-[rgba(255,255,255,0.02)] transition-colors group"
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: row.color, boxShadow: `0 0 6px ${row.color}` }}
                        />
                        <span className="font-semibold text-white">{row.strategy}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className="rounded-lg px-2.5 py-1 font-mono text-[10px] tracking-[0.1em]"
                        style={{ color: row.color, backgroundColor: `${row.color}12` }}
                      >
                        {row.asset}
                      </span>
                    </td>
                    <td className="px-6 py-5 font-mono font-bold text-[#00e5ff]" style={{ textShadow: "0 0 8px rgba(0,229,255,0.4)" }}>
                      {row.return}
                    </td>
                    <td className="px-6 py-5 font-mono font-bold text-[#ff2d78]">
                      {row.drawdown}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="h-1.5 w-16 rounded-full bg-[rgba(255,255,255,0.06)]">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${(parseFloat(row.sharpe) / 2) * 100}%`,
                              background: `linear-gradient(90deg, ${row.color}80, ${row.color})`,
                            }}
                          />
                        </div>
                        <span className="font-mono text-sm text-white">{row.sharpe}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 border-t border-[rgba(255,255,255,0.03)]">
            <p className="font-mono text-[9px] text-[#3a5070] leading-5">
              ⚠ DISCLAIMER: Data kinerja di atas hanya contoh ilustratif berdasarkan backtesting historis dan tidak menjamin hasil di masa depan. Kinerja aktual dapat bervariasi.
            </p>
          </div>
        </div>

        {/* Metric cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {metrics.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(8,21,38,0.6)] p-8 card-hover"
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl text-xl border"
                style={{ color: item.color, borderColor: `${item.color}30`, backgroundColor: `${item.color}10`, textShadow: `0 0 10px ${item.color}` }}
              >
                {item.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm leading-7 text-[#7a8fa6]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;