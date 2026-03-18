const performanceRows = [
  {
    strategy: "Trend Forex",
    asset: "Forex",
    return: "28%",
    drawdown: "12%",
    sharpe: "1.8",
  },
  {
    strategy: "Momentum Gold",
    asset: "Commodities",
    return: "34%",
    drawdown: "15%",
    sharpe: "1.6",
  },
  {
    strategy: "Crypto Momentum",
    asset: "Crypto",
    return: "41%",
    drawdown: "18%",
    sharpe: "1.9",
  },
];

const metrics = [
  {
    title: "Return Tahunan",
    desc: "Tingkat pertumbuhan majemuk tahunan (CAGR) dari strategi setelah memperhitungkan estimasi biaya transaksi dan slippage.",
  },
  {
    title: "Maximum Drawdown",
    desc: "Penurunan persentase terbesar dari puncak tertinggi ke titik terendah portofolio sebagai indikator toleransi risiko.",
  },
];

const Performance = () => {
  return (
    <section className="bg-[#F5F7FB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-[#C9A45C]">
            Metrics
          </p>

          <h2 className="mt-4 text-3xl font-bold text-[#081526] md:text-5xl">
            Kinerja & Evaluasi Strategi
          </h2>

          <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#5A6B7F]">
            Transparansi dalam pengukuran hasil adalah kunci. Kami menggunakan
            metrik standar industri untuk mengevaluasi ketahanan algoritma kami.
          </p>
        </div>

        <div className="mt-12 rounded-[28px] border border-[#C9A45C]/15 bg-white p-4 shadow-[0_12px_32px_rgba(8,21,38,0.08)] md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left">
              <thead>
                <tr className="border-b border-[#E5EAF1] bg-[#F8FAFC] text-sm text-[#5A6B7F]">
                  <th className="rounded-l-2xl px-4 py-4 font-semibold">
                    Nama Strategi
                  </th>
                  <th className="px-4 py-4 font-semibold">Kelas Aset</th>
                  <th className="px-4 py-4 font-semibold">
                    Target Return (Tahunan)
                  </th>
                  <th className="px-4 py-4 font-semibold">Max Drawdown</th>
                  <th className="rounded-r-2xl px-4 py-4 font-semibold">
                    Est. Sharpe Ratio
                  </th>
                </tr>
              </thead>

              <tbody>
                {performanceRows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#EEF2F6] last:border-b-0"
                  >
                    <td className="px-4 py-5 font-medium text-[#081526]">
                      {row.strategy}
                    </td>
                    <td className="px-4 py-5 text-[#5A6B7F]">{row.asset}</td>
                    <td className="px-4 py-5 font-semibold text-green-600">
                      {row.return}
                    </td>
                    <td className="px-4 py-5 font-semibold text-rose-500">
                      {row.drawdown}
                    </td>
                    <td className="px-4 py-5 text-[#081526]">{row.sharpe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-sm leading-7 text-[#6B7785]">
            <span className="font-semibold text-[#081526]">Disclaimer:</span>{" "}
            Data kinerja di atas hanya contoh ilustratif berdasarkan backtesting
            historis dan tidak menjamin hasil di masa depan. Kinerja aktual
            dapat bervariasi tergantung kondisi pasar dan parameter eksekusi.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="rounded-[28px] border border-[#C9A45C]/15 bg-white p-8 shadow-[0_12px_32px_rgba(8,21,38,0.08)]"
            >
              <h3 className="text-2xl font-bold text-[#081526]">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-[#5A6B7F]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performance;