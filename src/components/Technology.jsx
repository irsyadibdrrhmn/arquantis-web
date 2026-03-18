const Technology = () => {
  return (
    <section className="bg-[#050B14] py-24">
      <div className="mx-auto max-w-6xl space-y-16 px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-56 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Trading Engine
            </p>
            <h3 className="mt-3 text-2xl font-bold">Mesin Eksekusi Modern</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✔ FIX API latency rendah</li>
              <li>✔ Smart order routing</li>
              <li>✔ Slippage control</li>
              <li>✔ Modular microservices architecture</li>
            </ul>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Machine Learning
            </p>
            <h3 className="mt-3 text-2xl font-bold">Model Adaptif Berbasis AI</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✔ Neural network forecasting</li>
              <li>✔ Feature engineering pipeline</li>
              <li>✔ Sentiment analysis</li>
              <li>✔ Reinforcement learning experimentation</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-56 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          </div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="h-56 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10"></div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Risk Layer
            </p>
            <h3 className="mt-3 text-2xl font-bold">
              Manajemen Risiko Real-Time
            </h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>✔ Value at Risk (VaR)</li>
              <li>✔ Kill-switch automation</li>
              <li>✔ Portfolio diversification signals</li>
              <li>✔ Real-time exposure monitoring</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;