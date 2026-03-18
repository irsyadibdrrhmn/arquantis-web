const Performance = () => {
  return (
    <section className="bg-[#050B14] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold">Kinerja Strategi</h2>
        <p className="mt-3 text-center text-gray-400">
          Snapshot performa dari beberapa pendekatan strategi utama.
        </p>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10 bg-white/5">
          <table className="w-full min-w-[700px] text-left">
            <thead className="border-b border-white/10 bg-white/5 text-sm text-gray-300">
              <tr>
                <th className="p-4">Strategi</th>
                <th className="p-4">Kelas Aset</th>
                <th className="p-4">Return</th>
                <th className="p-4">Drawdown</th>
                <th className="p-4">Sharpe</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-white/10">
                <td className="p-4">Trend Forex</td>
                <td className="p-4">Forex</td>
                <td className="p-4 text-green-400">28%</td>
                <td className="p-4 text-red-400">12%</td>
                <td className="p-4">1.8</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-4">Momentum Gold</td>
                <td className="p-4">Commodities</td>
                <td className="p-4 text-green-400">34%</td>
                <td className="p-4 text-red-400">15%</td>
                <td className="p-4">1.6</td>
              </tr>
              <tr>
                <td className="p-4">Crypto Momentum</td>
                <td className="p-4">Crypto</td>
                <td className="p-4 text-green-400">41%</td>
                <td className="p-4 text-red-400">18%</td>
                <td className="p-4">1.9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Performance;